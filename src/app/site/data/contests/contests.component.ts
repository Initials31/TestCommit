import { Component, OnInit } from '@angular/core';
import { ContestserviceService } from 'src/app/service/dataservice/contestservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contest } from 'src/app/Models/contests';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.css']
})
export class ContestsComponent implements OnInit {

  listContests: Contest[];

  constructor(private contestService: ContestserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.listContests;
    this.contestService.getAllContests()
      .subscribe(
        data => this.listContests = data);
  }

  public deleteContest(id: number) {
    this.contestService.deleteContest(id)
    .subscribe(
      data => this.ngOnInit()
    )
  }
}
