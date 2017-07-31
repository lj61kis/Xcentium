$(function () {

    var image = $('.grid-image img');

    image.draggable({
        
        revert: true,
        zIndex: 1000,
        cursor: "move"
    }).droppable({
        over: function(event, ui){
            $(this).addClass("ui-droppable-hover");
        },
        out: function(event,ui){
            $(this).removeClass("ui-droppable-hover");
        },
        drop: function (event, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            
            var imageSwapped = droppedOn.attr("src");
            var imageOriginal = dropped.attr("src");

            dropped.attr("src", imageSwapped);
            droppedOn.attr("src", imageOriginal);

            $(this).removeClass("ui-droppable-hover");
        }
    });

});