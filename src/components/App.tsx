import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import HeroImage from './heroImage';
import ItemList from './itemList';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <HeroImage />
        <ItemList />
      </Grid>
    </Box>
  );
}

export default App;