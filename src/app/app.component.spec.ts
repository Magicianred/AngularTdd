import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture2: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents().then(() => {
      fixture2 = TestBed.createComponent(AppComponent);
      component = fixture2.componentInstance;

      fixture2.detectChanges();
    });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tdd'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tdd');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to tdd!');
  });

  it('should contain buttons 0 to 10', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(getButtons(compiled).map(btn => btn.innerText))
      .toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
  });

  it('when i click on a button i add element to the model', async(() => {
    const zeroButton =  fixture2.debugElement.queryAll(By.css('.rollButton')).map(de => de.nativeElement)[0];
    zeroButton.click();

    expect(getElement(fixture2, '.rollListElement').map(btn => btn.innerText))
      .toEqual(['0']);
  }));
});


function getButtons(compiled: any): Array<HTMLElement> {
  return toArray(compiled, '.rollButton');
}


function toArray(compiled: any, selector: string): Array<HTMLElement> {
  return [].slice.call(compiled.querySelectorAll(selector));
}


function getElement(fixture: any, selector: string): Array<HTMLElement> {
  return fixture.debugElement.queryAll(By.css(selector)).map(de => de.nativeElement);
}

const ButtonClickEvents = {
  left:  { button: 0 },
  right: { button: 2 }
};

function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}
