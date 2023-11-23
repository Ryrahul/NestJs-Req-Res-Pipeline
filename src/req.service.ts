import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class reqService {
  private token;
  settoken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }
}
