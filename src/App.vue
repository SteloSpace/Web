<template>
    <div id="app">
        <BlockComponent>
            <template slot="header">
                <div>Stelo</div>
            </template>
            <template slot="content">
                Share your Experiences
                Coming Soon
            </template>

            <div slot="imageSection" class="animation-section">
                <img src="./assets/artboardWithPeople.svg" width="100%">
            </div>
        </BlockComponent>

        <BlockComponent>
            <template slot="header">
                <div>Create & Share Constellations</div>
            </template>
            <template slot="content">
                Pathways to your future goals
                or the goals you have already achieved
            </template>

            <div slot="imageSection" class="animation-section">
                <ConstellationGroup/>
            </div>
        </BlockComponent>

        <BlockComponent header="Get help From other users">
            <template slot="header">
                <div>Get help</div>
                <div>From other users</div>
            </template>
            <template slot="content">
                Add Stars from user's constellations
            </template>

            <div slot="imageSection" class="animation-section">
                <ConstellationGroup/>
            </div>
        </BlockComponent>

        <BlockComponent>
            <template slot="header">
                <div>Find the experience</div>
                <div>Relevant to you</div>
            </template>
            <template slot="content">
                Get information
                Tailored to your past experiences
            </template>

            <div slot="imageSection" class="animation-section">
                <SearchResults/>
            </div>
        </BlockComponent>

        <BlockComponent>
            <template slot="header">
                <div>Keep track</div>
                <div>Of your progress</div>
            </template>
            <template slot="content">
                Stay on track with your goals
            </template>

            <div slot="imageSection" class="animation-section">
                <ConstellationGroup/>
            </div>
        </BlockComponent>

        <BlockComponent>
            <template slot="header">
                <div>Starting with the topics you need most</div>
            </template>
            <template slot="content">
                *marquee*
                With more coming soon
            </template>

            <div class="animation-section" slot="imageSection"/>
        </BlockComponent>

        <BlockComponent>
            <template slot="header">
                <div>Stay in touch</div>
                <div>Subscribe to our newsletter</div>
            </template>
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
    * {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
    }

    .test {
        background: rgba(255, 255, 0, 0.349);
        border: 1px solid red;
    }

    #app {
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: scroll;
        max-height: 100vh;
        width: 100%;
        scroll-snap-type: y mandatory;
    }
</style>
