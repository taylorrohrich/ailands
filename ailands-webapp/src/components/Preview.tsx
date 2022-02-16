import React, { useState, useCallback } from 'react';
import {
  Box, Typography, useMediaQuery, IconButton, Button, useTheme,
} from '@mui/material';
import Card from 'components/Card';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { LandEnum } from './Card/types';

const lands = ['plains', 'forest', 'swamp', 'island', 'mountain'];
function usePreviewBreakPoints() {
  const breakpointOne = useMediaQuery('(max-width:1150px)');
  const breakpointTwo = useMediaQuery('(max-width:1600px)');
  const breakpointThree = useMediaQuery('(max-width:1800px)');
  if (breakpointOne) return [300, 64];
  if (breakpointTwo) return [200, 32];
  if (breakpointThree) return [250, 48];
  return [300, 64];
}

interface PreviewProps {
  style?: React.CSSProperties
}
export default function Preview({ style }: PreviewProps) {
  const [loading, setLoading] = useState(false);
  const [cardWidth, buttonSize] = usePreviewBreakPoints();
  const flexColumnBreakpoint = useMediaQuery('(max-width:1150px)');
  const containerFlexDirection = flexColumnBreakpoint ? 'column-reverse' : 'column';
  const landFlexDirection = flexColumnBreakpoint ? 'column' : 'row';
  const fetchLands = useCallback(() => {
    setLoading(true);
    setTimeout(
      () => setLoading(false),
      1000,
    );
  }, []);
  const theme = useTheme();
  return (
    <Box style={style ?? {}} display="flex" flexDirection={containerFlexDirection} alignItems="center">
      <Box display="flex" flexDirection={landFlexDirection} alignItems="center" justifyContent="center">
        {lands.map((land: LandEnum) => (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Card isFlipped={loading ?? undefined} imageURL="https://media.magic.wizards.com/image_legacy_migration/images/magic/daily/arcana/968_Underground_Sea.jpg" land={land} style={{ margin: '16px' }} width={cardWidth} />
            <IconButton sx={{
              color: theme.lands[land].primary,
              backgroundColor: theme.lands[land].secondary,
              marginTop: `${buttonSize / 3}px`,
              marginBottom: `${buttonSize / 3}px`,
            }}
            >
              <ShuffleIcon sx={{ fontSize: `${buttonSize}px` }} />
            </IconButton>
          </Box>

        ))}
      </Box>
    </Box>
  );
}
Preview.defaultProps = {
  style: undefined,
};
