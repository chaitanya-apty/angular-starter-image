import {
    Directive,
    HostBinding,
    HostListener,
    Output,
    EventEmitter
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Directive({
    selector: '[dragNdrop]'
})
export class DragDirective {
    @Output() files: EventEmitter<File> = new EventEmitter();
    @Output() uploadClick: EventEmitter<void> = new EventEmitter();

    @HostBinding('style.background') private background = '#eee';

    constructor(private sanitizer: DomSanitizer) { }

    @HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#999';
    }

    @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
    }

    @HostListener('click', ['$event']) public onUploadClick(evt: DragEvent) {
        this.uploadClick.emit();
    }

    @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';

        if (evt.dataTransfer.files.length) {
            const file = evt.dataTransfer.files[0];
            this.files.emit(file)
        }
    }
}
