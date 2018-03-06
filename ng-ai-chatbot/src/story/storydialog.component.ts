import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ng-ai-chatbot-storydialog',
    template: '<ng-ai-chatbot-story></ng-ai-chatbot-story>',
})
export class StoryDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<StoryDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}

