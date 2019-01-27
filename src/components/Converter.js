import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from 'modules/formatter';
import getDb, { DEVICES_TABLE } from 'modules/database';

async function fetchDevice(id, setDevice) {
  const db = await getDb();
  const event = await db(DEVICES_TABLE).find(id);
  console.log(event);
  setDevice(event.target.result);
}

const Converter = ({ deviceId }) => {
  const [device, setDevice] = useState(undefined);
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetchDevice(deviceId, setDevice);
  }, [deviceId]);

  if (device == null) {
    return <p>Loading</p>;
  }

  return (
    <>
      <h2>{device.name}</h2>
      <div className="card-converter">
        <input
          type="number"
          name="price"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="number-converter"
        />
        <p className="number-converter">{formatPrice(device.rate * value)}</p>
      </div>
    </>
  );
};

Converter.propTypes = {
  deviceId: PropTypes.number.isRequired,
};

export default Converter;
