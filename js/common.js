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

function orientationChange() {
    if(window.addEventListener) {
        window.addEventListener("orientationchange", function() {
            location.reload();
        });
    }
}
orientationChange();