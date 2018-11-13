import {Directive, HostListener, Input, OnDestroy} from '@angular/core'
import {Subject, Subscription} from 'rxjs'
import {NgControl} from '@angular/forms'
import {debounceTime} from 'rxjs/operators'

@Directive({
  selector: '[numInput]'
})
export class NumInputDirective implements OnDestroy {

  subject: Subject<number>
  subs: Subscription[]
  @Input() min = -Infinity
  @Input() max = Infinity

  constructor(
    private control: NgControl,
  ) {
    this.subject = new Subject()
    this.subject.pipe(debounceTime(500)).subscribe(val => {
      if (val < this.min) {
        val = this.min
      }
      if (val > this.max) {
        val = this.max
      }
      this.control.control.setValue(val)
    })
  }

  @HostListener('input', ['$event'])
  onInput($event) {
    this.subject.next(Number($event.target.value))
  }

  ngOnDestroy() {
    this.subject.complete()
    this.subject.unsubscribe()
  }
}
