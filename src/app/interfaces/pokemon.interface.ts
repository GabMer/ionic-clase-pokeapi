//Manual:

export interface PokemonList {
    count: number;
    next: String;
    previous: String | null;
    results:Pokemon[];
}

export interface Pokemon{
    name: String;
    url: String;
}