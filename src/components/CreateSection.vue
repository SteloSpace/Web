<template>
    <BlockComponent>
        <template slot="header">
            Create & Share
            <br>
            Constellations
        </template>
        <template slot="content">
            <p>
                Pathways to your future goals
                <br>
                or the goals you have already achieved
            </p>

            <ButtonComponent value="Try creating your own" style="margin-top: 1em;"/>
        </template>

        <div slot="imageSection" class="animation-section">
            <ConstellationGroup/>
        </div>
    </BlockComponent>
</template>
<script>

import BlockComponent from './shared/BlockComponent'
import ButtonComponent from './shared/ButtonComponent'
import ConstellationGroup from './compound/ConstellationGroup'

export default {
	name: 'CreateSection',
	components: {
		BlockComponent,
		ButtonComponent,
		ConstellationGroup
	}
}
</script>
