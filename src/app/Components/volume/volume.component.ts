import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.scss']
})
export class VolumeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  from:string="Litres";
  to="Millilitres";
  expand:boolean=false;
  expand1:boolean=false;
  OnLength()
  {
    this.route.navigateByUrl('/length')
  }

  OnTemp()
{
  this.route.navigateByUrl('/temperature')
}
}
