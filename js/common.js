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

/*window.addEventListener('orientationchange', function() {
    location.reload();
}, false);*/

window.addEventListener('orientationchange', function () {
    var originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display');
    document.body.style.display='none';
    setTimeout(function () {
        document.body.style.display = originalBodyStyle;
    }, 10);
});

/*
function orientationChange() {
    if(window.addEventListener) {
        window.addEventListener("orientationchange", function() {
            location.reload();
        });
    }
}

orientationChange();*/

/*
window.addEventListener('orientationchange', function () {
    var originalBodyStyle = getComputedStyle (document.body).getPropertyValue('display');
    document.body.style.display='none';
    setTimeout(function () {
        document.body.style.display = originalBodyStyle;
    }, 10);
});*/

/*var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
    window.location.reload()
}, false);*/

/*if (window.DeviceOrientationEvent) {
    window.addEventListener('orientationchange', function() { location.reload(); }, false);
}*/


