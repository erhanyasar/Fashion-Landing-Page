
import { Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ItemDetails from './itemDetails';
import ArrowIcon from './arrowIcon';

const products = [
  { info: '365 Signature Hoodie', img:'./img/product-1.png' },
  { info: 'Organic Skinny High Waist Jeans', img:'./img/product-2.png' },
  { info: 'Organic Skinny High Waist Jeans', img:'./img/product-3.png' }
]

function ItemsList() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div
      style={{
        overflow: 'scroll hidden',
        marginLeft: matches ? '24px' : '120px',
        marginTop: '68px',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}
    >
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