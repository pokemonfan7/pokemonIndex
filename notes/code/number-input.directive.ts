import { Directive, HostListener, Input, OnDestroy } from '@angular/core'
import { NgControl } from '@angular/forms'
import { debounceTime } from 'rxjs/internal/operators'
import { Subject, Subscription } from 'rxjs/Rx'

@Directive({selector: '[numberInput]'})
export class NumberInputDirective implements OnDestroy {
    subject: Subject<number>
    subscribe: Subscription
    @Input() min = -Infinity
    @Input() max = Infinity

    constructor(
        private control: NgControl
    ) {
        this.subject = new Subject()
        this.subject.pipe(debounceTime(500))
        .subscribe(value => {
            if (value < this.min) {
                value = this.min
            }
            if (value > this.max) {
                value = this.max
            }
            this.control.control.setValue(value)
        })
    }

    @HostListener('input', ['$event'])
    onInput($event) {
        this.subject.next($event.target.value)
    }

    ngOnDestroy() {
        this.subject.complete()
        this.subject.unsubscribe()
    }
}
