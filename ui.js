class UI {
    constructor() {
        this.profileContainerElement = document.querySelector('#profile-container');
        this.alertElement = document.querySelector("#alert");
    }
    displayProfile(profile) {
        let htmlStructure = `
        <div class="card card-body">
        <div class="row">
            <div class="col-md-3">
                <a href="https://placeholder.com"><img src="https://via.placeholder.com/150" class="img-thumbnail"></a>
                </div>
                <div class="col-md-9">
                    <h4>Contact</h4>
                    <ul class="list-group">
                        <li class="list-group-item">name: ${profile.name}</li>
                        <li class="list-group-item">surname: ${profile.username}</li>
                        <li class="list-group-item">email: ${profile.email}</li>
                        <li class="list-group-item">address: 
                            ${profile.address.street}
                            ${profile.address.city}
                            ${profile.address.zipcode}
                            ${profile.address.suite}
                        </li>
                        <li class="list-group-item">phone: ${profile.phone}</li>
                        <li class="list-group-item">website: ${profile.website}</li>
                    </ul>
                    <h4 class="mt-4">User Todo List</h4>
                    <ul id="todo" class="list-group">
                    </ul>
                </div>
            </div>
        </div>`;

        this.profileContainerElement.innerHTML = htmlStructure;
    }
    displayAlert(textValue) {
        this.alertElement.innerHTML = `${textValue} is not found.`;
    }

    displayTodo(todo) {
        let html = "";
        todo.forEach(todoItem => {
            console.log(todoItem);
            if(todoItem.completed) {
                html += ` <li class="list-group-item bg-success">${todoItem.title}</li> `;
            } else {
                html += ` <li class="list-group-item bg-danger">${todoItem.title}</li> `;
            }
        });
        this.profileContainerElement.querySelector("#todo").innerHTML = html;

    }

    clear() {
        this.profileContainerElement.innerHTML = '';
        this.alertElement.innerHTML = '';
    }
}