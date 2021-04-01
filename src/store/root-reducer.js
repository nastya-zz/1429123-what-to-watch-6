import {combineReducers} from "redux";
import {user} from "./user/user";
import {film} from "./film/film";
import {main} from "./main/main";

const NameSpace = {
  MAIN: `MAIN`,
  FILM: `FILM`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.FILM]: film,
  [NameSpace.MAIN]: main
});
