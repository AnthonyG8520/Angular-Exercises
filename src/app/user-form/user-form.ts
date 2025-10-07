import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
  standalone: true,
  styleUrl: './user-form.css'
})
export class UserForm {
  username = 'Anthony';
  favoriteFramework = '';

  showFramework(){
    alert(this.favoriteFramework);
  }
  //this function shows getting form control values / called in the html
  //with a button / can be accessed other ways


}
