import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  message: string;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  getMessage() {
    this.message = this.messageService.getMessage();
  }
}
