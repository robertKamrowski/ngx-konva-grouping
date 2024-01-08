import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  groups: any[] = [
    // First group
    {
      rectangles: [
        {
          x: 80,
          y: 20,
          width: 100,
          height: 50,
          fill: 'green',
          stroke: 'black',
          strokeWidth: 1,
        }
      ],
      circles: [
        {
          radius: 30,
          fill: 'blue',
          stroke: 'black',
          strokeWidth: 1,
          x: 40,
          y: 40
        }
      ]
    },
    // Second group
    {
      rectangles: [
        {
          x: 200,
          y: 300,
          width: 100,
          height: 50,
          fill: 'green',
          stroke: 'black',
          strokeWidth: 1,
        }
      ],
      circles: [
        {
          radius: 30,
          fill: 'blue',
          stroke: 'black',
          strokeWidth: 1,
          x: 400,
          y: 400
        }
      ]
    }
  ]
}


