import { Component, OnInit } from '@angular/core';
import { getUserProfiles } from '@features/profile/store/profile.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { profileActions } from '@features/profile/store/profile.actions';
import { UserProfile } from '@interfaces';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-profile-list',
    styleUrls: ['./profile-list.component.less'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {

    public users$: Observable<UserProfile[]> = this.store.select(getUserProfiles);

    constructor (private store: Store<AppState>) {
    }

    ngOnInit (): void {

        this.store.dispatch(profileActions.loadUsers());

    }

}
