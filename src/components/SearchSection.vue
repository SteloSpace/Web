<template>
    <BlockComponent>
        <template slot="header">
            Find the experience
            <br>
            Relevant to you
        </template>
        <template slot="content">
            <p>
                Get information
                <br>
                Tailored to your past experiences
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
