import { Component } from "@angular/core";

import { AuthenticationService } from "./core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {

  header: string;
  menus: any[] = [
    {
      icon: "hpe-actions",
      dropdown: [
        {
          header: true,
          title: "", //this.user?.name,
          divider: true
        },
        {
          icon: "hpe-logout",
          title: "Log out",
          select: () => {
            this.authService.logout();
          }
        }
      ]
    }
  ];

  constructor(public authService: AuthenticationService) { }
}