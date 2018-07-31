import { Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Pipe({
    name: 'highLight'
})

export class HighLightPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }

    transform(text: string, searchStr): SafeHtml {
        const Reg = new RegExp(searchStr, 'gi')
        const res = text.replace(Reg, (match) => `<strong class="highlight">${match}</strong>`)

        return this.sanitizer.bypassSecurityTrustHtml(res)
    }
}
