export class Classe {
  private _id: number;
  private _code: string;
  private _intitule: string;


  constructor(id: number, code: string, intitule: string) {
    this._id = id;
    this._code = code;
    this._intitule = intitule;
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

  get intitule(): string {
    return this._intitule;
  }

  set intitule(value: string) {
    this._intitule = value;
  }
}
