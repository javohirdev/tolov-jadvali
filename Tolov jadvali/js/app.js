var data = [];

function TolovQoshish() {

    var fish = document.getElementById('fish').value;
    var tolov_id = document.getElementById('tolov_id').value;
    var option = document.getElementById('option').value;
    var option_2 = document.getElementById('option_2').value;
    var summa = document.getElementById('summa').value;
    var date = document.getElementById('date').value;

    document.getElementById('fish').value = "";
    document.getElementById('tolov_id').value = "";
    document.getElementById('option').value = "";
    document.getElementById('option_2').value = "";
    document.getElementById('summa').value = "";
    document.getElementById('date').value = "";

    var info = {
        name: fish,
        id: tolov_id,
        option_1: option,
        option_2: option_2,
        summa: summa,
        date: date
    }

    data.push(info);
    console.log(info);
    drawCard();
}

var selectedCard = 0;

// function deletedCard(cardIndex) {
//     selectedCard = cardIndex;
// }

function editCard() {
    var editInput = document.getElementById('edit');
    editInput.classList.toggle('d-block');
    
        // if(editInput.disabled == false){
        //    editInput.disabled = !editInput.disabled;
        // }
    	// else{
        //     editInput.disabled = !editInput.disabled;
        //     let indexof = todos.indexOf(name);
        //     todos[indexof] = editInput.value;
        //     window.localStorage.setItem("todos", JSON.stringify(todos));
        // }
}

function deleteProduct(){
    data.splice(selectedCard, 1);
    $('#delete-modal').modal('hide');
    drawCard();
 
}
function drawCard(){
    var content = "";

    for (var i = 0; i < data.length; i++) {
        content += "<tr>"+
            "<td>"+ (i + 1) +"</td>"+
           "<td>"+ data[i].name +"</td>"+
           "<td>"+ (i + 1) +"</td>"+
           "<td>"+ data[i].option_1 +"</td>"+
           "<td>"+ data[i].option_2 +"</td>"+
           "<td>"+ data[i].summa +"</td>"+
           "<td>"+ data[i].date +"</td>"+
           "<button type='button' class='btn btn-danger mb-3 mt-1 ml-3' onclick='deleteProduct()'>Delete</button>"+
           "<button id='editButton' type='button' class='btn btn-success mb-3 ml-3 mt-1' onclick='editCard()' data-dismiss='modal'>Edit</button>"+
         "</tr>"
    }
    document.getElementById('content').innerHTML = content;
}