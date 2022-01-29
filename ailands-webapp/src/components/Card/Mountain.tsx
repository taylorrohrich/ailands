import React from 'react';
import { mountain } from 'styling/constants';
import { LandProps } from './types';
import { getLandIconDimensions } from './utils';

const ORIGINAL_WIDTH = 77.141998;
const ORIGINAL_HEIGHT = 85.836754;

export default function Mountain({
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
  const fillColor = color ?? mountain.primary;
  return (
    <svg
      x={String(x)}
      y={String(y)}
      width={String(width)}
      height={String(height)}
      viewBox="-945 -210.002 77.141998 85.836752"
    >
      <path
        fill={fillColor}
        d="m -869.258,-150.169 c -3.736,8.912 -11.16,13.367 -22.275,13.367 -2.037,0 -4.246,0.254 -6.621,0.762 -3.564,0.764 -5.346,1.828 -5.346,3.186 0,0.424 0.295,0.91 0.891,1.463 0.592,0.553 1.104,0.826 1.527,0.826 -2.123,0 -0.68,0.064 4.326,0.191 5.008,0.127 8.148,0.191 9.422,0.191 -7.383,4.326 -19.732,6.319 -37.043,5.981 -5.688,-0.084 -10.566,-2.588 -14.639,-7.51 -3.992,-4.669 -5.984,-9.888 -5.984,-15.658 0,-6.108 2.057,-11.308 6.176,-15.595 4.113,-4.282 9.229,-6.427 15.338,-6.427 1.357,0 3.16,0.297 5.41,0.891 2.248,0.594 3.756,0.891 4.518,0.891 3.139,0 7.045,-1.293 11.713,-3.883 4.666,-2.588 6.875,-3.883 6.621,-3.883 -0.85,8.912 -3.82,14.896 -8.914,17.948 -3.648,2.123 -5.473,4.201 -5.473,6.236 0,1.273 0.764,2.293 2.291,3.057 1.188,0.595 2.502,0.892 3.945,0.892 2.207,0 4.371,-1.356 6.494,-4.071 2.119,-2.718 3.055,-5.177 2.801,-7.386 -0.254,-2.545 -0.084,-5.603 0.51,-9.164 0.168,-1.02 0.783,-2.27 1.844,-3.754 1.061,-1.486 2.016,-2.398 2.865,-2.738 0,0.762 -0.275,2.037 -0.828,3.818 -0.553,1.781 -0.826,3.1 -0.826,3.947 0,1.867 0.508,3.309 1.527,4.326 1.525,-0.592 2.883,-2.502 4.074,-5.729 1.016,-2.459 1.609,-4.836 1.781,-7.127 -3.566,-0.17 -6.982,-1.781 -10.248,-4.838 -3.268,-3.057 -4.9,-6.365 -4.9,-9.928 0,-0.594 0.082,-1.188 0.256,-1.783 0.508,0.764 1.271,1.953 2.289,3.564 1.443,2.121 2.547,3.182 3.313,3.182 1.016,0 1.525,-1.061 1.525,-3.182 0,-2.715 -0.723,-5.176 -2.164,-7.383 -1.613,-2.631 -3.693,-3.947 -6.238,-3.947 -1.189,0 -2.971,0.637 -5.344,1.91 -2.379,1.271 -4.543,1.91 -6.492,1.91 -0.596,0 -3.229,-0.766 -7.895,-2.293 8.23,-1.355 12.348,-2.586 12.348,-3.691 0,-2.885 -5.645,-4.838 -16.93,-5.855 -1.105,-0.084 -3.141,-0.254 -6.111,-0.51 0.338,-0.424 2.758,-0.891 7.258,-1.4 3.818,-0.422 6.492,-0.637 8.018,-0.637 20.197,0 33.012,9.805 38.443,29.408 0.934,-0.773 1.402,-2.066 1.402,-3.871 0,-2.324 -0.68,-5.25 -2.037,-8.777 -0.512,-1.375 -1.318,-3.441 -2.42,-6.193 6.957,8.867 10.439,17.27 10.439,25.199 0,4.178 -0.979,7.973 -2.93,11.381 -1.27,2.303 -3.65,5.244 -7.127,8.826 -3.48,3.58 -5.857,6.352 -7.131,8.313 4.668,-1.271 7.725,-2.248 9.168,-2.928 3.223,-1.44 6.15,-3.606 8.783,-6.492 0,1.106 -0.467,2.762 -1.4,4.967 z m -55.502,-50.025 c 0,1.525 -0.85,2.502 -2.545,2.926 l -3.311,0.51 c -1.189,0.594 -2.928,2.928 -5.219,7 -0.256,-1.271 -0.637,-3.053 -1.146,-5.346 -0.764,0.086 -2.035,0.764 -3.818,2.037 -0.764,0.594 -1.996,1.484 -3.693,2.672 0.512,-3.055 2.207,-6.148 5.094,-9.293 3.055,-3.477 6.025,-5.217 8.91,-5.217 3.818,0 5.728,1.572 5.728,4.711 z m 22.15,11.709 c 0,1.443 -0.785,2.654 -2.355,3.629 -1.57,0.977 -3.119,1.465 -4.646,1.465 -2.037,0 -3.863,-1.146 -5.473,-3.438 -1.955,-2.801 -3.947,-4.625 -5.984,-5.477 0.424,-0.422 0.934,-0.635 1.529,-0.635 0.764,0 2.055,0.594 3.881,1.781 1.824,1.189 2.99,1.783 3.502,1.783 0.424,0 1.123,-0.594 2.1,-1.783 0.975,-1.188 2.057,-1.781 3.246,-1.781 2.8,0.001 4.2,1.487 4.2,4.456 z"
        id="path138-4"
      />
    </svg>
  );
}
