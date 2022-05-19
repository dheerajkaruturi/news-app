import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="sk-chase">
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
    </div>
  `,
  styles: [
    `
      .sk-chase {
        width: 60px;
        height: 60px;
        margin-top: 20rem;
        position: relative;
        animation: sk-chase 2.5s infinite linear both;
      }

      .sk-chase-dot {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        animation: sk-chase-dot 2s infinite ease-in-out both;
      }

      .sk-chase-dot:before {
        content: '';
        display: block;
        width: 25%;
        height: 25%;
        background-color: #E50914;
        border-radius: 100%;
        animation: sk-chase-dot-before 2s infinite ease-in-out both;
      }

      .sk-chase-dot:nth-child(1) {
        animation-delay: -1.1s;
      }
      .sk-chase-dot:nth-child(2) {
        animation-delay: -1s;
      }
      .sk-chase-dot:nth-child(3) {
        animation-delay: -0.9s;
      }
      .sk-chase-dot:nth-child(4) {
        animation-delay: -0.8s;
      }
      .sk-chase-dot:nth-child(5) {
        animation-delay: -0.7s;
      }
      .sk-chase-dot:nth-child(6) {
        animation-delay: -0.6s;
      }
      .sk-chase-dot:nth-child(1):before {
        animation-delay: -1.1s;
      }
      .sk-chase-dot:nth-child(2):before {
        animation-delay: -1s;
      }
      .sk-chase-dot:nth-child(3):before {
        animation-delay: -0.9s;
      }
      .sk-chase-dot:nth-child(4):before {
        animation-delay: -0.8s;
      }
      .sk-chase-dot:nth-child(5):before {
        animation-delay: -0.7s;
      }
      .sk-chase-dot:nth-child(6):before {
        animation-delay: -0.6s;
      }

      @keyframes sk-chase {
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes sk-chase-dot {
        80%,
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes sk-chase-dot-before {
        50% {
          transform: scale(0.4);
        }
        100%,
        0% {
          transform: scale(1);
        }
      }
    `,
  ],
})
export class LoadingSpinner {}
