import React from 'react';

import { CssBaseline } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import Alerts from './components/Alerts';
import { FooterCopyright } from './components/FooterCopyright';
import ThemeToggle from './components/theme/ThemeToggle';
import { Providers } from './Providers';
import { IndexRoutes } from './routes';

export const App = () => (
  <Providers>
      <AnimatePresence exitBeforeEnter initial={false}>
        <React.Suspense fallback={'Loading...'}>
          <>
            <CssBaseline />
            <IndexRoutes />
            <Alerts />
            <ThemeToggle />
            <FooterCopyright />
          </>
        </React.Suspense>
      </AnimatePresence>
  </Providers>
);
