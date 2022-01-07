import { useState } from 'react';

import { checkIn, checkOut } from '../../services/checkinService';
import './Child.css';

export default function Child({
  child: {
    checkedIn,
    childId,
    image: { small },
    name: { fullName },
  },
}) {
  const [isCheckedIn, setCheckedIn] = useState(checkedIn);
  const [isLoading, setIsLoading] = useState(false);

  async function onClickCheckIn() {
    setIsLoading(true);
    const response = await checkIn(childId);

    if (response.status === 200) {
      setIsLoading(false);
      setCheckedIn(true);
    }
  }

  async function onClickCheckOut() {
    setIsLoading(true);
    const response = await checkOut(childId);

    if (response.status === 200) {
      setIsLoading(false);
      setCheckedIn(false);
    }
  }

  return (
    <div className="child-container">
      <h3>{fullName}</h3>

      <div className="child-info">
        <img src={small} alt="photo" />

        <div className="checkedin-info">
          <p>
            Checked in: {isCheckedIn && <span className="yes">Yes</span>}
            {!isCheckedIn && <span className="no">No</span>}
          </p>
          <div className="buttons-container">
            <button
              disabled={isCheckedIn || isLoading}
              onClick={onClickCheckIn}
            >
              Checkin
            </button>
            <button
              disabled={!isCheckedIn || isLoading}
              onClick={onClickCheckOut}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
