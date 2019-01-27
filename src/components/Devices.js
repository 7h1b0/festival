import React, { useState, useEffect } from 'react';
import getDb, { DEVICES_TABLE } from 'modules/database';

async function fetchDevices(setDevices) {
  const db = await getDb();
  const event = await db(DEVICES_TABLE).findAll();
  setDevices(event.target.result);
}

const Devices = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetchDevices(setDevices);
  }, []);

  return (
    <>
      {devices.map(({ name, conversionRate }) => (
        <a key={name} href={`/converter/${name}`}>
          <p>{name}</p>
          <p>{conversionRate}</p>
        </a>
      ))}
      <a href="/add">Add Device</a>
    </>
  );
};

export default Devices;
