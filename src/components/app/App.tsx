import { Suspense } from 'react';
import { Box, CssBaseline, CircularProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import HeroImage from '../heroImage';
import DescriptionList from '../descriptionList';

import '../../fonts/ITCAvantGardePro/stylesheet.css';

function App() {

  const theme = createTheme();

  return (
    <Suspense fallback={<CircularProgress />}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, width: '100vw', height: '100vh', overflow: 'hidden scroll' }}>
            <Grid container spacing={2} sx={{m: 0, height: '100%'}}>
              <HeroImage />
              <DescriptionList />
            </Grid>
        </Box>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;