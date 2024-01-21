let todoList = [];

let bookmarks = [{ name: "add bookmark", link: "" }, { name: "add bookmark", link: "" }, { name: "add bookmark", link: "" }];

let theme = 0;

function themeToggle() {
  if (theme == 0 ) {
    document.getElementById('avatar').setAttribute('src', './assets/pixel-corgi.png');
    document.getElementById('header').style.backgroundImage = "url('assets/blue-gingham.jpg')";
    document.getElementsByClassName('body')[0].style.backgroundColor = '#95c3e24f';
    localStorage.setItem('theme', 1);
  }
  else {
    document.getElementById('avatar').setAttribute('src', './assets/panda.png');
    document.getElementById('header').style.backgroundImage = "url('assets/pink-gingham.jpg')";
    document.getElementsByClassName('body')[0].style.backgroundColor = '#fac6ca80';
    localStorage.setItem('theme', 0);
  }
  
  
}

function addTodoItem() {
  let userInput = document.getElementById('todo-input').value;
  if (userInput.trim() !== '') {
    todoList.push({ text: userInput, completed: false });
    saveTodoToLocalStorage();
    updateTodoUI();
  }
}

function addBookmark1() {
  // Display a prompt with a message and an input field
  let text = window.prompt("Enter bookmark name:");
  let link = window.prompt("Enter bookmark link:");
  if (link.trim() !== '' && text.trim() !== "") {
    bookmarks[0].link = link;
    bookmarks[0].name = text;
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    updateBookmarkUI();
  }
}
function addBookmark2() {
  // Display a prompt with a message and an input field
  let text = window.prompt("Enter bookmark name:");
  let link = window.prompt("Enter bookmark link:");
  if (link.trim() !== '' && text.trim() !== "") {
    bookmarks[1].link = link;
    bookmarks[1].name = text;
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    updateBookmarkUI();
  }
}
function addBookmark3() {
  // Display a prompt with a message and an input field
  let text = window.prompt("Enter bookmark name:");
  let link = window.prompt("Enter bookmark link:");
  if (link.trim() !== '' && text.trim() !== "") {
    bookmarks[2].link = link;
    bookmarks[2].name = text;
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    updateBookmarkUI();
  }
}

function updateBookmarkUI() {
  document.getElementById('bookmark1-name').textContent = bookmarks[0].name;
  var link1 = document.getElementById('bookmark1-link');
  link1.setAttribute('href', bookmarks[0].link);

  document.getElementById('bookmark2-name').textContent = bookmarks[1].name;
  var link2 = document.getElementById('bookmark2-link');
  link2.setAttribute('href', bookmarks[1].link);

  document.getElementById('bookmark3-name').textContent = bookmarks[2].name;
  var link3 = document.getElementById('bookmark3-link');
  link3.setAttribute('href', bookmarks[2].link);
}

function saveTodoToLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function retrieveFromLocalStorage() {
  let theme = localStorage.getItem('theme');
  let storedTodoList = localStorage.getItem('todoList');
  if (storedTodoList) {
    todoList = JSON.parse(storedTodoList);
    updateTodoUI();
  }
  let storedBookmarks = localStorage.getItem('bookmarks');
  if (storedBookmarks) {
    bookmarks = JSON.parse(storedBookmarks);
    updateBookmarkUI();
  }
}

function toggleCompletion(index) {
  todoList[index].completed = !todoList[index].completed;
  saveTodoToLocalStorage();
  updateTodoUI();
}

function updateTodoUI() {
    let theme = localStorage.getItem('theme');

    let todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = ''; // Clear the list
  
    todoList.forEach(function(item, index) {
      let listItem = document.createElement('li');
      listItem.className = 'todo-item';
  
      // Add a toggle completion button for each item
      let toggleButton = document.createElement('img');
      toggleButton.src = item.completed ? './assets/checked.png' : './assets/unchecked.png';
      toggleButton.className = 'todo-icon icon-small'; 
      toggleButton.onclick = function() {
        toggleCompletion(index);
      };
  
      listItem.appendChild(toggleButton);
  
      // Add text content after the toggle button
      listItem.appendChild(document.createTextNode(item.text));
  
      if (item.completed) {
        // Apply strikethrough style for completed items
        listItem.style.textDecoration = 'line-through';
      }
  
      todoListElement.appendChild(listItem);
    });
  }

// Retrieve data from local storage when the page loads
window.onload = function() {
  retrieveFromLocalStorage();
};
