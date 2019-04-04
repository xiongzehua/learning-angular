import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {User} from '../../model/user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  user: User;
  userForm: FormGroup = new FormGroup({
    email: new FormControl(),
    name: new FormControl(),
    passwordGroup: new FormGroup({
      password: new FormControl(),
      passwordConfirm: new FormControl(),
    }),
  });

  group2: FormGroup = new FormGroup({
    email: new FormControl(),
    name: new FormControl(),
  });

  group1: FormGroup = new FormGroup({
    email: new FormControl(),
    name: new FormControl(),
    group: this.group2,
  });


  constructor() { }

  ngOnInit() {
  }

  signup() {
    console.log(this.group1.controls.group);
    console.log(this.group2);
    console.log(this.group2 === this.group1.controls.group);
    console.log(this.userForm.value.name);

    // 传统对象生成方式
    // this.user = new User();
    // this.user.name = this.userForm.value.name;
    // this.user.email = this.userForm.value.email;
    // this.user.password = this.userForm.value.passwordGroup.password;

    // 推荐对象生成方式
    this.user = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      password: this.userForm.value.passwordGroup.password,
    };

    alert('响应式表单');
  }

}
