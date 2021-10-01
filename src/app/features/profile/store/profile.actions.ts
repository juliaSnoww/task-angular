import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@interfaces';

const initProfile = createAction('[Profile] Init');

const loadUser = createAction('[User] Load User');

const loadUserSuccess = createAction(
    '[User] Load User Success',
    props<{ user: UserProfile }>()
);

const loadUsers = createAction('[User] Load Users');

const loadUsersSuccess = createAction(
    '[User] Load Users Success',
    props<{ users: UserProfile[] }>()
);

export const profileActions = { initProfile , loadUser, loadUsers, loadUsersSuccess, loadUserSuccess };
