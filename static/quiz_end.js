function calc_score() {
    score = 0
    for (let i = 5; i <= 10; i++) {
        correct_ans = quiz_data[String(i)]['answer']
        console.log(correct_ans)
        let j = i-4
        user_ans = user_answers[String(j)]
        console.log(user_ans)
        if (correct_ans === user_ans) {
            score = score + 1
        }
    }
    $("#score_div").html("You scored " + score + " out of 6 correctly!")
}

$(document).ready(function () {
    calc_score()
    $("#retry_btn").click(function() {
        window.location.href="/quiz/" + 1
    })
})
