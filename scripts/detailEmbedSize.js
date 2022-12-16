
var widthDesired = $(".description").width();
    //for details section
$('iframe').css('width',widthDesired);
$('iframe').css('height', widthDesired / 16 * 9);
    
window.onresize = function(event){
var widthDesired = $(".description").width();
    //for details section
$('iframe').css('width',widthDesired);
$('iframe').css('height', widthDesired / 16 * 9);
}