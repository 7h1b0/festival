import React from 'react';
import { css } from '@emotion/core';
import { navigate, RouteComponentProps } from '@reach/router';

import EmptyListIcon from 'components/icons/EmptyListIcon';
import Button from 'components/Button';
import {
  spaceL,
  colorTitle,
  colorSubtitle,
  sizeText,
  spaceH,
  spaceS,
} from 'modules/theme';

const GetStarted: React.FC<RouteComponentProps> = () => {
  const redirectToAdd = () => {
    navigate('/add');
  };

  return (
    <div
      css={css`
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      `}
    >
      <EmptyListIcon
        css={css`
          fill: ${colorTitle};
          width: 150px;
          height: 150px;
          margin-bottom: ${spaceH};
        `}
      />
      <h2
        css={css`
          color: ${colorTitle};
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: ${spaceS};
        `}
      >
        Add currency
      </h2>
      <p
        css={css`
          color: ${colorSubtitle};
          font-size: ${sizeText};
        `}
      >
        Get started by adding a currency
      </p>
      <Button
        uiStyle="raised"
        onClick={redirectToAdd}
        css={css`
          margin: ${spaceL} auto;
        `}
      >
        Add Currency
      </Button>
    </div>
  );
};

export default GetStarted;
