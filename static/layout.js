// window.onload = function () {
function search_manga(keyword) {
    console.log($("#search_keyword").val());
    if($("#search_keyword").val().trim() == 0 || $("#search_keyword").val() == "."){
        document.getElementById("search_keyword").value = "";
        // $("#search_keyword").val() = "";
        document.getElementById("search_keyword").focus();
    } else
    if ($("#search_keyword").val() != "") {
        location.href = `/results/${$("#search_keyword").val()}`;
    }
}

$(document).ready(
    function () {
        // auto_completer(clients)

        $('#submit').click(search_manga);

        $("#search_keyword").keyup(function (event) {
            if (event.keyCode === 13) {
                $("#submit").click();
            }
        });
    }
)
// }