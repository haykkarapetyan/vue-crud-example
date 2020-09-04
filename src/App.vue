<template>
<v-app>
    <v-app-bar app color="primary" dark>
        <v-container>
            <v-row justify="start">
                <v-col cols="6">

                    <router-link class="link-to-home" :to="{name: 'home'}">Home</router-link>

                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
    <v-main>
        <router-view />
    </v-main>
</v-app>
</template>

<script>
export default {
    name: 'App',

    components: {

    },

    data: () => ({
        //
    }),
};
</script>

<style scoped>
.link-to-home {
    color: #fff;
}
</style>
