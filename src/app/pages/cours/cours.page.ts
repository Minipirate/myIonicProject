import { Component, OnInit } from '@angular/core';
import { ApicoursService } from '../../services/apicours.service';
import { ModelCours } from '../../cours/model';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.page.html',
  styleUrls: ['./cours.page.scss'],
})
export class CoursPage implements OnInit {

  listeCours!: ModelCours[];

  cours!: ModelCours;

  title = 'Liste des cours';

  searchPlanet = '';

  constructor(private servicecours: ApicoursService, private router: Router) { }

  ngOnInit() {
    this.cours = new ModelCours();
    this.servicecours.findAll().subscribe(listeC => this.listeCours = listeC);
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  //fonction d'ajout qui va ajouter l'élément dans la liste
  ajout(c: ModelCours) {
    //this.listeCours.push({ ...c });
    this.servicecours.add(c).subscribe(() => this.ngOnInit());
  }

  delete(c: ModelCours) {
    this.servicecours.delete(c).subscribe(() => {
      console.log('suppression du cours', c);
      //pour actualiser la liste
      this.ngOnInit();
    });
  }

  ajoutCours(): void {
    this.router.navigate(['saisie-cours']);
  }

  update(c: ModelCours) {
    console.log('click sur cours : ', c);
    const navigationExtra: NavigationExtras = {
      state: {
        cours: c
      }
    };
    this.router.navigateByUrl('/saisie-cours', navigationExtra);
  }

  filterPlanetsList() {
    this.servicecours.findAll().subscribe(cList => {
      this.listeCours = cList.filter(c => c.nom.toUpperCase().includes(this.searchPlanet.toUpperCase().trim()));
    });
  }
}
