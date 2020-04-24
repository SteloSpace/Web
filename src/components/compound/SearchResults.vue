<template>
    <div class="search-results">
        <div class="search-bar">
            <img src="../../assets/SearchIcon.svg">
            <p>Working From Home</p>
        </div>
        <ConstellationSearch></ConstellationSearch>
        <ConstellationSearch></ConstellationSearch>
        <ConstellationSearch :relevant="false"></ConstellationSearch>
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
        align-items: center;
        position: relative;

        @media only screen and (max-width: 1400px) {
            margin-top: 30px;
        }

        @media only screen and (max-width: 800px) {
            margin-top: 20px;
        }
    }

    .search-bar {
        display: flex;
        justify-content: space-between;
        margin-bottom: 3rem;
    }

    .curtain {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60%;
        background-image: linear-gradient(#0000, #fff);
    }

    img {
        margin-right: 50px;
    }
</style>
