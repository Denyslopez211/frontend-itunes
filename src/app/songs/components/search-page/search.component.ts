import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatIconModule } from '@angular/material/icon';
import { SongService } from '@services/song.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export default class SearchComponent {
  private songService = inject(SongService);

  searchSong(name: string) {
    if (name.trim().length > 3) {
      this.songService.getSongs(name);
    }
  }
}
