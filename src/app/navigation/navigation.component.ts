import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {


  
  fillerNav = [
    {
      id: '1', name:'Button', url: '/button'
    },
    {
      id: '2', name:'Badge', url: '/badge'
    },
  ]
  selectedNavMode: string = "side"
  selectedBackDrop: boolean = true
  backDropOptions = [
    {
      id: '1', value: true
    },
    {
      id: '2', value: false
    },
  ]
  sideNavMode = [
    {
      id: '1', value:'side'
    },
    {
      id: '2', value:'over'
    },
    {
      id: '3', value:'push'
    },
  ]
  headings: Element[] | undefined;
  constructor(
    private elementRef: ElementRef<HTMLElement>,
  ) { }
  onLoad(): void {
    this.stripContent();
    this.setHeadings();
  }

  private setHeadings(): void {
    const headings: Element[] = [];
    this.elementRef.nativeElement
      .querySelectorAll('h2')
      .forEach(x => headings.push(x));
    this.headings = headings;
  }

  private stripContent(): void {
    this.elementRef.nativeElement
      .querySelector('markdown')!
      .querySelectorAll('markdown > p:nth-child(-n + 2), #ngx-markdown, #table-of-contents + ul, #table-of-contents')
      .forEach(x => x.remove());
  }
}
