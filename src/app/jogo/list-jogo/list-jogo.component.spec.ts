import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJogoComponent } from './list-jogo.component';

describe('ListJogoComponent', () => {
  let component: ListJogoComponent;
  let fixture: ComponentFixture<ListJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListJogoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
