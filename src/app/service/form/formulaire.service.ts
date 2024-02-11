import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {




  constructor(private fb: FormBuilder) {

  }

  //form user
  public buildFormCreateUserbyAdmin() {
    return this.fb.group({
      nom:              ['', Validators.required],
      prenom:           ['', Validators.required],
      numeromatricule:  ['', Validators.required],
      email:            ['', Validators.email],
      telephone:        ['', Validators.required],
      username:         ['', Validators.required],
      password:         ['', Validators.required],
      role:             ['', Validators.required ]
    });
  }

  buildFormUpdateUserbyAdmin() {
    return this.fb.group({
      id:               [''],
      nom:              [''],
      prenom:           [''],
      numeromatricule:  [''],
      email:            [''],
      telephone:        [''],
      role:             [''],
    });
  }

 buildFormUpdateUserbyUser() {
    return this.fb.group({
      id:               [''],
      nom:              [''],
      prenom:           [''],
      email:            [''],
      telephone:        [''],
      username:         [''],
      password:         [''],
    });
  }

  //form for annee scolaire

  buildFormAnneScolaireCreate(){
    return this.fb.group({
      id:         [''],
      code:       ['' , Validators.required],
      dateDebut:  ['', Validators.required],
      dateFin:    ['', Validators.required]
    })
  }

  builFormAnneScolaireUpdate(){
    return this.fb.group({
      code:       [''],
      dateDebut:  [''],
      dateFin:    ['']
    })
  }
  //form for classe
  buildFormClasseCreate(){
    return this.fb.group({
      id:         [''],
      code:       ['', Validators.required],
      niveau:     ['', Validators.required],
      serie:      ['', Validators.required],
      option:     ['', Validators.required],
      anneeScolaire: ['']
    })
  }

  buildFormClasseUpdate(){
    return this.fb.group({
      code:       [''],
      niveau:     [''],
      serie:      [''],
      option:     [''],
      anneeScolaire: ['']
    })
  }

}
