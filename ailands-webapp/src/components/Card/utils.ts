import html2canvas from 'html2canvas';
import { jsPDF as JsPDF } from 'jspdf';
import { GetDimensionProps, DownloadMode } from './types';
import {
  CARD_WIDTH_PX,
  CARD_HEIGHT_PX,
  PAPER_WIDTH_IN,
  PAPER_HEIGHT_IN,
  CARD_WIDTH_IN,
  CARD_HEIGHT_IN,
} from './constants';

export function screenshotCard(elementId: string, mode: DownloadMode, imageURL?: string) {
  if (mode === 'card-png' || mode === 'card-pdf') {
    const input = document.getElementById(elementId);
    if (input != null) {
      const inputCopy = input.cloneNode(true);
      // Create the new element
      const screenshotElement = document.createElement('div');
      screenshotElement.style.cssText = `width:${CARD_WIDTH_PX}px;height:${CARD_HEIGHT_PX}px;margin:0px;padding:0px;position:absolute;`;
      screenshotElement.appendChild(inputCopy);
      const root = document.getElementById('root');
      root.appendChild(screenshotElement);
      html2canvas(screenshotElement, {
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
      })
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');

          if (mode === 'card-pdf') {
            const pdf = new JsPDF({ format: [PAPER_WIDTH_IN, PAPER_HEIGHT_IN], unit: 'in' });
            pdf.addImage(imgData, 'JPEG', 0.5, 0.5, CARD_WIDTH_IN, CARD_HEIGHT_IN);
            pdf.save('card.pdf');
          } else if (mode === 'card-png') {
            const a = document.createElement('a');
            a.href = imgData.replace('image/png', 'image/octet-stream');
            a.download = 'card.png';
            a.click();
            a.remove();
          }
        });
      screenshotElement.remove();
    }
  } else if (mode === 'art' && imageURL != null) {
    fetch(imageURL, {
      method: 'GET',
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then((buffer) => {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const a = document.createElement('a');
          a.href = url;
          a.download = 'art.png';
          a.click();
          a.remove();
        });
      });
  }
}

export function getLandIconDimensions({
  ratio, parentWidth, parentX, parentY, parentHeight, originalWidth, originalHeight,
}: GetDimensionProps) {
  const adjustedHeight = parentHeight * ratio;
  const scaleFactor = adjustedHeight / originalHeight;
  const adjustedWidth = scaleFactor * originalWidth;
  const adjustedX = parentX + ((parentWidth - adjustedWidth) / 2);
  const adjustedY = parentY + ((parentHeight - adjustedHeight) / 2);
  return {
    x: adjustedX, y: adjustedY, height: adjustedHeight, width: adjustedWidth,
  };
}
