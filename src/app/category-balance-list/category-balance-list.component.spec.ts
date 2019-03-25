import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBalanceListComponent } from './category-balance-list.component';

describe('CategoryBalanceListComponent', () => {
  let component: CategoryBalanceListComponent;
  let fixture: ComponentFixture<CategoryBalanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryBalanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBalanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
