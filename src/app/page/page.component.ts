import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../shared/services/content.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  page: object;

  constructor(private route: ActivatedRoute,
              private contentService: ContentService) { }

  ngOnInit() {
    const pageData = this.route.snapshot.data.page;
    console.log('fjdksla;', this.contentService.pages);
    this.page = this.contentService.pages[pageData];
  }

}
