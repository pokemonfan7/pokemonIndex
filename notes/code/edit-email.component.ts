import { Component, OnInit, Optional, Self } from '@angular/core'
import { ControlValueAccessor, FormBuilder, FormGroup, NgControl, Validators } from '@angular/forms'
import { CoreValidators } from '../../../../core/core.validators'

@Component({
    selector: 'edit-email',
    templateUrl: './edit-email.component.html',
    styleUrls: ['./edit-email.component.less']
})
export class EditEmailComponent implements OnInit, ControlValueAccessor {
    sosEmails
    onChange = Function.prototype
    onTouched = Function.prototype

    emailForm: FormGroup
    addEmail = true

    constructor(
        @Self() @Optional() public _control: NgControl,
        private fb: FormBuilder
    ) {
        if (this._control) {
            this._control.valueAccessor = this
        }
    }

    ngOnInit() {
        this.emailForm = this.fb.group({
            email: [],
        })
        this.emailForm.get('email').setValidators(
            [CoreValidators.filterEmail(this.sosEmails), Validators.required, Validators.email]
        )
    }

    writeValue(values: string[]) {
        if (!values) {
            return
        }
        this.sosEmails = values
    }

    registerOnChange(fn) {
        this.onChange = fn
    }

    registerOnTouched(fn) {
        this.onTouched = fn
    }

    setDisabledState() {

    }

    addNewEmail(value) {
        this.sosEmails = [value.email, ...this.sosEmails]
        this.emailForm.get('email').setValidators(
            [CoreValidators.filterEmail(this.sosEmails), Validators.required, Validators.email]
        )
        this.onChange(this.sosEmails)
        this.addEmail = true
        this.emailForm.get('email').setValue(null)
        this.emailForm.markAsPristine()
    }

    deleteEmail(email) {
        this.sosEmails = this.sosEmails.filter(e => e !== email)
        this.onChange(this.sosEmails)
    }
}
