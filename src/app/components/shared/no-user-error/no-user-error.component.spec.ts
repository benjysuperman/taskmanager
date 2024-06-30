import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUserErrorComponent } from './no-user-error.component';

describe('NoUserErrorComponent', () => {
  let component: NoUserErrorComponent;
  let fixture: ComponentFixture<NoUserErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoUserErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoUserErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
