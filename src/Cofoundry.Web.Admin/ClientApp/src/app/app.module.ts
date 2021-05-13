import { NZ_CONFIG, NzConfig } from "ng-zorro-antd/core/config";
import { NZ_I18N, en_US } from "ng-zorro-antd/i18n";

import { API_BASE_URL } from "./shared/constants";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "./core/core.module";
import { FeaturesLayoutModule } from "./features/layout/layout.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";
import en from "@angular/common/locales/en";
import { environment } from "../environments/environment";
import { registerLocaleData } from "@angular/common";

registerLocaleData(en);

const ngZorroConfig: NzConfig = {
  notification: { nzPlacement: "bottomRight" },
  datePicker: { nzSuffixIcon: "" }
};

export function getRemoteServiceBaseUrl() {
  return environment.apiUrl;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,

    FeaturesLayoutModule,
  ],
  providers: [
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_CONFIG, useValue: ngZorroConfig }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }