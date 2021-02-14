function createCard(srcImg, textName) {
  const wrapperCardList = document.querySelector('.wrapperCardList');
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.src = srcImg;

  const cardName = document.createElement('p');
  cardName.textContent = textName;

  card.append(cardImg, cardName);
  wrapperCardList.appendChild(card);
}

export default createCard;