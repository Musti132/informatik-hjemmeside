<template>
    <div class="text-h2 font-weight-bold">Products</div>
    <!-- Create a list of cards with products in them-->
    <v-row class="draw-box" justify="space-around">
        <v-col cols="4" v-for="product in products" :key="product.id">
            <v-card min-height="400px" max-height="500px" class="py-2">
                <v-img
                    height="200"
                    :src="product.image.path"
                    cover
                    class="text-white"
                >
                    <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                        <v-toolbar-title class="text-h6">
                            {{ product.name }}
                        </v-toolbar-title>
                    </v-toolbar>
                </v-img>
                <v-card-text>
                    <div class="font-weight-bold ml-1 mb-2">
                        Price: ${{ product.price }}
                    </div>
                    <div class="mb-4">
                        <div class="font-weight-normal">
                            {{ product.description }}
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>

    <!-- Create A load more button -->
    <div class="pt-2" align="right" v-if="currentPage != lastPage">
        <v-btn
            v-if="products.length > 0"
            color="primary"
            class="mx-auto"
            @click="fetchProducts"
        >
            Load More
        </v-btn>
    </div>
</template>
<script>
export default {
    mounted() {
        this.fetchProducts();
    },
    data: () => ({
        products: [],
        currentPage: 0,
        nextPage: null,
        lastPage: null,
    }),

    methods: {
        fetchProducts() {
            this.axios
                .get("/api/products")
                .then((response) => {
                    this.products = this.products.concat(response.data.data);
                    this.currentPage = response.data.current_page;
                    this.nextPage = response.data.next_page_url;
                    this.lastPage = response.data.last_page;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
