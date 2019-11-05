<template>
    <BlockComponent class="background">
        <template slot="header">
            <p style="color:white;">Thank You!</p>
        </template>
        <template slot="content">
            <p class="Text-Style-10">No spam. We promise.</p>
        </template>
    </BlockComponent>
</template>

<script>
import BlockComponent from './BlockComponent'

export default {
	components: {
		BlockComponent
	},
	props: {
		renderDetails: {type: [DOMRect, Object]}
	},
	watch: {
		renderDetails() {
			document.documentElement.style.setProperty('--location',
				`${this.renderDetails.left + this.renderDetails.width/2}px
                ${this.renderDetails.bottom - this.renderDetails.height/2}px
            `)
		}
	}
}
</script>

<style lang="scss" scoped>

    .background {
        animation: test 2s ease-in-out .3s forwards;
        clip-path: circle(0 at var(--location));
        background: $midnight;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    @keyframes test {
        100% {
            clip-path: circle(1000px at center);
            .background {
                visibility: visible;
                background: $midnight;
            }
        }
    }
</style>
