import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpUiToolkitComponent } from './mp-ui-toolkit.component';

describe('MpUiToolkitComponent', () => {
  let component: MpUiToolkitComponent;
  let fixture: ComponentFixture<MpUiToolkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpUiToolkitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpUiToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
