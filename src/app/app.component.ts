import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { JobService } from './services/job.service';
import { JoblistComponent } from './components/joblist/joblist.component';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Model } from './models/job.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JoblistComponent, HttpClientModule, AsyncPipe, JsonPipe, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ng-job-search';

  favJobDisable: boolean = true;
  step3Disable: boolean = true;

  constructor(private jobService: JobService,private router: Router) {}

  // ngOnInit() {
  //   //this.fetchJobData();
  //   this.jobService.JobListData$.subscribe((value:Model[])=>{ console.log(value) })
  // }

  ngOnInit() {
    this.getJobData();
  }
  getJobData() {
    this.jobService.JobListData.subscribe((res) => {

      console.log(res);
      // if (Object.keys(res).length) {
      //   this.step2Disable = res.selectedColorValue ? false : true;
      // }

      //if (Array.isArray(res)) {
        this.favJobDisable = res.length>0 ?  false : true;
      //}
    });
  }

  getClass(){
    //console.log(this.router.url);
    if(this.router.url.includes('step2')) return true;
    else return false;
    // "is-active"
  }
}
