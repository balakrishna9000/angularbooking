import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingService } from '../bookingservice';
import { Booking } from '../model/booking';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent  {
bookings:Booking[];
    constructor(private bookingService:BookingService) {
      let observable:Observable<Booking[]>=bookingService.viewAllBookings();
      observable.subscribe(
        bookingArr=>
        this.bookings=bookingArr);
        
      }
 
// err=>{
//   console.log("inside bookinglistComponent err is "+err.message);
//}

// deleteviewbooking(bookingid:number){
//   let observable=this.booking.deleteviewbooking(bookingid);
//   observable.subscribe(
//     res=>{
//       this.removeLocalElement(bookingid);

//     },
//     err=>{
//       console.log("inside deleteviewbooking ,err is"+err.message);
//     }
//   );
// }  
// removeLocalElement(bookingid: number):void {
//   console.log("before user deleted,length="+this.bookings.length);
//   for(let i=0;i<this.bookings.length;i++){
//     let booking =this.bookings[i];
//     if(booking.bookingId==bookingid){
//       this.bookings.splice(i,1);
//     }
//   }
}
