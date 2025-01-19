import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ExerciseComponent } from './exercise/exercise.component';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'exercise/:category',
    component: ExerciseComponent
  }
];
