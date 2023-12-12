import { create } from "zustand";

type CardState = {
  clubs: number;
  diamonds: number;
  hearts: number;
  spades: number;
  addCard: (suit: "clubs" | "diamonds" | "hearts" | "spades") => void;
};

export const useCardStore = create<CardState>((set) => ({
  clubs: 0,
  diamonds: 0,
  hearts: 0,
  spades: 0,
  addCard: (suit: "clubs" | "diamonds" | "hearts" | "spades") =>
    set((state) => ({ [suit]: state[suit] + 1 })),
}));
