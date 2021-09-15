<template>
  <div class="footer">
    <div class="footer-container">
      <div class="row">
        <div class="col-4">
          <p class="footer-title">Registrations</p>
          <div class="d-flex mb-4">
            <img :src="require('../assets/arc.svg')" alt="" />
            <div>
              <p>Airlines Reporting Corporation</p>
              <span>Reg. # 05615352</span>
            </div>
          </div>
          <div class="d-flex mb-4">
            <img :src="require('../assets/vasta.svg')" alt="" />
            <div>
              <p>American Society of Travel Agents</p>
              <span>Reg. # 900272552</span>
            </div>
          </div>
          <div class="d-flex mb-4">
            <img :src="require('../assets/attorney.svg')" alt="" />
            <div>
              <p>California Seller of Travel</p>
              <span>Lic. # 2116669</span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="mb-5">
            <p class="footer-title">Contacts</p>
            <p class="m-0">Australia — Sydney: 1800-751-503</p>
            <p class="m-0">USA — Toll Free: 866-346-7848</p>
            <p class="m-0">E-mail: gettickets@voyagu.com</p>
          </div>
          <div>
            <p class="footer-title">Mailing Adress</p>
            <p class="m-0">533 Airport Boulevard</p>
            <p class="m-0">Suite 400</p>
            <p class="m-0">Burlingame, CA 94010</p>
          </div>
        </div>
        <div class="col-4 ml-3 pl-3">
          <p class="footer-title">Leave a message</p>
          <div class="message-input-container">
            <input
              v-model="contact_us_data.name"
              placeholder="Full Name"
              class="message-input"
              type="text"
            />
          </div>
          <div class="message-input-container">
            <input
              v-model="contact_us_data.mail"
              placeholder="E-mail"
              class="message-input"
              type="text"
            />
          </div>
          <div class="message-input-container">
            <input
              v-model="contact_us_data.phone"
              placeholder="Phone"
              class="message-input"
              type="text"
            />
          </div>
          <div class="message-input-container">
            <input
              v-model="contact_us_data.comment"
              placeholder="Comment"
              class="message-input"
              type="text"
            />
          </div>
          <div class="d-flex mt-5">
            <input
              v-model="contact_us_data.agree"
              class="agree-checkbox"
              type="checkbox"
            />
            <p class="personal-agree">
              I agree to have my personal data processed
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-4 d-flex align-items-end">
          <img
            class="footer-logo"
            :src="require('../assets/footer_logo.svg')"
            alt=""
          />
        </div>
        <div class="col-4 d-flex align-items-end">
          <div class="d-flex">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
        <div class="col-4">
          <button @click="contactUs" class="contact-btn">Contact us</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "footer",
  data() {
    return {
      contact_us_data: {
        name: "",
        mail: "",
        phone: "",
        comment: "",
        agree: false,
      },
    };
  },
  methods: {
    contactUs() {
      if (this.contact_us_data.agree !== false) {
        axios
          .post("", {
            data: this.contact_us_data,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoper>
.footer {
  background: #2f2c2c;
  padding: 100px 130px 100px 150px;
  .footer-title {
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  img {
    width: 36px;
    height: 36px;
    margin-right: 30px;
    opacity: 0.5;
  }
  p {
    color: #c2c2c2;
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    margin-top: 5px;
  }
  span {
    color: #777777;
    font-size: 16px;
    font-weight: 300;
  }
  .message-input-container {
    border-bottom: solid 1px #7a7a7a;
    padding-bottom: 10px;
    width: 360px;
    margin-bottom: 20px;
  }
  .message-input {
    border: none;
    outline: none;
    background: #2f2c2c;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    width: 360px;
    font-weight: 300;
    font-family: "Switzer";
  }
  .personal-agree {
    padding: 0 20px;
    margin-top: -2px;
  }
  .agree-checkbox {
    width: 20px;
    height: 20px;
  }
  .footer-logo {
    width: 100px;
    opacity: 1;
  }
  a {
    color: rgb(99, 99, 99);
    padding: 0 30px 0 0;
  }
  .contact-btn {
    background: #fff;
    color: #2f2c2c;
    border-radius: 50px;
    padding: 20px 60px;
    font-size: 20px;
    font-weight: 500;
    border: none !important;
  }
}

.footer-container {
  width: 1160px;
  margin: 0 auto;
}
</style>