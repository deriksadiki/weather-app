import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { WeatherProvider } from '../../providers/weather/weather';
import moment from 'moment';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
lat;
long;
icon;
name;
date;
descption;
currentTemp;;
min_temp;
max_temp;
mainObject;
img;

name2;
icon2;
date2;
descption2;
currentTemp2;;
min_temp2;
max_temp2;
mainObject2;
img2;

icon3;
name3;
date3;
descption3;
currentTemp3;;
min_temp3;
max_temp3;
mainObject3;
img3;

icon4;
name4;
date4;
descption4;
currentTemp4;;
min_temp4;
max_temp4;
mainObject4;
img4;
weatherDetails:any [];
weatherDetails2:any [];

test;
  constructor(public navCtrl: NavController, private geolocation: Geolocation, private weather : WeatherProvider) {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
     this.lat = data.coords.latitude;
      this.long =  data.coords.longitude;
      this.weather.getForecust(data.coords.latitude.toFixed(2), data.coords.longitude.toFixed(2)).then((data:any)=>{
     

       this.weatherDetails =  data.list;
      this.mainObject =   this.weatherDetails[0].main;
      this.icon = "http://openweathermap.org/img/w/" + this.weatherDetails[0].weather[0].icon + ".png";
      this.descption = this.weatherDetails[0].weather[0].description;
      this.name =  data.city.name;
      this.date =   this.weatherDetails[0].dt_txt.substr(0,10);
      this.currentTemp =  (this.mainObject.temp - 273).toFixed();
      this.max_temp =  (this.mainObject.temp_max - 273).toFixed();
      this.min_temp =  (this.mainObject.temp_min - 273).toFixed();
      

      this.mainObject =   this.weatherDetails[9].main;
      this.icon2 = "http://openweathermap.org/img/w/" + this.weatherDetails[9].weather[0].icon + ".png";
      this.descption2 = this.weatherDetails[9].weather[0].description;
      this.name2 =  data.city.name;
      this.date2 =  moment(this.weatherDetails[9].dt_txt.substr(0,10)).format("ddd");
      this.currentTemp2 =  (this.mainObject.temp - 273).toFixed();
      this.max_temp2 =  (this.mainObject.temp_max - 273).toFixed();
      this.min_temp2 =  (this.mainObject.temp_min - 273).toFixed();



      this.mainObject3 =   this.weatherDetails[17].main;
      this.icon3 = "http://openweathermap.org/img/w/" + this.weatherDetails[17].weather[0].icon + ".png";
      this.descption3 = this.weatherDetails[17].weather[0].description;
      this.name3 =  data.city.name;
      this.date3 = moment(this.weatherDetails[17].dt_txt.substr(0,10)).format("ddd");
      this.currentTemp3 =  (this.mainObject.temp - 273).toFixed();
      this.max_temp3 =  (this.mainObject.temp_max - 273).toFixed();
      this.min_temp3 =  (this.mainObject.temp_min - 273).toFixed();


    
      this.mainObject =   this.weatherDetails[25].main;
      this.icon4 = "http://openweathermap.org/img/w/" + this.weatherDetails[25].weather[0].icon + ".png";
      this.descption4 = this.weatherDetails[25].weather[0].description;
      this.name4 =  data.city.name;
      this.date4 =  moment(this.weatherDetails[25].dt_txt.substr(0,10)).format("ddd");
      this.currentTemp4 =  (this.mainObject.temp - 273).toFixed();
      this.max_temp4 =  (this.mainObject.temp_max - 273).toFixed();
      this.min_temp4 =  (this.mainObject.temp_min - 273).toFixed();


      })
      
     });

    
  }



}
