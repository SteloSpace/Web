<template>
    <div id="app">
        <BlockComponent header="This is a header">
            <p slot="content">This is the content</p>
            <div slot="imageSection">
                <ConstellationGroup/>
            </div>
        </BlockComponent>
    </div>
</template>

<script>
import BlockComponent from './components/BlockComponent.vue'
import ConstellationGroup from './components/compound/ConstellationGroup'

export default {
	components: {
		BlockComponent,
		ConstellationGroup
	},
}
</script>

<style lang="scss">

</style>
