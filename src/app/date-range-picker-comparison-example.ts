import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

/** @title Date range picker comparison ranges */
@Component({
  selector: 'date-range-picker-comparison-example',
  templateUrl: 'date-range-picker-comparison-example.html',
  styleUrls: ['date-range-picker-comparison-example.css'],
})
export class DateRangePickerComparisonExample {
  campaign: FormGroup;

  constructor() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaign = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
  }
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */