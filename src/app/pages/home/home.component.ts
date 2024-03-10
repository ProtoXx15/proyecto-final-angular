import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.animateText();
  }

  animateText() {
    setTimeout(() => {
      let nameElement = document.getElementById('name') as HTMLElement;
      if (nameElement) {
        nameElement.style.display = 'inline';
        setTimeout(() => {
          nameElement.style.color = 'orange'; // naranjita Bootstrap
          nameElement.style.fontSize = '48px';
        }, 1000);
      }
    }, 2000);
  }
}
