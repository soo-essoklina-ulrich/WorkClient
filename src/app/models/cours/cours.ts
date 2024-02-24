import {Matiere} from "../matiere/matiere";
import {Enseignant} from "../user/Enseignant/enseignant";
import {Classe} from "../classe/classe";
import {Anscolaire} from "../annee/anscolaire";

export class Cours {
  private _id: number;
  private _matieres: Matiere;
  private _enseigant: Enseignant;
  private _classe: Classe;
  private _anneescolaire: Anscolaire;


  constructor(id: number, matiere: Matiere, enseigant: Enseignant, classe: Classe, anneeScolaire: Anscolaire) {
    this._id = id;
    this._matieres = matiere;
    this._enseigant = enseigant;
    this._classe = classe;
    this._anneescolaire = anneeScolaire;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get matiere(): Matiere {
    return this._matieres;
  }

  set matiere(value: Matiere) {
    this._matieres = value;
  }

  get enseigant(): Enseignant {
    return this._enseigant;
  }

  set enseigant(value: Enseignant) {
    this._enseigant = value;
  }

  get classe(): Classe {
    return this._classe;
  }

  set classe(value: Classe) {
    this._classe = value;
  }

  get anneeScolaire(): Anscolaire {
    return this._anneescolaire;
  }

  set anneeScolaire(value: Anscolaire) {
    this._anneescolaire = value;
  }
}
