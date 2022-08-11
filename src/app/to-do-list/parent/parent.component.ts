import { Component, OnInit } from '@angular/core';
import { Task } from '../to-do-list.module';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
taskList:Task[]
check="alpha"+','+"hdhhs";
  constructor() {
    this.taskList=[
      {task:"make tea",
    desc:"have tea with baba at 7pm and have some conversation with him"}
    ]
   }

  ngOnInit(): void {
  }
  addTask(task: any){
   
    // this.taskList.push({task:task.split(',')[0], desc:task.split(',')[1]});
    console.log(task);
  }

}
