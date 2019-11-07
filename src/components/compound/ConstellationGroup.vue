<template>
    <div id="root" v-scroll="animate">
        <div class="container">
            <ConstellationCard
                title="Get a Dribbble or (and) Behance account."
                description="Use dribbble to get people excited about the project.
                            Include a URL to the project on Behance."
                :completed="cardOne">
            </ConstellationCard>
            <ConstellationCard
                title="Background about the client"
                description="Add some information about the client you are working with.
                            If the project is fictional you can talk about why you created it."
                :completed="cardTwo">
            </ConstellationCard>
            <ConstellationCard
                title="Tackle Nahej"
                description="For all of those who have that one friend who everyone 'loves'.
                            A simple guide to tackling Nahej in the street."
                :completed="cardThree">
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
	data: () => ({
		cardOne: false,
		cardTwo: false,
		cardThree: false,
	}),
	methods: {
		animate(){
			setTimeout( () => this.cardOne = true, 1000 )
			setTimeout( () => this.cardTwo = true, 2000 )
			setTimeout( () => this.cardThree = true, 3000 )
		}
	},
	mounted() {
		console.log(this.$children[0].$el.getBoundingClientRect().y)
	},
	watch() {

	}
}
</script>

<style scoped lang="scss">
    #root {
        position: relative;
        height: 100%;
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
    }
</style>
