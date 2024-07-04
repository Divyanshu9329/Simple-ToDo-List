const todolist = [{
    name: 'make notes',
    dueDate: '07/07/2024'
},{
    name:'revice them',
    dueDate: '08/07/2024'
}
];

renderTodolist();

function renderTodolist(){

    let todolistHTML = '';

    for(let i = 0; i<todolist.length; i++){
        const todoObject = todolist[i];
        //const name = todoObject.name;
        const { name,dueDate } = todoObject;
        //const dueDate = todoObject.dueDate;

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todolist.splice(${i},1);
            renderTodolist();
        " class = "delete-button">Delete</button>
        `;
        todolistHTML +=html;
    }

    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;
    
    todolist.push({
        // name: name,
        // dueDate: dueDate,
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodolist();
}