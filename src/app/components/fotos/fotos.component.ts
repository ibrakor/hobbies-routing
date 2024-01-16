import {Component, OnInit} from '@angular/core';
import {ImageResponse} from "../models/image.mode";
import {MockService} from "../../services/mock.service";

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.css'
})
export class FotosComponent implements OnInit{

  photos: ImageResponse[]
  constructor(private photoService: MockService) {
  }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(result =>
      this.photos = result
    )
  }



}
