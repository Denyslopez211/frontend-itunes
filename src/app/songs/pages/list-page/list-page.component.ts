import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { TableComponent } from '../../components/table/table.component';
import { TitleComponent } from '@shared/components/title/title.component';
import SearchComponent from '../../components/search-page/search.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [MatDividerModule, TableComponent, SearchComponent, TitleComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css',
})
export default class ListPageComponent {
  public displayedColumns: string[] = ['song', 'album', 'url', 'price', 'date'];
}
