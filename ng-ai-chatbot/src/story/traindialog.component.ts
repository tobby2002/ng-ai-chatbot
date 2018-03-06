import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ng-ai-chatbot-traindialog',
    template: '<ng-ai-chatbot-train></ng-ai-chatbot-train>',
})
export class TrainDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<TrainDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    close(): void {
        this.dialogRef.close();
    }
}
