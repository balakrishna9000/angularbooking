import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Booking } from './model/booking';

@Injectable()
export class BookingService{
  viewAllBookings: any;
    validateBooking(booking: Booking): Observable<Booking> {
      throw new Error('Method not implemented.');
    }

    baseUrl="http://localhost:8080/bookings";

    constructor(private http:HttpClient){

    }

    addBooking(booking:Booking):Observable<Booking>{
     let url=this.baseUrl+"/add";   
     let observable:Observable<Booking>=this.http.post<Booking>(url,booking);
     return observable;
    }

    getBooking(bookingId:number):Observable<BookingService>{
        let url=this.baseUrl+"/get/"+bookingId;
        let observable:Observable<BookingService>=this.http.get<BookingService>(url);
        return observable;
    }

   getAllBookings():Observable<BookingService[]>{
      let url=this.baseUrl;
       let observable:Observable<BookingService[]>=this.http.get<BookingService[]>(url);
       return observable;
   }

   //removeBooking(bookingId:number):Observable<void>{
      // let url="";
      // let observable:Observable<void>=this.http.delete<void>(url);
    //   return observable;
  // }

}