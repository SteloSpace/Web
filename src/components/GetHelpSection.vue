<template>
    <BlockComponent header="Get help From other users">
        <template slot="header">
            Get help
            <br>
            from other people
        </template>
        <template slot="content">
            <p>
                Shape your universe
                <br>
                from existing stars
            </p>
        </template>

        <div slot="imageSection">
            <ConstellationGroup/>
        </div>
    </BlockComponent>
</template>
<script>

import BlockComponent from './shared/BlockComponent'
import ConstellationGroup from './compound/ConstellationGroup'

export default {
	name: 'GetHelpSection',
	components: {
		BlockComponent,
		ConstellationGroup
	}
}
</script>
