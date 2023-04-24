import Grid from '@mui/material/Unstable_Grid2';
import ItemDetails from './itemDetails';
import { Typography, Stack } from '@mui/material';

function ItemList() {
  return (
    <Grid xs={12} md={6}>
      <Stack direction="column" spacing={2} sx={{height: '40%', alignItems: 'flex-start', justifyContent: 'center'}}>
        <Typography variant="h4" component="h2" sx={{fontWeight: '700'}}>Everyday items, we have something to suit every occasion.</Typography>
        <Typography variant="body2" component="span" sx={{color: '#666666'}}>At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.</Typography>
      </Stack>
      <ItemDetails />
    </Grid>
  );
}

export default ItemList;