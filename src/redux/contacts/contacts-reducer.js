import { createReducer } from '@reduxjs/toolkit';
import { filterValue } from './contacts-actions';
export const filter = createReducer('', {
  [filterValue]: (_, { payload }) => payload,
});
