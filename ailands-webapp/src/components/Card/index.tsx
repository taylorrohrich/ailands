import React, { useState, useMemo } from 'react';
import {
  swamp, mountain, island, plains, forest, cardBack,
} from 'styling/constants';
import { Box } from '@mui/material';
import generateUID from 'utils';
import Download from './Download';
import { LandEnum } from './types';
import Island from './Island';
import Swamp from './Swamp';
import Mountain from './Mountain';
import Plains from './Plains';
import Forest from './Forest';
import {
  IMAGE_HEIGHT_SCALE,
  IMAGE_WIDTH_SCALE,
  IMAGE_X_SCALE,
  IMAGE_Y_SCALE,
  SVG_VIEW_WIDTH,
  SVG_VIEW_HEIGHT,
  CARD_WIDTH_PX,
  CARD_HEIGHT_PX,
} from './constants';
import './card.css';

function DefaultIcon() {
  return <g />;
}
function getLandSvg(land: LandEnum) {
  switch (land) {
    case 'island':
      return Island;
    case 'swamp':
      return Swamp;
    case 'mountain':
      return Mountain;
    case 'plains':
      return Plains;
    case 'forest':
      return Forest;
    default:
      return DefaultIcon;
  }
}

function getLandStyle(land: LandEnum) {
  switch (land) {
    case 'island':
      return island;
    case 'swamp':
      return swamp;
    case 'mountain':
      return mountain;
    case 'plains':
      return plains;
    case 'forest':
      return forest;
    default:
      return undefined;
  }
}

interface CardFrontProps {
  land: LandEnum; cardId: string
}
function CardFront({ land, cardId }: CardFrontProps) {
  const Land = getLandSvg(land);
  const style = getLandStyle(land);
  const landName = land[0].toUpperCase() + land.slice(1);
  return (
    <Box id={cardId} className="card-svg" style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img
        alt="land-art"
        style={{
          width: `${IMAGE_WIDTH_SCALE}%`, height: `${IMAGE_HEIGHT_SCALE}%`, left: `${IMAGE_X_SCALE}%`, top: `${IMAGE_Y_SCALE}%`, position: 'absolute',
        }}
        src="https://shirtcoin.blob.core.windows.net/blobs/marble-texture.jpeg"
      />
      <svg
        viewBox={`0 0 ${SVG_VIEW_WIDTH} ${SVG_VIEW_HEIGHT}`}
        style={{ width: '100%', height: '100%', fontFamily: 'EB Garamond' }}
      >
        <g>
          <rect style={{ fill: '#000000' }} height={SVG_VIEW_HEIGHT} width={SVG_VIEW_WIDTH} rx="10" ry="10" />
          <g>
            <rect
              x="10"
              y="10"
              width="484px"
              height="600px"
              rx="30"
              ry="30"
              fill="#faf6e6"
            />
            <rect
              x="10"
              y="10"
              width="484px"
              height="200px"
              rx="5"
              ry="5"
              fill="#faf6e6"
            />
          </g>
          <g>
            <rect style={{ fill: style?.primary ?? '#ffffff', stroke: style?.primary ?? '#ffffff' }} x="20" y="368" height="40" width="464" rx="6" ry="120" />
            <rect style={{ fill: style?.primary ?? '#ffffff', stroke: style?.primary ?? '#ffffff' }} x="20" y="30" height="40" width="464" rx="6" ry="120" />
            <rect style={{ fill: style?.tertiary ?? '#ffffff', stroke: '#000000' }} x="27" y="375" height="26" width="450" rx="6" ry="120" />
            <rect style={{ fill: style?.tertiary ?? '#ffffff', stroke: '#000000' }} x="27" y="37" height="26" width="450" rx="6" ry="120" />
            <rect style={{ fill: style?.primary ?? '#ffffff', stroke: style?.primary ?? '#ffffff' }} x="25" y="70" height="298" width="454" />
            <rect style={{ fill: '#ffffff', stroke: '#000000' }} x="32" y="70" height="298" width="440" />
            <rect style={{ fill: style?.primary ?? '#ffffff', stroke: style?.primary ?? '#ffffff' }} x="25" y="408" height="240" width="454" />
            <rect style={{ fill: style?.secondary ?? '#ffffff', stroke: '#ffffff' }} x="32" y="408" height="233" width="440" />
            <Land ratio={0.70} parentX={25} parentY={408} parentWidth={454} parentHeight={240} />
            <text x="35" y="56" fontSize="20" fontWeight="bold">{landName}</text>
            <text x="35" y="394" fontSize="16" fontWeight="bold">
              Basic Land
            </text>
            <line x1="110" y1="390" x2="125" y2="390" style={{ strokeWidth: 1, stroke: '#000000' }} />
            <text x="135" y="394" fontSize="16" fontWeight="bold">
              {landName}
            </text>
          </g>

        </g>
      </svg>
    </Box>
  );
}

function CardBack() {
  const scale = 75;
  const c1 = Math.cos((2 * Math.PI) / 5) * scale;
  const c2 = Math.cos(Math.PI / 5) * scale;
  const s1 = Math.sin((2 * Math.PI) / 5) * scale;
  const s2 = Math.sin((4 * Math.PI) / 5) * scale;
  const cx = 252;
  const cy = 352;
  return (
    <svg
      viewBox={`0 0 ${SVG_VIEW_WIDTH} ${SVG_VIEW_HEIGHT}`}
      style={{ width: '100%', height: '100%' }}
    >
      <g>
        <rect style={{ fill: '#000000' }} height={SVG_VIEW_HEIGHT} width={SVG_VIEW_WIDTH} rx="10" ry="10" />
        <rect
          x="10"
          y="10"
          width="484px"
          height="684px"
          rx="5"
          ry="5"
          fill={cardBack.background}
        />
        <rect
          x="20"
          y="20"
          width="464px"
          height="664px"
          rx="5"
          ry="5"
          stroke="#000000"
          fill={cardBack.background}
        />
        <ellipse cx="252" cy="352" rx="220" ry="320" fill={cardBack.oval} stroke={cardBack.ovalBorder} strokeWidth="4" />
        <circle cx="32" cy="32" r="8" fill={cardBack.sphere} />
        <circle cx="472" cy="32" r="8" fill={cardBack.sphere} />
        <circle cx="32" cy="672" r="8" fill={cardBack.sphere} />
        <circle cx="472" cy="672" r="8" fill={cardBack.sphere} />
        <circle cx={cx} cy={cy - scale} r="8" fill={cardBack.yellow} stroke="#000000" strokeWidth="1" />
        <circle cx={cx + s1} cy={cy - c1} r="8" fill={cardBack.blue} stroke="#000000" strokeWidth="1" />
        <circle cx={cx + s2} cy={cy + c2} r="8" fill={cardBack.black} stroke="#000000" strokeWidth="1" />
        <circle cx={cx - s2} cy={cy + c2} r="8" fill={cardBack.red} stroke="#000000" strokeWidth="1" />
        <circle cx={cx - s1} cy={cy - c1} r="8" fill={cardBack.green} stroke="#000000" strokeWidth="1" />
      </g>
    </svg>
  );
}

interface CardProps {
  width: number;
  land: LandEnum;
}

function Card({ width, land }: CardProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardId = useMemo(() => `card-${generateUID()}`, []);
  const height = CARD_HEIGHT_PX / (CARD_WIDTH_PX / width);
  const flippedClass = isFlipped ? 'flip-card-inner card-flipped' : 'flip-card-inner';
  const selectedClass = isSelected ? 'card-download card-download-selected' : 'card-download';
  return (
    <Box sx={{ zIndex: isSelected ? 2 : 1 }} className="flip-card-container" onMouseEnter={() => setIsSelected(true)} onMouseLeave={() => setIsSelected(false)}>
      <Box
        className="flip-card"
        role="button"
        tabIndex={0}
        onClick={(e) => setIsFlipped(!isFlipped)}
        style={{ cursor: 'pointer' }}
      >
        <Box className={flippedClass} sx={{ width, height }}>
          <Box className="flip-card-front">
            <CardFront cardId={cardId} land={land} />
            <Box
              role="button"
              onClick={(e) => e.stopPropagation()}
              display="flex"
              justifyContent="center"
              alignItems="center"
              className={selectedClass}
              sx={{
                position: 'absolute', bottom: 0, backgroundColor: '#303030', height: '20%', width: '100%', color: '#ffffff', cursor: 'auto',
              }}
            >
              <Download cardId={cardId} />
            </Box>
          </Box>
          <Box className="flip-card-back">
            <CardBack />
          </Box>
        </Box>
      </Box>

    </Box>
  );
}

export default Card;
