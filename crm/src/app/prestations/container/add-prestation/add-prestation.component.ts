import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypePrestation } from '../../../shared/enums/type-prestation.enum';
import { StatePrestation } from '../../../shared/enums/state-prestation.enum';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from '../../../shared/models/prestation';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {
  form: FormGroup;


  typeOptions = Object.values(TypePrestation);
  stateOptions = Object.values(StatePrestation);


  constructor(
    private fb: FormBuilder,
    private prestationservice: PrestationService,
    private router: Router) {

   }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
      type: TypePrestation.FORMATION,
      client: '',
      date_debut: new Date().toDateString(),
      date_fin: '',
      tjm: [100, Validators.min(100)],
      state: StatePrestation.OPTION,
      nb_jours: [ 0, Validators.compose([Validators.max(200), Validators.min(5)])],
      taxe: 20,
      tjm_ht: 0
    });


    this.form.get('nb_jours').valueChanges
    .pipe(debounceTime(400), distinctUntilChanged())
    .subscribe(
      
      (data) => console.log(data));
  }

  public isError(fieldname: string): boolean {
    return this.form.get(fieldname).invalid
    && this.form.get(fieldname).touched;


  }

  register() {
    console.log(this.form.value);
    this.prestationservice.collection.push(new Prestation(this.form.value));
    // this.form.reset();
    this.router.navigate(['prestations']);
  }

}
