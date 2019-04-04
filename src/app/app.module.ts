import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './learning-form/form.component';
import { TemplateDrivenFormComponent } from './learning-form/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './learning-form/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LearningServiceComponent } from './learning-service/learning-service.component';
import { ComponentAComponent } from './learning-service/component-a/component-a.component';
import { ComponentBComponent } from './learning-service/component-b/component-b.component';
import { LearningHttpComponent } from './learning-http/learning-http.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    LearningServiceComponent,
    ComponentAComponent,
    ComponentBComponent,
    LearningHttpComponent,
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
