import $ from 'jquery';

export default function tabs () {
    $('.main__support__content').append(` <div class="main__support-buttons">
    <a href="#" class="main__support-button">Все</a>
    <a href="#" class="header__button main__support-button main__support-button_active">Партнёры</a>
    <a href="#" class="main__support-button">Информационные</a>
</div>
<div class="main__support-cards">
    <div class="main__support-card"></div>
    <div class="main__support-card main__support-card__active"></div>
    <div class="main__support-card"></div>
    <div class="main__support-card"></div>
    <div class="main__support-card"></div>
    <div class="main__support-card"></div>
</div>`)
}