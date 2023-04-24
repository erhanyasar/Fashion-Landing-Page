import Item from './item';
import { Button, Typography, Stack } from '@mui/material';

const products = [
  { info: '365 Signature Hoodie', img:'./img/product-1.png' },
  { info: 'Organic Skinny High Waist Jeans', img:'./img/product-2.png' },
  { info: 'Organic Skinny High Waist Jeans', img:'./img/product-3.png' }
]

function ItemDetails() {
  return (
    <>
      <Stack direction="column" spacing={2}>
        <Button href="#text-buttons" sx={{minWidth: '146px', height: '17px', fontFamily: 'Avenir', fontStyle: 'normal', fontWeight: '900', fontSize: '12.8px', lineHeight: '17px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', textTransform: 'capitalize', color: '#000000', flex: 'none', order: '0', flexGrow: '0'}}>Shop all everyday items</Button>
        <Typography variant="body2" component="span" sx={{width: '146px', height: '1px', background: '#000000', flex: 'none', order: 1, alignSelf: 'stretch', flexGrow: 0}}></Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        {products.map(product => {
          return (
            <Item key={product.img} product={product} />
          )
        })}
      </Stack>
    </>
  );
}

export default ItemDetails;