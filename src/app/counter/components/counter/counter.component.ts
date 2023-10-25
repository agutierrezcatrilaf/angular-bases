import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{count}}</h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="resetCount()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>`,
})
export class CounterComponent{

  public count : number = 1;

  increaseBy(value:number):void {
    this.count += value;
  }

  resetCount():void{
    this.count = 1;
  }

}
