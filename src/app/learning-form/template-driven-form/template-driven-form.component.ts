import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  signup() {
      alert('注册成功！' + JSON.stringify(this.user));
      this.user = new User();
  }

}
