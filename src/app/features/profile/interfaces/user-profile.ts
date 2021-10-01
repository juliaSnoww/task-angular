export interface UserProfile {
    cellNumber: string;
    city: string;
    dateOfBirth: string;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    phoneNumber: string;
    picture: string;
    state: string;
}

export interface UserProfileDTO {
    results: UserProfileResultDTO[];
}

export interface UserProfileResultDTO {
    cell: string;
    dob: {
        date: string;
    };
    email: string;
    id: {
        value: string;
    };
    location: {
        city: string;
        state: string;
    };
    name: {
        first: string;
        last: string;
    };
    phone: string;
    picture: {
        large: string;
    };
}
