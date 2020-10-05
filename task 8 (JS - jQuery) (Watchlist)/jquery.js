//Click button
$('.button').click(function() {

    if ($('.txtInput').val() != ''){
        let li = $('<li class="list-group-item mt-2 list-group-item-info"></li>').text($('.txtInput').val());
        $('.txtInput').val('');
        $('.list').append(li);
        
        let dell = $('<i class="fa fa-trash float-right"></i>').click(function(){
            let p = $(this).parent();
            p.fadeOut('fast', function(){
                p.remove();
            });
        });
        li.append(dell);
    }
});

//Enter input
$(".txtInput").keydown(function(e) {

    if (e.keyCode == 13 && $('.txtInput').val() != '') {
        let li = $('<li class="list-group-item mt-2 list-group-item-info"></li>').text($('.txtInput').val());
        $('.txtInput').val('');
        $('.list').append(li);
            
        let dell = $('<i class="fa fa-trash float-right"></i>').click(function(){
            let p = $(this).parent();
            p.fadeOut('fast', function(){
                p.remove();
            });
        });
        li.append(dell);
    }
});