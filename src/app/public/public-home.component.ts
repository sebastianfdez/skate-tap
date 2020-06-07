import { Component } from "@angular/core";
import { AnimationService } from "./services/animation.service";

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.scss'],
})
export class PublicHomeComponent {
  constructor(
    private animationService: AnimationService,
  ) {}

  elementInViewport(element: HTMLElement) {
    const inviewport = this.animationService.elementInViewport(element);
    console.log(inviewport);
    return inviewport;
  }
}
