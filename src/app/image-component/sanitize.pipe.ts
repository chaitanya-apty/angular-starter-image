import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
    name: 'sanitizeUrl'
})
export class SanitizerUrlPipe implements PipeTransform {

    constructor(
        private sanitize: DomSanitizer
    ) { }

    transform(value: string, fallback: string): SafeUrl {
        console.log('Fallback Image To:', fallback)
        return this.sanitize.bypassSecurityTrustUrl(value);
    }
};
