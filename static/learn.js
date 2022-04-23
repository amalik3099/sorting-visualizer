function bubblef() {
    let step1 = false
    let step2 = false
    let step3 = false

    $("#bar1").draggable({
        revert: "invalid",
        drag: function(event, ui){
            $('#bar2').addClass('yellow')
            $('#instruction').html('<p>Swap 29 and 14 as 29 is greater than 14</p>')

        },
        stop: function(event, ui){
            $('#bar2').removeClass('yellow')
            $('#d1').text('10')
            $('#d2').text('29')
            $('#bar1').addClass('heighta')
            $('#bar2').addClass('heightc')
            $('#step1').html('<span>Step 1</span><img id ="tick" src="../static/data/tick.png" alt="there should" srcset="">')
            step1 = true    
            $('#instruction').html('<p>Nice work! Now swap 29 and 14 since 29 is greater than 14</p>')
        }
        });

    $("#bar2").draggable({
        revert: "invalid",
        drag: function(event, ui){
            $('#bar3').addClass('yellow')
        },
        stop: function(event, ui){
            $('#bar2').removeClass('heightc')
            $('#bar3').removeClass('yellow')
            $('#d2').text('14')
            $('#d3').text('29')
            $('#bar2').addClass('heightb')
            $('#bar3').addClass('heightc')
            $('#step2').html('<span>Step 2</span><img id ="tick" src="../static/data/tick.png" alt="there should" srcset="">')
            step2 = true   
            $('.bar').addClass('green') 
            $('#instruction').html('<p>All Sorted<p><p>Good Job!</p>')
        }
        });
}

function insertionf() {
    let step1 = false
    let step2 = false
    let step3 = false

    $("#bar1").draggable({
        revert: "invalid",
        drag: function(event, ui){
            $('#bar2').addClass('yellow')
            $('#bar3').addClass('yellow')
            $('#instruction').html('<p>Insert 29 in 3rd position since 2 elements are smaller and 1 is greater</p>')

        },
        stop: function(event, ui){
            $('#bar3').removeClass('yellow')
            $('#bar2').removeClass('yellow')
            $('#bar4').addClass('yellow')
            $('#d1').text('10')
            $('#d2').text('14')
            $('#d3').text('29')
            $('#bar1').addClass('heighta')
            $('#bar2').addClass('heightb')
            $('#bar3').addClass('heightc')
            $('#step1').html('<span>Step 1</span><img id ="tick" src="../static/data/tick.png" alt="there should" srcset="">')
            step1 = true    
            $('#instruction').html('<p><strong>Drag 37<strong> is in correct position as it is greater than all</p>')
        }
        });

        $("#bar4").draggable({
            revert: "invalid",
            drag: function(event, ui){
                $('.bar').addClass('green')
            },
            stop: function(event, ui){
                $('#bar4').removeClass('yellow')
                $('#step2').html('<span>Step 2</span><img id ="tick" src="../static/data/tick.png" alt="there should" srcset="">')
                step1 = true    
                $('#instruction').html(`<p>Also now we see every other number is also in its correct position</p>
                <p>Good Job</p>
                `)
            }
            });
}

$(document).ready(function () {
    
    if(bubble) bubblef();   
    else insertionf(); 

})
