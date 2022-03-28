import { Component, Input, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: "the-gallery",
    templateUrl: "gallery.component.html",
    styleUrls: ["gallery.component.scss"],
})
export class GalleryComponent implements OnInit, OnDestroy {
    @Input() public images: string[] = [];

    public current: number = 0;    
    private interval: number = null;

    public ngOnInit(): void {
        if (this.images.length > 1) {
            this.interval = window.setInterval(() => this.next(), 3000);
        }        
    }

    public ngOnDestroy(): void {
        this.interval && window.clearInterval(this.interval);
    }

    private next(): void {
        this.current = this.current < this.images.length - 1 ? this.current + 1 : 0;
    }
}