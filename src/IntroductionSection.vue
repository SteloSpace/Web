<template>
    <div class="container">
        <div class="context-section">
            <div :class="[first ? 'Stelo-Logo' : 'Text-Section-Header section']">
                Stelo
            </div>
            <div :class="[first ? 'Text-First-Section-Description' : 'Text-Section-Description']">
                Share your Experiences
            </div>
            <p>
                Coming Soon
            </p>
        </div>

        <img id="testImg" src="./assets/PeopleSkyStar.svg">
    </div>
</template>
<script>

export default {
	name: 'IntroductionSection',
}
</script>
<style lang="scss" scoped>
    .container {
        display: flex;
        min-height: 100vh;
        justify-content: space-between;
        padding-left: 5rem;
        position: relative;
        scroll-snap-align: start;

        .context-section {
            min-width: 320px;
            max-width: 45%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            height: inherit;
        }

        #testImg {
            max-height: 93vh;
            position: absolute;
            top: 0;
            right: 0;
        }

        @media only screen and (max-width: 800px) {
            flex-wrap: wrap;
            flex-direction: column-reverse;
            #testImg {
                max-height: unset;
                max-width: 500px;
            }
        }
        @media only screen and (max-width: 500px) {
            padding-left: 2rem;
            .context-section {
                height: 50vh;
            }
            #testImg {
                max-height: unset;
                max-width: 400px;
            }
        }
    }

    * {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
    }

</style>
