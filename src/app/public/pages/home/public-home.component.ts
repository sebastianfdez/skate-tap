import { Component, OnInit } from "@angular/core";
import { AnimationService } from "../../services/animation.service";

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.scss'],
})
export class PublicHomeComponent implements OnInit {
  opened = true;
  show = 0;
  constructor(
    private animationService: AnimationService,
  ) {}

  elementInViewport(element: HTMLElement) {
    const inviewport = this.animationService.elementInViewport(element);
    // console.log(inviewport); //always comment console.log when pushing to production
    return inviewport;
  }

  ngOnInit() {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        this.show++;
      }, (i + 1) * 700 + 200);
    }
  }
}
