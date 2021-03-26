# SearchableDropdown

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.4.

<!-- ## Code scaffolding

Run `ng generate component component-name --project searchable-dropdown` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project searchable-dropdown`.
> Note: Don't forget to add `--project searchable-dropdown` or else it will be added to the default project in your `angular.json` file.  -->

<!-- ## Build

Run `ng build searchable-dropdown` to build the project. The build artifacts will be stored in the `dist/` directory. -->

<!-- ## Publishing

After building your library with `ng build searchable-dropdown`, go to the dist folder `cd dist/searchable-dropdown` and run `npm publish`. -->

<!-- ## Running unit tests

Run `ng test searchable-dropdown` to execute the unit tests via [Karma](https://karma-runner.github.io). -->

<!-- ## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->

## Note
`This component does not use JQUERY`

## How to use

**This component accepts a tuple {key: value} array.**

**Two way bindings**
```typescript
[(value)] updates when the value inside the textfield changes
[(key)] Updates when the key is updated.
``` 

**Event Emitters**
```typescript
(onSearch) emits searched value after 500ms
(onStart) emits on the start 
(onOpen) emits when dropDown opens.
``` 

**Inputs**
```typescript
[defaultItem]={key: 1, value="hamza"} default values to set
``` 

**Public Methods**
```typescript
dropDown.showAddNewItemSection() Show/Hide addItemScreen
```

**Public variables**
```typescript
dropDown.value; return the value inside the textfield
dropDown.key; return the key/id of the element
```

**populating the list**
```typescript
  dropDown.isListLoading = true;
  dropDown.itemsToShow.push({key: 2, value: 'test'});
  dropDOwn.isListLoading = false;
``` 
```html
<app-searchableDropDown #dropDown [(value)]="variableValue" [(key)]="variableKey"
    (onSearch)="getEnrollments(dropDown)" 
    (onStart)="getEnrollments(dropDown)"
    [defaultItem]="{key: 1, value: 'hamza'}">

    <div class="add-new-section">
    //Enter all the elemets here.

        <button class="arow-icn" (click)="dropDown.showAddNewItemSection()">
            <i class="fa fa-arrow-left"></i>Back
        </button>
        <div class="col-sm-12">
            <div class="form-group text-left">
                <label for="name">Enter Something</label>
                <input type="number" placeholder="Enter a Value" class="form-control">
            </div>
        </div>
        <div class="col-sm-12">
            <button class="btn btn-primary w-100"
              >Save</button>
        </div>
    </div>
</app-searchableDropDown>
```

                
## Contact
`found any mistakes? have a better idea of doing it? please let me know at hamza13sw185@gmail.com`

## Change logs
`Version 0.0.9`
`@Input entereValue removed. user @Input value instead of enteredValue`
`@Input placeHolder added.`
`@Output onOpen Added, this event is emitted when the dropdown opens.`


`Version 0.0.8`
`Bug fix: onStart EventEmitter now works correctly.`
