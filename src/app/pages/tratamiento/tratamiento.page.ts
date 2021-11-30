import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.page.html',
  styleUrls: ['./tratamiento.page.scss'],
})
export class TratamientoPage implements OnInit {

  constructor(private platform: Platform) { 
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    }); 


  }

  ngOnInit() {
  }

}
