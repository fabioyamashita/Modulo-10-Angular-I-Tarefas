import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import Dog from 'src/app/models/Dog';

@Component({
  selector: 'app-dog-create',
  templateUrl: './dog-create.component.html',
  styleUrls: ['./dog-create.component.css'],
})
export class DogCreateComponent {
  constructor(private fb: FormBuilder) {}

  // regexURL: string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  // Validators.pattern(regexURL)

  createForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    headerImg: ['', Validators.required],
    srcImg: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.createForm.value);
  }
}
