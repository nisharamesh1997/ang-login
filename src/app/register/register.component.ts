import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data = {
    name: '',
    password: '',
    confirmpassword:''
  };

  constructor() { }

  ngOnInit(): void {
  }


  handleOutput(): void {
    console.log(this.data);
  }

}
