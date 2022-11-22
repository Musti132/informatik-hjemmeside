<template>
    <div class="text-h2 font-weight-bold">Contact us</div>
    <div>
        <p>
            If you have any questions or would like to know more about our
            products, please contact us using the form below.
        </p>
    </div>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            required
        ></v-text-field>
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>
        <v-textarea
            v-model="message"
            :rules="messageRules"
            label="Message"
            required
        ></v-textarea>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">
            Submit
        </v-btn>
    </v-form>
</template>
<script>
export default {
    mounted() {
        console.log("Contact mounted.");
    },
    data: () => ({
        valid: false,
        name: "",
        nameRules: [
            (v) => !!v || "Name is required",
            (v) =>
                (v && v.length <= 10) || "Name must be less than 10 characters",
        ],
        email: "",
        emailRules: [
            (v) => !!v || "E-mail is required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        message: "",
        messageRules: [
            (v) => !!v || "Message is required",
            (v) =>
                (v && v.length <= 200) ||
                "Message must be less than 200 characters",
        ],
    }),

    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                alert("Submitted");
                this.$refs.form.reset();
            }
        },
    },
};
</script>


<style scoped>
.draw-box {
    border: 1px solid red;
    padding: 10px;
    width: 70%;
}
</style>
