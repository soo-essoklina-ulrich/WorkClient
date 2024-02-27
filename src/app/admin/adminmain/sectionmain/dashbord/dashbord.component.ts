import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../../../service/weather/weather.service";
import {UserService} from "../../../../service/user/user.service";
import {TodoItem} from "../../../../interface/allinterface";
import {FormGroup} from "@angular/forms";
import {FormulaireService} from "../../../../service/form/formulaire.service";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent implements OnInit{
    city: string = 'Lome';
    weatherData: any ;
    userCount: number = 0;
    todoForm!: FormGroup;

    TODO_ITEM: TodoItem[] = [];

    ngOnInit(): void {
        this.getWeather();
        this.getCountUser();
        this.FormTodo();
    }

    constructor(
      private weatherService: WeatherService,
      private userService: UserService,
      private formBuilder: FormulaireService
    ) {

    }

    getWeather() {
      this.weatherService.getWeatherByCity(this.city).subscribe(
        (res) => {
        this.weatherData = res;
        // console.log(this.weatherData);
      },
      (error) => {
        console.log(error);
      }
      )
    }

    getCountUser(){
      this.userService.countUser().subscribe(
        (res) => {
          this.userCount = res;
        },
        (error) => {
          console.log(error);
        }
      )
    }

    FormTodo(){
      return this.todoForm = this.formBuilder.buildTODOForm();

    }

  todoSubmit() {
    const todo:TodoItem = {
      id: this.TODO_ITEM.length + 1,
      todo: this.todoForm.value.todo,
      completed: false
    }
    this.TODO_ITEM.push(todo);
    this.todoForm.reset();


  }

  delete(id: number) {
      const result = this.TODO_ITEM.find((todo) => todo.id === id);
    if (result) {
      this.TODO_ITEM.splice(this.TODO_ITEM.indexOf(result), 1);
    }else {
      console.log("todo not found");
    }

  }

  complete(id: number) {
      const todoIndex = this.TODO_ITEM.findIndex(todo => todo.id === id);
    if (todoIndex != -1) {
      if(!this.TODO_ITEM[todoIndex].completed){
        this.TODO_ITEM[todoIndex].completed = true;

      }else if (this.TODO_ITEM[todoIndex].completed){
        this.TODO_ITEM[todoIndex].completed = false;

      }

    }
  }
}
