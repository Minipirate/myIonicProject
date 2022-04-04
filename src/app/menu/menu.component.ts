import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {
  myprop!: string;

  planet = [
    { title: 'Saturn', redirection: '/saturn' },
    { title: 'Jupiter', redirection: '/jupiter' },
    { title: 'Mars', redirection: '/mars' },
    { title: 'Mercury', redirection: '/mercury' },
    { title: 'Uranus', redirection: '/uranus' },
    { title: 'Venus', redirection: '/venus' },
    { title: 'Earth', redirection: '/earth' },
    { title: 'Neptune', redirection: '/neptune' }

  ];


  constructor(private popover: PopoverController) { }

  ngOnInit(): void { }
  closePopover(event): void { this.popover.dismiss(event); }

}
