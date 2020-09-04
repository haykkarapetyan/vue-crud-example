<template>
<v-container>

    <v-row justify="space-around">
        <v-col cols="12" class="col-sm-12 col-md-12 col-lg-7">
            <v-simple-table class="posts-table">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">Id</th>
                            <th class="text-left">Title</th>
                            <th class="text-left">Text</th>
                            <th class="text-left">Updated At</th>
                            <th class="text-left">Tools</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="post in posts" :key="post.id">
                            <td class="id-num">{{ post.id }}</td>
                            <td>
                                <router-link :to="{name: 'onePost', params: {id: post.id}}" class="add-post title-style">{{ post.title }}</router-link>
                            </td>
                            <td>{{ truncate(post.body, 150) }}</td>
                            <td>{{ post.updatedAt }}</td>
                            <td class='d-flex align-center'>
                                <v-btn color="primary" @click.prevent="choosePostToEdit(post)">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn color="error" @click.prevent="deletePost(post.id)">
                                    <v-icon dark>mdi-delete</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-col cols="12" class="col-sm-12 col-md-12 col-lg-4">
            <div :title="(model.id ? 'Edit Post ID#' + model.id : 'New Post')">
                <v-form @submit.prevent="savePost">
                    <h2> Add new post </h2>
                    <v-text-field solo label="Title" v-model="model.title" required></v-text-field>
                    <v-textarea solo name="input-7-4" v-model="model.body" label="Text"></v-textarea>
                    <v-btn type="submit" color="success">Save Post</v-btn>
                </v-form>
            </div>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import api from '@/api'
export default {
    data() {
        return {
            posts: [],
            model: {}
        }
    },
    async created() {
        this.refreshPosts()
    },
    methods: {
        async refreshPosts() {
            this.posts = await api.getPosts()
        },
        async choosePostToEdit(post) {
            this.model = Object.assign({}, post)
        },
        async savePost() {
            if (this.model.id) {
                await api.updatePost(this.model.id, this.model)
            } else {
                await api.createPost(this.model)
            }
            this.model = {}
            await this.refreshPosts()
        },
        async deletePost(id) {
            if (confirm('Are you sure you want to delete this post?')) {
                if (this.model.id === id) {
                    this.model = {}
                }
                await api.deletePost(id)
                await this.refreshPosts()
            }
        },
        truncate(string, value) {
            return string.length > value ? (string || '').substring(0, value) + '…' : string;
        }
    }
}
</script>

<style scoped>
button {
    margin: 0 5px;
}

.add-post {
    margin-top: 20px;
}

.posts-table {
    border: 1px solid #ccc;
}

thead {
    background: #f9f9f9;
    text-transform: uppercase;
}

td,
th {
    border-right: 1px solid #ccc;
}

td:last-child,
th:last-child {
    border: none;
}

.v-data-table>.v-data-table__wrapper>table>tbody>tr>td {
    min-height: 70px;
}

.v-btn:not(.v-btn--round).v-size--default {
    height: 30px;
    min-width: 30px;
}

.mdi:before,
.mdi-set {
    font-size: 16px;
}

.title-style {
    color: rgba(0, 0, 0, 0.87);
}

.id-num {
    background: #f9f9f9;
    color: #000;
}

.title {
    color: #585858;
}
</style>
