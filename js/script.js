var PopupMap = document.querySelector('.modal-map');
var PopupLogin = document.querySelector('.modal-content');
var Overlay = document.querySelector('.modal-overlay');
var OpenLogin = document.querySelector('.user-menu .login');
var OpenMap = document.querySelector('.open-map');
var OpenMapFooter = document.querySelector('.open-map-footer');
var CloseLogin = PopupLogin.querySelector('.modal-content-close');
var CloseMap = PopupMap.querySelector('.modal-map-close');

OpenLogin.addEventListener('click', function(event) {
    event.preventDefault();
    PopupLogin.classList.add('modal-content-show');
    Overlay.classList.add('modal-overlay-show');
});

CloseLogin.addEventListener('click', function() {
    PopupLogin.classList.remove('modal-content-show');
    Overlay.classList.remove('modal-overlay-show');
});

OpenMap.addEventListener('click', function(event) {
    event.preventDefault();
    PopupMap.classList.add('modal-map-show');
    Overlay.classList.add('modal-overlay-show');
});


if (OpenMapFooter) {
    OpenMapFooter.addEventListener('click', function(event) {
        event.preventDefault();
        PopupMap.classList.add('modal-map-show');
        Overlay.classList.add('modal-overlay-show');
    });
}

CloseMap.addEventListener('click', function() {
    PopupMap.classList.remove('modal-map-show');
    Overlay.classList.remove('modal-overlay-show');
});
