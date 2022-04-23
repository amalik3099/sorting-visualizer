$( document ).ready(function() {
    
    employees = [
        "Phyllis",
        "Angela",
        "Dwight",
        "Oscar",
        "Creed",
        "Pam",
        "Jim",
        "Stanley",
        "Michael",
        "Kevin",
        "Kelly"
        ]
    
    nonppc = employees;
    ppc = [];

    function remove(){
        $('.ppctitle').removeClass('dark');
        $('.nonppctitle').removeClass('dark');
        $('.ppctitle').removeClass('darker');
        $('.nonppctitle').removeClass('darker'); 
    }

    function render(){
        $('.ppc').empty();
        $('.nonppc').empty();
        ppc.forEach((element, index) => {
            console.log(index)
            item =`<div class="item draggable" data-name=${element}>${index+1}: ${element} </div>`;
            $('.ppc').append(item);
            $('item').css("left", 0);
            $('item').css("top", 0);
            $(".item").draggable({
                revert: "invalid",
                drag: function(event, ui){
                    console.log("start")
                    curr = ui.helper
                    $(curr).addClass('z');
                    index = curr.data('name')
                    if(ppc.includes(index)){
                        $('.nonppctitle').addClass('dark')
                    }
                    else{
                        $('.ppctitle').addClass('dark')
                    }
                },
                stop: function(event, ui){
                    remove();
                    }
            });
        });
        
        nonppc.forEach((element, index) => {
            item =`<div class="item draggable" data-name=${element}>${index+1}: ${element} </div>`;
            $('.nonppc').append(item);
            $('item').css("left", 0);
            $('item').css("top", 0);
            $(".item").draggable({
                revert: "invalid",
                drag: function(event, ui){
                    console.log("start")
                    curr = ui.helper
                    $(curr).addClass('z');
                    index = curr.data('name')
                    if(ppc.includes(index)){
                        $('.nonppctitle').addClass('dark')
                    }
                    else{
                        $('.ppctitle').addClass('dark')
                    }
                },
                stop: function(event, ui){
                    remove();
                    }
            });
        });
        $('.top').css('border', 'none');
        $('.item').removeClass('z');
        remove();
    }


    $(".ppctitle").droppable({
        revert: "valid",
        over: function(event, ui){
            curr = ui.helper
            $(curr).addClass('z');
            index = curr.data('name')
            $('.ppctitle').addClass('darker')

        },
        out: function(event, ui){
            $('.ppctitle').removeClass('darker')

        },
        drop: function (event, ui) {
                ppc.push(ui.draggable.data("name"));
                nonppc = nonppc.filter(item => item !== ui.draggable.data("name"))
                console.log(ui.draggable.data("name"));
                nonppc.filter(element => element != ui.draggable.data("name"))
                render(event, ui);

        },
    });



    $(".nonppctitle").droppable({
        revert: "valid",
        over: function(event, ui){
            curr = ui.helper
            $(curr).addClass('z');
            index = curr.data('name')
            if(ppc.includes(index)){
                $('.nonppctitle').addClass('darker')
                console.log("checking non")
            }
        },
        out: function(event, ui){
            $('.nonppctitle').removeClass('darker')

        },
        drop: function (event, ui) {
                nonppc.push(ui.draggable.data("name"));
                ppc = ppc.filter(item => item !== ui.draggable.data("name"))
                console.log(ui.draggable.data("name"));
                render(event, ui);
        },
    });


    render();

});
