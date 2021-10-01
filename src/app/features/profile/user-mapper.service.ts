import { Injectable } from '@angular/core';
import { UserProfile, UserProfileResultDTO } from '@interfaces';

@Injectable()
export class UserMapperService {

    public toUserProfile (profileDTO: UserProfileResultDTO): UserProfile {

        return {
            cellNumber: profileDTO.cell,
            city: profileDTO.location.city,
            dateOfBirth: profileDTO.dob.date,
            email: profileDTO.email,
            firstName: profileDTO.name.first,
            id: profileDTO.id.value,
            lastName: profileDTO.name.last,
            phoneNumber: profileDTO.phone,
            picture: profileDTO.picture.large,
            state: profileDTO.location.state
        };

    }

}
