import {Component, OnInit, ViewChild, ElementRef, HostListener} from '@angular/core';
import {fadeInSlow, fadeOutSlow, keypadTransition, routerTransition} from '../animations';
import {MatButton} from '@angular/material';

@Component({
  selector: 'da-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [routerTransition, fadeInSlow, fadeOutSlow, keypadTransition]
})
export class AuthComponent implements OnInit {
  @ViewChild('authContent') authContent: ElementRef;
  mutationObserver: MutationObserver;

  @ViewChild('one') one: MatButton;
  @ViewChild('two') two: MatButton;
  @ViewChild('three') three: MatButton;
  @ViewChild('four') four: MatButton;
  @ViewChild('five') five: MatButton;
  @ViewChild('six') six: MatButton;
  @ViewChild('seven') seven: MatButton;
  @ViewChild('eight') eight: MatButton;
  @ViewChild('nine') nine: MatButton;
  @ViewChild('zero') zero: MatButton;

  protected = true;
  digits: number[] = [];
  key: string = '';

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.one) {
      let btn: MatButton;
      switch (event.key) {
        case '1':
          btn = this.one;
          break;
        case '2':
          btn = this.two;
          break;
        case '3':
          btn = this.three;
          break;
        case '4':
          btn = this.four;
          break;
        case '5':
          btn = this.five;
          break;
        case '6':
          btn = this.six;
          break;
        case '7':
          btn = this.seven;
          break;
        case '8':
          btn = this.eight;
          break;
        case '9':
          btn = this.nine;
          break;
        case '0':
          btn = this.zero;
          break;
        default:
      }
      if (btn) {
        this.key = event.key;
        setTimeout(() => this.key = '', 500);
        btn._elementRef.nativeElement.dispatchEvent(new Event('click'));
      }
    }
  }

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

  bindResize(e) {
    e.resize && e.resize.subscribe(() => setTimeout(() => this.setContentHeight(this.authContent.nativeElement), 0));
  }

  ngOnInit() {
    this.mutationObserver.observe(this.authContent.nativeElement, {attributes: true, childList: true, characterData: true});
    window.addEventListener('resize', () => this.setContentHeight(this.authContent.nativeElement));
    setTimeout(() => this.setContentHeight(this.authContent.nativeElement), 100);

    if (localStorage.getItem('unlocked') === 'true') this.protected = false;
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

  digit(d: number): void {
    this.digits.push(d);
    if (this.digits.length >= 7) this.digits = this.digits.slice(this.digits.length - 6, this.digits.length);
    if (this.digits.reduce((str, digit) => str + digit, '') === '921912') {
      this.protected = false;
      localStorage.setItem('unlocked', 'true');
    }
  }

}
