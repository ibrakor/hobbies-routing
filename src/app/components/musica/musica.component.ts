import { Component } from '@angular/core';
import {ImageResponse} from "../models/image.mode";
import {MockService} from "../../services/mock.service";
import {MusicModel} from "../models/music.model";

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.css'
})
export class MusicaComponent {

  musicModels: MusicModel[]
  constructor(private photoService: MockService) {
  }

  ngOnInit(): void {
    this.photoService.getMusic().subscribe(result =>
      this.musicModels = result
    )
  }

}
