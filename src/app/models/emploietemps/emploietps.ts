import {Enseignant} from "../user/Enseignant/enseignant";
import {Cours} from "../cours/cours";

export class Emploietps {
  private _id : number;

  private _cours: Cours;
  private _heuredebut: Date;
  private _heurefin: Date;


  constructor(id: number,  cours: Cours, heuredebut: Date, heurefin: Date) {
    this._id = id;

    this._cours = cours;
    this._heuredebut = heuredebut;
    this._heurefin = heurefin;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }


  get cours(): Cours {
    return this._cours;
  }

  set cours(value: Cours) {
    this._cours = value;
  }

  get heuredebut(): Date {
    return this._heuredebut;
  }

  set heuredebut(value: Date) {
    this._heuredebut = value;
  }

  get heurefin(): Date {
    return this._heurefin;
  }

  set heurefin(value: Date) {
    this._heurefin = value;
  }
}
