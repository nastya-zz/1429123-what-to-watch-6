import {createReducer} from "@reduxjs/toolkit";
import {AuthorizationStatus} from "../../constants/common";
import {requireAuthorization, setUser} from "../action";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
};

export const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    return {
      ...state,
      authorizationStatus: action.payload,
    };
  });
  builder.addCase(setUser, (state, action) => {
    return {
      ...state,
      user: action.payload,
    };
  });
});
