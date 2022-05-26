export class Joueurs {
  id: number;
  name: string;
  email: string;
  adresse: string;
  constructor(id: number, name: string, email: string, adresse: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.adresse = adresse;
  }
}
