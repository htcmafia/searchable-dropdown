import { ɵɵdefineInjectable, Injectable, EventEmitter, Component, Output, Input, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
class SearchableDropdownService {
    constructor() { }
}
SearchableDropdownService.ɵfac = function SearchableDropdownService_Factory(t) { return new (t || SearchableDropdownService)(); };
SearchableDropdownService.ɵprov = ɵɵdefineInjectable({ factory: function SearchableDropdownService_Factory() { return new SearchableDropdownService(); }, token: SearchableDropdownService, providedIn: "root" });
SearchableDropdownService.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SearchableDropdownService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class SearchableDropdownComponent {
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

class SearchableDropdownModule {
}
SearchableDropdownModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SearchableDropdownModule });
SearchableDropdownModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SearchableDropdownModule_Factory(t) { return new (t || SearchableDropdownModule)(); }, imports: [[
            CommonModule,
            FormsModule,
        ], CommonModule,
        FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SearchableDropdownModule, { declarations: function () { return [SearchableDropdownComponent]; }, imports: function () { return [CommonModule,
        FormsModule]; }, exports: function () { return [SearchableDropdownComponent, CommonModule,
        FormsModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SearchableDropdownModule, [{
        type: NgModule,
        args: [{
                declarations: [SearchableDropdownComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                ],
                exports: [
                    SearchableDropdownComponent,
                    CommonModule,
                    FormsModule,
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of searchable-dropdown
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SearchableDropdownComponent, SearchableDropdownModule, SearchableDropdownService };

//# sourceMappingURL=searchable-dropdown.js.map