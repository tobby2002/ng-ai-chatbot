import { Component, OnInit, Inject } from '@angular/core';
import { StoryService } from './story.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { StoryDialogComponent } from './storydialog.component';
import { TrainDialogComponent } from './traindialog.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-ai-chatbot-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories: any;

  constructor(public dialog: MatDialog,
    public storyService: StoryService) { }

  ngOnInit() {
    this.storyService.getStories().then((s: any) => {
      this.stories = s;
    });
  }

  openDialog(story = null): void {
    const dialogRef = this.dialog.open(StoryDialogComponent, {
      width: '90%',
      data: { story: story }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.ngOnInit();
    });
  }



  add() {
    this.openDialog();
  }

  edit(story) {
    this.openDialog(story);
  }

  train(story) {
    const dialogRef = this.dialog.open(TrainDialogComponent, {
      width: '90%',
      data: { story: story }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  delete(story) {
    if (confirm('Are u sure want to delete this story?')) {
      this.storyService.deleteStory(story._id.$oid).then((s: any) => {
        this.ngOnInit();
      });
    }
  }

  build(story) {
    this.storyService.buildStory(story._id.$oid).then((s: any) => {
      this.ngOnInit();
    });
  }
}
