import {Component, output} from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  standalone: true,
  styleUrl: './counter.css'
})
export class Counter {
  @Input() count : number = 0;

  @Output() countIncremented = new EventEmitter<number>;
  // to convert this for 2 way binding you would change the
  // countIncremented method to countChange - this syntax defines 2 way binding

  increment(){
    this.count++;
    this.countIncremented.emit(this.count);
  }
}
