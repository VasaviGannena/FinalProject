class TaskManager {
    constructor(currentId = 0) {
        this.task = [];
        this.currentId = currentId;
    }

    addTask(formname, formAssignedTo, formduedate, formstatus, formdescription) {
        const newTask = {
            id: this.curentId++,
            formname: formname,
            formAssignedTo: formAssignedTo,
            formduedate: formduedate,
          formdescription: formdescription,
 
            formstatus: formstatus,
        };

// console.log(newTask);

        this.task.push(newTask);
    };

/* Update status*/ 
  // Method to get the book id to update status
//   gettasknameId(taskId) {
//     let foundTask;

//     for (let i = 0; i < this.task.length; i++) {

//       const tasks = this.task[i];

//       if(task.id === taskId){
//         foundTask = tasks;
//       };
//     };
//     return foundTask;
//   };

   /*Display list of tasks*/
  render() {
      const taskHtmlList = [];

      for(let i = 0; i < this.task.length; i++) {
        const tasks = this.task[i];
    /*Format date - dd/mm/yyyy */
      // Get the Javascript object new Date, give it the argument book.date, and assign it to a variable
        const DueDate = new Date(tasks.formduedate);
      // Save the formatted date in a variable
        const formattedDate = DueDate.getDate() + '/' + (DueDate.getMonth() + 1) + '/' + DueDate.getFullYear();  
        
        const taskHtml = createTaskHtml(tasks.formname, tasks.formAssignedTo, tasks.formdescription, formattedDate, tasks.formstatus);

        taskHtmlList.push(taskHtml);
      };
        const tasksHtml = taskHtmlList.join('\n');

        const taskList = document.querySelector('#task-card');
        taskList.innerHTML = tasksHtml;
    };

   /*Display list of card*/
  render() {
      const taskHtmlList = [];

      for(let i = 0; i < this.task.length; i++) {
        const tasks = this.task[i];
    /*Format date - dd/mm/yyyy */
      // Get the Javascript object new Date, give it the argument tasks.formduedate, and assign it to a variable
        const DueDate = new Date(tasks.formduedate);
      // Save the formatted date in a variable
        const formattedDate = DueDate.getDate() + '/' + (DueDate.getMonth() + 1) + '/' + DueDate.getFullYear();  
        
        const taskHtml = createTaskHtml(tasks.formname, tasks.formAssignedTo, tasks.formdescription, formattedDate, tasks.formstatus);

        taskHtmlList.push(taskHtml);
      };
        const tasksHtml = taskHtmlList.join('\n');

        const taskList = document.querySelector('#task-card');
        taskList.innerHTML = tasksHtml;

    };  
    
  }
  
  const createTaskHtml = (formname, formAssignedTo, formdescription, DueDate, formstatus) => {

    return `
            <li class="list-group-item mt-2">
            <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${formname}</h5>
          <span class="badge ${formAssignedTo === 'Vasavi' ? 'badge-dark' : 'badge-info'}">${formAssignedTo}</span>
           <span class="badge ${formstatus === 'To do' ? 'badge-success' : 'badge-warning'}">${formstatus}</span>


</div>
         <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Description: ${formdescription}</small>
           
           


            </div>
            
            <div class="d-flex w-100 mt-3 justify-content-between align-items-center">
            <small>DueDate: ${DueDate}</small>

          
            </div>
            </li>
          `;
  }
  
