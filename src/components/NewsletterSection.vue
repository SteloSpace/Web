<template>
    <div style="position: relative;">
        <BlockComponent>
            <template slot="header">
                Stay in touch
                <br>
                Subscribe to our newsletter
            </template>
            <template slot="content">
                <p>No spam. We promise.</p>
            </template>

            <div slot="imageSection" class="animation-section-center">
                <NewsletterComponent @displayThankYou="display" :subscribed="false"/>
            </div>
        </BlockComponent>

        <ThankYouSection v-show="isSubscribed" :renderDetails="animatedButton"/>
    </div>
</template>
<script>

import BlockComponent from './shared/BlockComponent'
import NewsletterComponent from './compound/NewsletterComponent'
import ThankYouSection from './ThankYouSection'

export default {
	components: {
		BlockComponent,
		NewsletterComponent,
		ThankYouSection
	},
	props: {
		animatedButton: {},
		display: {},
		isSubscribed: {}
	}
}
</script>
