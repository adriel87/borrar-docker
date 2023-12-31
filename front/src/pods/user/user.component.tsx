import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { cx } from '@emotion/css';
import { User } from './user.vm';
import * as classes from './user.styles';

interface Props {
  user: User;
  className?: string;
}

export const UserComponent: React.FC<Props> = (props) => {
  const { user, className } = props;

  return (
    <div className={cx(classes.root, className)}>
      <Avatar className={classes.avatar} src={user.avatar} />
      <Typography className={classes.email} variant="h4">
        {user.email}
      </Typography>
      <Typography className={classes.role} variant="body1">
        Perfil: {user.role}
      </Typography>
    </div>
  );
};
