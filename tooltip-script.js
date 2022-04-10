let closeButton = document.querySelector('.close-button');
let tooltipText = document.querySelector('.tooltip-text');
let tooltip = document.querySelector('.tooltip');
let tooltipButton = document.querySelector('.tooltip-button');

tooltipButton.onclick = function () {
    tooltip.classList.add('opened');
    tooltipText.textContent = tooltipButton.dataset.tooltipText;
}

closeButton.onclick = function () {
    tooltip.classList.remove('opened');
}