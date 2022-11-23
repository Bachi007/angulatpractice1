import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector:'[highlightme]'
})

export class highlightme implements OnInit{

    constructor(private eleRef:ElementRef){}

    ngOnInit(){
        this.eleRef.nativeElement.style.background="yellow",
        this.eleRef.nativeElement.style.color="black"
    }
}