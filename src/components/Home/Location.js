import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Location = () => {
  const handleLocationClick = () => {
    // Open the location in a new tab
    window.open('https://www.google.com/maps/place/Maitri+Information+Systems+Pvt.+Ltd,+99,+Jaya+Apartments,+6th+Cross+Rd,+Malleshwara,+Bengaluru,+Karnataka+560003/data=!4m2!3m1!1s0x3bae16267bcefa45:0xd7112d379b898576?utm_source=mstt_1&entry=gps&lucs=47068615&g_ep=CAESCTExLjkwLjMwMhgAINeCAyoINDcwNjg2MTVCAklO');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <FontAwesomeIcon
        icon={faMapMarkerAlt}
        style={{ color: 'purple', fontSize: '35px', cursor: 'pointer' }}
        onClick={handleLocationClick}
      />
      <div style={{ fontSize: '15px', marginTop: '5px' }}>Location</div>
    </div>
  );
};

export default Location;
