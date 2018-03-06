import { Component, OnInit } from '@angular/core';
import { StoryService } from './story.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-ai-chatbot-train',
  templateUrl: './train.component.html',
  // styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  trainForm: FormGroup;
  trainFormFields: any;

  testForm: FormGroup;
  testFormFields: any;
  constructor(
    public fb: FormBuilder,
    public storyService: StoryService) {

    this.trainFormFields = {
      input: [''],
    };
    this.trainForm = this.fb.group(this.trainFormFields);

    this.testFormFields = {
      input: [''],
    };
    this.testForm = this.fb.group(this.testFormFields);

  }

  ngOnInit() {
  }

  addTest() {

  }

  buildModel() {

  }

  clear() {

  }

}
