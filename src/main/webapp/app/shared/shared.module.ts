import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { XuefenrendingSharedLibsModule, XuefenrendingSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [XuefenrendingSharedLibsModule, XuefenrendingSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [XuefenrendingSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class XuefenrendingSharedModule {
  static forRoot() {
    return {
      ngModule: XuefenrendingSharedModule
    };
  }
}
