import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  from:string="Celsius";
  to="Fahrenheit";
  expand:boolean=false;
  expand1:boolean=false;
  OnLength()
  {
    this.route.navigateByUrl('/length')
  }

  OnVolume()
  {
    this.route.navigateByUrl('/volume')
  }
}
