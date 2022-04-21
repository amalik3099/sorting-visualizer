function save_answer(new_item) {        
    $.ajax({
        type: "POST",
        url: "save_answer",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(new_item),
        success: function(result){
            let answer = result
            // window.location.href="/view/" + curr_id
            console.log(answer)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}

function submitRecord(value) {
    // create a new record with inputs from client and reams box 
    new_record = {}
    $("#option1", "#option2", "#option3", "#option4").click(function() {
        if (this.id == 'option1') {
            value = $("#option1").val()
        }
        else if (this.id == 'option2') {
            value = $("#option2").val()
        }
        else if (this.id == 'option3') {
            value = $("#option3").val()
        }
        else if (this.id == 'option4') {
            value = $("#option4").val()
        }
    })
    new_record["answer"] = value
    console.log("new record!")
    console.log(new_record)
    // call makeRecords() function to refresh page 
    save_answer(new_record)
}

$(document).ready(function () {
    $("#error_handler").hide()
    let value = ""
    $("#option1").click(function() {
        $("#error_handler").hide()
        value = $("#option1").text()
        console.log(value)
    })
    $("#option2").click(function() {
        $("#error_handler").hide()
        value = $("#option2").text()
        console.log(value)
    })
    $("#option3").click(function() {
        $("#error_handler").hide()
        value = $("#option3").text()
        console.log(value)
    })
    $("#option4").click(function() {
        $("#error_handler").hide()
        value = $("#option4").text()
        console.log(value)
    })
    $("#next_btn").click(function() {
        if (value == "") {
            $("#error_handler").show()
        }
        else {
            $("#error_handler").hide()
            submitRecord(value)
            window.location.href="/quiz/" + (parseInt(quiz_data["id"])+1)
        }
    }) 
})
