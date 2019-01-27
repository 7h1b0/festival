import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import useRoundValue from 'hooks/useRoundValue';
import Rate from './Rate';
import { spaceL, colorPrimary, borderRadius, spaceM } from 'modules/theme';

function useFocus(options) {
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl.current !== null) {
      inputEl.current.focus();
    }
  }, options);
  return inputEl;
}

const baseInput = css`
  margin: ${spaceM} 0 0;
  border: none;
  font-size: 2rem;
  display: block;
  width: 100%;
  background: none;
`;

const baseCurrencyName = css`
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  font-weight: bold;
`;

const Converter = ({ currency }) => {
  const [value, setValue] = useRoundValue(0);
  const [euro, setEuro] = useRoundValue(0);
  const inputEl = useFocus([currency]);

  return (
    <div
      css={css`
        background: #fff;
        border-radius: ${borderRadius};
        padding: ${spaceL};
      `}
    >
      <div>
        <label htmlFor={currency.name} css={baseCurrencyName}>
          {currency.name}
        </label>
        <Rate rate={currency.rate} origin={currency.name} target="EUR" />
        <input
          ref={inputEl}
          id={currency.name}
          type="number"
          name="price"
          step="0.01"
          value={value}
          min={0}
          onChange={e => {
            setValue(e.target.value);
            setEuro(e.target.value * currency.rate);
          }}
          css={css`
            ${baseInput}
          `}
        />
      </div>

      <div
        css={css`
          background: ${colorPrimary};
          height: 2px;
          margin: ${spaceL} 0;
        `}
      />
      <div>
        <label htmlFor="EUR" css={baseCurrencyName}>
          EUR
        </label>
        <Rate rate={1 / currency.rate} target={currency.name} origin="EUR" />
        <input
          type="number"
          name="price"
          id="EUR"
          step="0.01"
          value={euro}
          min={0}
          onChange={e => {
            setEuro(e.target.value);
            setValue(e.target.value / currency.rate);
          }}
          css={baseInput}
        />
      </div>
    </div>
  );
};

Converter.propTypes = {
  currency: PropTypes.object.isRequired,
};

export default Converter;
