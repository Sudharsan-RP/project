let arr = [];


function addTodo() {

    let inputElement = document.querySelector('.todo-input-value');
    let todoInputValue = inputElement.value.trim();
    let container = document.querySelector('.container');
    arr.push(todoInputValue);

    container.innerHTML +=
    `
    <div>
    
      <div class = "todo-html"> 
        ${todoInputValue} 
      </div>

      <div>
      <button onclick = "editTodo(event)">Edit</button>
      </div>

      <div>
      <button onclick = "deleteTodo(event)">Delete</button>
      </div>

    </div>

    `
}

function deleteTodo (event) {
  event.target.parentElement.parentElement.remove()
};

function editTodo (event) {
  let todoHtml = document.querySelector('.todo-html')
  .textContent = '';
 console.log(event.target.parentElement.parentElement);
};