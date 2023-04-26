import { Suspense } from 'react';
import { Box, CssBaseline, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import HeroImage from '../heroImage';
import DescriptionList from '../descriptionList';
import '../../fonts/ITCAvantGardePro/stylesheet.css';

function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, width: '100vw', height: '100vh', overflow: 'hidden' }}>
          <Grid container spacing={2} sx={{m: 0}}>
            <HeroImage />
            <DescriptionList />
          </Grid>
      </Box>
    </Suspense>
  );
}

export default App;