<template>
    <mailchimp-subscribe
        class="newsletter"
        url="https://gmail.us5.list-manage.com/subscribe/post-json"
        user-id="4f4c1b7778184a491811ac714"
        list-id="2e32c19d9f"
        @error="onError"
        @success="onSuccess"
    >
        <template v-slot="{ subscribe, setEmail, error, success }">
            <form @submit.prevent="subscribe">
                <div class="errors" v-if="error">
                    <p>{{ error }}</p>
                </div>

                <input id="input"
                       placeholder="email@example.com"
                       @input="setEmail($event.target.value)"
                       :disabled="success"
                />

                <div
                    ref="animatedButton"
                    :class="{ animatedButton: isSubscribed }">
                    <button type="submit">Subscribe</button>
                </div>
            </form>
        </template>

    </mailchimp-subscribe>
</template>

<script>

import MailchimpSubscribe from 'vue-mailchimp-subscribe'


export default {
	components: {
		MailchimpSubscribe,
	},
	data: () => ({
		isSubscribed: false,
		hasError: false
	}),
	props: {
		subscribed: { type: Boolean },
	},
	methods: {
		onSuccess() {
			console.log('succss', this.success)
			this.$emit('displayThankYou', this.$refs.animatedButton)
			this.isSubscribed = true
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
            animation: hideButton 1s ease-in-out forwards;
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
            animation: shrinkButton .2s linear forwards;
        }
    }

    @keyframes shrinkButton {
        0%{
            width: 148px;
        }
        100%{
            width: 36px;
            margin: auto;
        }
    }

    @keyframes hideButton {
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

    button {
        border: none;
        border-radius: 1000px;
        box-shadow: 0px 5px 10px #0000006c;
        background-image: linear-gradient(180deg, #04142C, #030A18);
        color: white;
        cursor: pointer;
        outline: none;
        padding: 0.7rem 3rem;
    }

    input {
        width: 20rem;
        height: 3rem;
        font-size: 1rem;
        border: none;
        outline: none;
        padding: 0.7rem 2rem 0.7rem 2rem;
        box-shadow: 0px 6px 15px #00000020;
    }

    input::placeholder {
        color: $grey;
    }

    .errors p{
        font-size: 1rem;
        color: rgba(204, 77, 92, 0.67);
    }
</style>
