import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,
    on(profileActions.loadUserSuccess, (state, p) => {

        return { ...state, user: p.user };

    }),
    on(profileActions.loadUsersSuccess, (state, p) => {

        return { ...state, users: p.users };

    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
