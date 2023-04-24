import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';

function App() {
  return (
    <Grid xs={12} md={6}>
      <Typography variant="h4" component="h2">Everyday items, we have something to suit every occasion.</Typography>
      <Typography variant="body2" component="span">At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.</Typography>
    </Grid>
  );
}

export default App;