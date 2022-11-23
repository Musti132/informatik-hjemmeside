<template>
    <div class="text-h2 font-weight-bold">Welcome to IntelRobotics</div>
    <p class="text-left text-wrap" style="width: 80rem; display: inline-block;">
        <v-spacer></v-spacer><p>IntelRobotics is a firm that specializes in the
        design and manufacture of robots. We have a wide range of products that
        are suitable for both personal and commercial use. Our robots are
        designed to make your life easier and help you achieve your goals. We
        are constantly innovating and expanding our range of products to meet
        the needs of our customers. We have a team of dedicated and
        knowledgeable staff who are always on hand to help you choose the right
        product for your needs. </p><v-spacer></v-spacer><p>
        <v-spacer></v-spacer></p>

        <v-btn color="primary" class="mr-4" to="/products">Products</v-btn>

    </p>
</template>

<script>
    export default {
        mounted() {
            console.log('Home mounted.');
        },
    }
</script>
