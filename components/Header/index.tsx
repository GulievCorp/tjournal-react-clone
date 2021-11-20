import { Paper, Button, IconButton } from '@material-ui/core';
import React from 'react';
import styles from './Header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import MessageIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Image
          className={styles.logo}
          src="https://tjournal.ru/static/build/tjournal.ru/images/search_logo.png"
          width={34}
          height={42}
        />
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input type="text" placeholder="Поиск" />
        </div>

        <Button variant="contained" className={styles.penButton}>
          <CreateIcon />
        </Button>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar
          className={styles.avatar}
          alt="Remy Sharp"
          src="https://sun9-26.userapi.com/impg/x5NfpyqCwc0klKjLLGCYcPM96hQnj09zzi0rng/lZ92WITuEvg.jpg?size=956x1276&quality=96&sign=96319835573fb6d2a7cfd4ccc63c6202&type=album"
        />
        <ExpandMoreIcon />
      </div>
    </Paper>
  );
};
