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
  
      // Dodanie ikony wiatraka
      const fanIcon = document.createElement('ha-icon');
      fanIcon.icon = 'mdi:fan'; // Ikona wiatraka
      fanIcon.style.position = 'absolute';
      fanIcon.style.top = '40%';
      fanIcon.style.left = '60%';
      fanIcon.style.fontSize = '3rem';
  
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
      .spinning {
        animation: spin 2s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
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

