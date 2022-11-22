<template>
    <v-layout>
        <Menu></Menu>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script>
import Menu from "./layout/Menu.vue";

export default {
    mounted() {
        console.log("App mounted.");
    },
    components: {
        Menu,
    },
    data: () => ({
    }),
};
</script>
<style>
    .text-h2 {
        margin-bottom: 10px;
    }
</style>
