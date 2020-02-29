<template>
    <div>
        <button @click="saveToCart">emit</button>
    </div>
</template>

<script>
// ShoppingCart 컴포넌트에 데이터 전달
export default {
    methods: {
        saveToCart(){
            // this.$emit('favorite', 'KF94 마스크') //favorite이라는 event, 인자로 kf94
            this.$store.commit('favorite');
        }
    }
}
</script>

<style>

</style>