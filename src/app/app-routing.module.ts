import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing all components
import { SigninComponent } from './signin/signin.component';
import { SpeakerSidebarComponent } from './speaker-sidebar/speaker-sidebar.component';
import { RegisterSpeakerComponent } from './register-speaker/register-speaker.component';
import { EnrollEventComponent } from './enroll-event/enroll-event.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CreatePromocodeComponent } from './create-promocode/create-promocode.component';
import { ViewPromocodeComponent } from './view-promocode/view-promocode.component';
import { DeletePromocodeComponent } from './delete-promocode/delete-promocode.component';
import { ParticipantRegisterComponent } from './participant-register/participant-register.component';
import { ParticipantEventenrollComponent } from './participant-eventenroll/participant-eventenroll.component';
import { ParticipantUpdateComponent } from './participant-update/participant-update.component';
import { ParticipantFeedbackComponent } from './participant-feedback/participant-feedback.component';
import { ParticipantSidebarComponent } from './participant-sidebar/participant-sidebar.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { ModifyLocationComponent } from './modify-location/modify-location.component';
import { DeleteLocationComponent } from './delete-location/delete-location.component';
import { ViewLocationComponent } from './view-location/view-location.component';
import { AddSpeakerComponent } from './add-speaker/add-speaker.component';
import { ViewSpeakerComponent } from './view-speaker/view-speaker.component';
import { ViewTopicsComponent } from './view-topics/view-topics.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { ModifyTopicComponent } from './modify-topic/modify-topic.component';
import { ModifyEventComponent } from './modify-event/modify-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AppComponent } from './app.component';
import { ViewEventComponent } from './view-event/view-event.component';

const routes: Routes = [
  // Authentication Routes
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },

  // Speaker Section with Sidebar
  {
    path: 'speaker',
    component: SpeakerSidebarComponent,
    children: [
      { path: 'register', component: RegisterSpeakerComponent },
      { path: 'events', component: ViewEventComponent },
      { path: 'enroll', component: EnrollEventComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: '', redirectTo: 'register', pathMatch: 'full' } // Default route under speaker
    ]
  },

  // Participant Section with Sidebar
  {
    path: 'participant',
    component: ParticipantSidebarComponent,
    children: [
      { path: 'register', component: ParticipantRegisterComponent },
      { path: 'enroll', component: ParticipantEventenrollComponent },
      { path: 'update', component: ParticipantUpdateComponent },
      { path: 'feedback', component: ParticipantFeedbackComponent },
      { path: '', redirectTo: 'register', pathMatch: 'full' } // Default route under participant
    ]
  },

  // Admin Section with Sidebar
  {
    path: 'admin',
    component: SidebarComponent,
    children: [
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      { path: 'add-admin', component: AddAdminComponent },
      { path: 'view-admin', component: ViewAdminComponent },
      { path: 'add-location', component: AddLocationComponent },
      { path: 'modify-location', component: ModifyLocationComponent },
      { path: 'delete-location', component: DeleteLocationComponent },
      { path: 'view-location', component: ViewLocationComponent },
      { path: 'add-speaker', component: AddSpeakerComponent },
      { path: 'view-speaker', component: ViewSpeakerComponent },
      { path: 'view-topics', component: ViewTopicsComponent },
      { path: 'add-topic', component: AddTopicComponent },
      { path: 'modify-topic', component: ModifyTopicComponent },
      { path: 'add-event', component: AddEventComponent },
      { path: 'modify-event', component: ModifyEventComponent },
      { path: 'delete-event', component: DeleteEventComponent },
     
      { path: 'view-event', component: ViewEventComponent },
    ]
  },

  // Promo Code Routes
  { path: 'create-promocode', component: CreatePromocodeComponent },
  { path: 'delete-promocode', component: DeletePromocodeComponent },
  { path: 'view-promocode', component: ViewPromocodeComponent },

  // Catch-all route for any undefined paths (useful for 404 pages)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
