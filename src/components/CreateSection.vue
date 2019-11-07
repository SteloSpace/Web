<template>
    <BlockComponent class="create-section">
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

        <div slot="imageSection" class="animation">
            <img id="head" src="../assets/contribIcon.svg"/>
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

<style lang="scss">
    $width-md: 250px;
    $width-sm: 150px;
    $width-xs: 100px;
    $margin-md: 30px;
    $height-md: 1.4*250;
    $md-offset: $width-md+$margin-md*2;
    $md-offset: $width-md+$margin-md*2;
    $md-offset: $width-md+$margin-md*2;

    #head {
        height: 100px;
        animation: head 7s ease-in-out infinite;
        margin-left: $width-md/2+$margin-md;
        margin-bottom: 20px;
        transform: translateY($width-md);
        z-index: -1;
    }

    .create-section .card-background:nth-child(2) {
        animation: move-right 7s linear infinite;
        z-index: 0;
    }

    .create-section .card-background:nth-child(3) {
        animation: move-right-up 7s linear infinite;
    }

    @keyframes head {
        0%, 16%{
            transform: translateY($width-md);
        }
        20%, 95%{
            transform: unset;
        }
    }

    @keyframes move-right {
        10%, 100%{
            transform: translateX($md-offset);
        }
    }

    @keyframes move-right-up {
        10%{
            transform: translateX($md-offset);
            opacity: 0;
        }
        11% {
            transform: translate(-$md-offset, 1.4*$width-md);
            opacity: 0;
        }
        20%, 100% {
            opacity: 1;
            transform: translate(-$md-offset, 0);
        }
    }

    .animation {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
</style>

