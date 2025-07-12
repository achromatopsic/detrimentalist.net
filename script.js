$(document).ready(function () {
    const originalSrc = "Images/bluesmiley.png";
    const hoverSrc = "Images/bluesmileyblink.png";

    $('#bluesmiley').hover(
        function () {
            $(this).attr('src', hoverSrc);
        },
        function () {
            $(this).attr('src', originalSrc);
        }
    );


});  