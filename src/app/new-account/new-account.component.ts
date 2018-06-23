import { AccountService } from './../account.service';
import { LoggingService } from './../logging.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: LoggingService
})
export class NewAccountComponent {

  // binding to property private loggingService: LoggingService,
  constructor( private accountService: AccountService) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChanged(accountStatus);

  }
}
