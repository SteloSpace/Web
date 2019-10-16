<template>
    <div id="app">
        <BlockComponent header="Stelo">
            <template slot="content">
                Share your Experiences
                Coming Soon
            </template>

            <div slot="imageSection" class="animation-section">
                <img src="./assets/artboardWithPeople.svg" width="100%">
            </div>
        </BlockComponent>

        <BlockComponent header="Create & Share Constellations">
            <template slot="content">
                Pathways to your future goals
                or the goals you have already achieved
            </template>

            <div slot="imageSection" class="animation-section">
                <ConstellationGroup/>
            </div>
        </BlockComponent>

        <BlockComponent header="Get help from other users">
            <template slot="content">
                Add Stars from user's constellations
            </template>

            <div slot="imageSection" class="animation-section">
                <ConstellationGroup/>
            </div>
        </BlockComponent>

        <BlockComponent header="Find the experience relevant to you">
            <template slot="content">
                Get information
                Tailored to your past experiences
            </template>

            <div slot="imageSection" class="animation-section">
                <SearchResults/>
            </div>
        </BlockComponent>

        <BlockComponent header="Keep track of your progress">
            <template slot="content">
                Stay on track with your goals
            </template>

            <div slot="imageSection" class="animation-section">
                <ConstellationGroup/>
            </div>
        </BlockComponent>

        <BlockComponent header="Starting with the topics you need most">
            <template slot="content">
                *marquee*
                With more coming soon
            </template>

            <div class="animation-section" slot="imageSection"/>
        </BlockComponent>

        <BlockComponent header="Stay in touch subscribe to our newsletter">
            <template slot="content">
                No spam. We promise.
            </template>

            <div slot="imageSection" class="animation-section">
                <NewsletterComponent></NewsletterComponent>
            </div>
        </BlockComponent>
    </div>
</template>

<script>
import BlockComponent from './components/BlockComponent.vue'
import NewsletterComponent from './components/NewsletterComponent.vue'
import ConstellationGroup from './components/compound/ConstellationGroup.vue'
import SearchResults from './components/compound/SearchResults.vue'

export default {
	components: {
		BlockComponent,
        ConstellationGroup,
        NewsletterComponent,
        SearchResults,
	},
}
</script>

<style lang="scss">
    .test {
        background: rgba(255, 255, 0, 0.349);
        border: 1px solid red;
    }

    #app {
        overflow-x: hidden;
        width: 100%;
    }
</style>
