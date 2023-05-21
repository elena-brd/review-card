const buttonExperienceCategory = document.querySelector('.btn-experience');
const buttonQualityCategory = document.querySelector('.btn-quality');
const buttonSizeCategory = document.querySelector('.btn-size');
const buttonFeaturesCategory = document.querySelector('.btn-features');
const buttonValueCategory = document.querySelector('.btn-value');
const buttonReplacementCategory = document.querySelector('.btn-replacement');
const card = document.querySelector('.card');
const secondCard = document.querySelector('.second-card')


buttonExperienceCategory.addEventListener('click', (e) => {
    e.preventDefault();
    card.innerHTML = 'No review left';
    secondCard.style.display = 'none'
})

buttonQualityCategory.addEventListener('click', (e) => {
    e.preventDefault();
    card.innerHTML = 'No review left';
    secondCard.style.display = 'none'
})

buttonSizeCategory.addEventListener('click', (e) => {
    e.preventDefault();
    card.innerHTML = 'No review left';
    secondCard.style.display = 'none'
})

buttonFeaturesCategory.addEventListener('click', (e) => {
    e.preventDefault();
    card.innerHTML = 'No review left';
    secondCard.style.display = 'none'
})

buttonValueCategory.addEventListener('click', (e) => {
    e.preventDefault();
    card.innerHTML = 'No review left';
    secondCard.style.display = 'none'
})

buttonReplacementCategory.addEventListener('click', (e) => {
    e.preventDefault();
    card.innerHTML = 'No review left';
    secondCard.style.display = 'none'
})

