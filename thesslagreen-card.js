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
      background.src = backgroundImage;
      background.style.width = '100%';
      background.style.display = 'block';
  
      // Kontener na elementy
      const elementsContainer = document.createElement('div');
      elementsContainer.style.position = 'absolute';
      elementsContainer.style.top = 0;
      elementsContainer.style.left = 0;
      elementsContainer.style.width = '100%';
      elementsContainer.style.height = '100%';
  
      // Dodajemy <style> z animacją do shadow DOM
      const style = document.createElement('style');
      style.textContent = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      this.appendChild(style);

      const elWrapper = document.createElement('div');
      elWrapper.style.position = 'absolute';
      elWrapper.style.left = '10%';
      elWrapper.style.top = '65%';
      elWrapper.style.animation = 'spin 2s linear infinite';     

      const el = document.createElement('ha-icon');
      el.icon = 'mdi:fan';
      el.setAttribute('style', `
        --mdc-icon-size: 10vw;
        color: #969595;
      `);

      elWrapper.appendChild(el);                // Dodajemy ikonę do wrappera
      elementsContainer.appendChild(elWrapper); // Wrapper do kontenera

      // Dodajemy label z napisem "Temperatura"
      const label = document.createElement('div');
      label.textContent = 'Temperatura';
      label.style.position = 'absolute';
      label.style.top = '10%';
      label.style.left = '10%';
      label.style.fontSize = '2vw';
      label.style.color = '#969595';
      label.style.fontWeight = 'bold';

      elementsContainer.appendChild(label); // Dodajemy label do kontenera

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
