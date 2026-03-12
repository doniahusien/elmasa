import type { RootState } from '../../index'
 
export const selectCount = (state: RootState) => state.counter.value
export const selectStep = (state: RootState) => state.counter.step
 