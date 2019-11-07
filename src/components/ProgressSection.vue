<template>
    <BlockComponent class="progress-section">
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

<style lang="scss">
    .progress-section .card-background:first-of-type #progress {
        animation: fade 7s ease-in-out forwards infinite;
    }
    .progress-section .card-background:nth-child(2) #progress {
        animation: fade2 7s ease-in-out forwards infinite;
    }

    @keyframes fade {
        10%, 80%{
            background-color: white;
        }
    }
    @keyframes fade2 {
        30%, 90%{
            background-color: white;
        }
    }

</style>

