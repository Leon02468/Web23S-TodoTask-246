import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HometaskRoutingModule } from './hometask-routing.module';
import { HometaskComponent } from './hometask.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskInfoComponent } from './components/task-info/task-info.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HometaskComponent,
    AddTaskComponent,
    TaskInfoComponent,
  ],
  imports: [
    CommonModule,
    HometaskRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class HometaskModule { }
