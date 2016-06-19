import {Component, ElementRef, OnInit, OnDestroy} from '@angular/core'; 
import {CORE_DIRECTIVES} from '@angular/common';  
import {LoadingService} from "./loadingsrv";

@Component({
    selector: 'loading-indicator',
    directives: [CORE_DIRECTIVES],
    template: `
            <div *ngIf='isLoading' class="slds-spinner_container">
            <div class="slds-spinner--inverse slds-spinner slds-spinner--large" aria-hidden="false" role="alert">
                <div class="slds-spinner__dot-a"></div>
                <div class="slds-spinner__dot-b"></div>
            </div>
            </div>  
      `
})




export class LoadingIndicator implements OnInit, OnDestroy {  
    private isLoading = false;
    private subscription: any;

    //we probably want a reference to ElementRef here to do some DOM manipulations
    constructor (public el: ElementRef, public loadingService: LoadingService) {}

    showOrHideLoadingIndicator(loading) {
        this.isLoading = loading;
        if (this.isLoading) this.playLoadingAnimation();
        //else cancel the animation?
    }

    playLoadingAnimation() {
        //this will be your implementation to start the loading animation
    }

    ngOnInit() {
        this.subscription = this.loadingService.loading$
          .subscribe(loading => this.showOrHideLoadingIndicator(loading));
    }

    ngOnDestroy() {         
        this.subscription.unsubscribe();
    }

    }