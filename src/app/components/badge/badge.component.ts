import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})

export class BadgeComponent implements OnInit {

  constructor() { }
  hidden = false;
  badgeMessage: string = 'This is default badge message"';
  numOfNoti: string = '1';
  selectedPos: string = 'before above';
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
    { id : 1, value: 'after above' },
    { id : 2, value: 'after below' },
    { id : 3, value: 'before above' },
    { id : 3, value: 'before below' },
  ];

  badgeVisibility = [
    { id : '1',  value: "hidden" },
    { id : '2', value: "unhide" },
  ];

  badgeColor = [
    { id : '1',  value: "primary" },
    { id : '2', value: "accent" },
    { id : '3', value: "warn" },
  ];
  ngOnInit(): void {
  }

  toggleBadgeVisibility(): void {
    this.hidden = !this.hidden;
  }

  onBadgePositionChanged(data: number): void{
    this.selectedPos = this.badgePositions[data].value;
    console.log(this.selectedPos);
  }
}
