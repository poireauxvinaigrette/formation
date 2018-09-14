import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-socialbutton',
  templateUrl: './socialbutton.component.html',
  styleUrls: ['./socialbutton.component.css']
})


export class SocialbuttonComponent  implements OnInit, OnChanges {


  @Input() link: string;
  @Input() provider: string;
  providerClass: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.providerClass = `fab fa-${this.provider}`;
  }

}
