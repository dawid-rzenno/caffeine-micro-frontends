import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaffeineUiComponent } from './caffeine-ui.component';

describe('CaffeineUiComponent', () => {
  let component: CaffeineUiComponent;
  let fixture: ComponentFixture<CaffeineUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaffeineUiComponent]
    });
    fixture = TestBed.createComponent(CaffeineUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
