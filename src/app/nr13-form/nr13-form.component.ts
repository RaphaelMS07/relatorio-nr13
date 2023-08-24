import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-nr13-form',
  templateUrl: './nr13-form.component.html',
  styleUrls: ['./nr13-form.component.css']
})
export class Nr13FormComponent implements OnInit {

  constructor() { }

  nr13 = new FormGroup({})

  ngOnInit(): void {
  }

}
