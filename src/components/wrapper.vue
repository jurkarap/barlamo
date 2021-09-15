<template>
  <div class="wrapper">
    <div class="container-fluid main-block">
      <div class="row">
        <div class="col-6">
          <img :src="require('../assets/logo.svg')" alt="" />
        </div>
        <div class="col-6 text-end">
            <p>+ 1 866-346-7848</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wrapper",
};
</script>

<style lang="scss">
.wrapper {
    background: #FCF5F0;
    margin-bottom: 80px;
    background: #FCF5F0;
    padding: 10px 0
    p {
        font-size: 16px;
        font-weight: 300;
        color: #2F2C2C;
    }
}
</style>