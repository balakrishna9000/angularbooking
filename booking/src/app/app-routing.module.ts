import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookingComponent } from './add-booking/add-booking.component';
// import { ViewbookingByIdComponent } from './viewbooking-by-id/viewbooking-by-id.component';
 import { ViewbookingComponent } from './viewbooking/viewbooking.component';

const routes: Routes = [
  {path:"add-booking",component :AddBookingComponent},
  // {path:"viewbookingById",component :ViewbookingByIdComponent},
   {path:"viewbooking",component :ViewbookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
