import { NgModule } from "@angular/core";
import {
    AlertModule, CheckboxModule, ColorService, ColorServiceModule, IconModule, PaginationModule,
    PopoverModule, ProgressBarModule, SelectModule, TabsetModule, TagInputModule, TooltipModule,
    TypeaheadModule
} from "@ux-aspects/ux-aspects";

@NgModule({
  imports: [
    ColorServiceModule,
    IconModule,
    CheckboxModule,
    TagInputModule,
    TypeaheadModule,
    SelectModule,
    TabsetModule,
    TooltipModule,
    PopoverModule,
    AlertModule,
    ProgressBarModule,
    PaginationModule
  ],
  providers: [
    ColorService
  ],
  declarations: [
  ],
  exports: [
    ColorServiceModule,
    IconModule,
    CheckboxModule,
    TagInputModule,
    TypeaheadModule,
    SelectModule,
    TabsetModule,
    TooltipModule,
    PopoverModule,
    AlertModule,
    ProgressBarModule,
    PaginationModule
  ]
})
export class UxModule {
}
