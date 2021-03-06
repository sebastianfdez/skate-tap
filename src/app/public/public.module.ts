import { NgModule } from "@angular/core";
import { PublicHomeComponent } from "./pages/home/public-home.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AnimationService } from "./services/animation.service";
import { MaterialModule } from '../material.module';

export const ROUTES: Routes = [
  {
      path: '',
      component: PublicHomeComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    PublicHomeComponent,
  ],
  exports: [
    PublicHomeComponent,
    RouterModule,
  ],
  providers: [
    AnimationService,
  ]
})
export class PublicModule {}
