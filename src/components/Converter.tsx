import React from 'react';
import { css } from '@emotion/core';
import Rate from 'components/Rate';
import useConverter from 'hooks/useConverter';
import useFocus from 'hooks/useFocus';
import { useCurrencyState } from 'context/currenciesContext';

import {
  borderRadius,
  colorDivider,
  colorPrimary,
  colorTitle,
  spaceL,
  spaceM,
  sizeHeadline,
  sizeLabel,
} from 'modules/theme';

const baseInput = css`
  margin: ${spaceM} 0 0;
  border: 1px solid ${colorDivider};
  font-size: ${sizeHeadline};
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
  font-size: ${sizeLabel};
  letter-spacing: 0.05rem;
  font-weight: bold;
  color: ${colorTitle};
`;

const Converter: React.FC<{}> = () => {
  const currency = useCurrencyState();
  const [{ value, euros }, dispatch] = useConverter(
    currency ? currency.rate : 0,
  );
  const inputEl = useFocus([currency]);

  if (currency === undefined) {
    return null;
  }

  return (
    <div
      css={css`
        background: #fff;
        padding: ${spaceL};
        border: 1px solid ${colorDivider};
        flex: 1;
      `}
    >
      <label htmlFor={currency.name} css={baseCurrencyName}>
        {currency.name}
      </label>
      <Rate rate={currency.rate} target="EUR" origin={currency.name} />
      <input
        ref={inputEl}
        id={currency.name}
        type="number"
        step="0.01"
        value={value || ''}
        min={0}
        onChange={e => {
          dispatch({ type: 'TO_EUROS', data: Number(e.target.value) });
        }}
        css={css`
          ${baseInput}
        `}
      />

      <div
        css={css`
          background: ${colorPrimary};
          height: 2px;
          margin: ${spaceL} 0;
        `}
      />
      <label htmlFor="euros" css={baseCurrencyName}>
        EUR
      </label>
      <Rate rate={1 / currency.rate} origin="EUR" target={currency.name} />
      <input
        type="number"
        id="euros"
        step="0.01"
        value={euros || ''}
        min={0}
        onChange={e => {
          dispatch({ type: 'TO_CURRENCY', data: Number(e.target.value) });
        }}
        css={baseInput}
      />
    </div>
  );
};

export default Converter;
