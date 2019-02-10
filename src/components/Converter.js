import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import useRoundValue from 'hooks/useRoundValue';
import {
  borderRadius,
  colorDivider,
  colorPrimary,
  colorSubtitle,
  spaceL,
  spaceM,
} from 'modules/theme';

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
  border: 1px solid ${colorDivider};
  font-size: 2rem;
  display: block;
  width: 100%;
  background: none;
  border-radius: ${borderRadius};
  &:focus {
    border: 1px solid ${colorPrimary};
    outline: none;
  }
`;

const baseCurrencyName = css`
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  font-weight: bold;
  color: ${colorSubtitle};
`;

const Converter = ({ currency }) => {
  const [value, setValue] = useRoundValue(0);
  const [euro, setEuro] = useRoundValue(0);
  const inputEl = useFocus([currency]);

  return (
    <div
      css={css`
        background: #fff;
        padding: ${spaceL};
        border-top: 1px solid ${colorDivider};
        border-bottom: 1px solid ${colorDivider};
      `}
    >
      <div>
        <label htmlFor={currency.name} css={baseCurrencyName}>
          {currency.name}
        </label>
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
