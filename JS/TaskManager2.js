class TaskManager {
    constructor(currentId = 0) {
        this.task = [];
        this.currentId = currentId;
    }

    addTask(formname, formAssignedTo, formduedate, formdescription) {
        const newTask = {
            id: this.curentId++,
            formname: formname,
            formAssignedTo: formAssignedTo,
            formduedate: formduedate, 
            formstatus: 'TODO',
            formdescription: formdescription,
        };



        this.task.push(newTask);

 // Get the Javascript object new Date, give it the argument newBook.date, and assign it to a variable
 const taskDate = new Date(newTask.formduedate);
 // Format date to be dd/mm/yyyy
 const formattedDate = taskDate.getDate() + '/' + (taskDate.getMonth() + 1) + '/' + taskDate.getFullYear();

 // Select the empty div from the HTML and assign it to a variable
 const card = document.querySelector('#task-card');
 // Create a new element <ul> in the html file and give it a class
 const list = document.createElement('ul');
 list.className ='list-group';
 // Create an HTML card to display the new book added
 list.innerHTML = `<li id=${newTask.id} class="list-group-item mt-2">
                   <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
                     <h5>${newTask.formname}</h5>
                     <span class="badge badge-danger">${newTask.formstatus}</span>
                     <span class="badge badge-danger">${newTask.formAssignedTo}</span>
                   </div>
                   <div class="d-flex w-100 mb-3 justify-content-between">
                     <small>Description: ${newTask.formdescription}</small>
                     
                   </div>
                   <div class="d-flex w-100 mt-3 justify-content-between align-items-center">
                     <small>Due Date: ${formattedDate}</small>
                    <button class="btn btn-outline-success done-button">Mark As Done</button>
                   </div>
                   </li> 
       `; 
 // Append the new HTML card to the empty div
 card.appendChild(list);
 
}     
}

