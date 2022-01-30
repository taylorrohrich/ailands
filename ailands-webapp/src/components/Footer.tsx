import React from 'react';
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <Box display="flex" alignItems="center" sx={{ backgroundColor: '#252525', padding: '20px' }}>
      <a aria-label="github url" target="_blank" href="https://github.com/taylorrohrich/ailands" rel="noreferrer">
        <GitHubIcon sx={{
          backgroundColor: 'white', borderRadius: '5px', fontSize: '32px', marginRight: '20px',
        }}
        />
      </a>
      <Typography color="white" fontSize="12px">
        AI Lands is unofficial Fan Content permitted under the
        Fan Content Policy.
        <br />
        Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards
        of the Coast.

        ©Wizards of the Coast LLC.
      </Typography>
    </Box>
  );
}
