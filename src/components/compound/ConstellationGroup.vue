<template>
    <div class="container">
        <ConstellationCard
            title="Get a Dribbble or (and) Behance account."
            description="Use dribbble to get people excited about the project.
                         Include a URL to the project on Behance.">
        </ConstellationCard>
        <ConstellationCard
            title="Background about the client"
            description="Add some information about the client you are working with.
                        If the project is fictional you can talk about why you created it."
            :isFilled=true>
        </ConstellationCard>
        <ConstellationCard
            title="Tackle Nahej"
            description="For all of those who have that one friend who everyone 'loves'.
                         A simple guide to tackling Nahej in the street.">
        </ConstellationCard>
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
    .container { 
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        position: relative;
        height: 100%;
        margin-right: -130px;
    }
</style>
