import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import HeroImage from './heroImage';
import DescriptionList from './descriptionList';

function App() {
  return (
    <Box sx={{ flexGrow: 1, width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Grid container spacing={2} sx={{m: 0}}>
        <HeroImage />
        <DescriptionList />
      </Grid>
    </Box>
  );
}

export default App;