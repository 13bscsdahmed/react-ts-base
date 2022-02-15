import store, { injectReducer } from '@store/index';
import { Slice } from '@reduxjs/toolkit';

export const injectReducers = (slices: Slice[]) => {
  slices.forEach((slice) => {
    if (!store?.getState?.()?.[slice?.name]) {
      injectReducer(slice?.name, slice.reducer)
    }
  })
}