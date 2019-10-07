<template>
    <div id="app">
        <BlockComponent header="Stelo">
            <div slot="content">
                Share your Experiences
                Coming Soon
            </div>

            <div slot="imageSection"/>
        </BlockComponent>

        <BlockComponent header="Create&Share Constellations">
            <p slot="content">
                Pathways to your future goals
                or the goals you have already achieved
            </p>

            <div slot="imageSection">
                <ConstellationGroup/>
            </div>
        </BlockComponent>

        <BlockComponent header="Get help from other users">
            <p slot="content">
                Add Stars from user's constellations
            </p>

            <div slot="imageSection">
                <ConstellationGroup/>
            </div>
        </BlockComponent>

        <BlockComponent header="Find the experience relevant to you">
            <p slot="content">
                Get information
                Tailored to your past experiences
            </p>

            <div slot="imageSection"/>
        </BlockComponent>

        <BlockComponent header="Keep track of your progress">
            <p slot="content">
                Stay on track with your goals
            </p>

            <div slot="imageSection"/>
        </BlockComponent>

        <BlockComponent header="Starting with the topics you need most">
            <div slot="content">
                *marquee*
                With more coming soon
            </div>

            <div slot="imageSection"/>
        </BlockComponent>

        <BlockComponent header="Stay in touch subscribe to our newsletter">
            <div slot="content">
                No spam. We promise.
            </div>

            <div slot="imageSection">
                <input type="text" placeholder="email">
                <button>Subscribe</button>
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
