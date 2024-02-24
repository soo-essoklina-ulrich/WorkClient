import {UserDetails} from "../user-details";

export class Enseignant extends UserDetails{

  constructor( ) {
    super(
      0,
      '',
      '',
      0,
      '',
      '',
      '',
      '',
      ''
    );
  }


  override get id(): number {
    return super.id;
  }

  override set id(value: number) {
    super.id = value;
  }

  override get nom(): string {
    return super.nom;
  }

  override set nom(value: string) {
    super.nom = value;
  }

  override get prenom(): string {
    return super.prenom;
  }

  override set prenom(value: string) {
    super.prenom = value;
  }

  override get telephone(): number {
    return super.telephone;
  }

  override set telephone(value: number) {
    super.telephone = value;
  }

  override get numeromatricule(): string {
    return super.numeromatricule;
  }

  override set numeromatricule(value: string) {
    super.numeromatricule = value;
  }

  override get email(): string {
    return super.email;
  }

  override set email(value: string) {
    super.email = value;
  }

  override get username(): string {
    return super.username;
  }

  override set username(value: string) {
    super.username = value;
  }

  override get password(): string {
    return super.password;
  }

  override set password(value: string) {
    super.password = value;
  }

  override get role(): string {
    return super.role;
  }

  override set role(value: string) {
    super.role = value;
  }

  override toString(): string {
    return super.toString();
  }
}
