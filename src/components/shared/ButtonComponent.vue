<template>
  <button class="button">{{value}}</button>
</template>

<script>
export default {
    props: {
        value: {type: String},
    }
}
</script>

<style scoped lang="scss">
    .button {
        border: none;
        border-radius: 1000px;
        box-shadow: 0px 5px 10px #0000006c;
        background-image: linear-gradient(180deg, #04142C, #030A18);
        color: white;
        padding: 0.7rem 3rem;
    }
</style>