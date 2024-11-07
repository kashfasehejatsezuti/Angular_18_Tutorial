import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css',
})
export class StructuralDirectiveComponent {
  check = false;
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;
  isDiv3Visible: boolean = true;
  box1Div3: string = '';
  box2Div3: string = '';
  nickName: string[] = ['Kashfa', 'Rafsan', 'Siam', 'Yeam'];

  hideDiv1() {
    this.isDiv1Visible = false;
  }
  showDiv2() {
    this.isDiv1Visible = true;
  }
  toggleDiv2() {
    // this.isDiv2Visible = !this.isDiv2Visible;
    if (this.isDiv2Visible == true) {
      this.isDiv2Visible = false;
    } else {
      this.isDiv2Visible = true;
    }
  }
}
