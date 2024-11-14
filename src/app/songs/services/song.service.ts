import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '@environments/environments';
import { ErrorService } from '../../Interceptor/error.service';
import { Song, Track } from '../interfaces/track.interface';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private http = inject(HttpClient);
  private readonly errorService = inject(ErrorService);

  private url: string = environment.baseUrl;
  private _loading = signal<boolean>(true);
  private _songs = signal<Song[]>([]);

  public songs = computed(() => this._songs());
  public loading = computed(() => this._loading());

  public loadSongsApi(name: string): Observable<Song[]> {
    return this.http
      .get<Track>(`${this.url}/search_tracks?name=${name}`)
      .pipe(map((track) => track.canciones));
  }

  public getSongs(name: string): void {
    this._loading.set(false);
    this.getSongsApi(name);
  }

  private getSongsApi(name: string): void {
    this.loadSongsApi(name).subscribe({
      next: (songs: Song[]) => {
        this.saveResponse(songs);
      },
      error: (err: HttpErrorResponse) => {
        this.errorService.messageError(err);
        this._loading.set(true);
      },
    });
  }

  private saveResponse(songs: Song[]): void {
    this._songs.set(songs);
    this._loading.set(true);
  }
}
