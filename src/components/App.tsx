import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import HeroImage from './heroImage';
import Items from './Items';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ textAlign: 'center' }}>
        <HeroImage />
        <Items />
      </Grid>
    </Box>
  );
}

export default App;