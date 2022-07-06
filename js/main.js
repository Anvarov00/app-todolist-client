let boards = [];
let selectedIndex = -1;

function showCard(){
    // document.getElementById("card").classList.remove("d-none");
    // document.getElementById("card").classList.add("nimadir");

    document.getElementById("card").classList.toggle("d-none");
}

function addBoard(){
    if (selectedIndex === -1){

        let boardTitle = document.getElementById("board-title").value;

        let newBoard = {
            title: boardTitle,
            tasks: []
        };

        if (boardTitle.length > 0){
            document.getElementById("board-title").value = "";

            boards.push(newBoard);
            // console.log(boards);
            drawPage();
        } else {
            alert("Ma'lumot kiriting!");
        }

    }else {
        boards[selectedIndex].title = document.getElementById("board-title").value;
        drawPage();
    }
}
function drawPage(){
    let result = "";

    for (let i = 0; i < boards.length; i++){

        let result2 = "";
        for (let j = 0; j < boards[i].tasks.length; j++){
            result2 += "<div class='task'><span>"+ boards[i].tasks[j] +"</span><span class='task-close' onclick='deleteTask("+ i +","+ j +")'>&times;</span></div>"
        }

        result +=
            "<div class='col-4 mb-3'>" +
            "<div class='card-body'>"+ result2 +"</div>" +
            "<div class='alert-danger'></div>" +
            "<div class='card-footer d-flex justify-content-between mt-2'>" +
            "<button type='button' class='btn btn-success   d-block' onclick='addTask("+ i +")'>Add</button>" +
            "<button type='button' class='btn btn-success  d-block' onclick='editProduct("+ i +")'>Edit</button>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result").innerHTML = result;
}

function addTask(index){
    let taskTitle = document.getElementById("task-title" + index).value;
    boards[index].tasks.push(taskTitle);
    drawPage();
}

function deleteTask(index1, index2){
    boards[index1].tasks.splice(index2, 1);
    drawPage();
}

function editProduct(index){
    document.getElementById("board-title").value = boards[index].title;
    selectedIndex = index;
}

function deleteWord(index){
    boards.splice(index, 1);
    drawPage();
}