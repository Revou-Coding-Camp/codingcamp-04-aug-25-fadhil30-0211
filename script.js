// script.js
const todoInput = document.getElementById('todo-input');
const todoDate = document.getElementById('todo-date');
const addBtn = document.getElementById('add-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');
const todoList = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
    todoList.innerHTML = '';
    if (todos.length === 0) {
        todoList.innerHTML = '<tr><td colspan="4" class="no-task">No task found</td></tr>';
        return;
    }

    todos.forEach((todo, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${todo.task}</td>
            <td>${todo.date}</td>
            <td>${todo.completed ? 'Completed' : 'Pending'}</td>
            <td>
                <button onclick="toggleStatus(${index})">${todo.completed ? 'Undo' : 'Done'}</button>
                <button onclick="deleteTodo(${index})">Delete</button>
            </td>
        `;

        todoList.appendChild(row);
    });
}

function addTodo() {
    const task = todoInput.value.trim();
    const date = todoDate.value;

    if (task === '' || date === '') {
        alert('Please fill in both fields.');
        return;
    }

    todos.push({ task, date, completed: false });
    todoInput.value = '';
    todoDate.value = '';
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function toggleStatus(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

function deleteAll() {
    todos = [];
    renderTodos();
}

addBtn.addEventListener('click', addTodo);
deleteAllBtn.addEventListener('click', deleteAll);

renderTodos();
