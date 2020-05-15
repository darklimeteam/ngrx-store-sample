import { Component, OnInit } from '@angular/core';
import { NotificationService } from './core/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private notificationService: NotificationService) {}
  title = 'pwa-angular9';

  ngOnInit() {
    this.notificationService.getNotifications().subscribe(nots => console.log(nots));
  }
}
