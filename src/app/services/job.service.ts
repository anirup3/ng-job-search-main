import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job, JobDetails, Model } from '../models/job.model';
import { Navigation } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  public JobListData$ = new BehaviorSubject<Model[]>([] as Model[]);
  public JobList = new BehaviorSubject<Model[]>([] as Model[]);
  // public favChecked: boolean = false;

  public commonJobList : Model[] = [];

  get JobListData() {
    return this.JobListData$.asObservable();
  }
  // get ListedJobData() {
  //   return this.JobList.asObservable();
  // }

  getAllJob(): Observable<Model[]> {
    return this.http.get<Model[]>("/jobs");
  }

  setJobListData(_data: Model[]) {
    this.JobListData$.next(_data);
  }

  // setUpdatedJobList(_data: Model[]) {
  //   this.JobList.next(_data);
  // }

  getJobDetails(jobId: Navigation | null): Observable<Job> {
    return this.http.get<Job>(`/jobs/${jobId}`);
  }
}
