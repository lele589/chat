import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Output() written: EventEmitter<any> = new EventEmitter();
  message;


  constructor () { }

  ngOnInit() {
    this.message = '';
  }

  sendInfo() {
    this.written.emit(this.message);
    this.message = '';
  }

}
