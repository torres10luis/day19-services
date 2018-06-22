import { AccountService } from './../account.service';
import { LoggingService } from './../logging.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountService]
})
export class NewAccountComponent {

  // binding to property
  constructor(private loggingService: LoggingService, private accountService: AccountService) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChanged(accountStatus);

  }
}
