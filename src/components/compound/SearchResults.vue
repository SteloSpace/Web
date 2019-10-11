<template>
    <div class="search-results">
        <ConstellationSearch></ConstellationSearch>
        <ConstellationSearch v-bind:relevant="false"></ConstellationSearch>
        <ConstellationSearch></ConstellationSearch>
        <ConstellationSearch v-bind:relevant="false"></ConstellationSearch>
        <ConstellationSearch v-bind:relevant="false"></ConstellationSearch>
    </div>
</template>

<script>
import ConstellationSearch from '../shared/ConstellationSearch.vue'
export default {
	components: {
		ConstellationSearch,
	},
}
</script>

<style scoped lang="scss">
    .search-results {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }
</style>