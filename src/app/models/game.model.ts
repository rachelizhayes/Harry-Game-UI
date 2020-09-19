import { DarkArt } from './dark-art.model';
import { Encounter } from './encounter.model';
import { HogwartsCard } from './hogwarts-card.model';
import { Player } from './player.model';
import { Villain } from './villain.model';

export class Game {
    darkArts: DarkArt;
    encounter: Encounter;
    gameState: String;
    hogwartsCards: HogwartsCard[];
    id: String;
    location: Location;
    players: Player[];
    turnOrder: String;
    villains: Villain[];
}
 