import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css',
})
export class AttributeDirectiveComponent {
  check = false;
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;
  isDiv3Visible: boolean = true;
  box1Div3: string = '';
  box2Div3: string = '';
  data: { nickName: string; roll: string; status: boolean }[] = [
    { nickName: 'Kashfa', roll: '122', status: true },
    { nickName: 'Rafsan', roll: '123', status: false },
    { nickName: 'Siam', roll: '124', status: false },
    { nickName: 'Yeam', roll: '125', status: true },
  ];
  customStyle: any = {
    border: '5px solid #dcdcdc',
  };
  // ----------------------------------------------------------------
  div1BgColor: string = 'bg-success';
  div2BgColor = true;

  hideDiv1() {
    this.div1BgColor = 'bg-danger';
  }
  showDiv2() {
    this.div1BgColor = 'bg-success';
  }
  toggleDiv2() {
    this.div2BgColor = !this.div2BgColor;
  }
}
