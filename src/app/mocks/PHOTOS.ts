import {ImageResponse} from "../components/models/image.mode";

export const PHOTOS: ImageResponse[] =
  [
    {
      "id": "1",
      "title": "Vacaciones con la familia",
      "description": "En esta imagen estamos con la familia disfrutando de un viaje por las islas griegas.",
      "images": {
        "small": "https://rememora.sitehub.es/api/v1/images/atenas.jpeg",
        "medium": "https://rememora.sitehub.es/api/v1/images/atenas.jpeg",
        "large": "https://rememora.sitehub.es/api/v1/images/atenas.jpeg",
      },
      "publish_date": "2023-11-08"
    },
    {
      "id": "2",
      "title": "Viaje al parque de atracciones",
      "description": "En esta imagen estamos con los amigos en Disney Land París",
      "images": {
        "small": "https://rememora.sitehub.es/api/v1/images/paris.jpg",
        "medium": "https://rememora.sitehub.es/api/v1/images/paris.jpg",
        "large": "https://rememora.sitehub.es/api/v1/images/paris.jpg",
      },
      "publish_date": "2023-11-11"
    },
    {
      "id": "3",
      "title": "Barbaco en el campo",
      "description": "Barbacoa con amigos y familiares",
      "images": {
        "small": "https://rememora.sitehub.es/api/v1/images/barbacoa.jpg",
        "medium": "https://rememora.sitehub.es/api/v1/images/barbacoa.jpg",
        "large": "https://rememora.sitehub.es/api/v1/images/barbacoa.jpg",
      },
      "publish_date": "2023-11-11"
    }
  ]
