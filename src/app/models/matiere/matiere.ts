export class Matiere {
  private _id: number
  private _intitule: string
  private _code: string

  constructor(id: number, intitule: string, code: string) {
    this._id = id;
    this._intitule = intitule;
    this._code = code;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get intitule(): string {
    return this._intitule;
  }

  set intitule(value: string) {
    this._intitule = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }
}
