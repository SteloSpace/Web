<template>
    <div id="app">
        <BlockComponent header="Stelo">
            <template slot="content">
                Share your Experiences
                Coming Soon
            </template>

            <div slot="imageSection"/>
        </BlockComponent>

        <BlockComponent header="Create&Share Constellations">
            <template slot="content">
                Pathways to your future goals
                or the goals you have already achieved
            </template>

            <div slot="imageSection">
                <ConstellationGroup/>
            </div>
        </BlockComponent>

        <BlockComponent header="Get help from other users">
            <template slot="content">
                Add Stars from user's constellations
            </template>

            <div slot="imageSection">
                <ConstellationGroup/>
            </div>
        </BlockComponent>

        <BlockComponent header="Find the experience relevant to you">
            <template slot="content">
                Get information
                Tailored to your past experiences
            </template>

            <div slot="imageSection"/>
        </BlockComponent>

        <BlockComponent header="Keep track of your progress">
            <template slot="content">
                Stay on track with your goals
            </template>

            <div slot="imageSection"/>
        </BlockComponent>

        <BlockComponent header="Starting with the topics you need most">
            <template slot="content">
                *marquee*
                With more coming soon
            </template>

            <div slot="imageSection"/>
        </BlockComponent>

        <BlockComponent header="Stay in touch subscribe to our newsletter">
            <template slot="content">
                No spam. We promise.
            </template>

            <div slot="imageSection">
                <InputField placeholder="email"/>
                <ButtonComponent value="Subscribe" />
            </div>
        </BlockComponent>

    </div>
</template>

<script>
import BlockComponent from './components/BlockComponent.vue'
import ButtonComponent from './components/shared/ButtonComponent.vue'
import InputField from './components/shared/InputField.vue'
import ConstellationGroup from './components/compound/ConstellationGroup'

export default {
	components: {
		BlockComponent,
        ConstellationGroup,
        ButtonComponent,
        InputField,
	},
}
</script>

<style lang="scss">

</style>
