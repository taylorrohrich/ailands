import React, {
  useState, useCallback, useEffect,
} from 'react';
import {
  Box, useMediaQuery, IconButton, useTheme,
} from '@mui/material';
import Card from 'components/Card';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import api from 'api';

const lands = ['plains', 'forest', 'swamp', 'island', 'mountain'];
const colors = ['white', 'green', 'black', 'blue', 'red'];
const colorLands = colors.reduce((acc, l, i) => ({ ...acc, [l]: lands[i] }), {});
const initialImageState = {
  white: undefined,
  green: undefined,
  black: undefined,
  blue: undefined,
  red: undefined,
};
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
  const [cardWidth, buttonSize] = usePreviewBreakPoints();
  const [loading, setLoading] = useState<string | undefined>();
  const [images, setImages] = useState<Record<string, any>>(initialImageState);
  const flexColumnBreakpoint = useMediaQuery('(max-width:1150px)');
  const containerFlexDirection = flexColumnBreakpoint ? 'column-reverse' : 'column';
  const landFlexDirection = flexColumnBreakpoint ? 'column' : 'row';
  const finishLoading = () => setTimeout(() => setLoading(undefined), 600);
  const queryImage = useCallback((color?: string) => {
    if (color == null) {
      setLoading('all');
      Promise.all(colors.map((c) => api.random.query(c))).then((values) => {
        const newImages = colors.reduce((acc, c, i) => ({ ...acc, [c]: values[i] }), {});
        setImages(newImages);
      }).finally(finishLoading);
    } else {
      setLoading(color);
      api.random.query(color).then((url: string) => {
        setImages({ ...images, [color]: url });
      }).finally(finishLoading);
    }
  }, [images, setImages]);
  useEffect(() => queryImage(), []);
  const theme = useTheme();
  return (
    <Box style={style ?? {}} display="flex" flexDirection={containerFlexDirection} alignItems="center">
      <Box display="flex" flexDirection={landFlexDirection} alignItems="center" justifyContent="center">
        {colors.map((color: string) => {
          const land = colorLands[color];
          const colorIsLoading = loading === color || loading === 'all';
          return (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Card isFlipped={colorIsLoading} imageURL={images[color]} land={land} style={{ margin: '16px' }} width={cardWidth} />
              <IconButton
                onClick={() => queryImage(color)}
                sx={{
                  color: theme.lands[land].primary,
                  backgroundColor: theme.lands[land].secondary,
                  marginTop: `${buttonSize / 3}px`,
                  marginBottom: `${buttonSize / 3}px`,
                }}
              >
                <ShuffleIcon sx={{ fontSize: `${buttonSize}px` }} />
              </IconButton>
            </Box>

          );
        })}
      </Box>
    </Box>
  );
}
Preview.defaultProps = {
  style: undefined,
};
