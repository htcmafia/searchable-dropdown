import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
import * as ɵngcc2 from '@angular/common';

function SearchableDropdownComponent_div_5_p_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p", 13);
    ɵngcc0.ɵɵlistener("click", function SearchableDropdownComponent_div_5_p_4_Template_p_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const i_r7 = ctx.index; const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onItemClick(i_r7); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    ɵngcc0.ɵɵpropertyInterpolate("id", item_r6.key);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r6.value);
} }
function SearchableDropdownComponent_div_5_p_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 14);
    ɵngcc0.ɵɵtext(1, "Not Found");
    ɵngcc0.ɵɵelementEnd();
} }
function SearchableDropdownComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵelement(1, "div", 16);
    ɵngcc0.ɵɵelementStart(2, "span");
    ɵngcc0.ɵɵtext(3, "Loading...");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function SearchableDropdownComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelementStart(1, "a", 8);
    ɵngcc0.ɵɵlistener("click", function SearchableDropdownComponent_div_5_Template_a_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.showAddNewItemSection(); });
    ɵngcc0.ɵɵelement(2, "i", 9);
    ɵngcc0.ɵɵtext(3, "Add New");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, SearchableDropdownComponent_div_5_p_4_Template, 2, 2, "p", 10);
    ɵngcc0.ɵɵtemplate(5, SearchableDropdownComponent_div_5_p_5_Template, 2, 0, "p", 11);
    ɵngcc0.ɵɵtemplate(6, SearchableDropdownComponent_div_5_div_6_Template, 4, 0, "div", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.itemsToShow);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.itemsToShow.length < 1 && !ctx_r1.isListLoading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.isListLoading);
} }
function SearchableDropdownComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵprojection(1, 0, ["class", "add-new-section"]);
    ɵngcc0.ɵɵelementContainerEnd();
} }
const _c0 = ["*"];
export class SearchableDropdownComponent {
    constructor() {
        this.onStart = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.keyChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        //Placeholder
        this.placeHolder = "";
        //Calls on keyup
        this.onSearch = new EventEmitter();
        this.itemsToShow = [];
        //is item list visible
        this.showItemList = false;
        //is loading On/Off
        this.isListLoading = false;
        //Open/Close add new item screen
        this.addNewItem = false;
        this.isItemSelected = false;
        this.isFocusInsideComponent = false;
        this.isComponentClicked = false;
    }
    ngOnInit() {
        if (this.defaultItem)
            this.addItem(this.defaultItem.key, this.defaultItem.value);
        this.onStart.emit(this);
    }
    //When item is selected from the list.
    onItemClick(index) {
        this.value = this.itemsToShow[index].value;
        this.key = this.itemsToShow[index].key;
        this.value = this.itemsToShow[index].value;
        this.keyChange.emit(this.key);
        this.valueChange.emit(this.value);
        this.isItemSelected = true;
    }
    searchList() {
        if (this.searchListTimeOut)
            clearTimeout(this.searchListTimeOut);
        this.searchListTimeOut = setTimeout(() => {
            this.onSearch.emit(this.value);
        }, 500);
    }
    //Manually add an item to the list.
    addItem(key, value) {
        this.itemsToShow.push({ key: key, value: value });
        this.value = value;
        this.key = key;
        this.keyChange.emit(this.key);
    }
    //open/close add new item screne.
    showAddNewItemSection() {
        this.addNewItem = !this.addNewItem;
    }
    //if item list is in view hide it,
    //if item list is hidden bring it in view.
    clickInside() {
        if (!this.showItemList) {
            this.onOpen.emit(null);
        }
        this.showItemList = true;
        this.isFocusInsideComponent = true;
        this.isComponentClicked = true;
        if (this.isItemSelected) {
            this.isItemSelected = false;
            //Force system to think the click was made outside.
            this.isFocusInsideComponent = false;
            this.clickout();
        }
    }
    //Close when click outside the component
    clickout() {
        if (!this.isFocusInsideComponent && this.isComponentClicked) {
            this.showItemList = false;
            // do the heavy process
            this.isComponentClicked = false;
            let valueFound = false;
            let currentItem;
            this.itemsToShow.filter(item => {
                if (this.value != null) {
                    currentItem = item.value;
                    if (currentItem.toString().toLowerCase() == this.value.toString().toLowerCase()) {
                        this.value = item.value;
                        this.key = item.key;
                        this.value = item.value;
                        this.keyChange.emit(this.key);
                        this.valueChange.emit(this.value);
                        valueFound = true;
                        return;
                    }
                }
            });
            if (!valueFound) {
                this.value = "";
            }
        }
        this.isFocusInsideComponent = false;
    }
    //Close on Enter key
    handleKeyboardEvent(event) {
        this.showItemList = false;
        // do the heavy process
        this.isComponentClicked = false;
    }
}
SearchableDropdownComponent.ɵfac = function SearchableDropdownComponent_Factory(t) { return new (t || SearchableDropdownComponent)(); };
SearchableDropdownComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SearchableDropdownComponent, selectors: [["app-searchable-dropdown"]], hostBindings: function SearchableDropdownComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function SearchableDropdownComponent_click_HostBindingHandler() { return ctx.clickInside(); })("click", function SearchableDropdownComponent_click_HostBindingHandler() { return ctx.clickout(); }, false, ɵngcc0.ɵɵresolveDocument)("keyup.enter", function SearchableDropdownComponent_keyup_enter_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, ɵngcc0.ɵɵresolveWindow);
    } }, inputs: { placeHolder: "placeHolder", value: "value", key: "key", defaultItem: "defaultItem" }, outputs: { onStart: "onStart", onOpen: "onOpen", keyChange: "keyChange", valueChange: "valueChange", onSearch: "onSearch" }, ngContentSelectors: _c0, decls: 7, vars: 5, consts: [[1, "search-area"], ["type", "text", 1, "search", 3, "ngModel", "placeholder", "ngModelChange", "keyup"], ["input", ""], [1, "fa", "fa-sort-down"], [1, "drop-down", 3, "ngClass"], ["class", "list", 4, "ngIf"], [4, "ngIf"], [1, "list"], ["href", "javascript:void(0)", 1, "plus-icon", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [3, "id", "click", 4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [3, "id", "click"], [1, "not-found"], [1, "loading"], [1, "spinner-border"]], template: function SearchableDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("ngModelChange", function SearchableDropdownComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; })("keyup", function SearchableDropdownComponent_Template_input_keyup_1_listener() { return ctx.searchList(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(3, "i", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵtemplate(5, SearchableDropdownComponent_div_5_Template, 7, 3, "div", 5);
        ɵngcc0.ɵɵtemplate(6, SearchableDropdownComponent_ng_container_6_Template, 2, 0, "ng-container", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", ctx.value)("placeholder", ctx.placeHolder);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngClass", ctx.showItemList ? "drop-down-open" : "drop-down-close");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.addNewItem);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.addNewItem);
    } }, directives: [ɵngcc1.DefaultValueAccessor, ɵngcc1.NgControlStatus, ɵngcc1.NgModel, ɵngcc2.NgClass, ɵngcc2.NgIf, ɵngcc2.NgForOf], styles: [".search-area[_ngcontent-%COMP%]{position:relative}.search-area[_ngcontent-%COMP%]   i.fa-sort-down[_ngcontent-%COMP%]{pointer-events:none;position:absolute;right:5%;top:25%}.search[_ngcontent-%COMP%]{background:#fff;border:1px solid #ccc;border-radius:5px;color:#5c6873;cursor:default;font-size:.875rem;padding:.375rem .75rem;position:relative;width:100%}.search[_ngcontent-%COMP%]:focus{background-color:#fff;border-color:#8ad4ee;box-shadow:0 0 0 .2rem rgba(32,168,216,.25);color:#5c6873;cursor:text;outline:0}.list[_ngcontent-%COMP%]{overflow-x:hidden}.drop-down[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-sizing:border-box;max-height:200px!important;overflow-x:visible;overflow-y:scroll;padding:0 0 5px;position:absolute;width:100%;z-index:999}.drop-down[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:7px 10px}.drop-down[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover{background-color:#5353f5;color:#fff}.drop-down[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%]{color:grey;font-weight:700;padding:0}.drop-down[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%]:hover{background-color:inherit;color:grey}.drop-down-open[_ngcontent-%COMP%]{display:block}.drop-down-close[_ngcontent-%COMP%]{display:none}.spinner-border[_ngcontent-%COMP%]{height:1.5rem;width:1.5rem}.plus-icon[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid #ccc;color:#000;float:left;margin-bottom:5px;padding:5px 10px;text-align:left;text-decoration:none;width:100%}.plus-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}"] });
SearchableDropdownComponent.ctorParameters = () => [];
SearchableDropdownComponent.propDecorators = {
    onStart: [{ type: Output }],
    onOpen: [{ type: Output }],
    key: [{ type: Input }],
    keyChange: [{ type: Output }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    placeHolder: [{ type: Input }],
    onSearch: [{ type: Output }],
    defaultItem: [{ type: Input }],
    clickInside: [{ type: HostListener, args: ['click',] }],
    clickout: [{ type: HostListener, args: ['document:click',] }],
    handleKeyboardEvent: [{ type: HostListener, args: ['window:keyup.enter', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SearchableDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'app-searchable-dropdown',
                template: "<div class=\"search-area\">\r\n  <input #input type=\"text\" [(ngModel)]=\"value\" class=\"search\" (keyup)=\"searchList()\" [placeholder]=\"placeHolder\">\r\n  <i class=\"fa fa-sort-down\"></i>\r\n  <div class=\"drop-down\" [ngClass]=\"(showItemList)? 'drop-down-open': 'drop-down-close'\">\r\n    <div class=\"list\" *ngIf=\"!addNewItem\">\r\n      <a href=\"javascript:void(0)\" class=\"plus-icon\" (click)=\"showAddNewItemSection()\"><i class=\"fa fa-plus\"\r\n          aria-hidden=\"true\"></i>Add New</a>\r\n      <p id=\"{{item.key}}\" *ngFor=\"let item of itemsToShow; let i = index\" (click)=\"onItemClick(i)\">{{item.value}}</p>\r\n      <p *ngIf=\"itemsToShow.length < 1 && !isListLoading\" class=\"not-found\">Not Found</p>\r\n\r\n      <div class=\"loading\" *ngIf=\"isListLoading\">\r\n        <div class=\"spinner-border\"></div>\r\n        <span>Loading...</span>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"addNewItem\">\r\n      <ng-content class=\"add-new-section\">\r\n\r\n      </ng-content>\r\n    </ng-container>\r\n\r\n  </div>\r\n\r\n</div>\r\n",
                styles: [".search-area{position:relative}.search-area i.fa-sort-down{pointer-events:none;position:absolute;right:5%;top:25%}.search{background:#fff;border:1px solid #ccc;border-radius:5px;color:#5c6873;cursor:default;font-size:.875rem;padding:.375rem .75rem;position:relative;width:100%}.search:focus{background-color:#fff;border-color:#8ad4ee;box-shadow:0 0 0 .2rem rgba(32,168,216,.25);color:#5c6873;cursor:text;outline:0}.list{overflow-x:hidden}.drop-down{background-color:#fff;border:1px solid #ccc;box-sizing:border-box;max-height:200px!important;overflow-x:visible;overflow-y:scroll;padding:0 0 5px;position:absolute;width:100%;z-index:999}.drop-down p{margin:0;padding:7px 10px}.drop-down p:hover{background-color:#5353f5;color:#fff}.drop-down .not-found{color:grey;font-weight:700;padding:0}.drop-down .not-found:hover{background-color:inherit;color:grey}.drop-down-open{display:block}.drop-down-close{display:none}.spinner-border{height:1.5rem;width:1.5rem}.plus-icon{background-color:#fff;border-bottom:1px solid #ccc;color:#000;float:left;margin-bottom:5px;padding:5px 10px;text-align:left;text-decoration:none;width:100%}.plus-icon i{margin-right:5px}"]
            }]
    }], function () { return []; }, { onStart: [{
            type: Output
        }], onOpen: [{
            type: Output
        }], keyChange: [{
            type: Output
        }], valueChange: [{
            type: Output
        }], placeHolder: [{
            type: Input
        }], onSearch: [{
            type: Output
        }], value: [{
            type: Input
        }], key: [{
            type: Input
        }], 
    //if item list is in view hide it,
    //if item list is hidden bring it in view.
    clickInside: [{
            type: HostListener,
            args: ['click']
        }], 
    //Close when click outside the component
    clickout: [{
            type: HostListener,
            args: ['document:click']
        }], 
    //Close on Enter key
    handleKeyboardEvent: [{
            type: HostListener,
            args: ['window:keyup.enter', ['$event']]
        }], defaultItem: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NlYXJjaGFibGUtZHJvcGRvd24vc3JjL2xpYi9zZWFyY2hhYmxlLWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdGLE1BQU0sT0FBTywyQkFBMkI7QUFBRyxJQXNDekM7QUFBZ0IsUUFwQ04sWUFBTyxHQUFHLElBQUksWUFBWSxFQUErQixDQUFDO0FBQ3RFLFFBQVksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7QUFDOUMsUUFHWSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztBQUNuRCxRQUVZLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztBQUNyRCxRQUNFLGFBQWE7QUFDZixRQUFXLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0FBQ3BDLFFBQ0UsZ0JBQWdCO0FBQ2xCLFFBQVksYUFBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7QUFDbEQsUUFHRSxnQkFBVyxHQUFxQixFQUFFLENBQUM7QUFDckMsUUFDRSxzQkFBc0I7QUFDeEIsUUFBRSxpQkFBWSxHQUFZLEtBQUssQ0FBQztBQUNoQyxRQUFFLG1CQUFtQjtBQUNyQixRQUFFLGtCQUFhLEdBQVksS0FBSyxDQUFDO0FBQ2pDLFFBS0UsZ0NBQWdDO0FBQ2xDLFFBQUUsZUFBVSxHQUFZLEtBQUssQ0FBQztBQUM5QixRQUNVLG1CQUFjLEdBQVksS0FBSyxDQUFDO0FBQzFDLFFBQVUsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO0FBQ3pDLFFBQVUsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO0FBQ3JDLElBQ2tCLENBQUM7QUFDbkIsSUFDRSxRQUFRO0FBQ1YsUUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXO0FBQ3hCLFlBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pFLFFBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxzQ0FBc0M7QUFDeEMsSUFBRSxXQUFXLENBQUMsS0FBYTtBQUMzQixRQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDL0MsUUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQzNDLFFBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUMvQyxRQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQyxRQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0QyxRQUFJLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQy9CLElBQUUsQ0FBQztBQUNILElBQ0UsVUFBVTtBQUNaLFFBQUksSUFBSSxJQUFJLENBQUMsaUJBQWlCO0FBQzlCLFlBQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzNDLFFBQ0ksSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7QUFDN0MsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsUUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDWixJQUFFLENBQUM7QUFDSCxJQUNFLG1DQUFtQztBQUNyQyxJQUFFLE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBYTtBQUNwQyxRQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUN0RCxRQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLFFBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbkIsUUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxpQ0FBaUM7QUFDbkMsSUFBRSxxQkFBcUI7QUFBSyxRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUN2QyxJQUFFLENBQUM7QUFDSCxJQUNFLGtDQUFrQztBQUNwQyxJQUFFLDBDQUEwQztBQUM1QyxJQUNVLFdBQVc7QUFBSyxRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtBQUM1QixZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQzdCLFFBQUksSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztBQUN2QyxRQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7QUFDbkMsUUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDN0IsWUFBTSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztBQUNsQyxZQUFNLG1EQUFtRDtBQUN6RCxZQUFNLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7QUFDMUMsWUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdEIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0Usd0NBQXdDO0FBQzFDLElBQ1UsUUFBUTtBQUFLLFFBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO0FBQ2pFLFlBQ00sSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDaEMsWUFBTSx1QkFBdUI7QUFDN0IsWUFBTSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0FBQ3RDLFlBQ00sSUFBSSxVQUFVLEdBQVksS0FBSyxDQUFDO0FBQ3RDLFlBQU0sSUFBSSxXQUFtQixDQUFDO0FBQzlCLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDckMsZ0JBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUNoQyxvQkFBVSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNuQyxvQkFBVSxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFO0FBQzNGLHdCQUFZLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNwQyx3QkFBWSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDaEMsd0JBQVksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3BDLHdCQUFZLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQyx3QkFBWSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUMsd0JBQVksVUFBVSxHQUFHLElBQUksQ0FBQztBQUM5Qix3QkFBWSxPQUFPO0FBQ25CLHFCQUFXO0FBQ1gsaUJBQVM7QUFDVCxZQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsWUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ3ZCLGdCQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLGFBQU87QUFDUCxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0FBQ3hDLElBQUUsQ0FBQztBQUNILElBRUUsb0JBQW9CO0FBQ3RCLElBQ1UsbUJBQW1CLENBQUMsS0FBb0I7QUFDbEQsUUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUM5QixRQUFJLHVCQUF1QjtBQUMzQixRQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7QUFDcEMsSUFBRSxDQUFDO0FBQ0g7dURBaEpDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUseUJBQXlCO09BQ25DOztnY0FBbUQ7Ozs7Ozs7Ozs7O1lBRXBEOzs7Ozs7Ozs7O3FyREFDSTtBQUFDO0FBQ047QUFDOEMsc0JBQTNDLE1BQU07QUFBSyxxQkFDWCxNQUFNO0FBQUssa0JBR1gsS0FBSztBQUFLLHdCQUNWLE1BQU07QUFBSyxvQkFFWCxLQUFLO0FBQUssMEJBQ1YsTUFBTTtBQUFLLDBCQUdYLEtBQUs7QUFBSyx1QkFHVixNQUFNO0FBQUssMEJBRVgsS0FBSztBQUFLLDBCQStEVixZQUFZLFNBQUMsT0FBTztBQUNsQix1QkFrQkYsWUFBWSxTQUFDLGdCQUFnQjtBQUMzQixrQ0FnQ0YsWUFBWSxTQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDO0FBQzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBN0lBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFzQ0EsQUFwQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBTUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFHQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUEvSUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUVBLEFBQUEsQUErREEsQUFBQSxBQUFBLEFBQUEsQUFtQkEsQUFBQSxBQUFBLEFBQUEsQUFpQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2VhcmNoYWJsZS1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2hhYmxlLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoYWJsZS1kcm9wZG93bi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaGFibGVEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIG9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPFNlYXJjaGFibGVEcm9wZG93bkNvbXBvbmVudD4oKTtcbiAgQE91dHB1dCgpIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvL1JldHVybnNcbiAgQElucHV0KCkga2V5OiBudW1iZXI7XG4gIEBPdXRwdXQoKSBrZXlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvL1BsYWNlaG9sZGVyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmcgPSBcIlwiO1xuXG4gIC8vQ2FsbHMgb24ga2V5dXBcbiAgQE91dHB1dCgpIG9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQElucHV0KCkgZGVmYXVsdEl0ZW06IHsga2V5LCB2YWx1ZSB9O1xuXG4gIGl0ZW1zVG9TaG93OiB7IGtleSwgdmFsdWUgfVtdID0gW107XG5cbiAgLy9pcyBpdGVtIGxpc3QgdmlzaWJsZVxuICBzaG93SXRlbUxpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy9pcyBsb2FkaW5nIE9uL09mZlxuICBpc0xpc3RMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy9EZWxheSBiZXR3ZWVuIHRoZSB2YWx1ZSBlbnRlcmVkIGluIHRleHRmaWVsZCBhbmRcbiAgLy9ldmVudCBlbWl0dGVyIGVtaXR0aW9uLlxuICBwcml2YXRlIHNlYXJjaExpc3RUaW1lT3V0O1xuXG4gIC8vT3Blbi9DbG9zZSBhZGQgbmV3IGl0ZW0gc2NyZWVuXG4gIGFkZE5ld0l0ZW06IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGlzSXRlbVNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgaXNGb2N1c0luc2lkZUNvbXBvbmVudCA9IGZhbHNlO1xuICBwcml2YXRlIGlzQ29tcG9uZW50Q2xpY2tlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGVmYXVsdEl0ZW0pXG4gICAgICB0aGlzLmFkZEl0ZW0odGhpcy5kZWZhdWx0SXRlbS5rZXksIHRoaXMuZGVmYXVsdEl0ZW0udmFsdWUpO1xuXG4gICAgdGhpcy5vblN0YXJ0LmVtaXQodGhpcyk7XG4gIH1cblxuICAvL1doZW4gaXRlbSBpcyBzZWxlY3RlZCBmcm9tIHRoZSBsaXN0LlxuICBvbkl0ZW1DbGljayhpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuaXRlbXNUb1Nob3dbaW5kZXhdLnZhbHVlO1xuICAgIHRoaXMua2V5ID0gdGhpcy5pdGVtc1RvU2hvd1tpbmRleF0ua2V5O1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLml0ZW1zVG9TaG93W2luZGV4XS52YWx1ZTtcbiAgICB0aGlzLmtleUNoYW5nZS5lbWl0KHRoaXMua2V5KTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5pc0l0ZW1TZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBzZWFyY2hMaXN0KCkge1xuICAgIGlmICh0aGlzLnNlYXJjaExpc3RUaW1lT3V0KVxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2VhcmNoTGlzdFRpbWVPdXQpO1xuXG4gICAgdGhpcy5zZWFyY2hMaXN0VGltZU91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vblNlYXJjaC5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH0sIDUwMCk7XG4gIH1cblxuICAvL01hbnVhbGx5IGFkZCBhbiBpdGVtIHRvIHRoZSBsaXN0LlxuICBhZGRJdGVtKGtleTogbnVtYmVyLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pdGVtc1RvU2hvdy5wdXNoKHsga2V5OiBrZXksIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5rZXlDaGFuZ2UuZW1pdCh0aGlzLmtleSk7XG4gIH1cblxuICAvL29wZW4vY2xvc2UgYWRkIG5ldyBpdGVtIHNjcmVuZS5cbiAgc2hvd0FkZE5ld0l0ZW1TZWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkTmV3SXRlbSA9ICF0aGlzLmFkZE5ld0l0ZW07XG4gIH1cblxuICAvL2lmIGl0ZW0gbGlzdCBpcyBpbiB2aWV3IGhpZGUgaXQsXG4gIC8vaWYgaXRlbSBsaXN0IGlzIGhpZGRlbiBicmluZyBpdCBpbiB2aWV3LlxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHByaXZhdGUgY2xpY2tJbnNpZGUoKTogdm9pZCB7XG5cbiAgICBpZiAoIXRoaXMuc2hvd0l0ZW1MaXN0KSB7XG4gICAgICB0aGlzLm9uT3Blbi5lbWl0KG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd0l0ZW1MaXN0ID0gdHJ1ZTtcbiAgICB0aGlzLmlzRm9jdXNJbnNpZGVDb21wb25lbnQgPSB0cnVlO1xuICAgIHRoaXMuaXNDb21wb25lbnRDbGlja2VkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pc0l0ZW1TZWxlY3RlZCkge1xuICAgICAgdGhpcy5pc0l0ZW1TZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgLy9Gb3JjZSBzeXN0ZW0gdG8gdGhpbmsgdGhlIGNsaWNrIHdhcyBtYWRlIG91dHNpZGUuXG4gICAgICB0aGlzLmlzRm9jdXNJbnNpZGVDb21wb25lbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xpY2tvdXQoKTtcbiAgICB9XG4gIH1cblxuICAvL0Nsb3NlIHdoZW4gY2xpY2sgb3V0c2lkZSB0aGUgY29tcG9uZW50XG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJylcbiAgcHJpdmF0ZSBjbGlja291dCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNGb2N1c0luc2lkZUNvbXBvbmVudCAmJiB0aGlzLmlzQ29tcG9uZW50Q2xpY2tlZCkge1xuXG4gICAgICB0aGlzLnNob3dJdGVtTGlzdCA9IGZhbHNlO1xuICAgICAgLy8gZG8gdGhlIGhlYXZ5IHByb2Nlc3NcbiAgICAgIHRoaXMuaXNDb21wb25lbnRDbGlja2VkID0gZmFsc2U7XG5cbiAgICAgIGxldCB2YWx1ZUZvdW5kOiBib29sZWFuID0gZmFsc2U7XG4gICAgICBsZXQgY3VycmVudEl0ZW06IHN0cmluZztcbiAgICAgIHRoaXMuaXRlbXNUb1Nob3cuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgY3VycmVudEl0ZW0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgIGlmIChjdXJyZW50SXRlbS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT0gdGhpcy52YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5rZXkgPSBpdGVtLmtleTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5rZXlDaGFuZ2UuZW1pdCh0aGlzLmtleSk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB2YWx1ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCF2YWx1ZUZvdW5kKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlzRm9jdXNJbnNpZGVDb21wb25lbnQgPSBmYWxzZTtcbiAgfVxuXG5cbiAgLy9DbG9zZSBvbiBFbnRlciBrZXlcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleXVwLmVudGVyJywgWyckZXZlbnQnXSlcbiAgcHJpdmF0ZSBoYW5kbGVLZXlib2FyZEV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5zaG93SXRlbUxpc3QgPSBmYWxzZTtcbiAgICAvLyBkbyB0aGUgaGVhdnkgcHJvY2Vzc1xuICAgIHRoaXMuaXNDb21wb25lbnRDbGlja2VkID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==