import React, { useContext, useState } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import ProfileCard from './ProfileCard';
import SearchBar from './SearchBar';
import ProfileModal from './ProfileModal';
import styles from './ProfileList.module.css';

const ProfileList = () => {
  const { profiles } = useContext(ProfileContext);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterInterest, setFilterInterest] = useState('');

  const availableLocations = Array.from(new Set(profiles.map(p => p.location).filter(Boolean)));
  const availableInterests = Array.from(new Set(profiles.flatMap(p => p.interests || [])));

  const filtered = profiles.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterLocation === '' || p.location === filterLocation) &&
    (filterInterest === '' || (p.interests || []).includes(filterInterest))
  );

  return (
    <div className={styles.container}>
      <SearchBar
        setSearchTerm={setSearchTerm}
        setFilterLocation={setFilterLocation}
        setFilterInterest={setFilterInterest}
        availableLocations={availableLocations}
        availableInterests={availableInterests}
      />

      <div className={styles.grid}>
        {filtered.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onShowSummary={() => setSelectedProfile(profile)}
          />
        ))}
      </div>

      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />
    </div>
  );
};

export default ProfileList;
