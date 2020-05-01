<template>
    <div id="root">
        <div class="container">
            <ConstellationCard
                title="Separate And Isolate"
                description="I started by moving my workspace to the 
                             basement secluding myself from distractions and seperating it as a work enviroment not a 
                             relaxation area.">
            </ConstellationCard>
            <ConstellationCard
                      title="Time Blocking"
                description="I was getting distracted easily at home, having a family thats also staying at home.
                    I would want to spend time with them instead I set up time blocking 30min pure work 5 min break.">
            </ConstellationCard>
                        <ConstellationCard
                      title="Get up and take breaks"
                description="It's easy to get lost in my own productivity sometimes
                            especially in the comfort of my own home. I take breaks every hour to stretch.">
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
