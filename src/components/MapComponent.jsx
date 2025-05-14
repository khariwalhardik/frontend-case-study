import React from 'react';

const MapComponent = ({ address }) => {
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div style={{ marginTop: 20 }}>
      <iframe
        title="Map"
        src={mapSrc}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
