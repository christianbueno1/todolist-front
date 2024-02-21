import React, { useContext, useEffect } from 'react';
import UserContext from '../../MyContext';
import styles from './profile.module.css';

function Profile() {
  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log('user profile', user);
  }, [user]);

  return (
    <div className={styles.box}>
      <h2>Profile</h2>
      <div className={styles.line}>
        <div>
          <p>ID:</p>
        </div>
        <div>
          <p className={styles.input}>{user.id}</p>
        </div>
      </div>
      <div className={styles.line}>
        <div>
          <p>Username:</p>
        </div>
        <div>
          <p className={styles.input}>{user.username}</p>
        </div>
      </div>
      <div className={styles.line}>
        <div>
          <p>Email:</p>
        </div>
        <div>
          <p className={styles.input}>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;