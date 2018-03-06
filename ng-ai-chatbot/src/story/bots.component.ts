import { Component, OnInit, Inject, Input } from '@angular/core';
import { StoryService } from './story.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { StoryDialogComponent } from './storydialog.component';
import { TrainDialogComponent } from './traindialog.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-ai-chatbot-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.css']
})
export class BotsComponent implements OnInit {
  botForm: FormGroup;
  botFormFields: any;
  bots: any;
  message;

  @Input()
  storiesBot;

  constructor(public dialog: MatDialog,
    public fb: FormBuilder,
    public storyService: StoryService) { }

  ngOnInit() {
    this.botFormFields = {
      _id: [''],
      botName: ['']
    };
    this.botForm = this.fb.group(this.botFormFields);

    this.storyService.getBots().then((s: any) => {
      this.bots = s;
      this.bots.push({ botName: 'default' });
    });
  }


  stories(bot) {
    if (this.storiesBot) {
      this.storiesBot(bot);
    }
  }


  edit(bot) {

  }

  save() {
    const form = this.botForm.value;
    this.storyService.saveBot(form)
      .then(c => {
        this.ngOnInit();
      })
      .catch(c => {
        this.message = 'Error saving bot';
      });

  }

}
