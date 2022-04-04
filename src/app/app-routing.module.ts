import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesPageModule)
  },
  {
    path: 'saisie-cours',
    loadChildren: () => import('./saisie-cours/saisie-cours.module').then(m => m.SaisieCoursPageModule)
  },
  {
    path: 'liste-cours',
    loadChildren: () => import('./liste-cours/liste-cours.module').then(m => m.ListeCoursPageModule)
  },
  {
    path: 'rechercher-cours',
    loadChildren: () => import('./rechercher-cours/rechercher-cours.module').then(m => m.RechercherCoursPageModule)
  },
  {
    path: 'cours',
    loadChildren: () => import('./pages/cours/cours.module').then(m => m.CoursPageModule)
  },
  {
    path: 'saisiecours',
    loadChildren: () => import('./pages/saisiecours/saisiecours.module').then(m => m.SaisiecoursPageModule)
  },
  {
    path: 'saturn',
    loadChildren: () => import('./pages/saturn/saturn.module').then(m => m.SaturnPageModule)
  },
  {
    path: 'jupiter',
    loadChildren: () => import('./pages/jupiter/jupiter.module').then(m => m.JupiterPageModule)
  },
  {
    path: 'mars',
    loadChildren: () => import('./pages/mars/mars.module').then(m => m.MarsPageModule)
  },
  {
    path: 'mercury',
    loadChildren: () => import('./pages/mercury/mercury.module').then(m => m.MercuryPageModule)
  },
  {
    path: 'uranus',
    loadChildren: () => import('./pages/uranus/uranus.module').then(m => m.UranusPageModule)
  },
  {
    path: 'venus',
    loadChildren: () => import('./pages/venus/venus.module').then(m => m.VenusPageModule)
  },
  {
    path: 'earth',
    loadChildren: () => import('./pages/earth/earth.module').then(m => m.EarthPageModule)
  },
  {
    path: 'neptune',
    loadChildren: () => import('./pages/neptune/neptune.module').then(m => m.NeptunePageModule)
  },
  {
    path: 'slides-photos',
    loadChildren: () => import('./pages/slides-photos/slides-photos.module').then( m => m.SlidesPhotosPageModule)
  },
  {
    path: 'nasa-story',
    loadChildren: () => import('./pages/nasa-story/nasa-story.module').then( m => m.NasaStoryPageModule)
  },
  {
    path: 'space',
    loadChildren: () => import('./pages/space/space.module').then( m => m.SpacePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
