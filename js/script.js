var popupLogin = document.querySelector('.modal-content');
var popupMap = document.querySelector('.modal-map');
var overlay = document.querySelector('.modal-overlay');
var openLogin = document.querySelector('.user-menu .login');
var openMap = document.querySelector('.open-map');
var openMapFooter = document.querySelector('.open-map-footer');
var closeLogin = popupLogin.querySelector('.modal-content-close');
var closeMap = popupMap.querySelector('.modal-map-close');
var inputLogin = popupLogin.querySelector('.icon-login');

function clickControl(displayPopup, namePopup, prefixPopup) {
    displayPopup.addEventListener('click', function(event) {
        event.preventDefault();
        namePopup.classList.toggle('modal-' + prefixPopup + '-show');
        overlay.classList.toggle('modal-overlay-show');
        if (displayPopup === openLogin) {
            inputLogin.focus();
        }
    });
}
function keyControl(namePopup, prefixPopup) {
    window.addEventListener('keydown', function(event) {
        if (event.keyCode === 27 || namePopup.classList.contains('modal-' + prefixPopup + '-show')) {
        namePopup.classList.remove('modal-' + prefixPopup + '-show');
        overlay.classList.remove('modal-overlay-show');
        }
    });
}

clickControl(openLogin, popupLogin, 'content');
clickControl(closeLogin, popupLogin, 'content');
clickControl(openMapFooter, popupMap, 'map');
clickControl(closeMap, popupMap, 'map');
if (openMap) {
    clickControl(openMap, popupMap, 'map');
}
keyControl(popupLogin, 'content');
keyControl(popupMap, 'map');




































// var PopupLogin = document.querySelector('.modal-content');
// var PopupMap = document.querySelector('.modal-map');
// var Overlay = document.querySelector('.modal-overlay');
// var OpenLogin = document.querySelector('.user-menu .login');
// var OpenMap = document.querySelector('.open-map');
// var OpenMapFooter = document.querySelector('.open-map-footer');
// var CloseLogin = PopupLogin.querySelector('.modal-content-close');
// var CloseMap = PopupMap.querySelector('.modal-map-close');
// var inputLogin = popupLogin.querySelector('.icon-login');
// var inputPass = popupLogin.querySelector('.icon-password');
//
// OpenLogin.addEventListener('click', function(event) {
//     event.preventDefault();
//     PopupLogin.classList.add('modal-content-show');
//     Overlay.classList.add('modal-overlay-show');
//     inputLogin.focus();
// });
//
// CloseLogin.addEventListener('click', function(event) {
//     event.preventDefault();
//     PopupLogin.classList.remove('modal-content-show');
//     Overlay.classList.remove('modal-overlay-show');
// });
//
// OpenMap.addEventListener('click', function(event) {
//     event.preventDefault();
//     PopupMap.classList.add('modal-map-show');
//     Overlay.classList.add('modal-overlay-show');
// });
//
//
// if (OpenMapFooter) {
//     OpenMapFooter.addEventListener('click', function(event) {
//         event.preventDefault();
//         PopupMap.classList.add('modal-map-show');
//         Overlay.classList.add('modal-overlay-show');
//     });
// }
//
// CloseMap.addEventListener('click', function(event) {
//     event.preventDefault();
//     PopupMap.classList.remove('modal-map-show');
//     Overlay.classList.remove('modal-overlay-show');
// });
