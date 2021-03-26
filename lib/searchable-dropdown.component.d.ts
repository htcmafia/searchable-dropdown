import { EventEmitter, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class SearchableDropdownComponent implements OnInit {
    onStart: EventEmitter<SearchableDropdownComponent>;
    onOpen: EventEmitter<void>;
    key: number;
    keyChange: EventEmitter<number>;
    value: string;
    valueChange: EventEmitter<string>;
    placeHolder: string;
    onSearch: EventEmitter<string>;
    defaultItem: {
        key: any;
        value: any;
    };
    itemsToShow: {
        key: any;
        value: any;
    }[];
    showItemList: boolean;
    isListLoading: boolean;
    private searchListTimeOut;
    addNewItem: boolean;
    private isItemSelected;
    private isFocusInsideComponent;
    private isComponentClicked;
    constructor();
    ngOnInit(): void;
    onItemClick(index: number): void;
    searchList(): void;
    addItem(key: number, value: string): void;
    showAddNewItemSection(): void;
    private clickInside;
    private clickout;
    private handleKeyboardEvent;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SearchableDropdownComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SearchableDropdownComponent, "app-searchable-dropdown", never, { "placeHolder": "placeHolder"; "value": "value"; "key": "key"; "defaultItem": "defaultItem"; }, { "onStart": "onStart"; "onOpen": "onOpen"; "keyChange": "keyChange"; "valueChange": "valueChange"; "onSearch": "onSearch"; }, never, ["*"]>;
}

//# sourceMappingURL=searchable-dropdown.component.d.ts.map