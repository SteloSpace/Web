<template>
    <div>
        Block Component
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


<style>

</style>
