export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: LocationRef;
  location: LocationRef;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

type CharacterStatus = "Alive" | "Dead" | "unknown";
type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";

export interface LocationRef {
  id: number;
  name: string;
}

export interface Location extends LocationRef {
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface Location extends LocationRef {
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
