<template>
  <div class="faq">
    <div class="container-fluid">
      <div class="row justify-content-between">
        <div class="col-4">
          <h1>FAQ</h1>
          <img :src="require('../assets/faq.svg')" alt="" />
        </div>
        <div class="col-6 ml-1">
          <div v-for="item in faq" :key="item.idx" class="question">
            <div
              class="d-flex my-3 justify-content-between align-items-center"
            >
              <p @click="contentIdx = item.idx" :class="{qactive: contentIdx === item.idx}" class="m-0">{{ item.title }}</p>
              <img @click="contentIdx = item.idx" v-if="contentIdx !== item.idx" :src="require('../assets/plus.svg')" alt="" />
              <img @click="contentIdx = 0" v-if="contentIdx === item.idx" :src="require('../assets/minus.svg')" alt="" />
            </div>
            <div v-if="contentIdx === item.idx" class="mb-3">
              <span>{{ item.content }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      faq: [
        {
          title: "Why book flights with Voyagu?",
          content:
            "By booking flights with us you receive guaranteed savings for your flight lower than any available offers online or traditional travel agents, and support from your Voyagu Travel Expert throughout your entire trip.",
          idx: 1,
        },
        {
          title: "Why do I need to work with a Voyagu Expert?",
          content:
            "By booking flights with us you receive guaranteed savings for your flight lower than any available offers online or traditional travel agents, and support from your Voyagu Travel Expert throughout your entire trip.",
          idx: 2,
        },
        {
          title: "What if I find a better deal myself?",
          content:
            "By booking flights with us you receive guaranteed savings for your flight lower than any available offers online or traditional travel agents, and support from your Voyagu Travel Expert throughout your entire trip.",
          idx: 3,
        },
        {
          title: "How is Voyagu better than booking with airlines?",
          content:
            "By booking flights with us you receive guaranteed savings for your flight lower than any available offers online or traditional travel agents, and support from your Voyagu Travel Expert throughout your entire trip.",
          idx: 4,
        },
        {
          title: "Do I get the same benefits as booking with airlines?",
          content:
            "By booking flights with us you receive guaranteed savings for your flight lower than any available offers online or traditional travel agents, and support from your Voyagu Travel Expert throughout your entire trip.",
          idx: 5,
        },
        {
          title: "Is it safe to travel with Voyagu?",
          content:
            "By booking flights with us you receive guaranteed savings for your flight lower than any available offers online or traditional travel agents, and support from your Voyagu Travel Expert throughout your entire trip.",
          idx: 6,
        },
      ],
      contentIdx: 0,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.faq {
  padding: 100px 0;
  width: 1160px;
  margin: 0 auto;
}
.col-4 {
  img {
    margin-left: -20px;
    margin-top: 20px;
  }
}
h1 {
  font-size: 72px;
  font-weight: 400;
  color: #2f2c2c;
  font-family: "Sentient";
  margin-bottom: 50px;
}

.question {
  border-bottom: 1px solid #2f2c2c;
  img {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
  p {
    font-size: 20px;
    font-weight: 300;
    cursor: pointer;
  }
  .qactive {
      color: #A50515;
  }
  span {
    font-size: 16px;
    font-weight: 300;
  }
}
</style>