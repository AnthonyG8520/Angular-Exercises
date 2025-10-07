import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { Project } from './project/project';
import { UserForm } from './user-form/user-form';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile, Project, UserForm, Counter],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Exercises');

  // --------------this block is used to show input and output
  countValue: number = 0;
  onCountIncremented(newCount: number){
    this.countValue = newCount;
  }
//   ----------------------------------------


}
