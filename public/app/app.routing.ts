import { RouterModule, Routes  } from '@angular/router';

import { ApplicationComponent } from './components/application/application.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: '**', // to handle 404 situations
    component: ApplicationComponent
  }
];

export const Routing = RouterModule.forRoot(routes);
