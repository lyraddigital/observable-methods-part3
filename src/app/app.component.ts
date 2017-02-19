import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/auditTime';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/elementAt';
import 'rxjs/add/operator/every';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showAuditTime = false;
  auditTimeResult = '';

  showBuffer = false;
  bufferResult = '';

  showCatch = false;
  catchResult = '';

  showCombineAll = false;
  combineAllResult = '';

  showConcat = false;
  concatResult = '';

  showCount = false;
  countResult = '';

  showDebounceTime = false;
  debounceTimeResult = '';

  showDefaultIfEmpty = false;
  defaultIfEmptyResult = '';

  showDelayOne = false;
  delayOneResult = '';

  showDelayTwo = false;
  delayTwoResult = '';

  showDistinctOne = false;
  distinctOneResult = '';

  showDistinctTwo = false;
  distinctTwoResult = '';

  showDo = false;
  doResult = '';

  showElementAt = false;
  elementAtResult = '';
  
  ngOnInit() {
     /*
     this.showAuditTime = true;
     
     Observable.fromEvent(document, 'click')
               .auditTime(1000)
               .subscribe(value => {
                 this.auditTimeResult = this.setCurrentCursorPositionAsText(value);
               });*/

      /*
      this.showBuffer = true;
      var obsFromEvent = Observable.fromEvent(document, 'click');
      var obsInterval = Observable.interval(1000);
                
      obsInterval.buffer(obsFromEvent)
                 .subscribe(value => {
                   this.bufferResult = value.toString();
                 });
      */

      /*
      this.showCatch = true;

      var obsCatch = Observable.throw("This is an error I have to catch")
                               .catch(err => Observable.of(1,2,3,4,5));

      obsCatch.subscribe(value => { this.catchResult += `${value.toString()} ` });
      */

      /* 
      this.showCombineAll = true;

      var clicks = Observable.fromEvent(document, 'click');
      var higherOrder = clicks.map(ev => {
         return Observable.interval(100).take(3)
      }
      ).take(2);

      var result = higherOrder.combineAll();
      result.subscribe(value => this.combineAllResult += ` ${value}`);
      */

      /*
      this.showConcat = true;

      var obsNumberListOne = Observable.of(70, 72, 76, 79, 75);
      var obsNumberListTwo = Observable.of(44, 66, 77, 10);
      var obsConcat = obsNumberListOne.concat(obsNumberListTwo);
      
      obsConcat.subscribe(value => { this.concatResult += `${value} ` });
      */

      /*
      this.showCount = true;

      var secondsPassed = Observable.interval(1000);
      var count = secondsPassed.takeUntil(Observable.fromEvent(document, 'click'));

      count.subscribe(value => { this.countResult = (value+1).toString() });
      */

      /*
      this.showDebounceTime = true;

      var clicks = Observable.fromEvent(document, 'click');
      var result = clicks.debounceTime(1000);
      
      result.subscribe(value => { this.debounceTimeResult = this.setCurrentCursorPositionAsText(value) });
      */

      /*
      this.showDefaultIfEmpty = true;

      var clicks = Observable.fromEvent(document, 'click');
      var clicksBeforeFiveSeconds = clicks.takeUntil(Observable.interval(5000));
      var result = clicksBeforeFiveSeconds.defaultIfEmpty('no clicks');
      
      result.subscribe(value => this.defaultIfEmptyResult = 
                          (value.toString() == 'no clicks' ? value.toString() : this.setCurrentCursorPositionAsText(value)));
      */

      /*
      this.showDelayOne = true;

      var clicks = Observable.fromEvent(document, 'click');
      var delayedClicks = clicks.delay(1000);
      delayedClicks.subscribe(value => this.delayOneResult = this.setCurrentCursorPositionAsText(value));
      */

      /*
      this.showDelayTwo = true;

      var clicks = Observable.fromEvent(document, 'click');
      
      var delayedClicks = clicks.delay(new Date('Sat Feb 19 2017 13:24:38 GMT+1100'));
      delayedClicks.subscribe(value => this.delayTwoResult = this.setCurrentCursorPositionAsText(value));
      */

      /*
      this.showDistinctOne = true;
      var obsDistinct = Observable.of(1, 2, 3, 1, 1, 2, 5, 7, 6, 8, 5, 4, 4, 4, 4)
                            .distinct();

      obsDistinct.subscribe(value => this.distinctOneResult += `${value} `);

      this.showDistinctTwo = true;
      */

      /*
      this.showDistinctTwo = true;
      var obsDistinct = Observable.of({ firstName: 'Daryl', id: 1 }, { firstName: 'Terry', id: 2 }, { firstName: 'Daryl', id: 3 })
                            .distinct((p: any) => p.firstName);

      obsDistinct.subscribe(value => this.distinctTwoResult += `${JSON.stringify(value)} `);
      */

      /*
      this.showDo = true;

      var clicks = Observable.fromEvent(document, 'click');
      var positions = clicks.do(ev => console.log(ev))
                            .map(ev => (ev as MouseEvent));

      positions.subscribe(value => this.doResult = this.setCurrentCursorPositionAsText(value));
      */

      /*
      this.showElementAt = true;

      var clicks = Observable.fromEvent(document, 'click');
      var result = clicks.elementAt(2);
      
      result.subscribe(value => this.elementAtResult = this.setCurrentCursorPositionAsText(value));
      */
  }

  private setCurrentCursorPositionAsText(currentPosition: any)
  {
    var mouseMoveEvent = currentPosition as MouseEvent;
    return `Mouse position is now at (${mouseMoveEvent.clientX},${mouseMoveEvent.clientY})`;
  }

  private setClickRangesAsText(clickSpots: any[]): string {
    return clickSpots.map(
        event => {
          var mouseClickEvent = event as MouseEvent;
          return ` (${mouseClickEvent.clientX}, ${mouseClickEvent.clientY})`;
        }).toString();
  }
}
