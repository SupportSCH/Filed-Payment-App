import { CardDetail } from './models/card-detail.model';

export interface AppState {
  readonly cards: CardDetail[];
}