<template>
 <div class="app">
  <Wrapper/>
  <Form/>
  <Content/>
  <FAQ/>
  <Footer/>
 </div>

  
</template>

<script>
import Wrapper from './components/wrapper.vue'
import Form from './components/form.vue'
import Content from './components/content.vue'
import FAQ from './components/FAQ.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    Wrapper,
    Form,
    Content,
    FAQ,
    Footer
  },
  data() {
    return {
      girlScrolled: false
    }
  },
  methods: {
    getScroll() {
      this.girlScrolled = true
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/variables.css';

* {
  font-family: 'Switzer', sans-serif;
  color: #2F2C2C;
}

#app {
  background: #FCF5F0;
  margin:auto
}


html {
  margin: 0;
  padding: 0;
}



</style>
