<template>
    <div id="app">
        <BlockComponent first=true>
            <template slot="header">
                Stelo
            </template>
            <template slot="content">
                Share your Experiences
                <br>
            </template>
            <template slot="other" >
                <div class="Text-Section-Description" style="position: absolute; bottom: 9em">
                    Coming Soon
                </div>
            </template>

            <div slot="imageSection" class="animation-section">
                <img src="./assets/PeopleSkyStar.svg" style="position: absolute; height: 93%; right: 0; top: 0;">
            </div>
        </BlockComponent>

        <BlockComponent>
            <template slot="header">
                Create & Share
                <br>
                Constellations
            </template>
            <template slot="content">
                Pathways to your future goals
                <br>
                or the goals you have already achieved
                <ButtonComponent value="Try creating your own" style="margin-top: 1em;"/>
            </template>

            <div slot="imageSection" class="animation-section">
                <ConstellationGroup/>
            </div>
        </BlockComponent>

        <BlockComponent header="Get help From other users">
            <template slot="header">
                Get help
                <br>
                From other users
            </template>
            <template slot="content">
                Add Stars
                <br>
                From user's constellations
            </template>

            <div slot="imageSection" class="animation-section">
                <ConstellationGroup/>
            </div>
        </BlockComponent>

        <BlockComponent>
            <template slot="header">
                Find the experience
                <br>
                Relevant to you
            </template>
            <template slot="content">
                Get information
                <br>
                Tailored to your past experiences
            </template>

            <div slot="imageSection" class="animation-section">
                <SearchResults/>
            </div>
        </BlockComponent>

        <BlockComponent>
            <template slot="header">
                Keep track
                <br>
                Of your progress
            </template>
            <template slot="content">
                Stay on track with
                <br>
                your goals
            </template>

            <div slot="imageSection" class="animation-section">
                <ConstellationGroup/>
            </div>
        </BlockComponent>

        <MarqueeSection/>

        <BlockComponent>
            <template slot="header">
                Stay in touch
                <br>
                Subscribe to our newsletter
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
import ButtonComponent from './components/shared/ButtonComponent.vue'
import MarqueeSection from './components/shared/MarqueeSection'

export default {
	components: {
		MarqueeSection,
		BlockComponent,
		ConstellationGroup,
		NewsletterComponent,
		SearchResults,
		ButtonComponent,
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
        scroll-snap-type: mandatory;
        scroll-snap-points-y: repeat(100vh);
    }
</style>
