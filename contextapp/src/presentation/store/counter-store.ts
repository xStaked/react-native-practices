import {create} from 'zustand';

export interface CounterState {
  counter: number;
  incrementBy: (value: number) => void;
}

export const useCounterStore = create<CounterState>()(set => ({
  counter: 0,
  incrementBy: value => set(state => ({counter: state.counter + value})),
}));
