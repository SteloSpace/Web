<template>
    <div class="container">
        <div class="row" v-for="n in 3">
            <MarqueeCard v-for="card in cards"
                         :label="card.label"
                         :color-scheme="card.color"/>
        </div>
    </div>
</template>

<script>
import MarqueeCard from '../shared/MarqueeCard'

export default {
	data: () => ({
		cards: {
			education: { label: 'Education', color: 'teal' },
			careers: { label: 'Careers', color: 'blue' },
			wellBeing: { label: 'Well-being', color: 'grey' },
			design: { label: 'Design', color: 'grey' },
			health: { label: 'Health', color: 'grey' },
		}
	}),
	components: {
		MarqueeCard
	}
}
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-wrap: nowrap;
    }

    .row {
        animation: marquee 25s linear infinite;
        overflow: hidden;
        display: flex;
    }

    @keyframes marquee {
        0% { transform: translateX(0) }
        100% { transform: translateX(100%) }
    }

</style>
