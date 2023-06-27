'use client';

import { FC, PropsWithChildren, createContext, useReducer, useState } from 'react';

interface Cart {
  [index: string]: number,
}

interface ReducerAction {
  type: ReducerActionType,
  payload: string,
}

export enum ReducerActionType {
  ADD_TICKET = 'addTicket',
  REMOVE_TICKET = 'removeTicket',
  DELETE_TICKETS = 'deleteTickets',
}

const reducer = (state: Cart, action: ReducerAction) => {
  const movieID = action.payload;
  switch (action.type) {
    case ReducerActionType.ADD_TICKET:
      return {...state, [movieID]: (state[movieID] ?? 0) + 1};
    case ReducerActionType.REMOVE_TICKET:
      return {...state, [movieID]: state[movieID] - 1 };
    case ReducerActionType.DELETE_TICKETS:
      return {...state, [movieID]: 0 };
    default: return state;
  }
}

export const CartContext = createContext<{
  cartState: Cart,
  dispatchCartAction: React.Dispatch<any>,
}>({
  cartState: {},
  dispatchCartAction: () => null,
});

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(reducer, {});
  const value = {cartState, dispatchCartAction};

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
