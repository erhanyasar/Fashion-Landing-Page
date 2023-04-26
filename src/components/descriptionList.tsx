import { Button, Typography, Stack, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import ItemsList from './itemsList';

function DescriptionList() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid xs={12} sm={6} style={{maxHeight: '100vh', marginTop: matches ? '-268px' : ''}}>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          m: matches ? 'auto' : '',
          ml: matches ? '' : '120px'
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            width: '494px',
            height: '123px',
            m: matches ? 'auto' : '',
            mt: matches ? '0' : '96px',
            fontWeight: 700,
            fontFamily: 'ITC Avant Garde Pro Md',
            fontStyle: 'normal',
            fontSize: '31.25px',
            lineHeight: '130%',
            display: 'flex',
            alignItems: 'flex-end',
            color: matches ? '#FFF' :'#000'
          }}
        >
          Everyday items, we have something to suit every occasion.
        </Typography>
        <Typography
          variant="body2"
          component="span" 
          sx={{
            display: matches ? 'none' : 'block',
            width: '432px',
            height: '52px',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '160%',
            color: '#666',
            fontFamily: 'Avenir',
            mt: '12px !important'
          }}
        >
          At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.
        </Typography>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            maxHeight: '23px',
            width: '100%',
            ml: matches ? '24px !important' : '',
            mt: '32px !important',
          }}
        >
          <Button
            href="#"
            sx={{
              p: 0,
              minWidth: '146px',
              height: '17px',
              fontFamily: 'Avenir',
              fontStyle: 'normal',
              fontWeight: '900',
              fontSize: '12.8px',
              lineHeight: '17px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              textTransform: 'capitalize',
              color: matches ? '#FFF' :'#000',
              flex: 'none',
              order: '0',
              flexGrow: '0'
            }}
          >
            Shop all everyday items
          </Button>
          <Typography
            variant="body2"
            component="span"
            sx={{
              mt: '8px !important',
              width: '156px',
              height: '1px',
              background: matches ? '#FFF' :'#000',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 0
            }}
          >
          </Typography>
        </Stack>
      </Stack>
      <ItemsList />
    </Grid>
  );
}

export default DescriptionList;