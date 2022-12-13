import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dog-edit',
  templateUrl: './dog-edit.component.html',
  styleUrls: ['./dog-edit.component.css'],
})
export class DogEditComponent implements OnInit {
  dogData: any;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      description: string;
      headerImg: string;
      scrImg: string;
    },
    public dialogRef: MatDialogRef<DogEditComponent>
  ) {
    this.dogData = data;
  }

  editForm?: any;

  regexURL: RegExp =
    /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

  ngOnInit() {
    this.editForm = this.fb.group({
      title: [this.dogData.title, Validators.required],
      description: [this.dogData.description, Validators.required],
      headerImg: [this.dogData.headerImg, Validators.pattern(this.regexURL)],
      srcImg: [this.dogData.scrImg, Validators.pattern(this.regexURL)],
    });
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onSaveChangesClick(): void {
    this.dialogRef.close(this.editForm.value);
  }
}
