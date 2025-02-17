export interface User {
    _id: string;
    name: {
        first: string;
        last: string;
    };
}

export interface CatFacts {
    type: string;
    _id: string;
    text: string;
    user: User;
}

export interface CatFactList {
    results: CatFacts[];
}


