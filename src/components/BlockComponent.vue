<template>
    <div class="container">
        <div class="context-section">
            <h2 class="Text-Style-4">{{ header }}</h2>
            <div class="Text-Style-5">
                <slot name="content"/>
            </div>
        </div>

        <slot name="imageSection"/>
    </div>
</template>

<script>
export default {
	props: {
		header: { type: String }
	}
}
</script>


<style lang="scss" scoped>
    .container {
        height: 100vh;
        min-height: 650px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 5rem;
        position: relative;

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
        max-width: 45%;
        // margin-right: 10rem;
    }

    .animation-section {
        height: 100%;
        width: 54%;
    }
</style>
