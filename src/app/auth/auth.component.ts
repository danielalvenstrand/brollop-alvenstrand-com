import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { routerTransition} from '../animations';

@Component({
  selector: 'da-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [routerTransition]
})
export class AuthComponent implements OnInit {
  @ViewChild('authContent') authContent: ElementRef;
  mutationObserver: MutationObserver;

  constructor() {
    this.mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          setTimeout(() => this.setContentHeight(mutation.target), 0);
        }
      })
    });
  }

  getState(outlet) {
    return outlet.activatedRoute.routeConfig.path;
  }

  ngOnInit() {
    this.mutationObserver.observe(this.authContent.nativeElement, {attributes: true, childList: true, characterData: true});
    window.addEventListener('resize', () => this.setContentHeight(this.authContent.nativeElement));
    setTimeout(() => this.setContentHeight(this.authContent.nativeElement), 100);
  }

  setContentHeight(e) {
    if (!e) return;
    const style = e.currentStyle || window.getComputedStyle(e);
    let contentHeight = 0;
    for (let el of e.children) {
      contentHeight = Math.max(contentHeight, el.offsetHeight)
    }
    if (contentHeight) {
      ((<HTMLElement>e).style.height = `${contentHeight}px`);
    }
  }

}
