<template>
  <div>
    <div>
      <a href = "http://naver.com">네이버</a>
      <router-link to="/home">Home</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <!-- Url에 따라 변하는 영역 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>