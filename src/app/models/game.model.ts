import { DarkArt } from './dark-art.model';
import { Encounter } from './encounter.model';
import { HogwartsCard } from './hogwarts-card.model';
import { Player } from './player.model';
import { Villain } from './villain.model';

export class Game {
  darkArts: DarkArt;
  encounter: Encounter;
  gameState: string;
  hogwartsCards: HogwartsCard[];
  id: string;
  location: Location;
  players: Player[];
  turnOrder: string;
  villains: Villain[];
}
