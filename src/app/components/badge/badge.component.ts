import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})

export class BadgeComponent implements OnInit {

  constructor() { }
  hidden = false;
  badgeMessage: string = 'This is default badge message';
  numOfNotification: string = '1';
  selectedPos: string = 'above after';
  selectedColor: string = 'primary'
  selectedSize: string = 'small'
  hasOverlap: boolean=  true;
  public badgeOverlap = [
    { id : '1',  value: true },
    { id : '2',  value: false },
  ];

  public badgeSizes = [
    { id : '1',  value: 'small' },
    { id : '2', value: 'medium' },
    { id : '3', value: 'large' },
  ];

  public badgePositions = [
    { id : '1', value: 'above after' },
    { id : '2', value: 'above before' },
    { id : '3', value: 'below after' },
    { id : '4', value: 'below before' },
  ];

  badgeVisibility = [
    { id : '1',  value: "hidden" },
    { id : '2', value: "unhide" },
  ];

  badgeColors = [
    { id : '1',  value: "primary" },
    { id : '2', value: "accent" },
    { id : '3', value: "warn" },
  ];
  ngOnInit(): void {
  }

  toggleBadgeVisibility(): void {
    this.hidden = !this.hidden;
  }
  onBadgeSizeChanged(data:number):void{
    this.selectedSize = this.badgeSizes[data].value;
    console.log(this.selectedSize);
  }
  onBadgeColorChanged(data:number):void {
    this.selectedColor = this.badgeColors[data].value;
    console.log(this.selectedColor);
  }
  onBadgePositionChanged(data: number): void{
    this.selectedPos = this.badgePositions[data].value;
    console.log(this.selectedPos);
  }
  onOverlapChanged(data: boolean):void{
    this.hasOverlap = data
    console.log(this.hasOverlap);
  }
}
