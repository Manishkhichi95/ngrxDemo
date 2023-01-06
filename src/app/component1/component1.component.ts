import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Demo } from '../modal/demo.modal';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as DemoActions from './../actions/demo.actions'

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  demo: Observable<Demo[]> = of([]);
  
  constructor(private store: Store<AppState>) {
    this.demo = store.select('demoStore');
  }

  removeFromTable(d:any){
    debugger;
    console.log(":: d",d) 
    this.store.dispatch(new DemoActions.RemoveDemo(d));
  }
  ngOnInit() {
  }

}
