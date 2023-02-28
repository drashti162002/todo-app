let taskCount = 1;
function addButton(){
    let demo1 = document.getElementById("demo1").value;

    let box = document.getElementById("box");

    //box.addEventListener("click", "deleteTask()");
     
    let li = document.createElement("li");
    li.textContent=demo1;
    // li.setAttribute("addToList();");

    let a = document.createElement("a");
    a.setAttribute("onclick", `deleteTask(${taskCount});`);
    a.textContent="x";
    a.href="javascript:void(0)";
    a.className="remove";
    li.setAttribute("id",  `task_${taskCount}`);
    taskCount++;
    li.appendChild(a);

    
    box.appendChild(li);

    
    document.getElementById("demo1").value="";

    console.log(demo1);

}




// function addToList() {
//     const id = x + 1;
//     html += '<li id="' + id + '"><h4><input type="text" id="' + id + '">' + text + '</h4></li>';
//   }

//   function addToList(text) {
//     const id = x + 1;
//     html += `<li id="${id}"><h4><input type="checkbox" id="${id}" />${text}</h4></li>`;
    
//   }

function deleteTask(taskCount) {
    console.log("CHECKING taskCount : ", taskCount);
    // let box = document.getElementById("task_n");
    // let li = box.target;
    // console.log("box",box, li);
    document.getElementById(`task_${taskCount}`).remove();
}

// let btn=document.querySelectorAll("ul");
// btn.addEventListener("cilck" , function(e) {
//     let box = document.getElementById("box");
//     let li=e.target.parentNode;
//     box.removeChild(li);
// });
 