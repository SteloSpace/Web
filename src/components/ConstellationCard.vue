<template>
    <div class="card-background">
        <div class="card-content">
            <div class="card-title Text-Style-6">
                Get a Dribbble or (and) Behance account.
            </div>
            <div class="card-circle blured"></div>
            <div class="card-circle"></div>
            <div class="card-description Text-Style-7">
                Use dribbble to get people excited about the project. Include a URL to the project on Behance.
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    @import '../styles/colors';

    .card-background {
        width: 354px;
        height: 520px;
        padding: 46px 21px 47px 30px;
        background-image: $constellation-card-bg;
        border-radius: 20px;
        display: flex;
    }

    .card-content {
        position: relative;
        flex-grow: 1;
    }

    .card-title {
        top: 0;
        left: 0;
        width: 50%;
        position: absolute;
    }

    .card-description {
        bottom: 0;
        left: 0;
        position: absolute;
        font: Regular 17px/20px SFProText;
        letter-spacing: -0.4px;
        color: #FFFFFF;
        width: 75%;
    }

    .card-circle {
        top: 9px;
        right: 9px;
        position: absolute;
        border: 4px solid white;
        border-radius: 50px;
        width: 50px;
        height: 50px;
    }

    .blured {
        filter: blur(4px);
    }
</style>