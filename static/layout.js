$(document).ready(function () {
    $(".bar").draggable({
        revert: "valid",
        drag: function(event, ui){
            console.log("start")
        },
        stop: function(event, ui){
            
            }
        });
})