<template>
    <div class="container">
        <div class="row">
            <MarqueeCard label="Education" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Careers" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Wellbeing" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Design" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Health" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Finances" color-scheme="grey"></MarqueeCard>
        </div>
        <div class="row">
            <MarqueeCard label="Education" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Careers" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Wellbeing" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Design" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Health" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Finances" color-scheme="grey"></MarqueeCard>
        </div>
        <div class="row">
            <MarqueeCard label="Education" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Careers" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Wellbeing" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Design" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Health" color-scheme="grey"></MarqueeCard>
            <MarqueeCard label="Finances" color-scheme="grey"></MarqueeCard>
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
        animation: marquee 30s linear infinite;
        overflow: hidden;
        display: flex;
    }

    @keyframes marquee {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }

</style>
