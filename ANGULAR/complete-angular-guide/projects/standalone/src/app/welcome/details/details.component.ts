import { Component } from '@angular/core';
import { AnalyticsService } from '../../shared/analytics.service';
import { HighlightDirective } from '../../shared/highlight.directive';

@Component({
  standalone:true,
  imports: [HighlightDirective],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  // providers: [AnalyticsService] this is possible but component gets its own object. If same service is 
  // used for multiple instances of a component so we get multiple instance of service as well. which is
  // not efficient  
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
