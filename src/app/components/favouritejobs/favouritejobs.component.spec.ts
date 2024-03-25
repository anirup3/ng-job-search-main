import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritejobsComponent } from './favouritejobs.component';

describe('FavouritejobsComponent', () => {
  let component: FavouritejobsComponent;
  let fixture: ComponentFixture<FavouritejobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouritejobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavouritejobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
