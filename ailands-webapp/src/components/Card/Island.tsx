import React from 'react';
import { island } from 'styling/constants';
import { LandProps } from './types';
import { getLandIconDimensions } from './utils';

export const ORIGINAL_WIDTH = 50.110001;
export const ORIGINAL_HEIGHT = 80.483;

export default function Island({
  ratio, parentWidth, parentX, parentY, parentHeight, color,
}: LandProps) {
  const {
    x, y, width, height,
  } = getLandIconDimensions({
    ratio,
    parentWidth,
    parentX,
    parentY,
    parentHeight,
    originalHeight: ORIGINAL_HEIGHT,
    originalWidth: ORIGINAL_WIDTH,
  });
  const fillColor = color ?? island.primary;
  return (
    <svg
      x={String(x)}
      y={String(y)}
      width={String(width)}
      height={String(height)}
      viewBox="-945 -210.002 50.110001 80.483"
    >
      <path
        fill={fillColor}
        d="m -902.064,-136.826 c -4.787,4.871 -10.684,7.307 -17.688,7.307 -7.861,0 -14.098,-2.69 -18.711,-8.073 -4.359,-5.127 -6.537,-11.662 -6.537,-19.606 0,-8.543 3.717,-18.286 11.15,-29.224 6.064,-8.969 13.199,-16.83 21.402,-23.58 -1.197,5.469 -1.793,9.355 -1.793,11.662 0,5.299 1.664,10.467 4.996,15.508 4.102,5.98 7.219,10.426 9.357,13.328 3.332,5.043 4.998,9.955 4.998,14.737 0,7.093 -2.391,13.074 -7.174,17.941 z m -0.129,-27.362 c -1.281,-2.861 -2.777,-4.762 -4.486,-5.703 0.256,0.514 0.385,1.24 0.385,2.18 0,1.795 -0.512,4.357 -1.539,7.689 l -1.664,5.127 c 0,2.99 1.492,4.486 4.484,4.486 3.16,0 4.742,-2.095 4.742,-6.281 0,-2.134 -0.64,-4.632 -1.922,-7.498 z"
      />

    </svg>
  );
}
