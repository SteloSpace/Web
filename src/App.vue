<template>
    <div id="app">
        <IntroductionSection/>
        <CreateSection/>
        <GetHelpSection/>
        <SearchSection/>
        <ProgressSection/>
        <MarqueeSection/>
        <NewsletterSection
            :animated-button="animatedButton"
            :display="display"
            :is-subscribed="isSubscribed"
        />
    </div>
</template>

<script>
import MarqueeSection from './components/shared/MarqueeSection'
import SearchSection from './components/SearchSection'
import GetHelpSection from './components/GetHelpSection'
import CreateSection from './components/CreateSection'
import ProgressSection from './components/ProgressSection'
import NewsletterSection from './components/NewsletterSection'
import IntroductionSection from './components/IntroductionSection'

export default {
	components: {
		SearchSection,
		GetHelpSection,
		CreateSection,
		ProgressSection,
		NewsletterSection,
		IntroductionSection,
		MarqueeSection
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
