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
