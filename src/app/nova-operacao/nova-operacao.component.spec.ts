import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaOperacaoComponent } from './nova-operacao.component';

describe('NovaOperacaoComponent', () => {
  let component: NovaOperacaoComponent;
  let fixture: ComponentFixture<NovaOperacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaOperacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaOperacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
