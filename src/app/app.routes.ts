import { Routes } from '@angular/router';
import { AddEmployeeComponent } from '../Components/add-employee/add-employee.component';
import { DataBindingComponent } from '../Components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from '../Components/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from '../Components/attribute-directive/attribute-directive.component';
import { PipeComponent } from '../Components/pipe/pipe.component';

export const routes: Routes = [
  {
    path: 'add-emp',
    component: AddEmployeeComponent,
  },
  {
    path: 'data-bind',
    component: DataBindingComponent,
  },
  {
    path: 'structural-dir',
    component: StructuralDirectiveComponent,
  },
  {
    path: 'attribute-dir',
    component: AttributeDirectiveComponent,
  },
  {
    path: 'pipe',
    component: PipeComponent,
  },
];
