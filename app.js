const github = new Github;
const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e)=> {
const userTxt = e.target.value;
if(userTxt !== ''){
    //make http call
    github.getUser(userTxt)
    .then(data =>{
        if(data.profile.message === "Not Found"){
            //show alert
            ui.showAlert('User not found', 'alert alert-danger');
        } else {
            //show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
        }
    })
} else {
    //clear profile
    ui.clearProfile();
}
})