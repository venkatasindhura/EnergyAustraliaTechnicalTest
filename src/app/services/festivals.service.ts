import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivalsService {

  constructor(private httpclient: HttpClient) {}


  get_API_Festivals() {
     const festivals = '[{"name":"LOL-palooza","bands":[{"name":"Jill Black","recordLabel":"Fourth Woman Records"},{"name":"Frank Jupiter","recordLabel":"Pacific Records"},{"name":"Werewolf Weekday","recordLabel":"XS Recordings"},{"name":"Winter Primates","recordLabel":""}]},{"name":"Small Night In","bands":[{"name":"Yanke East","recordLabel":"MEDIOCRE Music"},{"name":"Wild Antelope","recordLabel":"Marner Sis. Recording"},{"name":"Squint-281","recordLabel":"Outerscope"},{"name":"Green Mild Cold Capsicum","recordLabel":"Marner Sis. Recording"},{"name":"The Black Dashes","recordLabel":"Fourth Woman Records"}]},{"name":"Trainerella","bands":[{"name":"Wild Antelope","recordLabel":"Still Bottom Records"},{"name":"YOUKRANE","recordLabel":"Anti Records"},{"name":"Manish Ditch","recordLabel":"ACR"},{"name":"Adrian Venti","recordLabel":"Monocracy Records"}]},{"name":"Twisted Tour","bands":[{"name":"Summon","recordLabel":"Outerscope"},{"name":"Squint-281"},{"name":"Auditones","recordLabel":"Marner Sis. Recording"}]},{"bands":[{"name":"Propeller","recordLabel":"Pacific Records"},{"name":"Critter Girls","recordLabel":"ACR"}]}]';
     let festivalJSON = JSON.parse(festivals);
     return festivalJSON;
  }
  get_API_Records() {
    return this.httpclient.get('http://eacodingtest.digital.energyaustralia.com.au/api/v1/festivals');
  }
}
