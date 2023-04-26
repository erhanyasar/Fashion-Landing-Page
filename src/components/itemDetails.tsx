import { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { CirclePicker } from 'react-color';

function ItemDetails(props: any) {
  const [selectedColor, setSelectedColor]=useState('#99c3cc');
  const  handleChangeComplete = (color: any, event: any) => {
    setSelectedColor(color.hex);
  };

  return (
    <Stack direction="column" spacing={2}>
        <img src={selectedColor === '#99c3cc' ? props.product.img : ''} alt={props.product.info} width='230px' height='310px' />
        <Typography
          sx={{
            mt: '12px !important',
            width: '230px',
            height: '20px',
            fontFamily: 'Avenir',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '12.8px',
            lineHeight: '160%',
            color: '#000000',
            flex: 'none',
            order: 0,
            flexGrow: 0
          }}
        >{props.product.info}</Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography
            sx={{
              left: '0%',
              right: '82.61%',
              top: '0%',
              bottom: '0%',
              fontFamily: 'Avenir',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '12.8px',
              lineHeight: '160%',
              display: 'flex',
              textAlign: 'center',
              color: '#000000'
            }}
          >€33.95</Typography>
            <CirclePicker 
              width={'90px'}
              circleSize={10}
              circleSpacing={9}
              colors={['#99C3CC', '#CC9999', '#CB99CC', '#A6CC99']}
              onChangeComplete={handleChangeComplete}
            />
        </Stack>
    </Stack>
  );
}

export default ItemDetails;