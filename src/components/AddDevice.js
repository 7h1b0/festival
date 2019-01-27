import React, { useState, useContext } from 'react';
import { HistoryContext } from './Router';
import getDb, { DEVICES_TABLE } from 'modules/database';

const AddDevice = () => {
  const [name, setName] = useState('');
  const [rate, setRate] = useState(0);
  const { redirectTo } = useContext(HistoryContext);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(name, rate);
    const db = await getDb();
    await db(DEVICES_TABLE).add({ name, rate });
    redirectTo('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <input
        type="number"
        value={rate}
        onChange={e => setRate(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default AddDevice;
