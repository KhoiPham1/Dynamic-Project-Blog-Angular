import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBlogComponent } from './detail-blog.component';

describe('DetailBlogComponent', () => {
  let component: DetailBlogComponent;
  let fixture: ComponentFixture<DetailBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
