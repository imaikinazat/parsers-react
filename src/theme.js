'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import {ruRU as coreRuRU} from '@mui/material/locale';
import { ruRU } from '@mui/x-date-pickers/locales';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            }
          ],
        },
      },
    },
  },
}, ruRU, coreRuRU);

export default theme;
