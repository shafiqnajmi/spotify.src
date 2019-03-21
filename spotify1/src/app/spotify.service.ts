import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';;


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {


  getHeader(query: string) {
    const url = environment.baseUrl + 'search?q=' + query;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer BQBM0Tmqg_Dq_zspkkvoyf_-RQJ6pSy2icUjJDyzEjC7k04XpQ75rUx4P7LTMV2yOJepHpOqSKMGAYbCPeewUTnvyieDioz92cUITLH-dNhpDVkTyo85pYlfoyH8R02RLb6TcQFy3IcO6H9MctkGbhY89OvpP4oW5A');

    return this.http.get(url, { headers });
  }

  constructor(private http: HttpClient) { }

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=5' + '&type=' + type + '&market=US';
    const query = str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = 'artists/${id}';
    return this.getArtist(query);
  }
}

