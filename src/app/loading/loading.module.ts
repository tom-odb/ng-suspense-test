import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TimeoutComponent } from "./timeout.component";
import { LoadingComponent } from "./loading.component";
import { ErrorComponent } from "./error.component";

@NgModule({
  imports: [CommonModule],
  declarations: [TimeoutComponent, LoadingComponent, ErrorComponent],
  exports: [TimeoutComponent, LoadingComponent, ErrorComponent]
})
export class LoadingModule {}
