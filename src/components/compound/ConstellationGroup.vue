<template>
    <div id="root">
        <div class="container">
            <ConstellationCard
                title="Get a Dribbble or (and) Behance account."
                description="Use dribbble to get people excited about the project.
                            Include a URL to the project on Behance.">
            </ConstellationCard>
            <ConstellationCard
                title="Background about the client"
                description="Add some information about the client you are working with.
                            If the project is fictional you can talk about why you created it.">
            </ConstellationCard>
            <ConstellationCard
                title="Tackle Nahej"
                description="For all of those who have that one friend who everyone 'loves'.
                            A simple guide to tackling Nahej in the street.">
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
