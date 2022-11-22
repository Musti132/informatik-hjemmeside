<template>
        <v-navigation-drawer
            class="deep-purple accent-4"
            v-model="drawer"
            permanent="mini"
            :width="mini ? 70 : 200"
        >
            <v-list>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    @click="$router.push({ path: item.to })"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    <v-toolbar color="white" absolute right>
        <v-toolbar-side-icon
            class="hidden-md-and-up"
            @click.stop="drawer = !drawer"
        ></v-toolbar-side-icon>
    </v-toolbar>
</template>
<script>
export default {
    data() {
        return {
            drawer: null,
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
                {
                    title: "Personal Data Policy",
                    icon: "mdi-cog",
                    to: "/personal-data-policy",
                }
            ],
        };
    },
    computed: {
        mini() {
            return this.$vuetify.display.mdAndDown;
        },
    },

    mounted() {
        //console.log(this.$router);
        //console.log(this.$vuetify.display.name);
    },
};
</script>