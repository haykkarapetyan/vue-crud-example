<template>
<v-container>
    <v-row justify="center">
        <v-col cols="12" md="4">
            <h2 class="title"> Post {{ $route.params.id }} </h2>
			<p>{{ this.post.title }}</p>
            <p>{{ this.post.body }}</p>
            <v-btn :to="{name: 'home'}">Back</v-btn>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import api from '@/api'
export default {
    data() {
        return {
            post: '',
        }
    },
    async created() {
        this.getPostById()
    },
    methods: {
        async getPostById() {
            this.post = await api.getPost(this.$route.params.id);
        },
    },
}
</script>

<style scoped>
p {
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
}

.title,
p {
    color: #585858;
}
</style>
