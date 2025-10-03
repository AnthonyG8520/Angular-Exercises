//profile.component.ts
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [NgOptimizedImage],
  templateUrl: './profile.html',
  standalone: true,
  styleUrl: './profile.css'
})
export class Profile{
  name: string = "Anthony Gonzales";
  role: string = "Software Developer";
  location: string = "San Antonio, Texas";
  linkedinUrl: string = "https://www.linkedin.com/in/anthony-gonzales-/";
  githubUrl: string = "https://github.com/AnthonyG8520";
  profilePicture: string = "codeup2-22-0060.jpg"
}
