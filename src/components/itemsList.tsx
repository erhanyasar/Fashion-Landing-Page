import ItemDetails from './itemDetails';
import { Stack } from '@mui/material';
import ArrowIcon from './arrowIcon';

const products = [
  { info: '365 Signature Hoodie', img:'./img/product-1.png' },
  { info: 'Organic Skinny High Waist Jeans', img:'./img/product-2.png' },
  { info: 'Organic Skinny High Waist Jeans', img:'./img/product-3.png' }
]

function ItemsList() {
  return (
    <div style={{overflow: 'scroll hidden', marginLeft: '120px', marginTop: '68px'}}>
      <Stack direction="row" spacing={2}>
        {products.map(product => {
          return (
            <ItemDetails key={product.img} product={product} />
          )
        })}
        <ArrowIcon />
      </Stack>
    </div>
  );
}

export default ItemsList;