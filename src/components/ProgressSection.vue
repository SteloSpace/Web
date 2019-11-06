<template>
    <BlockComponent>
        <template slot="header">
            Keep track
            <br>
            Of your progress
        </template>
        <template slot="content">
            <p>
                Stay on track with
                <br>
                your goals
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
	name: 'ProgressSection',
	components: {
		BlockComponent,
		ConstellationGroup
	}
}
</script>
