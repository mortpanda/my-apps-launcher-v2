import { Component, OnInit } from '@angular/core';
import { OktaGetTokenService } from '../shared/okta/okta-get-token.service';
import { ViewEncapsulation } from '@angular/core';
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { OktaConfigService } from "../shared/okta/okta-config.service";
import { OktaWidgetService } from '../shared/okta/okta-widget.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MenuItem } from 'primeng/api';
import { OktaApiService } from 'app/shared/okta/okta-api.service';


@Component({
  selector: 'app-my-project-apps',
  templateUrl: './my-project-apps.component.html',
  styleUrls: ['./my-project-apps.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyProjectAppsComponent implements OnInit {
  smallScreen: boolean;
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  strUserSession;
  strThisUser;
  appLoad:boolean;
  constructor(
    public OktaGetTokenService: OktaGetTokenService,
    public OktaSDKAuthService: OktaSDKAuthService,
    public OktaConfigService: OktaConfigService,
    public OktaWidgetService: OktaWidgetService,
    private breakpointObserver: BreakpointObserver,
    private OktaApiService: OktaApiService,

  ) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });
  }

  thisUid;
  invokeURI;
  strFullName
  appResponse;
  async ngOnInit() {
    this.appLoad=false;
    this.strUserSession = await this.authService.isAuthenticated();
    console.log(this.strUserSession)
    switch (this.strUserSession == true) {
      case false:
        window.location.replace(this.OktaConfigService.strPostLogoutURL);
      case true:
        this.strThisUser = await this.authService.token.getUserInfo()
          .then(function (user) {

            return user
          })
          .catch((err) => {
            console.log(err);
            window.location.replace(this.OktaConfigService.strPostLogoutURL);
          })
        this.strFullName = await this.strThisUser.name;
        this.thisUid = await this.strThisUser.sub;
        await this.OktaGetTokenService.GetAccessToken();
        this.invokeURI = await this.OktaGetTokenService.myAccessToken.claims.myLauncherV2Apps

        console.log(this.invokeURI);
        console.log(this.strThisUser)

        let requestBody;
        requestBody = {
          uid: this.thisUid,
        }
        this.appResponse = await this.OktaApiService.InvokeFlow(this.invokeURI, requestBody)
        // console.log(this.appResponse)
        this.processApps(this.appResponse);
        this.appLoad=true;
        break;
    }
  }

  myProjectApps = [];
  ghURL = "https://mortpanda.github.io/";
  bolGHURL: boolean;
  async processApps(arrApps) {
    for (var i = 0; i < arrApps.length; i++) {
      switch (arrApps[i].Label) {
        case "Okta Workflows": {
          break;
        }
        case "Okta Workflows OAuth": {
          break;
        }
        default: {
          for (var n = 0; n < arrApps[i]["Settings.oauthClient.post_logout_redirect_uris"].length; n++) {
            this.bolGHURL = arrApps[i]["Settings.oauthClient.post_logout_redirect_uris"][n].includes(this.ghURL);
            switch (this.bolGHURL){
              case true:{
                this.myProjectApps.push({
                  lebel: arrApps[i].Label,
                  logoURI: arrApps[i]["Links.logo.0.href"],
                  struri:  arrApps[i]["Settings.oauthClient.post_logout_redirect_uris"][n],
                });
                break;
              }
              default:{
                break;
              }
            }
          }
          break;
        }
      }

    }
    console.log(this.myProjectApps)
  }



}
