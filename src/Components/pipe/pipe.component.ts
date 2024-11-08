import { CpPipe } from './../cp.pipe';
import {
  AsyncPipe,
  DatePipe,
  JsonPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    TitleCasePipe,
    JsonPipe,
    AsyncPipe,
    CpPipe,
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  firstName: string = 'Kashfa Sehejat Sezuti';
  title = 'This is learning purpose';
  currentDate: Date = new Date();
  person: any = {
    name: 'Kashfa',
    date: '31.08.1997',
    id: 1234,
    city: 'Chemnitz',
    status: '',
  };
  currentTime: Observable<Date> = new Observable<Date>();

  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }
}
