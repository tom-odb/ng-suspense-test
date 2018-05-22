import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoadingModule } from "./loading";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoadingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
