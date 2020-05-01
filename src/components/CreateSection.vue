<template>
    <BlockComponent header="Get help From other users">
        <template slot="header">
             Create & Share
            <br>
            roadmaps

        </template>
        <template slot="content">
            <p>
                Focusing on small and realistic 
                <br>
                steps to success 
            </p>
        </template>

        <div slot="imageSection">
            <ConstellationGroup3/>
        </div>
    </BlockComponent>
</template>
<script>

import BlockComponent from './shared/BlockComponent'
import ConstellationGroup3 from './compound/ConstellationGroup3'

export default {
	name: 'GetHelpSection',
	components: {
		BlockComponent,
		ConstellationGroup3
	}
}
</script>