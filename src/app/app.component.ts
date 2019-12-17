import { Component } from '@angular/core';
import { Auto } from './auto';
import { Observable, of } from 'rxjs';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public autos$: Observable<Auto[]> = of([
    { id: 1, name: 'Golf' },
    { id: 3, name: 'Adam' },
    { id: 2, name: 'A Klasse' },
    { id: 4, name: 'Polo' },
    { id: 5, name: 'e-Golf' }
  ]);
  public personen$: Observable<Person[]> = of([
    { vorname: 'Maik' },
    { vorname: 'Simone' }
  ]);
}
