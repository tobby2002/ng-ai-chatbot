import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { StoriesComponent } from './story/stories.component';
import { TrainComponent } from './story/train.component';
import { StoryService } from './story/story.service';
import { ChatService } from './chat/chat.service';
import { StoryComponent } from './story/story.component';
import {
  MatToolbarModule, MatIconModule, MatCardModule,
  MatButtonModule, MatDialogModule, MatCheckboxModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoryDialogComponent } from './story/storydialog.component';
import { TrainDialogComponent } from './story/traindialog.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule, MatButtonModule, MatDialogModule,
    MatCheckboxModule, MatIconModule,
    MatToolbarModule, MatIconModule,
    // MatToolbarModule
    BrowserAnimationsModule,
  ],
  declarations: [
    ChatComponent, StoriesComponent, StoryComponent, TrainComponent,
    StoryDialogComponent, TrainDialogComponent
  ],
  exports: [
    ChatComponent, StoriesComponent, StoryComponent, TrainComponent,
    StoryDialogComponent, TrainDialogComponent
  ],
  providers: [StoryService, ChatService],
  entryComponents: [StoryDialogComponent, TrainDialogComponent]
})
export class NgAiChatbot {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: NgAiChatbot,
      providers: [
      ]
    };
  }
}


