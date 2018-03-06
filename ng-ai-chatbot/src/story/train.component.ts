import { Component, OnInit, Input } from '@angular/core';
import { StoryService } from './story.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-ai-chatbot-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  trainForm: FormGroup;
  trainFormFields: any;

  testForm: FormGroup;
  testFormFields: any;

  @Input()
  story;

  trainStory;

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
    if (this.story) {
      this.trainStory = this.storyService.getTrainStory(this.story.id);
    }
  }

  addTest() {

  }

  buildModel() {

  }

  clear() {

  }

}
