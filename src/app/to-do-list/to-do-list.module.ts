import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';




@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule
  ],
  exports:[ParentComponent, ChildComponent]
})
export class ToDoListModule { }
export class Task{
  task: string
  desc:string
  constructor(task:string, desc:string) {
    this.desc=desc;
    this.task=task;
  }

  
}
