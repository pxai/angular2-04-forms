import {Component} from 'angular2/core';
//import {AppComponent} from './app.button'

/**
 * class binding
 * CSS binding
 * events binding
 * manual 2way binding
 * angular2 2 way binding
 */
// Different kinds of interpolation
// Notice textContent is a dom element
@Component({
    selector: 'bindings-app',
    template: `<section>
                <h1>{{title}}</h1>
                <p [textContent]='topicText'></p>
                <div><button class="btn btn-primary" [class.active]="isActive">Do something</button></div>
                <div><button class="btn btn-primary" 
                    [style.backgroundColor]="isActive ? 'green' : 'grey'">CSS binding</button>

                </div>
                <div><button (click)="toggleCss()">Toggle</button></div>
                <div><button on-click="toggleCssEvent($event)">Toggle</button></div>
                <div>
                    <input type="text" [value]="buttonTitle" (input)="buttonTitle = $event.target.value" />
                    <a href='' (click)="clearTitle($event)">Clear</a>
                    <b>{{buttonTitle}}</b>
                </div>
                <div>
                    <input type="text" [(ngModel)]="otherTitle" />
                    <i>{{otherTitle}}</i>
                </div>
                <div>
                    <input type="text" bindon-ngModel="yetAnotherBind" />
                    <i>{{yetAnotherBind}}</i>
                </div>
                <div>
                    <h3><i class="glyphicon"
                       [class.glyphicon-heart-empty] = "!heartOn"
                       [class.glyphicon-heart] = "heartOn"
                       [style.color] = "heartOn ? 'red' : 'none' "
                       (click)="heartBeat()">
                    </i> Beat Me!</h3>
                </div>
               </section>
            `
})
export class AppComponent {
    private title : string = 'Binding samples';
    private topicText : string = 'Some samples for binding';
    private isActive: boolean = true;
    private buttonTitle : string = '';
    private otherTitle : string = 'Two way binding';
    private yetAnotherBind : string = 'yet another two way binding';
    private heartOn : boolean = false;
    
    public toggleCss () : void {
        this.isActive = !this.isActive;
    }
   
   
    public toggleCssEvent ($event) : void {
        // Prevent Bubbling, in case that we are insie other element
        // expecting clic
        $event.stopPropagation();
        this.isActive = !this.isActive;
    } 
    
    public clearTitle ($event) {
        $event.preventDefault();
        this.buttonTitle = '';
    }
    
    public heartBeat () {
        this.heartOn = !this.heartOn;
    }
}
