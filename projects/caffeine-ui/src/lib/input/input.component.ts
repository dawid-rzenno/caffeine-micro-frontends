import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NgControl } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'input[caffeine-ui-input]',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  host: {
    '[class]': 'statusClassName'
  }
})
export class InputComponent implements AfterViewInit, OnDestroy {
  protected readonly baseClassName: string = 'caffeine__ui-input';
  protected statusClassName: string = this.createStatusClassName('PENDING');

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private control: NgControl) {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  protected createStatusClassName(status: string): string {
    return `${this.baseClassName} ${this.baseClassName}--${status}`
  }

  ngAfterViewInit(): void {
    this.control.statusChanges!.pipe(
      takeUntil(this.destroy$)
    ).subscribe((status) => this.statusClassName = this.createStatusClassName(status))
  }
}
