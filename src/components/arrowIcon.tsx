
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ArrowIcon() {
  const handleScroll = () => {
    // window.scrollBy(100, 0)
  }

  return (
    <Button
      sx={{
        color: '#000000',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '12px',
        gap: '10px',
        minWidth: '40px',
        height: '40px',
        right: '258px',
        mt: '135px !important',
        mb: '188px !important',
        border: '1px solid rgba(0, 0, 0, 0.1)'
      }}
      onClick={handleScroll}
    >
        <ArrowForwardIosIcon sx={{width: '7px', height: '13px'}} />
    </Button>
  );
}

export default ArrowIcon;