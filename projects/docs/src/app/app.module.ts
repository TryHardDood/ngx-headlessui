import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SwitchModule, TransitionModule } from 'projects/ngx-headlessui/src/public-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './pages/index/index.component';
import { ListboxModule } from './../../../ngx-headlessui/src/components/listbox/listbox.module';
import { MarkdownModule } from 'ngx-markdown';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './pages/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    ReactiveFormsModule,

    HighlightModule,
    MarkdownModule.forRoot({ loader: HttpClient }),

    TransitionModule,
    SwitchModule,
    ListboxModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
