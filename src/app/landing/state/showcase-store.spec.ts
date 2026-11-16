import { TestBed } from '@angular/core/testing';

import { DEFAULT_LANDING_CONFIG, LANDING_CONFIG } from '../landing-config';
import { ShowcaseStore } from './showcase-store';

describe('ShowcaseStore', () => {
  function setup(showcaseLimit: 6 | 9 = 9): ShowcaseStore {
    TestBed.configureTestingModule({
      providers: [
        ShowcaseStore,
        { provide: LANDING_CONFIG, useValue: { ...DEFAULT_LANDING_CONFIG, showcaseLimit } },
      ],
    });
    return TestBed.inject(ShowcaseStore);
  }

  it('filters styles by occasion', () => {
    const store = setup();
    store.selectOccasion('Christening');

    const ids = store.visibleThemes().map((theme) => theme.id);
    expect(ids).toEqual(['ivory', 'cloud']);
  });

  it('respects the configured showcase limit', () => {
    expect(setup(6).visibleThemes()).toHaveLength(6);
  });

  it('wraps around when stepping through live examples', () => {
    const store = setup();
    store.selectOccasion('Christening');
    store.openLive('cloud');

    store.stepLive(1);
    expect(store.liveTheme()?.id).toBe('ivory');

    store.stepLive(-1);
    expect(store.liveTheme()?.id).toBe('cloud');
  });

  it('presents a style under the active filter, or its primary occasion', () => {
    const store = setup();
    const ivory = store.visibleThemes()[0];
    expect(store.occasionFor(ivory)).toBe('Wedding');

    store.selectOccasion('Engagement');
    expect(store.occasionFor(ivory)).toBe('Engagement');
  });
});
