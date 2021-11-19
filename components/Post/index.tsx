import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';
import styles from './Post.module.scss';

export const Post = () => {
  return (
    <div>
      <Paper elevation={0} className="p-20">
        <Typography variant="h5" className={styles.title}>
          Котик - это лучший друг девушки, он всегда поймет, он никогда не поднимет руку, он не
          причинит боль.
        </Typography>
        <Typography className="mt-15 mb-15">
          Котик очень долго стеснялся сказать, что он кот. Поэтому первое время прятался под
          кроватью. А когда все-таки выходил, то начинал громко и раскатисто мяукать, пугая своих
          хозяев. Теперь, если хозяева что-то прячут, он выходит из-под кровати и начинает громко
          мяукать им на ухо. Если надо - орет до тех пор, пока ничего не найдут. Но в конце концов
          все равно прячут.
        </Typography>
        <Image
          src="https://sun9-39.userapi.com/impg/VaB2ecchKb5WrCuHBoMS8CVXZQdVNgaYDis-Hg/yeeX4YN7XEI.jpg?size=960x1280&quality=96&sign=f3021719e3b393935c18087f154e0cca&type=album"
          height={500}
          width={600}
        />
      </Paper>
    </div>
  );
};
