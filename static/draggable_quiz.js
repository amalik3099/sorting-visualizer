function save_answer(new_item) {
    $.ajax({
        type: "POST",
        url: "save_answer",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(new_item),
        success: function (result) {
            let answer = result
            // window.location.href="/view/" + curr_id
            console.log(answer)
        },
        error: function (request, status, error) {
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}

function submitRecord() {
    // create a new record with inputs from client and reams box 
    new_record = {}
    let value = []

    $('#sortable').children().each((index, element) => {
        value.push(parseInt($(element).text().trim()))
    });
    console.log(value)



    new_record["answer"] = value
    console.log("new record!")
    console.log(new_record)

    save_answer(new_record)
}

$(document).ready(function () {
    $("#error_handler").hide()



    $("#next_btn").click(function () {

        $("#error_handler").hide()
        submitRecord()
        window.location.href = "/quiz/" + (parseInt(quiz_data["id"]) + 1)

    })
})