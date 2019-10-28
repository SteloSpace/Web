<template>
    <div class="container">
        <div class="row">
            <MarqueeCard card="card" label="Education" color-scheme="teal"></MarqueeCard>
            <MarqueeCard card="card" label="Careers" color-scheme="blue"></MarqueeCard>
            <MarqueeCard card="card" label="Wellbeing" color-scheme="grey"></MarqueeCard>
            <MarqueeCard card="card" label="Design" color-scheme="grey"></MarqueeCard>
            <MarqueeCard card="card" label="Health" color-scheme="grey"></MarqueeCard>
            <MarqueeCard card="card" label="Finances" color-scheme="grey"></MarqueeCard>
        </div>
        <div class="row">
            <MarqueeCard card="card" label="Education" color-scheme="teal"></MarqueeCard>
            <MarqueeCard card="card" label="Careers" color-scheme="blue"></MarqueeCard>
            <MarqueeCard card="card" label="Wellbeing" color-scheme="grey"></MarqueeCard>
            <MarqueeCard card="card" label="Design" color-scheme="grey"></MarqueeCard>
            <MarqueeCard card="card" label="Health" color-scheme="grey"></MarqueeCard>
            <MarqueeCard card="card" label="Finances" color-scheme="grey"></MarqueeCard>
        </div>
        <div class="row">
            <MarqueeCard card="card" label="Education" color-scheme="teal"></MarqueeCard>
            <MarqueeCard card="card" label="Careers" color-scheme="blue"></MarqueeCard>
            <MarqueeCard card="card" label="Wellbeing" color-scheme="grey"></MarqueeCard>
            <MarqueeCard card="card" label="Design" color-scheme="grey"></MarqueeCard>
            <MarqueeCard card="card" label="Health" color-scheme="grey"></MarqueeCard>
            <MarqueeCard card="card" label="Finances" color-scheme="grey"></MarqueeCard>
        </div>
    </div>
</template>

<script>
import MarqueeCard from '../shared/MarqueeCard'

export default {
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
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(100%);
        }
    }

</style>
