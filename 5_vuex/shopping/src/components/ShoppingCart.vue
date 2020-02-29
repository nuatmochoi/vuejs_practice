<template>
  <div>
      <h1>장바구니에 담긴 상품 목록</h1>
      <ul>
        <li v-for="(cartItem, idx) in $store.state.cartItems" :key='idx'>
          {{ cartItems }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            cartItems: []
        }
    }
}
</script>

<style>

</style>