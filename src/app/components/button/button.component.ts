import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  public states = [
    { id : '1', state: "Disabled", value: true },
    { id : '2', state: "Enabled", value: false },
  ]
  public selectedState : boolean = false
  public selectedColor: string = ""
  public selectedIcon: string = "favorite"
  btnText: string = "Default Txt"
  colors = [
    { id : '1', color: 'primary'},
    { id : '2', color: 'accent'},
    { id : '3', color: 'warn'},
    { id : '3', color: 'success'}
  ];

  public icons = [
    { id : '1', icon: 'delete'},
    { id : '2', icon: 'bookmark'},
    { id : '3', icon: 'home'},
    { id : '3', icon: 'favorite'}
  ];

  ngOnInit(): void {
  }
  onIconChanged(data: number):void{
    this.selectedIcon = this.icons[data].icon
    console.log(this.selectedIcon);
  }
  onStateChanged(data:number):void {
    this.selectedState = this.states[data].value
    console.log(this.selectedState)
  }
  onColorChanged(data:number): string {
    this.selectedColor = this.colors[data].color
    console.log(this.selectedColor)
    return this.selectedColor
  }
  onTextChanged(event: any): void {
    console.log(event.value)
  }
}
