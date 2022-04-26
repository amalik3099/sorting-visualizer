function calc_score() {
    score = 0

    for (let i = 1; i <= 10; i++) {
        correct_ans = quiz_data[String(i)]['answer']
        console.log("correct:", correct_ans)

        user_ans = user_answers[String(i)]
        console.log("user:", user_ans)
        if (JSON.stringify(correct_ans) == JSON.stringify(user_ans)) {
            console.log("correct!");
            score = score + 1
            let temp_correct = $('<div>').html('<div id="feedback_q">Question ' + i + '</div><div id="ans_tick">' + '&#10004;' + '</div>')
            // let new_div = $('<div>').attr('id','name_div').attr('data-name',value).attr('data-parent', cont)
            // $(new_div).html(value)
            // $('#step2').html('<span>Step 2</span><img id ="tick" src="../static/data/tick.png" alt="there should" srcset="">')
            $("#feedback_div").append(temp_correct)
        }
        else {
            let temp_wrong = $('<div>').html('<div id="feedback_q">Question ' + i + '</div><div id="ans_wrong">' + '&times;' + '</div>')
            $("#feedback_div").append(temp_wrong)    
        }
    }
    $("#score_div").html("You scored " + score + " out of 10 correctly!")
}

$(document).ready(function () {
    calc_score()
    $("#retry_btn").click(function () {
        window.location.href = "/quiz/" + 1
    })
})
