<template>
    <div>
        Block Context
        <ContextBody></ContextBody>
        <ContextHeader></ContextHeader>
    </div>
</template>

<script>
import ContextHeader from './ContextHeader.vue'
import ContextBody from './ContextBody.vue'

export default {
	components: {
		ContextHeader,
		ContextBody,
	},
}
</script>

<style>

</style>
