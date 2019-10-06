<template>
    <div class="card-background">
        <div class="card-content">
            <div class="card-title">
                Get a dribbble or (and) Behance account.
            </div>
            <div class="card-description">
                Use dribbble to get people excited about the project. Include a URL to the project on Behance.
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .card-background {
        width: 354px;
        height: 520px;
        padding: 46px 21px 47px 30px;
        background-color: #04142C;
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
        width: 60%;

        font: Bold 34px/40px SF Pro Display;
        letter-spacing: 0.38px;
        text-align: left;
        color: #FFFFFF;
        position: absolute;
    }

    .card-description {
        bottom: 0;
        left: 0;
        position: absolute;
        font: Regular 17px/20px SF Pro Text;
        letter-spacing: -0.4px;
        color: #FFFFFF;
        width: 75%;
    }
</style>