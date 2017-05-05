import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdButtonModule,
  MdListModule,
  MdIconModule,
  MdSidenavModule,
  MdCheckboxModule,
  MdTabsModule,
  MdProgressSpinnerModule,
  MdInputModule,
  MdDialogModule,
  MdSelectModule,
  MdRippleModule,
  MdMenuModule,
  MdChipsModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdTabsModule,
    MdProgressSpinnerModule,
    MdInputModule,
    MdDialogModule,
    MdSelectModule,
    MdRippleModule,
    MdMenuModule,
    MdChipsModule,
    MdToolbarModule
  ],
  declarations: [],
  exports: [
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdTabsModule,
    MdProgressSpinnerModule,
    MdInputModule,
    MdDialogModule,
    MdSelectModule,
    MdRippleModule,
    MdMenuModule,
    MdToolbarModule
  ]
})
export class MaterialModule { }
