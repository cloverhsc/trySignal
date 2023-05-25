import { Component } from '@angular/core';
import { Subject, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Hello World';
  otherTitle = '';
  anotherTitle: Subject<string> = new Subject<string>();

  constructor() {

  }
  ngOnInit(): void {
    this.anotherTitle.subscribe((value) => {
      console.log(value);
      this.otherTitle = value + '🍉'
    });
    this.anotherTitle.next(this.title);
  }

  changeValue() {
    this.title = 'Nice to meet you';
    this.anotherTitle.next(this.title);
  }

  ngOnDestroy(): void {
    this.anotherTitle.unsubscribe();
  }
}
