import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchableDropdownComponent } from './searchable-dropdown.component';
import * as ɵngcc0 from '@angular/core';
export class SearchableDropdownModule {
}
SearchableDropdownModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SearchableDropdownModule });
SearchableDropdownModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SearchableDropdownModule_Factory(t) { return new (t || SearchableDropdownModule)(); }, imports: [[
            CommonModule,
            FormsModule,
        ], CommonModule,
        FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SearchableDropdownModule, { declarations: function () { return [SearchableDropdownComponent]; }, imports: function () { return [CommonModule,
        FormsModule]; }, exports: function () { return [SearchableDropdownComponent,
        CommonModule,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS1kcm9wZG93bi5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NlYXJjaGFibGUtZHJvcGRvd24vc3JjL2xpYi9zZWFyY2hhYmxlLWRyb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBZ0I5RSxNQUFNLE9BQU8sd0JBQXdCO0FBQUc7b0RBWnZDLFFBQVEsU0FBQyxrQkFDUjtNQUFZLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxrQkFDM0MsT0FBTyxFQUFFLHNCQUNQLFlBQVksc0JBQ1osV0FBVyxtQkFDWixrQkFDRDtBQUFPLEVBQUUsc0JBQ1A7O0FBQTJCLHNCQUMzQjtTQUFZO01BQ1osV0FBVyxtQkFDWixjQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbEJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFnQkEsQUFBQSxBQUFBLEFBQUEsQUFaQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTZWFyY2hhYmxlRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL3NlYXJjaGFibGUtZHJvcGRvd24uY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NlYXJjaGFibGVEcm9wZG93bkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTZWFyY2hhYmxlRHJvcGRvd25Db21wb25lbnQsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaGFibGVEcm9wZG93bk1vZHVsZSB7IH1cbiJdfQ==