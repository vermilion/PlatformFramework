import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzTableModule } from "ng-zorro-antd/table";
import { ReactiveFormsModule } from "@angular/forms";
import { UserCreateComponent } from "./user-create/user-create.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserResolver } from "./resolvers/user.resolver";
import { UsersListComponent } from "./users-list/users-list.component";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
  declarations: [
    UsersListComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,

    ReactiveFormsModule,
    NzSelectModule,
    NzLayoutModule,
    NzFormModule,
    NzCardModule,
    NzSpaceModule,
    NzTableModule
  ],
  exports: [],
  providers: [
    UserResolver
  ]
})
export class UsersModule { }
