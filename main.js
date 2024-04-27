function addTask() {
    var date = document.getElementById("dateInput").value;
    var task = document.getElementById("taskInput").value;
    if (date && task) {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.className = "task";
        li.innerHTML = '<input type="checkbox"><span>' + date + ' - ' + task + '</span>';
        taskList.appendChild(li);
        document.getElementById("dateInput").value = "";
        document.getElementById("taskInput").value = "";
    } else {
        alert("Please enter both date and task.");
    }
}

function addGoal() {
    var goalInput = document.getElementById("goalInput");
    var goalList = document.getElementById("goalList");
    var goalText = goalInput.value;
    if (goalText.trim() !== "") {
      var li = document.createElement("li");
      li.textContent = goalText;
      goalList.appendChild(li);
      goalInput.value = "";
    } else {
      alert("Please enter a valid goal.");
    }
  }

  function
  
  
  
  
  
  
  
  