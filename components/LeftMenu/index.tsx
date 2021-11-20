import React from 'react';
import { Button } from '@material-ui/core';

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MessageIcon from '@mui/icons-material/Sms';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import styles from './LeftMenu.module.scss';

export const LeftMenu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <LocalFireDepartmentIcon />
            Лента
          </Button>
        </li>
        <li>
          <Button>
            <MessageIcon />
            Сообщения
          </Button>
        </li>
        <li>
          <Button>
            <TrendingUpIcon />
            Рейтинг TJ
          </Button>
        </li>
        <li>
          <Button>
            <FormatListBulletedIcon />
            Подписки
          </Button>
        </li>
      </ul>
    </div>
  );
};
