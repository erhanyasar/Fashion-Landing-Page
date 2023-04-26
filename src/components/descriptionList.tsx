import Grid from '@mui/material/Unstable_Grid2';
import ItemsList from './itemsList';
import { Typography, Stack } from '@mui/material';

function DescriptionList() {
  return (
    <Grid xs={12} md={6} style={{height: '100vh'}}>
      <Stack direction="column" spacing={2} sx={{height: '40%', alignItems: 'flex-start', justifyContent: 'center'}}>
        <Typography variant="h4" component="h2" sx={{fontWeight: '700', fontFamily: 'ITC Avant Garde Pro Md'}}>Everyday items, we have something to suit every occasion.</Typography>
        <Typography variant="body2" component="span" sx={{color: '#666666', fontFamily: 'Avenir'}}>At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.</Typography>
      </Stack>
      <ItemsList />
    </Grid>
  );
}

export default DescriptionList;