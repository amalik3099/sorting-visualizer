function bubblef(bubble_data) {
    console.log(bubble_data)
    step1 = false
    $("#bar1").draggable({
        revert: "invalid",
        drag: function(event, ui){
            console.log("draggable")
            $('#learnbar2').addClass('yellow')
            $('#instruct').html('<p>DROP at 1st position since 29 > 10</p>')
            // $('#instruction').html('')
            $('#instruction').addClass('left')
        },
        stop: function(event, ui){
            $('#learnbar2').removeClass('yellow')
            $('#instruction').removeClass('left')
        }
    });

    $("#bar2").droppable({
        revert: "invalid",
        over: function(event, ui){
            console.log("droppable")
            
        },
        out: function(event, ui){

        },
        drop: function (event, ui) {
            $('#sortab').empty()
            $('#instruction').addClass('leftd')
            $('#sortab').html(`<div id = "bar1"><div class="bar heighta" id="learnbar1"><span id="d1" class='down'>${bubble_data.Step2.array[0]}</span></div>
            </div>
            <div id = "bar2"><div class="bar heightc" id="learnbar2"><span id="d2" class='down'>${bubble_data.Step2.array[1]}</span> </div>
            </div>
            <div id = "bar3"><div class="bar heightb" id="learnbar3"><span id="d3" class='down'>${bubble_data.Step2.array[2]}</span> </div>
            </div>
            <div id = "bar4"><div class="bar heightd" id="learnbar4"><span id="d4" class='down'>${bubble_data.Step2.array[3]}</span> </div>
            </div>`)
            $('#instruct').html('<p>Nice work! Now swap 29 and 14 since 29 is greater than 14</p>')
            // $('#step1').html('<span>Step 1</span><img id ="tick" src="../static/data/tick.png" alt="there should" srcset="">')
            $('#step1').html('<div>Step 1<img id ="tick" src="../static/data/tick.png" alt="there should" srcset=""></div><div class="step-description">29 has been swapped with 10</div>')
            step1=true
            $("#bar2").draggable({
                revert: "invalid",
                drag: function(event, ui){
                    if(step1){
                    console.log("bar 2 draggable")
                    $('#learnbar3').addClass('yellow')
                    $('#instruct').html('<p>DROP at 3rd position since 29 > 14</p>')
                    $('#instruction').addClass('leftt')
                    }
                    else{
                        $('#instruct').html('<p>Dont touch that one do the first step first</p>')
                    }
                },
                stop: function(event, ui){
                    if(step1){
                    $('#instruction').removeClass('leftt')
                    $('#learnbar3').removeClass('yellow')
                    }
                    $("#bar3").droppable({
                        revert: "invalid",
                        over: function(event, ui){
                            if(step1){
                            console.log("droppable")
                            }
                        },
                        out: function(event, ui){
                
                        },
                        drop: function (event, ui) {
                            if(step1){
                                $('#sortab').empty()
                                $('#sortab').html(`<div id = "bar1"><div class="bar heighta" id="learnbar1"><span id="d1" class='down'>${bubble_data.Step3.array[0]}</span></div>
                                </div>
                                <div id = "bar2"><div class="bar heightb" id="learnbar2"><span id="d2" class='down'>${bubble_data.Step3.array[1]}</span> </div>
                                </div>
                                <div id = "bar3"><div class="bar heightc" id="learnbar3"><span id="d3" class='down'>${bubble_data.Step3.array[2]}</span> </div>
                                </div>
                                <div id = "bar4"><div class="bar heightd" id="learnbar4"><span id="d4" class='down'>${bubble_data.Step3.array[3]}</span> </div>
                                </div>`)
                            $('.bar').addClass('green')
                            $('#instruction').hide()
                            $('#instruct').html('<p><p>All Sorted<p><p>Good Job!</p></p>')
                            // $('#step2').html('<span>Step 2</span><img id ="tick" src="../static/data/tick.png" alt="there should" srcset="">')
                            $('#step2').html('<div>Step 2<img id ="tick" src="../static/data/tick.png" alt="there should" srcset=""></div><div class="step-description">29 has been swapped with 14</div>')
                            step1=true
                            }
                        },
                    }); 
                }  
            });
        }, 
    });   
}


function insertionf(insertion_data) {
    step1 = false
    console.log(insertion_data)
    $("#bar1").draggable({
        revert: "invalid",
        drag: function(event, ui){
            console.log("draggable")
            $('#learnbar2').addClass('yellow')
            $('#learnbar3').addClass('yellow')
            $('#instruct').html('<p>DROP at 3rd position since 29s correct position is 3rd after 10 and 14</p>')
            $('#instruction').addClass('leftt')

        },
        stop: function(event, ui){
            $('#learnbar2').removeClass('yellow')
            $('#learnbar3').removeClass('yellow')
            $('#instruction').removeClass('leftt')
        }
    });

    $("#bar3").droppable({
        revert: "invalid",
        over: function(event, ui){
            console.log("droppable")
        },
        out: function(event, ui){

        },
        drop: function (event, ui) {
            $('#instruction').addClass('lefttd')
            $('#sortab').empty()
            $('#sortab').html(`<div id = "bar1"><div class="bar heighta" id="learnbar1"><span id="d1" class='down'>${insertion_data.Step3.array[0]}</span></div>
            </div>
            <div id = "bar2"><div class="bar heightb" id="learnbar2"><span id="d2" class='down'>${insertion_data.Step3.array[1]}</span> </div>
            </div>
            <div id = "bar3"><div class="bar heightc" id="learnbar3"><span id="d3" class='down'>${insertion_data.Step3.array[2]}</span> </div>
            </div>
            <div id = "bar4"><div class="bar heightd" id="learnbar4"><span id="d4" class='down'>${insertion_data.Step3.array[3]}</span> </div>
            </div>`)
            $('#instruct').html('<p>Now put 37 is in correct position as it is greater than all (hint 4th)</p>')
            $('#step1').html('<div>Step 1<img id ="tick" src="../static/data/tick.png" alt="there should" srcset=""></div><div class="step-description">29 has been put in 3rd position</div>')
            step1=true
            $("#bar4").draggable({
                revert: "invalid",
                drag: function(event, ui){
                    if(step1){
                    console.log("bar 2 draggable")
                    $('#learnbar4').addClass('yellow')
                    $('#instruction').html('')
                    $('#instruct').html('<p>Put 37 in last position</p>')
                    }
                    else{
                        $('#instruct').html('<p>Check everything in correct position</p>')
                    }
                    $('.bar').addClass('green')
                    $('#instruct').html('<p><p>All Sorted<p><p>Good Job!</p></p>')
                    $('#step2').html('<div>Step 2<img id ="tick" src="../static/data/tick.png" alt="there should" srcset=""></div><div class="step-description">37 has been put in 4th position</div>')
                    $('#instruction').hide()
                },
                stop: function(event, ui){
                    if(step1){
                    $('#learnbar3').removeClass('yellow')
                    }
                    $("#bar4").droppable({
                        revert: "invalid",
                        over: function(event, ui){
                            if(step1){
                            console.log("droppable")
                            }
                        },
                        out: function(event, ui){
                
                        },
                        drop: function (event, ui) {
                            if(step1){
                                $('#sortab').empty()
                                $('#sortab').html(`<div id = "bar1"><div class="bar heighta" id="learnbar1"><span id="d1" class='down'>${insertion_data.Step3.array[0]}</span></div>
                                </div>
                                <div id = "bar2"><div class="bar heightb" id="learnbar2"><span id="d2" class='down'>${insertion_data.Step3.array[1]}</span> </div>
                                </div>
                                <div id = "bar3"><div class="bar heightc" id="learnbar3"><span id="d3" class='down'>${insertion_data.Step3.array[2]}</span> </div>
                                </div>
                                <div id = "bar4"><div class="bar heightd" id="learnbar4"><span id="d4" class='down'>${insertion_data.Step3.array[3]}</span> </div>
                                </div>`)
                            $('.bar').addClass('green')
                            $('#instruct').html('<p><p>All Sorted<p><p>Good Job!</p></p>')
                            $('#step2').html('<span>Step 2</span><img id ="tick" src="../static/data/tick.png" alt="there should" srcset=""><span class="step-description">37 has been put in 4th position<span>')
                            step1=true
                            }
                        },
                    }); 
                }  
            });
        }, 
    });   
}






$(document).ready(function () {

    if(bubble) {
        bubblef(bubble_data);
    }   
    else {
        $('#instruct').html('<p>Put 29 in its correct position which is 3rd so drop it there </p>')

        insertionf(insertion_data); }

});


