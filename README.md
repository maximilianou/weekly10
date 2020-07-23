### ../../../app05/Makefile 
```
ng1:
	npm install -g @angular/cli
	ng new coronavirus-cases
ng2:
	cd coronavirus-cases && ng serve --open
ng3:
	cd coronavirus-cases && ng g component cases
	cd coronavirus-cases && ng g component cases-details
	cd coronavirus-cases && ng g component add-cases
	cd coronavirus-cases && ng g component edit-cases
	cd coronavirus-cases && ng g component cases-stat
ng4:
	cd coronavirus-cases && ng g service api



```
### ../../../app05/coronavirus-cases/src/index.html 
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>CoronavirusCases</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>

```
### ../../../app05/coronavirus-cases/src/main.ts 
```
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```
### ../../../app05/coronavirus-cases/src/app/app.module.ts 
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasesComponent } from './cases/cases.component';
import { CasesDetailsComponent } from './cases-details/cases-details.component';
import { AddCasesComponent } from './add-cases/add-cases.component';
import { EditCasesComponent } from './edit-cases/edit-cases.component';
import { CasesStatComponent } from './cases-stat/cases-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    CasesDetailsComponent,
    AddCasesComponent,
    EditCasesComponent,
    CasesStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
### ../../../app05/coronavirus-cases/src/app/app.component.ts 
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coronavirus-cases';
}

```
### ../../../app05/coronavirus-cases/src/app/app.component.html 
```
<h2>corona virus</h2>
<div class="container">
  <router-outlet></router-outlet>
</div>
```
### ../../../app05/coronavirus-cases/src/app/app.component.css 
```
.container {
  padding: 20px;
}
```
### ../../../app05/coronavirus-cases/src/app/app-routing.module.ts 
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { CasesDetailsComponent } from './cases-details/cases-details.component';
import { CasesStatComponent } from './cases-stat/cases-stat.component';
import { AddCasesComponent } from './add-cases/add-cases.component';
import { EditCasesComponent } from './edit-cases/edit-cases.component';

const routes: Routes = [
  {
    path: 'cases',
    component: CasesComponent,
    data: { title: 'List of Cases'}
  },
  {
    path: 'cases-details/:id',
    component: CasesDetailsComponent,
    data: { title: 'Cases Destails'}
  },
  {
    path: 'cases-stats',
    component: CasesStatComponent,
    data: { title: 'Cases Statistics'}
  },
  {
    path: 'add-cases',
    component: AddCasesComponent,
    data: { title: 'Add Cases'}
  },
  {
    path: 'edit-cases',
    component: EditCasesComponent,
    data: { title: 'Edit Cases'}
  },
  {
    path: '',
    redirectTo: '/cases',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```
### ../../../app05/coronavirus-cases/src/app/cases/cases.component.ts 
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

```
### ../../../app05/coronavirus-cases/src/app/cases/cases.component.html 
```
<p>cases works!</p>

```
### ../../../app05/coronavirus-cases/src/app/add-cases/add-cases.component.ts 
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cases',
  templateUrl: './add-cases.component.html',
  styleUrls: ['./add-cases.component.css']
})
export class AddCasesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

```
### ../../../app05/coronavirus-cases/src/app/add-cases/add-cases.component.html 
```
<p>add-cases works!</p>

```
### ../../../app05/coronavirus-cases/src/app/edit-cases/edit-cases.component.ts 
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-cases',
  templateUrl: './edit-cases.component.html',
  styleUrls: ['./edit-cases.component.css']
})
export class EditCasesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

```
### ../../../app05/coronavirus-cases/src/app/edit-cases/edit-cases.component.html 
```
<p>edit-cases works!</p>

```
### ../../../app05/coronavirus-cases/src/app/cases-details/cases-details.component.ts 
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases-details',
  templateUrl: './cases-details.component.html',
  styleUrls: ['./cases-details.component.css']
})
export class CasesDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

```
### ../../../app05/coronavirus-cases/src/app/cases-details/cases-details.component.html 
```
<p>cases-details works!</p>

```
### ../../../app05/coronavirus-cases/src/app/cases-stat/cases-stat.component.ts 
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases-stat',
  templateUrl: './cases-stat.component.html',
  styleUrls: ['./cases-stat.component.css']
})
export class CasesStatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

```
### ../../../app05/coronavirus-cases/src/app/cases-stat/cases-stat.component.html 
```
<p>cases-stat works!</p>

```
### ../../../app05/coronavirus-cases/src/app/cases.ts 
```
export class Cases{
    _id: string;
    name: string;
    gender: string;
    age: number;
    address: string;
    city: string;
    country: string;
    status: string;
    updated: Date;
};
```
### ../../../app05/coronavirus-cases/src/app/statistic.ts 
```
export class Statitistic {
    _id: any;
    count: number;
}
```
### ../../../app05/coronavirus-cases/src/app/api.service.ts 
```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}

```
