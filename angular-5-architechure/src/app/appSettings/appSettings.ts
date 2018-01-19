import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {
    //public static get BASE_URL(): string { return 'http://192.168.1.135:8082/'; }// client server 
    public static get BASE_URL(): string { return 'http://fsapi.sarvaya.com/api/'; }// client server 
    public static get COUNTRY_CODES_URL(): string { return '/authless/countryCodes'; };
    //public static get LOGIN_URL(): string { return 'api/v1/users/login'; }
    public static get LOGIN_URL(): string { return 'auth/login'; };
    public static get SIGN_UP_URL(): string { return '/api/v1/users/signup'; };

    public static get PROJECT_DATA(): string { return 'projects/'; };
    public static get ALBUM_IMAGES(): string { return 'albums/images' };   
}