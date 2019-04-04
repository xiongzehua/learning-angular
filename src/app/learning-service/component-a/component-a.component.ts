import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  message: string;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  setMessage() {
    this.messageService.setMessage(this.message);
  }
}
