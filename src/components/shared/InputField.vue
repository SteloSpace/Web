<template>
    <input type="text" class="input" v-bind:placeholder="placeholder" />
</template>

<script>
export default {
    props: {
        placeholder: {type: String},
    }
}
</script>

<style scoped lang="scss">
    .input {
        width: 20rem;
        height: 3rem;
        font-size: 1rem;
        border: none;
        outline: none;
        padding: 0.7rem;
        padding-left: 2rem;
        box-shadow: 0px 6px 15px #00000020;
    }

    .input::placeholder {
        color: #393939;
    }
</style>