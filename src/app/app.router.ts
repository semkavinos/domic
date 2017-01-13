import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'weather'},
  { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' },
  { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'profile' },
  { loadChildren: 'app/weather/weather.module#WeatherModule', path: 'weather' },
  { loadChildren: 'app/auth/auth.module#AuthModule', path: 'auth' },
  { loadChildren: 'app/study_entity/study_entity.module#StudyEntityModule', path: 'study_entity' },
  { loadChildren: 'app/edred/edred.module#EdRedModule', path: 'edred'},
  { loadChildren: 'app/cource/cource.module#CourceModule', path: 'cource' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
