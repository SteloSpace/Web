<template>
    <div class="search-results">
        <ConstellationSearch></ConstellationSearch>
        <ConstellationSearch :relevant="false"></ConstellationSearch>
        <ConstellationSearch></ConstellationSearch>
        <ConstellationSearch :relevant="false"></ConstellationSearch>
        <ConstellationSearch :relevant="false"></ConstellationSearch>
        <div class="curtain"/>
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

    .curtain {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
        background-image: linear-gradient(rgba(2555, 255, 255, 0), white);
    }
</style>
