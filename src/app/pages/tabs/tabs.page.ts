import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html', 
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  img:string;


  constructor(private menu: MenuController) { }

  ngOnInit() {
   
  }
  openMenu(){
    this.menu.open();
  }

}
