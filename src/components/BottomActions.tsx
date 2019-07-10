import React from 'react';
import { css } from '@emotion/core';

import { AddIcon, RemoveIcon, ShareIcon } from 'components/icons';
import { colorSubtitle, spaceM, spaceH, sizeIcon } from 'modules/theme';
import { buildURI } from 'modules/url';
import {
  useCurrencyState,
  useCurrenciesDispatch,
} from 'src/context/currenciesContext';
import BottomButton from './BottomButton';

const IconStyle = {
  fill: colorSubtitle,
  width: sizeIcon,
};
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
        width: 100%;
        margin: ${spaceH} auto ${spaceM};
      `}
    >
      <BottomButton
        onClick={onAdd}
        icon={<AddIcon css={IconStyle} />}
        label="Add"
      />
      <BottomButton
        onClick={handleRemove}
        icon={<RemoveIcon css={IconStyle} />}
        label="Remove"
      />
      {navigatorApi.share && (
        <BottomButton
          onClick={handleShare}
          icon={<ShareIcon css={IconStyle} />}
          label="Share"
        />
      )}
    </div>
  );
};

export default BottomActions;
