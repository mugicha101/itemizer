import React from "react";

const fixDup = function(tasks, name, newName) {
  const names = new Set();
  for (let i = 0; i < tasks.length; i++) {
    names.add(tasks[i]);
  }
  if (names.has(newName)) {
    let i = 2;
    while (names.has(newName + i.toString())) {
      i++;
      if (newName + i.toString() === name)
        return name;
    }
    newName += i.toString();
  }
  return newName;
}

const Task = ({ name, id }) => {
  return (
    <div>
      {/**
       * TODO: add an html or bootstrap element that uses the name variable to display an individual task
       */}
       <div class="label" id={"task-"+id}>
          <div class="title" id={"task_li-"+id}>{name}</div>
          <button class="small remove" id="remove" onClick={function() {
           document.getElementById("task-"+id).remove();
         }}>Remove</button>
         <button class="small rename" id="rename" onClick={function() {
            let newName = prompt("New Name: ");
            if (newName === "" || newName === null || newName === name)
              return;
            let li = document.getElementById("task_li-"+id);
            let div = document.getElementById("task-"+id);
            li.textContent = newName;
            name = newName;
         }}>Rename</button>
       </div>
    </div>
  );
};

export default Task;
