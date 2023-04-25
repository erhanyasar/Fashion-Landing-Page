import Grid from '@mui/material/Unstable_Grid2';

function HeroImage() {
  return (
    <Grid
      xs={12}
      md={6}
      style={{
        backgroundImage: 'url("./img/bg.png")',
        width: '50%'
      }}
    >
    </Grid>
  );
}

export default HeroImage;