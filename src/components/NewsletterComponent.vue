<template>
    <div class="newsletter">
        <InputField class="element" id="input" placeholder="email@example.com"></InputField>
        <ButtonComponent class="element" value="Subscribe"></ButtonComponent>
    </div>
</template>

<script>
import ButtonComponent from './shared/ButtonComponent.vue'
import InputField from './shared/InputField.vue'

export default {
	components: {
		ButtonComponent,
		InputField,
	},
}
</script>

<style scoped lang="scss">
    .newsletter {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        position: relative;
        height: 100%;
        width: 100%;
    }

    .element {
        margin: 2rem;
    }

    #input {
        width: 60%;
    }
</style>
