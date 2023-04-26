import { Suspense } from 'react';
import { CssBaseline, CircularProgress } from '@mui/material';
import Router from './router';
import '../../fonts/ITCAvantGardePro/stylesheet.css';

function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <CssBaseline />
        <Router />
    </Suspense>
  );
}

export default App;