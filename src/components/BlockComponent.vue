<template>
    <div class="container">
        <div class="context-section">
            <div id="header" class="Text-Section-Header">
                <slot name="header"/>
            </div>
            <div class="Text-Section-Description">
                <slot name="content"/>
            </div>
        </div>

        <slot name="imageSection"/>
    </div>
</template>

<script>
export default {}
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
        max-width: 45%;
    }

    #header {
        margin-bottom: 3rem;
    }

    .animation-section {
        height: 100%;
        width: 54%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
