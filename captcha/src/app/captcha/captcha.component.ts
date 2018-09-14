import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  @Input() text = 'default';
  @Output() Out: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  noRobot() {
    console.log('clic');
    this.Out.emit({robot : false});

  }
}
