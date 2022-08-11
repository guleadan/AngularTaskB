import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { sample } from 'rxjs';
import { Task } from '../to-do-list.module';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() newTask=new EventEmitter<string>();
  sample!: Task;

  constructor() { 
    

  }
  ngOnInit(): void {
  }
  addNewTask(task:string){
  
    // let alpha=task+','+desc;
    this.newTask.emit(task);
  }

}
