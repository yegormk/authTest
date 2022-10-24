import { createAction, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import {
  currentUser,
  listOfUserAssessments,
  listOfUsers,
  userAssessment,
  userGraph,
} from '../interfaces/responses.interfaces';

const initialStateUser: currentUser = {
  first_name: '',
  last_name: '',
  role: '',
  token: '',
};

const initialStateGraph: userGraph = {
  data: {
    Agreeableness: 0,
    Drive: 0,
    Luck: 0,
    Openness: 0,
  },
  type: '',
};

const initialStateUserAssessment: userAssessment[] = [];

const initialStateGetUsers: listOfUsers[] = [];

export const login = createReducer(
  initialStateUser,
  on(AuthActions.login, (state, { user }) => {
    return {
      ...state,
    };
  }),
  on(AuthActions.loginSuccessful, (state, { userData }) => {
    return {
      ...state,
      first_name: userData.first_name,
      last_name: userData.last_name,
      role: userData.role,
      token: userData.token,
    };
  }),
  // on(AuthActions.loginFailure, (state, { error }) => {
  //   return {
  //     ...state,
  //     error: error,
  //   };
  // }),
);

// export const getGraph = createReducer(
//   initialStateGraph,
//   on(AuthActions.getGraph, (state, { id }) => {
//     return {
//       ...state,
//     };
//   }),
//   on(AuthActions.getGraphSuccessful, (state, { currentGraph }) => {
//     return {
//       ...state,
//       data: {
//         Agreeableness: currentGraph.data.Agreeableness,
//         Drive: currentGraph.data.Drive,
//         Luck: currentGraph.data.Luck,
//         Openness: currentGraph.data.Openness,
//       },
//       type: currentGraph.type,
//     };
//   }),
//   on(AuthActions.getGraphFailure, (state, { error }) => {
//     return {
//       ...state,
//       error: error,
//     };
//   }),
// );
//
// export const getAssessments = createReducer(
//   initialStateUserAssessment,
//   on(AuthActions.getAssessments, state => {
//     return {
//       ...state,
//     };
//   }),
//   on(AuthActions.getAssessmentsSuccessful, (state, { userAssessments }) => {
//     return {
//       state: userAssessments,
//     };
//   }),
//   on(AuthActions.getAssessmentsFailure, (state, { error }) => {
//     return {
//       ...state,
//       error: error,
//     };
//   }),
// );
//
// export const getUsers = createReducer(
//   initialStateGetUsers,
//   on(AuthActions.getUsers, state => {
//     return {
//       ...state,
//     };
//   }),
//   on(AuthActions.getUsersSuccessful, (state, { listOfAllUsers }) => {
//     return {
//       ...state,
//       listOfAllUsers,
//     };
//   }),
//   on(AuthActions.getUsersFailure, (state, { error }) => {
//     return {
//       ...state,
//       error: error,
//     };
//   }),
// );
