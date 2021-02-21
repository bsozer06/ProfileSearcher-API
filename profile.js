class Profile {

    constructor() {
        this.id = '',
        this.secret = ''
    }

    async getProfile(username) {

        let profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
            .then(result => result.json())
            .then(data => { return data })

        let todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profileResponse[0].id}`)
            .then(result => result.json())
            .then(data => { return data })

        return { profileResponse, todoResponse };
    }

}


