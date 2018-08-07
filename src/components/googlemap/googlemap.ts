
import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { google } from 'google-maps';
/**
 * Generated class for the GooglemapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
declare var google;
@Component({
  selector: 'googlemap',
  templateUrl: 'googlemap.html'
})
export class GooglemapComponent {

  @ViewChild("map") mapElement;
  map: any;
  latitude:number;
  longitute:number;
  constructor(private geolocation: Geolocation) {
    
  }

  ngOnInit(){
    this.initMap();
  }

  initMap(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
     this.latitude = data.coords.latitude
      this.longitute= data.coords.longitude
      console.log(data);
     });
  
    let coords = new google.maps.LatLng(-26.2561792,27.9543808);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

    let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords
    })

  }


}
