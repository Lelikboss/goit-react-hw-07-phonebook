import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from './contacts/contactsSlice';
import { combineReducers } from 'redux';
import { filter } from './contacts/contacts-reducer';
const contactReducer = combineReducers({
  [contactApi.reducerPath]: contactApi.reducer,
  filter: filter,
});
export const store = configureStore({
  reducer: contactReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
