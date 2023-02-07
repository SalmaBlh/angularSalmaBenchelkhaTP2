import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
  tasks: string[] = [];
  taskToAdd: string = '';

  add() {
    this.tasks.push(this.taskToAdd);
    this.taskToAdd = '';
  }

  delete(i: number) {
    this.tasks.splice(i, 1);
  }

  ngOnInit(): void {
    throw new Error('Méthode non implémenté.');
  }
}
