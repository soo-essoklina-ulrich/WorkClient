export class UserDetails {
  private _id: number;
  private _nom: string;
  private _prenom: string;
  private _telephone: number;
  private _numeromatricule: string;
  private _email: string;
  private _username: string;
  private _password: string;
  private _role: string;

  constructor(id: number, nom: string, prenom: string, telephone: number, numeromatricule: string, email: string, username: string, password: string, role: string) {
    this._id = id;
    this._nom = nom;
    this._prenom = prenom;
    this._telephone = telephone;
    this._numeromatricule = numeromatricule;
    this._email = email;
    this._username = username;
    this._password = password;
    this._role = role;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get telephone(): number {
    return this._telephone;
  }

  set telephone(value: number) {
    this._telephone = value;
  }

  get numeromatricule(): string {
    return this._numeromatricule;
  }

  set numeromatricule(value: string) {
    this._numeromatricule = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }


}
