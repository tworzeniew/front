import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponentComponent } from '../mainModule/main-component/main-component.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { CarDetailComponent } from '../car-detail/car-detail.component';
import { MainModuleRoutingModule } from './main-module-routing.module';
import { FaqComponent } from '../faq/faq.component';

@NgModule({
  declarations: [
    MainComponentComponent,
    BookDetailComponent,
    CarDetailComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
