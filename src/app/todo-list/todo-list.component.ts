import { Component, OnInit, ViewChild, AfterViewInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit  {
  @Output() intervalFired = new Subject<number>()
  @ViewChild('f', { static: false }) signupForm: NgForm;
  todoList: object[] = [];
  completedArray: object[] = [];
  todoArrayCompleted: any[] = [];
  deleteIcon = '&#x2702';
  completedTodo;
  viewTodo = false;
  id: number;

  count = 0;
  interval;

  constructor() { }

  ngOnInit() {

  }

  onAddTodo(todo: string) {
    this.todoList.push({id: (this.todoList.length + 1) - 1, todo: todo})
    this.signupForm.reset();
  }

  ondeleteTodo(id: number){
    this.todoList.splice(id, 1)
  }

  onCompleted(id: number){
    this.viewTodo = true
    this.completedArray.push(...this.todoList.splice(id, 1))
  }

  onTodoCompleteDelete(id: number) {
    this.completedArray.splice(id, 1)
  }

  onReverseTodoCompleted(id: number) {
  this.todoList.push(this.completedArray[id]);
  this.todoList = this.todoList.sort((a,b) =>{ return a["id"] - b["id"]});
  this.completedArray.splice(id, 1);
  }

  // startTime(){
  //   this.interval = setInterval(() => {
  //     // this.intervalFired.next(this.count);
  //     this.count++
  //   },1000)
  // }

}

