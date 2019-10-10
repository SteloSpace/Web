<template>
    <div class="container">
        <div class="context-section">
            <h2 class="Text-Style-4">{{ header }}</h2>
            <div class="Text-Style-5">
                <slot name="content"/>
            </div>
        </div>

        <slot class="animation-section" name="imageSection"/>
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
        min-height: 650px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 5rem;
        position: relative;
        border: 1px solid green;
    }

    .context-section {
        max-width: 40%;
    }
</style>
