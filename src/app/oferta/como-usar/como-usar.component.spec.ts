import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoUsarComponent } from './como-usar.component';

describe('ComoUsarComponent', () => {
  let component: ComoUsarComponent;
  let fixture: ComponentFixture<ComoUsarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoUsarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoUsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
