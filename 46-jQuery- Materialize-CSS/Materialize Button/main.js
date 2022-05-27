$(function(){
    $('.fixed-action-btn').floatingActionButton(instance);

    var instance = M.FloatingActionButton.getInstance({
        direction: 'left',
        hoverEnabled: false
    });
});