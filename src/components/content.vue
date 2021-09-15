<template>
  <div class="content">
    <div class="container-fluid p-0">
      <div class="row justify-content-center expert-container main-block">
        <div class="col-8">
          <h1>Get your,</h1>
          <h1>own personal</h1>
          <h1><span>travel expert</span></h1>
          <h1>at no extra cost</h1>
        </div>
        <div class="col-4">
          <p class="mt-3">
            By booking with the same person every time who specializes in
            booking travel you receive guaranteed savings and ongoing support
          </p>
        </div>
      </div>
      <div class="white-bg">
        <div class="row justify-content-between ready-to-start">
          <div class="col">
            <h1>Ready to get <span>started?</span></h1>
          </div>
          <div class="col fly-man">
            <img :src="require('../assets/fly-man.svg')" alt="" />
          </div>
        </div>
      </div>
      <div class="white-bg">
        <div class="row get-start">
          <div v-for="item in toStart" :key="item.step" class="col-3">
            <div class="step">
              {{ item.step }}
            </div>
            <div class="title">
              {{ item.title }}
            </div>
            <div class="content">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
      <div class="white-bg">
        <div class="row airlines-title">
          <div class="col-6">
            <h1>Fly with your <span>favorite</span> airline</h1>
          </div>
          <div class="col-6"></div>
        </div>

        <div class="row justify-content-between airlines">
          <div class="row">
            <div
              v-for="img in airlines"
              :key="img.src"
              class="col-3 d-flex justify-content-center"
            >
              <img
                v-show="hoverIdx !== img.idx"
                @mouseenter="hoverAirline(img)"
                :src="require(`../assets/${img.src}`)"
                alt=""
              />
              <img
                v-show="hoverIdx === img.idx"
                @mouseleave="blurAirline()"
                :src="require(`../assets/${img.color}`)"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="white-bg">
        <div class="row get-more-title">
          <div class="col-10">
            <h1>Get <span>more</span> with Voyagu</h1>
          </div>
        </div>
      </div>

      <div class="white">
        <div class="girl-block">
          <div class="row justify-content-end">
            <div class="fly-girl">
              <div class="col fly-girl-img">
                <img :src="require('../assets/fly-girl.svg')" alt="" />
              </div>
            </div>
            <div class="col-6 features">
              <div
                v-for="item in features"
                :key="item.idx"
                class="container-fluid p-0 g-0"
              >
                <div class="row">
                  <div class="col-3">
                    <img :src="require(`../assets/${item.img}`)" alt="" />
                  </div>
                  <div class="col-6">
                    <p>{{ item.title }}</p>
                    <span>{{ item.content }}</span>
                  </div>
                </div>
              </div>
              <button @click="slideToForm" class="btn deal-btn">
                Get a quote
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="white-bg end-content">
        <div class="row feelings">
          <div class="col-5">
            <h1>The feelings are <span>mutual</span></h1>
          </div>
        </div>
        <div class="reviews-container">
        <div class="row reviews justify-content-between">
          <div v-for="item in reviews" :key="item.idx" class="col-3">
            <img :src="require(`../assets/${item.img}`)" alt="" />
            <p>{{ item.review }}</p>
            <span>{{ item.name }}</span>
            <br />
            <span>{{ item.location }}</span>
          </div>
        </div>
        </div>

        <div class="row deals">
          <div class="col-8">
            <h1><span>Deals</span> we’ve landed for our clients</h1>
          </div>
        </div>
              <div class="row deals-table justify-content-center">
        <div class="col-8 deals-example">
          <div v-for="item in deals" :key="item.idx">
            <div
              v-if="currentDeal === item.idx"
              class="container-fluid p-0 g-0"
            >
              <div class="row labels">
                <div class="col-8">From</div>
                <div class="col-4">To</div>
              </div>
              <div class="row from-to">
                <div class="col-8 line">{{ item.from }}</div>
                <div class="col-4 line">{{ item.to }}</div>
              </div>
              <div class="row labels mt-3">
                <div class="col-8">Online price</div>
                <div class="col-4">Our price</div>
              </div>
              <div class="row price">
                <div class="col-8 line">{{ item.online_price }}</div>
                <div class="col-4 line">{{ item.our_price }}</div>
              </div>
              <div class="row labels mt-3">
                <div class="col">Savings</div>
              </div>
              <div class="row profit">
                <div class="col-4 line">{{ item.saving }}</div>
                <div
                  class="col-4 d-flex align-items-center justify-content-end"
                >
                  <img :src="require('../assets/airplane.svg')" alt="" />
                </div>
                <div
                  class="col-4 d-flex align-items-center justify-content-end"
                >
                  <img
                    v-show="hoverArrow !== 1"
                    :src="require('../assets/deals_arrow_left.svg')"
                    @mouseenter="hoverArrow = 1"
                    class="mx-3"
                    alt=""
                  />
                  <img
                    v-show="hoverArrow == 1"
                    @mouseleave="hoverArrow = 0"
                    @click="decrDeal"
                    :src="require('../assets/deals_fill_arrow_left.svg')"
                    class="mx-3"
                    alt=""
                  />
                  <img
                    v-show="hoverArrow !== 2"
                    @mouseenter="hoverArrow = 2"
                    :src="require('../assets/deals_arrow_right.svg')"
                    alt=""
                  />
                  <img
                    v-show="hoverArrow == 2"
                    @mouseleave="hoverArrow = 0"
                    @click="incrDeal"
                    :src="require('../assets/deals_fill_arrow_right.svg')"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 get-quote-container text-center">
          <img :src="require('../assets/buildings.svg')" alt="" />
          <button @click="slideToForm" class="btn deal-btn">Get a quote</button>
        </div>
      </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "content",
  components: {},
  data() {
    return {
      toStart: [
        {
          step: "1",
          title: "Send us some info",
          content:
            "We just need to know the basics: where you’re headed, when, and how to reach you",
        },
        {
          step: "2",
          title: "Speak to expert",
          content:
            "You get the best price for your flight when we can speak with you and get all the details",
        },
        {
          step: "3",
          title: "Save money&time ",
          content:
            "You shouldn’t have to spend hours searching for the best rate. That’s what we’re here for",
        },
      ],
      airlines: [
        { src: "airline-1.svg", color: "colorline-1.svg", idx: "1" },
        { src: "airline-2.svg", color: "colorline-2.svg", idx: "2" },
        { src: "airline-3.svg", color: "colorline-3.svg", idx: "3" },
        { src: "airline-4.svg", color: "colorline-4.svg", idx: "4" },
        { src: "airline-5.svg", color: "colorline-5.svg", idx: "5" },
        { src: "airline-6.svg", color: "colorline-6.svg", idx: "6" },
        { src: "airline-7.svg", color: "colorline-7.svg", idx: "7" },
        { src: "airline-8.svg", color: "colorline-8.svg", idx: "8" },
        { src: "airline-9.svg", color: "colorline-9.svg", idx: "9" },
        { src: "airline-10.svg", color: "colorline-10.svg", idx: "10" },
        { src: "airline-11.svg", color: "colorline-11.svg", idx: "11" },
        { src: "airline-12.svg", color: "colorline-12.svg", idx: "12" },
      ],
      features: [
        {
          img: "feature-1.svg",
          title: "Saving",
          content:
            "Our travel experts have an unparalleled commitment and ability to offer the best price in the industry, no matter what.",
          idx: 1,
        },
        {
          img: "feature-2.svg",
          title: "Expertise",
          content:
            "Our agents have strong professional caliber. Think of us as a very reliable acquaintance who has major connections in the travel industry.",
          idx: 2,
        },
        {
          img: "feature-3.svg",
          title: "Care",
          content:
            "We are obsessed with creating  amazing travel experiences through a customized human approach backed by reliable expertise",
          idx: 3,
        },
      ],
      reviews: [
        {
          img: "review-1.svg",
          review:
            "If you are looking for a company that will make you feel like you are the most important client that they have.",
          name: "Doug Jackson, CEO",
          location: "Houston to Maasai Mara",
          idx: 1,
        },
        {
          img: "review-2.svg",
          review:
            "I’ve found Voyagu to be an excellent organization to work with and I highly recommend them for your important business travel.",
          name: "Christopher John Barker, CEO",
          location: "Phoenix to Bangkok",
          idx: 2,
        },
        {
          img: "review-3.svg",
          review:
            "I have traveled all around the world routinely for the past 30 years and have not met with better service and support than I have with Voyagu.",
          name: "Charles W. Naslund, Director",
          location: "Christchurch to Albuquerque",
          idx: 3,
        },
      ],
      deals: [
        {
          from: "San Francisco",
          to: "London",
          online_price: "$5000",
          our_price: "$2500",
          saving: "$2500 (50%)",
          idx: 1,
        },
        {
          from: "Kyiv",
          to: "New York",
          online_price: "$4000",
          our_price: "$2000",
          saving: "$2000 (50%)",
          idx: 2,
        },
        {
          from: "Memphis",
          to: "Lviv",
          online_price: "$8000",
          our_price: "$4800",
          saving: "$3200 (40%)",
          idx: 3,
        },
      ],
      hoverIdx: 0,
      featureIdx: 1,
      currentDeal: 1,
      hoverArrow: 0,
      offbg: false,
      whiteHide: false,
    };
  },
  props: {
    girlScrolled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hoverAirline(img) {
      this.hoverIdx = img.idx;
    },
    blurAirline() {
      this.hoverIdx = 0;
    },
    slide() {
      if (this.featureIdx < 3) {
        this.featureIdx++;
      } else {
        this.featureIdx = 3;
        this.$emit("girlScrolled");
      }
    },
    overHidden() {
      document.querySelector("body").style.overflow = "hidden";
    },
    overScroll() {
      document.querySelector("body").style.overflow = "scroll";
    },
    incrDeal() {
      if (this.currentDeal < 3) {
        this.currentDeal++;
      } else {
        this.currentDeal = 1;
      }
    },
    decrDeal() {
      if (this.currentDeal > 1) {
        this.currentDeal--;
      } else {
        this.currentDeal = 3;
      }
    },
    slideToForm() {
      window.scrollBy(0, -5500);
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 72px;
  font-family: "Sentient";
  font-weight: 400;
  color: #2f2c2c;
  span {
    color: #a50515;
    font-family: "Sentient";
  }
}
.expert-container {
  margin: 180px auto;
  p {
    color: #2f2c2c;
    font-size: 20px;
    font-weight: 300;
  }
}

.ready-to-start {
  width: 1160px;
  padding: 140px 0 106px;
  margin: 0 auto;
  background: #ffffff;
  .fly-man {
    position: relative;
    img {
      position: absolute;
      top: -250px;
    }
  }
}

.get-start {
  width: 1160px;
  background: #fff;
  justify-content: space-between;
  margin: 0 auto;
  .col-3 {
    background: #fcf5f0;
    border-radius: 20px;
    padding: 40px;
    margin-top: -20px;
    width: 30% !important;
    .step {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      padding: 10px;
      border-radius: 50px;
      width: 80px;
      height: 80px;
      font-size: 32px;
      margin-bottom: 30px;
    }
    .title {
      border: none !important;
      cursor: auto;
      background: #fcf5f0;
      color: #2f2c2c;
      font-size: 32px;
      font-weight: 400;
      width: 100%;
      margin-bottom: 20px;
    }
    .content {
      font-size: 20px;
      color: #2f2c2c;
      font-weight: 300;
    }
  }
}

.airlines-title {
  padding: 180px 0 0;
  background: #fff;
  width: 1160px;
  margin: 0 auto;
}

.airlines {
  padding: 180px 0;
  background: #fff;
  width: 1360px;
  margin: 0 auto;
  img {
    max-width: 140px;
    margin-bottom: 90px;
  }
}

.white-bg {
  background: #fff;
}

.end-content {
  padding: 0 0 100px;
}

.fly-girl {
  background: #fcf5f0;
  padding: 100px 100px 0;
  border-top-left-radius: 220px;
  .fly-girl-img {
    margin-bottom: -25px;
  }
}

.get-more-title {
  width: 1160px;
  margin: 0 auto;
  padding: 0 0 50px;
  background: #fff;
}

.white {
  background: #fff;
}

.org-bottom {
  background: #fff;
  height: 100px;
  z-index: 11 !important;
}

.girl-block {
  width: 1360px;
  margin: 0 auto;
}

.features {
  z-index: 2;
  margin-top: -464px;
  overflow-y: auto;
  height: 460px;
  .deal-btn {
    background: #a50515;
    color: #fff;
    border-radius: 50px;
    padding: 15px 60px;
    font-size: 20px;
    font-weight: 500;
    margin-top: -180px;
    margin-left: 200px;
    border: none !important;
  }
  .row {
    margin-bottom: 150px;
    margin-top: 192px;
    img {
      margin-top: -70px;
      margin-left: 30px;
    }
    p {
      font-family: "Sentient";
      font-weight: 400;
      font-size: 32px;
      color: #2f2c2c;
    }
    span {
      font-size: 20px;
      font-weight: 300;
      color: #2f2c2c;
    }
  }
}

.feelings {
  width: 1160px;
  margin: 0 auto;
  padding: 180px 0 80px;
  background: #fff;
}

.reviews-container {
  width: 1160px;
  margin: 0 auto;
}

.reviews {
  background: #fff;
  padding: 0;

  .col-3 {
    background: #fcf5f0;
    width: 360px;
    padding: 40px;
    border-radius: 20px;
    transition-duration: 1s;
    width: 30% !important;
    &:hover {
      transform: translateY(-5%);
    }
    img {
      margin-bottom: 40px;
    }
    p {
      font-size: 20px;
      font-weight: 300;
      color: #2f2c2c;
    }
    span {
      width: 20px;
      font-size: 16px;
      font-weight: 300;
      color: #a50515;
    }
  }
}

.deals {
  background: #fff;
  padding: 180px 0 80px;
  width: 1160px;
  margin: 0 auto;
}

.deals-table {
  padding: 0 0 100px;
  background: #fff;
  width: 1160px;
  margin: 0 auto;
  .line {
    font-size: 32px;
    font-weight: 400;
    font-family: "Sentient";
    color: #2f2c2c;
  }
  .deals-example {
    background: #fcf5f0;
    padding: 50px 50px;
    border-radius: 20px;
  }
  .get-quote-container {
    background: #a50515;
    border-radius: 20px;
    padding: 40px;
    img {
      margin-right: -10px;
    }
    .deal-btn {
      background: #fff;
      color: #a50515;
      border-radius: 20px;
      padding: 5px 60px;
      font-size: 20px;
      font-weight: 500;
      margin-top: 80px;
      margin-left: -10px;
      border: none !important;
      &:hover {
        background: #a50515;
        color: #fff;
      }
    }
  }
  .labels {
    font-size: 16px;
    font-weight: 300;
    color: #2f2c2c;
    margin-bottom: 10px;
  }
  .from-to {
    border-bottom: 1px solid rgba(165, 5, 21, 0.2);
    padding-bottom: 10px;
  }
  .price {
    border-bottom: 1px solid rgba(165, 5, 21, 0.2);
    padding-bottom: 10px;
  }
  .profit {
    .line {
      color: #a50515;
    }
  }
}
</style>