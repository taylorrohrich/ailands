export interface LandProps {
    ratio: number;
    parentWidth: number;
    parentHeight: number;
    parentX: number;
    parentY: number;
    color?: string;
}

export interface GetDimensionProps {
    ratio: number;
    parentWidth: number;
    parentHeight: number;
    parentX: number;
    parentY: number;
    originalWidth: number;
    originalHeight: number;
}

export type LandEnum = 'forest' | 'mountain' | 'swamp' | 'island' | 'plains';

export type DownloadMode = 'card-png' | 'card-pdf' | 'art'
