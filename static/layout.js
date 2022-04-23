function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function () {
    $("#open_sidebar").click(function() {
        openNav()
    })
    $(".closebtn").click(function() {
        closeNav()
    })
    $(".home_btn").click(function() {
        window.location.href = "/"
    })
    $(".insertion_btn").click(function() {
        window.location.href = "/learn/5"
    })
    $(".bubble_btn").click(function() {
        window.location.href = "/learn/1"
    })
    $(".quiz_btn").click(function() {
        window.location.href = "/quiz/1"
    })
});
