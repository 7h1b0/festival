import React from 'react';
import { css } from '@emotion/core';

import { AddIcon, RemoveIcon, ShareIcon, UpdateIcon } from 'components/icons';
import {
  colorPrimary,
  spaceS,
  spaceM,
  spaceH,
  sizeIcon,
  colorTitle,
} from 'modules/theme';
import { buildURI } from 'modules/url';
import {
  useCurrencyState,
  useCurrenciesDispatch,
} from 'src/context/currenciesContext';

const secondaryIcons = css`
  width: ${sizeIcon};
  fill: ${colorTitle};
`;
const navigatorApi = window.navigator as any; // trick for TS

type Props = { onAdd: () => void };
const BottomActions: React.FC<Props> = ({ onAdd }) => {
  const currency = useCurrencyState();
  const dispatch = useCurrenciesDispatch();

  const handleShare = () => {
    if (currency !== undefined) {
      navigatorApi.share({
        title: '',
        text: '',
        url: buildURI(window.location.origin, {
          rate: currency.rate,
          festival: currency.festival,
          name: currency.name,
        }),
      });
    }
  };

  const handleRemove = () => {
    if (currency !== undefined) {
      dispatch({ type: 'remove', data: currency });
    }
  };

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        margin: ${spaceH} auto ${spaceM};
      `}
    >
      <div
        onClick={onAdd}
        css={css`
          display: flex;
          align-items: center;
          border-radius: 20px;
          height: 40px;
          background: ${colorPrimary};
          padding: ${spaceS} ${spaceM};
        `}
      >
        <AddIcon
          css={css`
            width: ${sizeIcon};
            fill: white;
          `}
        />
        <p
          css={css`
            text-transform: uppercase;
            font-size: 0.8rem;
            color: white;
            margin-left: ${spaceS};
          `}
        >
          Add
        </p>
      </div>
      <RemoveIcon css={secondaryIcons} onClick={handleRemove} />
      <UpdateIcon css={secondaryIcons} />
      {navigatorApi.share && (
        <ShareIcon css={secondaryIcons} onClick={handleShare} />
      )}
    </div>
  );
};

export default BottomActions;
