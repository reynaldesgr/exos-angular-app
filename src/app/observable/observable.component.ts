import { Component, OnInit } from '@angular/core';
import { filter, from, map, merge, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})

export class ObservableComponent implements OnInit {
  //number$ = of(1, 2, 3, 4, 5);
  number$ = of(1, 2, 3, 4, 5);

  letter$ = of('a', 'b', 'c');

  ngOnInit(){
    //this.number$.subscribe(value => console.log(value));

    //const multipliedNumber$ = this.number$.pipe(map(value => value * 10));
    //multipliedNumber$.subscribe(value => console.log(value));

    //const oddNumber$ = this.number$.pipe(
    //  filter(value => value % 2 !== 0)
    //);
    //oddNumber$.subscribe(value => console.log(value));

    const merged$ = merge(this.letter$, this.number$);
    merged$.subscribe(value => console.log(value));
  }

}
