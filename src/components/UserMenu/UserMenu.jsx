import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import s from './UserMenu.module.css';

const UserMenu = ({ avatar, email, onLogout }) => (
  <div className={s.menu}>
    <img src={avatar} alt="" width="32" className={s.avatar} />
    <span className={s.text}>Welcome, {email}</span>
    <button className={s.button} type="button" onClick={onLogout}>
      Log Out
    </button>
  </div>
);
const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
