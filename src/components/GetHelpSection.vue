<template>
    <BlockComponent header="Get help From other users">
        <template slot="header">
            Get help
            <br>
            From other users
        </template>
        <template slot="content">
            <p>
                Add Stars
                <br>
                From user's constellations
            </p>
        </template>

        <div slot="imageSection" class="animation-section">
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
