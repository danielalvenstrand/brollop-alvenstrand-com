import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  state('in', style({opacity: 1})),
  transition('void => *', [
    style({opacity: 0}),
    animate('100ms ease')
  ]),
  transition('* => void', [
    animate('100ms ease', style({opacity: 0}))
  ])
]);

export const fadeInSlow = trigger('fadeInSlow', [
  state('in', style({opacity: 1})),
  transition('void => *', [
    style({opacity: 0}),
    animate('1000ms ease')
  ])
]);

export const fadeOutSlow = trigger('fadeOutSlow', [
  state('in', style({opacity: 1})),
  transition('* => void', [
    animate('1000ms ease', style({opacity: 0}))
  ])
]);

export const keypadTransition = trigger('keypadTransition', [
  state('in', style({transform: 'translateY(0)', opacity: 1})),
  transition('void => *', [
    style({transform: 'translateY(50%)', opacity: 0}),
    animate('1000ms ease')
  ]),
  transition('* => void', [
    animate('1000ms ease', style({transform: 'translateY(50%)', opacity: 0}))
  ])
]);

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(':enter', style({  })
      , { optional: true }),
    /* 2 */ group([  // block executes in parallel
      query(':enter', [
        style({ opacity: 0 }),
        animate('0.2s ease', style({ opacity: 1 }))
      ], { optional: true })
    ])
  ])
])
