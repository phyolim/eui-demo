
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;
export const makeSelectToasts = () =>
    createSelector(selectGlobal, globalState => globalState.toasts);
