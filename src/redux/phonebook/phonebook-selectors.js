import { createSelector } from '@reduxjs/toolkit';

export const getIsLoading = state => state.phonebook.loading;

export const getFilter = state => state.phonebook.filter;

export const getAllContacts = state => state.phonebook.contacts;

export const getVisibleContact = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
