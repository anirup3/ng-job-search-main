import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Model } from '../../models/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-favouritejobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favouritejobs.component.html',
  styleUrl: './favouritejobs.component.css'
})
export class FavouritejobsComponent implements OnInit, OnDestroy{

  favjobLists: Model[] = [];
  subscription: Subscription = new Subscription();

  constructor(public jobService: JobService) {}

  ngOnInit() {
    this.subscription = this.jobService.JobListData$.subscribe((value:Model[])=>{
      if(value){
        this.favjobLists = value;
        //this.jobService.favChecked=true;
        console.log(value)
      }
     })

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
