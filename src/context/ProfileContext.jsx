import { createContext, useState } from 'react';
import profileData from '../data/profiles.json';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(profileData);
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <ProfileContext.Provider value={{ profiles, setProfiles, selectedProfile, setSelectedProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
