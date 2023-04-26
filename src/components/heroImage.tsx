import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function HeroImage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      xs={12}
      md={6}
      style={{
        backgroundImage: 'url("./img/bg.png")',
        backgroundSize: 'cover',
        minHeight: '437px',
      }}
    >
    </Grid>
  );
}

export default HeroImage;