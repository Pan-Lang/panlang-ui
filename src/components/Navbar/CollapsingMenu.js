import React from 'react';
import { Link } from 'react-router-dom';
import {  Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import {
  ABOUT,
  LANDING,
  ORDER_FORM,
  ORDER_TRACKER,
  SIGN_IN,
  STOCK,
} from '../../constants/Routes';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

/**
 * Responsive navigation menu
 * Base code from: https://codesandbox.io/s/64kr4k1lww?file=/demo.js
 */
function CollapsingMenu() {
  const [user] = useAuthState(auth);

  // Pages to navigate to
  const fullNavigation = [
    { page: 'About', to: ABOUT },
    { page: 'Order Form', to: ORDER_FORM },
    { page: 'Order Tracker', to: ORDER_TRACKER },
    { page: 'Stock', to: STOCK },
  ];

  // Only show About page when user is not logged in
  const navigation = Boolean(user) ? fullNavigation : [fullNavigation[0]];

  // Auth button text depends on whether user is logged in
  function getAuthButtonText() {
    // If the user is signed in
    if (Boolean(user)) {
      // In case the user doesn't have a display name
      if (user.displayName === null) {
        return user.email;
      } else {
        return user.displayName.split(' ')[0];
      }
    }

    // If the user is not signed in
    return 'Sign In';
  }

  // Profile button redirects to landing page
  function getAuthButtonLink() {
    return Boolean(user) ? LANDING : SIGN_IN;
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* Desktop */}
      <nav className={classes.buttonBar} id="appbar-collapse">
        {navigation.map((nav) => (
          <Button
            component={Link}
            className={classes.link}
            to={nav.to}
            key={nav.to}
          >
            {nav.page}
          </Button>
        ))}
        <Button
          component={Link}
          to={getAuthButtonLink()}
          variant="contained"
          className={classes.login}
        >
          {getAuthButtonText()}
          {Boolean(user) && (
            <AccountCircleIcon className={classes.profileIcon} />
          )}
        </Button>
      </nav>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    margin: '10px',
    paddingLeft: '16px',
    right: 0,
    position: 'relative',
    width: '100%',
    background: 'transparent',
  },
  link: {
    margin: theme.spacing(1, 1),
    color: 'gray',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  login: {
    margin: '10px',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  profileIcon: {
    marginLeft: '4px',
  },
}));

export default CollapsingMenu;
