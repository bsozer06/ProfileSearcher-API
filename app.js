const profile = new Profile();
const ui = new UI();

let searchingProfile = document.querySelector('#search-profile');

searchingProfile.addEventListener('keyup', (evt) => {

    ui.clear();

    let textValue = evt.target.value;

    if (textValue !== '') {
        profile.getProfile(textValue)
            .then(result => {
                // result.length === 0 ? ui.displayAlert(textValue) : ui.displayProfile( result[0] );
                if (result.length === 0) {
                    ui.displayAlert(textValue);
                } else {
                    // console.log(result.profileResponse[0]);
                    // console.log(result.todoResponse);
                    ui.displayProfile(result.profileResponse[0]);
                    ui.displayTodo(result.todoResponse);
                }
            })
            .catch(err => {
                ui.displayAlert(textValue);
            });
    }
})


