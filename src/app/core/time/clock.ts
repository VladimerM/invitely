import { DestroyRef, Injectable, inject, signal } from '@angular/core';

const TICK_MS = 30_000;

/** App-wide "now", refreshed often enough for minute-resolution countdowns. */
@Injectable({ providedIn: 'root' })
export class Clock {
  private readonly current = signal(Date.now());
  readonly now = this.current.asReadonly();

  constructor() {
    const timer = setInterval(() => this.current.set(Date.now()), TICK_MS);
    inject(DestroyRef).onDestroy(() => clearInterval(timer));
  }
}
