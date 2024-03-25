import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Job, JobDetails, Model, RouteState } from '../../models/job.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobdetails.component.html',
  styleUrl: './jobdetails.component.css'
})
export class JobdetailsComponent implements OnInit, OnDestroy{

  //jobDetailsObj: JobDetails[] = [];
  jobDetailsObj:Job={
    'id': 0,
    'companyName': '',
    'title': '',
    'companyLogo': '',
    'reference': '',
    'description': '',
    'location': '',
    'industries': [''],
    'types': [''],
    'publishDate': new Date()
  };
  subscription: Subscription = new Subscription();

  constructor(public jobService: JobService, public router: Router) {}

  ngOnInit() {
    const obj:RouteState | undefined = this.router.lastSuccessfulNavigation?.extras.state;

    this.fetchJobDetails(obj);
  }

  fetchJobDetails(objId:RouteState | undefined){
    this.subscription = this.jobService.getJobDetails(objId?.id).subscribe((res) => {
      console.log(res);
      this.jobDetailsObj = res;
    });

  }

  goBack(){
    this.router.navigate(['step1'])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
