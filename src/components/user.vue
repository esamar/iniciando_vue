<template lang="html">

    <div class="users">
        <h1>User componment</h1>
        <ul>
            <li v-for='user in users'>
                {{user.name}} - {{user.email}} <button v-on:click='deleteUser'>X</button>
            </li>
        </ul>

        <form v-on:submit.prevent='addUser'>
            <input type = 'text' v-model='newUser.name' placeholder='Nombre'>
            <input type = 'email' v-model='newUser.email' placeholder='Email'>
            <button type='submit'>Add</button>
        </form>

    </div>
    
</template>

<script>
export default {
    data()
    {
        return{
            users:[{
                name: 'Joe',
                email: 'joe@hotmail.com',
                contacted: false
            },
            {
                name:'Juan',
                email:'juan@hola.com',
                contacted: true
            }
            ],
            newUser: {}
        }
    }, 
    methods: {
        addUser(){

            console.log('agregando usuario', this.newUser);
            this.users.push(this.newUser);
            this.newUser={};

        },
        deleteUser(user){

            this.users.splice(this.users.indexOf(user),1);

        }
    },
    created()
    {
        console.log('Componente creado');
        this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.users = res.body);
    }
    
}
</script>

<style lang='css'>

    .users{
        background: #333;
        color: #ffffff;
        padding: 20px;
    }

</style>