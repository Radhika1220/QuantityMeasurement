import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.scss']
})
export class LengthComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  from:string="Meter";
  to="Centimeter";
  fromtext=1;
  state="length";
  expand:boolean=false;
  expand1:boolean=false;

OnTemp()
{
  this.route.navigateByUrl('/temperature')
}
OnVolume()
{
  this.route.navigateByUrl('/volume')
}
}
