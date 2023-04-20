import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ textAlign: 'center' }}>
        <Grid xs={12} md={6}>
          component 1
        </Grid>
        <Grid xs={12} md={6}>
          component 2
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;