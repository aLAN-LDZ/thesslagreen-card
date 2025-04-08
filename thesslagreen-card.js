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
  
      // Przykładowy element (np. czujnik)
      const el = document.createElement('ha-icon');
      el.icon = 'mdi:fan';
      el.style.position = 'absolute';
      el.style.top = '40%';
      el.style.left = '60%';
      el.style.setProperty('--ha-icon-size', '20rem');  // Zmiana rozmiaru ikony
  
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

