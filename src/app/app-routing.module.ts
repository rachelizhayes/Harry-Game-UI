import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameViewComponent } from './components/game-view/game-view.component';
import { PlayerSelectionComponent } from './components/player-selection/player-selection.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, 
  { path: 'welcome', component: WelcomeComponent},
  { path: 'player-selection/:id', component: PlayerSelectionComponent},
  { path: 'game/:id', component: GameViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }