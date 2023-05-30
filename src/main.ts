import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import 'zone.js/dist/zone';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
