let themeButton = document.querySelector('.theme-button');
let main = document.querySelector('.main');
let headerEmail = document.querySelector('.header-email');
let headerPhone = document.querySelector('.header-phone');
let levels = document.querySelectorAll('.level');
let lineLevels = document.querySelectorAll('.line-level');
let pageFooter = document.querySelector('.page-footer');
let footerEmail = document.querySelector('.footer-email');
let footerPhone = document.querySelector('.footer-phone');

themeButton.onclick = function () {
    main.classList.toggle('dark-theme');
    main.classList.toggle('light-theme');
    headerEmail.classList.toggle('dark-header-email');
    headerEmail.classList.toggle('light-header-email');
    headerPhone.classList.toggle('dark-header-phone');
    headerPhone.classList.toggle('light-header-phone');
    for (let level of levels) {
        level.classList.toggle('dark-level');
        level.classList.toggle('light-level');
    }
    for (let lineLevel of lineLevels) {
        lineLevel.classList.toggle('dark-line-level');
        lineLevel.classList.toggle('light-line-level');
    }
    pageFooter.classList.toggle('dark-page-footer');
    pageFooter.classList.toggle('light-page-footer');
    footerEmail.classList.toggle('dark-footer-email');
    footerEmail.classList.toggle('light-footer-email');
    footerPhone.classList.toggle('dark-footer-phone');
    footerPhone.classList.toggle('light-footer-phone');
}
