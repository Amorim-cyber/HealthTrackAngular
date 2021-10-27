import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPesoComponent } from './content-peso.component';

describe('ContentPesoComponent', () => {
  let component: ContentPesoComponent;
  let fixture: ComponentFixture<ContentPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
