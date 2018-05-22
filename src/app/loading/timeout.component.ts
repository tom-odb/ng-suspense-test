import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/pipe";
import { Subject } from "rxjs/Subject";
import { catchError, timeoutWith } from "rxjs/operators";

const TIMEOUT_ERROR = "TIMEOUT_COMPONENT_TRESHOLD_EXCEEDED";

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
        timeoutWith(this.ms, Observable.throw(TIMEOUT_ERROR)),
        catchError((err: any, res: Observable<any>) => {
          if (err === TIMEOUT_ERROR) {
            this.loading = true;

            return res;
          }

          this.error = true;
          this.loading = false;

          return Observable.throw(err);
        })
      )
      .subscribe(() => {
        this.loading = false;
        this.error = false;
      });
  }
}
