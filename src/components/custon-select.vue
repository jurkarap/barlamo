<template>
  <div class="custom-select">
    <input
      v-model="inputVal"
      class="title"
      @click="visible = !visible"
      :placeholder="placeholder"
      @input="sort"
    />
    <img
      v-if="!visible"
      @click="visible = !visible"
      :src="require('../assets/arrow-down.svg')"
      alt=""
    />
    <img
      v-if="visible"
      @click="visible = !visible"
      :src="require('../assets/arrow-up.svg')"
      alt=""
    />
    <div class="options" v-if="visible">
      <div
        v-for="option in filteredOptions"
        :key="option.idx"
        @click="selectOption(option)"
        class="option"
      >
        <img
          class="option-img"
          :src="require(`../assets/${option.img}`)"
          alt=""
        />
        <p class="city">{{ option.city }}</p>
        <p class="airport">{{ option.airport }}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* import {airports} from "../airports.json"; */
import airports from "../airports.js";
export default {
  name: "custom-select",
  props: {
    selected: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputVal: "",
      visible: false,
      options: airports,
      filteredOptions: airports,
    };
  },
  watch: {
    selected: function() {
      return this.inputVal = this.selected
    }
  },
  methods: {
    selectOption(option) {
      this.visible = false;
      this.$emit("select", option);
      this.inputVal = option.input;
    },
    hideSelect() {
      this.visible = false;
    },
    sort() {
      this.$emit("changeInput", this.inputVal);
      let vm = this;
      if (this.inputVal !== "") {
        const filterCity = (query, item) => {
          return item.filter(
            (el) => el.input.toLowerCase().indexOf(query.toLowerCase()) > -1
            
          );
        };
        let filteredCity = filterCity(vm.inputVal, vm.options)
        this.filteredOptions = filteredCity
      } else {
        this.filteredOptions = this.options;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style lang="scss">
.custom-select {
  position: relative;
  width: 256px;
  cursor: pointer;
  background: #fff;
  padding-bottom: 10px;
  border-bottom: solid 2px #dadada;
  p {
    padding: 15px;
    margin: 0;
    &:hover {
      background: #ffffff;
    }
  }
}
.options {
  border-radius: 20px;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 2;
  max-height: 280px;
  width: 350px;
  overflow-y: scroll;
  box-shadow: 0px 16px 44px rgba(0, 0, 0, 0.07);
  &::-webkit-scrollbar {
    width: 4px;
    height: 3px;
  }
  &::-webkit-scrollbar-button {
    background: #666;
    visibility: hidden;
  }
  &::-webkit-scrollbar-thumb {
    background: #acabab;
  }
  &::-webkit-scrollbar-corner {
    height: 10px;
    background: #666;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background: #fcf5f0 !important;
  }
}
.title {
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

.option-img {
  width: 35px;
  height: 25px;
}
.option {
  background: #fcf5f0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  &:hover {
    background: #fff;
  }
}
.city {
  width: 240px;
  overflow-x: hidden;
  white-space: nowrap;
}
.airport {
  text-align: end;
}
</style>