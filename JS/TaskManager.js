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

console.log(newTask);

        this.task.push(newTask);


        // card.appendChild(list);
    }
}
