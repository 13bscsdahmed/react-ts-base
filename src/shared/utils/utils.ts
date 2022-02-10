import store from '@store/index';
import { rootSliceGroup } from '@vmw/slices-for-redux';
import { Slice } from '@reduxjs/toolkit';

export const injectReducers = (slices: Slice[]) => {
  slices.forEach((slice) => {
    if (!store?.getState?.()?.[slice?.name]) {
      rootSliceGroup.addReducers({[slice?.name]: slice.reducer})
    }
  })
}