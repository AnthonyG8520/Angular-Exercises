import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule, ReactiveFormsModule],
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

  jobInfoForm = new FormGroup({
    companyName: new FormControl(''),
    companyRole: new FormControl('')
  })

  handleSubmit(){
    alert(this.jobInfoForm.value.companyName + ' | ' + this.jobInfoForm.value.companyRole)
  }
  //this function shows handling the submit and accessing the
  //values of the form through the form group reactively


}
