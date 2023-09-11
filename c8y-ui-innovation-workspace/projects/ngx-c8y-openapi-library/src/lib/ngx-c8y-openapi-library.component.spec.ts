import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxC8yOpenapiLibraryComponent } from './ngx-c8y-openapi-library.component';

describe('NgxC8yOpenapiLibraryComponent', () => {
  let component: NgxC8yOpenapiLibraryComponent;
  let fixture: ComponentFixture<NgxC8yOpenapiLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxC8yOpenapiLibraryComponent]
    });
    fixture = TestBed.createComponent(NgxC8yOpenapiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
