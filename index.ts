import './style.css';

import { of, map, Observable, interval, take, tap, shareReplay } from 'rxjs';
const obs = interval(500).pipe(
  take(5),
  tap((i) => console.log('obs value ' + i)),
  shareReplay()
);

obs.subscribe((value) => console.log('observer 1 received ' + value));

obs.subscribe((value) => console.log('observer 2 received ' + value));

// Open the console in the bottom right to see results.
