import {Component, OnInit, ViewChild, ElementRef, HostListener, HostBinding} from '@angular/core';
import {fadeInSlow, fadeOutSlow, keypadTransition, routerTransition} from '../animations';
import {MatButton, MatSidenav} from '@angular/material';
import {environment} from '../../environments/environment';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'da-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [routerTransition, fadeInSlow, fadeOutSlow, keypadTransition]
})
export class AuthComponent implements OnInit {
  @HostBinding() class = 'page-component';
  @ViewChild('authContent') authContent: ElementRef;
  @ViewChild('sidenav') sidenav: MatSidenav;
  mutationObserver: MutationObserver;
  under_construction = environment.under_construction;

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
  menu = [
      { link: '/signin', text: 'Logga in', icon: 'exit_to_app' },
      { link: '/signup', text: 'Svara', icon: 'drafts' },
      { link: '/forgot', text: 'Återställ lösenord', icon: 'lock_open' }
  ]

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

  constructor(private _router: Router, private _route: ActivatedRoute) {
    this.mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          setTimeout(() => this.setContentHeight(mutation.target), 0);
        }
      })
    });
    this._router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this._route)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        this.sidenav && this.sidenav.close();
      });
  }

  getState(outlet) {
    return outlet.activatedRoute.routeConfig.path;
  }

  bindResize(e) {
    e.resize && e.resize.subscribe(() => setTimeout(() => this.setContentHeight(this.authContent.nativeElement), 0));
  }

  ngOnInit() {
    if (localStorage.getItem('unlocked') === 'true') this._unlock();
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
    if (this.digits.reduce((str, digit) => str + digit, '') === environment.protection_code) {
      this._unlock();
    }
  }

  protected _unlock() {
    this.protected = false;
    localStorage.setItem('unlocked', 'true');

    setTimeout(() => {
      this.mutationObserver.observe(this.authContent.nativeElement, {
        attributes: true,
        childList: true,
        characterData: true
      });
      window.addEventListener('resize', () => this.setContentHeight(this.authContent.nativeElement));
    }, 0);
    setTimeout(() => this.setContentHeight(this.authContent.nativeElement), 100);
  }

}
