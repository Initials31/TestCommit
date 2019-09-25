import { Component, OnInit } from '@angular/core';
import { EventserviceService } from 'src/app/service/dataservice/eventservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  listEvents: Event[];

  constructor(private eventService: EventserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {


    this.listEvents;
    this.eventService.getAllEvents()
      .subscribe(
        data => this.listEvents = data);
     
      }


      public deleteEvent(id: number) {
        this.eventService.deleteEvent(id)
        .subscribe(
          data => this.ngOnInit()
        )
      }

}
