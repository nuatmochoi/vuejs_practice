<template>
  <div id="app">
    <header>
      <router-link to="/login">Login</router-link>
      <router-link to="/main">Main</router-link>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
