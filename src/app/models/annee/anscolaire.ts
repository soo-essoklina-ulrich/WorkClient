export class Anscolaire {
  private _id: number;
  private _code: string;
  private _dateDebut: Date;
  private _dateFin: Date;


  constructor(id: number, code: string, dateDebut: Date, dateFin: Date) {
    this._id = id;
    this._code = code;
    this._dateDebut = dateDebut;
    this._dateFin = dateFin;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get dateDebut(): Date {
    return this._dateDebut;
  }

  set dateDebut(value: Date) {
    this._dateDebut = value;
  }

  get dateFin(): Date {
    return this._dateFin;
  }

  set dateFin(value: Date) {
    this._dateFin = value;
  }

  toString():string{
    return this.code
  }
}
