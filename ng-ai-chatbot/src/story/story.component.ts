import { Component, OnInit } from '@angular/core';
import { StoryService } from './story.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-ai-chatbot-story',
  templateUrl: './story.component.html',
  // styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor(public storyService: StoryService) { }

  ngOnInit() {
  }

}
