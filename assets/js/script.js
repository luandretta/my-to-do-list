// Wait for the DOM to finish loading before running the quiz
document.addEventListener("DOMContentLoaded", function () {

    // declaration of the variables
    const todoForm = document.querySelector("#todo-form");
    const todoInput = document.querySelector("#todo-input");
    const editForm = document.querySelector("#edit-form");
    const editInput = document.querySelector("#edit-input");
    const cancelEditBtn = document.querySelector("#cancel-edit-btn");
    const todoList = document.querySelector("#todo-list");

    /**
     * prevent that information wont be sent to back end
     * and save todo value
     */
    todoForm.addEventListener("submit", (e) => {
        const inputValue = todoInput.value;
        e.preventDefault();

        if (inputValue) {

            saveTodo(inputValue, todoList);
        }
    });

});


// functions
/** 
 * function to create the to do list with buttons to edit the list
 */
function saveTodo(text, todo_list){

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTask = document.createElement("p");
    todoTask.innerHTML = text;
    todo.appendChild(todoTask);

    

    // buttons

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todo_list.append(todo);
}