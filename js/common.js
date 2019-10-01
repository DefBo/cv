// Get the root tag
var root = document.getElementsByTagName( 'html' )[0];
// Show navigation menu
function showNav() {
    root.classList.toggle('_show-nav');
}

window.addEventListener('load',function(){
    setTimeout(addClassLoaded, 1000);

    function addClassLoaded() {
        document.querySelector('body').classList.add("loaded");
    }
});

function myOrientResizeFunction(){

    window.location.reload();

}

$(window).resize( function() {

    myOrientResizeFunction()

});

$(window).load( function() {

    myOrientResizeFunction()

});

if (window.DeviceOrientationEvent) {

    window.addEventListener('orientationchange', myOrientResizeFunction, false);

}