import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../menu-item';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      routerLink: 'home',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'About',
      icon: 'help',
      routerLink: 'about',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    // {
    //   label: 'Pricing',
    //   icon: 'attach_money',
    //   routerLink: 'pricing',
    //   showOnMobile: false,
    //   showOnTablet: false,
    //   showOnDesktop: true
    // },
    // {
    //   label: 'Docs',
    //   icon: 'notes',
    //   routerLink: 'docs',
    //   showOnMobile: false,
    //   showOnTablet: true,
    //   showOnDesktop: true
    // },
    // {
    //   label: 'Showcase',
    //   icon: 'slideshow',
    //   routerLink: 'showcase',
    //   showOnMobile: false,
    //   showOnTablet: false,
    //   showOnDesktop: true
    // },
    // {
    //   label: 'Twitter',
    //   icon: 'twitter',
    //   routerLink: 'facebook',
    //   showOnMobile: true,
    //   showOnTablet: true,
    //   showOnDesktop: true
    // },
    {
      label: 'Blog',
      icon: 'rss_feed',
      routerLink: 'blog',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
  ];

  constructor(private overlay: OverlayContainer) {
  }

  ngOnInit(): void {

  }

}

