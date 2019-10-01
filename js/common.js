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

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
window.addEventListener('resize', function() {
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}, false);