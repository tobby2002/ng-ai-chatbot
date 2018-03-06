import { Component, OnInit } from '@angular/core';
import { StoryService } from './story.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-ai-chatbot-train',
  templateUrl: './train.component.html',
  // styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  constructor(public storyService: StoryService) { }

  ngOnInit() {
  }

}
