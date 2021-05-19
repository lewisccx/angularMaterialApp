import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
 
  fillerNav = [
    {
      id: '1', name:'Button', url: '/button'
    },
    {
      id: '2', name:'Badge', url: '/badge'
    },
  ]
  selectedNavMode: string = "side"
  selectedBackDrop: boolean = true
  backDropOptions = [
    {
      id: '1', value: true
    },
    {
      id: '2', value: false
    },
  ]
  sideNavMode = [
    {
      id: '1', value:'side'
    },
    {
      id: '2', value:'over'
    },
    {
      id: '3', value:'push'
    },
  ]
}
