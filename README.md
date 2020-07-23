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
ng5:
	cd coronavirus-cases && ng add @angular/material


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
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body class="mat-typography">
  <app-root></app-root>
</body>
</html>

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';

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
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
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
import { ApiService } from '../api.service';
import { Cases } from '../cases';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  displayedColumns: string[] = ['name','age','status'];
  data: Cases[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCases()
    .subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    }

    );

  }

}

```
### ../../../app05/coronavirus-cases/src/app/cases/cases.component.html 
```
<p>cases works!</p>
<div class='example-container mat-elevation-z8'>
  <h2>Corona Virus Cases List</h2>
  <div class="example-loading-shade"
    *ngIf="isLoadingResults">
    <mat-spinner *ngIf="isLoadingResults"></mat-spinner>
  </div>
  <div class="button-row">
      <a mat-flat-button color="primary" [routerLink]="['add-cases']"><mat-icon>add</mat-icon>Cases</a>
      <a mat-flat-button color="accent"  [routerLink]="['cases-stat']"><mat-icon>bar_char</mat-icon>Statistic</a>
  </div>
  <div class="mat-elevation-z8">
      <table mat-table [dataSource]="data" class="example-table"
            matSort matSortActive="name" matSortDisableClear matSortDirection="asc">

            <ng-container matColumnDef="name">
                <th mat-header-cell *matHeaderCellDef>Cases Name</th>
                <td mat-cell *matCelDef="let row">{{row.name}}</td>
            </ng-container>

            <ng-container matColumnDef="age">
                <th mat-header-cell *matHeaderCellDef>Cases Age</th>
                <td mat-cell *matCelDef="let row">{{row.age}}</td>
            </ng-container>

            <ng-container matColumnDef="status">
                <th mat-header-cell *matHeaderCellDef>Cases Status</th>
                <td mat-cell *matCelDef="let row">{{row.status}}</td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;" [routerLink]="['/cases-details/', row._id]"></tr>

      </table>
  </div>
</div>
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
import { ActivatedRoute, Router } from '@angular/router';
import { Cases } from '../cases';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cases-details',
  templateUrl: './cases-details.component.html',
  styleUrls: ['./cases-details.component.css']
})
export class CasesDetailsComponent implements OnInit {

  cases: Cases = { _id: '', name: '', gender: '', age: null, address: '', 
    city: '', country: '', status: '', updated: null};
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getCasesDetails(this.route.snapshot.params.id);
  }

  getCasesDetails(id: string){
    this.api.getCasesById(id)
      .subscribe((data: any) => {
        this.cases = data;
        console.log(this.cases);
        this.isLoadingResults = false;
      });
  }
  deleteCases(id: string){
    this.isLoadingResults = true;
    this.api.deleteCases(id)
      .subscribe( res => {
        this.isLoadingResults = false;
        this.router.navigate(['/cases']);
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}

```
### ../../../app05/coronavirus-cases/src/app/cases-details/cases-details.component.html 
```
<p>cases-details works!</p>
<div class="example-container mat-elevation-z8">
  <h2>Corona Virus Cases Details</h2>
  <div class="example-loading-shade" *ngIf="isLoadingResults">
      <mat-spinner *ngIf="isLoadingResults"></mat-spinner>
  </div>
  <div class="button-row">
      <a mat-flat-button color="primary" [routerLink]="['/cases']"><mat-icon>list</mat-icon></a>
  </div>
  <mat-card class="example-card">
    <mat-card-header>
        <mat-card-title><h2>{{cases.name}}</h2></mat-card-title>
        <mat-card-subtitle>{{cases.age}} years old</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
        <dl>
            <dt>Gender:</dt>
            <dd>{{cases.gender}}</dd>
            <dt>Address:</dt>
            <dd>{{cases.address}}</dd>\
            <dt>City:</dt>
            <dd>{{cases.city}}</dd>
            <dt>Country:</dt>
            <dd>{{cases.country}}</dd>
            <dt>Status:</dt>
            <dd><h2>{{cases.status}}</h2></dd>
        </dl>
    </mat-card-content>
    <mat-card-actions>
        <a mat-flat-button color="primary" [routerLink]="['/edit-cases', cases._id]">
            <mat-icon>edit</mat-icon> Cases</a>
        <a mat-flat-button color="warn" (click)="deleteCases(cases._id)"><mat-icon>delete</mat-icon> Cases</a>
    </mat-card-actions>
  </mat-card>
</div>

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
export class Statistic {
    _id: any;
    count: number;
}
```
### ../../../app05/coronavirus-cases/src/app/api.service.ts 
```
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cases } from './cases';
import { Statistic } from './statistic';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
const apiUrl = '/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 

  }
  private handleError<T>(operation = 'operation', result?:T){
    return(error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getCases(): Observable<Cases[]>{
    return this.http.get<Cases[]>(`${apiUrl}`)
      .pipe(
        tap(cases => console.log('fetched cases') ),
        catchError(this.handleError('getCases',[]))
      );
  }
  getCasesById(id: string): Observable<Cases> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Cases>(url)
    .pipe(
      tap( _ => console.log(`fetched cases id=${id}`) ),
      catchError(this.handleError<Cases>(`getCasesById id=${id}`))
    );
  }
  addCases(cases: Cases): Observable<Cases>{
    return this.http.post<Cases>(apiUrl, cases, httpOptions)
      .pipe(
        tap((c: Cases) => console.log(`added cases w/ id=${c._id}`)),
        catchError(this.handleError<Cases>('addCases'))
      );
  }
  updateCases(id: string, cases: Cases): Observable<any>{
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, cases, httpOptions)
    .pipe(
      tap( _ => console.log(`updated cases id=${id}`)),
      catchError(this.handleError<any>('updateCases'))
    );
  }
  deleteCases(id: string): Observable<Cases> {
    const url =`${apiUrl}/${id}`;
    return this.http.delete<Cases>(url, httpOptions)
      .pipe(
        tap( _ => console.log(`deleted cases id=${id}`)),
        catchError(this.handleError<Cases>('deleteCases'))
      );
  }
  getStatistic(status: string): Observable<Statistic> {
    const url = `${apiUrl}/daily/${status}`;
    return this.http.get<Statistic>(url)
      .pipe(
        tap( _ => console.log(`fetched statistic status=${status}`) ),
        catchError( this.handleError<Statistic>(`getStatistic status=${status}`))
      );

  }
}

```
