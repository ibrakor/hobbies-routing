import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ImageResponse} from "../components/models/image.mode";
import {of} from "rxjs";
import {PHOTOS} from "../mocks/PHOTOS";
import {VIDEOS} from "../mocks/VIDEOS.TS";
import {MUSIC} from "../mocks/MUSIC";

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private apiUrl = "https://rememora.sitehub.es/api/v1/images/images.json"

  constructor(private http: HttpClient) { }

  getPhotos(){
    return of(PHOTOS)
  }

  getVideos(){
    return of(VIDEOS)
  }
  getMusic(){
    return of(MUSIC)
  }
}
