import { Component } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedTab: string = 'home';

  //When HOME Link is clicked
  constructor(private subService: SubscribeService){

  }
  OnSubscribe(){    
    this.subService.OnSubscribeClicked('montly');
  }
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

}
