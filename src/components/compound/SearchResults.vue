<template>
    <div class="search-results">
        <div>
            <img src="../../assets/SearchIcon.svg">
            <div class="Text-Style-5">Graduate College</div>
        </div>
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
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .curtain {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 80%;
        background-image: linear-gradient(#0000, #fff);
    }
</style>
