import { createSelector } from '@ngrx/store';
import {
  currentUser,
  listOfUserAssessments,
  listOfUsers,
  userAssessment,
  userGraph,
} from '../interfaces/responses.interfaces';

export const selectLogin = createSelector(
  (state: currentUser) => {
    return state;
  },
  (user: currentUser) => user,
);
//
// export const selectUserAssessments = createSelector(
//   (state: userAssessment[]) => {
//     console.log('Dispatched userAssessments');
//     return state;
//   },
//   (listOfAssessments: userAssessment[]) => listOfAssessments,
// );

// export const selectListOfUsers = createSelector(
//   (state: listOfUsers[]) => {
//     return state;
//   },
//   (listOfUsers: listOfUsers[]) => listOfUsers,
// );
//
// export const selectGraph = createSelector(
//   (state: userGraph) => {
//     return state;
//   },
//   (currentGraph: userGraph) => currentGraph,
// );
