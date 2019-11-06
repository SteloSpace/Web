<template>
    <div class="container">
        <div class="context-section">
            <h1 class="heading-primary">Stelo</h1>
            <p class="heading-tertiary">
                Share your Experiences
            </p>
            <p class="text-secondary">
                Coming Soon
            </p>
        </div>

        <img id="banner" src="../assets/PeopleSkyStar.svg">
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

        #banner {
            max-height: 93vh;
            position: absolute;
            top: 0;
            right: 0;
        }

        @media only screen and (max-width: 800px) {
            flex-wrap: wrap;
            flex-direction: column-reverse;
            #banner {
                max-height: unset;
                max-width: 500px;
            }
        }
        @media only screen and (max-width: 500px) {
            padding-left: 2rem;
            .context-section {
                height: 50vh;
            }
            #banner {
                max-height: unset;
                max-width: 400px;
            }
        }
    }
</style>
