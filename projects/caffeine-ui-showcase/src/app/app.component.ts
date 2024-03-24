import { Component } from '@angular/core';
import { ButtonColors } from "caffeine-ui";
import { FormControl, UntypedFormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buttons: {label: string, color: ButtonColors, disabled?: boolean }[] = [
    { label: 'Basic', color: 'basic' },
    { label: 'Primary', color: 'primary' },
    { label: 'Disabled Primary', color: 'primary', disabled: true },
    { label: 'Accent', color: 'accent' },
    { label: 'Warn', color: 'warn' },
  ];

  formGroup: UntypedFormGroup = new UntypedFormGroup({
    validExample: new FormControl<string>('Valid example'),
    invalidExample: new FormControl<string>('', Validators.required)
  })
}
