import React from 'react';

import { CssBaseline } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { RecoilRoot } from 'recoil';
import Alerts from './components/Alerts';
import { FooterCopyright } from './components/FooterCopyright';
import ThemeToggle from './components/theme/ThemeToggle';
import { Providers } from './Providers';
import { IndexRoutes } from './routes';

export const App = () => (
  <Providers>
    <RecoilRoot>
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
    </RecoilRoot>
  </Providers>
);
