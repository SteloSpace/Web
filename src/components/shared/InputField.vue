<template>
  <input class="input" type="text" v-bind:placeholder="placeholder" />
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
  	font-size: 1rem;
	border: none;
	outline: none;
	padding: 1rem;
	box-shadow: 0px 6px 15px #00000020;
}
</style>