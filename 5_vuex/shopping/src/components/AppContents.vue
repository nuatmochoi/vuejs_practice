<template>
    <div>
        <ProductCard></ProductCard>
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
export default {
        components: {
            ProductCard
        },
    // methods: {
    //     passFavorite(productName){
    //         this.$emit("pass-favorite", productName)
    //     }
    // }
}
</script>

<style>

</style>