import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCategoryComponent } from './components/content-category/content-category.component';
import { ContentDetailsComponent } from './components/content-details/content-details.component';

@NgModule({
  declarations: [ContentCategoryComponent, ContentDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentCategoryComponent, ContentDetailsComponent]
})
export class CoreModule { }
