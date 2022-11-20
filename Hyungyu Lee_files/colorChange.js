var colorPalette = "#93a9d1"

$(document).ready(function () {
    $("*").css('color',colorPalette)
    $(".content").css('background-color', colorPalette)
    $("*").css('outline-color', colorPalette)
    $("*").css('border-color', colorPalette)

    $(".works").mouseenter(function () {
        $(this).parent().css('background', 'transparent')
        $(this).children().css('color', 'white')
    }).mouseleave(function () {
        $(this).parent().css('background', 'white')
        $(this).children().css('color', colorPalette)
    })

    $(".contentText").mouseenter(function () {
        $(this).css('background', colorPalette)
        $(this).children().css('background', colorPalette)
        $(this).css('color', 'white')
        $(this).children().css('color', 'white')
        $(this).children().children().css('color', 'white')
    }).mouseleave(function () {
        $(this).css('background', 'white')
        $(this).children().css('background', 'white')
        $(this).css('color', colorPalette)
        $(this).children().css('color', colorPalette)
        $(this).children().children().css('color', colorPalette)
    })

})