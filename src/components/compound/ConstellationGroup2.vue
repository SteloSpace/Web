<template>
    <div id="root">
        <div class="container">
            <ConstellationCard
                title="Separate And Isolate"
                description="I now have my workspace in the guest bedroom secluding 
                            myself from distractions and separating it as a work environment not a 
                            relaxation area.">
            </ConstellationCard>
            <ConstellationCard
            title="Natural Light"
                description="Natural Light can have a huge impact on work productivity. It's also been a lot better then 
                        sitting in my basement with no windows.">
            </ConstellationCard>
            <ConstellationCard
                      title="Time Blocking"
                description="I was getting distracted easily, I have a family that's also staying at home.
                    I would want to spend time with them instead I set up time blocking 30min pure work 5 min break.">
            </ConstellationCard>

        </div>
        <p class="description text-tertiary">
            Working from Home
        </p>
    </div>
</template>

<script>
import ConstellationCard from '../shared/ConstellationCard.vue'
export default {
	components: {
		ConstellationCard,
	},
}
</script>

<style scoped lang="scss">
    #root {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        overflow: hidden;
        margin-right: -160px;
    }

    .container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        position: relative;
        align-items: flex-end;
    }

    .description {
        margin-left: 5rem;
        margin-top: 2rem;

        @media only screen and (max-width: 800px) {
            margin-left: 2rem;
        }
    }
</style>
