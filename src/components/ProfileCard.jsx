import React, { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import styles from './ProfileCard.module.css';

const ProfileCard = ({ profile, onShowSummary }) => {
  const { setSelectedProfile } = useContext(ProfileContext);

  return (
    <div className={styles.card}>
      <img
        src={`/images/${profile.photo}`}
        alt={profile.name}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.name}>{profile.name}</h3>
        <p className={styles.description}>{profile.description}</p>
{/* 
        {profile.location && (
          <p className={styles.location}>
            <strong>Location:</strong> {profile.location}
          </p>
        )} */}

        {/* {profile.interests && profile.interests.length > 0 && (
          <div className={styles.tags}>
            {profile.interests.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )} */}

        <button
          className={styles.button}
          onClick={() => {
            if (onShowSummary) {
              onShowSummary();
            } else {
              setSelectedProfile(profile);
            }
          }}
        >
          Show Summary
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
