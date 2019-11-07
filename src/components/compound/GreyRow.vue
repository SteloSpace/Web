<template>
    <div class="container">
        <div class="row" v-for="n in 3">
            <MarqueeCard v-for="content in contents"
                         :key="content"
                         :label="content"
                         color-scheme="grey"/>
        </div>
    </div>
</template>

<script>
import MarqueeCard from '../shared/MarqueeCard'

export default {
	data: () => ({
		contents: [
			'Education',
			'Careers',
			'Well-being',
			'Design',
			'Health',
			'Finances',
		]
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
        animation: marquee 30s linear infinite;
        overflow: hidden;
        display: flex;
    }

    @keyframes marquee {
        0% { transform:  translateX(0) }
        100% { transform: translateX(-100%); }
    }

</style>
