/** @jsx h */
import { h } from 'preact';
import { render } from '@testing-library/preact';

import { useFestivalDispatch, useFestivalState } from './festival-context';

describe('FestivalContext', () => {
  describe('useFestivalDispatch', () => {
    it('should throw when Component is not a child of FestivalProvider', () => {
      function TestComponent() {
        useFestivalDispatch();
        return null;
      }

      expect(() => render(<TestComponent />)).toThrow(
        'useFestivalDispatch must be within FestivalProvider',
      );
    });
  });

  describe('useFestivalState', () => {
    it('should throw when Component is not a child of FestivalProvider', () => {
      function TestComponent() {
        useFestivalState();
        return null;
      }

      expect(() => render(<TestComponent />)).toThrow(
        'useFestivalState must be within FestivalProvider',
      );
    });
  });
});
