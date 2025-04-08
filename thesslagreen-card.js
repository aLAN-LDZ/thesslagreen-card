import { backgroundImage } from './image.js';

class ThesslaGreenCard extends HTMLElement {
  setConfig(config) {
    this._config = config;
  }

  set hass(hass) {
    if (!this.content) {
      const card = document.createElement('ha-card');
      card.style.position = 'relative';
      card.style.overflow = 'hidden';
  
      const background = document.createElement('img');
      background.src = backgroundImage
      background.style.width = '100%';
      background.style.display = 'block';
  
      // Kontener na elementy
      const elementsContainer = document.createElement('div');
      elementsContainer.style.position = 'absolute';
      elementsContainer.style.top = 0;
      elementsContainer.style.left = 0;
      elementsContainer.style.width = '100%';
      elementsContainer.style.height = '100%';
  
      // Przykładowy element: animowany wiatrak
      const fanIcon = document.createElement('ha-icon');
      fanIcon.icon = 'mdi:fan'; // Możesz zmienić na dowolną ikonę
      fanIcon.style.position = 'absolute';
      fanIcon.style.top = '40%';
      fanIcon.style.left = '60%';
      fanIcon.style.fontSize = '3rem';
      fanIcon.classList.add('spinning'); // Dodanie klasy CSS dla animacji
  
      elementsContainer.appendChild(el);
      card.appendChild(background);
      card.appendChild(elementsContainer);
      this.appendChild(card);
  
      this.content = card;
    }
  }

  static get styles() {
    return css`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
      }
    `;
  }
}


customElements.define('thessla-green-card', ThesslaGreenCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'thessla-green-card',
  name: 'Thessla Green Card',
  preview: false,
  description: 'Custom picture-elements-like card for Thessla Green integration'
});

