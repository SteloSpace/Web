<template>
    <BlockComponent class="progress-section">
        <template slot="header">
            Keep track
            <br>
            Of your progress
        </template>
        <template slot="content">
            <p>
                Search. Plan. Achieve.
            </p>
        </template>

        <div slot="imageSection">
            <ConstellationGroup2/>
        </div>
    </BlockComponent>
</template>
<script>

import BlockComponent from './shared/BlockComponent'
import ConstellationGroup2 from './compound/ConstellationGroup2'

export default {
	name: 'ProgressSection',
	components: {
		BlockComponent,
		ConstellationGroup2
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

