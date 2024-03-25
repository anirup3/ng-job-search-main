import { Routes } from '@angular/router';
import { FavouritejobsComponent } from './components/favouritejobs/favouritejobs.component';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';
import { JoblistComponent } from './components/joblist/joblist.component';


export const routes: Routes = [
  { path: "", redirectTo: "step1", pathMatch: "full" },
  { path: "step1", component: JoblistComponent },
  { path: "step2", component: FavouritejobsComponent },
  { path: "step3", component: JobdetailsComponent },
  { path: "**", redirectTo: "step1" },
];
