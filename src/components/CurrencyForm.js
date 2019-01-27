import React, { useState, useReducer } from 'react';
import { css } from '@emotion/core';
import Input from './Input';
import CloseIcon from './CloseIcon';
import getDb, { CURRENCIES_TABLE } from 'modules/database';
import {
  spaceM,
  spaceS,
  colorSecondary,
  spaceL,
  borderRadius,
} from 'modules/theme';

function getRate(eur, currency) {
  return eur / currency;
}

const CurrencyForm = ({ onClose }) => {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    { name: '', festival: '', eur: '', currency: '' },
  );
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const db = await getDb();
      const { name, festival, eur, currency } = state;

      await db(CURRENCIES_TABLE).add({
        name,
        festival,
        rate: getRate(eur, currency),
      });
      onClose();
    } catch (err) {
      setError(`${err.srcElement.error}`);
    }
  };

  const handleChange = ({ target }) => {
    const value =
      target.type === 'number' ? Number(target.value) : target.value;
    dispatch({ [target.name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      css={css`
        width: 95%;
        margin: ${spaceL} auto;
        background: #fff;
        border-radius: ${borderRadius};
        padding: ${spaceL};
      `}
    >
      <CloseIcon
        css={css`
          width: 15px;
        `}
        onClick={onClose}
      />
      <Input name="name" value={state.name} onChange={handleChange} required />
      <Input
        name="festival"
        value={state.festival}
        onChange={handleChange}
        required
      />
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Input
          name="eur"
          type="number"
          value={state.eur}
          onChange={handleChange}
          required
        />

        <Input
          name="currency"
          type="number"
          value={state.currency}
          onChange={handleChange}
          required
        />
      </div>
      <p>{error}</p>
      <button
        css={css`
          text-align: center;
          color: #fff;
          display: block;
          margin: ${spaceM} auto;
          padding: ${spaceS} ${spaceL};
          background-color: ${colorSecondary};
          border-radius: ${borderRadius};
          border: none;
        `}
      >
        ADD
      </button>
    </form>
  );
};

export default CurrencyForm;
