import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicoursService } from '../services/apicours.service';
import { ModelCours } from '../cours/model';

@Component({
  selector: 'app-saisie-cours',
  templateUrl: './saisie-cours.page.html',
  styleUrls: ['./saisie-cours.page.scss']
})

export class SaisieCoursPage implements OnInit {

  @Input() couramodifie !: ModelCours;

  saisieform!: FormGroup;

  nomctrl!: FormControl;
  profctrl!: FormControl;
  nbelevectrl!: FormControl;

  constructor(private service: ApicoursService, private route: Router, private fb: FormBuilder) {
    if (this.route.getCurrentNavigation().extras.state) {
      this.couramodifie = this.route.getCurrentNavigation().extras.state.cours;
    }
  }

  ngOnInit() {
    /**
     * 02
     * Je teste si l'input a une instance
     * Si oui => this.cours récupère l'instance de l'input
     */
    if (this.couramodifie) {
      this.nomctrl = this.fb.control(this.couramodifie.nom, Validators.required);
      this.profctrl = this.fb.control(this.couramodifie.professeur, Validators.required);
      this.nbelevectrl = this.fb.control(this.couramodifie.nbEleves, Validators.required);
    }
    else {
      this.nomctrl = this.fb.control('', Validators.required);
      this.profctrl = this.fb.control('', Validators.required);
      this.nbelevectrl = this.fb.control('', Validators.required);
    }
    /**
     * je fais le lien entre le template du formulaire
     * et les controls de Form.... du composant
     */
    this.saisieform = this.fb.group({
      nom: this.nomctrl,
      prof: this.profctrl,
      nbel: this.nbelevectrl
    });
  }

  onSubmit() {
    if (this.saisieform.valid) {
      const c = new ModelCours();
      c.nom = this.nomctrl.value;
      c.professeur = this.profctrl.value;
      c.nbEleves = this.nbelevectrl.value;
      //03 Je teste si l'input a une instance Si oui => update sinon => c'est ajout
      if (this.couramodifie) {
        c.id = this.couramodifie.id;
        this.service.update(c).subscribe(
          () => this.route.navigate(['/cours']));
      }
      else {
        this.service.add(c).subscribe(
          () => this.route.navigate(['/cours']));
      }
    }
  }
}
