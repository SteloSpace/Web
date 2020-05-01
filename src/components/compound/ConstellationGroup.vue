<template>
    <div id="root">
        <div class="container">
            <ConstellationCard
                title="Get a Dribbble or (and) Behance account"
                description="Use dribbble to get people excited about your projects.
                             Include a URL to the project on Behance.">
            </ConstellationCard>
            <ConstellationCard
                title="Build an awesome portfolio"
                description="Where to start when creating a personal website? 
                             Here you'll find usefull tips and tricks for self-advertisement.">
            </ConstellationCard>
            <ConstellationCard
                title="My path to getting a Co-op placement"
                description="In this constellation I will share my path to becoming an engineer intern at Google.
                             Follow my steps or use this constellation as a structure for your own career path.">
            </ConstellationCard>
        </div>
        <p class="description text-tertiary">
            Design / Build a killer online portfolio
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
