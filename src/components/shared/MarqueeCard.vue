<template>
    <div :class="colorScheme">
        <p>{{ label }}</p>
    </div>
</template>

<script>
export default {
	props: {
		colorScheme: { type: String },
		label: { type: String },
	}
}
</script>

<style lang="scss" scoped>

    div {
        min-width: 350px;
        height: 185px;
        border-radius: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0 25px;
    }

    p {
        font-size: 28px;
    }

    .grey {
        background-color: $very-light-pink;
        color: $brown-grey;
    }

    .blue {
        background-color: $ice-blue;
        color: $perrywinkle;
    }

    .teal {
        background-color: $ice;
        color: $pale-teal;
    }
</style>
