import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { _throw } from 'rxjs/observable/throw';
import { catchError, timeoutWith, take } from "rxjs/operators";

import { TIMEOUT_ERROR } from "./loading.conf";

@Component({
  selector: "timeout",
  templateUrl: "./timeout.component.html"
})
export class TimeoutComponent implements OnInit {
  @Input() public ms: number = 0;
  @Input() public resolve: Observable<any>;

  public loading: boolean = false;
  public error: boolean = false;

  public ngOnInit(): void {
    if (!this.resolve) {
      return;
    }

    this.resolve
      .pipe(
        timeoutWith(this.ms, _throw(TIMEOUT_ERROR)),
        catchError((err: any, res: Observable<any>) => {
          if (err === TIMEOUT_ERROR) {
            this.loading = true;

            return res;
          }

          this.error = true;
          this.loading = false;

          return Observable.throw(err);
        }),
        take(1)
      )
      .subscribe(() => {
        this.loading = false;
        this.error = false;
      });
  }
}
