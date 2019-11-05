<template>
    <div class="container">
        <div class="context-section">
            <div :class="[first ? 'Stelo-Logo' : 'Text-Section-Header section']">
                <slot name="header"/>
            </div>
            <div :class="[first ? 'Text-First-Section-Description' : 'Text-Section-Description']">
                <slot name="content"/>
            </div>
            <slot name="other"/>
        </div>

        <slot name="imageSection"/>
    </div>
</template>

<script>
export default {
	props: {
		first: {
			type: Boolean,
			default: false,
		}
	}
}
</script>

<style lang="scss" scoped>
    .container {
        align-items: center;
        display: flex;
        height: 100vh;
        justify-content: space-between;
        min-height: 650px;
        padding-left: 5rem;
        position: relative;
        scroll-snap-align: start;

        @media only screen and (max-width: 900px) {
            flex-wrap: wrap;
        }
        @media only screen and (max-width: 500px) {
            padding-left: 1rem;
            .context-section {
                min-width: unset;
                max-width: unset;
            }
            .animation-section {
                width: 100%;
            }
        }
    }

    .context-section {
        min-width: 320px;
        /*max-width: 45%;*/
    }

    .section {
        margin-bottom: 40px;
    }

    .animation-section {
        height: 100%;
        width: 54%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
</style>
