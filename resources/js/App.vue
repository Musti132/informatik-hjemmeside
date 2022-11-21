<template>
    <v-layout>
        <Menu></Menu>

        <v-main>
            <v-container>
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

<style lang="scss" scoped>
  .v-main {
        --v-layout-left: 0 !important;
    }
  
</style>