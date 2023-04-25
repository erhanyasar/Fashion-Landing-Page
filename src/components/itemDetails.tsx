import { Stack, Typography } from '@mui/material';
import { CirclePicker } from 'react-color';

function ItemDetails(props: any) {
  const  handleChangeComplete = (color: any, event: any) => {
    console.log(color, event);
  };

  return (
    <Stack direction="column" spacing={2}>
        <img src={props.product.img} alt={props.product.info} width='230px' height='310px' />
        <Typography>{props.product.info}</Typography>
        <Stack direction="row" spacing={2} sx={{justifyContent: 'space-between'}}>
          <Typography>€33.95</Typography>
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