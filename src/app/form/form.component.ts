import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  signUpForm!: FormGroup;

  ngOnInit()
  {
    this.signUpForm = new FormGroup(
      {
        'username': new FormControl(null),
        'password': new FormControl(null),
        'email': new FormControl('test@gmail.com')
      }
    )
  }


  onSubmit()
  {
    console.log(this.signUpForm?.value);
  }

}
