import { Stack, Typography } from '@mui/material';
import { CirclePicker } from 'react-color';

function Item(props: any): JSX.Element {
  return (
    <Stack direction="column" spacing={2}>
        <img src={props.product.img} alt={props.product.info} />
        <Typography>{props.product.info}</Typography>
        <Stack direction="column" spacing={2}>
          <Typography>€33.95</Typography>
          <CirclePicker />
        </Stack>
    </Stack>
  );
}

export default Item;