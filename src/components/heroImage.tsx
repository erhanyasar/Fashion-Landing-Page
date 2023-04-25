import Grid from '@mui/material/Unstable_Grid2';

const styledGrid =`
  @media screen and (max-width: 600px) {
    MuiGrid2-root {
      width: 100%;
      minHeight: '437px'
  }
  @media screen and (min-width: 600px) {
    MuiGrid2-root {
      width: 50%;
      minHeight: '100%'
  }
}`

function HeroImage() {
  return (
    <Grid
      xs={12}
      md={6}
      className={styledGrid}
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