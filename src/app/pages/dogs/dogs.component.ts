import { Component, inject } from '@angular/core';
import {DogsService} from "../../services/dogs.service";
@Component({
  selector: 'app-Dogs',
  standalone: true,
  imports: [],
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.css'
})
export class DogsComponent {
  imgDog: string = ''
  private _DogsService = inject(DogsService)
  getDog(){
    this._DogsService.getDog().subscribe((data)=>{
      this.imgDog = this._DogsService.processDog(data)
    })
  }
}

