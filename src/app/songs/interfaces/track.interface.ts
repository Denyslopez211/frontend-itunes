export interface Track {
  total_albumes: number;
  total_canciones: number;
  albumes: string[];
  canciones: Song[];
}

export interface Song {
  cancion_id: string;
  nombre_album: string;
  nombre_tema: string;
  preview_url: string;
  fecha_lanzamiento: string;
  precio: Precio;
}

interface Precio {
  valor: number;
  moneda: string;
}
