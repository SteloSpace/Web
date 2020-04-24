<template>
    <BlockComponent class="create-section">
        <template slot="header">
          Get help
            <br>
            from other people
        </template>
        <template slot="content">
            <p>
                Collaborate with others on
                <br>
                your roadmap
            </p>
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
    $width-sm: 200px;
    $width-xs: 142px;

    $margin-md: 30px;
    $margin-sm: 20px;
    $margin-xs: 15px;

    $md-offset: $width-md+$margin-md*2;
    $md-offset: $width-md+$margin-md*2;
    $md-offset: $width-md+$margin-md*2;

    $sm-offset: $width-sm+$margin-sm*2;
    $sm-offset: $width-sm+$margin-sm*2;
    $sm-offset: $width-sm+$margin-sm*2;

    $xs-offset: $width-xs+$margin-xs*2;
    $xs-offset: $width-xs+$margin-xs*2;
    $xs-offset: $width-xs+$margin-xs*2;

    .animation {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

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

    /*Large sized screen*/
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

    /*Medium size screen*/
    @media only screen and (max-width: 1200px) {
        @keyframes head {
            0%, 16% {
                transform: translateY($width-sm);
            }
            20%, 95% {
                transform: unset;
            }
        }

        @keyframes move-right {
            10%, 100% {
                transform: translateX($sm-offset);
            }
        }

        @keyframes move-right-up {
            10% {
                transform: translateX($sm-offset);
                opacity: 0;
            }
            11% {
                transform: translate(-$sm-offset, 1.4*$width-sm);
                opacity: 0;
            }
            20%, 100% {
                opacity: 1;
                transform: translate(-$sm-offset, 0);
            }
        }
    }

    /*Medium size screen*/
    @media only screen and (max-width: 500px) {
        #head {
            height: 70px;
            margin-bottom: 10px;
        }

        @keyframes head {
            0%, 16% {
                transform: translateY($width-xs);
            }
            20%, 100% {
                transform: unset;
            }
        }

        @keyframes move-right {
            10%, 100% {
                transform: translateX($xs-offset);
            }
        }

        @keyframes move-right-up {
            10% {
                transform: translateX($xs-offset);
                opacity: 0;
            }
            11% {
                transform: translate(-$xs-offset, 1.4*$width-xs);
                opacity: 0;
            }
            20%, 100% {
                opacity: 1;
                transform: translate(-$xs-offset, 0);
            }
        }
    }
</style>


