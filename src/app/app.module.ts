import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Lib
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationService } from './core/services/notification.service';
import { HttpMockRequestInterceptor } from './mock/interceptors/http-mock-request-interceptor';
import { reducers } from './core/store';
import { SettingsEffects } from './core/store/settings/settings.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    [StoreDevtoolsModule.instrument({ maxAge: 50 })],
    EffectsModule.forRoot([SettingsEffects]),
    FormsModule
  ],
  providers: [NotificationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:  HttpMockRequestInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
