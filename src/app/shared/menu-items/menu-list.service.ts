import { Injectable } from '@angular/core';
import { OktaSDKAuthService } from '../okta/okta-auth.service';
import { OktaConfigService } from '../okta/okta-config.service';


@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor(
    private OktaSDKAuthService: OktaSDKAuthService,
    private OktaConfigService: OktaConfigService,
  ) { }

  

  subMenuItem = [
    {
      label: 'Daily Websites',
      icon: "pi pi-desktop",
      style: 'font-size: 1.5rem',
      routerLink: '/start'
    },
    {
      label: 'Admin Dashboards',
      icon: "pi pi-sliders-h",
      style: 'font-size: 1.5rem;',
      routerLink: '/admin-dash'
    },
    {
      label: 'User Dashboards',
      icon: "pi pi-user",
      style: 'font-size: 1.5rem;',
      routerLink: '/user-dash'
    },
    {
      label: 'Okta Websites',
      icon: "pi pi-cloud",
      style: 'font-size: 1.5rem;',
      routerLink: '/okta'
    },
    {
      label: 'KLab Sites',
      icon: "pi pi-prime",
      style: 'font-size: 1.5rem;',
      routerLink: '/klab'
    },
    {
      label: 'Dev Info',
      icon: "pi pi-code",
      style: 'font-size: 1.5rem;',
      routerLink: '/devinfo'
    },
  ];



  ItemsMenu = [
    {
      label: 'ホーム',
      icon: "pi pi-home",
      style: 'font-size: 1.5rem',
      command: () => {
        this.GoHome();
      }
    },
    {
      label: 'ログアウト',
      icon: "pi pi-sign-out",
      style: 'font-size: 1.5rem;',
      command: () => {
        this.Logout();
      }
    },
    {
      label: 'Facebook',
      icon: "pi pi-fw pi-facebook",
      style: 'font-size: 0.7rem',
      url: 'https://www.facebook.com/Okta/',
    },
    {
      label: 'LinkedIn',
      icon: "pi pi-fw pi-linkedin",
      style: 'font-size: 0.7rem',
      url: 'https://www.linkedin.com/company/okta-inc-/',
    },
    {
      label: 'Youtube',
      icon: "pi pi-fw pi-youtube",
      style: 'font-size: 0.7rem',
      url: 'https://www.youtube.com/OktaInc',
    },
    {
      label: 'Twitter',
      icon: "pi pi-fw pi-twitter",
      style: 'font-size: 0.7rem',
      url: 'https://twitter.com/okta_japan',
    },

  ];

  SmallMenu = [
    {
      label: 'ホーム',
      icon: "pi pi-home",
      // style:'font-size: 1.5rem',
      command: () => {
        this.GoHome();
      }
    },
    {
      label: 'ログアウト',
      icon: "pi pi-sign-out",
      // style:'font-size: 1.5rem;',
      command: () => {
        this.Logout();
      }
    },
    // {
    //   label: 'Facebook',
    //   icon: "pi pi-fw pi-facebook",
    //   // style:'font-size: 0.7rem',
    //   url: 'https://www.facebook.com/Okta/',
    // },
    // {
    //   label: 'LinkedIn',
    //   icon: "pi pi-fw pi-linkedin",
    //   // style:'font-size: 0.7rem',
    //   url: 'https://www.linkedin.com/company/okta-inc-/',
    // },
    // {
    //   label: 'Youtube',
    //   icon: "pi pi-fw pi-youtube",
    //   // style:'font-size: 0.7rem',
    //   url: 'https://www.youtube.com/OktaInc',
    // },
    // {
    //   label: 'Twitter',
    //   icon: "pi pi-fw pi-twitter",
    //   // style:'font-size: 0.7rem',
    //   url: 'https://twitter.com/okta_japan',
    // },

  ];

  async Logout() {
    this.OktaSDKAuthService.OktaSDKAuthClient.signOut();
  }

  async GoHome() {
    window.location.replace(this.OktaConfigService.strPostLogoutURL);
  }

  // async GotoPage(url) {
  //   window.open(url, '_blank');
  // }

}
