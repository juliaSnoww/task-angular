import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { profileActions } from '@store/actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserProfileDTO } from '@interfaces';
import { of } from 'rxjs';
import { UserMapperService } from '@features/profile/user-mapper.service';

@Injectable()
export class UserEffects {

    private api = 'https://randomuser.me/api';

    getProfile$ = createEffect(() => {

        return this.actions$.pipe(
            ofType(profileActions.loadUser),
            mergeMap((action) => {

                return this.http.get<UserProfileDTO>(this.api).pipe(
                    map((events) => {

                        const userProfile = this.mapper.toUserProfile(events.results[0]);
                        return profileActions.loadUserSuccess({ user: userProfile });

                    }),
                    catchError((err) => {

                        return of(err);

                    })
                );

            }));

    });

    getProfiles$ = createEffect(() => {

        return this.actions$.pipe(
            ofType(profileActions.loadUsers),
            mergeMap((action) => {

                return this.http.get<UserProfileDTO>(`${this.api}?results=10`).pipe(
                    map((events) => {

                        const userProfiles = events.results.map((profile) => this.mapper.toUserProfile(profile));
                        return profileActions.loadUsersSuccess({ users: userProfiles });

                    }),
                    catchError((err) => {

                        return of(err);

                    })
                );

            }));

    });

    constructor (private actions$: Actions, private http: HttpClient, private mapper: UserMapperService) {}

}
