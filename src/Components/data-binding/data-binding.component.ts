import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  name: string = 'Angular 18 '; //variable declaration with initialization
  email: string = 'abc@gmail.com';
  password: string = '1234';
  id: number = 1;
  inputType = 'checkbox'; // directly variable initialization
  isBangladeshi = true;
  currentDate: Date = new Date();
  textColor: string = 'color-red';
  selectArea: string = 'Dhaka';
  fullName = signal('Kashfa Sehejat Sezuti');
  

  constructor() {
    // this.name = 'Angular';
    // this.id = 0;
    // this.inputType = 'radio';
  }

  showAlert(message: string) {
    alert(message);
  }
  changeName(newName: string) {
    this.name = newName;
    this.fullName.set('Sezuti Chowdhury');
  }
}
