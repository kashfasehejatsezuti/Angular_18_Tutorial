import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from "../Components/add-employee/add-employee.component";
import { DataBindingComponent } from "../Components/data-binding/data-binding.component";
import { StructuralDirectiveComponent } from "../Components/structural-directive/structural-directive.component";
import { AttributeDirectiveComponent } from "../Components/attribute-directive/attribute-directive.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddEmployeeComponent, DataBindingComponent, StructuralDirectiveComponent, AttributeDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
