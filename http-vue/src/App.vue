<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <hr>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="">Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <input type="text" class="form-control" v-model="node">
                <br><br>
                <button class="btn btn-primary" @click="fetchUsers">Fetch Users</button>
                <br><br>
                <ul class="list-group" v-if="users.length > 0">
                    <li class="list-group-item" v-for="(user, i) in users" :key="i">
                        {{user.username}} - {{user.email}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {},
                node: "user"
            };
        },
        methods: {
            submit() {
                // this.$http.post("user.json", this.user)
                //     .then(res => {
                //         console.log(res);
                //     }, err => {
                //         console.log(err);
                //     });
                // this.resource.save(this.user);
                this.resource.saveAlt(this.user);
            },
            fetchUsers() {
                // this.$http.get("user.json")
                //     .then(res => {
                //         return res.json();
                //     }).then(res => {
                //         const resArr = [];
                //         for(let key in res) {
                //             resArr.push(res[key]);
                //         }
                //         this.users = resArr;
                //     });
                this.resource.getUsers({node: this.node})
                    .then(res => {
                        return res.json();
                    }).then(res => {
                        const resArr = [];
                        for(let key in res) {
                            resArr.push(res[key]);
                        }
                        this.users = resArr;
                    });
            }
        },
        created() {
            const customActions = {
                saveAlt: {
                    method: "POST",
                    url: "alternate-user.json"
                },
                getUsers: {
                    method:"GET"
                }
            };
            this.resource = this.$resource("{node}.json", {}, customActions);
        }
    }
</script>

<style>
</style>
