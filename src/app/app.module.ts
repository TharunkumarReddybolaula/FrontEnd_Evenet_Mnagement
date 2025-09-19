import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // FormsModule for ngModel
import { HttpClientModule } from '@angular/common/http'; // HttpClientModule for API calls

import { AppRoutingModule } from './app-routing.module'; // Import routing module
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

// Importing components
import { SigninComponent } from './signin/signin.component';
import { SpeakerSidebarComponent } from './speaker-sidebar/speaker-sidebar.component';
import { RegisterSpeakerComponent } from './register-speaker/register-speaker.component';
import { EnrollEventComponent } from './enroll-event/enroll-event.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CreatePromocodeComponent } from './create-promocode/create-promocode.component';
import { ViewPromocodeComponent } from './view-promocode/view-promocode.component';
import { DeletePromocodeComponent } from './delete-promocode/delete-promocode.component';
import { ParticipantRegisterComponent } from './participant-register/participant-register.component';
import { ParticipantUpdateComponent } from './participant-update/participant-update.component';
import { ParticipantFeedbackComponent } from './participant-feedback/participant-feedback.component';
import { ParticipantSidebarComponent } from './participant-sidebar/participant-sidebar.component';
import { ParticipantEventenrollComponent } from './participant-eventenroll/participant-eventenroll.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddEventComponent } from './add-event/add-event.component';
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
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';



// Ensure ViewEventComponent is either removed or uncommented based on your requirements
import { ViewEventComponent } from './view-event/view-event.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SpeakerSidebarComponent,
    RegisterSpeakerComponent,
    ViewEventComponent,
    EnrollEventComponent,
    FeedbackComponent,
    CreatePromocodeComponent,
    ViewPromocodeComponent,
    DeletePromocodeComponent,
    ParticipantRegisterComponent,
    ParticipantUpdateComponent,
    ParticipantFeedbackComponent,
    ParticipantSidebarComponent,
    ParticipantEventenrollComponent,
    AdminDashboardComponent,
    AddAdminComponent,
    AddEventComponent,
    ViewAdminComponent,
    AddLocationComponent,
    ModifyLocationComponent,
    DeleteLocationComponent,
    ViewLocationComponent,
    AddSpeakerComponent,
    ViewSpeakerComponent,
    ViewTopicsComponent,
    AddTopicComponent,
    ModifyTopicComponent,
    ModifyEventComponent,
    DeleteEventComponent,
    AdminLayoutComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Ensure routing is configured correctly
    FormsModule,       // For ngModel usage in forms
    HttpClientModule ,
    CommonModule  // For making API calls
  ],
  providers: [],  // You can add services here if needed
  bootstrap: [AppComponent]  // Bootstrapping the root component
})
export class AppModule { }
