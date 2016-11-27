import {Component, Output, EventEmitter} from '@angular/core';
import {Todo} from '../../shared/todo.model';
import { TodoService } from '../../shared/todo.service';

@Component ({
  selector: 'todo-form',
  templateUrl: './app/components/todo-form/todo-form.component.html',
  styleUrls: ['./app/components/todo-form/todo-form.component.css']
})

export class TodoFormComponent {
  @Output() added = new EventEmitter();

  constructor (private todoService: TodoService) {}

  add(title: string): void {
    if (title) {
      let todo = new Todo(title);
      this.todoService.addTodo(todo);
    }
  }
}
