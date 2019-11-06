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
    $width-md: 350px;
    $width-sm: 250px;
    $width-xs: 150px;

    div {
        min-width: $width-md;
        height: $width-md/1.9;
        border-radius: $width-md/11.6;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0 $width-md/14;

        @media only screen and (max-width: 1400px) {
            min-width: $width-sm;
            height: $width-sm/1.9;
            border-radius: $width-sm/11.6;
            margin: 0 $width-sm/14;

            p {
                font-size: 1.5rem;
            }
        }

        @media only screen and (max-width: 800px) {
            min-width: $width-xs;
            height: $width-xs/1.9;
            border-radius: 2px;
            border-radius: $width-xs/11.6;
            margin: 0 $width-xs/14;

            p {
                font-size: 1rem;
            }
        }
    }

    p {
        font-size: 28px;
        color: inherit;
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
