<template>
    <div class="newsletter">
        <InputField id="input" placeholder="email@example.com"/>
        <ButtonComponent
            ref="animatedButton"
            :class="{ animatedButton: isSubscribed }"
            value="Subscribe"
            @click="subscribe"
        />
    </div>
</template>

<script>

import ButtonComponent from '../shared/ButtonComponent'
import InputField from '../shared/InputField'

export default {
	components: {
		ButtonComponent,
		InputField,
	},
	data: () => ({
		isSubscribed: false,
	}),
	props: {
		subscribed: { type: Boolean },
	},
	methods: {
		subscribe() {
			this.$emit('displayThankYou', this.$refs.animatedButton)
			this.isSubscribed = true
			//todo: implement user newsletter subscription
		}
	}
}
</script>

<style lang="scss">
    .newsletter {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 2;
    }

    #input {
        margin: 2rem;
    }

    .hiddenButton {
        visibility: hidden;
    }

    .animatedButton {
        display: flex;
        justify-content: center;

        &>button {
            background: none;
            box-shadow: none;
            animation: test2 1s ease-in-out forwards;
        }
        &::before{
            content: '';
            position: absolute;
            height: 36px;
            width: 148px;
            border: none;
            z-index: -1;
            border-radius: 1000px;
            box-shadow: 0px 5px 10px #0000006c;
            background-image: linear-gradient(180deg, #04142C, #030A18);
            animation: test .2s linear forwards;
        }
    }

    @keyframes test {
        0%{
            width: 148px;
        }
        100%{
            width: 36px;
            margin: auto;
        }
    }

    @keyframes test2 {
        0%{
            color: rgba(255, 0, 0, 0);
            visibility: hidden;
            display: none;
        }
        100%{
            color: rgba(255, 0, 0, 0);
            visibility: hidden;
            display: none;
        }
    }
</style>
