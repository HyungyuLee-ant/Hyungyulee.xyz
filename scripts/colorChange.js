let colorPalette = "#93a9d1" //default color

$(document).ready(function () {
    if (sessionStorage.getItem("colorPalette")) { //if this is null, we will not get color values from session storage, which does not exist.
        colorPalette = sessionStorage.getItem("colorPalette")
    }

    //apply color changes to every elements except color palette
    $("*").not(".colors").css('color', colorPalette)
    $(".content").not(".colors").css('background-color', colorPalette)
    $("*").not(".colors").css('outline-color', colorPalette)
    $("*").not(".colors").css('border-color', colorPalette)

    //if color palette is clicked
    $(".colors").click(function () {
        //apply color to every element except color palette
        //get color by clicked element's $(this).css("background-color")
        $("*").not(".colors").css('color', $(this).css("background-color"))
        $(".content").not(".colors").css('background-color', $(this).css("background-color"))
        $("*").not(".colors").css('outline-color', $(this).css("background-color"))
        $("*").not(".colors").css('border-color', $(this).css("background-color"))
        //save the color to variable of this session
        sessionStorage.setItem("colorPalette", $(this).css("background-color"))
        colorPalette = $(this).css("background-color")
        // alert(colorPalette)
    })

    //for main page
    $(".works").mouseenter(function () { //mouse hovering
        $(this).parent().css('background', 'transparent')
        $(this).children().css('color', 'white')
    }).mouseleave(function () { //mouse hovering ended
        $(this).parent().css('background', 'white')
        $(this).children().css('color', colorPalette)
    })

    //for works/projects page
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

});

export function cp() {
    return colorPalette
}