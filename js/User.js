// ini untuk mengurus bisnis logic
// ini untuk kelola crud

class User {

    constructor() {
        this.users = this.getUsers() || [];
    }

    saveUser(userData){
        const newUser = {
            id: Date.now(),
            ...userData,
        };

        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        // return window.location.href = '../signin.html';
        
        return {
            success: true,
        };
    }

    signInUser(usernameByInput){
        // proses pengembelian data username pada localstorage
        const userExist = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());

        if(userExist){
            // proses pengembalian data ke signIn.js controller
            return {
                success: true,
                username,
            };
        }
        else{
            return {
                success: false,
                message: 'data tidak ditemukan',
            };
        }


    }

    getUsers(){
        return JSON.parse(localStorage.getItem('users')) || [];
    }

}