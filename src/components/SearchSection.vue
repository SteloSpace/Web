<template>
    <BlockComponent>
        <template slot="header">
            Find the stories
            <br>
            relevant to you
        </template>
        <template slot="content">
            <p>
                Get personalized suggestions
                <br>
                in stead of endless scrolling
            </p>
        </template>

        <div slot="imageSection" class="searchComponent">
            <SearchResults/>
        </div>
    </BlockComponent>
</template>
<script>
import BlockComponent from './shared/BlockComponent'
import SearchResults from './compound/SearchResults'

export default {
	name: 'SearchSection',
	components: {
		BlockComponent,
		SearchResults
	}
}
</script>

<style lang="scss" scoped>
    .searchComponent {
        margin: 50px 200px -100px;

        @media only screen and (max-width: 600px) {
            margin: 50px 0;
        }
    }
</style>
