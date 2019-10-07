<template>
    <div class="container">
        <div>
            <h2>{{ header }}</h2>
            <slot name="content"/>
        </div>

        <slot name="imageSection"/>
    </div>
</template>

<script>
export default {
	props: {
		header: { type: String }
	}
}
</script>


<style lang="scss" scoped>
    .container {
        height: 100vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 5rem;
    }

</style>
