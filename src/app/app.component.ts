import { Component } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  fakeCall = new Subject();

  constructor() {
    setTimeout(() => {
      this.fakeCall.next({});
    }, 3000);
  }
}
