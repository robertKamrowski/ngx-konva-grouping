# NgxKonvaGrouping

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.11.

## Presets

1. Node version `18`

## Setup

1. `cd ngx-konva-grouping`
2. `npm install && ng serve`

## Issue

Look at app.component.html and app.component.ts.

Within this component, I'm invoking a loop through all objects for which I want to create a group using the ngx-konva library. The current implementation lies in the fact that only one group of objects is always created. With this implementation, I expected two groups to be created, each containing one circle and one rectangle.


