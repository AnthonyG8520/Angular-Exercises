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

  increment(){
    this.count++;
    this.countIncremented.emit(this.count);
  }
}
