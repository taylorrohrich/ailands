import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Card from 'components/Card';
import { LandEnum } from './Card/types';

const lands = ['plains', 'forest', 'swamp', 'island', 'mountain'];
function usePreviewCardWidth() {
  const breakpointOne = useMediaQuery('(max-width:1000px)');
  const breakpointTwo = useMediaQuery('(max-width:1400px)');
  const breakpointThree = useMediaQuery('(max-width:1600px)');
  const breakpointFour = useMediaQuery('(max-width:1800px)');
  if (breakpointOne) return 300;
  if (breakpointTwo) return 150;
  if (breakpointThree) return 200;
  if (breakpointFour) return 250;
  return 300;
}

interface PreviewProps {
  style?: React.CSSProperties
}
export default function Preview({ style }: PreviewProps) {
  const cardWidth = usePreviewCardWidth();
  const flexColumnBreakpoint = useMediaQuery('(max-width:1000px)');
  const flexDirection = flexColumnBreakpoint ? 'column' : 'row';
  return (
    <Box style={style ?? {}} display="flex" flexDirection={flexDirection} alignItems="center" justifyContent="center">
      {lands.map((land: LandEnum) => <Card land={land} style={{ margin: '16px' }} width={cardWidth} />)}
    </Box>
  );
}
Preview.defaultProps = {
  style: undefined,
};
