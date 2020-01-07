<template>
    <button class="list-group-item text-left"  @click="clickButton">
        {{ label }}
    </button>
</template>
<script>
    export default {
        props: ['label'],
        methods: {
            clickButton(){
                this.$emit('componentClick'); //component에서 발생하는 이벤트를 app으로 알려주는 방식으로 진행
            }
        }
    } ;
</script> 