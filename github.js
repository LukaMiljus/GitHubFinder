class Github {
    constructor(){
        this.client_id = '0d5a7848b8fd50209cf9';
        this.client_secret = '43239fc5845ea768756ed1f30947e6e4434cc42e';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}$sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
       


        return{
            profile,
            repos
        }
    }
}