import { Component } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { MenuComponent } from '../menu/menu.component';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})



export class HomePage {
  promptEvent: any = null;

  constructor(
    private popover: PopoverController,
    private alertController: AlertController

  ) {
    window.addEventListener(
      'beforeinstallprompt', event => {
        this.promptEvent = event;
      });
  }

  onInstall() {
    this.promptEvent.prompt();
  }

  openMenu(myevent: MouseEvent): void {

    this.popover.create({
      component: MenuComponent,
      showBackdrop: true,
      cssClass: 'my-menu-class',
      event: myevent,
      componentProps: {
        myprop: 'xxxx'
      }
    }).then((popoverElement: HTMLIonPopoverElement) => {
      popoverElement.present();
      popoverElement.onDidDismiss().then((res: OverlayEventDetail) => {
        console.log(res);
      });
    });
  }
  async openAlert() {
    const monMessage = 'You went to Mars, come back !';
    const alert = await this.alertController.create({
      header: 'Martian error',
      message: monMessage,
      buttons: ['OK'],
    });

    await alert.present();
    await alert.onDidDismiss();
  }

  //DARK MODE TOGGLE
  toggleTheme(event) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }
}
