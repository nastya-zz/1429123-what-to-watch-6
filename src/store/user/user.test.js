import {user} from './user';
import {requireAuthorization, setUser} from '../action';
import {AuthorizationStatus} from "../../constants/common";

describe(`Test user reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: null
      });
  });

  it(`Reducer [requireAuthorization] return correct authorization status`, () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, requireAuthorization(AuthorizationStatus.AUTH))).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
  });

  it(`Reducer [setUser] return correct user`, () => {
    const userMock = {
      email: `nn@mail.com`,
      name: `John`,
    };

    const state = {
      user: null,
    };

    expect(user(state, setUser(userMock))).toEqual({
      user: userMock
    });
    expect(user(state, setUser(null))).toEqual({
      user: null
    });
  });
});
