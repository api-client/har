import { HarViewerElement } from './src/HarViewerElement.js';

declare global {
  interface HTMLElementTagNameMap {
    "har-viewer": HarViewerElement;
  }
}
