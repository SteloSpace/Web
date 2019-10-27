<template>
    <div>
        <MarqueeCard label="Education" color-scheme="teal"></MarqueeCard>
        <MarqueeCard label="Careers" color-scheme="blue"></MarqueeCard>
        <MarqueeCard label="Wellbeing" color-scheme="grey"></MarqueeCard>
        <MarqueeCard label="Design" color-scheme="grey"></MarqueeCard>
        <MarqueeCard label="Health" color-scheme="grey"></MarqueeCard>
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
    div {
        display: flex;
        flex-wrap: nowrap;
    }
</style>
