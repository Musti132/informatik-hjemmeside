<template>
    <v-card class="mx-auto" height="400" width="256">
        <v-navigation-drawer class="deep-purple accent-4">
            <v-list>
                <v-list-item v-for="item in items" :key="item.title" link @click="$router.push({ path: item.to })">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            items: [
                { 
                    title: "Home",
                    icon: "mdi-view-home",
                    to: "/",
                 },
                { 
                    title: "Products",
                    icon: "mdi-account",
                    to: "/products",
                },
                { 
                    title: "About us",
                    icon: "mdi-cog",
                    to: "/about",
                },
                {
                    title: "Contact",
                    icon: "mdi-cog",
                    to: "/contact",
                 },
            ],
        };
    },
    mounted() {
        console.log(this.$router);
    },
};
</script>