<template>
    <div class="container">
        <BlockContext></BlockContext>
        <BlockAnimation></BlockAnimation>
    </div>
</template>

<script>
import BlockContext from './BlockContext.vue'
import BlockAnimation from './BlockAnimation.vue'

export default {
	components: {
		BlockContext,
		BlockAnimation,
	},
}
</script>


<style lang="scss" scoped>
    .container {
        height: 100vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 5rem;
    }

</style>
