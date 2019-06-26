function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      id: id,
      title: newToDoText.value,
      complete: false
    });
    id++;
    newToDoText.value = '';
    renderTheUI();
  }
      function renderTheUI() {
        const toDoList = document.getElementById('toDoList');
        toDoList.textContent = '';

        toDos.forEach(function(toDo) {
          const newLi = document.createElement('li');
          const checkbox = document.createElement('input');
          checkbox.type = "checkbox";

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'DELETE';

          deleteBtn.addEventListener('click', event => {
  toDos = toDos.filter(function (item) {
    console.log('item', item);
    return item.id !== toDo.id;
  })
  console.log('toDos', toDos);
  renderTheUI();
});

          newLi.textContent = toDo.title;
          toDoList.appendChild(newLi);
          newLi.appendChild(checkbox);
          newLi.appendChild(deleteBtn);
   });
  }
addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
 });
  renderTheUI();

}



window.onload = function() {
  onReady();
};

