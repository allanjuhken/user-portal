import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenReaderComponent } from './token-reader.component';

describe('TokenReaderComponent', () => {
  let component: TokenReaderComponent;
  let fixture: ComponentFixture<TokenReaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenReaderComponent]
    });
    fixture = TestBed.createComponent(TokenReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
