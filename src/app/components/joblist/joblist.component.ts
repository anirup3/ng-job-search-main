import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobService } from '../../services/job.service';
import { Job, Model } from '../../models/job.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-joblist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './joblist.component.html',
  styleUrl: './joblist.component.css'
})
export class JoblistComponent implements OnInit, OnDestroy{

  jobLists: Model[] = [];
  favjobLists: Model[] = [];
  subscription: Subscription = new Subscription();
  isFavclicked: boolean = false;

  constructor(public jobService: JobService, public roter: Router) {}

  ngOnInit() {
      this.jobService.JobListData.subscribe((val) => {
        console.log(val);
        this.favjobLists = val;
        if(val.length>0){
          this.jobService.commonJobList.forEach((x)=>{
            val.forEach((item)=>{
              if(x.id==item.id){ x.isFav=true }
            })
          });
          this.jobLists = this.jobService.commonJobList
          console.log(this.jobLists);
        }
        else if(val.length==0){
          this.fetchJobData();
        }
      });
  }

  fetchJobData() {


        this.subscription = this.jobService.getAllJob().subscribe((res) => {
          console.log(res);
          this.jobLists = res;
          this.jobLists.map(x=>x.isFav=false);
          this.jobService.commonJobList = [...this.jobLists];
        });




  }


  markFavourite(job:Model){
    job.isFav = !job.isFav;
    console.log(job);
    if(job.isFav && !this.favjobLists.includes(job)){
      this.favjobLists.push(job);
    }
    else if(!job.isFav && this.favjobLists.includes(job)){
      console.log("remove")
      this.favjobLists.splice(this.favjobLists.indexOf(job),1);
    }
    console.log(this.favjobLists);

    this.jobService.setJobListData(this.favjobLists)
    //this.jobService.commonJobList = this.jobLists;
  }

  goToDetails(job:Model){
    //const url='/step3/${job.id}'
    this.roter.navigate(['step3'],{ state: { id: job.id} });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
