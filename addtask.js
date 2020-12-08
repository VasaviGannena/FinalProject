$("#AddTask").click(function () {
    var name = $("name").val();
    var AssignedTo = $("AssignedTo").val();
    var duedate = $("duedate").val();
    var description = $("description").val();
    var checkbox = $("checkbox").val();

    if (name === '' || AssignedTo === '' || duedate === '' || description === '' || checkbox === '') {
        alert(" filles are missing ");
    };
});