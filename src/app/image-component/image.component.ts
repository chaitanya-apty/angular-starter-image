import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'toh-spinner-img',
    templateUrl: './image.component.html',
    styleUrls: ['./image.css']
})
export class SpinnerImgComponent implements OnInit {
    FileAttributes = 'image/x-png,image/jpeg';
    @Input() spinnerSrc: String;
    @Input() imgContainerClass: String;
    public loading = true

    private _showImage: boolean;
    get showImage(): boolean {
        return this._showImage;
    }
    @Input() set showImage(value: boolean) {
        this._imgSRC = undefined;
        this.loading = true;
        this._showImage = value;
    }

    _imgSRC: string | ArrayBuffer;
    get imageSource(): string | ArrayBuffer {
        return this._imgSRC;
    }
    @Input() set imageSource(value: string | ArrayBuffer) {
        this._imgSRC = value;
    }


    onLoad() {
        this.loading = false;
        URL.revokeObjectURL(this.imageSource as string);
    }

    constructor() { }

    ngOnInit() { }

    onFileInput(target: HTMLInputElement) {
        const fileListData = target.files as FileList;
        if (!fileListData.length) {
            console.error('Upload Image')
            return;
        }
        const ImageFile: File = fileListData[0];
        this.showImagePreview(ImageFile)
    }

    showImagePreview(file: File) {
        this.imageSource = URL.createObjectURL(file);
    }
}
