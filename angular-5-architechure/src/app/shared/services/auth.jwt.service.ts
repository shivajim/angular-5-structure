import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';


@Injectable()
export class AuthServerProvider {
    constructor(
        private $sessionStorage: SessionStorageService
    ) {}

    getToken(): String {
        return this.$sessionStorage.retrieve('jwtToken');
    }
    saveToken(token: String) {
        this.$sessionStorage.store('jwtToken', token);
      }

    destroyToken() {
        this.$sessionStorage.clear('jwtToken');
    }
}
