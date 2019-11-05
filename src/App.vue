<template>
    <div id="app">
        <IntroductionSection/>

        <BlockComponent>
            <template slot="header">
                Create & Share
                <br>
                Constellations
            </template>
            <template slot="content">
                <p>
                    Pathways to your future goals
                    <br>
                    or the goals you have already achieved
                </p>

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
                <p>
                    Add Stars
                    <br>
                    From user's constellations
                </p>
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
                <p>
                    Get information
                    <br>
                    Tailored to your past experiences
                </p>
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
                <p>
                    Stay on track with
                    <br>
                    your goals
                </p>
            </template>

            <div slot="imageSection" class="animation-section">
                <ConstellationGroup/>
            </div>
        </BlockComponent>

        <MarqueeSection/>


        <div style="position: relative;">
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
                    <NewsletterComponent @displayThankYou="display" :subscribed="false"/>
                </div>
            </BlockComponent>
            <ThankYouSection v-show="isSubscribed" :renderDetails="animatedButton"/>
        </div>

    </div>
</template>

<script>
import BlockComponent from './components/BlockComponent.vue'
import NewsletterComponent from './components/NewsletterComponent.vue'
import ConstellationGroup from './components/compound/ConstellationGroup.vue'
import SearchResults from './components/compound/SearchResults.vue'
import ButtonComponent from './components/shared/ButtonComponent.vue'
import MarqueeSection from './components/shared/MarqueeSection'
import ThankYouSection from './components/ThankYouSection'
import IntroductionSection from './IntroductionSection'

export default {
	components: {
		IntroductionSection,
		MarqueeSection,
		BlockComponent,
		ConstellationGroup,
		NewsletterComponent,
		SearchResults,
		ButtonComponent,
		ThankYouSection
	},
	data: () => ({
		isSubscribed: false,
		animatedButton: {},
	}),
	methods: {
		display(animatedButton) {
			this.isSubscribed = true
			this.animatedButton = animatedButton.$el.getBoundingClientRect()
		}
	}
}
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
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
