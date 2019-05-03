import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { 

    SettingsService,
    SidebarService,
    SharedService
} from './service.index';

@NgModule({

 imports: [
    CommonModule
 ],
     providers: [
         SettingsService,
         SidebarService,
         SharedService
     ],

    declarations: []
})
export class ServiceModule { }