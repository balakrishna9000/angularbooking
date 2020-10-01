import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingService } from '../bookingservice';
import { Booking } from '../model/booking';

@Component({
  selector: 'add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent {

  constructor(private bookingService: BookingService) {
  }

   booking: Booking;

  addBooking(form: any) {
    let data = form.value;
    let userId = data.userId;
    let bookingDate = data.bookingDate;
    let ticketCost=data.ticketCost;
    let bookingState=data.bookingState;
    
    console.log(bookingDate);
    
    this.booking = new Booking(1, bookingDate,ticketCost, bookingState);
        let successFun = (bookingArg: Booking) => {
      this.booking = bookingArg;
    };

    let errFun = err => {
      console.log("err in addbookingcomponent " + err.message);
    }

    let observable: Observable<Booking> = this.bookingService.addBooking(this.booking);
    observable.subscribe(successFun, errFun);
  }

}
