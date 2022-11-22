var colorPalette = "#93a9d1"

$(document).ready(function () {
    $("*").not(".colors").css('color', colorPalette)
    $(".content").not(".colors").css('background-color', colorPalette)
    $("*").not(".colors").css('outline-color', colorPalette)
    $("*").not(".colors").css('border-color', colorPalette)

    $(".colors").click(function () {
        //alert("searching for new color");
        $("*").not(".colors").css('color', $(this).css("background-color"))
        $(".content").not(".colors").css('background-color', $(this).css("background-color"))
        $("*").not(".colors").css('outline-color', $(this).css("background-color"))
        $("*").not(".colors").css('border-color', $(this).css("background-color"))

        colorPalette = $(this).css("background-color")
    })

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