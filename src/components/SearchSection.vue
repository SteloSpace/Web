<template>
    <BlockComponent>
        <template slot="header">
            Find a personalized path
            <br>
            to success
        </template>
        <template slot="content">
            <p>
                We base our search on you, so you can
                <br>
                 get the most accurate roadmap
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
