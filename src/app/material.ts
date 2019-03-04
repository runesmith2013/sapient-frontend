import {MatButtonModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';


@NgModule ({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatInputModule, MatFormFieldModule, MatListModule, MatCardModule, MatTableModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatInputModule, MatFormFieldModule, MatListModule, MatCardModule, MatTableModule]
})


export class MaterialModule {}
