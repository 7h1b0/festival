import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import useRoundValue from 'hooks/useRoundValue';
import useFocus from 'hooks/useFocus';
import { Currency } from 'modules/currency';

import {
  borderRadius,
  colorDivider,
  colorPrimary,
  colorSubtitle,
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
  color: ${colorSubtitle};
`;

const Converter: React.FC<{ currency: Currency }> = ({ currency }) => {
  const [value, setValue] = useRoundValue(0);
  const [euro, setEuro] = useRoundValue(0);
  const inputEl = useFocus([currency]);

  useEffect(() => {
    if (value) {
      setEuro(value * currency.rate);
    }
  }, [currency]);

  return (
    <div
      css={css`
        background: #fff;
        padding: ${spaceL};
        border-top: 1px solid ${colorDivider};
        border-bottom: 1px solid ${colorDivider};
      `}
    >
      <label htmlFor={currency.name} css={baseCurrencyName}>
        {currency.name}
      </label>
      <input
        ref={inputEl}
        id={currency.name}
        type="number"
        step="0.01"
        value={value || ''}
        min={0}
        onChange={e => {
          setValue(Number(e.target.value));
          setEuro(Number(e.target.value) * currency.rate);
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
      <label htmlFor="euro" css={baseCurrencyName}>
        EUR
      </label>
      <input
        type="number"
        id="euro"
        step="0.01"
        value={euro || ''}
        min={0}
        onChange={e => {
          setEuro(Number(e.target.value));
          setValue(Number(e.target.value) / currency.rate);
        }}
        css={baseInput}
      />
    </div>
  );
};

export default Converter;