// Тут мы кастомизируем, Material UI
import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  // Перезаписываем стиль
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '8px',
      },
      contained: {
        backgorundColor: '#b3b3b3',
        boxShadow: '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px',
        '&:hover': {
          backgroundColor: '#b3b3b3',
          boxShadow: '0 1px 1px rgb(0 0 0 / 18%), 0 4px 7px',
        },
      },
    },
  },
});
