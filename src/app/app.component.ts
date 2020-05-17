import { Component, OnInit } from '@angular/core';

// App
import { NotificationService } from './core/services/notification.service';
import { SettingsService } from './core/services/settings.service';
import { SettingsActions } from './core/store/settings/settings.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private notificationService: NotificationService,
              private settingsService: SettingsService,
              private store: SettingsActions
    ) {}
  title = 'pwa-angular9';

  ngOnInit() {
    this.store.settingsLoadDispatch();
    this.notificationService.getNotifications().subscribe(nots => console.log(nots));
    this.settingsService.getSettings().subscribe(set => console.log(set));
  }
}
