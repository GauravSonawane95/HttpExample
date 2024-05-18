import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiexComponent } from './apiex.component';

describe('ApiexComponent', () => {
  let component: ApiexComponent;
  let fixture: ComponentFixture<ApiexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
