import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { Project } from './project/project';
import { UserForm } from './user-form/user-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile, Project, UserForm],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Exercises');
}
