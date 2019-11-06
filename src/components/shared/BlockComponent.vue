<template>
    <div class="container">
        <div class="context-section">
            <div class="heading-secondary header">
                <slot name="header"/>
            </div>

            <slot name="content"/>

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
        min-height: 100vh;
        justify-content: space-between;
        padding-left: 5rem;
        position: relative;
        scroll-snap-align: start;

        @media only screen and (max-width: 900px) {
            flex-wrap: wrap;

            div:last-of-type {
                flex-grow: 1;
            }
        }
        @media only screen and (max-width: 500px) {
            padding-left: 1rem;
            .context-section {
                min-width: unset;
                max-width: unset;
            }
        }
    }

    .context-section {
        min-width: 320px;
        max-width: 45%;
    }

    .header {
        margin-bottom: 40px;
    }

    .animation-section-center {
        width: 100%;
        justify-content: center;
    }
</style>
