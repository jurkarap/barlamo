<template>
  <div class="form">
    <div class="container-fluid form-title main-block">
      <h1>
        Flying <span class="buss">business</span> class?
      </h1>
      <div class="container-fluid p-0">
        <div class="row align-items-end">
          <div class="col-6 p-0">
            <p>We can save you up to 30% off</p>
          </div>
          <div class="col-6 p-0 text-end">
            <img :src="require('../assets/plane_beige.gif')" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid form-body">
      <div class="container-fluid">
        <div class="row selectors">
          <div
            :class="{ activeSelector: activeSelector == item.name }"
            v-for="item in selectors"
            :key="item.name"
            @click="changeSelector(item)"
            class="col-2 move-class"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="row justify-content-evenly mb-4">
          <div class="col-3 order-1 form-input p-0">
            <Select
              :class="{ invalid: !inval.from }"
              :selected="selectedFrom"
              :placeholder="from"
              @select="fromSelected"
              @changeInput="changeInputFrom(value)"
            />
            <div v-if="!inval.from" class="required">
              <span>Field is required</span>
            </div>
          </div>
          <div @click="changeOrder()" class="col-1 order-2 swap">
            <img :src="require('../assets/swap.svg')" alt="" />
          </div>
          <div class="col-3 order-3 form-input">
            <Select
              :class="{ invalid: !inval.to }"
              :selected="selectedTo"
              :placeholder="to"
              @select="toSelected"
              @changeInput="changeInputTo(value)"
            />
            <div v-if="!inval.to" class="required">
              <span>Field is required</span>
            </div>
          </div>
          <div class="col-2 order-4 form-input">
            <div class="date-input">
              <Datepicker
                class="date-picker"
                :lowerLimit="fromDate"
                v-model="picked"
              />
              <img :src="require('../assets/calendar.svg')" alt="" />
            </div>
          </div>
          <div class="col-3 order-5 form-input count">
            <div class="container-fluid p-0">
              <div class="row count-row">
                <div
                  @click="selectCount(count.index)"
                  :class="{ active: isActive == count.index }"
                  v-for="count in counts"
                  :key="count.value"
                  class="col-3"
                >
                  {{ count.value }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="trueCount >= 1" class="row justify-content-evenly mb-5">
          <div class="col-3 contant-container">
            <div
              :class="{ invalid: !inval.fName }"
              class="about-input-container px-0"
            >
              <input
                v-model="input_data.fName"
                @input="inval.fName = true"
                class="about-input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div v-if="!inval.fName" class="required">
              <span>Field is required</span>
            </div>
          </div>

          <div class="col-1 divider"></div>
          <div class="col-3 contant-container">
            <div
              :class="{ invalid: !inval.lName }"
              class="about-input-container px-0"
            >
              <input
                v-model="input_data.lName"
                @input="inval.lName = true"
                class="about-input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div v-if="!inval.lName" class="required">
              <span>Field is required</span>
            </div>
          </div>
          <div class="col-2 contant-container">
            <div
              :class="{ invalid: !inval.email }"
              class="about-input-container px-0"
            >
              <input
                v-model="input_data.email"
                @input="inval.email = true"
                class="about-input"
                type="email"
                placeholder="E-mail"
              />
            </div>
            <div v-if="!inval.email" class="required">
              <span>Field is required</span>
            </div>
          </div>
          <div class="col-2 contant-container">
            <div
              :class="{ invalid: !inval.phone }"
              class="col-3 phone-input-container px-0"
            >
              <!--               <input
                v-model="input_data.number"
                @input="inval.phone = true"
                v-maska="['+# (###) ###-##-##', '+1 (###) ###-##-##']"
                class="about-input"
                type="text"
                placeholder="Phone"
                id="phone"
              /> -->
              <vue-tel-input
                v-model="number"
                :value="input_data.number"
                @input="inputfs"
                mode="international"
              ></vue-tel-input>
            </div>
            <div v-if="!inval.phone" class="required">
              <span>Field is required</span>
            </div>
          </div>
        </div>
        <div class="row justify-content-between marks-container">
          <div class="col-3 d-flex align-items-center justify-content-between">
            <div v-for="item in marks" :key="item.img" class="marks">
              <img :src="require(`../assets/${item.img}`)" alt="" />
            </div>
          </div>
          <div class="col-6 text-end">
            <button @click="validation" class="btn quote-bnt">
              Get a quote
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Select from "./custon-select.vue";
import Datepicker from "vue3-datepicker";
import { ref } from "vue";
import axios from "axios";
import airports from "../airports";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
export default {
  name: "form",
  components: {
    Select,
    Datepicker,
    VueTelInput,
  },
  data() {
    return {
      number: ref(null),
      from: "From",
      to: "To",
      picked: ref(new Date()),
      fromDate: ref(new Date()),
      placeholder: "Departure",
      count: "",
      isActive: 1,
      activeSelector: "BUSINESS CLASS",
      flyingClass: "BUSINESS",
      trueCount: 0,
      currentLocation: "",
      numb: "",
      selectors: [
        { name: "BUSINESS CLASS", title: "BUSINESS" },
        { name: "FIRST CLASS", title: "FIRST" },
        { name: "ECONOMY", title: "ECONOMY" },
      ],
      counts: [
        { value: "1", index: 1 },
        { value: "2", index: 2 },
        { value: "3", index: 3 },
        { value: "4+", index: 4 },
      ],
      selectedFrom: "",
      selectedTo: "",
      input_data: {
        goFrom: "",
        goTo: "",
        date: "",
        count: 1,
        class: "BUSINESS",
        fName: "",
        lName: "",
        email: "",
        number: '',
      },
      marks: [
        { img: "Vector-1.svg" },
        { img: "Vector-2.svg" },
        { img: "Vector-3.svg" },
        { img: "Vector-4.svg" },
      ],
      inval: {
        to: true,
        from: true,
        fName: true,
        lName: true,
        email: true,
        phone: true,
      },
    };
  },
  methods: {
    selectCount(index) {
      this.isActive = index;
      this.input_data.count = index;
    },
    changeOrder() {
      let to = this.input_data.goTo;
      let from = this.input_data.goFrom;
      this.input_data.goTo = from;
      this.input_data.goFrom = to;
      this.selectedTo = from;
      this.selectedFrom = to;
      console.log(this.input_data);
    },
    fromSelected(option) {
      this.selectedFrom = option.input;
      this.input_data.goFrom = option.input;
      this.trueCount++;
    },
    toSelected(option) {
      this.selectedTo = option.input;
      this.input_data.goTo = option.input;
      this.trueCount++;
    },
    changeSelector(item) {
      this.activeSelector = item.name;
      this.flyingClass = item.title;
      this.input_data.class = item.name;
    },
    changeInputFrom(value) {
      this.input_data.from = value;
      this.inval.from = true;
    },
    changeInputTo(value) {
      this.input_data.to = value;
      this.inval.to = true;
    },
    getGeoInfo() {
      axios
        .get("https://ipapi.co/json/")
        .then((response) => {
          let data = response.data;
          this.currentLocation = data.city;
          this.changeFromByIp();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeFromByIp() {
      if (this.currentLocation !== "") {
        for (let item of airports) {
          if (item.default == this.currentLocation) {
            this.selectedFrom = item.input;
            this.input_data.goFrom = item.input;
          }
        }
      }
    },
    validation() {
      this.input_data.data = this.picked;
      if (this.input_data.goFrom === "") {
        this.inval.from = false;
        this.allVal = false;
      } else {
        this.inval.from = true;
      }
      if (this.input_data.goTo === "") {
        this.inval.to = false;
      } else {
        this.inval.to = true;
      }
      if (this.input_data.fName === "") {
        this.inval.fName = false;
      } else {
        this.inval.fName = true;
      }
      if (this.input_data.lName === "") {
        this.inval.lName = false;
      } else {
        this.inval.lName = true;
      }
      if (this.input_data.number === "") {
        this.inval.phone = false;
      } else {
        this.inval.phone = true;
      }
      if (this.input_data.email === "") {
        this.inval.email = false;
      } else {
        this.inval.email = true;
      }
      this.sendData();
    },
    sendData() {
      let allValues = Object.values(this.inval);
      let allVal = allValues.includes(false);
      if (!allVal) {
        axios
          .post(
            "https://www.teamdesk.net/secure/api/v2/33111/Client/create.json",
            {
              data: this.input_data,
            }
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    inputfs(phone, phoneObject, input) {
      this.inval.phone = true;
      if (phoneObject?.formatted) {
        this.input_data.number = phoneObject.formatted;
      } else {
        let x = phone + input;
        x = '';
        console.log(x)
      }
    },
  },
  mounted() {
    this.getGeoInfo();
  },
};
</script>

<style lang="scss">
.row {
  --bs-gutter-x: 0 !important;
}

.main-block {
  width: 1160px !important;
  padding: 0 !important;
}

.buss {
  font-family: "Sentient";
}

.invalid {
  border-bottom: solid 2px red !important;
  input {
    &::placeholder {
      color: red !important;
      opacity: 0.5;
    }
  }
}

.form-title {
  margin-bottom: 50px;
  h1 {
    font-family: "Sentient", serif;
    font-size: 72px !important;
    font-weight: 400;
    color: #2f2c2c;
    margin-bottom: 30px;
    span {
      font-size: 72px;
      color: rgb(168, 2, 2);
    }
  }
  p {
    font-size: 32px;
    font-weight: 300;
    margin: 0;
  }
  img {
    width: 240px;
    height: 80px;
  }
}

.vue-tel-input {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}

.vti__dropdown {
  display: none !important;
}
.vti__input {
  font-size: 20px !important;
  font-weight: 300 !important;
  font-family: "Switzer" !important;
  color: #2f2c2c !important;
  opacity: 1 !important;
}

.vti__input {
  &::placeholder {
    font-size: 20px !important;
    font-weight: 300 !important;
    font-family: "Switzer" !important;
    color: #2f2c2c !important;
    opacity: 0.7 !important;
  }
}

.form-body {
  background: #ffffff;
  width: 1240px !important;
  border-radius: 40px;
  padding: 40px;
  .selectors {
    margin-bottom: 45px;
  }
  .move-class {
    text-align: center;
    width: 165px;
    background: #fff;
    padding: 8px;
    border-radius: 22px;
    margin: 0;
    cursor: pointer;
  }
  .activeSelector {
    background: #ffe7d8;
  }
  .col-3 {
    background: #fff;
  }
  .swap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    padding: 5px 15px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .form-input {
    width: 256px;
    padding: 0;
  }

  .date-input {
    display: flex;
    width: 256px;
    cursor: pointer;
    background: inherit;
    padding-bottom: 10px;
    border-bottom: solid 2px #dadada;
    z-index: 10;
    .date-picker {
      border: solid 1px #fff;
      outline: none;
      background: transparent;
      color: #2f2c2c;
      cursor: pointer;
      font-size: 20px;
      width: 256px;
      font-weight: 300;
      font-family: "Switzer";
    }
  }

  .v3dp {
    &__datepicker {
      width: 230px;
    }
    &__heading__button {
      border-radius: 20px;
      margin: 0 7px;
    }
    &__popout {
      width: 346px !important;
      border-radius: 20px !important;
      margin-top: 35px !important;
      box-shadow: 0px 16px 44px rgba(0, 0, 0, 0.07) !important;
    }
    &__elements {
      padding: 10px;
      span {
        width: 32px !important;
        height: 32px !important;
        margin: 0;
        text-align: center;
        font-size: 16px;
      }
    }
    &__subheading {
      padding: 0 10px;
    }
    &__divider {
      display: none;
    }
    &__heading__center {
      font-size: 20px;
      font-family: "Switzer";
      font-weight: 500;
    }
  }
  .count {
    .active {
      border-bottom: none;
      border-radius: 30px;
      background: #ffe7d8;
    }
    .count-row {
      width: 256px;
    }
    .col-3 {
      border-bottom: solid 2px #dadada;
      padding: 11px 0;
      width: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      cursor: pointer;
      margin-top: -10px;
      &:hover {
        border-bottom: solid 2px #ffffff;
        border-radius: 30px;
        background: #ffe7d8;
      }
    }
  }
  .about-input-container {
    border-bottom: solid 2px #dadada;
    padding-bottom: 10px;
    width: 256px;
  }
  .phone-input-container {
    border-bottom: solid 2px #dadada;
    padding-bottom: 11px;
    width: 256px;
  }
  .about-input {
    border: solid 1px #fff;
    outline: none;
    background: #fff;
    color: #2f2c2c;
    cursor: pointer;
    font-size: 20px;
    width: 245px;
    font-weight: 300;
    font-family: "Switzer";
  }
  .divider {
    width: 80px;
    padding: 5px 15px;
  }
  .quote-bnt {
    width: 288px;
    background: #a50515;
    color: #fff;
    padding: 20px 0;
    border-radius: 100px;
    font-size: 20px;
    &:hover {
      background: #2f2c2c;
      color: #fff;
    }
  }
  .marks-container {
    margin: 0 5px;
  }
  .marks {
    max-width: 100px;
    display: flex;
    justify-content: center;
    opacity: 0.4;
  }
}
.required {
  span {
    color: red;
  }
}
.contant-container {
  padding-bottom: 10px;
  width: 256px !important;
}
</style>