import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class TradeStreamService {
	get trades: Observable<TradeMessage>;
}
