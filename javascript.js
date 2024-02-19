document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('newTodoInput');
    const addButton = document.getElementById('addTodoButton');
    const todoTable = document.getElementById('todoTable');
    let todos = [];

    addButton.addEventListener('click', addTodo);

    function addTodo() {
        const newTodo = input.value.trim();
        if (newTodo !== '') {
            todos.push(newTodo);
            addTableRow(newTodo);
            input.value = '';
        }
    }

    function addTableRow(text) {
        const row = todoTable.insertRow();
        const cell = row.insertCell(0);
        cell.textContent = text;
        addDeleteButton(row, text);
    }

    function addDeleteButton(row, text) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            const index = todos.indexOf(text);
            if (index !== -1) {
                todos.splice(index, 1);
                row.remove();
            }
        });
        row.insertCell(1).appendChild(deleteButton);
    }
});
