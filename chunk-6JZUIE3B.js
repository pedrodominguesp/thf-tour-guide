import{a as mt,b as st}from"./chunk-JFYMUTH5.js";import{a as Ee,b as ce,c as ue,d as R,e as oe,f as ae,h as gt}from"./chunk-2PDTOCOU.js";import{a as vt}from"./chunk-LLKWE4XJ.js";import"./chunk-CDIKF2FY.js";import{a as yt}from"./chunk-NQTDOBMW.js";import{$f as ge,Ba as x,Ca as Se,Cg as ne,Db as e,Dg as Q,Eb as be,Fb as Ke,Fc as it,Ff as St,Ga as U,Gf as ie,Gg as Ce,Ha as He,He as ut,Ie as Et,Ja as Ue,Jc as nt,Jg as Ie,Kb as b,La as We,Lb as h,Le as Pe,Mb as f,Md as pt,Me as xt,Nc as ke,Ne as g,Od as Me,Of as bt,Pa as L,Qb as we,Qf as se,Ra as M,S as Ne,Sd as C,T as xe,Ta as $e,Tb as Je,Ua as Te,Ub as le,V as Qe,Va as De,Vf as Fe,Wa as s,Wb as Ae,We as ve,Wf as ht,Xa as i,Xb as Ze,Xe as me,Y as c,Ya as t,Yc as ot,Z as u,Za as o,ag as ye,bf as qe,cc as Ye,cd as at,dc as Xe,ed as q,fg as pe,gb as z,gd as G,hd as ee,he as $,hg as ft,ic as J,id as N,ie as V,jd as _e,ka as Y,kd as S,ld as H,mb as v,md as te,ob as p,od as rt,pa as Be,pb as X,pd as he,qb as T,qd as fe,qe as ct,re as B,sa as m,sb as F,tb as D,td as lt,tg as K,ub as w,ud as dt,vc as et,ya as I,yb as W,zc as tt}from"./chunk-YJFD2DBY.js";import{a as re,b as de}from"./chunk-GAL4ENT6.js";var Ri=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","templates-before",""]],[["","templates-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],zi=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[enums-before]","[enums-after]","[templates-before]","[templates-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],Ct=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let k=E.querySelector(".po-tab-button-label");k&&k?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(I(Y))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-grid"]],viewQuery:function(r,n){if(r&1&&F(Q,5)(V,5),r&2){let l;D(l=w())&&(n.tabs=l.first),D(l=w())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:zi,decls:8613,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Function"],[1,"language-html"],["pan","",1,"docs-api-property-type","Array<ThfTableAction>"],["href","https://po-ui.io/icons"],[1,"language-typescript"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ThfAggregateConfig"],["pan","",1,"docs-api-property-type","Array<ThfAggregateDescriptor>"],["pan","",1,"docs-api-property-type","Array<ThfGridColumn>"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDropdownAction>"],["pan","",1,"docs-api-property-type","{","[key:","string]:","TemplateRef<any>;","}"],["pan","",1,"docs-api-property-type","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicSearchFilters>"],["pan","",1,"docs-api-property-type","Array<ThfFilterByColumn>"],["pan","",1,"docs-api-property-type","'basic'"],["pan","",1,"docs-api-property-type","'service'"],["pan","",1,"docs-api-property-type","ThfGridRowActions"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","null"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","ThfGridLiterals"],["pan","",1,"docs-api-property-type","(()","=>","ThfGridOptions)"],["pan","",1,"docs-api-property-type","Array<ThfGridOptionPaging>"],[1,"language-json"],["pan","",1,"docs-api-property-type","ThfGridDeleteService"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<ThfGridColumnSort>"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],["href","https://tdn.totvs.com/pages/releaseview.action?pageId=871520382"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type","('active'"],["pan","",1,"docs-api-property-type","'removed')"],["p-label","Interfaces"],["p-label","ThfTableAction"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["p-label","ThfAggregateDescriptor"],["pan","",1,"docs-api-property-type","'sum'"],["pan","",1,"docs-api-property-type","'average'"],["pan","",1,"docs-api-property-type","'count'"],["pan","",1,"docs-api-property-type","'min'"],["pan","",1,"docs-api-property-type","'max'"],["p-label","ThfAggregateConfig"],["pan","",1,"docs-api-property-type","'right'"],["pan","",1,"docs-api-property-type","'defaultColumn'"],["p-label","ThfGridColumnSort"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["p-label","ThfGridColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoTableDetail"],["pan","",1,"docs-api-property-type","CustomEditProperties"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["href","/documentation/po-table-cell-template"],["href","/documentation/po-table-column-template"],["p-label","CustomEditProperties"],["href","https://po-ui.io/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","'input'"],["pan","",1,"docs-api-property-type","'number'"],["pan","",1,"docs-api-property-type","'select'"],["pan","",1,"docs-api-property-type","'datepicker'"],["pan","",1,"docs-api-property-type","'switch'"],["pan","",1,"docs-api-property-type","'combo'"],["pan","",1,"docs-api-property-type","'multiselect'"],["pan","",1,"docs-api-property-type","'decimal'"],["pan","",1,"docs-api-property-type","'checkbox'"],["pan","",1,"docs-api-property-type","'lookup'"],["pan","",1,"docs-api-property-type","'timepicker'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["pan","",1,"docs-api-property-type","((rowData:","any,","column?:","ThfGridColumn)","=>","boolean)"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","(value:","any)","=>","void"],["pan","",1,"docs-api-property-type","(model:","any)","=>","void"],["pan","",1,"docs-api-property-type","(error:","HttpErrorResponse)","=>","void"],["pan","",1,"docs-api-property-type","(selection:","any"],["pan","",1,"docs-api-property-type","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","'sm'"],["pan","",1,"docs-api-property-type","'md'"],["pan","",1,"docs-api-property-type","'lg'"],["pan","",1,"docs-api-property-type","'xl'"],["pan","",1,"docs-api-property-type","'auto'"],["p-label","ThfGridDeleteService"],["p-label","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","(param:","any)","=>","FormGroup"],["pan","",1,"docs-api-property-type","(data:","any,","columnProperty:","string)","=>","FormGroup"],["p-label","ThfFilterByColumn"],["pan","",1,"docs-api-property-type","any"],["p-label","ThfGridLiterals"],["p-label","ThfGridOptionPaging"],["p-label","ThfGridOptions"],["p-label","ThfGridRowActions"],["pan","",1,"docs-api-property-type","(param:","any,","mode:","'edit'"],["pan","",1,"docs-api-property-type","'include')","=>","FormGroup"],["pan","",1,"docs-api-property-type","Observable<FormGroup>"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","Observable<boolean>"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRows:","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","Array<ThfGridEditModeActionType>"],["pan","",1,"docs-api-property-type","(updatedField:","any,","columnProperty:","string)","=>","boolean"],["p-label","Enums"],["p-label","ThfColumnSpacing"],["p-label","ThfGridEditModeActionType"],["p-label","Templates"],["p-label","ThfGridCellTemplateDirective"],["p-label","ThfGridColumnTemplateDirective"],["p-label","Token CSS"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(X(Ri),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),T(4),t(),i(5,"po-tab",4),T(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfGridComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`O grid foi criado para que voc\xEA tenha um controle de alto desempenho, oferecendo uma performance extremamente r\xE1pida,
integrando-se perfeitamente ao seu aplicativo e sendo altamente personaliz\xE1vel.`),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-Grid"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(24,"code"),e(25,"import { ThfGridComponent } from '@totvs/thf-components';"),t()()(),i(26,"div",11)(27,"h4",12),e(28,"Seletor"),t(),i(29,"pre",13),e(30,`<thf-grid
  t-action-delete="boolean"
  t-action-edit="Function"
  t-action-excel="boolean"
  t-action-pdf="boolean"
  t-actions-right="boolean"
  t-actions="Array<ThfTableAction>"
  t-actions-filter="boolean"
  (t-delete-items)="EventEmitter"
  (t-after-duplicate)="EventEmitter"
  t-aggregates-config="ThfAggregateConfig"
  t-aggregates="Array<ThfAggregateDescriptor>"
  t-allow-batch-delete="boolean"
  t-auto-size="boolean"
  t-auto-size-on-scroll="boolean"
  (t-before-duplicate)="EventEmitter"
  (t-change-aggregates)="EventEmitter"
  (t-change-filter-by-column)="EventEmitter"
  (t-change-fixed-columns)="EventEmitter"
  (t-change-options-column-manager)="EventEmitter"
  (t-change-row-state-filter)="EventEmitter"
  (t-change-visible-columns)="EventEmitter"
  (t-changed-density)="EventEmitter"
  (t-changed-items)="EventEmitter"
  (t-restore-column-manager)="EventEmitter"
  t-columns="Array<ThfGridColumn>"
  t-components-size="string"
  t-container="boolean"
  t-custom-actions="Array<PoDropdownAction>"
  (t-custom-filter)="EventEmitter"
  t-custom-templates="{
    [key: string]: TemplateRef<any>;
}"
  (t-delete-item)="EventEmitter"
  t-disabled-include-button="boolean"
  t-draggable="boolean"
  t-edit-properties="ThfGridEditProperties"
  (t-change-page-size)="EventEmitter"
  t-fields="Array<PoPageDynamicSearchFilters>"
  t-filter-column-properties="Array<ThfFilterByColumn>"
  t-filter-input-mode="'basic' | 'service'"
  t-grid-row-actions="ThfGridRowActions"
  t-group="Array<string>"
  t-groupable="boolean | GroupableSettings"
  t-header-template="TemplateRef<void>"
  t-headline-fixed="boolean"
  t-height="number | string | null"
  t-hide-action-fixed-columns="boolean"
  t-hide-batch-actions="boolean"
  t-hide-columns-manager="boolean"
  t-hide-select-all="boolean"
  t-hide-table-search="boolean"
  t-loading="boolean"
  t-items="Array<any>"
  (t-items-after-get)="EventEmitter"
  t-literals="ThfGridLiterals"
  t-max-columns="number"
  t-max-height="number | string | null"
  t-max-resizable-width="number"
  t-min-height="number | string | null"
  t-min-resizable-width="number"
  (t-change-group)="EventEmitter"
  t-load="string | (() => ThfGridOptions)"
  t-options-paging="Array<ThfGridOptionPaging>"
  (t-change-order-column)="EventEmitter"
  t-page-size="number"
  t-page-size-virtual="number"
  t-pageable="boolean"
  t-param-delete-api="string"
  t-resizable="boolean"
  t-row-height="number"
  (t-rows-selected)="EventEmitter"
  t-selectable="boolean"
  t-selectable-entire-line="boolean"
  t-selectable-removed="boolean"
  (t-selected)="EventEmitter"
  (t-all-selected)="EventEmitter"
  t-service-delete-api="string | ThfGridDeleteService"
  t-service-api="string"
  t-show-densification-configuration="boolean"
  t-show-draggable-icon="boolean"
  t-show-footer-aggregates="boolean"
  (t-show-more)="EventEmitter"
  t-show-more-disabled="boolean"
  t-show-more-visible="boolean"
  t-single-select="boolean"
  t-sort="Array<ThfGridColumnSort>"
  (t-change-sort-column)="EventEmitter"
  t-sortable="boolean"
  t-spacing="string"
  t-striped="boolean"
  t-text-wrap="boolean"
  (t-unselected)="EventEmitter"
  (t-all-unselected)="EventEmitter"
  t-virtual-columns="boolean"
  t-virtual-scroll="boolean" >
</thf-grid>
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48,"t-action-delete"),o(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"boolean"),t()(),i(53,"td",25)(54,"p")(55,"code"),e(56,"false"),t()()(),i(57,"td",26)(58,"em")(59,"strong"),e(60,"(opcional)"),t()(),i(61,"p"),e(62,"Exibe o bot\xE3o de Excluir. Requer que a propriedade "),i(63,"strong"),e(64,"t-selectable"),t(),e(65," esteja habilitada."),t()()(),i(66,"tr",19)(67,"td",20)(68,"div",21)(69,"span",22),e(70,"t-action-edit"),o(71,"br"),t()()(),i(72,"td",23)(73,"code",27),e(74,"Function"),t()(),i(75,"td",25),e(76,"-"),t(),i(77,"td",26)(78,"em")(79,"strong"),e(80,"(opcional)"),t()(),i(81,"p"),e(82,`Exibe o bot\xE3o de Editar e executa a fun\xE7\xE3o definida ao clicar.
Requer que a propriedade `),i(83,"strong"),e(84,"t-selectable"),t(),e(85," esteja habilitada."),t(),i(86,"pre")(87,"code",28),e(88,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-action-edit]="myFunction.bind(this)"
 [t-selectable]-true
></thf-grid>
`),t()()()(),i(89,"tr",19)(90,"td",20)(91,"div",21)(92,"span",22),e(93,"t-action-excel"),o(94,"br"),t()()(),i(95,"td",23)(96,"code",24),e(97,"boolean"),t()(),i(98,"td",25)(99,"p")(100,"code"),e(101,"false"),t()()(),i(102,"td",26)(103,"em")(104,"strong"),e(105,"(opcional)"),t()(),i(106,"p"),e(107,"Exibe o bot\xE3o de Exportar. Requer que a propriedade "),i(108,"strong"),e(109,"t-selectable"),t(),e(110,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(111,"code"),e(112,".xlsx"),t(),e(113,"."),t()()(),i(114,"tr",19)(115,"td",20)(116,"div",21)(117,"span",22),e(118,"t-action-pdf"),o(119,"br"),t()()(),i(120,"td",23)(121,"code",24),e(122,"boolean"),t()(),i(123,"td",25)(124,"p")(125,"code"),e(126,"false"),t()()(),i(127,"td",26)(128,"em")(129,"strong"),e(130,"(opcional)"),t()(),i(131,"p"),e(132,"Exibe o bot\xE3o de Download. Requer que a propriedade "),i(133,"strong"),e(134,"t-selectable"),t(),e(135,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(136,"code"),e(137,"PDF"),t(),e(138,"."),t(),i(139,"blockquote")(140,"p"),e(141,"Todos os dados exportados para PDF utilizar\xE3o a fonte 'Lato', garantindo compatibilidade com a tabela de caracteres ASCII estendida."),t()()()(),i(142,"tr",19)(143,"td",20)(144,"div",21)(145,"span",22),e(146," t-actions-right"),o(147,"br"),t()()(),i(148,"td",23)(149,"code",24),e(150,"boolean"),t()(),i(151,"td",25)(152,"p")(153,"code"),e(154,"false"),t()()(),i(155,"td",26)(156,"em")(157,"strong"),e(158,"(opcional)"),t()(),i(159,"p"),e(160,"Posiciona a coluna de a\xE7\xF5es ("),i(161,"strong"),e(162,"t-actions"),t(),e(163,") \xE0 direita."),t()()(),i(164,"tr",19)(165,"td",20)(166,"div",21)(167,"span",22),e(168,"t-actions"),o(169,"br"),t()()(),i(170,"td",23)(171,"code",29),e(172,"Array<ThfTableAction>"),t()(),i(173,"td",25),e(174,"-"),t(),i(175,"td",26)(176,"em")(177,"strong"),e(178,"(opcional)"),t()(),i(179,"p"),e(180,"Permite definir uma lista de a\xE7\xF5es que implementam a interface "),i(181,"strong"),e(182,"ThfTableAction"),t(),e(183,`, adicionando uma coluna
ao grid. Se houver apenas uma a\xE7\xE3o v\xE1lida, ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrupar m\xFAltiplas a\xE7\xF5es e exibe o \xEDcone `),i(184,"a",30)(185,"strong"),e(186,"an an-dots-three-vertical"),t()(),e(187,`. Ao
pressionar o \xEDcone, todas as a\xE7\xF5es ser\xE3o listadas.`),t(),i(188,"p")(189,"strong"),e(190,"A coluna n\xE3o ser\xE1 exibida se:"),t()(),i(191,"ul")(192,"li"),e(193,"a lista contiver valores inv\xE1lidos ou indefinidos;"),t(),i(194,"li"),e(195,"houver apenas uma a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),t()(),i(196,"pre")(197,"code",28),e(198,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-actions]="actionsGrid"
></thf-grid>
`),t()(),i(199,"pre")(200,"code",31),e(201,`actionsGrid: Array<ThfTableAction> = [
 {
   label: '',
   action: (e: any) => {
     this.poNotification.information(\`\${e.id} - \${e.name} \`);
   },
   icon: 'ICON_MENU_OPEN',
   fixed: true
 },
];

constructor(private poNotification: PoNotificationService) {}
`),t()()()(),i(202,"tr",19)(203,"td",20)(204,"div",21)(205,"span",22),e(206,"t-actions-filter"),o(207,"br"),t()()(),i(208,"td",23)(209,"code",24),e(210,"boolean"),t()(),i(211,"td",25)(212,"p")(213,"code"),e(214,"true"),t()()(),i(215,"td",26)(216,"em")(217,"strong"),e(218,"(opcional)"),t()(),i(219,"p"),e(220,`Exibe o bot\xE3o de Filtros.
Habilita um modal com op\xE7\xF5es adicionais de filtro, caso o output `),i(221,"strong"),e(222,"t-custom-filter"),t(),e(223," n\xE3o esteja em uso."),t()()(),i(224,"tr",19)(225,"td",20)(226,"div",32)(227,"span",33),e(228," (t-delete-items)"),o(229,"br"),t()()(),i(230,"td",23)(231,"code",34),e(232,"EventEmitter"),t()(),i(233,"td",25),e(234,"-"),t(),i(235,"td",26)(236,"em")(237,"strong"),e(238,"(opcional)"),t()(),i(239,"p"),e(240,`Evento disparado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado.
Retorna os itens que permanecem dispon\xEDveis.`),t()()(),i(241,"tr",19)(242,"td",20)(243,"div",32)(244,"span",33),e(245," (t-after-duplicate)"),o(246,"br"),t()()(),i(247,"td",23)(248,"code",34),e(249,"EventEmitter"),t()(),i(250,"td",25),e(251,"-"),t(),i(252,"td",26)(253,"em")(254,"strong"),e(255,"(opcional)"),t()(),i(256,"p"),e(257,"Evento disparado ap\xF3s concluir o processo de duplica\xE7\xE3o de linha na edi\xE7\xE3o flu\xEDda."),t()()(),i(258,"tr",19)(259,"td",20)(260,"div",21)(261,"span",22),e(262," t-aggregates-config"),o(263,"br"),t()()(),i(264,"td",23)(265,"code",35),e(266,"ThfAggregateConfig"),t()(),i(267,"td",25),e(268,"-"),t(),i(269,"td",26)(270,"em")(271,"strong"),e(272,"(opcional)"),t()(),i(273,"p"),e(274,"Objeto de configura\xE7\xE3o para definir as "),i(275,"strong"),e(276,"op\xE7\xF5es de comportamento e apresenta\xE7\xE3o"),t(),e(277,`
dos totalizadores/agregados (aggregates) da grid.`),t()()(),i(278,"tr",19)(279,"td",20)(280,"div",21)(281,"span",22),e(282," t-aggregates"),o(283,"br"),t()()(),i(284,"td",23)(285,"code",36),e(286,"Array<ThfAggregateDescriptor>"),t()(),i(287,"td",25)(288,"p")(289,"code"),e(290,"[]"),t()()(),i(291,"td",26)(292,"em")(293,"strong"),e(294,"(opcional)"),t()(),i(295,"p"),e(296,`Possibilita apresentar totalizadores de uma ou mais colunas ao utilizar o recurso de agrupamento de colunas.
Esta propriedade recebe um array com a lista de objetos com formato da interface `),i(297,"code"),e(298,"ThfAggregateDescriptor"),t(),e(299,"."),t()()(),i(300,"tr",19)(301,"td",20)(302,"div",21)(303,"span",22),e(304," t-allow-batch-delete"),o(305,"br"),t()()(),i(306,"td",23)(307,"code",24),e(308,"boolean"),t()(),i(309,"td",25)(310,"p")(311,"code"),e(312,"false"),t()()(),i(313,"td",26)(314,"em")(315,"strong"),e(316,"(opcional)"),t()(),i(317,"p"),e(318,`Habilita a exclus\xE3o em lote dos itens selecionados na grid. Quando ativado, permite que m\xFAltiplos itens sejam exclu\xEDdos de uma vez
ao utilizar `),i(319,"strong"),e(320,"t-service-api"),t(),e(321," e/ou "),i(322,"strong"),e(323,"t-service-delete-api"),t(),e(324,", desde que o servi\xE7o implemente o m\xE9todo "),i(325,"code"),e(326,"deleteBatchItems"),t(),e(327," da interface "),i(328,"code"),e(329,"ThfGridDeleteService"),t(),e(330,"."),t()()(),i(331,"tr",19)(332,"td",20)(333,"div",21)(334,"span",22),e(335,"t-auto-size"),o(336,"br"),t()()(),i(337,"td",23)(338,"code",24),e(339,"boolean"),t()(),i(340,"td",25)(341,"p")(342,"code"),e(343,"false"),t()()(),i(344,"td",26)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),i(348,"p"),e(349,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(350,"strong"),e(351,"t-resizable"),t(),e(352," esteja habilitada."),t(),i(353,"blockquote")(354,"p"),e(355,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.
Esta propriedade \xE9 incompat\xEDvel quando t-grid-row-actions est\xE1 habilitado.`),t()()()(),i(356,"tr",19)(357,"td",20)(358,"div",21)(359,"span",22),e(360,"t-auto-size-on-scroll"),o(361,"br"),t()()(),i(362,"td",23)(363,"code",24),e(364,"boolean"),t()(),i(365,"td",25)(366,"p")(367,"code"),e(368,"false"),t()()(),i(369,"td",26)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),i(373,"p"),e(374,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(375,"p"),e(376,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(377,"p"),e(378,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(379,"code"),e(380,"t-page-size-virtual"),t(),e(381," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(382,"blockquote")(383,"p")(384,"strong"),e(385,"Pr\xE9-requisitos"),t(),e(386,": Requer que as propriedades "),i(387,"code"),e(388,"t-auto-size"),t(),e(389,", "),i(390,"code"),e(391,"t-resizable"),t(),e(392,`
e `),i(393,"code"),e(394,"t-virtual-scroll"),t(),e(395," (ou altura fixa via "),i(396,"code"),e(397,"[t-height]"),t(),e(398,") estejam habilitadas."),t()(),i(399,"blockquote")(400,"p")(401,"strong"),e(402,"Incompatibilidade"),t(),e(403,": N\xE3o funciona com "),i(404,"code"),e(405,"t-grid-row-actions"),t(),e(406," habilitado;"),t()(),i(407,"p")(408,"strong"),e(409,"Exemplo de uso:"),t()(),i(410,"pre")(411,"code",28),e(412,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>
`),t()()()(),i(413,"tr",19)(414,"td",20)(415,"div",32)(416,"span",33),e(417," (t-before-duplicate)"),o(418,"br"),t()()(),i(419,"td",23)(420,"code",34),e(421,"EventEmitter"),t()(),i(422,"td",25),e(423,"-"),t(),i(424,"td",26)(425,"em")(426,"strong"),e(427,"(opcional)"),t()(),i(428,"p"),e(429,`Evento disparado antes da duplica\xE7\xE3o de uma linha na edi\xE7\xE3o flu\xEDda.
Permite cancelar a a\xE7\xE3o definindo `),i(430,"code"),e(431,"cancel = true"),t(),e(432," e manipular os dados atrav\xE9s de "),i(433,"code"),e(434,"duplicatedRow"),t(),e(435,"."),t()()(),i(436,"tr",19)(437,"td",20)(438,"div",32)(439,"span",33),e(440," (t-change-aggregates)"),o(441,"br"),t()()(),i(442,"td",23)(443,"code",34),e(444,"EventEmitter"),t()(),i(445,"td",25),e(446,"-"),t(),i(447,"td",26)(448,"p"),e(449,"Evento disparado ap\xF3s alterar os "),i(450,"code"),e(451,"aggregates"),t(),e(452,"."),t()()(),i(453,"tr",19)(454,"td",20)(455,"div",32)(456,"span",33),e(457," (t-change-filter-by-column)"),o(458,"br"),t()()(),i(459,"td",23)(460,"code",34),e(461,"EventEmitter"),t()(),i(462,"td",25),e(463,"-"),t(),i(464,"td",26)(465,"em")(466,"strong"),e(467,"(opcional)"),t()(),i(468,"p"),e(469,`Evento disparado ao alterar um filtro por coluna.
Retorna um array de `),i(470,"code"),e(471,"ThfFilterByColumn"),t(),e(472," com as colunas que possuem filtros aplicados."),t()()(),i(473,"tr",19)(474,"td",20)(475,"div",32)(476,"span",33),e(477," (t-change-fixed-columns)"),o(478,"br"),t()()(),i(479,"td",23)(480,"code",34),e(481,"EventEmitter"),t()(),i(482,"td",25),e(483,"-"),t(),i(484,"td",26)(485,"em")(486,"strong"),e(487,"(opcional)"),t()(),i(488,"p"),e(489,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas fixas.
Retorna um array de strings com as colunas fixas atualizadas.`),t()()(),i(490,"tr",19)(491,"td",20)(492,"div",32)(493,"span",33),e(494," (t-change-options-column-manager)"),o(495,"br"),t()()(),i(496,"td",23)(497,"code",34),e(498,"EventEmitter"),t()(),i(499,"td",25),e(500,"-"),t(),i(501,"td",26)(502,"em")(503,"strong"),e(504,"(opcional)"),t()(),i(505,"p"),e(506,`Evento disparado ao selecionar a op\xE7\xE3o draggable ou groupable no Gerenciar Tabela.
Retorna um array de strings contendo as a\xE7\xF5es habilitadas.`),t()()(),i(507,"tr",19)(508,"td",20)(509,"div",32)(510,"span",33),e(511," (t-change-row-state-filter)"),o(512,"br"),t()()(),i(513,"td",23)(514,"code",34),e(515,"EventEmitter"),t()(),i(516,"td",25),e(517,"-"),t(),i(518,"td",26)(519,"em")(520,"strong"),e(521,"(opcional)"),t()(),i(522,"p"),e(523,"Evento disparado quando h\xE1 altera\xE7\xE3o no estado de um filtro de linha."),t()()(),i(524,"tr",19)(525,"td",20)(526,"div",32)(527,"span",33),e(528," (t-change-visible-columns)"),o(529,"br"),t()()(),i(530,"td",23)(531,"code",34),e(532,"EventEmitter"),t()(),i(533,"td",25),e(534,"-"),t(),i(535,"td",26)(536,"em")(537,"strong"),e(538,"(opcional)"),t()(),i(539,"p"),e(540,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas vis\xEDveis.
Retorna um array de strings com as colunas vis\xEDveis atualizadas.`),t()()(),i(541,"tr",19)(542,"td",20)(543,"div",32)(544,"span",33),e(545," (t-changed-density)"),o(546,"br"),t()()(),i(547,"td",23)(548,"code",34),e(549,"EventEmitter"),t()(),i(550,"td",25),e(551,"-"),t(),i(552,"td",26)(553,"em")(554,"strong"),e(555,"(opcional)"),t()(),i(556,"p"),e(557,"Evento disparado ao selecionar o tipo de densidade no Gerenciar Tabela. Retorna a densidade aplicada."),t()()(),i(558,"tr",19)(559,"td",20)(560,"div",32)(561,"span",33),e(562," (t-changed-items)"),o(563,"br"),t()()(),i(564,"td",23)(565,"code",34),e(566,"EventEmitter"),t()(),i(567,"td",25),e(568,"-"),t(),i(569,"td",26)(570,"em")(571,"strong"),e(572,"(opcional)"),t()(),i(573,"p"),e(574,"Evento emitido quando ocorre uma altera\xE7\xE3o em alguma linha da grid."),t()()(),i(575,"tr",19)(576,"td",20)(577,"div",32)(578,"span",33),e(579," (t-restore-column-manager)"),o(580,"br"),t()()(),i(581,"td",23)(582,"code",34),e(583,"EventEmitter"),t()(),i(584,"td",25),e(585,"-"),t(),i(586,"td",26)(587,"em")(588,"strong"),e(589,"(opcional)"),t()(),i(590,"p"),e(591,`Evento disparado quando pressionado o bot\xE3o 'Restaurar padr\xE3o' no Gerenciar Tabela.
Retorna um array de strings com as colunas vis\xEDveis por padr\xE3o.`),t()()(),i(592,"tr",19)(593,"td",20)(594,"div",21)(595,"span",22),e(596,"t-columns"),o(597,"br"),t()()(),i(598,"td",23)(599,"code",37),e(600,"Array<ThfGridColumn>"),t()(),i(601,"td",25),e(602,"-"),t(),i(603,"td",26)(604,"em")(605,"strong"),e(606,"(opcional)"),t()(),i(607,"p"),e(608,"Permite definir e configurar as colunas do grid que implementam a interface "),i(609,"strong"),e(610,"ThfGridColumn"),t(),e(611,"."),t(),i(612,"pre")(613,"code",28),e(614,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-columns]="columns"
></thf-grid>
`),t()(),i(615,"pre")(616,"code",31),e(617,`columns: Array<ThfGridColumn> = [
 { property: 'id', visible: false },
 { property: 'name', label: 'Nome' },
}
`),t()()()(),i(618,"tr",19)(619,"td",20)(620,"div",21)(621,"span",22),e(622,"t-components-size"),o(623,"br"),t()()(),i(624,"td",23)(625,"code",38),e(626,"string"),t()(),i(627,"td",25)(628,"p")(629,"code"),e(630,"medium"),t()()(),i(631,"td",26)(632,"em")(633,"strong"),e(634,"(opcional)"),t()(),i(635,"p"),e(636,"Define o tamanho dos componentes de formul\xE1rio no grid:"),t(),i(637,"ul")(638,"li")(639,"code"),e(640,"small"),t(),e(641,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(642,"li")(643,"code"),e(644,"medium"),t(),e(645,": aplica a medida medium de cada componente."),t()(),i(646,"blockquote")(647,"p"),e(648,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(649,"code"),e(650,"medium"),t(),e(651,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(652,"a",39),e(653,"po-theme"),t(),e(654,"."),t()()()(),i(655,"tr",19)(656,"td",20)(657,"div",21)(658,"span",22),e(659,"t-container"),o(660,"br"),t()()(),i(661,"td",23)(662,"code",24),e(663,"boolean"),t()(),i(664,"td",25)(665,"p")(666,"code"),e(667,"true"),t()()(),i(668,"td",26)(669,"em")(670,"strong"),e(671,"(opcional)"),t()(),i(672,"p"),e(673,"Adiciona um contorno arredondado ao "),i(674,"code"),e(675,"thf-grid"),t(),e(676,"."),t()()(),i(677,"tr",19)(678,"td",20)(679,"div",21)(680,"span",22),e(681,"t-custom-actions"),o(682,"br"),t()()(),i(683,"td",23)(684,"code",40),e(685,"Array<PoDropdownAction>"),t()(),i(686,"td",25),e(687,"-"),t(),i(688,"td",26)(689,"em")(690,"strong"),e(691,"(opcional)"),t()(),i(692,"p"),e(693,"Permite adicionar a\xE7\xF5es customizadas que implementam a interface "),i(694,"strong"),e(695,"PoDropdownAction"),t(),e(696,`.
Essas a\xE7\xF5es ser\xE3o exibidas no dropdown 'Mais a\xE7\xF5es' ao selecionar um item.
Requer que a propriedade `),i(697,"strong"),e(698,"t-selectable"),t(),e(699," esteja habilitada."),t(),i(700,"pre")(701,"code",28),e(702,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-custom-actions]="customActions"
 [t-selectable]="true"></thf-grid>
`),t()(),i(703,"pre")(704,"code",31),e(705,`customActions: Array<PoDropdownAction> = [
 { label: 'Hist\xF3rico', action: this.myAction.bind(this) }];

myAction() {
 window.alert('voce clicou em hist\xF3rico!');
}
`),t()()()(),i(706,"tr",19)(707,"td",20)(708,"div",32)(709,"span",33),e(710," (t-custom-filter)"),o(711,"br"),t()()(),i(712,"td",23)(713,"code",34),e(714,"EventEmitter"),t()(),i(715,"td",25),e(716,"-"),t(),i(717,"td",26)(718,"em")(719,"strong"),e(720,"(opcional)"),t()(),i(721,"p"),e(722,"Evento disparado ao clicar no menu Filtros."),t()()(),i(723,"tr",19)(724,"td",20)(725,"div",21)(726,"span",22),e(727,"t-custom-templates"),o(728,"br"),t()()(),i(729,"td",23)(730,"code",41),e(731,`{ [key: string]: TemplateRef<any>;
}`),t()(),i(732,"td",25),e(733,"-"),t(),i(734,"td",26)(735,"em")(736,"strong"),e(737,"(opcional)"),t()(),i(738,"p"),e(739,"Permite a cria\xE7\xE3o de templates customizados para a edi\xE7\xE3o flu\xEDda da grid, como por exemplo:"),t(),i(740,"pre")(741,"code",28),e(742,`// Exemplo de uso:
<thf-grid
 ...
[t-custom-templates]="{ name: customTemplate }"
></thf-grid>
<ng-template #customTemplate let-formControl="formControl">
  <po-input [formControl]="formControl" p-placeholder="CPF" [p-required]="true"></po-input>
</ng-template>
`),t()(),i(743,"p"),e(744,"\xC9 obrigat\xF3rio passar o formControl como par\xE2metro do template."),t(),i(745,"p"),e(746,`Os eventos de validate, keydown, blur, additional-help, onChangeModel e change n\xE3o s\xE3o emitidos com o uso de templates customizados,
sendo necess\xE1rio o controle desses eventos dentro do pr\xF3prio componente.`),t(),i(747,"p"),e(748,`Caso utilize a propriedade controlValueWithLabel,
\xE9 necess\xE1rio continuar passando no editProperties em columns, em conjunto com fieldLabel, fieldValue e options caso esteja utilizando.`),t(),i(749,"p"),e(750,"Caso o template n\xE3o seja passado, o componente ser\xE1 renderizado de forma padr\xE3o."),t(),i(751,"p"),e(752,"Caso esteja utilizando o componente po-decimal e esteja configurando a propriedade "),i(753,"code"),e(754,"p-decimals-length"),t(),e(755,`, \xE9 necess\xE1rio continuar
enviando via columns em editProperties.`),t(),i(756,"p"),e(757,'Para que o grid exiba a label "(Obrigat\xF3rio)" na coluna, defina em '),i(758,"code"),e(759,"editProperties"),t(),e(760," a propriedade "),i(761,"code"),e(762,"required"),t(),e(763," como "),i(764,"code"),e(765,"true"),t(),e(766,"."),t(),i(767,"blockquote")(768,"p"),e(769,"Para mais detalhes, consulte o exemplo na aba Overview - Edi\xE7\xE3o flu\xEDda."),t()(),i(770,"p"),e(771,"Ao utilizar templates customizados na edi\xE7\xE3o flu\xEDda, \xE9 obrigat\xF3rio definir "),i(772,"code"),e(773,'p-append-in-body="true"'),t(),e(774,` para componentes que possuam listas flutuantes, popovers ou tooltips, bem como para componentes que utilizem po-helper.
`),i(775,"strong"),e(776,"Componentes impactados:"),t()(),i(777,"ul")(778,"li"),e(779,"po-checkbox"),t(),i(780,"li"),e(781,"po-combo"),t(),i(782,"li"),e(783,"po-datepicker"),t(),i(784,"li"),e(785,"po-datepicker-range"),t(),i(786,"li"),e(787,"po-decimal"),t(),i(788,"li"),e(789,"po-input"),t(),i(790,"li"),e(791,"po-login"),t(),i(792,"li"),e(793,"po-lookup"),t(),i(794,"li"),e(795,"po-multiselect"),t(),i(796,"li"),e(797,"po-number"),t(),i(798,"li"),e(799,"po-password"),t(),i(800,"li"),e(801,"po-radio-group"),t(),i(802,"li"),e(803,"po-rich-text"),t(),i(804,"li"),e(805,"po-select"),t(),i(806,"li"),e(807,"po-switch"),t(),i(808,"li"),e(809,"po-textarea"),t(),i(810,"li"),e(811,"po-upload"),t(),i(812,"li"),e(813,"thf-lookup"),t()(),i(814,"blockquote")(815,"p"),e(816,"Para mais informa\xE7\xF5es sobre a propriedade p-append-in-body, consulte a documenta\xE7\xE3o do componente correspondente."),t()()()(),i(817,"tr",19)(818,"td",20)(819,"div",32)(820,"span",33),e(821," (t-delete-item)"),o(822,"br"),t()()(),i(823,"td",23)(824,"code",34),e(825,"EventEmitter"),t()(),i(826,"td",25),e(827,"-"),t(),i(828,"td",26)(829,"em")(830,"strong"),e(831,"(opcional)"),t()(),i(832,"p"),e(833,"Evento disparado ao excluir um item. Retorna o item exclu\xEDdo."),t()()(),i(834,"tr",19)(835,"td",20)(836,"div",21)(837,"span",22),e(838,"t-disabled-include-button"),o(839,"br"),t()()(),i(840,"td",23)(841,"code",24),e(842,"boolean"),t()(),i(843,"td",25)(844,"p")(845,"code"),e(846,"false"),t()()(),i(847,"td",26)(848,"em")(849,"strong"),e(850,"(opcional)"),t()(),i(851,"p"),e(852,`Desabilita o bot\xE3o de Incluir. Ao definir como true, o bot\xE3o ser\xE1 desabilitado.
Ideal para cen\xE1rios onde a inclus\xE3o de novas linhas deve ser restrita.`),t()()(),i(853,"tr",19)(854,"td",20)(855,"div",21)(856,"span",22),e(857,"t-draggable"),o(858,"br"),t()()(),i(859,"td",23)(860,"code",24),e(861,"boolean"),t()(),i(862,"td",25)(863,"p")(864,"code"),e(865,"false"),t()()(),i(866,"td",26)(867,"em")(868,"strong"),e(869,"(opcional)"),t()(),i(870,"p"),e(871,"Habilita o Drag and Drop nas colunas."),t()()(),i(872,"tr",19)(873,"td",20)(874,"div",21)(875,"span",22),e(876,"t-edit-properties"),o(877,"br"),t()()(),i(878,"td",23)(879,"code",42),e(880,"ThfGridEditProperties"),t()(),i(881,"td",25),e(882,"-"),t(),i(883,"td",26)(884,"em")(885,"strong"),e(886,"(opcional)"),t()(),i(887,"p"),e(888,"Permite configurar a edi\xE7\xE3o em linha, implementando a interface "),i(889,"strong"),e(890,"ThfGridEditProperties"),t(),e(891,`.
Exemplo de uso na aba Interfaces >> ThfGridEditProperties.`),t(),i(892,"blockquote")(893,"p"),e(894,"Para garantir o correto funcionamento da conclus\xE3o da edi\xE7\xE3o dos dados, \xE9 necess\xE1rio que os dados contenham uma coluna de ID ou que pelo menos uma coluna tenha a propriedade KEY definida como true."),t()()()(),i(895,"tr",19)(896,"td",20)(897,"div",32)(898,"span",33),e(899," (t-change-page-size)"),o(900,"br"),t()()(),i(901,"td",23)(902,"code",34),e(903,"EventEmitter"),t()(),i(904,"td",25),e(905,"-"),t(),i(906,"td",26)(907,"em")(908,"strong"),e(909,"(opcional)"),t()(),i(910,"p"),e(911,"Evento disparado ao alterar a quantidade de itens por p\xE1gina. Retorna um objeto com o page-size atual."),t()()(),i(912,"tr",19)(913,"td",20)(914,"div",21)(915,"span",22),e(916,"t-fields"),o(917,"br"),t()()(),i(918,"td",23)(919,"code",43),e(920,"Array<PoPageDynamicSearchFilters>"),t()(),i(921,"td",25),e(922,"-"),t(),i(923,"td",26)(924,"em")(925,"strong"),e(926,"(opcional)"),t()(),i(927,"p"),e(928,"Permite definir os campos filtr\xE1veis na janela 'Filtros', implementando a interface "),i(929,"strong"),e(930,"PoPageDynamicSearchFilters"),t(),e(931,"."),t(),i(932,"pre")(933,"code",28),e(934,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-fields]="customFields"
></thf-grid>
`),t()(),i(935,"pre")(936,"code",31),e(937,`customFields: Array<PoPageDynamicSearchFilters> = [{ property: 'name', required: true, showRequired: true }]
`),t()()()(),i(938,"tr",19)(939,"td",20)(940,"div",21)(941,"span",22),e(942,"t-filter-column-properties"),o(943,"br"),t()()(),i(944,"td",23)(945,"code",44),e(946,"Array<ThfFilterByColumn>"),t()(),i(947,"td",25),e(948,"-"),t(),i(949,"td",26)(950,"em")(951,"strong"),e(952,"(opcional)"),t()(),i(953,"p"),e(954,"Permite definir filtros por coluna logo na inicializa\xE7\xE3o, deixando o grid j\xE1 filtrado ao ser carregado."),t(),i(955,"pre")(956,"code",31),e(957,`filterColumnProperties = [
  {
    property: 'name',
    operator1: 'contains',
    value1: 'Ana'
  },
  {
    property: 'age',
    operator1: 'gte',
    value1: 18
  }
];
`),t()()()(),i(958,"tr",19)(959,"td",20)(960,"div",21)(961,"span",22),e(962,"t-filter-input-mode"),o(963,"br"),t()()(),i(964,"td",23)(965,"code",45),e(966,"'basic' "),t(),i(967,"code",46),e(968," 'service'"),t()(),i(969,"td",25)(970,"p")(971,"code"),e(972,"basic"),t()()(),i(973,"td",26)(974,"em")(975,"strong"),e(976,"(opcional)"),t()(),i(977,"p"),e(978,"Define o modo do filtro para o input de pesquisa."),t()()(),i(979,"tr",19)(980,"td",20)(981,"div",21)(982,"span",22),e(983,"t-grid-row-actions"),o(984,"br"),t()()(),i(985,"td",23)(986,"code",47),e(987,"ThfGridRowActions"),t()(),i(988,"td",25),e(989,"-"),t(),i(990,"td",26)(991,"em")(992,"strong"),e(993,"(opcional)"),t()(),i(994,"p"),e(995,"Configura a edi\xE7\xE3o flu\xEDda, implementando a interface "),i(996,"strong"),e(997,"ThfGridRowActions"),t(),e(998,`.
Permite manipular o comportamento das a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o de itens.
\xC9 poss\xEDvel definir fun\xE7\xF5es espec\xEDficas para controlar as a\xE7\xF5es antes e depois das opera\xE7\xF5es.
Fundamental para implementar um fluxo de manipula\xE7\xE3o de dados totalmente personalizado.`),t(),i(999,"blockquote")(1e3,"p"),e(1001,`Ao habilitar t-grid-row-actions a propriedade t-auto-size \xE9 desabilitada para manter a padroniza\xE7\xE3o das larguras das colunas edit\xE1veis.
Quando o t-grid-row-actions \xE9 habilitado, a propriedade t-resizable \xE9 ativada automaticamente.`),t()()()(),i(1002,"tr",19)(1003,"td",20)(1004,"div",21)(1005,"span",22),e(1006," t-group"),o(1007,"br"),t()()(),i(1008,"td",23)(1009,"code",48),e(1010,"Array<string>"),t()(),i(1011,"td",25),e(1012,"-"),t(),i(1013,"td",26)(1014,"em")(1015,"strong"),e(1016,"(opcional)"),t()(),i(1017,"p"),e(1018,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1019,"strong"),e(1020,"t-groupable"),t(),e(1021," esteja habilitada."),t()()(),i(1022,"tr",19)(1023,"td",20)(1024,"div",21)(1025,"span",22),e(1026,"t-groupable"),o(1027,"br"),t()()(),i(1028,"td",23)(1029,"code",24),e(1030,"boolean "),t(),i(1031,"code",49),e(1032," GroupableSettings"),t()(),i(1033,"td",25)(1034,"p")(1035,"code"),e(1036,"false"),t()()(),i(1037,"td",26)(1038,"em")(1039,"strong"),e(1040,"(opcional)"),t()(),i(1041,"p"),e(1042,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1043,"tr",19)(1044,"td",20)(1045,"div",21)(1046,"span",22),e(1047,"t-header-template"),o(1048,"br"),t()()(),i(1049,"td",23)(1050,"code",50),e(1051,"TemplateRef<void>"),t()(),i(1052,"td",25),e(1053,"-"),t(),i(1054,"td",26)(1055,"em")(1056,"strong"),e(1057,"(opcional)"),t()(),i(1058,"p"),e(1059,"Container aberto para adicionar conte\xFAdo entre o cabe\xE7alho de a\xE7\xF5es e a lista do grid."),t(),i(1060,"pre")(1061,"code",28),e(1062,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-header-template]="template"
></thf-grid>

<ng-template #template>
 <div style="display: flex; gap: 8px; align-items: center;">
   <po-tag [p-type]="tagTypeDanger" p-value="Remover todos"> </po-tag>
   <po-tag [p-type]="tagTypeInfo" [p-removable]="true" p-value="Brasil"> </po-tag>
   <po-tag [p-type]="tagTypeInfo" [p-removable]="true" p-value="College"> </po-tag>
 </div>
</ng-template>
`),t()()()(),i(1063,"tr",19)(1064,"td",20)(1065,"div",21)(1066,"span",22),e(1067,"t-headline-fixed"),o(1068,"br"),t()()(),i(1069,"td",23)(1070,"code",24),e(1071,"boolean"),t()(),i(1072,"td",25)(1073,"p")(1074,"code"),e(1075,"false"),t()()(),i(1076,"td",26)(1077,"em")(1078,"strong"),e(1079,"(opcional)"),t()(),i(1080,"p"),e(1081,"Define o cabe\xE7alho do grid como fixo, desde que a altura ("),i(1082,"strong"),e(1083,"t-height"),t(),e(1084,") n\xE3o esteja definida."),t()()(),i(1085,"tr",19)(1086,"td",20)(1087,"div",21)(1088,"span",22),e(1089,"t-height"),o(1090,"br"),t()()(),i(1091,"td",23)(1092,"code",51),e(1093,"number "),t(),i(1094,"code",38),e(1095," string "),t(),i(1096,"code",52),e(1097," null"),t()(),i(1098,"td",25)(1099,"p"),e(1100,"100%"),t()(),i(1101,"td",26)(1102,"em")(1103,"strong"),e(1104,"(opcional)"),t()(),i(1105,"p"),e(1106,"Define a altura da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1107,"code"),e(1108,'"<n\xFAmero>%"'),t(),e(1109,")."),t(),i(1110,"ul")(1111,"li"),e(1112,"Se "),i(1113,"strong"),e(1114,"n\xE3o informado"),t(),e(1115,", a altura da tabela ser\xE1 ajustada automaticamente pela quantidade de itens."),t(),i(1116,"li"),e(1117,"Caso seja informado um valor inv\xE1lido, ser\xE1 aplicado "),i(1118,"strong"),e(1119,"100%"),t(),e(1120," como padr\xE3o."),t(),i(1121,"li"),e(1122,"Se "),i(1123,"code"),e(1124,"t-height"),t(),e(1125," for menor que "),i(1126,"code"),e(1127,"t-min-height"),t(),e(1128,", a altura m\xEDnima ser\xE1 aplicada."),t(),i(1129,"li"),e(1130,"Se "),i(1131,"code"),e(1132,"t-height"),t(),e(1133," for maior que "),i(1134,"code"),e(1135,"t-max-height"),t(),e(1136,", a altura m\xE1xima ser\xE1 aplicada."),t()(),i(1137,"blockquote")(1138,"p")(1139,"strong"),e(1140,"Observa\xE7\xE3o:"),t(),e(1141," Quando definido, o "),i(1142,"strong"),e(1143,"virtual scroll"),t(),e(1144," ser\xE1 ativado automaticamente. Consulte a documenta\xE7\xE3o da propriedade "),i(1145,"strong"),e(1146,"t-virtual-scroll"),t(),e(1147," para mais detalhes."),t()()()(),i(1148,"tr",19)(1149,"td",20)(1150,"div",21)(1151,"span",22),e(1152,"t-hide-action-fixed-columns"),o(1153,"br"),t()()(),i(1154,"td",23)(1155,"code",24),e(1156,"boolean"),t()(),i(1157,"td",25)(1158,"p")(1159,"code"),e(1160,"false"),t()()(),i(1161,"td",26)(1162,"em")(1163,"strong"),e(1164,"(opcional)"),t()(),i(1165,"p"),e(1166,`Controla a visibilidade da op\xE7\xE3o de fixar colunas no Gerenciar Tabela.
Se alguma coluna j\xE1 estiver fixa quando essa propriedade for habilitada,
ela permanecer\xE1 fixa, garantindo que ocultar as op\xE7\xF5es de fixar n\xE3o afete o estado das colunas j\xE1 fixadas.`),t()()(),i(1167,"tr",19)(1168,"td",20)(1169,"div",21)(1170,"span",22),e(1171," t-hide-batch-actions"),o(1172,"br"),t()()(),i(1173,"td",23)(1174,"code",24),e(1175,"boolean"),t()(),i(1176,"td",25)(1177,"p")(1178,"code"),e(1179,"false"),t()()(),i(1180,"td",26)(1181,"em")(1182,"strong"),e(1183,"(opcional)"),t()(),i(1184,"p"),e(1185,"Permite ocultar as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens."),t()()(),i(1186,"tr",19)(1187,"td",20)(1188,"div",21)(1189,"span",22),e(1190,"t-hide-columns-manager"),o(1191,"br"),t()()(),i(1192,"td",23)(1193,"code",24),e(1194,"boolean"),t()(),i(1195,"td",25)(1196,"p")(1197,"code"),e(1198,"false"),t()()(),i(1199,"td",26)(1200,"em")(1201,"strong"),e(1202,"(opcional)"),t()(),i(1203,"p"),e(1204,"Permite ocultar o bot\xE3o Gerenciar Tabela."),t()()(),i(1205,"tr",19)(1206,"td",20)(1207,"div",21)(1208,"span",22),e(1209,"t-hide-select-all"),o(1210,"br"),t()()(),i(1211,"td",23)(1212,"code",24),e(1213,"boolean"),t()(),i(1214,"td",25)(1215,"p")(1216,"code"),e(1217,"false"),t()()(),i(1218,"td",26)(1219,"em")(1220,"strong"),e(1221,"(opcional)"),t()(),i(1222,"p"),e(1223,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1224,"tr",19)(1225,"td",20)(1226,"div",21)(1227,"span",22),e(1228,"t-hide-table-search"),o(1229,"br"),t()()(),i(1230,"td",23)(1231,"code",24),e(1232,"boolean"),t()(),i(1233,"td",25)(1234,"p")(1235,"code"),e(1236,"false"),t()()(),i(1237,"td",26)(1238,"em")(1239,"strong"),e(1240,"(opcional)"),t()(),i(1241,"p"),e(1242,"Permite ocultar o campo de pesquisa."),t()()(),i(1243,"tr",19)(1244,"td",20)(1245,"div",21)(1246,"span",22),e(1247," t-loading"),o(1248,"br"),t()()(),i(1249,"td",23)(1250,"code",24),e(1251,"boolean"),t()(),i(1252,"td",25)(1253,"p")(1254,"code"),e(1255,"false"),t()()(),i(1256,"td",26)(1257,"em")(1258,"strong"),e(1259,"(opcional)"),t()(),i(1260,"p"),e(1261,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados do grid."),t()()(),i(1262,"tr",19)(1263,"td",20)(1264,"div",21)(1265,"span",22),e(1266,"t-items"),o(1267,"br"),t()()(),i(1268,"td",23)(1269,"code",53),e(1270,"Array<any>"),t()(),i(1271,"td",25),e(1272,"-"),t(),i(1273,"td",26)(1274,"em")(1275,"strong"),e(1276,"(opcional)"),t()(),i(1277,"p"),e(1278,`Permite listar os itens no grid.
Cada item do array representa uma linha no grid e deve conter as propriedades
que correspondem \xE0s colunas definidas no grid.`),t(),i(1279,"pre")(1280,"code",28),e(1281,`// Exemplo de uso:
<thf-grid
 [t-items]="[{ name: 'M\xF4nica'}, { name: 'Cebolinha'}]"
></thf-grid>
`),t()()()(),i(1282,"tr",19)(1283,"td",20)(1284,"div",32)(1285,"span",33),e(1286," (t-items-after-get)"),o(1287,"br"),t()()(),i(1288,"td",23)(1289,"code",34),e(1290,"EventEmitter"),t()(),i(1291,"td",25),e(1292,"-"),t(),i(1293,"td",26)(1294,"em")(1295,"strong"),e(1296,"(opcional)"),t()(),i(1297,"p"),e(1298,`Evento disparado ap\xF3s finaliza\xE7\xE3o das requisi\xE7\xF5es de GET.
Dispara no GET inicial caso esteja utilizando `),i(1299,"strong"),e(1300,"t-service-api"),t(),e(1301,`.
Dispara tamb\xE9m no GET de filtros caso esteja utilizando a propriedade `),i(1302,"strong"),e(1303,"t-actions-filter"),t(),e(1304,`
ou no GET do input de pesquisa quando a propriedade `),i(1305,"strong"),e(1306,"t-filter-input-mode"),t(),e(1307," estiver como "),i(1308,"code"),e(1309,"service"),t(),e(1310,`.
Retorna os itens atuais da tabela, o total de itens, n\xFAmero da p\xE1gina atual e pageSize.`),t()()(),i(1311,"tr",19)(1312,"td",20)(1313,"div",21)(1314,"span",22),e(1315,"t-literals"),o(1316,"br"),t()()(),i(1317,"td",23)(1318,"code",54),e(1319,"ThfGridLiterals"),t()(),i(1320,"td",25),e(1321,"-"),t(),i(1322,"td",26)(1323,"em")(1324,"strong"),e(1325,"(opcional)"),t()(),i(1326,"p"),e(1327,"Permite definir literais personalizados para o componente, conforme a interface "),i(1328,"strong"),e(1329,"ThfGridLiterals"),t(),e(1330,"."),t(),i(1331,"pre")(1332,"code",28),e(1333,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-literals]="customLiterals"
></thf-grid>
`),t()(),i(1334,"pre")(1335,"code",31),e(1336,`customLiterals: ThfGridLiterals = { advancedSearch: 'Mais filtros' };
`),t()()()(),i(1337,"tr",19)(1338,"td",20)(1339,"div",21)(1340,"span",22),e(1341,"t-max-columns"),o(1342,"br"),t()()(),i(1343,"td",23)(1344,"code",51),e(1345,"number"),t()(),i(1346,"td",25),e(1347,"-"),t(),i(1348,"td",26)(1349,"em")(1350,"strong"),e(1351,"(opcional)"),t()(),i(1352,"p"),e(1353,`Define a quantidade m\xE1xima de colunas que ser\xE3o exibidas no grid.
Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o desabilitadas e
caso houver mais colunas vis\xEDveis do que o permitido, as excedentes ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),t()()(),i(1354,"tr",19)(1355,"td",20)(1356,"div",21)(1357,"span",22),e(1358," t-max-height"),o(1359,"br"),t()()(),i(1360,"td",23)(1361,"code",51),e(1362,"number "),t(),i(1363,"code",38),e(1364," string "),t(),i(1365,"code",52),e(1366," null"),t()(),i(1367,"td",25),e(1368,"-"),t(),i(1369,"td",26)(1370,"em")(1371,"strong"),e(1372,"(opcional)"),t()(),i(1373,"p"),e(1374,"Define a "),i(1375,"strong"),e(1376,"altura m\xE1xima"),t(),e(1377," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1378,"code"),e(1379,'"<n\xFAmero>%"'),t(),e(1380,")."),t(),i(1381,"ul")(1382,"li"),e(1383,"Se "),i(1384,"strong"),e(1385,"n\xE3o informado"),t(),e(1386,", a altura m\xE1xima ser\xE1 definida pela propriedade "),i(1387,"code"),e(1388,"t-height"),t(),e(1389,", se existir."),t(),i(1390,"li"),e(1391,"Caso "),i(1392,"code"),e(1393,"t-height"),t(),e(1394," seja "),i(1395,"strong"),e(1396,"maior"),t(),e(1397," que "),i(1398,"code"),e(1399,"t-max-height"),t(),e(1400,", o grid usar\xE1 "),i(1401,"code"),e(1402,"t-max-height"),t(),e(1403," como limite superior."),t(),i(1404,"li"),e(1405,"Caso o valor passado seja inv\xE1lido, "),i(1406,"strong"),e(1407,"nenhuma altura m\xE1xima ser\xE1 aplicada"),t(),e(1408,"."),t()()()(),i(1409,"tr",19)(1410,"td",20)(1411,"div",21)(1412,"span",22),e(1413,"t-max-resizable-width"),o(1414,"br"),t()()(),i(1415,"td",23)(1416,"code",51),e(1417,"number"),t()(),i(1418,"td",25),e(1419,"-"),t(),i(1420,"td",26)(1421,"em")(1422,"strong"),e(1423,"(opcional)"),t()(),i(1424,"p"),e(1425,"Define a largura m\xE1xima para redimensionar uma coluna. Requer que a propriedade "),i(1426,"strong"),e(1427,"t-resizable"),t(),e(1428," esteja habilitada."),t()()(),i(1429,"tr",19)(1430,"td",20)(1431,"div",21)(1432,"span",22),e(1433," t-min-height"),o(1434,"br"),t()()(),i(1435,"td",23)(1436,"code",51),e(1437,"number "),t(),i(1438,"code",38),e(1439," string "),t(),i(1440,"code",52),e(1441," null"),t()(),i(1442,"td",25),e(1443,"-"),t(),i(1444,"td",26)(1445,"em")(1446,"strong"),e(1447,"(opcional)"),t()(),i(1448,"p"),e(1449,"Define a "),i(1450,"strong"),e(1451,"altura m\xEDnima"),t(),e(1452," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1453,"code"),e(1454,'"<n\xFAmero>%"'),t(),e(1455,")."),t(),i(1456,"ul")(1457,"li"),e(1458,"Se "),i(1459,"strong"),e(1460,"n\xE3o informado"),t(),e(1461,", a altura m\xEDnima ser\xE1 definida pela propriedade "),i(1462,"code"),e(1463,"t-height"),t(),e(1464,", se existir."),t(),i(1465,"li"),e(1466,"Caso "),i(1467,"code"),e(1468,"t-height"),t(),e(1469," seja "),i(1470,"strong"),e(1471,"menor"),t(),e(1472," que "),i(1473,"code"),e(1474,"t-min-height"),t(),e(1475,", o grid usar\xE1 "),i(1476,"code"),e(1477,"t-min-height"),t(),e(1478," como limite inferior."),t(),i(1479,"li"),e(1480,"Caso o valor passado seja inv\xE1lido, "),i(1481,"strong"),e(1482,"nenhuma altura m\xEDnima ser\xE1 aplicada"),t(),e(1483,"."),t()()()(),i(1484,"tr",19)(1485,"td",20)(1486,"div",21)(1487,"span",22),e(1488,"t-min-resizable-width"),o(1489,"br"),t()()(),i(1490,"td",23)(1491,"code",51),e(1492,"number"),t()(),i(1493,"td",25)(1494,"p")(1495,"code"),e(1496,"10"),t()()(),i(1497,"td",26)(1498,"em")(1499,"strong"),e(1500,"(opcional)"),t()(),i(1501,"p"),e(1502,"Define a largura m\xEDnima para redimensionar uma coluna. Requer que a propriedade "),i(1503,"strong"),e(1504,"t-resizable"),t(),e(1505," esteja habilitada."),t()()(),i(1506,"tr",19)(1507,"td",20)(1508,"div",32)(1509,"span",33),e(1510," (t-change-group)"),o(1511,"br"),t()()(),i(1512,"td",23)(1513,"code",34),e(1514,"EventEmitter"),t()(),i(1515,"td",25),e(1516,"-"),t(),i(1517,"td",26)(1518,"em")(1519,"strong"),e(1520,"(opcional)"),t()(),i(1521,"p"),e(1522,"Evento disparado quando ocorre o agrupamento no grid. Retorna um array de strings das colunas agrupadas."),t()()(),i(1523,"tr",19)(1524,"td",20)(1525,"div",21)(1526,"span",22),e(1527," t-load"),o(1528,"br"),t()()(),i(1529,"td",23)(1530,"code",38),e(1531,"string "),t(),i(1532,"code",55),e(1533," (() => ThfGridOptions)"),t()(),i(1534,"td",25),e(1535,"-"),t(),i(1536,"td",26)(1537,"em")(1538,"strong"),e(1539,"(opcional)"),t()(),i(1540,"p"),e(1541,`Define dinamicamente as colunas e a\xE7\xF5es do grid ap\xF3s o carregamento inicial dos dados.
Pode ser uma URL que retorna a configura\xE7\xE3o via GET ou uma fun\xE7\xE3o que retorna a configura\xE7\xE3o diretamente.
Quando fun\xE7\xE3o, a propriedade deve implementar a interface `),i(1542,"strong"),e(1543,"ThfGridOptions"),t(),e(1544,"."),t()()(),i(1545,"tr",19)(1546,"td",20)(1547,"div",21)(1548,"span",22),e(1549,"t-options-paging"),o(1550,"br"),t()()(),i(1551,"td",23)(1552,"code",56),e(1553,"Array<ThfGridOptionPaging>"),t()(),i(1554,"td",25),e(1555,"-"),t(),i(1556,"td",26)(1557,"em")(1558,"strong"),e(1559,"(opcional)"),t()(),i(1560,"p"),e(1561,"Define as op\xE7\xF5es de itens por p\xE1gina, implementando a interface "),i(1562,"strong"),e(1563,"ThfGridOptionPaging"),t(),e(1564,`.
Requer que a propriedade `),i(1565,"strong"),e(1566,"t-pageable"),t(),e(1567," esteja habilitada."),t()()(),i(1568,"tr",19)(1569,"td",20)(1570,"div",32)(1571,"span",33),e(1572," (t-change-order-column)"),o(1573,"br"),t()()(),i(1574,"td",23)(1575,"code",34),e(1576,"EventEmitter"),t()(),i(1577,"td",25),e(1578,"-"),t(),i(1579,"td",26)(1580,"em")(1581,"strong"),e(1582,"(opcional)"),t()(),i(1583,"p"),e(1584,`Evento disparado quando a ordem das colunas \xE9 alterada atrav\xE9s do Gerenciar Tabela ou pelo Draggable.
Retorna um array de strings.`),t()()(),i(1585,"tr",19)(1586,"td",20)(1587,"div",21)(1588,"span",22),e(1589,"t-page-size"),o(1590,"br"),t()()(),i(1591,"td",23)(1592,"code",51),e(1593,"number"),t()(),i(1594,"td",25)(1595,"p")(1596,"code"),e(1597,"10"),t()()(),i(1598,"td",26)(1599,"em")(1600,"strong"),e(1601,"(opcional)"),t()(),i(1602,"p"),e(1603,"Define a quantidade de itens default na p\xE1gina. Requer que a propriedade "),i(1604,"strong"),e(1605,"t-pageable"),t(),e(1606," esteja habilitada."),t()()(),i(1607,"tr",19)(1608,"td",20)(1609,"div",21)(1610,"span",22),e(1611,"t-page-size-virtual"),o(1612,"br"),t()()(),i(1613,"td",23)(1614,"code",51),e(1615,"number"),t()(),i(1616,"td",25)(1617,"p")(1618,"code"),e(1619,"60"),t()()(),i(1620,"td",26)(1621,"em")(1622,"strong"),e(1623,"(opcional)"),t()(),i(1624,"p"),e(1625,`Necess\xE1rio quando o virtual scroll est\xE1 habilitado para evitar comportamentos inesperados durante a rolagem.
Recomenda-se que o valor seja pelo menos 3 vezes o n\xFAmero de itens vis\xEDveis no grid.`),t()()(),i(1626,"tr",19)(1627,"td",20)(1628,"div",21)(1629,"span",22),e(1630,"t-pageable"),o(1631,"br"),t()()(),i(1632,"td",23)(1633,"code",24),e(1634,"boolean"),t()(),i(1635,"td",25)(1636,"p")(1637,"code"),e(1638,"false"),t()()(),i(1639,"td",26)(1640,"em")(1641,"strong"),e(1642,"(opcional)"),t()(),i(1643,"p"),e(1644,"Exibe o bot\xE3o 'Carregar mais resultados' e habilita a pagina\xE7\xE3o no Gerenciar Tabela."),t()()(),i(1645,"tr",19)(1646,"td",20)(1647,"div",21)(1648,"span",22),e(1649,"t-param-delete-api"),o(1650,"br"),t()()(),i(1651,"td",23)(1652,"code",38),e(1653,"string"),t()(),i(1654,"td",25),e(1655,"-"),t(),i(1656,"td",26)(1657,"em")(1658,"strong"),e(1659,"(opcional)"),t()(),i(1660,"p"),e(1661,"Define o par\xE2metro para a requisi\xE7\xE3o de DELETE ou POST(caso a propriedade "),i(1662,"code"),e(1663,"t-allow-batch-delete"),t(),e(1664," seja definida)."),t(),i(1665,"p"),e(1666,"Quando "),i(1667,"strong"),e(1668,"t-service-delete-api"),t(),e(1669," estiver configurado e o valor de "),i(1670,"strong"),e(1671,"t-param-delete-api"),t(),e(1672,` n\xE3o for informado,
por padr\xE3o, ser\xE1 enviado `),i(1673,"code"),e(1674,"key"),t(),e(1675," (definido ao usar "),i(1676,"strong"),e(1677,"ThfGridColumn"),t(),e(1678,") ou, na aus\xEAncia, "),i(1679,"code"),e(1680,"id"),t(),e(1681,`. Caso
`),i(1682,"strong"),e(1683,"t-service-delete-api"),t(),e(1684," n\xE3o esteja definido, ser\xE1 considerada a URL de "),i(1685,"strong"),e(1686,"t-service-api"),t(),e(1687,"."),t(),i(1688,"blockquote")(1689,"p"),e(1690,"Durante a exclus\xE3o de um \xFAnico item, ele ser\xE1 enviado como par\xE2metro na URL, conforme o exemplo abaixo:"),t(),i(1691,"pre")(1692,"code"),e(1693,`// Considerando t-param-delete-api="email"
DELETE /items?email=email1@example.com
`),t()(),i(1694,"p"),e(1695,"Caso o valor n\xE3o seja uma propriedade v\xE1lida do item, o grid ir\xE1 considerar as keys definidas na coluna"),t(),i(1696,"pre")(1697,"code"),e(1698,`// Considerando t-param-delete-api="propriedadeInexistente" e as colunas "id" e "email" com keys definidas
DELETE /items?propriedadeInexistente=1|email1@example.com
`),t()(),i(1699,"p"),e(1700,"Na aus\xEAncia do t-param-delete-api e das keys, o grid ir\xE1 considerar o id do item e enviar diretamente como par\xE2metro na URL:"),t(),i(1701,"pre")(1702,"code"),e(1703,`// Considerando t-param-delete-api="email" e sem keys definidas
DELETE /items/1
`),t()()(),i(1704,"blockquote")(1705,"p"),e(1706,"Durante a exclus\xE3o em lote, ele ser\xE1 enviado no corpo da requisi\xE7\xE3o POST como o \xEDndice "),i(1707,"code"),e(1708,"paramDelete"),t(),e(1709,", conforme o exemplo abaixo:"),t(),i(1710,"pre")(1711,"code",57),e(1712,`// Considerando t-param-delete-api="email"
{
  items: [
    { id: '1', email: 'email1@example.com' },
    { id: '2', email: 'email2@example.com' }
  ],
  keys: ['email1@example.com', 'email2@example.com'],
  total: 2,
  paramDelete: "email"
}
`),t()()()()(),i(1713,"tr",19)(1714,"td",20)(1715,"div",21)(1716,"span",22),e(1717,"t-resizable"),o(1718,"br"),t()()(),i(1719,"td",23)(1720,"code",24),e(1721,"boolean"),t()(),i(1722,"td",25)(1723,"p")(1724,"code"),e(1725,"false"),t()()(),i(1726,"td",26)(1727,"em")(1728,"strong"),e(1729,"(opcional)"),t()(),i(1730,"p"),e(1731,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1732,"tr",19)(1733,"td",20)(1734,"div",21)(1735,"span",22),e(1736,"t-row-height"),o(1737,"br"),t()()(),i(1738,"td",23)(1739,"code",51),e(1740,"number"),t()(),i(1741,"td",25),e(1742,"-"),t(),i(1743,"td",26)(1744,"em")(1745,"strong"),e(1746,"(opcional)"),t()(),i(1747,"p"),e(1748,`Define a altura da linha quando o virtual scroll est\xE1 habilitado.
Necess\xE1ria para calcular corretamente o n\xFAmero de itens vis\xEDveis e evitar comportamentos inesperados durante a rolagem.
Recomenda-se o uso dessa propriedade ao utilizar colunas com templates personalizados
(`),i(1749,"code"),e(1750,"columnTemplate"),t(),e(1751," e "),i(1752,"code"),e(1753,"cellTemplate"),t(),e(1754,")."),t()()(),i(1755,"tr",19)(1756,"td",20)(1757,"div",32)(1758,"span",33),e(1759," (t-rows-selected)"),o(1760,"br"),t()()(),i(1761,"td",23)(1762,"code",34),e(1763,"EventEmitter"),t()(),i(1764,"td",25),e(1765,"-"),t(),i(1766,"td",26)(1767,"p"),e(1768,"Retorna um array indicando quais s\xE3o as linhas selecionadas no momento."),t()()(),i(1769,"tr",19)(1770,"td",20)(1771,"div",21)(1772,"span",22),e(1773,"t-selectable"),o(1774,"br"),t()()(),i(1775,"td",23)(1776,"code",24),e(1777,"boolean"),t()(),i(1778,"td",25)(1779,"p")(1780,"code"),e(1781,"false"),t()()(),i(1782,"td",26)(1783,"em")(1784,"strong"),e(1785,"(opcional)"),t()(),i(1786,"p"),e(1787,`Habilita a sele\xE7\xE3o de itens, adicionando uma coluna com checkbox.
A sele\xE7\xE3o padr\xE3o \xE9 m\xFAltipla, permitindo selecionar v\xE1rios itens ao mesmo tempo.`),t()()(),i(1788,"tr",19)(1789,"td",20)(1790,"div",21)(1791,"span",22),e(1792,"t-selectable-entire-line"),o(1793,"br"),t()()(),i(1794,"td",23)(1795,"code",24),e(1796,"boolean"),t()(),i(1797,"td",25)(1798,"p")(1799,"code"),e(1800,"true"),t()()(),i(1801,"td",26)(1802,"em")(1803,"strong"),e(1804,"(opcional)"),t()(),i(1805,"p"),e(1806,"Permite selecionar o item ao clicar na linha. Requer que a propriedade "),i(1807,"strong"),e(1808,"t-selectable"),t(),e(1809," esteja habilitada."),t()()(),i(1810,"tr",19)(1811,"td",20)(1812,"div",21)(1813,"span",22),e(1814,"t-selectable-removed"),o(1815,"br"),t()()(),i(1816,"td",23)(1817,"code",24),e(1818,"boolean"),t()(),i(1819,"td",25)(1820,"p")(1821,"code"),e(1822,"false"),t()()(),i(1823,"td",26)(1824,"em")(1825,"strong"),e(1826,"(opcional)"),t()(),i(1827,"p"),e(1828,"Controla se os itens exibidos quando o filtro de estado estiver em 'removed' poder\xE3o ser selecionados."),t()()(),i(1829,"tr",19)(1830,"td",20)(1831,"div",32)(1832,"span",33),e(1833," (t-selected)"),o(1834,"br"),t()()(),i(1835,"td",23)(1836,"code",34),e(1837,"EventEmitter"),t()(),i(1838,"td",25),e(1839,"-"),t(),i(1840,"td",26)(1841,"em")(1842,"strong"),e(1843,"(opcional)"),t()(),i(1844,"p"),e(1845,"Evento disparado quando selecionado um item. Retorna o item selecionado."),t()()(),i(1846,"tr",19)(1847,"td",20)(1848,"div",32)(1849,"span",33),e(1850," (t-all-selected)"),o(1851,"br"),t()()(),i(1852,"td",23)(1853,"code",34),e(1854,"EventEmitter"),t()(),i(1855,"td",25),e(1856,"-"),t(),i(1857,"td",26)(1858,"em")(1859,"strong"),e(1860,"(opcional)"),t()(),i(1861,"p"),e(1862,"Evento disparado quando selecionado todos os itens. Retorna todos os itens selecionados."),t()()(),i(1863,"tr",19)(1864,"td",20)(1865,"div",21)(1866,"span",22),e(1867,"t-service-delete-api"),o(1868,"br"),t()()(),i(1869,"td",23)(1870,"code",38),e(1871,"string "),t(),i(1872,"code",58),e(1873," ThfGridDeleteService"),t()(),i(1874,"td",25),e(1875,"-"),t(),i(1876,"td",26)(1877,"em")(1878,"strong"),e(1879,"(opcional)"),t()(),i(1880,"p"),e(1881,`Respons\xE1vel por excluir o item. Aceita um servi\xE7o que implementa a interface
`),i(1882,"strong"),e(1883,"ThfGridDeleteService"),t(),e(1884," ou uma URL."),t(),i(1885,"p"),e(1886,`Ao selecionar o bot\xE3o de excluir, essa URL ou servi\xE7o ser\xE1 chamado, enviando o par\xE2metro definido na propriedade
`),i(1887,"strong"),e(1888,"t-param-delete-api"),t(),e(1889,". Se configurado e "),i(1890,"strong"),e(1891,"t-param-delete-api"),t(),e(1892," n\xE3o for informado, ser\xE1 enviado "),i(1893,"code"),e(1894,"key"),t(),e(1895,`
(definido ao usar `),i(1896,"strong"),e(1897,"ThfGridColumn"),t(),e(1898,") ou, na aus\xEAncia, "),i(1899,"code"),e(1900,"id"),t(),e(1901,"."),t(),i(1902,"p"),e(1903,"Por padr\xE3o, a exclus\xE3o \xE9 feita item a item. No entanto, ao habilitar a propriedade "),i(1904,"strong"),e(1905,"t-allow-batch-delete"),t(),e(1906,` e utilizar
um servi\xE7o com o m\xE9todo `),i(1907,"code"),e(1908,"deleteBatchItems"),t(),e(1909,", a exclus\xE3o em lote ser\xE1 permitida."),t(),i(1910,"blockquote")(1911,"p"),e(1912,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(1913,"a",59),e(1914,"API do PO UI"),t()()(),i(1915,"blockquote")(1916,"p"),e(1917,"Caso utilize um servi\xE7o "),i(1918,"strong"),e(1919,"ThfGridDeleteService"),t(),e(1920,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(1921,"tr",19)(1922,"td",20)(1923,"div",21)(1924,"span",22),e(1925," t-service-api"),o(1926,"br"),t()()(),i(1927,"td",23)(1928,"code",38),e(1929,"string"),t()(),i(1930,"td",25),e(1931,"-"),t(),i(1932,"td",26)(1933,"em")(1934,"strong"),e(1935,"(opcional)"),t()(),i(1936,"p"),e(1937,"Define a rota da "),i(1938,"code"),e(1939,"API"),t(),e(1940,` para realizar o GET dos itens e popular o grid.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(1941,"code"),e(1942,"API"),t(),e(1943,` esteja preparada para receber uma ou
mais `),i(1944,"code"),e(1945,"keys"),t(),e(1946," concatenadas para identifica\xE7\xE3o do registro. Caso n\xE3o haja "),i(1947,"code"),e(1948,"keys"),t(),e(1949,`,
que implementa a interface `),i(1950,"strong"),e(1951,"ThfGridColumn"),t(),e(1952,", a requisi\xE7\xE3o de exclus\xE3o ocorrer\xE1 pelo "),i(1953,"code"),e(1954,"id"),t(),e(1955,"."),t()()(),i(1956,"tr",19)(1957,"td",20)(1958,"div",21)(1959,"span",22),e(1960,"t-show-densification-configuration"),o(1961,"br"),t()()(),i(1962,"td",23)(1963,"code",24),e(1964,"boolean"),t()(),i(1965,"td",25)(1966,"p")(1967,"code"),e(1968,"false"),t()()(),i(1969,"td",26)(1970,"em")(1971,"strong"),e(1972,"(opcional)"),t()(),i(1973,"p"),e(1974,"Habilita um atalho para alternar o espa\xE7amento das linhas do grid entre os modos "),i(1975,"code"),e(1976,"Compacto"),t(),e(1977," e "),i(1978,"code"),e(1979,"Espa\xE7oso"),t(),e(1980,` no
Gerenciar Tabela.`),t(),i(1981,"blockquote")(1982,"p"),e(1983,"Em n\xEDvel de acessibilidade "),i(1984,"strong"),e(1985,"AA"),t(),e(1986,", a op\xE7\xE3o "),i(1987,"code"),e(1988,"Extra Compacto"),t(),e(1989," tamb\xE9m \xE9 exibida."),t()()()(),i(1990,"tr",19)(1991,"td",20)(1992,"div",21)(1993,"span",22),e(1994,"t-show-draggable-icon"),o(1995,"br"),t()()(),i(1996,"td",23)(1997,"code",24),e(1998,"boolean"),t()(),i(1999,"td",25)(2e3,"p")(2001,"code"),e(2002,"false"),t()()(),i(2003,"td",26)(2004,"em")(2005,"strong"),e(2006,"(opcional)"),t()(),i(2007,"p"),e(2008,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(2009,"tr",19)(2010,"td",20)(2011,"div",21)(2012,"span",22),e(2013," t-show-footer-aggregates"),o(2014,"br"),t()()(),i(2015,"td",23)(2016,"code",24),e(2017,"boolean"),t()(),i(2018,"td",25)(2019,"p")(2020,"code"),e(2021,"false"),t()()(),i(2022,"td",26)(2023,"em")(2024,"strong"),e(2025,"(opcional)"),t()(),i(2026,"p"),e(2027,"Quando definido true, exibir\xE1 no rodap\xE9 da tabela os totalizadores que foram definidos na propriedade "),i(2028,"code"),e(2029,"t-aggregates"),t(),e(2030,"."),t()()(),i(2031,"tr",19)(2032,"td",20)(2033,"div",32)(2034,"span",33),e(2035," (t-show-more)"),o(2036,"br"),t()()(),i(2037,"td",23)(2038,"code",34),e(2039,"EventEmitter"),t()(),i(2040,"td",25),e(2041,"-"),t(),i(2042,"td",26)(2043,"em")(2044,"strong"),e(2045,"(opcional)"),t()(),i(2046,"p"),e(2047,"Evento disparado quando pressionado o bot\xE3o 'Carregar mais'. Retorna um array do tipo "),i(2048,"strong"),e(2049,"ThfGridColumnSort"),t(),e(2050,`,
caso existam colunas ordenadas definidas.`),t(),i(2051,"blockquote")(2052,"p"),e(2053,"Caso "),i(2054,"strong"),e(2055,"t-items"),t(),e(2056," esteja definido, o uso desse evento se torna obrigat\xF3rio caso queira exibir o bot\xE3o 'Carregar mais'."),t()()()(),i(2057,"tr",19)(2058,"td",20)(2059,"div",21)(2060,"span",22),e(2061,"t-show-more-disabled"),o(2062,"br"),t()()(),i(2063,"td",23)(2064,"code",24),e(2065,"boolean"),t()(),i(2066,"td",25)(2067,"p")(2068,"code"),e(2069,"false"),t()()(),i(2070,"td",26)(2071,"em")(2072,"strong"),e(2073,"(opcional)"),t()(),i(2074,"p"),e(2075,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(2076,"tr",19)(2077,"td",20)(2078,"div",21)(2079,"span",22),e(2080,"t-show-more-visible"),o(2081,"br"),t()()(),i(2082,"td",23)(2083,"code",24),e(2084,"boolean"),t()(),i(2085,"td",25)(2086,"p")(2087,"code"),e(2088,"true"),t()()(),i(2089,"td",26)(2090,"em")(2091,"strong"),e(2092,"(opcional)"),t()(),i(2093,"p"),e(2094,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(2095,"strong"),e(2096,"t-pageable"),t(),e(2097," esteja habilitada, ou seja utilizado o evento "),i(2098,"code"),e(2099,"t-show-more"),t(),e(2100," em conjunto com a propriedade "),i(2101,"strong"),e(2102,"t-items"),t(),e(2103,"."),t(),i(2104,"blockquote")(2105,"p"),e(2106,"Caso seja utilizado em conjunto com "),i(2107,"strong"),e(2108,"t-show-more-disabled"),t(),e(2109,", a propriedade "),i(2110,"strong"),e(2111,"t-show-more-visible"),t(),e(2112," ter\xE1 prioridade."),t()()()(),i(2113,"tr",19)(2114,"td",20)(2115,"div",21)(2116,"span",22),e(2117,"t-single-select"),o(2118,"br"),t()()(),i(2119,"td",23)(2120,"code",24),e(2121,"boolean"),t()(),i(2122,"td",25)(2123,"p")(2124,"code"),e(2125,"false"),t()()(),i(2126,"td",26)(2127,"em")(2128,"strong"),e(2129,"(opcional)"),t()(),i(2130,"p"),e(2131,"Define a sele\xE7\xE3o \xFAnica. Requer que a propriedade "),i(2132,"strong"),e(2133,"t-selectable"),t(),e(2134," esteja habilitada."),t()()(),i(2135,"tr",19)(2136,"td",20)(2137,"div",21)(2138,"span",22),e(2139,"t-sort"),o(2140,"br"),t()()(),i(2141,"td",23)(2142,"code",60),e(2143,"Array<ThfGridColumnSort>"),t()(),i(2144,"td",25),e(2145,"-"),t(),i(2146,"td",26)(2147,"em")(2148,"strong"),e(2149,"(opcional)"),t()(),i(2150,"p"),e(2151,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(2152,"pre")(2153,"code",28),e(2154,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-sort]="sortColumns"
></thf-grid>
`),t()(),i(2155,"pre")(2156,"code",31),e(2157,`sortColumns: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];
`),t()()()(),i(2158,"tr",19)(2159,"td",20)(2160,"div",32)(2161,"span",33),e(2162," (t-change-sort-column)"),o(2163,"br"),t()()(),i(2164,"td",23)(2165,"code",34),e(2166,"EventEmitter"),t()(),i(2167,"td",25),e(2168,"-"),t(),i(2169,"td",26)(2170,"em")(2171,"strong"),e(2172,"(opcional)"),t()(),i(2173,"p"),e(2174,`Evento disparado ao alterar o sort da coluna.
Retorna um array do tipo `),i(2175,"strong"),e(2176,"ThfGridColumnSort"),t(),e(2177," com a regra de sortable e a coluna aplicada."),t()()(),i(2178,"tr",19)(2179,"td",20)(2180,"div",21)(2181,"span",22),e(2182,"t-sortable"),o(2183,"br"),t()()(),i(2184,"td",23)(2185,"code",24),e(2186,"boolean"),t()(),i(2187,"td",25)(2188,"p")(2189,"code"),e(2190,"true"),t()()(),i(2191,"td",26)(2192,"em")(2193,"strong"),e(2194,"(opcional)"),t()(),i(2195,"p"),e(2196,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(2197,"tr",19)(2198,"td",20)(2199,"div",21)(2200,"span",22),e(2201,"t-spacing"),o(2202,"br"),t()()(),i(2203,"td",23)(2204,"code",38),e(2205,"string"),t()(),i(2206,"td",25)(2207,"p")(2208,"code"),e(2209,"medium"),t()()(),i(2210,"td",26)(2211,"em")(2212,"strong"),e(2213,"(opcional)"),t()(),i(2214,"p"),e(2215,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(2216,"strong"),e(2217,"ThfColumnSpacing"),t(),e(2218,"."),t(),i(2219,"blockquote")(2220,"p"),e(2221,"Em n\xEDvel de acessibilidade "),i(2222,"strong"),e(2223,"AA"),t(),e(2224,", caso o valor de "),i(2225,"code"),e(2226,"t-spacing"),t(),e(2227," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(2228,"code"),e(2229,"extraSmall"),t(),e(2230,`
nos seguintes cen\xE1rios:`),t(),i(2231,"ul")(2232,"li"),e(2233,"Quando o valor de "),i(2234,"code"),e(2235,"t-components-size"),t(),e(2236," for "),i(2237,"code"),e(2238,"small"),t(),e(2239,";"),t(),i(2240,"li"),e(2241,"Quando o valor padr\xE3o dos componentes for configurado como "),i(2242,"code"),e(2243,"small"),t(),e(2244,` no
`),i(2245,"a",39),e(2246,"servi\xE7o de tema"),t(),e(2247,"."),t()()()()(),i(2248,"tr",19)(2249,"td",20)(2250,"div",21)(2251,"span",22),e(2252,"t-striped"),o(2253,"br"),t()()(),i(2254,"td",23)(2255,"code",24),e(2256,"boolean"),t()(),i(2257,"td",25)(2258,"p")(2259,"code"),e(2260,"true"),t()()(),i(2261,"td",26)(2262,"em")(2263,"strong"),e(2264,"(opcional)"),t()(),i(2265,"p"),e(2266,"Define o estilo listrado no grid (striped)."),t()()(),i(2267,"tr",19)(2268,"td",20)(2269,"div",21)(2270,"span",22),e(2271,"t-text-wrap"),o(2272,"br"),t()()(),i(2273,"td",23)(2274,"code",24),e(2275,"boolean"),t()(),i(2276,"td",25)(2277,"p")(2278,"code"),e(2279,"false"),t()()(),i(2280,"td",26)(2281,"em")(2282,"strong"),e(2283,"(opcional)"),t()(),i(2284,"p"),e(2285,`Define a quebra autom\xE1tica de texto. Quando ativada, o texto que excede o espa\xE7o dispon\xEDvel \xE9 transferido para a
pr\xF3xima linha em pontos apropriados para uma leitura clara.`),t(),i(2286,"blockquote")(2287,"p"),e(2288,"Propriedade incompat\xEDvel quando "),i(2289,"strong"),e(2290,"t-virtual-scroll"),t(),e(2291," est\xE1 habilitado."),t()()()(),i(2292,"tr",19)(2293,"td",20)(2294,"div",32)(2295,"span",33),e(2296," (t-unselected)"),o(2297,"br"),t()()(),i(2298,"td",23)(2299,"code",34),e(2300,"EventEmitter"),t()(),i(2301,"td",25),e(2302,"-"),t(),i(2303,"td",26)(2304,"em")(2305,"strong"),e(2306,"(opcional)"),t()(),i(2307,"p"),e(2308,"Evento disparado quando desselecionado um item. Retorna o item desselecionado."),t()()(),i(2309,"tr",19)(2310,"td",20)(2311,"div",32)(2312,"span",33),e(2313," (t-all-unselected)"),o(2314,"br"),t()()(),i(2315,"td",23)(2316,"code",34),e(2317,"EventEmitter"),t()(),i(2318,"td",25),e(2319,"-"),t(),i(2320,"td",26)(2321,"em")(2322,"strong"),e(2323,"(opcional)"),t()(),i(2324,"p"),e(2325,"Evento disparado quando desselecionado todos os itens. Retorna um array com todos os itens desselecionados."),t()()(),i(2326,"tr",19)(2327,"td",20)(2328,"div",21)(2329,"span",22),e(2330,"t-virtual-columns"),o(2331,"br"),t()()(),i(2332,"td",23)(2333,"code",24),e(2334,"boolean"),t()(),i(2335,"td",25)(2336,"p")(2337,"code"),e(2338,"false"),t()()(),i(2339,"td",26)(2340,"em")(2341,"strong"),e(2342,"(opcional)"),t()(),i(2343,"p"),e(2344,`Define o uso do virtual columns no grid para melhorar a performance com grande volume de colunas.
Recomendamos a utiliza\xE7\xE3o dessa propriedade somente em caso de perda de performance com grande quantidade de colunas.
Existe incompatibilidade com a propriedade `),i(2345,"strong"),e(2346,"t-auto-size"),t(),e(2347," e m\xE9todo "),i(2348,"strong"),e(2349,"autoFitColumns()"),t(),e(2350,`.
Caso a grid tenha mais de 50 colunas o virtual-columns \xE9 ativado.`),t()()(),i(2351,"tr",19)(2352,"td",20)(2353,"div",21)(2354,"span",22),e(2355,"t-virtual-scroll"),o(2356,"br"),t()()(),i(2357,"td",23)(2358,"code",24),e(2359,"boolean"),t()(),i(2360,"td",25)(2361,"p")(2362,"code"),e(2363,"true"),t()()(),i(2364,"td",26)(2365,"em")(2366,"strong"),e(2367,"(opcional)"),t()(),i(2368,"p"),e(2369,`Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados.
Requer que a propriedade `),i(2370,"strong"),e(2371,"t-height"),t(),e(2372," esteja definida."),t(),i(2373,"blockquote")(2374,"p"),e(2375,"Verificar a documenta\xE7\xE3o das seguintes propriedades: "),i(2376,"strong"),e(2377,"t-text-wrap"),t(),e(2378,", "),i(2379,"strong"),e(2380,"t-row-height"),t(),e(2381," e "),i(2382,"strong"),e(2383,"t-page-size-virtual"),t(),e(2384,"."),t()()()()()(),i(2385,"po-accordion-item",61)(2386,"table",62)(2387,"tr",19)(2388,"th",63)(2389,"div",21)(2390,"h4")(2391,"span",22),e(2392," autoFitColumns "),t()()()()(),i(2393,"tr",26)(2394,"td",26)(2395,"p"),e(2396,"Ajusta automaticamente a largura das colunas com base no conte\xFAdo atual das c\xE9lulas."),t(),i(2397,"p"),e(2398,`Este m\xE9todo calcula a largura ideal para cada coluna considerando o conte\xFAdo textual das c\xE9lulas vis\xEDveis,
cabe\xE7alhos das colunas e configura\xE7\xF5es de redimensionamento e tamanho fixo`),t(),i(2399,"p")(2400,"strong"),e(2401,"Exemplo de uso:"),t()(),i(2402,"pre")(2403,"code",31),e(2404,`// Ajusta colunas e mant\xE9m largura total da tabela
this.gridComponent.autoFitColumns(true);

// Ajusta colunas e permite redimensionamento fluido
this.gridComponent.autoFitColumns();
`),t()(),i(2405,"blockquote")(2406,"p"),e(2407,"Este m\xE9todo \xE9 chamado automaticamente quando:"),t(),i(2408,"ul")(2409,"li"),e(2410,"A propriedade "),i(2411,"code"),e(2412,"t-auto-size"),t(),e(2413," \xE9 habilitada"),t(),i(2414,"li"),e(2415,"O evento "),i(2416,"code"),e(2417,"t-auto-size-on-scroll"),t(),e(2418," \xE9 disparado durante scroll virtual"),t()()()()()(),i(2419,"h5")(2420,"b"),e(2421,"Par\xE2metros"),t()(),i(2422,"table",16)(2423,"tr",17)(2424,"th",18),e(2425,"Nome"),t(),i(2426,"th",18),e(2427,"Tipo"),t(),i(2428,"th",18),e(2429,"Descri\xE7\xE3o"),t()(),i(2430,"tr",19)(2431,"td",20),e(2432," recalculate"),t(),i(2433,"td",23)(2434,"code",64),e(2435," boolean "),t()(),i(2436,"td",26)(2437,"p"),e(2438,"Quando "),i(2439,"code"),e(2440,"true"),t(),e(2441,`, mant\xE9m a largura total da tabela ap\xF3s o ajuste.
Quando `),i(2442,"code"),e(2443,"false"),t(),e(2444," ou omitido, limpa a largura fixa da tabela para permitir redimensionamento fluido."),t()()()(),o(2445,"br"),i(2446,"table",62)(2447,"tr",19)(2448,"th",63)(2449,"div",21)(2450,"h4")(2451,"span",22),e(2452," cleanRowActionsMode "),t()()()()(),i(2453,"tr",26)(2454,"td",26)(2455,"p"),e(2456,"Aplica o estado default aos itens editados, inclu\xEDdos e removidos do grid."),t(),i(2457,"p"),e(2458,`Usado para aplicar as altera\xE7\xF5es realizadas nos registros do grid, e tamb\xE9m
para remover os itens marcados para exclus\xE3o, de acordo com os par\xE2metros fornecidos.`),t(),i(2459,"pre")(2460,"code"),e(2461,`// Aplica o estado de edi\xE7\xE3o e inclus\xE3o, removendo os itens com $removed
this.cleanRowActionsMode();

// Aplica apenas as edi\xE7\xF5es, sem alterar as inclus\xF5es e exclus\xF5es
this.cleanRowActionsMode(true, false, false);

// Remove apenas os itens com $removed, sem aplicar edi\xE7\xF5es e inclus\xF5es
this.cleanRowActionsMode(false, false, true);
`),t()(),i(2462,"p"),e(2463,`Exemplo de uso:
Se voc\xEA precisa aplicar o estado de todas as a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e
remo\xE7\xE3o, basta chamar esta fun\xE7\xE3o. Por exemplo, se houver uma a\xE7\xE3o de aplicar o grid ao
salvar os dados, voc\xEA pode us\xE1-lo da seguinte forma:`),t(),i(2464,"pre")(2465,"code",31),e(2466,`// Ap\xF3s salvar os dados na API, voc\xEA pode limpar todos os estados de a\xE7\xE3o de linha
this.myService.saveData(this.thfGrid.getChangedItems()).subscribe(() => {
  this.thfGrid.cleanRowActionsMode(); // Limpa todas as a\xE7\xF5es de linha ap\xF3s salvar
  console.log('A\xE7\xF5es de linha limpas.');
});
`),t()()()()(),i(2467,"h5")(2468,"b"),e(2469,"Par\xE2metros"),t()(),i(2470,"table",16)(2471,"tr",17)(2472,"th",18),e(2473,"Nome"),t(),i(2474,"th",18),e(2475,"Tipo"),t(),i(2476,"th",18),e(2477,"Descri\xE7\xE3o"),t()(),i(2478,"tr",19)(2479,"td",20),e(2480," edit"),t(),i(2481,"td",23)(2482,"code",64),e(2483," boolean "),t()(),i(2484,"td",26)(2485,"p"),e(2486,"Indica se deve aplicar as edi\xE7\xF5es realizadas nas linhas."),t()()(),i(2487,"tr",19)(2488,"td",20),e(2489," include"),t(),i(2490,"td",23)(2491,"code",64),e(2492," boolean "),t()(),i(2493,"td",26)(2494,"p"),e(2495,"Indica se deve aplicar as inclus\xF5es de novas linhas."),t()()(),i(2496,"tr",19)(2497,"td",20),e(2498," del"),t(),i(2499,"td",23)(2500,"code",64),e(2501," boolean "),t()(),i(2502,"td",26)(2503,"p"),e(2504,"Indica se deve remover as linhas marcadas para exclus\xE3o."),t()()()(),o(2505,"br"),i(2506,"table",62)(2507,"tr",19)(2508,"th",63)(2509,"div",21)(2510,"h4")(2511,"span",22),e(2512," deleteItems "),t()()()()(),i(2513,"tr",26)(2514,"td",26)(2515,"p"),e(2516,"Respons\xE1vel pela exclus\xE3o de itens selecionados."),t(),i(2517,"p"),e(2518,"Quando "),i(2519,"strong"),e(2520,"t-items"),t(),e(2521,` est\xE1 definido, a remo\xE7\xE3o pode ser feita em lote, excluindo todas as linhas selecionadas localmente.
Se utilizado com um servi\xE7o (`),i(2522,"strong"),e(2523,"t-service-api"),t(),e(2524," e/ou "),i(2525,"strong"),e(2526,"t-service-delete-api"),t(),e(2527,"), a exclus\xE3o permitida \xE9 de um item por vez."),t(),i(2528,"blockquote")(2529,"p"),e(2530,'Caso utilizado com a "edi\xE7\xE3o flu\xEDda offline via formul\xE1rio (propriedade '),i(2531,"strong"),e(2532,"t-grid-row-actions"),t(),e(2533,`)" remove localmente
as linhas sinalizadas com `),i(2534,"code"),e(2535,"$removed"),t(),e(2536,"."),t()(),i(2537,"blockquote")(2538,"p"),e(2539,"\xC9 poss\xEDvel habilitar a exclus\xE3o em lote com servi\xE7os remotos utilizando a propriedade "),i(2540,"strong"),e(2541,"t-allow-batch-delete"),t(),e(2542," em conjunto com "),i(2543,"strong"),e(2544,"t-service-api"),t(),e(2545," e/ou "),i(2546,"strong"),e(2547,"t-service-delete-api"),t(),e(2548,"."),t()()()()(),o(2549,"br"),i(2550,"table",62)(2551,"tr",19)(2552,"th",63)(2553,"div",21)(2554,"h4")(2555,"span",22),e(2556," getChangedItems "),t()()()()(),i(2557,"tr",26)(2558,"td",26)(2559,"p"),e(2560,"Retorna uma lista dos itens que foram modificados no grid, com a propriedade "),i(2561,"code"),e(2562,"op"),t(),e(2563,` indicando
a a\xE7\xE3o executada sobre cada item, podendo ser 'remove', 'add' ou 'replace'.`),t(),i(2564,"pre")(2565,"code"),e(2566,`// Exemplo de uso:
const changedItems = this.getChangedItems();
console.log(changedItems);
// Sa\xEDda esperada: [{ id: 1, name: 'Item 1', op: 'replace' }, { id: 2, name: 'Item 2', op: 'remove' }]
`),t()()()()(),i(2567,"h5")(2568,"b"),e(2569,"Retorno"),t()(),i(2570,"table",16)(2571,"tr",17)(2572,"th",18),e(2573,"Tipo"),t(),i(2574,"th",18),e(2575,"Descri\xE7\xE3o"),t()(),i(2576,"tr",19)(2577,"td",23)(2578,"code",64),e(2579,"Array<any>"),t()(),i(2580,"td",26)(2581,"p"),e(2582,"Uma lista de objetos representando os itens modificados. Cada objeto ter\xE1 a propriedade "),i(2583,"code"),e(2584,"op"),t(),e(2585," que indica a a\xE7\xE3o realizada"),t()()()(),o(2586,"br"),i(2587,"table",62)(2588,"tr",19)(2589,"th",63)(2590,"div",21)(2591,"h4")(2592,"span",22),e(2593," getSelectedRows "),t()()()()(),i(2594,"tr",26)(2595,"td",26)(2596,"p"),e(2597,"Respons\xE1vel por retornar os itens do grid que est\xE3o selecionadas."),t()()()(),o(2598,"br"),i(2599,"table",62)(2600,"tr",19)(2601,"th",63)(2602,"div",21)(2603,"h4")(2604,"span",22),e(2605," showAdditionalHelp "),t()()()()(),i(2606,"tr",26)(2607,"td",26)(2608,"p"),e(2609,"Exibe o conte\xFAdo da propriedade "),i(2610,"code"),e(2611,"helper"),t(),e(2612," durante a edi\xE7\xE3o ("),i(2613,"code"),e(2614,"t-edit-properties"),t(),e(2615," ou "),i(2616,"code"),e(2617,"t-grid-row-actions"),t(),e(2618,`) do grid.
Para isso, ser\xE1 necess\xE1rio ter uma inst\xE2ncia do componente no DOM e configurar uma tecla de atalho utilizando o evento `),i(2619,"code"),e(2620,"t-keydown"),t(),e(2621,"."),t(),i(2622,"pre")(2623,"code"),e(2624,`import { ThfGridComponent } from '@totvs/thf-components';
...
@ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

columns: Array<ThfGridColumn> = [
 ...
 {
   property: 'name',
   label: 'Nome',
   editProperties: {
     componentEditable: 'input',
     helper: 'Nome completo',
     keydown: this.onkeydown.bind(this, 'name')
    }
 },
]

onkeydown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.thfGrid.showAdditionalHelp(property);
 }
}
`),t()(),i(2625,"blockquote")(2626,"p"),e(2627,`Com t-grid-row-actions: Alguns atalhos j\xE1 est\xE3o em uso, ent\xE3o, evite sobrescrev\xEA-los. Para mais detalhes,
consulte o `),i(2628,"a",65),e(2629,"TDN"),t(),e(2630,"."),t()()()()(),i(2631,"h5")(2632,"b"),e(2633,"Par\xE2metros"),t()(),i(2634,"table",16)(2635,"tr",17)(2636,"th",18),e(2637,"Nome"),t(),i(2638,"th",18),e(2639,"Tipo"),t(),i(2640,"th",18),e(2641,"Descri\xE7\xE3o"),t()(),i(2642,"tr",19)(2643,"td",20),e(2644," property"),t(),i(2645,"td",23)(2646,"code",64),e(2647," string "),t()(),i(2648,"td",26)(2649,"p"),e(2650,"Identificador da coluna."),t()()()(),o(2651,"br"),i(2652,"table",62)(2653,"tr",19)(2654,"th",63)(2655,"div",21)(2656,"h4")(2657,"span",22),e(2658," selectRowItem "),t()()()()(),i(2659,"tr",26)(2660,"td",26)(2661,"p"),e(2662,"Seleciona um item do grid."),t()()()(),i(2663,"h5")(2664,"b"),e(2665,"Par\xE2metros"),t()(),i(2666,"table",16)(2667,"tr",17)(2668,"th",18),e(2669,"Nome"),t(),i(2670,"th",18),e(2671,"Tipo"),t(),i(2672,"th",18),e(2673,"Descri\xE7\xE3o"),t()(),i(2674,"tr",19)(2675,"td",20),e(2676," item"),t(),i(2677,"td",23)(2678,"code",66),e(2679," { key: value } "),t(),i(2680,"code",27),e(2681," Function "),t()(),i(2682,"td",26)(2683,"p"),e(2684,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),o(2685,"br"),i(2686,"table",62)(2687,"tr",19)(2688,"th",63)(2689,"div",21)(2690,"h4")(2691,"span",22),e(2692," unselectRowItem "),t()()()()(),i(2693,"tr",26)(2694,"td",26)(2695,"p"),e(2696,"Desmarca o item que est\xE1 selecionado."),t()()()(),i(2697,"h5")(2698,"b"),e(2699,"Par\xE2metros"),t()(),i(2700,"table",16)(2701,"tr",17)(2702,"th",18),e(2703,"Nome"),t(),i(2704,"th",18),e(2705,"Tipo"),t(),i(2706,"th",18),e(2707,"Descri\xE7\xE3o"),t()(),i(2708,"tr",19)(2709,"td",20),e(2710," item"),t(),i(2711,"td",23)(2712,"code",66),e(2713," { key: value } "),t(),i(2714,"code",27),e(2715," Function "),t()(),i(2716,"td",26)(2717,"p"),e(2718,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),o(2719,"br"),i(2720,"table",62)(2721,"tr",19)(2722,"th",63)(2723,"div",21)(2724,"h4")(2725,"span",22),e(2726," applyFilters "),t()()()()(),i(2727,"tr",26)(2728,"td",26)(2729,"p"),e(2730,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza o grid."),t(),i(2731,"p"),e(2732,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),t(),i(2733,"pre")(2734,"code"),e(2735,`url + ?page=1&pageSize=10
`),t()(),i(2736,"blockquote")(2737,"p"),e(2738,"Obs: os par\xE2metros "),i(2739,"code"),e(2740,"page"),t(),e(2741," e "),i(2742,"code"),e(2743,"pageSize"),t(),e(2744," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),t()(),i(2745,"p"),e(2746,"Caso sejam informados os par\xE2metros "),i(2747,"code"),e(2748,"{ name: 'JOHN', age: '23' }"),t(),e(2749,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),t(),i(2750,"pre")(2751,"code"),e(2752,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),t()()()()(),i(2753,"h5")(2754,"b"),e(2755,"Par\xE2metros"),t()(),i(2756,"table",16)(2757,"tr",17)(2758,"th",18),e(2759,"Nome"),t(),i(2760,"th",18),e(2761,"Tipo"),t(),i(2762,"th",18),e(2763,"Descri\xE7\xE3o"),t()(),i(2764,"tr",19)(2765,"td",20),e(2766," queryParams"),t(),i(2767,"td",23)(2768,"code",66),e(2769," { key: value } "),t()(),i(2770,"td",26)(2771,"p"),e(2772,"Formato do objeto a ser enviado."),t(),i(2773,"blockquote")(2774,"p"),e(2775,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),t()()()()(),o(2776,"br"),i(2777,"table",62)(2778,"tr",19)(2779,"th",63)(2780,"div",21)(2781,"h4")(2782,"span",22),e(2783," calculateHeightDynamically "),t()()()()(),i(2784,"tr",26)(2785,"td",26)(2786,"p"),e(2787,"Mant\xE9m compatibilidade com vers\xF5es anteriores, chamando "),i(2788,"code"),e(2789,"calculateDynamicSize"),t(),e(2790," com a propriedade "),i(2791,"code"),e(2792,"'height'"),t(),e(2793,"."),t()()()(),i(2794,"h5")(2795,"b"),e(2796,"Par\xE2metros"),t()(),i(2797,"table",16)(2798,"tr",17)(2799,"th",18),e(2800,"Nome"),t(),i(2801,"th",18),e(2802,"Tipo"),t(),i(2803,"th",18),e(2804,"Descri\xE7\xE3o"),t()(),i(2805,"tr",19)(2806,"td",20),e(2807," callRowHeight"),t(),o(2808,"td",23),i(2809,"td",26)(2810,"p"),e(2811,"Define se o "),i(2812,"code"),e(2813,"calculateRowHeight"),t(),e(2814," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),o(2815,"br"),i(2816,"table",62)(2817,"tr",19)(2818,"th",63)(2819,"div",21)(2820,"h4")(2821,"span",22),e(2822," removeItem "),t()()()()(),i(2823,"tr",26)(2824,"td",26)(2825,"p"),e(2826,"Remove um item localmente do grid."),t()()()(),i(2827,"h5")(2828,"b"),e(2829,"Par\xE2metros"),t()(),i(2830,"table",16)(2831,"tr",17)(2832,"th",18),e(2833,"Nome"),t(),i(2834,"th",18),e(2835,"Tipo"),t(),i(2836,"th",18),e(2837,"Descri\xE7\xE3o"),t()(),i(2838,"tr",19)(2839,"td",20),e(2840," item"),t(),i(2841,"td",23)(2842,"code",51),e(2843," number "),t(),i(2844,"code",66),e(2845," { key: value } "),t()(),i(2846,"td",26)(2847,"p"),e(2848,"\xCDndice ou item que ser\xE1 removido."),t(),i(2849,"blockquote")(2850,"p"),e(2851,"Ao remover o item, a linha que o representa ser\xE1 removida do grid."),t()()()()(),o(2852,"br"),i(2853,"table",62)(2854,"tr",19)(2855,"th",63)(2856,"div",21)(2857,"h4")(2858,"span",22),e(2859," unselectRows "),t()()()()(),i(2860,"tr",26)(2861,"td",26)(2862,"p"),e(2863,"M\xE9todo respons\xE1vel por desmarcar as linhas que est\xE3o selecionadas."),t()()()(),o(2864,"br"),i(2865,"table",62)(2866,"tr",19)(2867,"th",63)(2868,"div",21)(2869,"h4")(2870,"span",22),e(2871," getInfoProperties "),t()()()()(),i(2872,"tr",26)(2873,"td",26)(2874,"p"),e(2875,"M\xE9todo que retorna informa\xE7\xF5es sobre os itens atuais da tabela."),t(),i(2876,"p"),e(2877,"Inclui:"),t(),i(2878,"ul")(2879,"li")(2880,"code"),e(2881,"items"),t(),e(2882,": lista de itens atualmente carregados na tabela."),t(),i(2883,"li")(2884,"code"),e(2885,"total"),t(),e(2886,": total de itens informado pela API atrav\xE9s da propriedade "),i(2887,"code"),e(2888,"total"),t(),e(2889,"; pode ser "),i(2890,"code"),e(2891,"undefined"),t(),e(2892," caso a API n\xE3o informe."),t(),i(2893,"li")(2894,"code"),e(2895,"page"),t(),e(2896,": n\xFAmero da p\xE1gina atual informado pela API ("),i(2897,"code"),e(2898,"itemsByApi.page"),t(),e(2899,"); se n\xE3o existir, utiliza a propriedade local "),i(2900,"code"),e(2901,"page"),t(),e(2902,"."),t(),i(2903,"li")(2904,"code"),e(2905,"pageSize"),t(),e(2906,": quantidade de itens por p\xE1gina informada pela API ("),i(2907,"code"),e(2908,"itemsByApi.pageSize"),t(),e(2909,"); se n\xE3o existir, utiliza a propriedade local "),i(2910,"code"),e(2911,"pageSize"),t(),e(2912,"."),t()()()()(),o(2913,"br"),i(2914,"table",62)(2915,"tr",19)(2916,"th",63)(2917,"div",21)(2918,"h4")(2919,"span",22),e(2920," updateItem "),t()()()()(),i(2921,"tr",26)(2922,"td",26)(2923,"p"),e(2924,"Atualiza um item do grid quando utilizado "),i(2925,"strong"),e(2926,"t-itens"),t(),e(2927,"."),t()()()(),i(2928,"h5")(2929,"b"),e(2930,"Par\xE2metros"),t()(),i(2931,"table",16)(2932,"tr",17)(2933,"th",18),e(2934,"Nome"),t(),i(2935,"th",18),e(2936,"Tipo"),t(),i(2937,"th",18),e(2938,"Descri\xE7\xE3o"),t()(),i(2939,"tr",19)(2940,"td",20),e(2941," item"),t(),i(2942,"td",23)(2943,"code",51),e(2944," number "),t(),i(2945,"code",66),e(2946," { key: value } "),t()(),i(2947,"td",26)(2948,"p"),e(2949,"\xCDndice ou o item que ser\xE1 atualizado."),t()()(),i(2950,"tr",19)(2951,"td",20),e(2952," updatedItem"),t(),i(2953,"td",23)(2954,"code",66),e(2955," { key: value } "),t()(),i(2956,"td",26)(2957,"p"),e(2958,"Item que foi atualizado."),t(),i(2959,"blockquote")(2960,"p"),e(2961,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada no grid."),t()()()()(),o(2962,"br"),i(2963,"table",62)(2964,"tr",19)(2965,"th",63)(2966,"div",21)(2967,"h4")(2968,"span",22),e(2969," calculateDynamicSize "),t()()()()(),i(2970,"tr",26)(2971,"td",26)(2972,"p"),e(2973,"calcula dinamicamente o tamanho da grid com base na porcentagem definida nas propriedades "),i(2974,"strong"),e(2975,"t-height"),t(),e(2976,`,
`),i(2977,"strong"),e(2978,"t-min-height"),t(),e(2979," e "),i(2980,"strong"),e(2981,"t-max-height"),t(),e(2982,"."),t(),i(2983,"p"),e(2984,`Caso a grid esteja dentro de um componente ou elemento que altere sua visibilidade,
\xE9 necess\xE1rio chamar esta fun\xE7\xE3o para garantir um c\xE1lculo correto. Exemplo:`),t(),i(2985,"pre")(2986,"code",28),e(2987,`<po-tabs>
 <po-tab (p-click)="emitClickTab()" p-label="PO Tabs">
   <thf-grid #thfGrid> </thf-grid>
 </po-tab>
</po-tabs>
`),t()(),i(2988,"pre")(2989,"code",31),e(2990,`@ViewChild('thfGrid') thfGrid: ThfGridComponent;

emitClickTab() {
 // Time-out necess\xE1rio para garantir que o DOM foi atualizado antes do c\xE1lculo da altura.
 setTimeout(() => {
   this.thfGrid.calculateDynamicSize('height', true);
 }, 100);
}
`),t()()()()(),i(2991,"h5")(2992,"b"),e(2993,"Par\xE2metros"),t()(),i(2994,"table",16)(2995,"tr",17)(2996,"th",18),e(2997,"Nome"),t(),i(2998,"th",18),e(2999,"Tipo"),t(),i(3e3,"th",18),e(3001,"Descri\xE7\xE3o"),t()(),i(3002,"tr",19)(3003,"td",20),e(3004," property"),t(),o(3005,"td",23),i(3006,"td",26)(3007,"p"),e(3008,"Define qual propriedade ser\xE1 calculada: "),i(3009,"code"),e(3010,"'height'"),t(),e(3011,", "),i(3012,"code"),e(3013,"'minHeight'"),t(),e(3014," ou "),i(3015,"code"),e(3016,"'maxHeight'"),t(),e(3017,"."),t()()(),i(3018,"tr",19)(3019,"td",20),e(3020," callRowHeight"),t(),o(3021,"td",23),i(3022,"td",26)(3023,"p"),e(3024,"Define se o m\xE9todo "),i(3025,"code"),e(3026,"calculateRowHeight"),t(),e(3027," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),o(3028,"br"),i(3029,"table",62)(3030,"tr",19)(3031,"th",63)(3032,"div",21)(3033,"h4")(3034,"span",22),e(3035," findColumnIndex "),t()()()()(),i(3036,"tr",26)(3037,"td",26)(3038,"p"),e(3039,"Encontra o \xEDndice da coluna baseado na propriedade."),t()()()(),o(3040,"br"),i(3041,"table",62)(3042,"tr",19)(3043,"th",63)(3044,"div",21)(3045,"h4")(3046,"span",22),e(3047," isColumnRequired "),t()()()()(),i(3048,"tr",26)(3049,"td",26)(3050,"p"),e(3051,"Verifica se uma coluna \xE9 obrigat\xF3ria na propriedade "),i(3052,"code"),e(3053,"editProperties"),t(),e(3054," ou no "),i(3055,"code"),e(3056,"formGroupIntern"),t()()()()(),o(3057,"br"),i(3058,"table",62)(3059,"tr",19)(3060,"th",63)(3061,"div",21)(3062,"h4")(3063,"span",22),e(3064," setRowStateFilter "),t()()()()(),i(3065,"tr",26)(3066,"td",26)(3067,"p"),e(3068,"Define o filtro de estado das linhas a ser aplicado na exibi\xE7\xE3o da grid."),t(),i(3069,"p"),e(3070,`Este m\xE9todo permite alternar entre a visualiza\xE7\xE3o de itens ativos (n\xE3o removidos) e itens removidos,
filtrando a grid com base na propriedade `),i(3071,"code"),e(3072,"$removed"),t(),e(3073,` dos itens. \xC9 utilizado principalmente em conjunto
com o recurso de edi\xE7\xE3o fluida offline (`),i(3074,"strong"),e(3075,"t-grid-row-actions"),t(),e(3076,")."),t(),i(3077,"p"),e(3078,"Quando o filtro \xE9 alterado:"),t(),i(3079,"ul")(3080,"li"),e(3081,"A grid \xE9 filtrada para exibir apenas os itens que correspondem ao estado selecionado"),t(),i(3082,"li"),e(3083,"A pagina\xE7\xE3o \xE9 reiniciada ("),i(3084,"code"),e(3085,"skip = 0"),t(),e(3086,")"),t(),i(3087,"li"),e(3088,"O label do filtro \xE9 atualizado"),t(),i(3089,"li"),e(3090,"Os agregados totais s\xE3o recalculados"),t(),i(3091,"li"),e(3092,"A sele\xE7\xE3o pode ser desabilitada (no caso de itens removidos)"),t()(),i(3093,"pre")(3094,"code",31),e(3095,`// Exibe apenas itens ativos (n\xE3o removidos)
this.thfGrid.setRowStateFilter('active');

// Exibe apenas itens removidos, for\xE7ando recarregamento da grid
this.thfGrid.setRowStateFilter('removed', true);

// Exibe apenas itens ativos (n\xE3o removidos), sem emitir evento
this.thfGrid.setRowStateFilter('active', false, false);
`),t()(),i(3096,"blockquote")(3097,"p"),e(3098,"Quando o filtro \xE9 alterado para "),i(3099,"code"),e(3100,"'removed'"),t(),e(3101,", a sele\xE7\xE3o de linhas \xE9 desabilitada automaticamente."),t(),i(3102,"p"),e(3103,"Ao retornar para "),i(3104,"code"),e(3105,"'active'"),t(),e(3106,", a sele\xE7\xE3o \xE9 restaurada ao seu estado inicial."),t()()()()(),i(3107,"h5")(3108,"b"),e(3109,"Par\xE2metros"),t()(),i(3110,"table",16)(3111,"tr",17)(3112,"th",18),e(3113,"Nome"),t(),i(3114,"th",18),e(3115,"Tipo"),t(),i(3116,"th",18),e(3117,"Descri\xE7\xE3o"),t()(),i(3118,"tr",19)(3119,"td",20),e(3120," filter"),t(),i(3121,"td",23)(3122,"code",67),e(3123," ('active' "),t(),i(3124,"code",68),e(3125," 'removed') "),t()(),i(3126,"td",26)(3127,"p"),e(3128,"Define qual filtro ser\xE1 aplicado:"),t(),i(3129,"ul")(3130,"li")(3131,"code"),e(3132,"'active'"),t(),e(3133,": Exibe apenas itens n\xE3o removidos ("),i(3134,"code"),e(3135,"$removed !== true"),t(),e(3136,")"),t(),i(3137,"li")(3138,"code"),e(3139,"'removed'"),t(),e(3140,": Exibe apenas itens marcados para remo\xE7\xE3o ("),i(3141,"code"),e(3142,"$removed === true"),t(),e(3143,")"),t()()()(),i(3144,"tr",19)(3145,"td",20),e(3146," reloadGrid"),t(),i(3147,"td",23)(3148,"code",64),e(3149," boolean "),t()(),i(3150,"td",26)(3151,"p"),e(3152,"Indica se a grid deve ser recarregada visualmente:"),t(),i(3153,"ul")(3154,"li"),e(3155,"Quando "),i(3156,"code"),e(3157,"true"),t(),e(3158,", desmarca todas as sele\xE7\xF5es, limpa itens selecionados e for\xE7a uma renderiza\xE7\xE3o completa da grid"),t(),i(3159,"li"),e(3160,"Quando "),i(3161,"code"),e(3162,"false"),t(),e(3163,", apenas aplica o filtro sem recarregar a grid"),t()()()(),i(3164,"tr",19)(3165,"td",20),e(3166," emitEvent"),t(),i(3167,"td",23)(3168,"code",64),e(3169," boolean "),t()(),i(3170,"td",26)(3171,"p"),e(3172,"Indica se o evento "),i(3173,"code"),e(3174,"changeRowStateFilter"),t(),e(3175," deve ser emitido ap\xF3s a altera\xE7\xE3o do filtro:"),t(),i(3176,"ul")(3177,"li"),e(3178,"Quando "),i(3179,"code"),e(3180,"true"),t(),e(3181,", o evento \xE9 emitido com o novo valor do filtro"),t(),i(3182,"li"),e(3183,"Quando "),i(3184,"code"),e(3185,"false"),t(),e(3186,", o evento n\xE3o \xE9 emitido"),t()()()()(),o(3187,"br"),i(3188,"table",62)(3189,"tr",19)(3190,"th",63)(3191,"div",21)(3192,"h4")(3193,"span",22),e(3194," applyFilterByColumnProps "),t()()()()(),i(3195,"tr",26)(3196,"td",26)(3197,"p"),e(3198,"Aplica filtro por coluna com base no par\xE2metro fornecido."),t(),i(3199,"pre")(3200,"code",31),e(3201,`// Aplica filtro na coluna 'email' para exibir itens cujo e-mail:
// - cont\xE9m 'gmail'
// - e n\xE3o cont\xE9m 'teste'

const filter: Array<ThfFilterByColumn> = [
  {
    property: 'email',
    logic: 'and',
    operator1: 'contains',
    value1: 'gmail',
    operator2: 'doesnotcontain',
    value2: 'teste'
  }
];
this.gridComponent.applyFilterByColumnProps(filter);

> Requer que a propriedade \`filter\` esteja habilitada na coluna.
`),t()()()()(),i(3202,"h5")(3203,"b"),e(3204,"Par\xE2metros"),t()(),i(3205,"table",16)(3206,"tr",17)(3207,"th",18),e(3208,"Nome"),t(),i(3209,"th",18),e(3210,"Tipo"),t(),i(3211,"th",18),e(3212,"Descri\xE7\xE3o"),t()(),i(3213,"tr",19)(3214,"td",20),e(3215," filterColumnProps"),t(),i(3216,"td",23)(3217,"code",44),e(3218," Array<ThfFilterByColumn> "),t()(),i(3219,"td",26)(3220,"p"),e(3221,"Lista de filtros a serem aplicados."),t()()()(),o(3222,"br"),t()()(),T(3223,2),t(),i(3224,"po-tab",69),T(3225,3),i(3226,"po-container",5)(3227,"po-accordion",6)(3228,"po-accordion-item",70)(3229,"h4",9)(3230,"code"),e(3231,"ThfTableAction"),t()(),i(3232,"div",10)(3233,"p"),e(3234," Interface para configura\xE7\xE3o das a\xE7\xF5es."),t()(),i(3235,"h4",15),e(3236,"Propriedades"),t(),i(3237,"table",16)(3238,"tr",17)(3239,"th",18),e(3240,"Nome"),t(),i(3241,"th",18),e(3242,"Tipo"),t(),i(3243,"th",18),e(3244,"Descri\xE7\xE3o"),t()(),i(3245,"tr",19)(3246,"td",20)(3247,"div",21)(3248,"span",22),e(3249," action"),o(3250,"br"),t()()(),i(3251,"td",23)(3252,"code",27),e(3253,"Function"),t()(),i(3254,"td",26)(3255,"em")(3256,"strong"),e(3257,"(opcional)"),t()(),i(3258,"p"),e(3259,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(3260,"p"),e(3261,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),i(3262,"code"),e(3263,"subItems"),t(),e(3264,"."),t(),i(3265,"blockquote")(3266,"p"),e(3267,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),i(3268,"em"),e(3269,"bind"),t(),e(3270,`:
`),i(3271,"code"),e(3272,"action: this.myFunction.bind(this)"),t()()()()(),i(3273,"tr",19)(3274,"td",20)(3275,"div",21)(3276,"span",22),e(3277," disabled"),o(3278,"br"),t()()(),i(3279,"td",23)(3280,"code",24),e(3281,"boolean "),t(),i(3282,"code",27),e(3283," Function"),t()(),i(3284,"td",26)(3285,"em")(3286,"strong"),e(3287,"(opcional)"),t()(),i(3288,"p"),e(3289,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()(),i(3290,"tr",19)(3291,"td",20)(3292,"div",21)(3293,"span",22),e(3294," fixed"),o(3295,"br"),t()()(),i(3296,"td",23)(3297,"code",24),e(3298,"boolean"),t()(),i(3299,"td",26)(3300,"em")(3301,"strong"),e(3302,"(opcional)"),t()(),i(3303,"p"),e(3304,"Propriedade para fixar a a\xE7\xE3o"),t()()(),i(3305,"tr",19)(3306,"td",20)(3307,"div",21)(3308,"span",22),e(3309," icon"),o(3310,"br"),t()()(),i(3311,"td",23)(3312,"code",38),e(3313,"string "),t(),i(3314,"code",50),e(3315," TemplateRef<void>"),t()(),i(3316,"td",26)(3317,"em")(3318,"strong"),e(3319,"(opcional)"),t()(),i(3320,"p"),e(3321,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),t(),i(3322,"p"),e(3323,"Aceita \xEDcones da "),i(3324,"a",30),e(3325,"Biblioteca de \xEDcones"),t(),e(3326,`, fontes externas (ex: Font Awesome)
ou um `),i(3327,"code"),e(3328,"TemplateRef"),t(),e(3329," para \xEDcones customizados."),t(),i(3330,"pre")(3331,"code"),e(3332,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),t()()()(),i(3333,"tr",19)(3334,"td",20)(3335,"div",21)(3336,"span",22),e(3337," label"),o(3338,"br"),t()()(),i(3339,"td",23)(3340,"code",38),e(3341,"string"),t()(),i(3342,"td",26)(3343,"p"),e(3344,"R\xF3tulo da a\xE7\xE3o."),t(),i(3345,"p"),e(3346,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),i(3347,"code"),e(3348,"subItems"),t(),e(3349,"."),t()()(),i(3350,"tr",19)(3351,"td",20)(3352,"div",21)(3353,"span",22),e(3354," selected"),o(3355,"br"),t()()(),i(3356,"td",23)(3357,"code",24),e(3358,"boolean"),t()(),i(3359,"td",26)(3360,"em")(3361,"strong"),e(3362,"(opcional)"),t()(),i(3363,"p"),e(3364,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(3365,"tr",19)(3366,"td",20)(3367,"div",21)(3368,"span",22),e(3369," separator"),o(3370,"br"),t()()(),i(3371,"td",23)(3372,"code",24),e(3373,"boolean"),t()(),i(3374,"td",26)(3375,"em")(3376,"strong"),e(3377,"(opcional)"),t()(),i(3378,"p"),e(3379,"Atribui uma linha separadora acima do item."),t()()(),i(3380,"tr",19)(3381,"td",20)(3382,"div",21)(3383,"span",22),e(3384," subItems"),o(3385,"br"),t()()(),i(3386,"td",23)(3387,"code",71),e(3388,"Array<PoPopupAction>"),t()(),i(3389,"td",26)(3390,"em")(3391,"strong"),e(3392,"(opcional)"),t()(),i(3393,"p"),e(3394,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),t(),i(3395,"p"),e(3396,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),t(),i(3397,"blockquote")(3398,"p"),e(3399,"As propriedades "),i(3400,"code"),e(3401,"disabled"),t(),e(3402,", "),i(3403,"code"),e(3404,"type"),t(),e(3405," e "),i(3406,"code"),e(3407,"visible"),t(),e(3408," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),t()(),i(3409,"blockquote")(3410,"p"),e(3411,"Quando "),i(3412,"code"),e(3413,"url"),t(),e(3414," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),t()(),i(3415,"blockquote")(3416,"p"),e(3417,"Em subn\xEDveis aninhados, o "),i(3418,"code"),e(3419,"icon"),t(),e(3420," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),t()()()(),i(3421,"tr",19)(3422,"td",20)(3423,"div",21)(3424,"span",22),e(3425," type"),o(3426,"br"),t()()(),i(3427,"td",23)(3428,"code",38),e(3429,"string"),t()(),i(3430,"td",26)(3431,"em")(3432,"strong"),e(3433,"(opcional)"),t()(),i(3434,"p"),e(3435,"Define a cor do item."),t(),i(3436,"p"),e(3437,"Valores v\xE1lidos:"),t(),i(3438,"ul")(3439,"li")(3440,"code"),e(3441,"default"),t()(),i(3442,"li")(3443,"code"),e(3444,"danger"),t()()()()(),i(3445,"tr",19)(3446,"td",20)(3447,"div",21)(3448,"span",22),e(3449," url"),o(3450,"br"),t()()(),i(3451,"td",23)(3452,"code",38),e(3453,"string"),t()(),i(3454,"td",26)(3455,"em")(3456,"strong"),e(3457,"(opcional)"),t()(),i(3458,"p"),e(3459,"URL para redirecionamento. Aceita rotas internas e links externos."),t(),i(3460,"p"),e(3461,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),i(3462,"code"),e(3463,"url"),t(),e(3464," \xE9 informada em um agrupador, o clique "),i(3465,"strong"),e(3466,"n\xE3o abrir\xE1 os subitens"),t(),e(3467,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t(),i(3468,"blockquote")(3469,"p"),e(3470,"Quando informada, tem prioridade sobre a propriedade "),i(3471,"code"),e(3472,"action"),t(),e(3473,"."),t()()()(),i(3474,"tr",19)(3475,"td",20)(3476,"div",21)(3477,"span",22),e(3478," visible"),o(3479,"br"),t()()(),i(3480,"td",23)(3481,"code",24),e(3482,"boolean "),t(),i(3483,"code",27),e(3484," Function"),t()(),i(3485,"td",26)(3486,"em")(3487,"strong"),e(3488,"(opcional)"),t()(),i(3489,"p"),e(3490,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()()()(),i(3491,"po-accordion-item",72)(3492,"h4",9)(3493,"code"),e(3494,"ThfAggregateDescriptor"),t()(),i(3495,"div",10)(3496,"p"),e(3497,"Recebe um objeto contendo a coluna, uma label e a fun\xE7\xE3o que ser\xE1 aplicada para o c\xE1lculo do totalizador."),t()(),i(3498,"h4",15),e(3499,"Propriedades"),t(),i(3500,"table",16)(3501,"tr",17)(3502,"th",18),e(3503,"Nome"),t(),i(3504,"th",18),e(3505,"Tipo"),t(),i(3506,"th",18),e(3507,"Descri\xE7\xE3o"),t()(),i(3508,"tr",19)(3509,"td",20)(3510,"div",21)(3511,"span",22),e(3512," aggregate"),o(3513,"br"),t()()(),i(3514,"td",23)(3515,"code",73),e(3516,"'sum' "),t(),i(3517,"code",74),e(3518," 'average' "),t(),i(3519,"code",75),e(3520," 'count' "),t(),i(3521,"code",76),e(3522," 'min' "),t(),i(3523,"code",77),e(3524," 'max'"),t()(),i(3525,"td",26)(3526,"p"),e(3527,"Fun\xE7\xE3o de agrega\xE7\xE3o a ser aplicada inicialmente: 'sum', 'average', 'count', 'min', ou 'max'."),t()()(),i(3528,"tr",19)(3529,"td",20)(3530,"div",21)(3531,"span",22),e(3532," field"),o(3533,"br"),t()()(),i(3534,"td",23)(3535,"code",38),e(3536,"string"),t()(),i(3537,"td",26)(3538,"p"),e(3539,"Coluna que ser\xE1 utilizada pelo totalizador."),t()()(),i(3540,"tr",19)(3541,"td",20)(3542,"div",21)(3543,"span",22),e(3544," label"),o(3545,"br"),t()()(),i(3546,"td",23)(3547,"code",38),e(3548,"string"),t()(),i(3549,"td",26)(3550,"em")(3551,"strong"),e(3552,"(opcional)"),t()(),i(3553,"p"),e(3554,"Texto exibido ao lado do resultado da agrega\xE7\xE3o no agrupamento."),t()()()()(),i(3555,"po-accordion-item",78)(3556,"h4",9)(3557,"code"),e(3558,"ThfAggregateConfig"),t()(),i(3559,"div",10)(3560,"p"),e(3561,"Interface para configura\xE7\xE3o do "),i(3562,"code"),e(3563,"Aggregate"),t(),e(3564,"."),t()(),i(3565,"h4",15),e(3566,"Propriedades"),t(),i(3567,"table",16)(3568,"tr",17)(3569,"th",18),e(3570,"Nome"),t(),i(3571,"th",18),e(3572,"Tipo"),t(),i(3573,"th",18),e(3574,"Descri\xE7\xE3o"),t()(),i(3575,"tr",19)(3576,"td",20)(3577,"div",21)(3578,"span",22),e(3579," aggregateAlign"),o(3580,"br"),t()()(),i(3581,"td",23)(3582,"code",79),e(3583,"'right' "),t(),i(3584,"code",80),e(3585," 'defaultColumn'"),t()(),i(3586,"td",26)(3587,"em")(3588,"strong"),e(3589,"(opcional)"),t()(),i(3590,"p"),e(3591,"Define o alinhamento horizontal dos valores dos totalizadores."),t(),i(3592,"ul")(3593,"li")(3594,"strong"),e(3595,"Valores aceitos:"),t()(),i(3596,"li")(3597,"code"),e(3598,"'right'"),t(),e(3599,": Alinha os valores \xE0 direita (comportamento padr\xE3o)."),t(),i(3600,"li")(3601,"code"),e(3602,"'defaultColumn'"),t(),e(3603,": Alinha o valor no mesmo alinhamento da sua coluna de origem."),t()()()(),i(3604,"tr",19)(3605,"td",20)(3606,"div",21)(3607,"span",22),e(3608," disabled"),o(3609,"br"),t()()(),i(3610,"td",23)(3611,"code",48),e(3612,"Array<string>"),t()(),i(3613,"td",26)(3614,"em")(3615,"strong"),e(3616,"(opcional)"),t()(),i(3617,"p"),e(3618,"Define a lista das propriedades (colunas) que devem ter a sele\xE7\xE3o dos aggregates desabilitada no rodap\xE9 da grid."),t()()(),i(3619,"tr",19)(3620,"td",20)(3621,"div",21)(3622,"span",22),e(3623," visible"),o(3624,"br"),t()()(),i(3625,"td",23)(3626,"code",48),e(3627,"Array<string>"),t()(),i(3628,"td",26)(3629,"em")(3630,"strong"),e(3631,"(opcional)"),t()(),i(3632,"p"),e(3633,"Define a lista das propriedades (colunas) que devem exibir a sele\xE7\xE3o de aggregates no rodap\xE9 da grid."),t()()()()(),i(3634,"po-accordion-item",81)(3635,"h4",9)(3636,"code"),e(3637,"ThfGridColumnSort"),t()(),i(3638,"div",10)(3639,"p"),e(3640,"Interface para definir a ordena\xE7\xE3o das colunas ("),i(3641,"strong"),e(3642,"t-sort"),t(),e(3643,")."),t()(),i(3644,"h4",15),e(3645,"Propriedades"),t(),i(3646,"table",16)(3647,"tr",17)(3648,"th",18),e(3649,"Nome"),t(),i(3650,"th",18),e(3651,"Tipo"),t(),i(3652,"th",18),e(3653,"Descri\xE7\xE3o"),t()(),i(3654,"tr",19)(3655,"td",20)(3656,"div",21)(3657,"span",22),e(3658," dir"),o(3659,"br"),t()()(),i(3660,"td",23)(3661,"code",82),e(3662,"'asc' "),t(),i(3663,"code",83),e(3664," 'desc'"),t()(),i(3665,"td",26)(3666,"em")(3667,"strong"),e(3668,"(opcional)"),t()(),i(3669,"p"),e(3670,"Dire\xE7\xE3o da coluna:"),t(),i(3671,"ul")(3672,"li")(3673,"code"),e(3674,"asc"),t()(),i(3675,"li")(3676,"code"),e(3677,"desc"),t()()()()(),i(3678,"tr",19)(3679,"td",20)(3680,"div",21)(3681,"span",22),e(3682," field"),o(3683,"br"),t()()(),i(3684,"td",23)(3685,"code",38),e(3686,"string"),t()(),i(3687,"td",26)(3688,"p"),e(3689,"Coluna"),t()()()()(),i(3690,"po-accordion-item",84)(3691,"h4",9)(3692,"code"),e(3693,"ThfGridColumn"),t()(),i(3694,"div",10)(3695,"p"),e(3696,"Interface para configura\xE7\xE3o das colunas ("),i(3697,"strong"),e(3698,"t-columns"),t(),e(3699,")."),t()(),i(3700,"h4",15),e(3701,"Propriedades"),t(),i(3702,"table",16)(3703,"tr",17)(3704,"th",18),e(3705,"Nome"),t(),i(3706,"th",18),e(3707,"Tipo"),t(),i(3708,"th",18),e(3709,"Descri\xE7\xE3o"),t()(),i(3710,"tr",19)(3711,"td",20)(3712,"div",21)(3713,"span",22),e(3714," action"),o(3715,"br"),t()()(),i(3716,"td",23)(3717,"code",27),e(3718,"Function"),t()(),i(3719,"td",26)(3720,"em")(3721,"strong"),e(3722,"(opcional)"),t()(),i(3723,"p"),e(3724,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),i(3725,"code"),e(3726,"link"),t(),e(3727," ou "),i(3728,"code"),e(3729,"icon"),t(),e(3730,"."),t(),i(3731,"blockquote")(3732,"p"),e(3733,"Quando for do tipo "),i(3734,"code"),e(3735,"link"),t(),e(3736,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),t()(),i(3737,"blockquote")(3738,"p"),e(3739,"Quando for do tipo "),i(3740,"code"),e(3741,"icon"),t(),e(3742," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),t()()()(),i(3743,"tr",19)(3744,"td",20)(3745,"div",21)(3746,"span",22),e(3747," boolean"),o(3748,"br"),t()()(),i(3749,"td",23)(3750,"code",85),e(3751,"PoTableBoolean"),t()(),i(3752,"td",26)(3753,"em")(3754,"strong"),e(3755,"(opcional)"),t()(),i(3756,"p"),e(3757,"Define um objeto do tipo "),i(3758,"code"),e(3759,"PoTableBoolean"),t(),e(3760," para as colunas do tipo "),i(3761,"em"),e(3762,"boolean"),t(),e(3763,". Por exemplo:"),t(),i(3764,"pre")(3765,"code"),e(3766,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),t()(),i(3767,"blockquote")(3768,"p"),e(3769,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(3770,"em"),e(3771,"boolean"),t(),e(3772,`,
esta exibir\xE1 por padr\xE3o `),i(3773,"code"),e(3774,"Sim"),t(),e(3775," e "),i(3776,"code"),e(3777,"N\xE3o"),t(),e(3778," de acordo com os valores "),i(3779,"em"),e(3780,"booleanos"),t(),e(3781,"."),t()()()(),i(3782,"tr",19)(3783,"td",20)(3784,"div",21)(3785,"span",22),e(3786," booleanFalse"),o(3787,"br"),t()()(),i(3788,"td",23)(3789,"code",38),e(3790,"string"),t()(),i(3791,"td",26)(3792,"em")(3793,"strong"),e(3794,"(opcional)"),t()(),i(3795,"p"),e(3796,"Texto exibido quando o valor da coluna for "),i(3797,"em"),e(3798,"false"),t(),e(3799,"."),t()()(),i(3800,"tr",19)(3801,"td",20)(3802,"div",21)(3803,"span",22),e(3804," booleanTrue"),o(3805,"br"),t()()(),i(3806,"td",23)(3807,"code",38),e(3808,"string"),t()(),i(3809,"td",26)(3810,"em")(3811,"strong"),e(3812,"(opcional)"),t()(),i(3813,"p"),e(3814,"Texto exibido quando o valor da coluna for "),i(3815,"em"),e(3816,"true"),t(),e(3817,"."),t()()(),i(3818,"tr",19)(3819,"td",20)(3820,"div",21)(3821,"span",22),e(3822," color"),o(3823,"br"),t()()(),i(3824,"td",23)(3825,"code",38),e(3826,"string "),t(),i(3827,"code",27),e(3828," Function"),t()(),i(3829,"td",26)(3830,"em")(3831,"strong"),e(3832,"(opcional)"),t()(),i(3833,"p"),e(3834,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),t(),i(3835,"p"),e(3836,"Valores v\xE1lidos:"),t(),i(3837,"ul")(3838,"li"),o(3839,"span",86),i(3840,"code"),e(3841,"color-01"),t()(),i(3842,"li"),o(3843,"span",87),i(3844,"code"),e(3845,"color-02"),t()(),i(3846,"li"),o(3847,"span",88),i(3848,"code"),e(3849,"color-03"),t()(),i(3850,"li"),o(3851,"span",89),i(3852,"code"),e(3853,"color-04"),t()(),i(3854,"li"),o(3855,"span",90),i(3856,"code"),e(3857,"color-05"),t()(),i(3858,"li"),o(3859,"span",91),i(3860,"code"),e(3861,"color-06"),t()(),i(3862,"li"),o(3863,"span",92),i(3864,"code"),e(3865,"color-07"),t()(),i(3866,"li"),o(3867,"span",93),i(3868,"code"),e(3869,"color-08"),t()(),i(3870,"li"),o(3871,"span",94),i(3872,"code"),e(3873,"color-09"),t()(),i(3874,"li"),o(3875,"span",95),i(3876,"code"),e(3877,"color-10"),t()(),i(3878,"li"),o(3879,"span",96),i(3880,"code"),e(3881,"color-11"),t()(),i(3882,"li"),o(3883,"span",97),i(3884,"code"),e(3885,"color-12"),t()()(),i(3886,"blockquote")(3887,"p"),e(3888,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),i(3889,"strong"),e(3890,"Caption Tag Colors"),t(),e(3891,":"),t()(),i(3892,"ul")(3893,"li"),o(3894,"span",98),i(3895,"code"),e(3896,"caption-tag-01"),t(),o(3897,"span",99),i(3898,"code"),e(3899,"caption-tag-02"),t(),o(3900,"span",100),i(3901,"code"),e(3902,"caption-tag-03"),t(),o(3903,"span",101),i(3904,"code"),e(3905,"caption-tag-04"),t(),o(3906,"span",102),i(3907,"code"),e(3908,"caption-tag-05"),t()(),i(3909,"li"),o(3910,"span",103),i(3911,"code"),e(3912,"caption-tag-06"),t(),o(3913,"span",104),i(3914,"code"),e(3915,"caption-tag-07"),t(),o(3916,"span",105),i(3917,"code"),e(3918,"caption-tag-08"),t(),o(3919,"span",106),i(3920,"code"),e(3921,"caption-tag-09"),t(),o(3922,"span",107),i(3923,"code"),e(3924,"caption-tag-10"),t()(),i(3925,"li"),o(3926,"span",108),i(3927,"code"),e(3928,"caption-tag-11"),t(),o(3929,"span",109),i(3930,"code"),e(3931,"caption-tag-12"),t(),o(3932,"span",110),i(3933,"code"),e(3934,"caption-tag-13"),t(),o(3935,"span",111),i(3936,"code"),e(3937,"caption-tag-14"),t(),o(3938,"span",112),i(3939,"code"),e(3940,"caption-tag-15"),t()(),i(3941,"li"),o(3942,"span",113),i(3943,"code"),e(3944,"caption-tag-16"),t(),o(3945,"span",114),i(3946,"code"),e(3947,"caption-tag-17"),t(),o(3948,"span",115),i(3949,"code"),e(3950,"caption-tag-18"),t(),o(3951,"span",116),i(3952,"code"),e(3953,"caption-tag-19"),t(),o(3954,"span",117),i(3955,"code"),e(3956,"caption-tag-20"),t()(),i(3957,"li"),o(3958,"span",118),i(3959,"code"),e(3960,"caption-tag-21"),t(),o(3961,"span",119),i(3962,"code"),e(3963,"caption-tag-22"),t(),o(3964,"span",120),i(3965,"code"),e(3966,"caption-tag-23"),t(),o(3967,"span",121),i(3968,"code"),e(3969,"caption-tag-24"),t(),o(3970,"span",122),i(3971,"code"),e(3972,"caption-tag-25"),t()(),i(3973,"li"),o(3974,"span",123),i(3975,"code"),e(3976,"caption-tag-26"),t(),o(3977,"span",124),i(3978,"code"),e(3979,"caption-tag-27"),t(),o(3980,"span",125),i(3981,"code"),e(3982,"caption-tag-28"),t(),o(3983,"span",126),i(3984,"code"),e(3985,"caption-tag-29"),t(),o(3986,"span",127),i(3987,"code"),e(3988,"caption-tag-30"),t()(),i(3989,"li"),o(3990,"span",128),i(3991,"code"),e(3992,"caption-tag-31"),t(),o(3993,"span",129),i(3994,"code"),e(3995,"caption-tag-32"),t(),o(3996,"span",130),i(3997,"code"),e(3998,"caption-tag-33"),t(),o(3999,"span",131),i(4e3,"code"),e(4001,"caption-tag-34"),t(),o(4002,"span",132),i(4003,"code"),e(4004,"caption-tag-35"),t()()(),i(4005,"blockquote")(4006,"p"),e(4007,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),t()(),i(4008,"pre")(4009,"code"),e(4010,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),t()(),i(4011,"blockquote")(4012,"p"),e(4013,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),i(4014,"code"),e(4015,"icons"),t(),e(4016,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),t()(),i(4017,"pre")(4018,"code"),e(4019,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),t()()()(),i(4020,"tr",19)(4021,"td",20)(4022,"div",21)(4023,"span",22),e(4024," detail"),o(4025,"br"),t()()(),i(4026,"td",23)(4027,"code",133),e(4028,"PoTableDetail"),t()(),i(4029,"td",26)(4030,"em")(4031,"strong"),e(4032,"(opcional)"),t()(),i(4033,"p"),e(4034,"Define um objeto que segue a interface "),i(4035,"code"),e(4036,"PoTableDetail"),t(),e(4037,", para as colunas de detalhes. Por exemplo:"),t(),i(4038,"pre")(4039,"code"),e(4040,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),t()()()(),i(4041,"tr",19)(4042,"td",20)(4043,"div",21)(4044,"span",22),e(4045," disabled"),o(4046,"br"),t()()(),i(4047,"td",23)(4048,"code",27),e(4049,"Function"),t()(),i(4050,"td",26)(4051,"em")(4052,"strong"),e(4053,"(opcional)"),t()(),i(4054,"p"),e(4055,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(4056,"em"),e(4057,"link"),t(),e(4058," e sua a\xE7\xE3o."),t(),i(4059,"blockquote")(4060,"p"),e(4061,"Propriedade dispon\xEDvel nas colunas do tipo "),i(4062,"code"),e(4063,"link"),t(),e(4064,"."),t()()()(),i(4065,"tr",19)(4066,"td",20)(4067,"div",21)(4068,"span",22),e(4069," editProperties"),o(4070,"br"),t()()(),i(4071,"td",23)(4072,"code",134),e(4073,"CustomEditProperties"),t()(),i(4074,"td",26)(4075,"em")(4076,"strong"),e(4077,"(opcional)"),t()(),i(4078,"p"),e(4079,"Propriedade para customizar as colunas edit\xE1veis"),t()()(),i(4080,"tr",19)(4081,"td",20)(4082,"div",21)(4083,"span",22),e(4084," filter"),o(4085,"br"),t()()(),i(4086,"td",23)(4087,"code",24),e(4088,"boolean"),t()(),i(4089,"td",26)(4090,"em")(4091,"strong"),e(4092,"(opcional)"),t()(),i(4093,"p"),e(4094,"Habilita o filtro por coluna."),t(),i(4095,"p"),e(4096,`Quando ativado, exibe um \xEDcone de filtro no cabe\xE7alho da coluna e permite que o usu\xE1rio aplique filtros diretamente
no grid.`),t(),i(4097,"p"),e(4098,"O filtro n\xE3o realiza requisi\xE7\xF5es \xE0 API, toda a filtragem ocorre localmente sobre os dados j\xE1 carregados."),t(),i(4099,"p"),e(4100,"O tipo do filtro \xE9 determinado pelo "),i(4101,"code"),e(4102,"type"),t(),e(4103," definido na coluna. Cada tipo renderiza um componente espec\xEDfico:"),t(),i(4104,"ul")(4105,"li"),e(4106,"string: "),i(4107,"code"),e(4108,"input"),t()(),i(4109,"li"),e(4110,"number, currency:"),i(4111,"ul")(4112,"li")(4113,"code"),e(4114,"decimal"),t(),e(4115," - Caso seja utilizado "),i(4116,"code"),e(4117,"editProperties.componentEditable"),t(),e(4118," do tipo "),i(4119,"code"),e(4120,"decimal"),t()(),i(4121,"li")(4122,"code"),e(4123,"number"),t(),e(4124," - Utilizado por padr\xE3o"),t()()(),i(4125,"li"),e(4126,"date: "),i(4127,"code"),e(4128,"datepicker"),t()(),i(4129,"li"),e(4130,"boolean: "),i(4131,"code"),e(4132,"checkbox"),t()(),i(4133,"li"),e(4134,"time:"),i(4135,"ul")(4136,"li")(4137,"code"),e(4138,"timepicker"),t(),e(4139," - Caso seja utilizado "),i(4140,"code"),e(4141,"editProperties.componentEditable"),t(),e(4142," do tipo "),i(4143,"code"),e(4144,"timepicker"),t()(),i(4145,"li")(4146,"code"),e(4147,"input"),t(),e(4148," - Utilizado por padr\xE3o. "),i(4149,"strong"),e(4150,"Recomendado caso a coluna utilize milissegundos"),t(),e(4151,", pois o "),i(4152,"code"),e(4153,"timepicker"),t(),e(4154," n\xE3o os suporta"),t()()()(),i(4155,"p"),e(4156,"Caso o "),i(4157,"code"),e(4158,"type"),t(),e(4159," da coluna n\xE3o seja um desses ou n\xE3o seja informado, o filtro assume o tipo "),i(4160,"code"),e(4161,"string"),t(),e(4162," como padr\xE3o."),t(),i(4163,"blockquote")(4164,"p"),e(4165,`Para conhecer todos os operadores dispon\xEDveis para cada tipo de coluna, consulte tamb\xE9m a interface
`),i(4166,"strong"),e(4167,"ThfFilterByColumn"),t(),e(4168,"."),t()()()(),i(4169,"tr",19)(4170,"td",20)(4171,"div",21)(4172,"span",22),e(4173," fixed"),o(4174,"br"),t()()(),i(4175,"td",23)(4176,"code",24),e(4177,"boolean"),t()(),i(4178,"td",26)(4179,"em")(4180,"strong"),e(4181,"(opcional)"),t()(),i(4182,"p"),e(4183,"Propriedade para fixar a coluna inicialmente."),t(),i(4184,"blockquote")(4185,"p"),e(4186,`No momento, \xE9 poss\xEDvel fixar apenas 2 colunas e garantir o funcionamento correto.
Caso a coluna de a\xE7\xF5es esteja fixa, \xE9 poss\xEDvel fixar somente 1 coluna corretamente.`),t()()()(),i(4187,"tr",19)(4188,"td",20)(4189,"div",21)(4190,"span",22),e(4191," format"),o(4192,"br"),t()()(),i(4193,"td",23)(4194,"code",38),e(4195,"string"),t()(),i(4196,"td",26)(4197,"em")(4198,"strong"),e(4199,"(opcional)"),t()(),i(4200,"p"),e(4201,"Formato de exibi\xE7\xE3o do valor da coluna."),t(),i(4202,"table")(4203,"thead")(4204,"tr")(4205,"th"),e(4206,"Formata\xE7\xE3o"),t(),i(4207,"th"),e(4208,"Type da Coluna"),t(),i(4209,"th"),e(4210,"Descri\xE7\xE3o"),t(),i(4211,"th"),e(4212,"Exemplos"),t()()(),i(4213,"tbody")(4214,"tr")(4215,"td"),e(4216,"Monet\xE1rio"),t(),i(4217,"td")(4218,"code"),e(4219,"currency"),t()(),i(4220,"td"),e(4221,"Formato para valores monet\xE1rios. Espera um c\xF3digo de moeda no padr\xE3o ISO 4217, e caso n\xE3o informado, ser\xE1 utilizado "),i(4222,"code"),e(4223,"'USD'"),t(),e(4224," por padr\xE3o"),t(),i(4225,"td")(4226,"code"),e(4227,"'BRL'"),t(),e(4228,", "),i(4229,"code"),e(4230,"'USD'"),t(),e(4231,", "),i(4232,"code"),e(4233,"'EUR'"),t(),e(4234,", "),i(4235,"code"),e(4236,"'RUB'"),t()()(),i(4237,"tr")(4238,"td"),e(4239,"Data"),t(),i(4240,"td")(4241,"code"),e(4242,"date"),t()(),i(4243,"td"),e(4244,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),t(),i(4245,"td")(4246,"code"),e(4247,"'dd/MM/yyyy'"),t(),e(4248,", "),i(4249,"code"),e(4250,"'dd-MM-yy'"),t(),e(4251,", "),i(4252,"code"),e(4253,"'mm/dd/yyyy'"),t()()(),i(4254,"tr")(4255,"td"),e(4256,"Hora"),t(),i(4257,"td")(4258,"code"),e(4259,"time"),t()(),i(4260,"td"),e(4261,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),t(),i(4262,"td")(4263,"code"),e(4264,"'HH:mm'"),t(),e(4265,", "),i(4266,"code"),e(4267,"'HH:mm:ss.ffffff'"),t(),e(4268,", "),i(4269,"code"),e(4270,"'HH:mm:ss.ff'"),t(),e(4271,", "),i(4272,"code"),e(4273,"'mm:ss.fff'"),t()()(),i(4274,"tr")(4275,"td"),e(4276,"N\xFAmero"),t(),i(4277,"td")(4278,"code"),e(4279,"number"),t()(),i(4280,"td"),e(4281,"Aceita um valor seguindo o padr\xE3o "),i(4282,"a",135)(4283,"strong"),e(4284,"DecimalPipe"),t()(),e(4285," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),t(),i(4286,"td")(4287,"code"),e(4288,"'1.2-5'"),t(),e(4289," (ex.: "),i(4290,"code"),e(4291,"50"),t(),e(4292," \u2192 "),i(4293,"code"),e(4294,"50.00"),t(),e(4295,")"),t()()()(),i(4296,"p"),e(4297,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),t(),i(4298,"blockquote")(4299,"p"),e(4300,`Na formata\xE7\xE3o do tipo currency, caso o valor informado seja diferente do padr\xE3o ISO 4217, ser\xE1 exibido o alerta "Currency formatting failed. Using fallback." no console do navegador.
Exemplos de formato inv\xE1lido: 'ABCD', '123'.`),t()()()(),i(4301,"tr",19)(4302,"td",20)(4303,"div",21)(4304,"span",22),e(4305," icons"),o(4306,"br"),t()()(),i(4307,"td",23)(4308,"code",136),e(4309,"Array<PoTableColumnIcon>"),t()(),i(4310,"td",26)(4311,"em")(4312,"strong"),e(4313,"(opcional)"),t()(),i(4314,"p"),e(4315,"Define um "),i(4316,"em"),e(4317,"array"),t(),e(4318," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),i(4319,"code"),e(4320,"action"),t(),e(4321," e "),i(4322,"code"),e(4323,"color"),t(),e(4324,`
definidos na coluna, \xE0 partir do `),i(4325,"em"),e(4326,"value"),t(),e(4327," da "),i(4328,"a",137)(4329,"code"),e(4330,"PoTableColumnIcon"),t()(),e(4331,", por exemplo:"),t(),i(4332,"pre")(4333,"code"),e(4334,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),t()(),i(4335,"pre")(4336,"code"),e(4337,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),t()()()(),i(4338,"tr",19)(4339,"td",20)(4340,"div",21)(4341,"span",22),e(4342," key"),o(4343,"br"),t()()(),i(4344,"td",23)(4345,"code",24),e(4346,"boolean "),t(),i(4347,"code",51),e(4348," number"),t()(),i(4349,"td",26)(4350,"em")(4351,"strong"),e(4352,"(opcional)"),t()(),i(4353,"p"),e(4354,`Indica se a coluna faz parte da chave composta para exclus\xE3o de registros.
Pode ser do tipo num\xE9rico ou booleano. Os valores num\xE9ricos sempre ser\xE3o priorizados em rela\xE7\xE3o aos booleanos.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(4355,"code"),e(4356,"API"),t(),e(4357," esteja preparada para receber uma ou mais "),i(4358,"code"),e(4359,"keys"),t(),e(4360," concatenadas com pipe '|' para identifica\xE7\xE3o do registro. ex.: DELETE {end-point}/{keys}"),t(),i(4361,"blockquote")(4362,"p"),e(4363,`Exemplo de keys: [{ property: 'id', key: 1 }, { property: 'name', key: true }, { property: 'email', key: 2 }].
Resposta do exemplo: 'valor de id|valor de email|valor de name'`),t()()()(),i(4364,"tr",19)(4365,"td",20)(4366,"div",21)(4367,"span",22),e(4368," label"),o(4369,"br"),t()()(),i(4370,"td",23)(4371,"code",38),e(4372,"string"),t()(),i(4373,"td",26)(4374,"em")(4375,"strong"),e(4376,"(opcional)"),t()(),i(4377,"p"),e(4378,"Texto para t\xEDtulo da coluna."),t(),i(4379,"p"),e(4380,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(4381,"em"),e(4382,"label"),t(),e(4383," o valor da propriedade "),i(4384,"em"),e(4385,"property"),t(),e(4386," com a primeira letra em mai\xFAsculo."),t()()(),i(4387,"tr",19)(4388,"td",20)(4389,"div",21)(4390,"span",22),e(4391," labels"),o(4392,"br"),t()()(),i(4393,"td",23)(4394,"code",138),e(4395,"Array<PoTableColumnLabel>"),t()(),i(4396,"td",26)(4397,"em")(4398,"strong"),e(4399,"(opcional)"),t()(),i(4400,"p"),e(4401,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(4402,"code"),e(4403,"PoTableColumnLabel"),t(),e(4404," na qual devem ser definidas os labels. Por exemplo:"),t(),i(4405,"pre")(4406,"code"),e(4407,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),t()()()(),i(4408,"tr",19)(4409,"td",20)(4410,"div",21)(4411,"span",22),e(4412," link"),o(4413,"br"),t()()(),i(4414,"td",23)(4415,"code",38),e(4416,"string"),t()(),i(4417,"td",26)(4418,"em")(4419,"strong"),e(4420,"(opcional)"),t()(),i(4421,"p"),e(4422,"Define o nome da propriedade que conter\xE1 o "),i(4423,"code"),e(4424,"link"),t(),e(4425," a ser redirecionado."),t()()(),i(4426,"tr",19)(4427,"td",20)(4428,"div",21)(4429,"span",22),e(4430," locale"),o(4431,"br"),t()()(),i(4432,"td",23)(4433,"code",38),e(4434,"string"),t()(),i(4435,"td",26)(4436,"em")(4437,"strong"),e(4438,"(opcional)"),t()(),i(4439,"p"),e(4440,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o e edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(4441,"a",139)(4442,"code"),e(4443,"I18n"),t()()(),i(4444,"p"),e(4445,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(4446,"pre")(4447,"code"),e(4448,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},
`),t()(),i(4449,"blockquote")(4450,"p"),e(4451,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(4452,"p"),e(4453,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(4454,"p"),e(4455,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(4456,"a",139)(4457,"code"),e(4458,"I18n"),t()()()(),i(4459,"p"),e(4460,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(4461,"pre")(4462,"code"),e(4463,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}
`),t()(),i(4464,"blockquote")(4465,"p"),e(4466,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(4467,"code"),e(4468,"number"),t(),e(4469," e "),i(4470,"code"),e(4471,"currency"),t(),e(4472,"."),t()(),i(4473,"blockquote")(4474,"p"),e(4475,"No modo edi\xE7\xE3o, a propriedade ser\xE1 repassada para os componentes que suportam a mesma."),t(),i(4476,"p")(4477,"strong"),e(4478,"Componentes compat\xEDveis"),t(),e(4479,": "),i(4480,"code"),e(4481,"decimal"),t()()()()(),i(4482,"tr",19)(4483,"td",20)(4484,"div",21)(4485,"span",22),e(4486," mask"),o(4487,"br"),t()()(),i(4488,"td",23)(4489,"code",38),e(4490,"string"),t()(),i(4491,"td",26)(4492,"em")(4493,"strong"),e(4494,"(opcional)"),t()(),i(4495,"p"),e(4496,`Indica uma m\xE1scara para a coluna
Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
Aplic\xE1vel nas colunas do tipo `),i(4497,"code"),e(4498,"number"),t(),e(4499," e "),i(4500,"code"),e(4501,"string"),t(),e(4502,`
Nas colunas do tipo `),i(4503,"code"),e(4504,"number"),t(),e(4505," a propriedade "),i(4506,"code"),e(4507,"mask"),t(),e(4508," ter\xE1 prioridade sob "),i(4509,"code"),e(4510,"format"),t()()()(),i(4511,"tr",19)(4512,"td",20)(4513,"div",21)(4514,"span",22),e(4515," property"),o(4516,"br"),t()()(),i(4517,"td",23)(4518,"code",38),e(4519,"string"),t()(),i(4520,"td",26)(4521,"p"),e(4522,"Identificador da coluna."),t()()(),i(4523,"tr",19)(4524,"td",20)(4525,"div",21)(4526,"span",22),e(4527," resizable"),o(4528,"br"),t()()(),i(4529,"td",23)(4530,"code",24),e(4531,"boolean"),t()(),i(4532,"td",26)(4533,"em")(4534,"strong"),e(4535,"(opcional)"),t()(),i(4536,"p"),e(4537,"Define se a coluna pode ser redimensionada pelo usu\xE1rio."),t()()(),i(4538,"tr",19)(4539,"td",20)(4540,"div",21)(4541,"span",22),e(4542," sortable"),o(4543,"br"),t()()(),i(4544,"td",23)(4545,"code",24),e(4546,"boolean"),t()(),i(4547,"td",26)(4548,"em")(4549,"strong"),e(4550,"(opcional)"),t()(),i(4551,"p"),e(4552,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),t()()(),i(4553,"tr",19)(4554,"td",20)(4555,"div",21)(4556,"span",22),e(4557," subtitles"),o(4558,"br"),t()()(),i(4559,"td",23)(4560,"code",140),e(4561,"Array<PoTableSubtitleColumn>"),t()(),i(4562,"td",26)(4563,"em")(4564,"strong"),e(4565,"(opcional)"),t()(),i(4566,"p"),e(4567,"Define um array de objetos para as colunas de legenda. Onde, "),i(4568,"code"),e(4569,"subtitles"),t(),e(4570,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),t(),i(4571,"pre")(4572,"code"),e(4573,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),t()(),i(4574,"p"),e(4575,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),t()()(),i(4576,"tr",19)(4577,"td",20)(4578,"div",21)(4579,"span",22),e(4580," tooltip"),o(4581,"br"),t()()(),i(4582,"td",23)(4583,"code",38),e(4584,"string"),t()(),i(4585,"td",26)(4586,"em")(4587,"strong"),e(4588,"(opcional)"),t()(),i(4589,"p"),e(4590,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),i(4591,"em"),e(4592,"mouse"),t(),e(4593," sobre um texto."),t(),i(4594,"blockquote")(4595,"p"),e(4596,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),i(4597,"em"),e(4598,"link"),t(),e(4599,"."),t()(),i(4600,"blockquote")(4601,"p"),e(4602,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),i(4603,"em"),e(4604,"tooltip"),t(),e(4605," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),t()()()(),i(4606,"tr",19)(4607,"td",20)(4608,"div",21)(4609,"span",22),e(4610," type"),o(4611,"br"),t()()(),i(4612,"td",23)(4613,"code",38),e(4614,"string"),t()(),i(4615,"td",26)(4616,"em")(4617,"strong"),e(4618,"(opcional)"),t()(),i(4619,"p"),e(4620,"Tipo da coluna."),t(),i(4621,"p"),e(4622,"Valores v\xE1lidos:"),t(),i(4623,"ul")(4624,"li")(4625,"p")(4626,"code"),e(4627,"boolean"),t(),e(4628,": Exibir\xE1 por padr\xE3o "),i(4629,"code"),e(4630,"Sim"),t(),e(4631," e "),i(4632,"code"),e(4633,"N\xE3o"),t(),e(4634," de acordo com os valores "),i(4635,"em"),e(4636,"booleanos"),t(),e(4637,"."),t(),i(4638,"blockquote")(4639,"p"),e(4640,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),i(4641,"code"),e(4642,"boolean"),t(),e(4643," desta interface."),t()()(),i(4644,"li")(4645,"p")(4646,"code"),e(4647,"currency"),t(),e(4648,": valores monet\xE1rios."),t()(),i(4649,"li")(4650,"p")(4651,"code"),e(4652,"date"),t(),e(4653,": valor de datas."),t(),i(4654,"ul")(4655,"li"),e(4656,"Aceita os tipos "),i(4657,"em"),e(4658,"string"),t(),e(4659," e "),i(4660,"em"),e(4661,"Date"),t(),e(4662,` padr\xE3o do Javascript,
por exemplo: `),i(4663,"code"),e(4664,"'2017-11-28'"),t(),e(4665," ou "),i(4666,"code"),e(4667,"new Date(2017, 10, 28)"),t(),e(4668,"."),t()()(),i(4669,"li")(4670,"p")(4671,"code"),e(4672,"dateTime"),t(),e(4673,": valor de data com hor\xE1rio."),t(),i(4674,"ul")(4675,"li"),e(4676,"Aceita o tipo "),i(4677,"em"),e(4678,"string"),t(),e(4679," no formato "),i(4680,"strong"),e(4681,"ISO-8601"),t(),e(4682," extendido "),i(4683,"strong"),e(4684,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4685,`
e o tipo `),i(4686,"em"),e(4687,"Date"),t(),e(4688," padr\xE3o do Javascript, por exemplo: "),i(4689,"code"),e(4690,"'2017-11-28T00:00:00-02:00'"),t(),e(4691," ou "),i(4692,"code"),e(4693,"new Date(2017, 10, 28)"),t(),e(4694,"."),t()()(),i(4695,"li")(4696,"p")(4697,"code"),e(4698,"detail"),t(),e(4699,": array de objetos para o master-detail."),t(),i(4700,"ul")(4701,"li"),e(4702,"Incompat\xEDvel com "),i(4703,"code"),e(4704,"virtual-scroll"),t(),e(4705,", que requer altura fixa nas linhas."),t()()(),i(4706,"li")(4707,"p")(4708,"code"),e(4709,"icon"),t(),e(4710,": "),i(4711,"em"),e(4712,"array"),t(),e(4713," de "),i(4714,"em"),e(4715,"string"),t(),e(4716," ou objetos para a coluna de \xEDcones."),t()(),i(4717,"li")(4718,"p")(4719,"code"),e(4720,"label"),t(),e(4721,": texto com destaque."),t()(),i(4722,"li")(4723,"p")(4724,"code"),e(4725,"link"),t(),e(4726,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),t()(),i(4727,"li")(4728,"p")(4729,"code"),e(4730,"number"),t(),e(4731,": valores num\xE9ricos."),t()(),i(4732,"li")(4733,"p")(4734,"code"),e(4735,"string"),t(),e(4736,": textos."),t()(),i(4737,"li")(4738,"p")(4739,"code"),e(4740,"subtitle"),t(),e(4741,": array de objetos para a coluna de legenda."),t()(),i(4742,"li")(4743,"p")(4744,"code"),e(4745,"time"),t(),e(4746,": valor de hor\xE1rio."),t(),i(4747,"ul")(4748,"li"),e(4749,"Aceita o tipo "),i(4750,"em"),e(4751,"string"),t(),e(4752," nos formatos "),i(4753,"strong"),e(4754,"'HH:mm:ss'"),t(),e(4755," ou "),i(4756,"strong"),e(4757,"'HH:mm:ss.ffffff'"),t(),e(4758,", por exemplo: "),i(4759,"code"),e(4760,"'23:12:45'"),t(),e(4761,"."),t()()(),i(4762,"li")(4763,"p")(4764,"code"),e(4765,"cellTemplate"),t(),e(4766,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(4767,"a",141),e(4768,"PoTableCellTemplate"),t(),e(4769,"."),t()(),i(4770,"li")(4771,"p")(4772,"code"),e(4773,"columnTemplate"),t(),e(4774,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(4775,"a",142),e(4776,"PoTableColumnTemplate"),t(),e(4777,"."),t()()()()(),i(4778,"tr",19)(4779,"td",20)(4780,"div",21)(4781,"span",22),e(4782," visible"),o(4783,"br"),t()()(),i(4784,"td",23)(4785,"code",24),e(4786,"boolean"),t()(),i(4787,"td",26)(4788,"em")(4789,"strong"),e(4790,"(opcional)"),t()(),i(4791,"p"),e(4792,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(4793,"strong"),e(4794,"gerenciador de colunas"),t(),e(4795,"."),t(),i(4796,"blockquote")(4797,"p"),e(4798,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(4799,"code"),e(4800,"p-max-columns"),t(),e(4801,"."),t()()()(),i(4802,"tr",19)(4803,"td",20)(4804,"div",21)(4805,"span",22),e(4806," width"),o(4807,"br"),t()()(),i(4808,"td",23)(4809,"code",51),e(4810,"number "),t(),i(4811,"code",38),e(4812," string"),t()(),i(4813,"td",26)(4814,"em")(4815,"strong"),e(4816,"(opcional)"),t()(),i(4817,"p"),e(4818,"Caso seja passado o formato "),i(4819,"code"),e(4820,"number"),t(),e(4821,`, ser\xE1 aplicado em pixels.
A largura da coluna pode ser informada em pixels ou porcentagem.`),t(),i(4822,"blockquote")(4823,"p"),e(4824,`Exemplo Pixel: 100.
Exemplo Porcentagem: '100%'.
Apesar de atribuir largura as colunas da grid \xE9 importante ressaltar
que o componente recalcula as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis na grid,
podendo alterar as dimens\xF5es passadas proporcionalmente.`),t()()()()()(),i(4825,"po-accordion-item",143)(4826,"h4",9)(4827,"code"),e(4828,"CustomEditProperties"),t()(),i(4829,"div",10)(4830,"p"),e(4831,"Interface para configura\xE7\xE3o das colunas edit\xE1veis ("),i(4832,"strong"),e(4833,"editProperties"),t(),e(4834,`).
Al\xE9m dessas propriedades, herda as defini\xE7\xF5es da interface
`),i(4835,"a",144),e(4836,"PoDynamicFormField"),t(),e(4837,`,
permitindo definir campos de entrada que ser\xE3o criados dinamicamente.`),t()(),i(4838,"h4",15),e(4839,"Propriedades"),t(),i(4840,"table",16)(4841,"tr",17)(4842,"th",18),e(4843,"Nome"),t(),i(4844,"th",18),e(4845,"Tipo"),t(),i(4846,"th",18),e(4847,"Descri\xE7\xE3o"),t()(),i(4848,"tr",19)(4849,"td",20)(4850,"div",21)(4851,"span",22),e(4852," componentEditable"),o(4853,"br"),t()()(),i(4854,"td",23)(4855,"code",145),e(4856,"'input' "),t(),i(4857,"code",146),e(4858," 'number' "),t(),i(4859,"code",147),e(4860," 'select' "),t(),i(4861,"code",148),e(4862," 'datepicker' "),t(),i(4863,"code",149),e(4864," 'switch' "),t(),i(4865,"code",150),e(4866," 'combo' "),t(),i(4867,"code",151),e(4868," 'multiselect' "),t(),i(4869,"code",152),e(4870," 'decimal' "),t(),i(4871,"code",153),e(4872," 'checkbox' "),t(),i(4873,"code",154),e(4874," 'lookup' "),t(),i(4875,"code",155),e(4876," 'timepicker'"),t()(),i(4877,"td",26)(4878,"em")(4879,"strong"),e(4880,"(opcional)"),t()(),i(4881,"p"),e(4882,"Propriedade para escolher qual componente ser\xE1 exibido para editar."),t(),i(4883,"blockquote")(4884,"p"),e(4885,"O valor padr\xE3o \xE9 "),i(4886,"code"),e(4887,"input"),t(),e(4888,"."),t()()()(),i(4889,"tr",19)(4890,"td",20)(4891,"div",21)(4892,"span",22),e(4893," componentSize"),o(4894,"br"),t()()(),i(4895,"td",23)(4896,"code",156),e(4897,"'small' "),t(),i(4898,"code",157),e(4899," 'medium' "),t(),i(4900,"code",158),e(4901," 'large'"),t()(),i(4902,"td",26)(4903,"em")(4904,"strong"),e(4905,"(opcional)"),t()(),i(4906,"p"),e(4907,"Define o tamanho dos componentes de formul\xE1rio no grid conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4908,"ul")(4909,"li")(4910,"code"),e(4911,"small"),t(),e(4912,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4913,"li")(4914,"code"),e(4915,"medium"),t(),e(4916,": aplica a medida medium de cada componente."),t(),i(4917,"li")(4918,"code"),e(4919,"large"),t(),e(4920,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4921,"code"),e(4922,"po-checkbox"),t(),e(4923," e "),i(4924,"code"),e(4925,"po-radio-group"),t(),e(4926,")."),i(4927,"blockquote")(4928,"p"),e(4929,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4930,"code"),e(4931,"medium"),t(),e(4932,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4933,"a",39),e(4934,"po-theme"),t(),e(4935,"."),t()()()()()(),i(4936,"tr",19)(4937,"td",20)(4938,"div",21)(4939,"span",22),e(4940," controlValueWithLabel"),o(4941,"br"),t()()(),i(4942,"td",23)(4943,"code",24),e(4944,"boolean"),t()(),i(4945,"td",26)(4946,"em")(4947,"strong"),e(4948,"(opcional)"),t()(),i(4949,"p"),e(4950,"Determina se os componentes "),i(4951,"code"),e(4952,"select"),t(),e(4953,", "),i(4954,"code"),e(4955,"combo"),t(),e(4956,", "),i(4957,"code"),e(4958,"multiselect"),t(),e(4959," e "),i(4960,"code"),e(4961,"thf-lookup"),t(),e(4962,`
devem exibir o `),i(4963,"code"),e(4964,"label"),t(),e(4965," ao inv\xE9s de "),i(4966,"code"),e(4967,"value"),t(),e(4968," na grid"),t()()(),i(4969,"tr",19)(4970,"td",20)(4971,"div",21)(4972,"span",22),e(4973," customItems"),o(4974,"br"),t()()(),i(4975,"td",23)(4976,"code",53),e(4977,"Array<any>"),t()(),i(4978,"td",26)(4979,"em")(4980,"strong"),e(4981,"(opcional)"),t()(),i(4982,"p"),e(4983,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t(),i(4984,"blockquote")(4985,"p")(4986,"strong"),e(4987,"Componente compat\xEDvel"),t(),e(4988,": "),i(4989,"code"),e(4990,"thf-lookup"),t()()()()(),i(4991,"tr",19)(4992,"td",20)(4993,"div",21)(4994,"span",22),e(4995," disabled"),o(4996,"br"),t()()(),i(4997,"td",23)(4998,"code",24),e(4999,"boolean "),t(),i(5e3,"code",159),e(5001," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(5002,"td",26)(5003,"em")(5004,"strong"),e(5005,"(opcional)"),t()(),i(5006,"p"),e(5007,`Desabilita o campo. Pode ser um valor booleano fixo ou uma fun\xE7\xE3o din\xE2mica
que recebe os dados da linha e retorna um booleano`),t()()(),i(5008,"tr",19)(5009,"td",20)(5010,"div",21)(5011,"span",22),e(5012," fieldFormat"),o(5013,"br"),t()()(),i(5014,"td",23)(5015,"code",48),e(5016,"Array<string> "),t(),i(5017,"code",160),e(5018," ((item: any) => string)"),t()(),i(5019,"td",26)(5020,"em")(5021,"strong"),e(5022,"(opcional)"),t()(),i(5023,"p"),e(5024,"Formato de exibi\xE7\xE3o do campo."),t(),i(5025,"p"),e(5026,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(5027,"em"),e(5028,"string"),t(),e(5029," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(5030,"pre")(5031,"code",31),e(5032,`fieldFormat(obj) {
  return \`\${obj.id} (\${obj.name})\`;
}


Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado \` - \` como separador, por exemplo:

\`\`\`typescript
 fieldFormat]="['id','nickname']"
`),t()(),i(5033,"blockquote")(5034,"p"),e(5035,"Componente compat\xEDvel: "),i(5036,"code"),e(5037,"thf-lookup"),t(),e(5038,"."),t()()()(),i(5039,"tr",19)(5040,"td",20)(5041,"div",21)(5042,"span",22),e(5043," filterSearchSelect"),o(5044,"br"),t()()(),i(5045,"td",23)(5046,"code",161),e(5047,"Array<ThfLookupFilterSearchSelect>"),t()(),i(5048,"td",26)(5049,"em")(5050,"strong"),e(5051,"(opcional)"),t()(),i(5052,"p"),e(5053,"Propriedade para listar as op\xE7\xF5es de filtro do po-search no modal."),t(),i(5054,"blockquote")(5055,"p"),e(5056,"Componente compat\xEDvel: "),i(5057,"code"),e(5058,"thf-lookup"),t(),e(5059,"."),t()()()(),i(5060,"tr",19)(5061,"td",20)(5062,"div",21)(5063,"span",22),e(5064," keysLabel"),o(5065,"br"),t()()(),i(5066,"td",23)(5067,"code",162),e(5068,"Array<ThfLookupKeysLabel>"),t()(),i(5069,"td",26)(5070,"em")(5071,"strong"),e(5072,"(opcional)"),t()(),i(5073,"p"),e(5074,"Propriedade para exibir at\xE9 3 propriedades por valor no listbox."),t(),i(5075,"blockquote")(5076,"p"),e(5077,"Componente compat\xEDvel: "),i(5078,"code"),e(5079,"thf-lookup"),t(),e(5080,"."),t()()()(),i(5081,"tr",19)(5082,"td",20)(5083,"div",21)(5084,"span",22),e(5085," loading"),o(5086,"br"),t()()(),i(5087,"td",23)(5088,"code",24),e(5089,"boolean"),t()(),i(5090,"td",26)(5091,"em")(5092,"strong"),e(5093,"(opcional)"),t()(),i(5094,"p"),e(5095,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),t(),i(5096,"blockquote")(5097,"p"),e(5098,"Por padr\xE3o \xE9 "),i(5099,"code"),e(5100,"false"),t(),e(5101,"."),t()(),i(5102,"blockquote")(5103,"p")(5104,"strong"),e(5105,"Componentes compat\xEDveis:"),t(),i(5106,"code"),e(5107,"po-datepicker"),t(),e(5108,", "),i(5109,"code"),e(5110,"po-number"),t(),e(5111,", "),i(5112,"code"),e(5113,"po-decimal"),t(),e(5114,", "),i(5115,"code"),e(5116,"po-input"),t(),e(5117,", "),i(5118,"code"),e(5119,"po-select"),t(),e(5120,", "),i(5121,"code"),e(5122,"po-switch"),t(),e(5123,`,
`),i(5124,"code"),e(5125,"po-combo"),t(),e(5126,", "),i(5127,"code"),e(5128,"po-multiselect"),t(),e(5129,", "),i(5130,"code"),e(5131,"thf-lookup"),t(),e(5132,"."),t()(),i(5133,"blockquote")(5134,"p"),e(5135,"No "),i(5136,"code"),e(5137,"thf-lookup"),t(),e(5138,", o estado de loading n\xE3o desabilita o campo, exibindo apenas o indicador visual."),t()()()(),i(5139,"tr",19)(5140,"td",20)(5141,"div",21)(5142,"span",22),e(5143," locale"),o(5144,"br"),t()()(),i(5145,"td",23)(5146,"code",38),e(5147,"string"),t()(),i(5148,"td",26)(5149,"em")(5150,"strong"),e(5151,"(opcional)"),t()(),i(5152,"p"),e(5153,`Define a localidade a ser utilizada no modo de edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(5154,"a",139)(5155,"code"),e(5156,"I18n"),t()()(),i(5157,"p"),e(5158,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(5159,"pre")(5160,"code"),e(5161,`columnWithItems: Array<ThfGridColumn> = [
 {
   property: 'currency',
   type: 'currency',
   editProperties: {
     componentEditable: 'decimal',
     locale: 'en'
   },
},
`),t()(),i(5162,"blockquote")(5163,"p"),e(5164,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(5165,"p"),e(5166,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(5167,"p"),e(5168,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(5169,"a",139)(5170,"code"),e(5171,"I18n"),t()()()(),i(5172,"p"),e(5173,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(5174,"pre")(5175,"code"),e(5176,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}
`),t()(),i(5177,"blockquote")(5178,"p"),e(5179,"Caso seja definida em conjunto com a propriedade "),i(5180,"code"),e(5181,"locale"),t(),e(5182," da coluna, o "),i(5183,"code"),e(5184,"editProperties.locale"),t(),e(5185," ter\xE1 prioridade ao habilitar a edi\xE7\xE3o de uma linha e o "),i(5186,"code"),e(5187,"locale"),t(),e(5188," da coluna ser\xE1 utilizado apenas para exibi\xE7\xE3o."),t()(),i(5189,"blockquote")(5190,"p")(5191,"strong"),e(5192,"Componentes compat\xEDveis"),t(),e(5193,": "),i(5194,"code"),e(5195,"po-datepicker"),t(),e(5196,", "),i(5197,"code"),e(5198,"po-decimal"),t(),e(5199,", "),i(5200,"code"),e(5201,"po-timepicker"),t(),e(5202,"."),t()()()(),i(5203,"tr",19)(5204,"td",20)(5205,"div",21)(5206,"span",22),e(5207," lookupGridProperties"),o(5208,"br"),t()()(),i(5209,"td",23)(5210,"code",163),e(5211,"ThfLookupGridProperties"),t()(),i(5212,"td",26)(5213,"em")(5214,"strong"),e(5215,"(opcional)"),t()(),i(5216,"p"),e(5217,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(5218,"blockquote")(5219,"p")(5220,"strong"),e(5221,"Componentes compat\xEDveis"),t(),e(5222,": thf-lookup`"),t()()()(),i(5223,"tr",19)(5224,"td",20)(5225,"div",21)(5226,"span",22),e(5227," onBlur"),o(5228,"br"),t()()(),i(5229,"td",23)(5230,"code",27),e(5231,"Function"),t()(),i(5232,"td",26)(5233,"em")(5234,"strong"),e(5235,"(opcional)"),t()(),i(5236,"p"),e(5237,"Evento disparado ao sair do campo."),t(),i(5238,"blockquote")(5239,"p")(5240,"strong"),e(5241,"Componentes compat\xEDveis"),t(),e(5242,": "),i(5243,"code"),e(5244,"po-input"),t(),e(5245,", "),i(5246,"code"),e(5247,"po-number"),t(),e(5248,", "),i(5249,"code"),e(5250,"po-decimal"),t(),e(5251,", "),i(5252,"code"),e(5253,"po-datepicker"),t(),e(5254,", "),i(5255,"code"),e(5256,"po-timepicker"),t(),e(5257,", "),i(5258,"code"),e(5259,"po-select"),t(),e(5260,", "),i(5261,"code"),e(5262,"po-combo"),t(),e(5263,", "),i(5264,"code"),e(5265,"po-multiselect"),t(),e(5266,", "),i(5267,"code"),e(5268,"po-checkbox"),t()()()()(),i(5269,"tr",19)(5270,"td",20)(5271,"div",21)(5272,"span",22),e(5273," onChange"),o(5274,"br"),t()()(),i(5275,"td",23)(5276,"code",164),e(5277,"(value: any) => void"),t()(),i(5278,"td",26)(5279,"em")(5280,"strong"),e(5281,"(opcional)"),t()(),i(5282,"p"),e(5283,"Evento disparado ao alterar valor e deixar o campo."),t(),i(5284,"blockquote")(5285,"p")(5286,"strong"),e(5287,"Componentes compat\xEDveis"),t(),e(5288,": "),i(5289,"code"),e(5290,"po-input"),t(),e(5291,", "),i(5292,"code"),e(5293,"po-number"),t(),e(5294,", "),i(5295,"code"),e(5296,"po-decimal"),t(),e(5297,", "),i(5298,"code"),e(5299,"po-datepicker"),t(),e(5300,", "),i(5301,"code"),e(5302,"po-timepicker"),t(),e(5303,", "),i(5304,"code"),e(5305,"po-select"),t(),e(5306,", "),i(5307,"code"),e(5308,"po-switch"),t(),e(5309,", "),i(5310,"code"),e(5311,"po-combo"),t(),e(5312,", "),i(5313,"code"),e(5314,"po-multiselect"),t(),e(5315,", "),i(5316,"code"),e(5317,"po-checkbox"),t(),e(5318,", "),i(5319,"code"),e(5320,"thf-lookup"),t()()()()(),i(5321,"tr",19)(5322,"td",20)(5323,"div",21)(5324,"span",22),e(5325," onChangeModel"),o(5326,"br"),t()()(),i(5327,"td",23)(5328,"code",165),e(5329,"(model: any) => void"),t()(),i(5330,"td",26)(5331,"em")(5332,"strong"),e(5333,"(opcional)"),t()(),i(5334,"p"),e(5335,"Evento disparado ao alterar valor do model."),t(),i(5336,"blockquote")(5337,"p")(5338,"strong"),e(5339,"Componentes compat\xEDveis"),t(),e(5340,": "),i(5341,"code"),e(5342,"po-input"),t(),e(5343,", "),i(5344,"code"),e(5345,"po-number"),t(),e(5346,", "),i(5347,"code"),e(5348,"po-decimal"),t(),e(5349,", "),i(5350,"code"),e(5351,"po-select"),t(),e(5352,", "),i(5353,"code"),e(5354,"po-combo"),t(),e(5355,", "),i(5356,"code"),e(5357,"thf-lookup"),t()()()()(),i(5358,"tr",19)(5359,"td",20)(5360,"div",21)(5361,"span",22),e(5362," onEnter"),o(5363,"br"),t()()(),i(5364,"td",23)(5365,"code",27),e(5366,"Function"),t()(),i(5367,"td",26)(5368,"em")(5369,"strong"),e(5370,"(opcional)"),t()(),i(5371,"p"),e(5372,"Evento disparado ao entrar no campo."),t(),i(5373,"blockquote")(5374,"p")(5375,"strong"),e(5376,"Componentes compat\xEDveis"),t(),e(5377,": "),i(5378,"code"),e(5379,"po-input"),t(),e(5380,", "),i(5381,"code"),e(5382,"po-number"),t(),e(5383,", "),i(5384,"code"),e(5385,"po-decimal"),t()()()()(),i(5386,"tr",19)(5387,"td",20)(5388,"div",21)(5389,"span",22),e(5390," onError"),o(5391,"br"),t()()(),i(5392,"td",23)(5393,"code",166),e(5394,"(error: HttpErrorResponse) => void"),t()(),i(5395,"td",26)(5396,"em")(5397,"strong"),e(5398,"(opcional)"),t()(),i(5399,"p"),e(5400,"Callback disparado quando ocorre erro na requisi\xE7\xE3o de busca."),t(),i(5401,"blockquote")(5402,"p")(5403,"strong"),e(5404,"Componente compat\xEDvel"),t(),e(5405,": "),i(5406,"code"),e(5407,"thf-lookup"),t()()()()(),i(5408,"tr",19)(5409,"td",20)(5410,"div",21)(5411,"span",22),e(5412," onFocus"),o(5413,"br"),t()()(),i(5414,"td",23)(5415,"code",27),e(5416,"Function"),t()(),i(5417,"td",26)(5418,"em")(5419,"strong"),e(5420,"(opcional)"),t()(),i(5421,"p"),e(5422,"Callback disparado quando o campo recebe foco."),t(),i(5423,"blockquote")(5424,"p")(5425,"strong"),e(5426,"Componente compat\xEDvel"),t(),e(5427,": "),i(5428,"code"),e(5429,"thf-lookup"),t()()()()(),i(5430,"tr",19)(5431,"td",20)(5432,"div",21)(5433,"span",22),e(5434," onInputChange"),o(5435,"br"),t()()(),i(5436,"td",23)(5437,"code",164),e(5438,"(value: any) => void"),t()(),i(5439,"td",26)(5440,"em")(5441,"strong"),e(5442,"(opcional)"),t()(),i(5443,"p"),e(5444,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no campo de busca do componente. A fun\xE7\xE3o receber\xE1 como argumento o valor modificado."),t(),i(5445,"blockquote")(5446,"p")(5447,"strong"),e(5448,"Componente compat\xEDvel"),t(),e(5449,": "),i(5450,"code"),e(5451,"po-combo"),t()()()()(),i(5452,"tr",19)(5453,"td",20)(5454,"div",21)(5455,"span",22),e(5456," onSelected"),o(5457,"br"),t()()(),i(5458,"td",23)(5459,"code",167),e(5460,"(selection: any "),t(),i(5461,"code",168),e(5462," Array<any>) => void"),t()(),i(5463,"td",26)(5464,"em")(5465,"strong"),e(5466,"(opcional)"),t()(),i(5467,"p"),e(5468,"Callback disparado ao selecionar item(s)."),t(),i(5469,"blockquote")(5470,"p")(5471,"strong"),e(5472,"Componente compat\xEDvel"),t(),e(5473,": "),i(5474,"code"),e(5475,"thf-lookup"),t()()()()(),i(5476,"tr",19)(5477,"td",20)(5478,"div",21)(5479,"span",22),e(5480," readonly"),o(5481,"br"),t()()(),i(5482,"td",23)(5483,"code",24),e(5484,"boolean "),t(),i(5485,"code",159),e(5486," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(5487,"td",26)(5488,"em")(5489,"strong"),e(5490,"(opcional)"),t()(),i(5491,"p"),e(5492,`Indica que o campo ser\xE1 somente leitura. Pode ser um valor booleano fixo
ou uma fun\xE7\xE3o din\xE2mica que recebe os dados da linha e retorna um booleano`),t()()(),i(5493,"tr",19)(5494,"td",20)(5495,"div",21)(5496,"span",22),e(5497," required"),o(5498,"br"),t()()(),i(5499,"td",23)(5500,"code",24),e(5501,"boolean"),t()(),i(5502,"td",26)(5503,"em")(5504,"strong"),e(5505,"(opcional)"),t()(),i(5506,"p"),e(5507,"Define a obrigatoriedade do campo."),t(),i(5508,"blockquote")(5509,"p"),e(5510,"Caso seja definido como "),i(5511,"code"),e(5512,"true"),t(),e(5513,', exibe a label "(Obrigat\xF3rio)" na coluna.'),t()()()(),i(5514,"tr",19)(5515,"td",20)(5516,"div",21)(5517,"span",22),e(5518," size"),o(5519,"br"),t()()(),i(5520,"td",23)(5521,"code",169),e(5522,"'sm' "),t(),i(5523,"code",170),e(5524," 'md' "),t(),i(5525,"code",171),e(5526," 'lg' "),t(),i(5527,"code",172),e(5528," 'xl' "),t(),i(5529,"code",173),e(5530," 'auto'"),t()(),i(5531,"td",26)(5532,"em")(5533,"strong"),e(5534,"(opcional)"),t()(),i(5535,"p"),e(5536,"Propriedade para definir o tamanho do modal."),t(),i(5537,"blockquote")(5538,"p"),e(5539,"Componente compat\xEDvel: "),i(5540,"code"),e(5541,"thf-lookup"),t(),e(5542,"."),t()()()()()(),i(5543,"po-accordion-item",174)(5544,"h4",9)(5545,"code"),e(5546,"ThfGridDeleteService"),t()(),i(5547,"div",10)(5548,"p"),e(5549,"Interface para excluir algum item via servi\xE7o."),t()(),i(5550,"table",62)(5551,"tr",19)(5552,"th",63)(5553,"div",21)(5554,"h4")(5555,"span",22),e(5556," deleteItem "),t()()()()(),i(5557,"tr",26)(5558,"td",26)(5559,"p"),e(5560,`M\xE9todo que ser\xE1 disparado ao excluir algum item, deve-se retornar
um `),i(5561,"em"),e(5562,"Observable"),t(),e(5563,"."),t()()()(),i(5564,"h5")(5565,"b"),e(5566,"Par\xE2metros"),t()(),i(5567,"table",16)(5568,"tr",17)(5569,"th",18),e(5570,"Nome"),t(),i(5571,"th",18),e(5572,"Tipo"),t(),i(5573,"th",18),e(5574,"Descri\xE7\xE3o"),t()(),i(5575,"tr",19)(5576,"td",20),e(5577," selectedRow"),t(),i(5578,"td",23)(5579,"code",64),e(5580," any "),t()(),i(5581,"td",26)(5582,"p"),e(5583,"Par\xE2metro com o valor do atual item selecionado."),t()()(),i(5584,"tr",19)(5585,"td",20),e(5586," filterParams"),t(),i(5587,"td",23)(5588,"code",64),e(5589," any "),t()(),i(5590,"td",26)(5591,"p"),e(5592,"Valor informado atrav\xE9s da propriedade "),i(5593,"code"),e(5594,"t-param-delete-api"),t(),e(5595,"."),t()()(),i(5596,"tr",19)(5597,"td",20),e(5598," keyValue"),t(),i(5599,"td",23)(5600,"code",64),e(5601," string "),t()(),i(5602,"td",26)(5603,"p"),e(5604,"Valor informado caso tenha alguma coluna com a propriedade "),i(5605,"code"),e(5606,"key"),t(),e(5607," ativa ou o valor da propriedade "),i(5608,"code"),e(5609,"id"),t(),e(5610,"."),t()()()(),o(5611,"br"),i(5612,"table",62)(5613,"tr",19)(5614,"th",63)(5615,"div",21)(5616,"h4")(5617,"span",22),e(5618," deleteBatchItems "),t()()()()(),i(5619,"tr",26)(5620,"td",26)(5621,"p"),e(5622,"M\xE9todo que ser\xE1 disparado ao excluir itens quando o THF-GRID estiver com a propriedade "),i(5623,"code"),e(5624,"t-allow-batch-delete"),t(),e(5625,` habilitada, deve-se retornar
um `),i(5626,"em"),e(5627,"Observable"),t(),e(5628,"."),t(),i(5629,"p"),e(5630,"Ao habilitar a propriedade "),i(5631,"code"),e(5632,"t-allow-batch-delete"),t(),e(5633,", este m\xE9todo sempre ser\xE1 chamado, exluindo um ou v\xE1rios itens."),t()()()(),i(5634,"h5")(5635,"b"),e(5636,"Par\xE2metros"),t()(),i(5637,"table",16)(5638,"tr",17)(5639,"th",18),e(5640,"Nome"),t(),i(5641,"th",18),e(5642,"Tipo"),t(),i(5643,"th",18),e(5644,"Descri\xE7\xE3o"),t()(),i(5645,"tr",19)(5646,"td",20),e(5647," selectedRows"),t(),i(5648,"td",23)(5649,"code",64),e(5650," any "),t()(),i(5651,"td",26)(5652,"p"),e(5653,"Par\xE2metro com os valores dos itens selecionados."),t()()(),i(5654,"tr",19)(5655,"td",20),e(5656," paramDelete"),t(),i(5657,"td",23)(5658,"code",64),e(5659," any "),t()(),i(5660,"td",26)(5661,"p"),e(5662,"Valor informado atrav\xE9s da propriedade "),i(5663,"code"),e(5664,"t-param-delete-api"),t(),e(5665,"."),t()()(),i(5666,"tr",19)(5667,"td",20),e(5668," keys"),t(),i(5669,"td",23)(5670,"code",64),e(5671," string "),t()(),i(5672,"td",26)(5673,"p"),e(5674,"Valor informado caso tenha alguma coluna com a propriedade "),i(5675,"code"),e(5676,"key"),t(),e(5677," ativa ou o valor da propriedade "),i(5678,"code"),e(5679,"id"),t(),e(5680,"."),t()()()(),o(5681,"br"),t(),i(5682,"po-accordion-item",175)(5683,"h4",9)(5684,"code"),e(5685,"ThfGridEditProperties"),t()(),i(5686,"div",10)(5687,"p"),e(5688,"Interface para configura\xE7\xE3o da edi\xE7\xE3o em linha ("),i(5689,"strong"),e(5690,"t-edit-properties"),t(),e(5691,")."),t()(),i(5692,"h4",15),e(5693,"Propriedades"),t(),i(5694,"table",16)(5695,"tr",17)(5696,"th",18),e(5697,"Nome"),t(),i(5698,"th",18),e(5699,"Tipo"),t(),i(5700,"th",18),e(5701,"Descri\xE7\xE3o"),t()(),i(5702,"tr",19)(5703,"td",20)(5704,"div",21)(5705,"span",22),e(5706," actionEdit"),o(5707,"br"),t()()(),i(5708,"td",23)(5709,"code",176),e(5710,"(param: any) => FormGroup"),t()(),i(5711,"td",26)(5712,"p"),e(5713,`M\xE9todo executado ao iniciar o modo edi\xE7\xE3o.
\xC9 passado um par\xE2metro com os valores respectivos de cada coluna.
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(5714,"code"),e(5715,"property"),t(),e(5716," da coluna desejada."),t(),i(5717,"p"),e(5718,"Exemplo de envio para a API:"),t(),i(5719,"pre")(5720,"code",28),e(5721,`<thf-grid
  t-service-api="https://po-sample-api.onrender.com/v1/people"
  [t-columns]="columns"
  [t-edit-properties]="editProperties"
>
</thf-grid>
`),t()(),i(5722,"pre")(5723,"code",31),e(5724,`form: FormGroup;
editProperties: ThfGridEditProperties;

ngOnInit() {
  this.editProperties = {
    actionEdit: this.setFormGroup.bind(this),
    validate: this.changeValueForm.bind(this) // PROPRIEDADE OPCIONAL
  };
}

setFormGroup(dataItem) {
  const genreDescription = this.columns1.find(column => column.property === 'genreDescription');
  genreDescription.editProperties.disabled = true;
  genreDescription.editProperties.options = this.appService.getCity(dataItem.genre);
  this.form = new FormGroup({
    id: new FormControl(dataItem.id, [Validators.required]) // ID \xC9 OBRIGAT\xD3RIO,
    city: new FormControl(dataItem.city),
    email: new FormControl(dataItem.email),
    birthdate: new FormControl(dataItem.birthdate),
    genre: new FormControl(dataItem.genre),
    status: new FormControl(dataItem.status),
    genreDescription: new FormControl(dataItem.genreDescription, [Validators.required])
  });
  return this.form;
};
`),t()()()(),i(5725,"tr",19)(5726,"td",20)(5727,"div",21)(5728,"span",22),e(5729," validate"),o(5730,"br"),t()()(),i(5731,"td",23)(5732,"code",177),e(5733,"(data: any, columnProperty: string) => FormGroup"),t()(),i(5734,"td",26)(5735,"em")(5736,"strong"),e(5737,"(opcional)"),t()(),i(5738,"p"),e(5739,`M\xE9todo executado ao alterar o valor de algum campo do formul\xE1rio.
O primeiro par\xE2metro s\xE3o os valores respectivos de cada coluna.
O segundo par\xE2metro \xE9 indicando a `),i(5740,"code"),e(5741,"property"),t(),e(5742,` da coluna que teve o valor alterado
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(5743,"code"),e(5744,"property"),t(),e(5745," da coluna desejada."),t()()()()(),i(5746,"po-accordion-item",178)(5747,"h4",9)(5748,"code"),e(5749,"ThfFilterByColumn"),t()(),i(5750,"div",10)(5751,"p"),e(5752,"Interface que define as condi\xE7\xF5es utilizadas no filtro por coluna."),t(),i(5753,"p"),e(5754,"Cada filtro pode conter "),i(5755,"strong"),e(5756,"at\xE9 duas condi\xE7\xF5es"),t(),e(5757,", combinadas pela l\xF3gica "),i(5758,"code"),e(5759,"and"),t(),e(5760," ou "),i(5761,"code"),e(5762,"or"),t(),e(5763,"."),t(),i(5764,"p"),e(5765,"Os operadores dispon\xEDveis e o tipo de valor aceito variam conforme o "),i(5766,"code"),e(5767,"type"),t(),e(5768,`
configurado na coluna (string, number, currency, date, time ou boolean).`),t(),i(5769,"p"),e(5770,"Para a lista completa de operadores permitidos por tipo, consulte as propriedades "),i(5771,"code"),e(5772,"operator1"),t(),e(5773," e "),i(5774,"code"),e(5775,"operator2"),t(),e(5776,"."),t()(),i(5777,"h4",15),e(5778,"Propriedades"),t(),i(5779,"table",16)(5780,"tr",17)(5781,"th",18),e(5782,"Nome"),t(),i(5783,"th",18),e(5784,"Tipo"),t(),i(5785,"th",18),e(5786,"Descri\xE7\xE3o"),t()(),i(5787,"tr",19)(5788,"td",20)(5789,"div",21)(5790,"span",22),e(5791," logic"),o(5792,"br"),t()()(),i(5793,"td",23)(5794,"code",38),e(5795,"string"),t()(),i(5796,"td",26)(5797,"em")(5798,"strong"),e(5799,"(opcional)"),t()(),i(5800,"p"),e(5801,"L\xF3gica entre as duas condi\xE7\xF5es do filtro."),t(),i(5802,"p"),e(5803,"Valores v\xE1lidos: "),i(5804,"code"),e(5805,"and"),t(),e(5806," | "),i(5807,"code"),e(5808,"or"),t(),e(5809,"."),t(),i(5810,"p"),e(5811,"Para filtros do tipo "),i(5812,"code"),e(5813,"boolean"),t(),e(5814,", a l\xF3gica ainda pode ser usada:"),t(),i(5815,"ul")(5816,"li")(5817,"code"),e(5818,"and"),t(),e(5819,": exige que ambos os checkboxes marcados sejam verdadeiros no item"),t(),i(5820,"li")(5821,"code"),e(5822,"or"),t(),e(5823,": aceita qualquer item que corresponda a um dos valores marcados"),t()()()(),i(5824,"tr",19)(5825,"td",20)(5826,"div",21)(5827,"span",22),e(5828," operator1"),o(5829,"br"),t()()(),i(5830,"td",23)(5831,"code",38),e(5832,"string"),t()(),i(5833,"td",26)(5834,"em")(5835,"strong"),e(5836,"(opcional)"),t()(),i(5837,"p"),e(5838,"Operador da primeira condi\xE7\xE3o do filtro."),t(),i(5839,"p"),e(5840,"Operadores dispon\xEDveis, dependendo do tipo da coluna:"),t(),i(5841,"p")(5842,"strong"),e(5843,"Para colunas do tipo "),i(5844,"code"),e(5845,"string"),t(),e(5846,":"),t()(),i(5847,"ul")(5848,"li")(5849,"code"),e(5850,"contains"),t(),e(5851," \u2014 cont\xE9m."),t(),i(5852,"li")(5853,"code"),e(5854,"doesnotcontain"),t(),e(5855," \u2014 n\xE3o cont\xE9m."),t(),i(5856,"li")(5857,"code"),e(5858,"eq"),t(),e(5859," \u2014 igual."),t(),i(5860,"li")(5861,"code"),e(5862,"neq"),t(),e(5863," \u2014 diferente."),t(),i(5864,"li")(5865,"code"),e(5866,"startswith"),t(),e(5867," \u2014 come\xE7a com."),t(),i(5868,"li")(5869,"code"),e(5870,"endswith"),t(),e(5871," \u2014 termina com."),t(),i(5872,"li")(5873,"code"),e(5874,"isnull"),t(),e(5875," \u2014 \xE9 nulo."),t(),i(5876,"li")(5877,"code"),e(5878,"isnotnull"),t(),e(5879," \u2014 n\xE3o \xE9 nulo."),t(),i(5880,"li")(5881,"code"),e(5882,"isempty"),t(),e(5883," \u2014 vazio ("),i(5884,"code"),e(5885,"''"),t(),e(5886,")."),t(),i(5887,"li")(5888,"code"),e(5889,"isnotempty"),t(),e(5890," \u2014 n\xE3o vazio."),t()(),i(5891,"p")(5892,"strong"),e(5893,"Para colunas "),i(5894,"code"),e(5895,"number"),t(),e(5896,", "),i(5897,"code"),e(5898,"currency"),t(),e(5899,", "),i(5900,"code"),e(5901,"date"),t(),e(5902," e "),i(5903,"code"),e(5904,"time"),t(),e(5905,":"),t()(),i(5906,"ul")(5907,"li")(5908,"code"),e(5909,"eq"),t(),e(5910," \u2014 igual."),t(),i(5911,"li")(5912,"code"),e(5913,"neq"),t(),e(5914," \u2014 diferente."),t(),i(5915,"li")(5916,"code"),e(5917,"gte"),t(),e(5918," \u2014 maior ou igual."),t(),i(5919,"li")(5920,"code"),e(5921,"gt"),t(),e(5922," \u2014 maior que."),t(),i(5923,"li")(5924,"code"),e(5925,"lte"),t(),e(5926," \u2014 menor ou igual."),t(),i(5927,"li")(5928,"code"),e(5929,"lt"),t(),e(5930," \u2014 menor que."),t(),i(5931,"li")(5932,"code"),e(5933,"isnull"),t(),e(5934," \u2014 nulo."),t(),i(5935,"li")(5936,"code"),e(5937,"isnotnull"),t(),e(5938," \u2014 n\xE3o nulo."),t()(),i(5939,"p")(5940,"strong"),e(5941,"Para colunas do tipo "),i(5942,"code"),e(5943,"boolean"),t(),e(5944,", esta propriedade \xE9 ignorada."),t()()()(),i(5945,"tr",19)(5946,"td",20)(5947,"div",21)(5948,"span",22),e(5949," operator2"),o(5950,"br"),t()()(),i(5951,"td",23)(5952,"code",38),e(5953,"string"),t()(),i(5954,"td",26)(5955,"em")(5956,"strong"),e(5957,"(opcional)"),t()(),i(5958,"p"),e(5959,"Operador da segunda condi\xE7\xE3o do filtro."),t(),i(5960,"p"),e(5961,"Funciona exatamente como "),i(5962,"code"),e(5963,"operator1"),t(),e(5964,`, respeitando os operadores v\xE1lidos para o tipo
da coluna.`),t(),i(5965,"p"),e(5966,"Ignorado para filtros do tipo "),i(5967,"code"),e(5968,"boolean"),t(),e(5969,"."),t()()(),i(5970,"tr",19)(5971,"td",20)(5972,"div",21)(5973,"span",22),e(5974," property"),o(5975,"br"),t()()(),i(5976,"td",23)(5977,"code",38),e(5978,"string"),t()(),i(5979,"td",26)(5980,"p"),e(5981,"Nome da propriedade da coluna que ter\xE1 o filtro aplicado."),t()()(),i(5982,"tr",19)(5983,"td",20)(5984,"div",21)(5985,"span",22),e(5986," value1"),o(5987,"br"),t()()(),i(5988,"td",23)(5989,"code",179),e(5990,"any"),t()(),i(5991,"td",26)(5992,"p"),e(5993,"Valor comparado na primeira condi\xE7\xE3o do filtro."),t(),i(5994,"ul")(5995,"li"),e(5996,"Para "),i(5997,"code"),e(5998,"string"),t(),e(5999,", "),i(6e3,"code"),e(6001,"number"),t(),e(6002,", "),i(6003,"code"),e(6004,"currency"),t(),e(6005,", "),i(6006,"code"),e(6007,"date"),t(),e(6008," e "),i(6009,"code"),e(6010,"time"),t(),e(6011,", corresponde ao valor informado no campo."),t(),i(6012,"li"),e(6013,"Para "),i(6014,"code"),e(6015,"boolean"),t(),e(6016,", deve ser "),i(6017,"code"),e(6018,"true"),t(),e(6019," ou "),i(6020,"code"),e(6021,"false"),t(),e(6022,", representando o estado do checkbox."),t()()()(),i(6023,"tr",19)(6024,"td",20)(6025,"div",21)(6026,"span",22),e(6027," value2"),o(6028,"br"),t()()(),i(6029,"td",23)(6030,"code",179),e(6031,"any"),t()(),i(6032,"td",26)(6033,"em")(6034,"strong"),e(6035,"(opcional)"),t()(),i(6036,"p"),e(6037,"Valor comparado na segunda condi\xE7\xE3o do filtro."),t(),i(6038,"ul")(6039,"li"),e(6040,"Para "),i(6041,"code"),e(6042,"string"),t(),e(6043,", "),i(6044,"code"),e(6045,"number"),t(),e(6046,", "),i(6047,"code"),e(6048,"currency"),t(),e(6049,", "),i(6050,"code"),e(6051,"date"),t(),e(6052," e "),i(6053,"code"),e(6054,"time"),t(),e(6055,", \xE9 o valor informado na segunda entrada."),t(),i(6056,"li"),e(6057,"Para "),i(6058,"code"),e(6059,"boolean"),t(),e(6060,", \xE9 o valor associado ao segundo checkbox ("),i(6061,"code"),e(6062,"true"),t(),e(6063," ou "),i(6064,"code"),e(6065,"false"),t(),e(6066,")."),t()()()()()(),i(6067,"po-accordion-item",180)(6068,"h4",9)(6069,"code"),e(6070,"ThfGridLiterals"),t()(),i(6071,"div",10)(6072,"p"),e(6073,"Interface para customizar literais ("),i(6074,"strong"),e(6075,"t-literals"),t(),e(6076,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(6077,"h4",15),e(6078,"Propriedades"),t(),i(6079,"table",16)(6080,"tr",17)(6081,"th",18),e(6082,"Nome"),t(),i(6083,"th",18),e(6084,"Tipo"),t(),i(6085,"th",18),e(6086,"Descri\xE7\xE3o"),t()(),i(6087,"tr",19)(6088,"td",20)(6089,"div",21)(6090,"span",22),e(6091," advancedSearch"),o(6092,"br"),t()()(),i(6093,"td",23)(6094,"code",38),e(6095,"string"),t()(),i(6096,"td",26)(6097,"em")(6098,"strong"),e(6099,"(opcional)"),t()(),i(6100,"p"),e(6101,"T\xEDtulo do modal Filtros"),t()()(),i(6102,"tr",19)(6103,"td",20)(6104,"div",21)(6105,"span",22),e(6106," and"),o(6107,"br"),t()()(),i(6108,"td",23)(6109,"code",38),e(6110,"string"),t()(),i(6111,"td",26)(6112,"em")(6113,"strong"),e(6114,"(opcional)"),t()(),i(6115,"p"),e(6116,"Op\xE7\xE3o E, filtro por coluna."),t()()(),i(6117,"tr",19)(6118,"td",20)(6119,"div",21)(6120,"span",22),e(6121," averageAggregate"),o(6122,"br"),t()()(),i(6123,"td",23)(6124,"code",38),e(6125,"string"),t()(),i(6126,"td",26)(6127,"em")(6128,"strong"),e(6129,"(opcional)"),t()(),i(6130,"p"),e(6131,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(6132,"strong"),e(6133,"M\xE9dia"),t(),e(6134," (Average)"),t()()(),i(6135,"tr",19)(6136,"td",20)(6137,"div",21)(6138,"span",22),e(6139," bodyDelete"),o(6140,"br"),t()()(),i(6141,"td",23)(6142,"code",38),e(6143,"string"),t()(),i(6144,"td",26)(6145,"em")(6146,"strong"),e(6147,"(opcional)"),t()(),i(6148,"p"),e(6149,"Conte\xFAdo do modal Excluir"),t()()(),i(6150,"tr",19)(6151,"td",20)(6152,"div",21)(6153,"span",22),e(6154," bodyDeleteBatch"),o(6155,"br"),t()()(),i(6156,"td",23)(6157,"code",38),e(6158,"string"),t()(),i(6159,"td",26)(6160,"em")(6161,"strong"),e(6162,"(opcional)"),t()(),i(6163,"p"),e(6164,"Conte\xFAdo do modal Excluir configurado para excluir em lote"),t()()(),i(6165,"tr",19)(6166,"td",20)(6167,"div",21)(6168,"span",22),e(6169," cancel"),o(6170,"br"),t()()(),i(6171,"td",23)(6172,"code",38),e(6173,"string"),t()(),i(6174,"td",26)(6175,"em")(6176,"strong"),e(6177,"(opcional)"),t()(),i(6178,"p"),e(6179,"Label do bot\xE3o Cancelar"),t()()(),i(6180,"tr",19)(6181,"td",20)(6182,"div",21)(6183,"span",22),e(6184," checkFalse"),o(6185,"br"),t()()(),i(6186,"td",23)(6187,"code",38),e(6188,"string"),t()(),i(6189,"td",26)(6190,"em")(6191,"strong"),e(6192,"(opcional)"),t()(),i(6193,"p"),e(6194,"Checkbox n\xE3o, filtro por coluna."),t()()(),i(6195,"tr",19)(6196,"td",20)(6197,"div",21)(6198,"span",22),e(6199," checkTrue"),o(6200,"br"),t()()(),i(6201,"td",23)(6202,"code",38),e(6203,"string"),t()(),i(6204,"td",26)(6205,"em")(6206,"strong"),e(6207,"(opcional)"),t()(),i(6208,"p"),e(6209,"Checkbox sim, filtro por coluna."),t()()(),i(6210,"tr",19)(6211,"td",20)(6212,"div",21)(6213,"span",22),e(6214," columnsManager"),o(6215,"br"),t()()(),i(6216,"td",23)(6217,"code",38),e(6218,"string"),t()(),i(6219,"td",26)(6220,"em")(6221,"strong"),e(6222,"(opcional)"),t()(),i(6223,"p"),e(6224,"T\xEDtulo do page-slide Gerenciar Tabela"),t()()(),i(6225,"tr",19)(6226,"td",20)(6227,"div",21)(6228,"span",22),e(6229," compact"),o(6230,"br"),t()()(),i(6231,"td",23)(6232,"code",38),e(6233,"string"),t()(),i(6234,"td",26)(6235,"em")(6236,"strong"),e(6237,"(opcional)"),t()(),i(6238,"p"),e(6239,"Label do radio de densidade Compacto no Gerenciar Tabela"),t()()(),i(6240,"tr",19)(6241,"td",20)(6242,"div",21)(6243,"span",22),e(6244," confirm"),o(6245,"br"),t()()(),i(6246,"td",23)(6247,"code",38),e(6248,"string"),t()(),i(6249,"td",26)(6250,"em")(6251,"strong"),e(6252,"(opcional)"),t()(),i(6253,"p"),e(6254,"Label do bot\xE3o Confirmar"),t()()(),i(6255,"tr",19)(6256,"td",20)(6257,"div",21)(6258,"span",22),e(6259," contains"),o(6260,"br"),t()()(),i(6261,"td",23)(6262,"code",38),e(6263,"string"),t()(),i(6264,"td",26)(6265,"em")(6266,"strong"),e(6267,"(opcional)"),t()(),i(6268,"p"),e(6269,"Op\xE7\xE3o cont\xE9m, filtro por coluna."),t()()(),i(6270,"tr",19)(6271,"td",20)(6272,"div",21)(6273,"span",22),e(6274," countAggregate"),o(6275,"br"),t()()(),i(6276,"td",23)(6277,"code",38),e(6278,"string"),t()(),i(6279,"td",26)(6280,"em")(6281,"strong"),e(6282,"(opcional)"),t()(),i(6283,"p"),e(6284,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(6285,"strong"),e(6286,"Contagem"),t(),e(6287," (Count)"),t()()(),i(6288,"tr",19)(6289,"td",20)(6290,"div",21)(6291,"span",22),e(6292," default"),o(6293,"br"),t()()(),i(6294,"td",23)(6295,"code",38),e(6296,"string"),t()(),i(6297,"td",26)(6298,"em")(6299,"strong"),e(6300,"(opcional)"),t()(),i(6301,"p"),e(6302,"Label do radio de densidade Espa\xE7oso no Gerenciar Tabela"),t()()(),i(6303,"tr",19)(6304,"td",20)(6305,"div",21)(6306,"span",22),e(6307," delete"),o(6308,"br"),t()()(),i(6309,"td",23)(6310,"code",38),e(6311,"string"),t()(),i(6312,"td",26)(6313,"em")(6314,"strong"),e(6315,"(opcional)"),t()(),i(6316,"p"),e(6317,"Label do bot\xE3o Excluir"),t()()(),i(6318,"tr",19)(6319,"td",20)(6320,"div",21)(6321,"span",22),e(6322," deleteApiError"),o(6323,"br"),t()()(),i(6324,"td",23)(6325,"code",38),e(6326,"string"),t()(),i(6327,"td",26)(6328,"em")(6329,"strong"),e(6330,"(opcional)"),t()(),i(6331,"p"),e(6332,"Resposta de erro da requisi\xE7\xE3o delete no popup"),t()()(),i(6333,"tr",19)(6334,"td",20)(6335,"div",21)(6336,"span",22),e(6337," deleteItem"),o(6338,"br"),t()()(),i(6339,"td",23)(6340,"code",38),e(6341,"string"),t()(),i(6342,"td",26)(6343,"em")(6344,"strong"),e(6345,"(opcional)"),t()(),i(6346,"p"),e(6347,"T\xEDtulo do modal Excluir"),t()()(),i(6348,"tr",19)(6349,"td",20)(6350,"div",21)(6351,"span",22),e(6352," density"),o(6353,"br"),t()()(),i(6354,"td",23)(6355,"code",38),e(6356,"string"),t()(),i(6357,"td",26)(6358,"em")(6359,"strong"),e(6360,"(opcional)"),t()(),i(6361,"p"),e(6362,'T\xEDtulo da sess\xE3o "Densidade" no Gerenciar Tabela'),t()()(),i(6363,"tr",19)(6364,"td",20)(6365,"div",21)(6366,"span",22),e(6367," doesntContain"),o(6368,"br"),t()()(),i(6369,"td",23)(6370,"code",38),e(6371,"string"),t()(),i(6372,"td",26)(6373,"em")(6374,"strong"),e(6375,"(opcional)"),t()(),i(6376,"p"),e(6377,"Op\xE7\xE3o n\xE3o cont\xE9m, filtro por coluna."),t()()(),i(6378,"tr",19)(6379,"td",20)(6380,"div",21)(6381,"span",22),e(6382," draggable"),o(6383,"br"),t()()(),i(6384,"td",23)(6385,"code",38),e(6386,"string"),t()(),i(6387,"td",26)(6388,"em")(6389,"strong"),e(6390,"(opcional)"),t()(),i(6391,"p"),e(6392,'Label da op\xE7\xE3o "Draggable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(6393,"tr",19)(6394,"td",20)(6395,"div",21)(6396,"span",22),e(6397," edit"),o(6398,"br"),t()()(),i(6399,"td",23)(6400,"code",38),e(6401,"string"),t()(),i(6402,"td",26)(6403,"em")(6404,"strong"),e(6405,"(opcional)"),t()(),i(6406,"p"),e(6407,"Label do bot\xE3o Editar"),t()()(),i(6408,"tr",19)(6409,"td",20)(6410,"div",21)(6411,"span",22),e(6412," editRow"),o(6413,"br"),t()()(),i(6414,"td",23)(6415,"code",38),e(6416,"string"),t()(),i(6417,"td",26)(6418,"em")(6419,"strong"),e(6420,"(opcional)"),t()(),i(6421,"p"),e(6422,"T\xEDtulo das a\xE7\xF5es quando Edi\xE7\xE3o em linha."),t()()(),i(6423,"tr",19)(6424,"td",20)(6425,"div",21)(6426,"span",22),e(6427," endsWith"),o(6428,"br"),t()()(),i(6429,"td",23)(6430,"code",38),e(6431,"string"),t()(),i(6432,"td",26)(6433,"em")(6434,"strong"),e(6435,"(opcional)"),t()(),i(6436,"p"),e(6437,"Op\xE7\xE3o Termina com, filtro por coluna."),t()()(),i(6438,"tr",19)(6439,"td",20)(6440,"div",21)(6441,"span",22),e(6442," export"),o(6443,"br"),t()()(),i(6444,"td",23)(6445,"code",38),e(6446,"string"),t()(),i(6447,"td",26)(6448,"em")(6449,"strong"),e(6450,"(opcional)"),t()(),i(6451,"p"),e(6452,"Label do bot\xE3o Exportar"),t()()(),i(6453,"tr",19)(6454,"td",20)(6455,"div",21)(6456,"span",22),e(6457," exportExcel"),o(6458,"br"),t()()(),i(6459,"td",23)(6460,"code",38),e(6461,"string"),t()(),i(6462,"td",26)(6463,"em")(6464,"strong"),e(6465,"(opcional)"),t()(),i(6466,"p"),e(6467,"Label do bot\xE3o Exportar Excel"),t()()(),i(6468,"tr",19)(6469,"td",20)(6470,"div",21)(6471,"span",22),e(6472," exportPDF"),o(6473,"br"),t()()(),i(6474,"td",23)(6475,"code",38),e(6476,"string"),t()(),i(6477,"td",26)(6478,"em")(6479,"strong"),e(6480,"(opcional)"),t()(),i(6481,"p"),e(6482,"Label do bot\xE3o Exportar PDF"),t()()(),i(6483,"tr",19)(6484,"td",20)(6485,"div",21)(6486,"span",22),e(6487," extraCompact"),o(6488,"br"),t()()(),i(6489,"td",23)(6490,"code",38),e(6491,"string"),t()(),i(6492,"td",26)(6493,"em")(6494,"strong"),e(6495,"(opcional)"),t()(),i(6496,"p"),e(6497,"Label do radio de densidade Extra Compacto no Gerenciar Tabela"),t()()(),i(6498,"tr",19)(6499,"td",20)(6500,"div",21)(6501,"span",22),e(6502," filterButton"),o(6503,"br"),t()()(),i(6504,"td",23)(6505,"code",38),e(6506,"string"),t()(),i(6507,"td",26)(6508,"em")(6509,"strong"),e(6510,"(opcional)"),t()(),i(6511,"p"),e(6512,"Bot\xE3o de filtrar por coluna."),t()()(),i(6513,"tr",19)(6514,"td",20)(6515,"div",21)(6516,"span",22),e(6517," filterByColumn"),o(6518,"br"),t()()(),i(6519,"td",23)(6520,"code",38),e(6521,"string"),t()(),i(6522,"td",26)(6523,"em")(6524,"strong"),e(6525,"(opcional)"),t()(),i(6526,"p"),e(6527,"Filtros, filtro por coluna."),t()()(),i(6528,"tr",19)(6529,"td",20)(6530,"div",21)(6531,"span",22),e(6532," filters"),o(6533,"br"),t()()(),i(6534,"td",23)(6535,"code",38),e(6536,"string"),t()(),i(6537,"td",26)(6538,"em")(6539,"strong"),e(6540,"(opcional)"),t()(),i(6541,"p"),e(6542,"Label do bot\xE3o Filtros"),t()()(),i(6543,"tr",19)(6544,"td",20)(6545,"div",21)(6546,"span",22),e(6547," fixed"),o(6548,"br"),t()()(),i(6549,"td",23)(6550,"code",38),e(6551,"string"),t()(),i(6552,"td",26)(6553,"em")(6554,"strong"),e(6555,"(opcional)"),t()(),i(6556,"p"),e(6557,'T\xEDtulo da sess\xE3o "Fixo" no Gerenciar Tabela'),t()()(),i(6558,"tr",19)(6559,"td",20)(6560,"div",21)(6561,"span",22),e(6562," gridRowActionsConfirmAddCancelButton"),o(6563,"br"),t()()(),i(6564,"td",23)(6565,"code",38),e(6566,"string"),t()(),i(6567,"td",26)(6568,"em")(6569,"strong"),e(6570,"(opcional)"),t()(),i(6571,"p"),e(6572,'Label do bot\xE3o "Cancelar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6573,"tr",19)(6574,"td",20)(6575,"div",21)(6576,"span",22),e(6577," gridRowActionsConfirmAddConfirmButton"),o(6578,"br"),t()()(),i(6579,"td",23)(6580,"code",38),e(6581,"string"),t()(),i(6582,"td",26)(6583,"em")(6584,"strong"),e(6585,"(opcional)"),t()(),i(6586,"p"),e(6587,'Label do bot\xE3o "Confirmar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6588,"tr",19)(6589,"td",20)(6590,"div",21)(6591,"span",22),e(6592," gridRowActionsConfirmAddTitle"),o(6593,"br"),t()()(),i(6594,"td",23)(6595,"code",38),e(6596,"string"),t()(),i(6597,"td",26)(6598,"em")(6599,"strong"),e(6600,"(opcional)"),t()(),i(6601,"p"),e(6602,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6603,"tr",19)(6604,"td",20)(6605,"div",21)(6606,"span",22),e(6607," gridRowActionsConfirmEditTitle"),o(6608,"br"),t()()(),i(6609,"td",23)(6610,"code",38),e(6611,"string"),t()(),i(6612,"td",26)(6613,"em")(6614,"strong"),e(6615,"(opcional)"),t()(),i(6616,"p"),e(6617,'T\xEDtulo do modal "Abandonar edi\xE7\xE3o da linha".'),t()()(),i(6618,"tr",19)(6619,"td",20)(6620,"div",21)(6621,"span",22),e(6622," gridRowActionsConfirmRemoveAttention"),o(6623,"br"),t()()(),i(6624,"td",23)(6625,"code",38),e(6626,"string"),t()(),i(6627,"td",26)(6628,"em")(6629,"strong"),e(6630,"(opcional)"),t()(),i(6631,"p"),e(6632,'Texto de "Aten\xE7\xE3o:" do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6633,"tr",19)(6634,"td",20)(6635,"div",21)(6636,"span",22),e(6637," gridRowActionsConfirmRemoveConfirmButton"),o(6638,"br"),t()()(),i(6639,"td",23)(6640,"code",38),e(6641,"string"),t()(),i(6642,"td",26)(6643,"em")(6644,"strong"),e(6645,"(opcional)"),t()(),i(6646,"p"),e(6647,'Label do bot\xE3o "Excluir" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6648,"tr",19)(6649,"td",20)(6650,"div",21)(6651,"span",22),e(6652," gridRowActionsConfirmRemoveDescription"),o(6653,"br"),t()()(),i(6654,"td",23)(6655,"code",38),e(6656,"string"),t()(),i(6657,"td",26)(6658,"em")(6659,"strong"),e(6660,"(opcional)"),t()(),i(6661,"p"),e(6662,'Descri\xE7\xE3o do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6663,"tr",19)(6664,"td",20)(6665,"div",21)(6666,"span",22),e(6667," gridRowActionsConfirmRemoveTitle"),o(6668,"br"),t()()(),i(6669,"td",23)(6670,"code",38),e(6671,"string"),t()(),i(6672,"td",26)(6673,"em")(6674,"strong"),e(6675,"(opcional)"),t()(),i(6676,"p"),e(6677,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6678,"tr",19)(6679,"td",20)(6680,"div",21)(6681,"span",22),e(6682," gridRowActionsRestoreSuccessful"),o(6683,"br"),t()()(),i(6684,"td",23)(6685,"code",38),e(6686,"string"),t()(),i(6687,"td",26)(6688,"em")(6689,"strong"),e(6690,"(opcional)"),t()(),i(6691,"p"),e(6692,"Texto exibido ao restaurar um item exclu\xEDdo."),t()()(),i(6693,"tr",19)(6694,"td",20)(6695,"div",21)(6696,"span",22),e(6697," groupable"),o(6698,"br"),t()()(),i(6699,"td",23)(6700,"code",38),e(6701,"string"),t()(),i(6702,"td",26)(6703,"em")(6704,"strong"),e(6705,"(opcional)"),t()(),i(6706,"p"),e(6707,'Label da op\xE7\xE3o "Groupable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(6708,"tr",19)(6709,"td",20)(6710,"div",21)(6711,"span",22),e(6712," groupableText"),o(6713,"br"),t()()(),i(6714,"td",23)(6715,"code",38),e(6716,"string"),t()(),i(6717,"td",26)(6718,"em")(6719,"strong"),e(6720,"(opcional)"),t()(),i(6721,"p"),e(6722,"Texto do cabe\xE7alho onde se deve soltar as colunas que devem ser agrupadas."),t()()(),i(6723,"tr",19)(6724,"td",20)(6725,"div",21)(6726,"span",22),e(6727," isAfter"),o(6728,"br"),t()()(),i(6729,"td",23)(6730,"code",38),e(6731,"string"),t()(),i(6732,"td",26)(6733,"em")(6734,"strong"),e(6735,"(opcional)"),t()(),i(6736,"p"),e(6737,"Op\xE7\xE3o \xC9 posterior que, filtro por coluna."),t()()(),i(6738,"tr",19)(6739,"td",20)(6740,"div",21)(6741,"span",22),e(6742," isAfterOrEqual"),o(6743,"br"),t()()(),i(6744,"td",23)(6745,"code",38),e(6746,"string"),t()(),i(6747,"td",26)(6748,"em")(6749,"strong"),e(6750,"(opcional)"),t()(),i(6751,"p"),e(6752,"Op\xE7\xE3o \xC9 posterior ou igual a, filtro por coluna."),t()()(),i(6753,"tr",19)(6754,"td",20)(6755,"div",21)(6756,"span",22),e(6757," isBefore"),o(6758,"br"),t()()(),i(6759,"td",23)(6760,"code",38),e(6761,"string"),t()(),i(6762,"td",26)(6763,"em")(6764,"strong"),e(6765,"(opcional)"),t()(),i(6766,"p"),e(6767,"Op\xE7\xE3o \xC9 anterior que, filtro por coluna."),t()()(),i(6768,"tr",19)(6769,"td",20)(6770,"div",21)(6771,"span",22),e(6772," isBeforeOrEqual"),o(6773,"br"),t()()(),i(6774,"td",23)(6775,"code",38),e(6776,"string"),t()(),i(6777,"td",26)(6778,"em")(6779,"strong"),e(6780,"(opcional)"),t()(),i(6781,"p"),e(6782,"Op\xE7\xE3o \xC9 anterior ou igual a, filtro por coluna."),t()()(),i(6783,"tr",19)(6784,"td",20)(6785,"div",21)(6786,"span",22),e(6787," isEmpty"),o(6788,"br"),t()()(),i(6789,"td",23)(6790,"code",38),e(6791,"string"),t()(),i(6792,"td",26)(6793,"em")(6794,"strong"),e(6795,"(opcional)"),t()(),i(6796,"p"),e(6797,"Op\xE7\xE3o \xC9 vazio, filtro por coluna."),t()()(),i(6798,"tr",19)(6799,"td",20)(6800,"div",21)(6801,"span",22),e(6802," isEqual"),o(6803,"br"),t()()(),i(6804,"td",23)(6805,"code",38),e(6806,"string"),t()(),i(6807,"td",26)(6808,"em")(6809,"strong"),e(6810,"(opcional)"),t()(),i(6811,"p"),e(6812,"Op\xE7\xE3o igual a, filtro por coluna."),t()()(),i(6813,"tr",19)(6814,"td",20)(6815,"div",21)(6816,"span",22),e(6817," isGreater"),o(6818,"br"),t()()(),i(6819,"td",23)(6820,"code",38),e(6821,"string"),t()(),i(6822,"td",26)(6823,"em")(6824,"strong"),e(6825,"(opcional)"),t()(),i(6826,"p"),e(6827,"Op\xE7\xE3o \xC9 maior que, filtro por coluna."),t()()(),i(6828,"tr",19)(6829,"td",20)(6830,"div",21)(6831,"span",22),e(6832," isGreaterOrEqual"),o(6833,"br"),t()()(),i(6834,"td",23)(6835,"code",38),e(6836,"string"),t()(),i(6837,"td",26)(6838,"em")(6839,"strong"),e(6840,"(opcional)"),t()(),i(6841,"p"),e(6842,"Op\xE7\xE3o \xC9 maior ou igual a, filtro por coluna."),t()()(),i(6843,"tr",19)(6844,"td",20)(6845,"div",21)(6846,"span",22),e(6847," isLess"),o(6848,"br"),t()()(),i(6849,"td",23)(6850,"code",38),e(6851,"string"),t()(),i(6852,"td",26)(6853,"em")(6854,"strong"),e(6855,"(opcional)"),t()(),i(6856,"p"),e(6857,"Op\xE7\xE3o \xC9 menor que, filtro por coluna."),t()()(),i(6858,"tr",19)(6859,"td",20)(6860,"div",21)(6861,"span",22),e(6862," isLessOrEqual"),o(6863,"br"),t()()(),i(6864,"td",23)(6865,"code",38),e(6866,"string"),t()(),i(6867,"td",26)(6868,"em")(6869,"strong"),e(6870,"(opcional)"),t()(),i(6871,"p"),e(6872,"Op\xE7\xE3o \xC9 menor ou igual que, filtro por coluna."),t()()(),i(6873,"tr",19)(6874,"td",20)(6875,"div",21)(6876,"span",22),e(6877," isNotEmpty"),o(6878,"br"),t()()(),i(6879,"td",23)(6880,"code",38),e(6881,"string"),t()(),i(6882,"td",26)(6883,"em")(6884,"strong"),e(6885,"(opcional)"),t()(),i(6886,"p"),e(6887,"Op\xE7\xE3o N\xE3o \xE9 vazio, filtro por coluna."),t()()(),i(6888,"tr",19)(6889,"td",20)(6890,"div",21)(6891,"span",22),e(6892," isNotEqual"),o(6893,"br"),t()()(),i(6894,"td",23)(6895,"code",38),e(6896,"string"),t()(),i(6897,"td",26)(6898,"em")(6899,"strong"),e(6900,"(opcional)"),t()(),i(6901,"p"),e(6902,"Op\xE7\xE3o n\xE3o igual, filtro por coluna."),t()()(),i(6903,"tr",19)(6904,"td",20)(6905,"div",21)(6906,"span",22),e(6907," isNotNull"),o(6908,"br"),t()()(),i(6909,"td",23)(6910,"code",38),e(6911,"string"),t()(),i(6912,"td",26)(6913,"em")(6914,"strong"),e(6915,"(opcional)"),t()(),i(6916,"p"),e(6917,"Op\xE7\xE3o N\xE3o \xE9 nulo, filtro por coluna."),t()()(),i(6918,"tr",19)(6919,"td",20)(6920,"div",21)(6921,"span",22),e(6922," isNull"),o(6923,"br"),t()()(),i(6924,"td",23)(6925,"code",38),e(6926,"string"),t()(),i(6927,"td",26)(6928,"em")(6929,"strong"),e(6930,"(opcional)"),t()(),i(6931,"p"),e(6932,"Op\xE7\xE3o \xC9 nulo, filtro por coluna."),t()()(),i(6933,"tr",19)(6934,"td",20)(6935,"div",21)(6936,"span",22),e(6937," legendListOptions"),o(6938,"br"),t()()(),i(6939,"td",23)(6940,"code",38),e(6941,"string"),t()(),i(6942,"td",26)(6943,"em")(6944,"strong"),e(6945,"(opcional)"),t()(),i(6946,"p"),e(6947,'T\xEDtulo da sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(6948,"tr",19)(6949,"td",20)(6950,"div",21)(6951,"span",22),e(6952," loadMoreData"),o(6953,"br"),t()()(),i(6954,"td",23)(6955,"code",38),e(6956,"string"),t()(),i(6957,"td",26)(6958,"em")(6959,"strong"),e(6960,"(opcional)"),t()(),i(6961,"p"),e(6962,"Label do bot\xE3o Carregar mais resultados"),t()()(),i(6963,"tr",19)(6964,"td",20)(6965,"div",21)(6966,"span",22),e(6967," loadingData"),o(6968,"br"),t()()(),i(6969,"td",23)(6970,"code",38),e(6971,"string"),t()(),i(6972,"td",26)(6973,"em")(6974,"strong"),e(6975,"(opcional)"),t()(),i(6976,"p"),e(6977,"Texto do modal Carregando..."),t()()(),i(6978,"tr",19)(6979,"td",20)(6980,"div",21)(6981,"span",22),e(6982," manageTable"),o(6983,"br"),t()()(),i(6984,"td",23)(6985,"code",38),e(6986,"string"),t()(),i(6987,"td",26)(6988,"em")(6989,"strong"),e(6990,"(opcional)"),t()(),i(6991,"p"),e(6992,"Label do bot\xE3o Gerenciar Tabela"),t()()(),i(6993,"tr",19)(6994,"td",20)(6995,"div",21)(6996,"span",22),e(6997," maxAggregate"),o(6998,"br"),t()()(),i(6999,"td",23)(7e3,"code",38),e(7001,"string"),t()(),i(7002,"td",26)(7003,"em")(7004,"strong"),e(7005,"(opcional)"),t()(),i(7006,"p"),e(7007,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(7008,"strong"),e(7009,"M\xE1ximo"),t(),e(7010," (Max)"),t()()(),i(7011,"tr",19)(7012,"td",20)(7013,"div",21)(7014,"span",22),e(7015," minAggregate"),o(7016,"br"),t()()(),i(7017,"td",23)(7018,"code",38),e(7019,"string"),t()(),i(7020,"td",26)(7021,"em")(7022,"strong"),e(7023,"(opcional)"),t()(),i(7024,"p"),e(7025,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(7026,"strong"),e(7027,"M\xEDnimo"),t(),e(7028," (Min)"),t()()(),i(7029,"tr",19)(7030,"td",20)(7031,"div",21)(7032,"span",22),e(7033," moreActions"),o(7034,"br"),t()()(),i(7035,"td",23)(7036,"code",38),e(7037,"string"),t()(),i(7038,"td",26)(7039,"em")(7040,"strong"),e(7041,"(opcional)"),t()(),i(7042,"p"),e(7043,"Label do bot\xE3o Mais a\xE7\xF5es"),t()()(),i(7044,"tr",19)(7045,"td",20)(7046,"div",21)(7047,"span",22),e(7048," multipleItems"),o(7049,"br"),t()()(),i(7050,"td",23)(7051,"code",38),e(7052,"string"),t()(),i(7053,"td",26)(7054,"em")(7055,"strong"),e(7056,"(opcional)"),t()(),i(7057,"p"),e(7058,"Texto auxiliar ao selecionar muitos itens exibido nas a\xE7\xF5es em lote."),t()()(),i(7059,"tr",19)(7060,"td",20)(7061,"div",21)(7062,"span",22),e(7063," noColumns"),o(7064,"br"),t()()(),i(7065,"td",23)(7066,"code",38),e(7067,"string"),t()(),i(7068,"td",26)(7069,"em")(7070,"strong"),e(7071,"(opcional)"),t()(),i(7072,"p"),e(7073,"Mensagem exibida quando n\xE3o existem colunas definidas."),t()()(),i(7074,"tr",19)(7075,"td",20)(7076,"div",21)(7077,"span",22),e(7078," noData"),o(7079,"br"),t()()(),i(7080,"td",23)(7081,"code",38),e(7082,"string"),t()(),i(7083,"td",26)(7084,"em")(7085,"strong"),e(7086,"(opcional)"),t()(),i(7087,"p"),e(7088,"Mensagem exibida quando n\xE3o existem itens para serem exibidos."),t()()(),i(7089,"tr",19)(7090,"td",20)(7091,"div",21)(7092,"span",22),e(7093," noDataDescriptionRowStateFilterActive"),o(7094,"br"),t()()(),i(7095,"td",23)(7096,"code",38),e(7097,"string"),t()(),i(7098,"td",26)(7099,"em")(7100,"strong"),e(7101,"(opcional)"),t()(),i(7102,"p"),e(7103,"Descri\xE7\xE3o exibida quando n\xE3o existem itens ativos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(7104,"tr",19)(7105,"td",20)(7106,"div",21)(7107,"span",22),e(7108," noDataDescriptionRowStateFilterRemoved"),o(7109,"br"),t()()(),i(7110,"td",23)(7111,"code",38),e(7112,"string"),t()(),i(7113,"td",26)(7114,"em")(7115,"strong"),e(7116,"(opcional)"),t()(),i(7117,"p"),e(7118,"Descri\xE7\xE3o exibida quando n\xE3o existem itens exclu\xEDdos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(7119,"tr",19)(7120,"td",20)(7121,"div",21)(7122,"span",22),e(7123," noDataRowStateFilterActive"),o(7124,"br"),t()()(),i(7125,"td",23)(7126,"code",38),e(7127,"string"),t()(),i(7128,"td",26)(7129,"em")(7130,"strong"),e(7131,"(opcional)"),t()(),i(7132,"p"),e(7133,"Mensagem exibida quando n\xE3o existem itens ativos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(7134,"tr",19)(7135,"td",20)(7136,"div",21)(7137,"span",22),e(7138," noDataRowStateFilterRemoved"),o(7139,"br"),t()()(),i(7140,"td",23)(7141,"code",38),e(7142,"string"),t()(),i(7143,"td",26)(7144,"em")(7145,"strong"),e(7146,"(opcional)"),t()(),i(7147,"p"),e(7148,"Mensagem exibida quando n\xE3o existem itens exclu\xEDdos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(7149,"tr",19)(7150,"td",20)(7151,"div",21)(7152,"span",22),e(7153," noItem"),o(7154,"br"),t()()(),i(7155,"td",23)(7156,"code",38),e(7157,"string"),t()(),i(7158,"td",26)(7159,"em")(7160,"strong"),e(7161,"(opcional)"),t()(),i(7162,"p"),e(7163,"Mensagem exibida quando nenhum item est\xE1 selecionado."),t()()(),i(7164,"tr",19)(7165,"td",20)(7166,"div",21)(7167,"span",22),e(7168," noneAggregate"),o(7169,"br"),t()()(),i(7170,"td",23)(7171,"code",38),e(7172,"string"),t()(),i(7173,"td",26)(7174,"em")(7175,"strong"),e(7176,"(opcional)"),t()(),i(7177,"p"),e(7178,"Texto quando "),i(7179,"strong"),e(7180,"nenhuma"),t(),e(7181," opera\xE7\xE3o de agrega\xE7\xE3o estiver selecionada (None)"),t()()(),i(7182,"tr",19)(7183,"td",20)(7184,"div",21)(7185,"span",22),e(7186," oneItem"),o(7187,"br"),t()()(),i(7188,"td",23)(7189,"code",38),e(7190,"string"),t()(),i(7191,"td",26)(7192,"em")(7193,"strong"),e(7194,"(opcional)"),t()(),i(7195,"p"),e(7196,"Texto ao selecionar um \xFAnico item exibido nas a\xE7\xF5es em lote."),t()()(),i(7197,"tr",19)(7198,"td",20)(7199,"div",21)(7200,"span",22),e(7201," onlyRequiredFields"),o(7202,"br"),t()()(),i(7203,"td",23)(7204,"code",38),e(7205,"string"),t()(),i(7206,"td",26)(7207,"em")(7208,"strong"),e(7209,"(opcional)"),t()(),i(7210,"p"),e(7211,'Label do toggle "Apenas campos obrigat\xF3rios" na edi\xE7\xE3o flu\xEDda.'),t()()(),i(7212,"tr",19)(7213,"td",20)(7214,"div",21)(7215,"span",22),e(7216," or"),o(7217,"br"),t()()(),i(7218,"td",23)(7219,"code",38),e(7220,"string"),t()(),i(7221,"td",26)(7222,"em")(7223,"strong"),e(7224,"(opcional)"),t()(),i(7225,"p"),e(7226,"Op\xE7\xE3o OU, filtro por coluna."),t()()(),i(7227,"tr",19)(7228,"td",20)(7229,"div",21)(7230,"span",22),e(7231," orderAsc"),o(7232,"br"),t()()(),i(7233,"td",23)(7234,"code",38),e(7235,"string"),t()(),i(7236,"td",26)(7237,"em")(7238,"strong"),e(7239,"(opcional)"),t()(),i(7240,"p"),e(7241,"Ordenar ascendente, filtro por coluna."),t()()(),i(7242,"tr",19)(7243,"td",20)(7244,"div",21)(7245,"span",22),e(7246," orderDesc"),o(7247,"br"),t()()(),i(7248,"td",23)(7249,"code",38),e(7250,"string"),t()(),i(7251,"td",26)(7252,"em")(7253,"strong"),e(7254,"(opcional)"),t()(),i(7255,"p"),e(7256,"Ordenar descendente, filtro por coluna."),t()()(),i(7257,"tr",19)(7258,"td",20)(7259,"div",21)(7260,"span",22),e(7261," otherColumns"),o(7262,"br"),t()()(),i(7263,"td",23)(7264,"code",38),e(7265,"string"),t()(),i(7266,"td",26)(7267,"em")(7268,"strong"),e(7269,"(opcional)"),t()(),i(7270,"p"),e(7271,'T\xEDtulo da sess\xE3o "Outras colunas" no Gerenciar Tabela'),t()()(),i(7272,"tr",19)(7273,"td",20)(7274,"div",21)(7275,"span",22),e(7276," placeholderSearchInput"),o(7277,"br"),t()()(),i(7278,"td",23)(7279,"code",38),e(7280,"string"),t()(),i(7281,"td",26)(7282,"em")(7283,"strong"),e(7284,"(opcional)"),t()(),i(7285,"p"),e(7286,"Placeholder do campo Buscar na tabela"),t()()(),i(7287,"tr",19)(7288,"td",20)(7289,"div",21)(7290,"span",22),e(7291," remove"),o(7292,"br"),t()()(),i(7293,"td",23)(7294,"code",38),e(7295,"string"),t()(),i(7296,"td",26)(7297,"em")(7298,"strong"),e(7299,"(opcional)"),t()(),i(7300,"p"),e(7301,'R\xF3tulo do bot\xE3o "Limpar" exibido no painel de filtro por coluna enquanto o usu\xE1rio preenche os crit\xE9rios do filtro.'),t()()(),i(7302,"tr",19)(7303,"td",20)(7304,"div",21)(7305,"span",22),e(7306," removeFilter"),o(7307,"br"),t()()(),i(7308,"td",23)(7309,"code",38),e(7310,"string"),t()(),i(7311,"td",26)(7312,"em")(7313,"strong"),e(7314,"(opcional)"),t()(),i(7315,"p"),e(7316,'R\xF3tulo do bot\xE3o "Limpar" exibido no pop-up do filtro por coluna.'),t()()(),i(7317,"tr",19)(7318,"td",20)(7319,"div",21)(7320,"span",22),e(7321," requiredFieldsToasterDisableActionLabel"),o(7322,"br"),t()()(),i(7323,"td",23)(7324,"code",38),e(7325,"string"),t()(),i(7326,"td",26)(7327,"em")(7328,"strong"),e(7329,"(opcional)"),t()(),i(7330,"p"),e(7331,"Label da a\xE7\xE3o exibida no Toaster para desativar a visualiza\xE7\xE3o de campos obrigat\xF3rios"),t()()(),i(7332,"tr",19)(7333,"td",20)(7334,"div",21)(7335,"span",22),e(7336," requiredFieldsToasterEnableActionLabel"),o(7337,"br"),t()()(),i(7338,"td",23)(7339,"code",38),e(7340,"string"),t()(),i(7341,"td",26)(7342,"em")(7343,"strong"),e(7344,"(opcional)"),t()(),i(7345,"p"),e(7346,"Label da a\xE7\xE3o exibida no Toaster para ativar a visualiza\xE7\xE3o de campos obrigat\xF3rios"),t()()(),i(7347,"tr",19)(7348,"td",20)(7349,"div",21)(7350,"span",22),e(7351," requiredFieldsToasterMessage"),o(7352,"br"),t()()(),i(7353,"td",23)(7354,"code",38),e(7355,"string"),t()(),i(7356,"td",26)(7357,"em")(7358,"strong"),e(7359,"(opcional)"),t()(),i(7360,"p"),e(7361,"Texto exibido no Toaster quando campos obrigat\xF3rios n\xE3o s\xE3o preenchidos"),t()()(),i(7362,"tr",19)(7363,"td",20)(7364,"div",21)(7365,"span",22),e(7366," requiredFieldsToasterSupportMessage"),o(7367,"br"),t()()(),i(7368,"td",23)(7369,"code",38),e(7370,"string"),t()(),i(7371,"td",26)(7372,"em")(7373,"strong"),e(7374,"(opcional)"),t()(),i(7375,"p"),e(7376,"Mensagem de suporte exibida no Toaster quando campos obrigat\xF3rios n\xE3o s\xE3o preenchidos"),t()()(),i(7377,"tr",19)(7378,"td",20)(7379,"div",21)(7380,"span",22),e(7381," restoreDefault"),o(7382,"br"),t()()(),i(7383,"td",23)(7384,"code",38),e(7385,"string"),t()(),i(7386,"td",26)(7387,"em")(7388,"strong"),e(7389,"(opcional)"),t()(),i(7390,"p"),e(7391,'Label do bot\xE3o "Restaurar padr\xE3o" no Gerenciar Tabela'),t()()(),i(7392,"tr",19)(7393,"td",20)(7394,"div",21)(7395,"span",22),e(7396," resultsByPage"),o(7397,"br"),t()()(),i(7398,"td",23)(7399,"code",38),e(7400,"string"),t()(),i(7401,"td",26)(7402,"em")(7403,"strong"),e(7404,"(opcional)"),t()(),i(7405,"p"),e(7406,'Label "Resultados por p\xE1gina" no Gerenciar Tabela.'),t()()(),i(7407,"tr",19)(7408,"td",20)(7409,"div",21)(7410,"span",22),e(7411," rowStateFilterActive"),o(7412,"br"),t()()(),i(7413,"td",23)(7414,"code",38),e(7415,"string"),t()(),i(7416,"td",26)(7417,"em")(7418,"strong"),e(7419,"(opcional)"),t()(),i(7420,"p"),e(7421,"Label do filtro para mostrar itens ativos"),t()()(),i(7422,"tr",19)(7423,"td",20)(7424,"div",21)(7425,"span",22),e(7426," rowStateFilterActiveLabel"),o(7427,"br"),t()()(),i(7428,"td",23)(7429,"code",38),e(7430,"string"),t()(),i(7431,"td",26)(7432,"em")(7433,"strong"),e(7434,"(opcional)"),t()(),i(7435,"p"),e(7436,"Label do filtro ap\xF3s selecionar a exibi\xE7\xE3o de itens ativos"),t()()(),i(7437,"tr",19)(7438,"td",20)(7439,"div",21)(7440,"span",22),e(7441," rowStateFilterRemoved"),o(7442,"br"),t()()(),i(7443,"td",23)(7444,"code",38),e(7445,"string"),t()(),i(7446,"td",26)(7447,"em")(7448,"strong"),e(7449,"(opcional)"),t()(),i(7450,"p"),e(7451,"Label do filtro para mostrar itens exclu\xEDdos"),t()()(),i(7452,"tr",19)(7453,"td",20)(7454,"div",21)(7455,"span",22),e(7456," rowStateFilterRemovedLabel"),o(7457,"br"),t()()(),i(7458,"td",23)(7459,"code",38),e(7460,"string"),t()(),i(7461,"td",26)(7462,"em")(7463,"strong"),e(7464,"(opcional)"),t()(),i(7465,"p"),e(7466,"Label do filtro ap\xF3s selecionar a exibi\xE7\xE3o de itens exclu\xEDdos"),t()()(),i(7467,"tr",19)(7468,"td",20)(7469,"div",21)(7470,"span",22),e(7471," save"),o(7472,"br"),t()()(),i(7473,"td",23)(7474,"code",38),e(7475,"string"),t()(),i(7476,"td",26)(7477,"em")(7478,"strong"),e(7479,"(opcional)"),t()(),i(7480,"p"),e(7481,"Label do bot\xE3o Salvar"),t()()(),i(7482,"tr",19)(7483,"td",20)(7484,"div",21)(7485,"span",22),e(7486," selectedItemsMultipleLabel"),o(7487,"br"),t()()(),i(7488,"td",23)(7489,"code",38),e(7490,"string"),t()(),i(7491,"td",26)(7492,"em")(7493,"strong"),e(7494,"(opcional)"),t()(),i(7495,"p"),e(7496,"Texto exibido ao selecionar m\xFAltiplos itens"),t()()(),i(7497,"tr",19)(7498,"td",20)(7499,"div",21)(7500,"span",22),e(7501," selectedItemsSingleLabel"),o(7502,"br"),t()()(),i(7503,"td",23)(7504,"code",38),e(7505,"string"),t()(),i(7506,"td",26)(7507,"em")(7508,"strong"),e(7509,"(opcional)"),t()(),i(7510,"p"),e(7511,"Texto exibido ao selecionar um \xFAnico item"),t()()(),i(7512,"tr",19)(7513,"td",20)(7514,"div",21)(7515,"span",22),e(7516," showOnlySelectedItemsTooltip"),o(7517,"br"),t()()(),i(7518,"td",23)(7519,"code",38),e(7520,"string"),t()(),i(7521,"td",26)(7522,"em")(7523,"strong"),e(7524,"(opcional)"),t()(),i(7525,"p"),e(7526,"Tooltip exibido ao passar o mouse sobre o switch que filtra itens selecionados"),t()()(),i(7527,"tr",19)(7528,"td",20)(7529,"div",21)(7530,"span",22),e(7531," startsWith"),o(7532,"br"),t()()(),i(7533,"td",23)(7534,"code",38),e(7535,"string"),t()(),i(7536,"td",26)(7537,"em")(7538,"strong"),e(7539,"(opcional)"),t()(),i(7540,"p"),e(7541,"Op\xE7\xE3o Inicia com, filtro por coluna."),t()()(),i(7542,"tr",19)(7543,"td",20)(7544,"div",21)(7545,"span",22),e(7546," sumAggregate"),o(7547,"br"),t()()(),i(7548,"td",23)(7549,"code",38),e(7550,"string"),t()(),i(7551,"td",26)(7552,"em")(7553,"strong"),e(7554,"(opcional)"),t()(),i(7555,"p"),e(7556,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(7557,"strong"),e(7558,"Soma"),t(),e(7559," (Sum)"),t()()(),i(7560,"tr",19)(7561,"td",20)(7562,"div",21)(7563,"span",22),e(7564," warningAbandonEditing"),o(7565,"br"),t()()(),i(7566,"td",23)(7567,"code",38),e(7568,"string"),t()(),i(7569,"td",26)(7570,"em")(7571,"strong"),e(7572,"(opcional)"),t()(),i(7573,"p"),e(7574,'Mensagem do modal "Abandonar edi\xE7\xE3o da linha".'),t()()(),i(7575,"tr",19)(7576,"td",20)(7577,"div",21)(7578,"span",22),e(7579," warningColumnsRequired"),o(7580,"br"),t()()(),i(7581,"td",23)(7582,"code",38),e(7583,"string"),t()(),i(7584,"td",26)(7585,"em")(7586,"strong"),e(7587,"(opcional)"),t()(),i(7588,"p"),e(7589,'Mensagem do modal "Exclus\xE3o dos dados inseridos".'),t()()()()(),i(7590,"po-accordion-item",181)(7591,"h4",9)(7592,"code"),e(7593,"ThfGridOptionPaging"),t()(),i(7594,"div",10)(7595,"p"),e(7596,"Interface para configura\xE7\xE3o das op\xE7\xF5es de pagina\xE7\xE3o ("),i(7597,"strong"),e(7598,"t-options-paging"),t(),e(7599,")."),t()(),i(7600,"h4",15),e(7601,"Propriedades"),t(),i(7602,"table",16)(7603,"tr",17)(7604,"th",18),e(7605,"Nome"),t(),i(7606,"th",18),e(7607,"Tipo"),t(),i(7608,"th",18),e(7609,"Descri\xE7\xE3o"),t()(),i(7610,"tr",19)(7611,"td",20)(7612,"div",21)(7613,"span",22),e(7614," label"),o(7615,"br"),t()()(),i(7616,"td",23)(7617,"code",38),e(7618,"string"),t()(),i(7619,"td",26)(7620,"p"),e(7621,"Label correspondente a quantidade de itens"),t()()(),i(7622,"tr",19)(7623,"td",20)(7624,"div",21)(7625,"span",22),e(7626," value"),o(7627,"br"),t()()(),i(7628,"td",23)(7629,"code",51),e(7630,"number"),t()(),i(7631,"td",26)(7632,"p"),e(7633,"Quantidade de itens por p\xE1gina"),t()()()()(),i(7634,"po-accordion-item",182)(7635,"h4",9)(7636,"code"),e(7637,"ThfGridOptions"),t()(),i(7638,"div",10)(7639,"p"),e(7640,"Interface para as propriedades que permitem personalizar dinamicamente o comportamento do componente."),t()(),i(7641,"h4",15),e(7642,"Propriedades"),t(),i(7643,"table",16)(7644,"tr",17)(7645,"th",18),e(7646,"Nome"),t(),i(7647,"th",18),e(7648,"Tipo"),t(),i(7649,"th",18),e(7650,"Descri\xE7\xE3o"),t()(),i(7651,"tr",19)(7652,"td",20)(7653,"div",21)(7654,"span",22),e(7655," actions"),o(7656,"br"),t()()(),i(7657,"td",23)(7658,"code",29),e(7659,"Array<ThfTableAction>"),t()(),i(7660,"td",26)(7661,"em")(7662,"strong"),e(7663,"(opcional)"),t()(),i(7664,"p"),e(7665,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar no grid atrav\xE9s de bot\xF5es."),t()()(),i(7666,"tr",19)(7667,"td",20)(7668,"div",21)(7669,"span",22),e(7670," columns"),o(7671,"br"),t()()(),i(7672,"td",23)(7673,"code",37),e(7674,"Array<ThfGridColumn>"),t()(),i(7675,"td",26)(7676,"em")(7677,"strong"),e(7678,"(opcional)"),t()(),i(7679,"p"),e(7680,`Lista das colunas usadas no grid e busca avan\xE7ada.
Caso precise alterar uma coluna que j\xE1 exista deve ser passado o atributo `),i(7681,"code"),e(7682,"property"),t(),e(7683," com o mesmo conte\xFAdo do original."),t()()(),i(7684,"tr",19)(7685,"td",20)(7686,"div",21)(7687,"span",22),e(7688," customActions"),o(7689,"br"),t()()(),i(7690,"td",23)(7691,"code",40),e(7692,"Array<PoDropdownAction>"),t()(),i(7693,"td",26)(7694,"em")(7695,"strong"),e(7696,"(opcional)"),t()(),i(7697,"p"),e(7698,"Lista de a\xE7\xF5es customizadas do grid que ser\xE3o incorporadas \xE0s a\xE7\xF5es informadas atrav\xE9s da propriedade "),i(7699,"code"),e(7700,"actions"),t(),e(7701,"."),t(),i(7702,"pre")(7703,"code",31),e(7704,`// Exemplo de uso:
[
 { label: 'Apply Discount', action: this.applyDiscount.bind(this) },
 { label: 'Details', action: this.details.bind(this) }
];
`),t()()()()()(),i(7705,"po-accordion-item",183)(7706,"h4",9)(7707,"code"),e(7708,"ThfGridRowActions"),t()(),i(7709,"div",10)(7710,"p"),e(7711,"Interface para configura\xE7\xE3o da edi\xE7\xE3o flu\xEDda ("),i(7712,"strong"),e(7713,"t-grid-row-actions"),t(),e(7714,`).
Essas a\xE7\xF5es permitem manipular o comportamento de edi\xE7\xE3o, inser\xE7\xE3o e remo\xE7\xE3o de dados no grid.`),t()(),i(7715,"h4",15),e(7716,"Propriedades"),t(),i(7717,"table",16)(7718,"tr",17)(7719,"th",18),e(7720,"Nome"),t(),i(7721,"th",18),e(7722,"Tipo"),t(),i(7723,"th",18),e(7724,"Descri\xE7\xE3o"),t()(),i(7725,"tr",19)(7726,"td",20)(7727,"div",21)(7728,"span",22),e(7729," actionEdit"),o(7730,"br"),t()()(),i(7731,"td",23)(7732,"code",184),e(7733,"(param: any, mode: 'edit' "),t(),i(7734,"code",185),e(7735," 'include') => FormGroup "),t(),i(7736,"code",186),e(7737," Observable<FormGroup>"),t()(),i(7738,"td",26)(7739,"p"),e(7740,`Fun\xE7\xE3o respons\xE1vel por iniciar o modo de edi\xE7\xE3o ou inclus\xE3o de uma linha no grid.
O m\xE9todo recebe os dados da linha selecionada ou um objeto vazio no modo de inclus\xE3o.
Deve retornar um `),i(7741,"code"),e(7742,"FormGroup"),t(),e(7743," que ser\xE1 utilizado para controlar os valores das colunas edit\xE1veis."),t(),i(7744,"pre")(7745,"code",31),e(7746,`// Exemplo de uso:

actionEdit: (param, mode) => new FormGroup({
  name: new FormControl(param.name),
  age: new FormControl(param.age)
})
`),t()(),i(7747,"p"),e(7748,"ou"),t(),i(7749,"pre")(7750,"code",31),e(7751,`actionEdit: (dataItem, mode) => {
return this.appService
 .listItems('https://po-sample-api.onrender.com/v1/heroes', { name: 'Robert Bruce Banner' })
  .pipe(
     map(items => {
       return new FormGroup({
         name: new FormControl(items.name),
         age: new FormControl(items.age)
       })
     }
   )
 }
`),t()()()(),i(7752,"tr",19)(7753,"td",20)(7754,"div",21)(7755,"span",22),e(7756," afterRemove"),o(7757,"br"),t()()(),i(7758,"td",23)(7759,"code",187),e(7760,"(row: any) => void"),t()(),i(7761,"td",26)(7762,"em")(7763,"strong"),e(7764,"(opcional)"),t()(),i(7765,"p"),e(7766,`Fun\xE7\xE3o opcional executada ap\xF3s a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(7767,"tr",19)(7768,"td",20)(7769,"div",21)(7770,"span",22),e(7771," afterSave"),o(7772,"br"),t()()(),i(7773,"td",23)(7774,"code",187),e(7775,"(row: any) => void"),t()(),i(7776,"td",26)(7777,"em")(7778,"strong"),e(7779,"(opcional)"),t()(),i(7780,"p"),e(7781,`Fun\xE7\xE3o opcional executada ap\xF3s o salvamento de uma linha editada.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a conclus\xE3o de uma edi\xE7\xE3o.`),t()()(),i(7782,"tr",19)(7783,"td",20)(7784,"div",21)(7785,"span",22),e(7786," afterUndoRemove"),o(7787,"br"),t()()(),i(7788,"td",23)(7789,"code",187),e(7790,"(row: any) => void"),t()(),i(7791,"td",26)(7792,"em")(7793,"strong"),e(7794,"(opcional)"),t()(),i(7795,"p"),e(7796,`Fun\xE7\xE3o opcional executada ap\xF3s desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s desfazer a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(7797,"tr",19)(7798,"td",20)(7799,"div",21)(7800,"span",22),e(7801," beforeInsert"),o(7802,"br"),t()()(),i(7803,"td",23)(7804,"code",188),e(7805,"(row: any) => boolean "),t(),i(7806,"code",189),e(7807," Observable<boolean>"),t()(),i(7808,"td",26)(7809,"em")(7810,"strong"),e(7811,"(opcional)"),t()(),i(7812,"p"),e(7813,`Fun\xE7\xE3o opcional executada antes de inserir uma nova linha no grid.
Pode ser usada para validar ou modificar os dados antes da inclus\xE3o.`),t()()(),i(7814,"tr",19)(7815,"td",20)(7816,"div",21)(7817,"span",22),e(7818," beforeRemove"),o(7819,"br"),t()()(),i(7820,"td",23)(7821,"code",188),e(7822,"(row: any) => boolean "),t(),i(7823,"code",189),e(7824," Observable<boolean>"),t()(),i(7825,"td",26)(7826,"em")(7827,"strong"),e(7828,"(opcional)"),t()(),i(7829,"p"),e(7830,`Fun\xE7\xE3o opcional executada antes de remover uma linha do grid.
Pode ser usada para validar ou confirmar a remo\xE7\xE3o da linha.`),t()()(),i(7831,"tr",19)(7832,"td",20)(7833,"div",21)(7834,"span",22),e(7835," beforeSave"),o(7836,"br"),t()()(),i(7837,"td",23)(7838,"code",190),e(7839,"(updatedRow: any, originalRow: any) => boolean "),t(),i(7840,"code",189),e(7841," Observable<boolean>"),t()(),i(7842,"td",26)(7843,"em")(7844,"strong"),e(7845,"(opcional)"),t()(),i(7846,"p"),e(7847,`Fun\xE7\xE3o opcional executada antes de salvar as altera\xE7\xF5es de uma linha editada.
Pode ser usada para validar ou modificar os dados antes de confirmar a edi\xE7\xE3o.`),t()()(),i(7848,"tr",19)(7849,"td",20)(7850,"div",21)(7851,"span",22),e(7852," beforeUndoRemove"),o(7853,"br"),t()()(),i(7854,"td",23)(7855,"code",188),e(7856,"(row: any) => boolean "),t(),i(7857,"code",189),e(7858," Observable<boolean>"),t()(),i(7859,"td",26)(7860,"em")(7861,"strong"),e(7862,"(opcional)"),t()(),i(7863,"p"),e(7864,`Fun\xE7\xE3o opcional executada antes de desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para validar ou confirmar o desfazer da remo\xE7\xE3o da linha.`),t()()(),i(7865,"tr",19)(7866,"td",20)(7867,"div",21)(7868,"span",22),e(7869," change"),o(7870,"br"),t()()(),i(7871,"td",23)(7872,"code",191),e(7873,"(updatedRows: Array<any>) => void"),t()(),i(7874,"td",26)(7875,"em")(7876,"strong"),e(7877,"(opcional)"),t()(),i(7878,"p"),e(7879,`Fun\xE7\xE3o opcional que retorna a lista atualizada sempre que ocorre edi\xE7\xE3o, inclus\xE3o ou remo\xE7\xE3o.
Facilita o monitoramento das mudan\xE7as feitas, permitindo que se veja rapidamente o que foi alterado no grid.
Ser\xE1 disparado apenas durante a\xE7\xF5es de edi\xE7\xE3o flu\xEDda, sem compatibilidade com outros eventos.`),t()()(),i(7880,"tr",19)(7881,"td",20)(7882,"div",21)(7883,"span",22),e(7884," hiddenGrid"),o(7885,"br"),t()()(),i(7886,"td",23)(7887,"code",24),e(7888,"boolean"),t()(),i(7889,"td",26)(7890,"em")(7891,"strong"),e(7892,"(opcional)"),t()(),i(7893,"p"),e(7894,"Propriedade opcional utilizada para determinar se a grid deve ser ocultada quando n\xE3o houver registros."),t()()(),i(7895,"tr",19)(7896,"td",20)(7897,"div",21)(7898,"span",22),e(7899," noPermission"),o(7900,"br"),t()()(),i(7901,"td",23)(7902,"code",192),e(7903,"Array<ThfGridEditModeActionType>"),t()(),i(7904,"td",26)(7905,"em")(7906,"strong"),e(7907,"(opcional)"),t()(),i(7908,"p"),e(7909,`Propriedade opcional que permite remover e desabilitar as a\xE7\xF5es no grid.
Os valores permitidos no array s\xE3o definidos pelo enum `),i(7910,"strong"),e(7911,"ThfGridEditModeActionType"),t(),e(7912,":"),t(),i(7913,"blockquote")(7914,"p"),e(7915,"Importante: ao declarar "),i(7916,"strong"),e(7917,"ThfGridEditModeActionType.Add"),t(),e(7918," em "),i(7919,"code"),e(7920,"noPermission"),t(),e(7921,`,
a a\xE7\xE3o de duplica\xE7\xE3o tamb\xE9m ficar\xE1 indispon\xEDvel.`),t()(),i(7922,"pre")(7923,"code",31),e(7924,`// Exemplo de uso:

gridRowActions: ThfGridRowActions = {
 noPermission: [
   ThfGridEditModeActionType.Replace,
   ThfGridEditModeActionType.Duplicate,
   ThfGridEditModeActionType.Add,
   ThfGridEditModeActionType.Remove] // Desabilita edi\xE7\xE3o, duplica\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o
  // outras a\xE7\xF5es...
};
`),t()()()(),i(7925,"tr",19)(7926,"td",20)(7927,"div",21)(7928,"span",22),e(7929," title"),o(7930,"br"),t()()(),i(7931,"td",23)(7932,"code",38),e(7933,"string"),t()(),i(7934,"td",26)(7935,"em")(7936,"strong"),e(7937,"(opcional)"),t()(),i(7938,"p"),e(7939,"T\xEDtulo opcional que pode ser usado para exibir um cabe\xE7alho ou descri\xE7\xE3o na interface."),t()()(),i(7940,"tr",19)(7941,"td",20)(7942,"div",21)(7943,"span",22),e(7944," validateField"),o(7945,"br"),t()()(),i(7946,"td",23)(7947,"code",193),e(7948,"(updatedField: any, columnProperty: string) => boolean "),t(),i(7949,"code",189),e(7950," Observable<boolean>"),t()(),i(7951,"td",26)(7952,"em")(7953,"strong"),e(7954,"(opcional)"),t()(),i(7955,"p"),e(7956,`Fun\xE7\xE3o opcional executada quando algum campo \xE9 alterado.
Pode ser usada para validar ou modificar dados baseados no valor alterado.`),t(),i(7957,"pre")(7958,"code",31),e(7959,`// Exemplo de uso:

onValidate(updatedField, property) {

 if(property === 'pais') {
     this.myForm?.controls['capital'].setValue(null); // valor da capital modificado para nulo
     const valuePais = this.myForm.controls[property].value;
     const capital = this.columnWithItems.find(column => column.property === 'capital');
      if (valuePais === 'Brasil') {
         capital.editProperties.disabled = false;
         this.form?.controls['capital'].setValue('Brasilia'); // Modificado o valor do campo "capital" baseado no valor do campo "pais"
      } else if (valuePais === 'Portugal') {
          capital.editProperties.disabled = false;
          this.form?.controls['capital'].setValue('Lisboa');
      } else {
        capital.editProperties.disabled = true;
        this.form?.controls['capital'].setValue('');
     }

   return true;
 }
}
`),t()()()()()()()(),T(7960,4),t(),i(7961,"po-tab",194),T(7962,5),i(7963,"po-container",5)(7964,"po-accordion",6)(7965,"po-accordion-item",195)(7966,"h4",9)(7967,"code"),e(7968,"ThfColumnSpacing"),t()(),i(7969,"h4",15),e(7970,"Propriedades"),t(),i(7971,"table",16)(7972,"tr",17)(7973,"th",18),e(7974,"Nome"),t(),i(7975,"th",18),e(7976,"Descri\xE7\xE3o"),t()(),i(7977,"tr",19)(7978,"td",20)(7979,"div",21)(7980,"span",22),e(7981," ExtraSmall"),o(7982,"br"),t()()(),i(7983,"td",26)(7984,"p"),e(7985,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(7986,"tr",19)(7987,"td",20)(7988,"div",21)(7989,"span",22),e(7990," Large"),o(7991,"br"),t()()(),i(7992,"td",26)(7993,"p"),e(7994,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()(),i(7995,"tr",19)(7996,"td",20)(7997,"div",21)(7998,"span",22),e(7999," Medium"),o(8e3,"br"),t()()(),i(8001,"td",26)(8002,"p"),e(8003,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(8004,"tr",19)(8005,"td",20)(8006,"div",21)(8007,"span",22),e(8008," Small"),o(8009,"br"),t()()(),i(8010,"td",26)(8011,"p"),e(8012,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()()()(),i(8013,"po-accordion-item",196)(8014,"h4",9)(8015,"code"),e(8016,"ThfGridEditModeActionType"),t()(),i(8017,"h4",15),e(8018,"Propriedades"),t(),i(8019,"table",16)(8020,"tr",17)(8021,"th",18),e(8022,"Nome"),t(),i(8023,"th",18),e(8024,"Descri\xE7\xE3o"),t()(),i(8025,"tr",19)(8026,"td",20)(8027,"div",21)(8028,"span",22),e(8029," Add"),o(8030,"br"),t()()(),i(8031,"td",26)(8032,"p"),e(8033,"A\xE7\xE3o de inclus\xE3o"),t()()(),i(8034,"tr",19)(8035,"td",20)(8036,"div",21)(8037,"span",22),e(8038," Duplicate"),o(8039,"br"),t()()(),i(8040,"td",26)(8041,"p"),e(8042,"A\xE7\xE3o de duplica\xE7\xE3o"),t()()(),i(8043,"tr",19)(8044,"td",20)(8045,"div",21)(8046,"span",22),e(8047," Remove"),o(8048,"br"),t()()(),i(8049,"td",26)(8050,"p"),e(8051,"A\xE7\xE3o de remo\xE7\xE3o"),t()()(),i(8052,"tr",19)(8053,"td",20)(8054,"div",21)(8055,"span",22),e(8056," Replace"),o(8057,"br"),t()()(),i(8058,"td",26)(8059,"p"),e(8060,"A\xE7\xE3o de edi\xE7\xE3o"),t()()()()()()(),T(8061,6),t(),i(8062,"po-tab",197),T(8063,7),i(8064,"po-container",5)(8065,"po-accordion",6)(8066,"po-accordion-item",198)(8067,"h4",9)(8068,"code"),e(8069,"ThfGridCellTemplateDirective"),t()(),i(8070,"div",10)(8071,"p"),e(8072,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(8073,"p"),e(8074,"Em seu uso, deve-se apenas adicionar a diretiva "),i(8075,"strong"),e(8076,"t-grid-cell-template"),t(),e(8077," \xE0 tag "),i(8078,"code"),e(8079,"ng-template"),t(),e(8080,"."),t(),i(8081,"p"),e(8082,"Retorno:"),t(),i(8083,"ul")(8084,"li")(8085,"code"),e(8086,"column"),t(),e(8087,": conte\xFAdo da coluna corrente."),t(),i(8088,"li")(8089,"code"),e(8090,"row"),t(),e(8091,": conte\xFAdo da linha corrente"),t()(),i(8092,"p"),e(8093,"Modo de uso:"),t(),i(8094,"pre")(8095,"code"),e(8096,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com"
  >
    <ng-template t-grid-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...
`),t()(),i(8097,"blockquote")(8098,"p"),e(8099,"No exemplo acima, o usu\xE1rio tem como retorno "),i(8100,"code"),e(8101,"row"),t(),e(8102," e a "),i(8103,"code"),e(8104,"column"),t(),e(8105," corrente, neste caso ele tem total liberdade para manipular os objetos."),t()(),i(8106,"p"),e(8107,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(8108,"pre")(8109,"code"),e(8110,`...
export class AppComponent {

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...
`),t()(),i(8111,"blockquote")(8112,"p"),e(8113,"Observa\xE7\xE3o: Sempre adicionar o "),i(8114,"strong"),e(8115,"type"),t(),e(8116," da coluna que deseja manipular com a directiva como "),i(8117,"code"),e(8118,"cellTemplate"),t()()()(),i(8119,"div",11)(8120,"h4",12),e(8121,"Seletor"),t(),i(8122,"pre",13),e(8123,`<[t-grid-cell-template] >
</[t-grid-cell-template]>
`),t()()(),i(8124,"po-accordion-item",199)(8125,"h4",9)(8126,"code"),e(8127,"ThfGridColumnTemplateDirective"),t()(),i(8128,"div",10)(8129,"p"),e(8130,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(8131,"p"),e(8132,"Em seu uso, deve-se utilizar como par\xE2metro de entrada o input "),i(8133,"strong"),e(8134,"[t-property]"),t(),e(8135,`, o qual \xE9 respons\xE1vel por informar ao THF-GRID qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),t(),i(8136,"p"),e(8137,"Retorno:"),t(),i(8138,"ul")(8139,"li"),e(8140,"value: valor referente ao conte\xFAdo da linha corrente."),t()(),i(8141,"p"),e(8142,"Modo de uso:"),t(),i(8143,"pre")(8144,"code",28),e(8145,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template t-grid-column-template [t-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</thf-grid>
...
`),t()(),i(8146,"blockquote")(8147,"p"),e(8148,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),i(8149,"code"),e(8150,"status"),t(),e(8151," ter\xE3o o conte\xFAdo alterado para "),i(8152,"code"),e(8153,"<h1>${value}</h1>"),t(),e(8154,`,
sendo que `),i(8155,"code"),e(8156,"value"),t(),e(8157," refere-se ao conte\xFAdo da linha."),t()(),i(8158,"pre")(8159,"code",28),e(8160,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template  t-grid-column-template [t-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</thf-grid>
...
`),t()(),i(8161,"blockquote")(8162,"p"),e(8163,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),t()(),i(8164,"p"),e(8165,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(8166,"pre")(8167,"code",31),e(8168,`...
export class AppComponent {

   targetProperty= 'status';

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...
`),t()(),i(8169,"blockquote")(8170,"p"),e(8171,"Observa\xE7\xE3o: Sempre adicionar o "),i(8172,"strong"),e(8173,"type"),t(),e(8174," da coluna que deseja manipular com a directiva como "),i(8175,"code"),e(8176,"columnTemplate"),t()()()(),i(8177,"div",11)(8178,"h4",12),e(8179,"Seletor"),t(),i(8180,"pre",13),e(8181,`<[t-grid-column-template] >
</[t-grid-column-template]>
`),t()()()()(),T(8182,8),t(),i(8183,"po-tab",200)(8184,"po-container",5),T(8185,9),i(8186,"h3"),e(8187,"Tokens customiz\xE1veis"),t(),i(8188,"p"),e(8189,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(8190,"blockquote")(8191,"p"),e(8192,"Para maiores informa\xE7\xF5es, acesse o guia "),i(8193,"a",201),e(8194,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(8195,"."),t()(),i(8196,"table")(8197,"thead")(8198,"tr")(8199,"th"),e(8200,"Propriedade"),t(),i(8201,"th"),e(8202,"Descri\xE7\xE3o"),t(),i(8203,"th"),e(8204,"Valor Padr\xE3o"),t()()(),i(8205,"tbody")(8206,"tr")(8207,"td")(8208,"strong"),e(8209,"Default Values"),t()(),o(8210,"td")(8211,"td"),t(),i(8212,"tr")(8213,"td")(8214,"code"),e(8215,"--font-family"),t()(),i(8216,"td"),e(8217,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(8218,"td")(8219,"code"),e(8220,"var(--font-family-theme)"),t()()(),i(8221,"tr")(8222,"td")(8223,"code"),e(8224,"--background-color"),t()(),i(8225,"td"),e(8226,"Cor de background"),t(),i(8227,"td")(8228,"code"),e(8229,"var(--color-neutral-light-00)"),t()()(),i(8230,"tr")(8231,"td")(8232,"code"),e(8233,"--color"),t()(),i(8234,"td"),e(8235,"Cor principal da table"),t(),i(8236,"td")(8237,"code"),e(8238,"var(--color-neutral-dark-95)"),t()()(),i(8239,"tr")(8240,"td")(8241,"code"),e(8242,"--background-striped-color"),t()(),i(8243,"td"),e(8244,"Cor do background quando striped"),t(),i(8245,"td")(8246,"code"),e(8247,"var(--color-neutral-light-05)"),t()()(),i(8248,"tr")(8249,"td")(8250,"code"),e(8251,"--color-line"),t()(),i(8252,"td"),e(8253,"Cor das linhas"),t(),i(8254,"td")(8255,"code"),e(8256,"var(--color-neutral-mid-40)"),t()()(),i(8257,"tr")(8258,"td")(8259,"code"),e(8260,"--border-color"),t()(),i(8261,"td"),e(8262,"Cor da borda"),t(),i(8263,"td")(8264,"code"),e(8265,"var(--color-neutral-light-10)"),t()()(),i(8266,"tr")(8267,"td")(8268,"code"),e(8269,"--border-radius"),t()(),i(8270,"td"),e(8271,"Raio da borda"),t(),i(8272,"td")(8273,"code"),e(8274,"var(--border-radius-lg)"),t()()(),i(8275,"tr")(8276,"td")(8277,"code"),e(8278,"--border-width"),t()(),i(8279,"td"),e(8280,"Largura da borda"),t(),i(8281,"td")(8282,"code"),e(8283,"var(--border-width-sm)"),t()()(),i(8284,"tr")(8285,"td")(8286,"code"),e(8287,"--background-color-edited"),t()(),i(8288,"td"),e(8289,"Cor de background da linha editada"),t(),i(8290,"td")(8291,"code"),e(8292,"var(--color-feedback-warning-lightest)"),t()()(),i(8293,"tr")(8294,"td")(8295,"code"),e(8296,"--border-color-edited"),t()(),i(8297,"td"),e(8298,"Cor da borda da linha editada"),t(),i(8299,"td")(8300,"code"),e(8301,"var(--color-feedback-warning-base)"),t()()(),i(8302,"tr")(8303,"td")(8304,"code"),e(8305,"--background-color-included"),t()(),i(8306,"td"),e(8307,"Cor de background da linha inclu\xEDda"),t(),i(8308,"td")(8309,"code"),e(8310,"var(--color-feedback-warning-lightest)"),t()()(),i(8311,"tr")(8312,"td")(8313,"code"),e(8314,"--border-color-included"),t()(),i(8315,"td"),e(8316,"Cor da borda da linha inclu\xEDda"),t(),i(8317,"td")(8318,"code"),e(8319,"var(--color-feedback-warning-base)"),t()()(),i(8320,"tr")(8321,"td")(8322,"code"),e(8323,"--background-color-removed"),t()(),i(8324,"td"),e(8325,"Cor de background da linha removida"),t(),i(8326,"td"),e(8327,"-"),t()(),i(8328,"tr")(8329,"td")(8330,"strong"),e(8331,"Hover"),t()(),o(8332,"td")(8333,"td"),t(),i(8334,"tr")(8335,"td")(8336,"code"),e(8337,"--color-hover"),t()(),i(8338,"td"),e(8339,"Cor principal no estado hover"),t(),i(8340,"td")(8341,"code"),e(8342,"var(--color-action-hover)"),t()()(),i(8343,"tr")(8344,"td")(8345,"code"),e(8346,"--background-color-hover"),t()(),i(8347,"td"),e(8348,"Cor de background no estado hover"),t(),i(8349,"td")(8350,"code"),e(8351,"var(--color-brand-01-lighter)"),t()()(),i(8352,"tr")(8353,"td")(8354,"strong"),e(8355,"Focused"),t()(),o(8356,"td")(8357,"td"),t(),i(8358,"tr")(8359,"td")(8360,"code"),e(8361,"--outline-color-focused"),t()(),i(8362,"td"),e(8363,"Cor do outline do estado de focus"),t(),i(8364,"td")(8365,"code"),e(8366,"var(--color-action-focus)"),t()()(),i(8367,"tr")(8368,"td")(8369,"strong"),e(8370,"Disabled"),t()(),o(8371,"td")(8372,"td"),t(),i(8373,"tr")(8374,"td")(8375,"code"),e(8376,"--color-disabled"),t()(),i(8377,"td"),e(8378,"Cor principal no estado disabled"),t(),i(8379,"td")(8380,"code"),e(8381,"var(--color-neutral-mid-40)"),t()()(),i(8382,"tr")(8383,"td")(8384,"strong"),e(8385,"Headline"),t()(),o(8386,"td")(8387,"td"),t(),i(8388,"tr")(8389,"td")(8390,"code"),e(8391,"--background-color-headline"),t()(),i(8392,"td"),e(8393,"Cor do cabe\xE7alho"),t(),i(8394,"td")(8395,"code"),e(8396,"var(--color-neutral-light-10)"),t()()(),i(8397,"tr")(8398,"td")(8399,"code"),e(8400,"--font-weight-headline"),t()(),i(8401,"td"),e(8402,"Peso da fonte do cabe\xE7alho"),t(),i(8403,"td")(8404,"code"),e(8405,"var(--font-weight-bold)"),t()()(),i(8406,"tr")(8407,"td")(8408,"strong"),e(8409,"Selected"),t()(),o(8410,"td")(8411,"td"),t(),i(8412,"tr")(8413,"td")(8414,"code"),e(8415,"--background-color-selected"),t()(),i(8416,"td"),e(8417,"Cor de background no estado de selecionado"),t(),i(8418,"td")(8419,"code"),e(8420,"var(--color-brand-01-lightest)"),t()()(),i(8421,"tr")(8422,"td")(8423,"code"),e(8424,"--color-actived"),t()(),i(8425,"td"),e(8426,"Cor do texto no estado de selecionado"),t(),i(8427,"td")(8428,"code"),e(8429,"var(--color-neutral-dark-90)"),t()()(),i(8430,"tr")(8431,"td")(8432,"strong"),e(8433,"Pressed"),t()(),o(8434,"td")(8435,"td"),t(),i(8436,"tr")(8437,"td")(8438,"code"),e(8439,"--background-color-actived"),t()(),i(8440,"td"),e(8441,"Cor de background da a\xE7\xE3o quando pressionada"),t(),i(8442,"td")(8443,"code"),e(8444,"var(--color-brand-01-light)"),t()()(),i(8445,"tr"),o(8446,"td")(8447,"td")(8448,"td"),t(),i(8449,"tr")(8450,"td")(8451,"strong"),e(8452,"Toolbar"),t()(),o(8453,"td")(8454,"td"),t(),i(8455,"tr")(8456,"td")(8457,"code"),e(8458,"--background-color-toolbar"),t()(),i(8459,"td"),e(8460,"Cor de background da toolbar"),t(),i(8461,"td")(8462,"code"),e(8463,"var(--border-color)"),t()()(),i(8464,"tr")(8465,"td")(8466,"code"),e(8467,"--border-color-toolbar"),t()(),i(8468,"td"),e(8469,"Cor da borda da toolbar"),t(),i(8470,"td")(8471,"code"),e(8472,"var(--border-width-sm)"),t()()(),i(8473,"tr"),o(8474,"td")(8475,"td")(8476,"td"),t(),i(8477,"tr")(8478,"td")(8479,"strong"),e(8480,"Toolbar Title"),t()(),o(8481,"td")(8482,"td"),t(),i(8483,"tr")(8484,"td")(8485,"code"),e(8486,"--font-family-toolbar-title"),t()(),i(8487,"td"),e(8488,"Fam\xEDlia tipogr\xE1fica do Titulo da toolbar da Grid"),t(),i(8489,"td")(8490,"code"),e(8491,"var(--font-family)"),t()()(),i(8492,"tr")(8493,"td")(8494,"code"),e(8495,"--font-size-toolbar-title"),t()(),i(8496,"td"),e(8497,"Tamanho da fonte do Titulo da toolbar da Grid"),t(),i(8498,"td")(8499,"code"),e(8500,"var(--font-size-md)"),t()()(),i(8501,"tr")(8502,"td")(8503,"code"),e(8504,"--font-weight-toolbar-title"),t()(),i(8505,"td"),e(8506,"Peso da fonte do Titulo da toolbar da Grid"),t(),i(8507,"td")(8508,"code"),e(8509,"var(--font-weight-bold)"),t()()(),i(8510,"tr")(8511,"td")(8512,"code"),e(8513,"--letter-spacing-toolbar-title"),t()(),i(8514,"td"),e(8515,"Espa\xE7amento entre letras do Titulo da toolbar da Grid"),t(),i(8516,"td"),e(8517,"0.017rem"),t()(),i(8518,"tr"),o(8519,"td")(8520,"td")(8521,"td"),t(),i(8522,"tr")(8523,"td")(8524,"strong"),e(8525,"Aggregates"),t()(),o(8526,"td")(8527,"td"),t(),i(8528,"tr")(8529,"td")(8530,"code"),e(8531,"--border-color-aggregates"),t()(),i(8532,"td"),e(8533,"Cor da borda do aggregates"),t(),i(8534,"td")(8535,"code"),e(8536,"var(--border-color)"),t()()(),i(8537,"tr")(8538,"td")(8539,"code"),e(8540,"--border-width-aggregates"),t()(),i(8541,"td"),e(8542,"Largura da borda do aggregates"),t(),i(8543,"td")(8544,"code"),e(8545,"var(--border-width-sm)"),t()()(),i(8546,"tr"),o(8547,"td")(8548,"td")(8549,"td"),t(),i(8550,"tr")(8551,"td")(8552,"strong"),e(8553,"Empty State - Body"),t()(),o(8554,"td")(8555,"td"),t(),i(8556,"tr")(8557,"td")(8558,"code"),e(8559,"--font-family-empty-state-body-subtitle"),t()(),i(8560,"td"),e(8561,"Fam\xEDlia tipogr\xE1fica do subt\xEDtulo do estado vazio"),t(),i(8562,"td")(8563,"code"),e(8564,"var(--font-family)"),t()()(),i(8565,"tr")(8566,"td")(8567,"code"),e(8568,"--font-size-empty-state-body-subtitle"),t()(),i(8569,"td"),e(8570,"Tamanho da fonte do subt\xEDtulo do estado vazio"),t(),i(8571,"td")(8572,"code"),e(8573,"var(--font-size-md)"),t()()(),i(8574,"tr")(8575,"td")(8576,"code"),e(8577,"--font-weight-empty-state-body-subtitle"),t()(),i(8578,"td"),e(8579,"Peso da fonte do subt\xEDtulo do estado vazio"),t(),i(8580,"td")(8581,"code"),e(8582,"var(--font-weight-bold)"),t()()(),i(8583,"tr")(8584,"td")(8585,"code"),e(8586,"--font-family-empty-state-body-message"),t()(),i(8587,"td"),e(8588,"Fam\xEDlia tipogr\xE1fica da mensagem do estado vazio"),t(),i(8589,"td")(8590,"code"),e(8591,"var(--font-family)"),t()()(),i(8592,"tr")(8593,"td")(8594,"code"),e(8595,"--font-size-empty-state-body-message"),t()(),i(8596,"td"),e(8597,"Tamanho da fonte da mensagem do estado vazio"),t(),i(8598,"td")(8599,"code"),e(8600,"var(--font-size-default)"),t()()(),i(8601,"tr")(8602,"td")(8603,"code"),e(8604,"--font-weight-empty-state-body-message"),t()(),i(8605,"td"),e(8606,"Peso da fonte da mensagem do estado vazio"),t(),i(8607,"td")(8608,"code"),e(8609,"var(--font-weight-normal)"),t()()()()()(),T(8610,10),t(),i(8611,"po-tab",202),T(8612,11),t()()())},dependencies:[V,$,g,ne,Q],encapsulation:2})}}return d})();var Vi=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Oi=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],Pt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let k=E.querySelector(".po-tab-button-label");k&&k?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(I(Y))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-lookup"]],viewQuery:function(r,n){if(r&1&&F(Q,5)(V,5),r&2){let l;D(l=w())&&(n.tabs=l.first),D(l=w())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Oi,decls:2786,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","Array<ThfLookupColumn>"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","boolean,","any"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","'equal'"],["pan","",1,"docs-api-property-type","'include'"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["p-label","Interfaces"],["p-label","ThfLookupColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfLookupFilterSearchSelect"],["p-label","ThfLookupFilter"],["pan","",1,"docs-api-property-type"],["p-label","ThfLookupFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","number"],["p-label","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","Array<ThfTableAction>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'extraSmall'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupKeysLabel"],["p-label","ThfLookupLiterals"],["p-label","ThfLookupResponseApi"],["p-label","Token CSS"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(X(Vi),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),T(4),t(),i(5,"po-tab",4),T(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`Componente utilizado para abrir um modal de busca com um grid que lista dados de um servi\xE7o.
Neste modal \xE9 poss\xEDvel buscar e selecionar um ou mais registros que ser\xE3o enviados para o campo.
O `),i(19,"code"),e(20,"thf-lookup"),t(),e(21," permite que o usu\xE1rio digite um valor e pressione a tecla TAB para buscar um registro."),t(),i(22,"p"),e(23,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(24,"code"),e(25,"THF-Lookup"),t(),e(26,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(27,"code"),e(28,"import { ThfLookupComponent } from '@totvs/thf-components';"),t()()(),i(29,"div",11)(30,"h4",12),e(31,"Seletor"),t(),i(32,"pre",13),e(33,`<thf-lookup
  t-additional-help="EventEmitter"
  t-additional-help-tooltip="string"
  t-append-in-body="boolean"
  t-auto-focus="boolean"
  t-auto-height="boolean"
  (t-change)="EventEmitter"
  (t-change-model)="EventEmitter"
  t-clean="boolean"
  t-columns="Array<ThfLookupColumn>"
  t-compact-label="boolean, any"
  t-size="string"
  t-custom-items="Array<any>"
  t-disabled="boolean"
  t-error-limit="boolean"
  t-field-error-message="string"
  t-field-format="Array<string> | ((item: any) => string)"
  t-field-label="string"
  t-field-value="string"
  t-filter-params="any"
  t-filter-search-select="Array<ThfLookupFilterSearchSelect>"
  t-filter-service="ThfLookupFilter | string"
  t-grid-properties="ThfLookupGridProperties"
  t-help="string"
  (t-focus)="EventEmitter"
  t-key-last-search="string"
  (t-keydown)="EventEmitter"
  t-keys-label="Array<ThfLookupKeysLabel>"
  t-label="string"
  t-label-text-wrap="boolean"
  t-literals="ThfLookupLiterals"
  t-loading="boolean"
  t-multiple="boolean"
  t-no-autocomplete="boolean"
  (t-error)="EventEmitter"
  t-optional="boolean"
  t-placeholder="string"
  t-helper="string | PoHelperOptions"
  t-readonly="boolean, any"
  t-required="boolean"
  t-search-on-enter="'equal' | 'include'"
  (t-selected)="EventEmitter"
  t-show-required="boolean"
  t-modal-size="string" >
</thf-lookup>
`),t()()(),i(34,"po-accordion-item",14)(35,"h4",15),e(36,"Propriedades"),t(),i(37,"table",16)(38,"tr",17)(39,"th",18),e(40,"Nome"),t(),i(41,"th",18),e(42,"Tipo"),t(),i(43,"th",18),e(44,"Padr\xE3o"),t(),i(45,"th",18),e(46,"Descri\xE7\xE3o"),t()(),i(47,"tr",19)(48,"td",20)(49,"div",21)(50,"span",22),e(51,"t-additional-help"),o(52,"br"),t()(),i(53,"div",23),e(54,"Deprecated"),t()(),i(55,"td",24)(56,"code",25),e(57,"EventEmitter"),t()(),i(58,"td",26),e(59,"-"),t(),i(60,"td",27)(61,"em")(62,"strong"),e(63,"(opcional)"),t()(),i(64,"p"),e(65,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(66,"blockquote")(67,"p"),e(68,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade t-helper que oferece mais recursos e flexibilidade."),t()()()(),i(69,"tr",19)(70,"td",20)(71,"div",21)(72,"span",22),e(73,"t-additional-help-tooltip"),o(74,"br"),t()(),i(75,"div",23),e(76,"Deprecated"),t()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"em")(84,"strong"),e(85,"(opcional)"),t()(),i(86,"p"),e(87,"Exibe um \xEDcone de ajuda adicional, om o texto desta propriedade sendo passado para o popover do componente "),i(88,"code"),e(89,"po-helper"),t(),e(90,`.
`),i(91,"strong"),e(92,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(93,"blockquote")(94,"p"),e(95,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(96,"blockquote")(97,"p"),e(98,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade t-helper que oferece mais recursos e flexibilidade."),t()()()(),i(99,"tr",19)(100,"td",20)(101,"div",21)(102,"span",22),e(103," t-append-in-body"),o(104,"br"),t()()(),i(105,"td",24)(106,"code",29),e(107,"boolean"),t()(),i(108,"td",26)(109,"p")(110,"code"),e(111,"false"),t()()(),i(112,"td",27)(113,"em")(114,"strong"),e(115,"(opcional)"),t()(),i(116,"p"),e(117,"Define que o "),i(118,"code"),e(119,"listbox"),t(),e(120," e/ou popover ("),i(121,"code"),e(122,"t-helper"),t(),e(123," e/ou "),i(124,"code"),e(125,"t-error-limit"),t(),e(126,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(127,"blockquote")(128,"p"),e(129,"Quando utilizado com "),i(130,"code"),e(131,"t-helper"),t(),e(132,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(133,"tr",19)(134,"td",20)(135,"div",21)(136,"span",22),e(137,"t-auto-focus"),o(138,"br"),t()()(),i(139,"td",24)(140,"code",29),e(141,"boolean"),t()(),i(142,"td",26)(143,"p")(144,"code"),e(145,"false"),t()()(),i(146,"td",27)(147,"em")(148,"strong"),e(149,"(opcional)"),t()(),i(150,"p"),e(151,"Aplica foco no elemento ao ser iniciado."),t(),i(152,"blockquote")(153,"p"),e(154,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(155,"tr",19)(156,"td",20)(157,"div",21)(158,"span",22),e(159,"t-auto-height"),o(160,"br"),t()()(),i(161,"td",24)(162,"code",29),e(163,"boolean"),t()(),i(164,"td",26)(165,"p")(166,"code"),e(167,"false"),t()()(),i(168,"td",27)(169,"em")(170,"strong"),e(171,"(opcional)"),t()(),i(172,"p"),e(173,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, com altura m\xEDnima fixa e altura m\xE1xima de acordo
com o n\xFAmero de itens selecionados, mantendo-os sempre vis\xEDveis.`),t()()(),i(174,"tr",19)(175,"td",20)(176,"div",30)(177,"span",31),e(178," (t-change)"),o(179,"br"),t()()(),i(180,"td",24)(181,"code",25),e(182,"EventEmitter"),t()(),i(183,"td",26),e(184,"-"),t(),i(185,"td",27)(186,"em")(187,"strong"),e(188,"(opcional)"),t()(),i(189,"p"),e(190,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(191,"tr",19)(192,"td",20)(193,"div",30)(194,"span",31),e(195," (t-change-model)"),o(196,"br"),t()()(),i(197,"td",24)(198,"code",25),e(199,"EventEmitter"),t()(),i(200,"td",26),e(201,"-"),t(),i(202,"td",27)(203,"em")(204,"strong"),e(205,"(opcional)"),t()(),i(206,"p"),e(207,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(208,"tr",19)(209,"td",20)(210,"div",21)(211,"span",22),e(212,"t-clean"),o(213,"br"),t()()(),i(214,"td",24)(215,"code",29),e(216,"boolean"),t()(),i(217,"td",26)(218,"p")(219,"code"),e(220,"false"),t()()(),i(221,"td",27)(222,"em")(223,"strong"),e(224,"(opcional)"),t()(),i(225,"p"),e(226,"Exibe um \xEDcone que permite limpar o campo. No caso de sele\xE7\xE3o m\xFAltipla, esta op\xE7\xE3o sempre ser\xE1 "),i(227,"code"),e(228,"true"),t(),e(229,"."),t()()(),i(230,"tr",19)(231,"td",20)(232,"div",21)(233,"span",22),e(234,"t-columns"),o(235,"br"),t()()(),i(236,"td",24)(237,"code",32),e(238,"Array<ThfLookupColumn>"),t()(),i(239,"td",26),e(240,"-"),t(),i(241,"td",27)(242,"em")(243,"strong"),e(244,"(opcional)"),t()(),i(245,"p"),e(246,"Permite definir e configurar as colunas do grid dentro do modal de busca avan\xE7ada por meio da interface "),i(247,"strong"),e(248,"ThfLookupColumn"),t(),e(249,"."),t(),i(250,"pre")(251,"code",33),e(252,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>
`),t()(),i(253,"pre")(254,"code",34),e(255,`columns: Array<ThfLookupColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}
`),t()()()(),i(256,"tr",19)(257,"td",20)(258,"div",21)(259,"span",22),e(260," t-compact-label"),o(261,"br"),t()()(),i(262,"td",24)(263,"code",35),e(264,"boolean, any"),t()(),i(265,"td",26)(266,"p")(267,"code"),e(268,"false"),t()()(),i(269,"td",27)(270,"em")(271,"strong"),e(272,"(opcional)"),t()(),i(273,"p"),e(274,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),i(275,"p"),e(276,"Quando habilitado ("),i(277,"code"),e(278,"true"),t(),e(279,"), o modo compacto afeta o conjunto composto por:"),t(),i(280,"ul")(281,"li")(282,"code"),e(283,"po-label"),t()(),i(284,"li")(285,"code"),e(286,"p-requirement (showRequired)"),t()(),i(287,"li")(288,"code"),e(289,"po-helper"),t()()(),i(290,"p"),e(291,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),i(292,"p"),e(293,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),i(294,"ul")(295,"li")(296,"code"),e(297,"--field-container-title-justify"),t()(),i(298,"li")(299,"code"),e(300,"--field-container-title-flex"),t()()(),i(301,"p"),e(302,"Exemplo:"),t(),i(303,"pre")(304,"code"),e(305,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),i(306,"p"),e(307,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),i(308,"tr",19)(309,"td",20)(310,"div",21)(311,"span",22),e(312," t-size"),o(313,"br"),t()()(),i(314,"td",24)(315,"code",28),e(316,"string"),t()(),i(317,"td",26)(318,"p")(319,"code"),e(320,"medium"),t()()(),i(321,"td",27)(322,"em")(323,"strong"),e(324,"(opcional)"),t()(),i(325,"p"),e(326,"Define o tamanho do componente:"),t(),i(327,"ul")(328,"li")(329,"code"),e(330,"small"),t(),e(331,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(332,"li")(333,"code"),e(334,"medium"),t(),e(335,": altura do input como 44px."),t()(),i(336,"blockquote")(337,"p"),e(338,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(339,"code"),e(340,"medium"),t(),e(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(342,"a",36),e(343,"po-theme"),t(),e(344,"."),t()()()(),i(345,"tr",19)(346,"td",20)(347,"div",21)(348,"span",22),e(349,"t-custom-items"),o(350,"br"),t()()(),i(351,"td",24)(352,"code",37),e(353,"Array<any>"),t()(),i(354,"td",26)(355,"p")(356,"code"),e(357,"[]"),t()()(),i(358,"td",27)(359,"em")(360,"strong"),e(361,"(opcional)"),t()(),i(362,"p"),e(363,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t()()(),i(364,"tr",19)(365,"td",20)(366,"div",21)(367,"span",22),e(368,"t-disabled"),o(369,"br"),t()()(),i(370,"td",24)(371,"code",29),e(372,"boolean"),t()(),i(373,"td",26)(374,"p")(375,"code"),e(376,"false"),t()()(),i(377,"td",27)(378,"em")(379,"strong"),e(380,"(opcional)"),t()(),i(381,"p"),e(382,"Desabilita o campo."),t()()(),i(383,"tr",19)(384,"td",20)(385,"div",21)(386,"span",22),e(387,"t-error-limit"),o(388,"br"),t()()(),i(389,"td",24)(390,"code",29),e(391,"boolean"),t()(),i(392,"td",26)(393,"p")(394,"code"),e(395,"false"),t()()(),i(396,"td",27)(397,"em")(398,"strong"),e(399,"(opcional)"),t()(),i(400,"p"),e(401,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(402,"blockquote")(403,"p"),e(404,"Caso essa propriedade seja definida como "),i(405,"code"),e(406,"true"),t(),e(407,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(408,"tr",19)(409,"td",20)(410,"div",21)(411,"span",22),e(412,"t-field-error-message"),o(413,"br"),t()()(),i(414,"td",24)(415,"code",28),e(416,"string"),t()(),i(417,"td",26),e(418,"-"),t(),i(419,"td",27)(420,"em")(421,"strong"),e(422,"(opcional)"),t()(),i(423,"p"),e(424,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(425,"blockquote")(426,"p"),e(427,"Necess\xE1rio que a propriedade "),i(428,"code"),e(429,"t-required"),t(),e(430," esteja habilitada."),t()()()(),i(431,"tr",19)(432,"td",20)(433,"div",21)(434,"span",22),e(435," t-field-format"),o(436,"br"),t()()(),i(437,"td",24)(438,"code",38),e(439,"Array<string> "),t(),i(440,"code",39),e(441," ((item: any) => string)"),t()(),i(442,"td",26),e(443,"-"),t(),i(444,"td",27)(445,"em")(446,"strong"),e(447,"(opcional)"),t()(),i(448,"p"),e(449,"Formato de exibi\xE7\xE3o do campo."),t(),i(450,"p"),e(451,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(452,"em"),e(453,"string"),t(),e(454," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(455,"pre")(456,"code",34),e(457,"fieldFormat(obj) {\n  return `${obj.id} (${obj.name})`;\n}\n"),t()(),i(458,"pre")(459,"code",33),e(460,`<thf-lookup
  ...
  [t-field-format]="fieldFormat"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 (Goku)  -->
`),t()(),i(461,"p"),e(462,`Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado `),i(463,"code"),e(464,"-"),t(),e(465,` como separador.
Por exemplo:`),t(),i(466,"pre")(467,"code",33),e(468,`<thf-lookup
  ...
  [t-field-format]="['id','nickname']"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 - Goku  -->
`),t()(),i(469,"blockquote")(470,"p"),e(471,"Esta propriedade sobrep\xF5e a "),i(472,"code"),e(473,"t-keys-label"),t(),e(474," como formata\xE7\xE3o do campo."),t()()()(),i(475,"tr",19)(476,"td",20)(477,"div",21)(478,"span",22),e(479,"t-field-label"),o(480,"br"),t()()(),i(481,"td",24)(482,"code",28),e(483,"string"),t()(),i(484,"td",26),e(485,"-"),t(),i(486,"td",27)(487,"p"),e(488,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e do filtro selecionado dentro do modal de busca avan\xE7ada.
Propriedade obrigat\xF3ria.`),t()()(),i(489,"tr",19)(490,"td",20)(491,"div",21)(492,"span",22),e(493,"t-field-value"),o(494,"br"),t()()(),i(495,"td",24)(496,"code",28),e(497,"string"),t()(),i(498,"td",26),e(499,"-"),t(),i(500,"td",27)(501,"p"),e(502,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(503,"blockquote")(504,"p"),e(505,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(506,"tr",19)(507,"td",20)(508,"div",21)(509,"span",22),e(510,"t-filter-params"),o(511,"br"),t()()(),i(512,"td",24)(513,"code",40),e(514,"any"),t()(),i(515,"td",26),e(516,"-"),t(),i(517,"td",27)(518,"em")(519,"strong"),e(520,"(opcional)"),t()(),i(521,"p"),e(522,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(523,"strong"),e(524,"ThfLookupFilter"),t(),e(525,"."),t()()(),i(526,"tr",19)(527,"td",20)(528,"div",21)(529,"span",22),e(530,"t-filter-search-select"),o(531,"br"),t()()(),i(532,"td",24)(533,"code",41),e(534,"Array<ThfLookupFilterSearchSelect>"),t()(),i(535,"td",26),e(536,"-"),t(),i(537,"td",27)(538,"em")(539,"strong"),e(540,"(opcional)"),t()(),i(541,"p"),e(542,`Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro dentro do modal de busca avan\xE7ada. Deve implementar a interface
`),i(543,"strong"),e(544,"ThfLookupFilterSearchSelect"),t(),e(545,"."),t(),i(546,"pre")(547,"code",33),e(548,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>
`),t()(),i(549,"pre")(550,"code",34),e(551,`filterSelect: Array<ThfLookupFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];
`),t()()()(),i(552,"tr",19)(553,"td",20)(554,"div",21)(555,"span",22),e(556,"t-filter-service"),o(557,"br"),t()()(),i(558,"td",24)(559,"code",42),e(560,"ThfLookupFilter "),t(),i(561,"code",28),e(562," string"),t()(),i(563,"td",26),e(564,"-"),t(),i(565,"td",27)(566,"p"),e(567,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
`),i(568,"strong"),e(569,"ThfLookupFilter"),t(),e(570," ou uma URL."),t(),i(571,"p"),e(572,`Quando uma URL \xE9 definida:
Se houver filtro, \xE9 adicionado o par\xE2metro `),i(573,"code"),e(574,"filter"),t(),e(575," com o valor da busca:"),t(),i(576,"pre")(577,"code"),e(578,`url + ?page=1&pageSize=20&filter=Peter
`),t()(),i(579,"p"),e(580,"Se houver ordena\xE7\xE3o, \xE9 adicionado o par\xE2metro "),i(581,"code"),e(582,"order"),t(),e(583,` com o valor da coluna.
Exemplo de busca com ordena\xE7\xE3o decrescente:`),t(),i(584,"pre")(585,"code"),e(586,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()(),i(587,"p"),e(588,"Exemplo de busca com ordena\xE7\xE3o crescente:"),t(),i(589,"pre")(590,"code"),e(591,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()(),i(592,"p"),e(593,"Se definido "),i(594,"strong"),e(595,"t-filter-params"),t(),e(596,`, seu valor tamb\xE9m ser\xE1 concatenado.
Exemplo com `),i(597,"code"),e(598,"{ age: 23 }"),t(),e(599,":"),t(),i(600,"pre")(601,"code"),e(602,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),i(603,"p"),e(604,`Se o campo precisar iniciar com valores, os registros s\xE3o buscados das seguintes formas:
Exemplo com a sele\xE7\xE3o \xFAnica:`),t(),i(605,"pre")(606,"code"),e(607,`model = 1234;

GET url/1234
`),t()(),i(608,"p"),e(609,"Exemplo com a sele\xE7\xE3o m\xFAltipla:"),t(),i(610,"pre")(611,"code"),e(612,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),i(613,"blockquote")(614,"p"),e(615,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(616,"a",43),e(617,"API do PO UI"),t(),e(618,` e utilizar
os valores definidos nas propriedades `),i(619,"strong"),e(620,"t-field-label"),t(),e(621," e "),i(622,"strong"),e(623,"t-field-value"),t(),e(624," para a constru\xE7\xE3o do "),i(625,"strong"),e(626,"thf-lookup"),t(),e(627,"."),t()(),i(628,"p"),e(629,"Caso a busca tenha ocorrido pressionando a tecla "),i(630,"em"),e(631,"TAB"),t(),e(632,`, o filtro ser\xE1 codificado atrav\xE9s da fun\xE7\xE3o
`),i(633,"a",44),e(634,"encodeURIComponent"),t(),e(635,`, e portanto concatenado
na URL da seguinte forma:`),t(),i(636,"pre")(637,"code"),e(638,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),i(639,"blockquote")(640,"p"),e(641,"Caso utilize um servi\xE7o "),i(642,"strong"),e(643,"ThfLookupFilter"),t(),e(644,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(645,"tr",19)(646,"td",20)(647,"div",21)(648,"span",22),e(649,"t-grid-properties"),o(650,"br"),t()()(),i(651,"td",24)(652,"code",45),e(653,"ThfLookupGridProperties"),t()(),i(654,"td",26),e(655,"-"),t(),i(656,"td",27)(657,"em")(658,"strong"),e(659,"(opcional)"),t()(),i(660,"p"),e(661,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(662,"p"),e(663,"// Exemplo de uso:"),t(),i(664,"pre")(665,"code",33),e(666,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>
`),t()(),i(667,"pre")(668,"code",34),e(669,`gridProperties: ThfLookupGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}
`),t()()()(),i(670,"tr",19)(671,"td",20)(672,"div",21)(673,"span",22),e(674,"t-help"),o(675,"br"),t()()(),i(676,"td",24)(677,"code",28),e(678,"string"),t()(),i(679,"td",26),e(680,"-"),t(),i(681,"td",27)(682,"em")(683,"strong"),e(684,"(opcional)"),t()(),i(685,"p"),e(686,"Texto de apoio do campo."),t()()(),i(687,"tr",19)(688,"td",20)(689,"div",30)(690,"span",31),e(691," (t-focus)"),o(692,"br"),t()()(),i(693,"td",24)(694,"code",25),e(695,"EventEmitter"),t()(),i(696,"td",26),e(697,"-"),t(),i(698,"td",27)(699,"em")(700,"strong"),e(701,"(opcional)"),t()(),i(702,"p"),e(703,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(704,"p"),e(705,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(706,"tr",19)(707,"td",20)(708,"div",21)(709,"span",22),e(710,"t-key-last-search"),o(711,"br"),t()()(),i(712,"td",24)(713,"code",28),e(714,"string"),t()(),i(715,"td",26),e(716,"-"),t(),i(717,"td",27)(718,"em")(719,"strong"),e(720,"(opcional)"),t()(),i(721,"p"),e(722,"Define um identificador \xFAnico para o campo. Marca\xE7\xE3o necess\xE1ria quando h\xE1 hist\xF3rico de \xFAltimas pesquisas."),t()()(),i(723,"tr",19)(724,"td",20)(725,"div",30)(726,"span",31),e(727," (t-keydown)"),o(728,"br"),t()()(),i(729,"td",24)(730,"code",25),e(731,"EventEmitter"),t()(),i(732,"td",26),e(733,"-"),t(),i(734,"td",27)(735,"em")(736,"strong"),e(737,"(opcional)"),t()(),i(738,"p"),e(739,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(740,"code"),e(741,"KeyboardEvent"),t(),e(742," com informa\xE7\xF5es sobre a tecla."),t()()(),i(743,"tr",19)(744,"td",20)(745,"div",21)(746,"span",22),e(747,"t-keys-label"),o(748,"br"),t()()(),i(749,"td",24)(750,"code",46),e(751,"Array<ThfLookupKeysLabel>"),t()(),i(752,"td",26),e(753,"-"),t(),i(754,"td",27)(755,"em")(756,"strong"),e(757,"(opcional)"),t()(),i(758,"p"),e(759,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no campo."),t(),i(760,"pre")(761,"code",33),e(762,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>
`),t()(),i(763,"pre")(764,"code",34),e(765,`keysLabel: Array<ThfLookupKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];
`),t()(),i(766,"pre")(767,"code"),e(768,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com
`),t()()()(),i(769,"tr",19)(770,"td",20)(771,"div",21)(772,"span",22),e(773,"t-label"),o(774,"br"),t()()(),i(775,"td",24)(776,"code",28),e(777,"string"),t()(),i(778,"td",26),e(779,"-"),t(),i(780,"td",27)(781,"em")(782,"strong"),e(783,"(opcional)"),t()(),i(784,"p"),e(785,"Label do campo. Tamb\xE9m usado como t\xEDtulo do modal de busca avan\xE7ada, se "),i(786,"code"),e(787,"modalTitle"),t(),e(788," n\xE3o estiver definido em "),i(789,"strong"),e(790,"t-literals"),t(),e(791,"."),t()()(),i(792,"tr",19)(793,"td",20)(794,"div",21)(795,"span",22),e(796," t-label-text-wrap"),o(797,"br"),t()()(),i(798,"td",24)(799,"code",29),e(800,"boolean"),t()(),i(801,"td",26)(802,"p")(803,"code"),e(804,"false"),t()()(),i(805,"td",27)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),i(809,"p"),e(810,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(811,"code"),e(812,"t-label"),t(),e(813,". Quando "),i(814,"code"),e(815,"t-label-text-wrap"),t(),e(816,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(817,"tr",19)(818,"td",20)(819,"div",21)(820,"span",22),e(821,"t-literals"),o(822,"br"),t()()(),i(823,"td",24)(824,"code",47),e(825,"ThfLookupLiterals"),t()(),i(826,"td",26),e(827,"-"),t(),i(828,"td",27)(829,"em")(830,"strong"),e(831,"(opcional)"),t()(),i(832,"p"),e(833,"Permite definir literais personalizados para o componente, conforme a interface "),i(834,"strong"),e(835,"ThfLookupLiterals"),t(),e(836,"."),t(),i(837,"pre")(838,"code",33),e(839,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>
`),t()(),i(840,"pre")(841,"code",34),e(842,`customLiterals: ThfLookupLiterals = { modalTitle: 'Busca avan\xE7ada' };
`),t()()()(),i(843,"tr",19)(844,"td",20)(845,"div",21)(846,"span",22),e(847,"t-loading"),o(848,"br"),t()()(),i(849,"td",24)(850,"code",29),e(851,"boolean"),t()(),i(852,"td",26)(853,"p")(854,"code"),e(855,"false"),t()()(),i(856,"td",27)(857,"em")(858,"strong"),e(859,"(opcional)"),t()(),i(860,"p"),e(861,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),i(862,"tr",19)(863,"td",20)(864,"div",21)(865,"span",22),e(866,"t-multiple"),o(867,"br"),t()()(),i(868,"td",24)(869,"code",29),e(870,"boolean"),t()(),i(871,"td",26)(872,"p")(873,"code"),e(874,"false"),t()()(),i(875,"td",27)(876,"em")(877,"strong"),e(878,"(opcional)"),t()(),i(879,"p"),e(880,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(881,"blockquote")(882,"p"),e(883,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(884,"code"),e(885,"[ 12345, 67890 ]"),t()()()()(),i(886,"tr",19)(887,"td",20)(888,"div",21)(889,"span",22),e(890,"t-no-autocomplete"),o(891,"br"),t()()(),i(892,"td",24)(893,"code",29),e(894,"boolean"),t()(),i(895,"td",26)(896,"p")(897,"code"),e(898,"false"),t()()(),i(899,"td",27)(900,"em")(901,"strong"),e(902,"(opcional)"),t()(),i(903,"p"),e(904,"Desabilita o "),i(905,"code"),e(906,"autocomplete"),t(),e(907," (propriedade nativa) do campo."),t()()(),i(908,"tr",19)(909,"td",20)(910,"div",30)(911,"span",31),e(912," (t-error)"),o(913,"br"),t()()(),i(914,"td",24)(915,"code",25),e(916,"EventEmitter"),t()(),i(917,"td",26),e(918,"-"),t(),i(919,"td",27)(920,"em")(921,"strong"),e(922,"(opcional)"),t()(),i(923,"p"),e(924,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(925,"tr",19)(926,"td",20)(927,"div",21)(928,"span",22),e(929,"t-optional"),o(930,"br"),t()()(),i(931,"td",24)(932,"code",29),e(933,"boolean"),t()(),i(934,"td",26)(935,"p")(936,"code"),e(937,"false"),t()()(),i(938,"td",27)(939,"em")(940,"strong"),e(941,"(opcional)"),t()(),i(942,"p"),e(943,"Exibe um indicador opcional no campo. Requer que "),i(944,"strong"),e(945,"t-label"),t(),e(946," esteja definido e "),i(947,"strong"),e(948,"t-required"),t(),e(949," desabilitado."),t()()(),i(950,"tr",19)(951,"td",20)(952,"div",21)(953,"span",22),e(954,"t-placeholder"),o(955,"br"),t()()(),i(956,"td",24)(957,"code",28),e(958,"string"),t()(),i(959,"td",26),e(960,"-"),t(),i(961,"td",27)(962,"em")(963,"strong"),e(964,"(opcional)"),t()(),i(965,"p"),e(966,"Texto exibido enquanto o campo estiver vazio."),t()()(),i(967,"tr",19)(968,"td",20)(969,"div",21)(970,"span",22),e(971," t-helper"),o(972,"br"),t()()(),i(973,"td",24)(974,"code",28),e(975,"string "),t(),i(976,"code",48),e(977," PoHelperOptions"),t()(),i(978,"td",26),e(979,"-"),t(),i(980,"td",27)(981,"em")(982,"strong"),e(983,"(opcional)"),t()(),i(984,"p"),e(985,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),i(986,"p"),e(987,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),i(988,"code"),e(989,"t-additional-help-tooltip"),t(),e(990," e "),i(991,"code"),e(992,"t-additional-help"),t(),e(993,") ser\xE1 ignorado."),t()()(),i(994,"tr",19)(995,"td",20)(996,"div",21)(997,"span",22),e(998," t-readonly"),o(999,"br"),t()()(),i(1e3,"td",24)(1001,"code",35),e(1002,"boolean, any"),t()(),i(1003,"td",26)(1004,"p")(1005,"code"),e(1006,"false"),t()()(),i(1007,"td",27)(1008,"em")(1009,"strong"),e(1010,"(opcional)"),t()(),i(1011,"p"),e(1012,"Indica que o campo ser\xE1 somente leitura."),t()()(),i(1013,"tr",19)(1014,"td",20)(1015,"div",21)(1016,"span",22),e(1017,"t-required"),o(1018,"br"),t()()(),i(1019,"td",24)(1020,"code",29),e(1021,"boolean"),t()(),i(1022,"td",26)(1023,"p")(1024,"code"),e(1025,"false"),t()()(),i(1026,"td",27)(1027,"em")(1028,"strong"),e(1029,"(opcional)"),t()(),i(1030,"p"),e(1031,"Define o campo como obrigat\xF3rio. Caso "),i(1032,"strong"),e(1033,"t-disabled"),t(),e(1034," esteja habilitado, a obrigatoriedade ser\xE1 ignorada."),t()()(),i(1035,"tr",19)(1036,"td",20)(1037,"div",21)(1038,"span",22),e(1039,"t-search-on-enter"),o(1040,"br"),t()()(),i(1041,"td",24)(1042,"code",49),e(1043,"'equal' "),t(),i(1044,"code",50),e(1045," 'include'"),t()(),i(1046,"td",26)(1047,"p")(1048,"code"),e(1049,"equal"),t()()(),i(1050,"td",27)(1051,"em")(1052,"strong"),e(1053,"(opcional)"),t()(),i(1054,"p"),e(1055,"Realiza busca do item ao pressionar a tecla Enter."),t(),i(1056,"blockquote")(1057,"p"),e(1058,"Caso essa propriedade seja definida como "),i(1059,"code"),e(1060,"equal"),t(),e(1061,`, a busca ser\xE1 realizada quando o valor do campo for exatamente igual ao valor do item.
Caso seja definida como `),i(1062,"code"),e(1063,"include"),t(),e(1064,", a busca retornar\xE1 o primeiro item que contenha o valor do campo."),t()()()(),i(1065,"tr",19)(1066,"td",20)(1067,"div",30)(1068,"span",31),e(1069," (t-selected)"),o(1070,"br"),t()()(),i(1071,"td",24)(1072,"code",25),e(1073,"EventEmitter"),t()(),i(1074,"td",26),e(1075,"-"),t(),i(1076,"td",27)(1077,"em")(1078,"strong"),e(1079,"(opcional)"),t()(),i(1080,"p"),e(1081,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(1082,"strong"),e(1083,"t-field-value"),t(),e(1084,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(1085,"tr",19)(1086,"td",20)(1087,"div",21)(1088,"span",22),e(1089,"t-show-required"),o(1090,"br"),t()()(),i(1091,"td",24)(1092,"code",29),e(1093,"boolean"),t()(),i(1094,"td",26)(1095,"p")(1096,"code"),e(1097,"false"),t()()(),i(1098,"td",27)(1099,"em")(1100,"strong"),e(1101,"(opcional)"),t()(),i(1102,"p"),e(1103,"Exibe um indicador de obrigatoriedade no campo. Requer que "),i(1104,"strong"),e(1105,"t-required"),t(),e(1106," esteja habilitado e "),i(1107,"strong"),e(1108,"t-label"),t(),e(1109," definido."),t()()(),i(1110,"tr",19)(1111,"td",20)(1112,"div",21)(1113,"span",22),e(1114," t-modal-size"),o(1115,"br"),t()()(),i(1116,"td",24)(1117,"code",28),e(1118,"string"),t()(),i(1119,"td",26)(1120,"p")(1121,"code"),e(1122,"lg"),t()()(),i(1123,"td",27)(1124,"em")(1125,"strong"),e(1126,"(opcional)"),t()(),i(1127,"p"),e(1128,"Define o tamanho do modal."),t(),i(1129,"p"),e(1130,"Valores v\xE1lidos:"),t(),i(1131,"ul")(1132,"li")(1133,"code"),e(1134,"sm"),t(),e(1135," (pequeno)"),t(),i(1136,"li")(1137,"code"),e(1138,"md"),t(),e(1139," (m\xE9dio)"),t(),i(1140,"li")(1141,"code"),e(1142,"lg"),t(),e(1143," (grande)"),t(),i(1144,"li")(1145,"code"),e(1146,"xl"),t(),e(1147," (extra grande)"),t(),i(1148,"li")(1149,"code"),e(1150,"auto"),t(),e(1151," (autom\xE1tico)"),t()(),i(1152,"blockquote")(1153,"p"),e(1154,"Quando informado "),i(1155,"code"),e(1156,"auto"),t(),e(1157,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),i(1158,"code"),e(1159,"lg"),t(),e(1160,"."),t()()()()()(),i(1161,"po-accordion-item",51)(1162,"table",52)(1163,"tr",19)(1164,"th",53)(1165,"div",21)(1166,"h4")(1167,"span",22),e(1168," showAdditionalHelp "),t()()()()(),i(1169,"tr",27)(1170,"td",27)(1171,"p"),e(1172,"M\xE9todo que exibe "),i(1173,"code"),e(1174,"t-helper"),t(),e(1175," ou executa a a\xE7\xE3o definida em "),i(1176,"code"),e(1177,"t-helper{eventOnClick}"),t(),e(1178," ou em "),i(1179,"code"),e(1180,"t-additionalHelp"),t(),e(1181,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1182,"code"),e(1183,"t-keydown"),t(),e(1184,"."),t(),i(1185,"pre")(1186,"code"),e(1187,`<thf-lookup
 #lookup
 ...
 t-helper="Mensagem de ajuda complementar"
 (t-keydown)="onKeyDown($event, lookup)"
></thf-lookup>
`),t()(),i(1188,"pre")(1189,"code"),e(1190,`...
onKeyDown(event: KeyboardEvent, inp: ThfLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1191,"br"),t()()(),T(1192,2),t(),i(1193,"po-tab",54),T(1194,3),i(1195,"po-container",5)(1196,"po-accordion",6)(1197,"po-accordion-item",55)(1198,"h4",9)(1199,"code"),e(1200,"ThfLookupColumn"),t()(),i(1201,"div",10)(1202,"p"),e(1203,"Interface para configura\xE7\xE3o das colunas ("),i(1204,"strong"),e(1205,"t-columns"),t(),e(1206,")."),t()(),i(1207,"h4",15),e(1208,"Propriedades"),t(),i(1209,"table",16)(1210,"tr",17)(1211,"th",18),e(1212,"Nome"),t(),i(1213,"th",18),e(1214,"Tipo"),t(),i(1215,"th",18),e(1216,"Descri\xE7\xE3o"),t()(),i(1217,"tr",19)(1218,"td",20)(1219,"div",21)(1220,"span",22),e(1221," boolean"),o(1222,"br"),t()()(),i(1223,"td",24)(1224,"code",56),e(1225,"PoTableBoolean"),t()(),i(1226,"td",27)(1227,"em")(1228,"strong"),e(1229,"(opcional)"),t()(),i(1230,"p"),e(1231,"Define um objeto do tipo "),i(1232,"code"),e(1233,"PoTableBoolean"),t(),e(1234," para as colunas do tipo "),i(1235,"em"),e(1236,"boolean"),t(),e(1237,". Por exemplo:"),t(),i(1238,"pre")(1239,"code"),e(1240,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),t()(),i(1241,"blockquote")(1242,"p"),e(1243,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(1244,"em"),e(1245,"boolean"),t(),e(1246,`,
esta exibir\xE1 por padr\xE3o `),i(1247,"code"),e(1248,"Sim"),t(),e(1249," e "),i(1250,"code"),e(1251,"N\xE3o"),t(),e(1252," de acordo com os valores "),i(1253,"em"),e(1254,"booleanos"),t(),e(1255,"."),t()()()(),i(1256,"tr",19)(1257,"td",20)(1258,"div",21)(1259,"span",22),e(1260," booleanFalse"),o(1261,"br"),t()()(),i(1262,"td",24)(1263,"code",28),e(1264,"string"),t()(),i(1265,"td",27)(1266,"em")(1267,"strong"),e(1268,"(opcional)"),t()(),i(1269,"p"),e(1270,"Texto exibido quando o valor da coluna for "),i(1271,"em"),e(1272,"false"),t(),e(1273,"."),t()()(),i(1274,"tr",19)(1275,"td",20)(1276,"div",21)(1277,"span",22),e(1278," booleanTrue"),o(1279,"br"),t()()(),i(1280,"td",24)(1281,"code",28),e(1282,"string"),t()(),i(1283,"td",27)(1284,"em")(1285,"strong"),e(1286,"(opcional)"),t()(),i(1287,"p"),e(1288,"Texto exibido quando o valor da coluna for "),i(1289,"em"),e(1290,"true"),t(),e(1291,"."),t()()(),i(1292,"tr",19)(1293,"td",20)(1294,"div",21)(1295,"span",22),e(1296," disabled"),o(1297,"br"),t()()(),i(1298,"td",24)(1299,"code",57),e(1300,"Function"),t()(),i(1301,"td",27)(1302,"em")(1303,"strong"),e(1304,"(opcional)"),t()(),i(1305,"p"),e(1306,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(1307,"em"),e(1308,"link"),t(),e(1309," e sua a\xE7\xE3o."),t(),i(1310,"blockquote")(1311,"p"),e(1312,"Propriedade dispon\xEDvel nas colunas do tipo "),i(1313,"code"),e(1314,"link"),t(),e(1315,"."),t()()()(),i(1316,"tr",19)(1317,"td",20)(1318,"div",21)(1319,"span",22),e(1320," format"),o(1321,"br"),t()()(),i(1322,"td",24)(1323,"code",28),e(1324,"string"),t()(),i(1325,"td",27)(1326,"em")(1327,"strong"),e(1328,"(opcional)"),t()(),i(1329,"p"),e(1330,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(1331,"ul")(1332,"li"),e(1333,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(1334,"li"),e(1335,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(1336,"tr",19)(1337,"td",20)(1338,"div",21)(1339,"span",22),e(1340," label"),o(1341,"br"),t()()(),i(1342,"td",24)(1343,"code",28),e(1344,"string"),t()(),i(1345,"td",27)(1346,"em")(1347,"strong"),e(1348,"(opcional)"),t()(),i(1349,"p"),e(1350,"Texto para t\xEDtulo da coluna."),t(),i(1351,"p"),e(1352,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(1353,"em"),e(1354,"label"),t(),e(1355," o valor da propriedade "),i(1356,"em"),e(1357,"property"),t(),e(1358," com a primeira letra em mai\xFAsculo."),t()()(),i(1359,"tr",19)(1360,"td",20)(1361,"div",21)(1362,"span",22),e(1363," labels"),o(1364,"br"),t()()(),i(1365,"td",24)(1366,"code",58),e(1367,"Array<PoTableColumnLabel>"),t()(),i(1368,"td",27)(1369,"em")(1370,"strong"),e(1371,"(opcional)"),t()(),i(1372,"p"),e(1373,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(1374,"code"),e(1375,"PoTableColumnLabel"),t(),e(1376," na qual devem ser definidas os labels. Por exemplo:"),t(),i(1377,"pre")(1378,"code"),e(1379,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),t()()()(),i(1380,"tr",19)(1381,"td",20)(1382,"div",21)(1383,"span",22),e(1384," locale"),o(1385,"br"),t()()(),i(1386,"td",24)(1387,"code",28),e(1388,"string"),t()(),i(1389,"td",27)(1390,"em")(1391,"strong"),e(1392,"(opcional)"),t()(),i(1393,"p"),e(1394,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(1395,"a",59)(1396,"code"),e(1397,"I18n"),t()()(),i(1398,"p"),e(1399,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(1400,"pre")(1401,"code"),e(1402,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},
`),t()(),i(1403,"blockquote")(1404,"p"),e(1405,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(1406,"p"),e(1407,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(1408,"p"),e(1409,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(1410,"a",59)(1411,"code"),e(1412,"I18n"),t()()()(),i(1413,"p"),e(1414,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(1415,"pre")(1416,"code"),e(1417,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}
`),t()(),i(1418,"blockquote")(1419,"p"),e(1420,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(1421,"code"),e(1422,"number"),t(),e(1423," e "),i(1424,"code"),e(1425,"currency"),t(),e(1426,"."),t()()()(),i(1427,"tr",19)(1428,"td",20)(1429,"div",21)(1430,"span",22),e(1431," property"),o(1432,"br"),t()()(),i(1433,"td",24)(1434,"code",28),e(1435,"string"),t()(),i(1436,"td",27)(1437,"em")(1438,"strong"),e(1439,"(opcional)"),t()(),i(1440,"p"),e(1441,"Nome identificador da coluna."),t()()(),i(1442,"tr",19)(1443,"td",20)(1444,"div",21)(1445,"span",22),e(1446," type"),o(1447,"br"),t()()(),i(1448,"td",24)(1449,"code",28),e(1450,"string"),t()(),i(1451,"td",27)(1452,"em")(1453,"strong"),e(1454,"(opcional)"),t()(),i(1455,"p"),e(1456,"Tipo da coluna:"),t(),i(1457,"ul")(1458,"li"),e(1459,"string (padr\xE3o): textos"),t(),i(1460,"li"),e(1461,"number: valores num\xE9ricos"),t(),i(1462,"li"),e(1463,"date: data"),t(),i(1464,"li"),e(1465,"currency: valores monet\xE1rios"),t(),i(1466,"li"),e(1467,"dateTime: data e hora"),t()()()(),i(1468,"tr",19)(1469,"td",20)(1470,"div",21)(1471,"span",22),e(1472," visible"),o(1473,"br"),t()()(),i(1474,"td",24)(1475,"code",29),e(1476,"boolean"),t()(),i(1477,"td",27)(1478,"em")(1479,"strong"),e(1480,"(opcional)"),t()(),i(1481,"p"),e(1482,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(1483,"strong"),e(1484,"gerenciador de colunas"),t(),e(1485,"."),t(),i(1486,"blockquote")(1487,"p"),e(1488,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(1489,"code"),e(1490,"p-max-columns"),t(),e(1491,"."),t()()()(),i(1492,"tr",19)(1493,"td",20)(1494,"div",21)(1495,"span",22),e(1496," width"),o(1497,"br"),t()()(),i(1498,"td",24)(1499,"code",28),e(1500,"string"),t()(),i(1501,"td",27)(1502,"em")(1503,"strong"),e(1504,"(opcional)"),t()(),i(1505,"p"),e(1506,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(1507,"po-accordion-item",60)(1508,"h4",9)(1509,"code"),e(1510,"ThfLookupFilterSearchSelect"),t()(),i(1511,"div",10)(1512,"p"),e(1513,"Interface que define as colunas para busca ("),i(1514,"strong"),e(1515,"t-filter-search-select"),t(),e(1516,")"),t()(),i(1517,"h4",15),e(1518,"Propriedades"),t(),i(1519,"table",16)(1520,"tr",17)(1521,"th",18),e(1522,"Nome"),t(),i(1523,"th",18),e(1524,"Tipo"),t(),i(1525,"th",18),e(1526,"Descri\xE7\xE3o"),t()(),i(1527,"tr",19)(1528,"td",20)(1529,"div",21)(1530,"span",22),e(1531," label"),o(1532,"br"),t()()(),i(1533,"td",24)(1534,"code",28),e(1535,"string"),t()(),i(1536,"td",27)(1537,"p"),e(1538,"R\xF3tulo da coluna"),t()()(),i(1539,"tr",19)(1540,"td",20)(1541,"div",21)(1542,"span",22),e(1543," value"),o(1544,"br"),t()()(),i(1545,"td",24)(1546,"code",28),e(1547,"string"),t()(),i(1548,"td",27)(1549,"p"),e(1550,"Coluna"),t()()()()(),i(1551,"po-accordion-item",61)(1552,"h4",9)(1553,"code"),e(1554,"ThfLookupFilter"),t()(),i(1555,"div",10)(1556,"p"),e(1557,"Interface para definir o tipo de busca via servi\xE7o."),t()(),i(1558,"table",52)(1559,"tr",19)(1560,"th",53)(1561,"div",21)(1562,"h4")(1563,"span",22),e(1564," fetchItems "),t()()()()(),i(1565,"tr",27)(1566,"td",27)(1567,"p"),e(1568,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(1569,"em"),e(1570,"Observable"),t(),e(1571," com a resposta da API no formato { items: [] }."),t()()()(),i(1572,"h5")(1573,"b"),e(1574,"Par\xE2metros"),t()(),i(1575,"table",16)(1576,"tr",17)(1577,"th",18),e(1578,"Nome"),t(),i(1579,"th",18),e(1580,"Tipo"),t(),i(1581,"th",18),e(1582,"Descri\xE7\xE3o"),t()(),i(1583,"tr",19)(1584,"td",20),e(1585," query"),t(),i(1586,"td",24)(1587,"code",62),e(1588," string "),t()(),i(1589,"td",27)(1590,"p"),e(1591,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(1592,"tr",19)(1593,"td",20),e(1594," filterParams"),t(),i(1595,"td",24)(1596,"code",62),e(1597," any "),t()(),i(1598,"td",27)(1599,"p"),e(1600,"Valor informado atrav\xE9s da propriedade "),i(1601,"strong"),e(1602,"t-filter-params"),t(),e(1603,"."),t()()()(),o(1604,"br"),i(1605,"table",52)(1606,"tr",19)(1607,"th",53)(1608,"div",21)(1609,"h4")(1610,"span",22),e(1611," getFilteredItems "),t()()()()(),i(1612,"tr",27)(1613,"td",27)(1614,"p"),e(1615,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(1616,"em"),e(1617,"Observable"),t(),e(1618," com a resposta da API no formato da interface "),i(1619,"strong"),e(1620,"ThfLookupResponseApi"),t(),e(1621,"."),t()()()(),i(1622,"h5")(1623,"b"),e(1624,"Par\xE2metros"),t()(),i(1625,"table",16)(1626,"tr",17)(1627,"th",18),e(1628,"Nome"),t(),i(1629,"th",18),e(1630,"Tipo"),t(),i(1631,"th",18),e(1632,"Descri\xE7\xE3o"),t()(),i(1633,"tr",19)(1634,"td",20),e(1635," params"),t(),i(1636,"td",24)(1637,"code",62),e(1638," ThfLookupFilteredItemsParams "),t()(),i(1639,"td",27)(1640,"p"),e(1641,"Objeto enviado por par\xE2metro que implementa a interface "),i(1642,"strong"),e(1643,"ThfLookupFilteredItemsParams"),t(),e(1644,"."),t()()()(),o(1645,"br"),i(1646,"table",52)(1647,"tr",19)(1648,"th",53)(1649,"div",21)(1650,"h4")(1651,"span",22),e(1652," getObjectByValue "),t()()()()(),i(1653,"tr",27)(1654,"td",27)(1655,"p"),e(1656,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1657,"p"),e(1658,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1659,"code"),e(1660,"value"),t(),e(1661,` ser\xE1 enviado como uma lista de valores
e o `),i(1662,"em"),e(1663,"Observable"),t(),e(1664," deve retornar uma lista de objetos."),t()()()(),i(1665,"h5")(1666,"b"),e(1667,"Par\xE2metros"),t()(),i(1668,"table",16)(1669,"tr",17)(1670,"th",18),e(1671,"Nome"),t(),i(1672,"th",18),e(1673,"Tipo"),t(),i(1674,"th",18),e(1675,"Descri\xE7\xE3o"),t()(),i(1676,"tr",19)(1677,"td",20),e(1678," value"),t(),i(1679,"td",24)(1680,"code",28),e(1681," string "),t(),i(1682,"code",37),e(1683," Array<any> "),t()(),i(1684,"td",27)(1685,"p"),e(1686,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1687,"tr",19)(1688,"td",20),e(1689," filterParams"),t(),i(1690,"td",24)(1691,"code",62),e(1692," any "),t()(),i(1693,"td",27)(1694,"p"),e(1695,"Valor informado atrav\xE9s da propriedade "),i(1696,"strong"),e(1697,"t-filter-params"),t(),e(1698,"."),t()()()(),o(1699,"br"),t(),i(1700,"po-accordion-item",63)(1701,"h4",9)(1702,"code"),e(1703,"ThfLookupFilteredItemsParams"),t()(),i(1704,"div",10)(1705,"p"),e(1706,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1707,"strong"),e(1708,"getFilteredItems"),t(),e(1709,"."),t()(),i(1710,"h4",15),e(1711,"Propriedades"),t(),i(1712,"table",16)(1713,"tr",17)(1714,"th",18),e(1715,"Nome"),t(),i(1716,"th",18),e(1717,"Tipo"),t(),i(1718,"th",18),e(1719,"Descri\xE7\xE3o"),t()(),i(1720,"tr",19)(1721,"td",20)(1722,"div",21)(1723,"span",22),e(1724," filter"),o(1725,"br"),t()()(),i(1726,"td",24)(1727,"code",64),e(1728,`{ [key: string]: any;
}`),t()(),i(1729,"td",27)(1730,"em")(1731,"strong"),e(1732,"(opcional)"),t()(),i(1733,"p"),e(1734,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1735,"tr",19)(1736,"td",20)(1737,"div",21)(1738,"span",22),e(1739," filterParams"),o(1740,"br"),t()()(),i(1741,"td",24)(1742,"code",40),e(1743,"any"),t()(),i(1744,"td",27)(1745,"em")(1746,"strong"),e(1747,"(opcional)"),t()(),i(1748,"p"),e(1749,"Valor informado atrav\xE9s da propriedade "),i(1750,"code"),e(1751,"t-filter-params"),t(),e(1752,"."),t()()(),i(1753,"tr",19)(1754,"td",20)(1755,"div",21)(1756,"span",22),e(1757," order"),o(1758,"br"),t()()(),i(1759,"td",24)(1760,"code",28),e(1761,"string"),t()(),i(1762,"td",27)(1763,"em")(1764,"strong"),e(1765,"(opcional)"),t()(),i(1766,"p"),e(1767,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1768,"ul")(1769,"li"),e(1770,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1771,"code"),e(1772,"-<colunaOrdenada>"),t(),e(1773,", por exemplo "),i(1774,"code"),e(1775,"-name"),t(),e(1776,"."),t(),i(1777,"li"),e(1778,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1779,"code"),e(1780,"<colunaOrdenada>"),t(),e(1781,", por exemplo "),i(1782,"code"),e(1783,"name"),t(),e(1784,"."),t()()()(),i(1785,"tr",19)(1786,"td",20)(1787,"div",21)(1788,"span",22),e(1789," page"),o(1790,"br"),t()()(),i(1791,"td",24)(1792,"code",65),e(1793,"number"),t()(),i(1794,"td",27)(1795,"em")(1796,"strong"),e(1797,"(opcional)"),t()(),i(1798,"p"),e(1799,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1800,"tr",19)(1801,"td",20)(1802,"div",21)(1803,"span",22),e(1804," pageSize"),o(1805,"br"),t()()(),i(1806,"td",24)(1807,"code",65),e(1808,"number"),t()(),i(1809,"td",27)(1810,"em")(1811,"strong"),e(1812,"(opcional)"),t()(),i(1813,"p"),e(1814,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1815,"po-accordion-item",66)(1816,"h4",9)(1817,"code"),e(1818,"ThfLookupGridProperties"),t()(),i(1819,"div",10)(1820,"p"),e(1821,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t()(),i(1822,"h4",15),e(1823,"Propriedades"),t(),i(1824,"table",16)(1825,"tr",17)(1826,"th",18),e(1827,"Nome"),t(),i(1828,"th",18),e(1829,"Tipo"),t(),i(1830,"th",18),e(1831,"Descri\xE7\xE3o"),t()(),i(1832,"tr",19)(1833,"td",20)(1834,"div",21)(1835,"span",22),e(1836," actionRight"),o(1837,"br"),t()()(),i(1838,"td",24)(1839,"code",29),e(1840,"boolean"),t()(),i(1841,"td",27)(1842,"em")(1843,"strong"),e(1844,"(opcional)"),t()(),i(1845,"p"),e(1846,"Posiciona a coluna de a\xE7\xF5es ("),i(1847,"code"),e(1848,"t-actions"),t(),e(1849,") \xE0 direita."),t()()(),i(1850,"tr",19)(1851,"td",20)(1852,"div",21)(1853,"span",22),e(1854," actions"),o(1855,"br"),t()()(),i(1856,"td",24)(1857,"code",67),e(1858,"Array<ThfTableAction>"),t()(),i(1859,"td",27)(1860,"em")(1861,"strong"),e(1862,"(opcional)"),t()(),i(1863,"p"),e(1864,"Permite definir uma lista de a\xE7\xF5es que implementam a interface "),i(1865,"strong"),e(1866,"ThfTableAction"),t(),e(1867,`, adicionando uma coluna
ao componente thf-grid do lookup. Se houver apenas uma a\xE7\xE3o v\xE1lida, ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrupar m\xFAltiplas a\xE7\xF5es e exibe o \xEDcone `),i(1868,"a",68)(1869,"strong"),e(1870,"an an-dots-three-vertical"),t()(),e(1871,`. Ao
pressionar o \xEDcone, todas as a\xE7\xF5es ser\xE3o listadas.`),t(),i(1872,"p")(1873,"strong"),e(1874,"A coluna n\xE3o ser\xE1 exibida se:"),t()(),i(1875,"ul")(1876,"li"),e(1877,"a lista contiver valores inv\xE1lidos ou indefinidos;"),t(),i(1878,"li"),e(1879,"houver apenas uma a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),t()(),i(1880,"pre")(1881,"code",33),e(1882,`// Exemplo de uso:
<thf-lookup
 [t-grid-properties]="gridProperties"
></thf-lookup>
`),t()(),i(1883,"pre")(1884,"code",34),e(1885,`gridProperties: ThfLookupGridProperties = {
  actions: [
    {
      label: '',
      action: (e: any) => {
        this.poNotification.information(\`\${e.id} - \${e.name} \`);
      },
      icon: 'ICON_MENU_OPEN',
      fixed: true
    }
  ]
};

constructor(private poNotification: PoNotificationService) {}
`),t()()()(),i(1886,"tr",19)(1887,"td",20)(1888,"div",21)(1889,"span",22),e(1890," autoSize"),o(1891,"br"),t()()(),i(1892,"td",24)(1893,"code",29),e(1894,"boolean"),t()(),i(1895,"td",27)(1896,"em")(1897,"strong"),e(1898,"(opcional)"),t()(),i(1899,"p"),e(1900,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1901,"strong"),e(1902,"resizable"),t(),e(1903," esteja habilitada."),t(),i(1904,"blockquote")(1905,"p"),e(1906,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1907,"tr",19)(1908,"td",20)(1909,"div",21)(1910,"span",22),e(1911," autoSizeOnScroll"),o(1912,"br"),t()()(),i(1913,"td",24)(1914,"code",29),e(1915,"boolean"),t()(),i(1916,"td",27)(1917,"em")(1918,"strong"),e(1919,"(opcional)"),t()(),i(1920,"p"),e(1921,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1922,"p"),e(1923,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1924,"p"),e(1925,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1926,"code"),e(1927,"t-page-size-virtual"),t(),e(1928," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1929,"blockquote")(1930,"p")(1931,"strong"),e(1932,"Pr\xE9-requisitos"),t(),e(1933,": Requer que as propriedades "),i(1934,"code"),e(1935,"autoSize"),t(),e(1936,", "),i(1937,"code"),e(1938,"resizable"),t(),e(1939,`
e `),i(1940,"code"),e(1941,"virtualScroll"),t(),e(1942," estejam habilitadas."),t()(),i(1943,"blockquote")(1944,"p")(1945,"strong"),e(1946,"Incompatibilidade"),t(),e(1947,": N\xE3o funciona com "),i(1948,"code"),e(1949,"t-grid-row-actions"),t(),e(1950," habilitado;"),t()(),i(1951,"p")(1952,"strong"),e(1953,"Exemplo de uso:"),t()(),i(1954,"pre")(1955,"code",33),e(1956,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>
`),t()()()(),i(1957,"tr",19)(1958,"td",20)(1959,"div",21)(1960,"span",22),e(1961," draggable"),o(1962,"br"),t()()(),i(1963,"td",24)(1964,"code",29),e(1965,"boolean"),t()(),i(1966,"td",27)(1967,"em")(1968,"strong"),e(1969,"(opcional)"),t()(),i(1970,"p"),e(1971,"Habilita o Drag and Drop nas colunas."),t()()(),i(1972,"tr",19)(1973,"td",20)(1974,"div",21)(1975,"span",22),e(1976," group"),o(1977,"br"),t()()(),i(1978,"td",24)(1979,"code",38),e(1980,"Array<string>"),t()(),i(1981,"td",27)(1982,"em")(1983,"strong"),e(1984,"(opcional)"),t()(),i(1985,"p"),e(1986,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1987,"strong"),e(1988,"groupable"),t(),e(1989," esteja habilitada."),t()()(),i(1990,"tr",19)(1991,"td",20)(1992,"div",21)(1993,"span",22),e(1994," groupable"),o(1995,"br"),t()()(),i(1996,"td",24)(1997,"code",29),e(1998,"boolean "),t(),i(1999,"code",69),e(2e3," GroupableSettings"),t()(),i(2001,"td",27)(2002,"em")(2003,"strong"),e(2004,"(opcional)"),t()(),i(2005,"p"),e(2006,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(2007,"tr",19)(2008,"td",20)(2009,"div",21)(2010,"span",22),e(2011," hideSelectAll"),o(2012,"br"),t()()(),i(2013,"td",24)(2014,"code",29),e(2015,"boolean"),t()(),i(2016,"td",27)(2017,"em")(2018,"strong"),e(2019,"(opcional)"),t()(),i(2020,"p"),e(2021,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(2022,"tr",19)(2023,"td",20)(2024,"div",21)(2025,"span",22),e(2026," resizable"),o(2027,"br"),t()()(),i(2028,"td",24)(2029,"code",29),e(2030,"boolean"),t()(),i(2031,"td",27)(2032,"em")(2033,"strong"),e(2034,"(opcional)"),t()(),i(2035,"p"),e(2036,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(2037,"tr",19)(2038,"td",20)(2039,"div",21)(2040,"span",22),e(2041," selectableEntireLine"),o(2042,"br"),t()()(),i(2043,"td",24)(2044,"code",29),e(2045,"boolean"),t()(),i(2046,"td",27)(2047,"em")(2048,"strong"),e(2049,"(opcional)"),t()(),i(2050,"p"),e(2051,"Permite selecionar o item ao clicar na linha."),t()()(),i(2052,"tr",19)(2053,"td",20)(2054,"div",21)(2055,"span",22),e(2056," showDraggableIcon"),o(2057,"br"),t()()(),i(2058,"td",24)(2059,"code",29),e(2060,"boolean"),t()(),i(2061,"td",27)(2062,"em")(2063,"strong"),e(2064,"(opcional)"),t()(),i(2065,"p"),e(2066,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(2067,"tr",19)(2068,"td",20)(2069,"div",21)(2070,"span",22),e(2071," showMoreDisabled"),o(2072,"br"),t()()(),i(2073,"td",24)(2074,"code",29),e(2075,"boolean"),t()(),i(2076,"td",27)(2077,"em")(2078,"strong"),e(2079,"(opcional)"),t()(),i(2080,"p"),e(2081,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(2082,"tr",19)(2083,"td",20)(2084,"div",21)(2085,"span",22),e(2086," showMoreVisible"),o(2087,"br"),t()()(),i(2088,"td",24)(2089,"code",29),e(2090,"boolean"),t()(),i(2091,"td",27)(2092,"em")(2093,"strong"),e(2094,"(opcional)"),t()(),i(2095,"p"),e(2096,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(2097,"strong"),e(2098,"pageable"),t(),e(2099," esteja habilitada."),t(),i(2100,"blockquote")(2101,"p"),e(2102,"Caso seja utilizado em conjunto com "),i(2103,"strong"),e(2104,"showMoreDisabled"),t(),e(2105,", a propriedade "),i(2106,"strong"),e(2107,"showMoreVisible"),t(),e(2108," ter\xE1 prioridade."),t()()()(),i(2109,"tr",19)(2110,"td",20)(2111,"div",21)(2112,"span",22),e(2113," sort"),o(2114,"br"),t()()(),i(2115,"td",24)(2116,"code",70),e(2117,"Array<{ field: string; dir: 'asc' "),t(),i(2118,"code",71),e(2119,` 'desc';
}>`),t()(),i(2120,"td",27)(2121,"em")(2122,"strong"),e(2123,"(opcional)"),t()(),i(2124,"p"),e(2125,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(2126,"pre")(2127,"code",34),e(2128,`sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];
`),t()()()(),i(2129,"tr",19)(2130,"td",20)(2131,"div",21)(2132,"span",22),e(2133," sortable"),o(2134,"br"),t()()(),i(2135,"td",24)(2136,"code",29),e(2137,"boolean"),t()(),i(2138,"td",27)(2139,"em")(2140,"strong"),e(2141,"(opcional)"),t()(),i(2142,"p"),e(2143,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(2144,"tr",19)(2145,"td",20)(2146,"div",21)(2147,"span",22),e(2148," spacing"),o(2149,"br"),t()()(),i(2150,"td",24)(2151,"code",72),e(2152,"'extraSmall' "),t(),i(2153,"code",73),e(2154," 'small' "),t(),i(2155,"code",74),e(2156," 'medium' "),t(),i(2157,"code",75),e(2158," 'large'"),t()(),i(2159,"td",27)(2160,"em")(2161,"strong"),e(2162,"(opcional)"),t()(),i(2163,"p"),e(2164,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(2165,"strong"),e(2166,"ThfColumnSpacing"),t(),e(2167,"."),t()()(),i(2168,"tr",19)(2169,"td",20)(2170,"div",21)(2171,"span",22),e(2172," striped"),o(2173,"br"),t()()(),i(2174,"td",24)(2175,"code",29),e(2176,"boolean"),t()(),i(2177,"td",27)(2178,"em")(2179,"strong"),e(2180,"(opcional)"),t()(),i(2181,"p"),e(2182,"Define o estilo listrado no grid (striped)."),t()()(),i(2183,"tr",19)(2184,"td",20)(2185,"div",21)(2186,"span",22),e(2187," virtualScroll"),o(2188,"br"),t()()(),i(2189,"td",24)(2190,"code",29),e(2191,"boolean"),t()(),i(2192,"td",27)(2193,"em")(2194,"strong"),e(2195,"(opcional)"),t()(),i(2196,"p"),e(2197,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(2198,"po-accordion-item",76)(2199,"h4",9)(2200,"code"),e(2201,"ThfLookupKeysLabel"),t()(),i(2202,"div",10)(2203,"p"),e(2204,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(2205,"strong"),e(2206,"t-keys-label"),t(),e(2207,")."),t()(),i(2208,"h4",15),e(2209,"Propriedades"),t(),i(2210,"table",16)(2211,"tr",17)(2212,"th",18),e(2213,"Nome"),t(),i(2214,"th",18),e(2215,"Tipo"),t(),i(2216,"th",18),e(2217,"Descri\xE7\xE3o"),t()(),i(2218,"tr",19)(2219,"td",20)(2220,"div",21)(2221,"span",22),e(2222," label"),o(2223,"br"),t()()(),i(2224,"td",24)(2225,"code",28),e(2226,"string"),t()(),i(2227,"td",27)(2228,"p"),e(2229,"Texto exibido"),t()()(),i(2230,"tr",19)(2231,"td",20)(2232,"div",21)(2233,"span",22),e(2234," value"),o(2235,"br"),t()()(),i(2236,"td",24)(2237,"code",28),e(2238,"string"),t()(),i(2239,"td",27)(2240,"p"),e(2241,"Coluna"),t()()()()(),i(2242,"po-accordion-item",77)(2243,"h4",9)(2244,"code"),e(2245,"ThfLookupLiterals"),t()(),i(2246,"div",10)(2247,"p"),e(2248,"Interface para customizar literais ("),i(2249,"strong"),e(2250,"t-literals"),t(),e(2251,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(2252,"h4",15),e(2253,"Propriedades"),t(),i(2254,"table",16)(2255,"tr",17)(2256,"th",18),e(2257,"Nome"),t(),i(2258,"th",18),e(2259,"Tipo"),t(),i(2260,"th",18),e(2261,"Descri\xE7\xE3o"),t()(),i(2262,"tr",19)(2263,"td",20)(2264,"div",21)(2265,"span",22),e(2266," confirmBodyDelete"),o(2267,"br"),t()()(),i(2268,"td",24)(2269,"code",28),e(2270,"string"),t()(),i(2271,"td",27)(2272,"em")(2273,"strong"),e(2274,"(opcional)"),t()(),i(2275,"p"),e(2276,"Texto do corpo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2277,"tr",19)(2278,"td",20)(2279,"div",21)(2280,"span",22),e(2281," confirmCancelDelete"),o(2282,"br"),t()()(),i(2283,"td",24)(2284,"code",28),e(2285,"string"),t()(),i(2286,"td",27)(2287,"em")(2288,"strong"),e(2289,"(opcional)"),t()(),i(2290,"p"),e(2291,"Texto do bot\xE3o de cancelar do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2292,"tr",19)(2293,"td",20)(2294,"div",21)(2295,"span",22),e(2296," confirmRemoveDelete"),o(2297,"br"),t()()(),i(2298,"td",24)(2299,"code",28),e(2300,"string"),t()(),i(2301,"td",27)(2302,"em")(2303,"strong"),e(2304,"(opcional)"),t()(),i(2305,"p"),e(2306,"Texto do bot\xE3o de remover do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2307,"tr",19)(2308,"td",20)(2309,"div",21)(2310,"span",22),e(2311," confirmTitleDelete"),o(2312,"br"),t()()(),i(2313,"td",24)(2314,"code",28),e(2315,"string"),t()(),i(2316,"td",27)(2317,"em")(2318,"strong"),e(2319,"(opcional)"),t()(),i(2320,"p"),e(2321,"T\xEDtulo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2322,"tr",19)(2323,"td",20)(2324,"div",21)(2325,"span",22),e(2326," lastSearch"),o(2327,"br"),t()()(),i(2328,"td",24)(2329,"code",28),e(2330,"string"),t()(),i(2331,"td",27)(2332,"em")(2333,"strong"),e(2334,"(opcional)"),t()(),i(2335,"p"),e(2336,"Texto exibido no listbox quando estiver exibindo as ultimas pesquisas."),t()()(),i(2337,"tr",19)(2338,"td",20)(2339,"div",21)(2340,"span",22),e(2341," listNotFound"),o(2342,"br"),t()()(),i(2343,"td",24)(2344,"code",28),e(2345,"string"),t()(),i(2346,"td",27)(2347,"em")(2348,"strong"),e(2349,"(opcional)"),t()(),i(2350,"p"),e(2351,"Texto exibido no listbox quando nenhum resultado for encontrado."),t()()(),i(2352,"tr",19)(2353,"td",20)(2354,"div",21)(2355,"span",22),e(2356," modalPlaceholder"),o(2357,"br"),t()()(),i(2358,"td",24)(2359,"code",28),e(2360,"string"),t()(),i(2361,"td",27)(2362,"em")(2363,"strong"),e(2364,"(opcional)"),t()(),i(2365,"p"),e(2366,"Texto exibido no placeholder do input da modal."),t()()(),i(2367,"tr",19)(2368,"td",20)(2369,"div",21)(2370,"span",22),e(2371," modalPrimaryActionLabel"),o(2372,"br"),t()()(),i(2373,"td",24)(2374,"code",28),e(2375,"string"),t()(),i(2376,"td",27)(2377,"em")(2378,"strong"),e(2379,"(opcional)"),t()(),i(2380,"p"),e(2381,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(2382,"tr",19)(2383,"td",20)(2384,"div",21)(2385,"span",22),e(2386," modalSecondaryActionLabel"),o(2387,"br"),t()()(),i(2388,"td",24)(2389,"code",28),e(2390,"string"),t()(),i(2391,"td",27)(2392,"em")(2393,"strong"),e(2394,"(opcional)"),t()(),i(2395,"p"),e(2396,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(2397,"tr",19)(2398,"td",20)(2399,"div",21)(2400,"span",22),e(2401," modalTableLoadMoreData"),o(2402,"br"),t()()(),i(2403,"td",24)(2404,"code",28),e(2405,"string"),t()(),i(2406,"td",27)(2407,"em")(2408,"strong"),e(2409,"(opcional)"),t()(),i(2410,"p"),e(2411,"Label do "),i(2412,"code"),e(2413,"button"),t(),e(2414," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(2415,"tr",19)(2416,"td",20)(2417,"div",21)(2418,"span",22),e(2419," modalTableLoadingData"),o(2420,"br"),t()()(),i(2421,"td",24)(2422,"code",28),e(2423,"string"),t()(),i(2424,"td",27)(2425,"em")(2426,"strong"),e(2427,"(opcional)"),t()(),i(2428,"p"),e(2429,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(2430,"tr",19)(2431,"td",20)(2432,"div",21)(2433,"span",22),e(2434," modalTableNoColumns"),o(2435,"br"),t()()(),i(2436,"td",24)(2437,"code",28),e(2438,"string"),t()(),i(2439,"td",27)(2440,"em")(2441,"strong"),e(2442,"(opcional)"),t()(),i(2443,"p"),e(2444,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(2445,"tr",19)(2446,"td",20)(2447,"div",21)(2448,"span",22),e(2449," modalTableNoData"),o(2450,"br"),t()()(),i(2451,"td",24)(2452,"code",28),e(2453,"string"),t()(),i(2454,"td",27)(2455,"em")(2456,"strong"),e(2457,"(opcional)"),t()(),i(2458,"p"),e(2459,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(2460,"tr",19)(2461,"td",20)(2462,"div",21)(2463,"span",22),e(2464," modalTitle"),o(2465,"br"),t()()(),i(2466,"td",24)(2467,"code",28),e(2468,"string"),t()(),i(2469,"td",27)(2470,"em")(2471,"strong"),e(2472,"(opcional)"),t()(),i(2473,"p"),e(2474,"Texto exibido no t\xEDtulo da modal."),t()()(),i(2475,"tr",19)(2476,"td",20)(2477,"div",21)(2478,"span",22),e(2479," multipleItems"),o(2480,"br"),t()()(),i(2481,"td",24)(2482,"code",28),e(2483,"string"),t()(),i(2484,"td",27)(2485,"em")(2486,"strong"),e(2487,"(opcional)"),t()(),i(2488,"p"),e(2489,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(2490,"tr",19)(2491,"td",20)(2492,"div",21)(2493,"span",22),e(2494," oneItem"),o(2495,"br"),t()()(),i(2496,"td",24)(2497,"code",28),e(2498,"string"),t()(),i(2499,"td",27)(2500,"em")(2501,"strong"),e(2502,"(opcional)"),t()(),i(2503,"p"),e(2504,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(2505,"tr",19)(2506,"td",20)(2507,"div",21)(2508,"span",22),e(2509," or"),o(2510,"br"),t()()(),i(2511,"td",24)(2512,"code",28),e(2513,"string"),t()(),i(2514,"td",27)(2515,"em")(2516,"strong"),e(2517,"(opcional)"),t()(),i(2518,"p"),e(2519,"Palavra 'ou' que \xE9 exibida dentro do listbox."),t()()(),i(2520,"tr",19)(2521,"td",20)(2522,"div",21)(2523,"span",22),e(2524," searchAdvanced"),o(2525,"br"),t()()(),i(2526,"td",24)(2527,"code",28),e(2528,"string"),t()(),i(2529,"td",27)(2530,"em")(2531,"strong"),e(2532,"(opcional)"),t()(),i(2533,"p"),e(2534,"Texto exibido no listbox para fazer busca avan\xE7ada."),t()()(),i(2535,"tr",19)(2536,"td",20)(2537,"div",21)(2538,"span",22),e(2539," searchBy"),o(2540,"br"),t()()(),i(2541,"td",24)(2542,"code",28),e(2543,"string"),t()(),i(2544,"td",27)(2545,"em")(2546,"strong"),e(2547,"(opcional)"),t()(),i(2548,"p"),e(2549,"Texto exibido para indicar os campos filtrados."),t()()()()(),i(2550,"po-accordion-item",78)(2551,"h4",9)(2552,"code"),e(2553,"ThfLookupResponseApi"),t()(),i(2554,"div",10)(2555,"p"),e(2556,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(2557,"blockquote")(2558,"p"),e(2559,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(2560,"h4",15),e(2561,"Propriedades"),t(),i(2562,"table",16)(2563,"tr",17)(2564,"th",18),e(2565,"Nome"),t(),i(2566,"th",18),e(2567,"Tipo"),t(),i(2568,"th",18),e(2569,"Descri\xE7\xE3o"),t()(),i(2570,"tr",19)(2571,"td",20)(2572,"div",21)(2573,"span",22),e(2574," hasNext"),o(2575,"br"),t()()(),i(2576,"td",24)(2577,"code",29),e(2578,"boolean"),t()(),i(2579,"td",27)(2580,"p"),e(2581,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(2582,"tr",19)(2583,"td",20)(2584,"div",21)(2585,"span",22),e(2586," items"),o(2587,"br"),t()()(),i(2588,"td",24)(2589,"code",37),e(2590,"Array<any>"),t()(),i(2591,"td",27)(2592,"p"),e(2593,"Lista de itens retornados."),t()()()()()()(),T(2594,4),t(),i(2595,"po-tab",79)(2596,"po-container",5),T(2597,5),i(2598,"h3"),e(2599,"Tokens customiz\xE1veis"),t(),i(2600,"p"),e(2601,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(2602,"blockquote")(2603,"p"),e(2604,"Para maiores informa\xE7\xF5es, acesse o guia "),i(2605,"a",80),e(2606,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(2607,"."),t()(),i(2608,"table")(2609,"thead")(2610,"tr")(2611,"th"),e(2612,"Propriedade"),t(),i(2613,"th"),e(2614,"Descri\xE7\xE3o"),t(),i(2615,"th"),e(2616,"Valor Padr\xE3o"),t()()(),i(2617,"tbody")(2618,"tr")(2619,"td")(2620,"strong"),e(2621,"Default Values"),t()(),o(2622,"td")(2623,"td"),t(),i(2624,"tr")(2625,"td")(2626,"code"),e(2627,"--font-family"),t()(),i(2628,"td"),e(2629,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(2630,"td")(2631,"code"),e(2632,"var(--font-family-theme)"),t()()(),i(2633,"tr")(2634,"td")(2635,"code"),e(2636,"--font-size"),t()(),i(2637,"td"),e(2638,"Tamanho da fonte"),t(),i(2639,"td")(2640,"code"),e(2641,"var(--font-size)"),t()()(),i(2642,"tr")(2643,"td")(2644,"code"),e(2645,"--text-color-placeholder"),t()(),i(2646,"td"),e(2647,"Cor do texto no placeholder"),t(),i(2648,"td")(2649,"code"),e(2650,"var(--color-neutral-light-30)"),t()()(),i(2651,"tr")(2652,"td")(2653,"code"),e(2654,"--color"),t()(),i(2655,"td"),e(2656,"Cor principal do campo"),t(),i(2657,"td")(2658,"code"),e(2659,"var(--color-neutral-dark-70)"),t()()(),i(2660,"tr")(2661,"td")(2662,"code"),e(2663,"--background"),t()(),i(2664,"td"),e(2665,"Cor de background"),t(),i(2666,"td")(2667,"code"),e(2668,"var(--color-neutral-light-00)"),t()()(),i(2669,"tr")(2670,"td")(2671,"code"),e(2672,"--text-color"),t()(),i(2673,"td"),e(2674,"Cor do texto"),t(),i(2675,"td")(2676,"code"),e(2677,"var(--color-neutral-mid-60)"),t()()(),i(2678,"tr")(2679,"td")(2680,"code"),e(2681,"--field-container-title-justify"),t()(),i(2682,"td"),e(2683,"Alinhamento horizontal do t\xEDtulo ("),i(2684,"code"),e(2685,"justify-content"),t(),e(2686,")"),t(),i(2687,"td")(2688,"code"),e(2689,"space-between"),t()()(),i(2690,"tr")(2691,"td")(2692,"code"),e(2693,"--field-container-title-flex"),t()(),i(2694,"td"),e(2695,"Flex do t\xEDtulo ("),i(2696,"code"),e(2697,"flex"),t(),e(2698,")"),t(),i(2699,"td")(2700,"code"),e(2701,"1 auto"),t()()(),i(2702,"tr")(2703,"td")(2704,"strong"),e(2705,"Hover"),t()(),o(2706,"td")(2707,"td"),t(),i(2708,"tr")(2709,"td")(2710,"code"),e(2711,"--color-hover"),t()(),i(2712,"td"),e(2713,"Cor principal do campo no estado hover"),t(),i(2714,"td")(2715,"code"),e(2716,"var(--color-brand-01-dark)"),t()()(),i(2717,"tr")(2718,"td")(2719,"code"),e(2720,"--background-hover"),t()(),i(2721,"td"),e(2722,"Cor de background no estado hover"),t(),i(2723,"td")(2724,"code"),e(2725,"var(--color-brand-01-lightest)"),t()()(),i(2726,"tr")(2727,"td")(2728,"strong"),e(2729,"Focused"),t()(),o(2730,"td")(2731,"td"),t(),i(2732,"tr")(2733,"td")(2734,"code"),e(2735,"--color-focused"),t()(),i(2736,"td"),e(2737,"Cor principal do campo no estado de focus"),t(),i(2738,"td")(2739,"code"),e(2740,"var(--color-action-default)"),t()()(),i(2741,"tr")(2742,"td")(2743,"code"),e(2744,"--outline-color-focused"),t()(),i(2745,"td"),e(2746,"Cor do outline no estado de focus"),t(),i(2747,"td")(2748,"code"),e(2749,"var(--color-action-focus)"),t()()(),i(2750,"tr")(2751,"td")(2752,"strong"),e(2753,"Disabled"),t()(),o(2754,"td")(2755,"td"),t(),i(2756,"tr")(2757,"td")(2758,"code"),e(2759,"--color-disabled"),t()(),i(2760,"td"),e(2761,"Cor principal do campo no estado disabled"),t(),i(2762,"td")(2763,"code"),e(2764,"var(--color-neutral-light-30)"),t()()(),i(2765,"tr")(2766,"td")(2767,"code"),e(2768,"--background-disabled"),t()(),i(2769,"td"),e(2770,"Cor de background no estado disabled"),t(),i(2771,"td")(2772,"code"),e(2773,"var(--color-neutral-light-05)"),t()()(),i(2774,"tr")(2775,"td")(2776,"code"),e(2777,"--text-color-disabled"),t()(),i(2778,"td"),e(2779,"Cor do texto no estado disabled"),t(),i(2780,"td")(2781,"code"),e(2782,"var(--color-neutral-dark-70)"),t()()()()()(),T(2783,6),t(),i(2784,"po-tab",81),T(2785,7),t()()())},dependencies:[V,$,g,ne,Q],encapsulation:2})}}return d})();var Ni=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Qi=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],Tt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let k=E.querySelector(".po-tab-button-label");k&&k?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(I(Y))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-lookup-data"]],viewQuery:function(r,n){if(r&1&&F(Q,5)(V,5),r&2){let l;D(l=w())&&(n.tabs=l.first),D(l=w())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Qi,decls:2117,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataColumn>"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","boolean,","any"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupDataFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupDataGridProperties"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupDataLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["p-label","Interfaces"],["p-label","ThfLookupDataColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfLookupDataFilterSearchSelect"],["p-label","ThfLookupDataFilter"],["pan","",1,"docs-api-property-type"],["p-label","ThfLookupDataFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["p-label","ThfLookupDataGridProperties"],["pan","",1,"docs-api-property-type","Array<ThfTableAction>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'extraSmall'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupDataKeysLabel"],["p-label","ThfLookupDataLiterals"],["p-label","ThfLookupDataResponseApi"],["p-label","Token CSS"],["href","https://po-ui.io/guides/theme-customization"],["href","https://po-ui.io/documentation/po-search"],["href","https://thf.totvs.app/v19/documentation/thf-grid"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(X(Ni),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),T(4),t(),i(5,"po-tab",4),T(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupDataComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"Componente de busca com um grid que lista dados de um servi\xE7o."),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-Lookup-Data"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(24,"code"),e(25,"import { ThfLookupDataComponent } from '@totvs/thf-components';"),t()()(),i(26,"div",11)(27,"h4",12),e(28,"Seletor"),t(),i(29,"pre",13),e(30,`<thf-lookup-grid
  t-auto-focus="boolean"
  (t-change)="EventEmitter"
  (t-change-model)="EventEmitter"
  t-columns="Array<ThfLookupDataColumn>"
  t-compact-label="boolean, any"
  t-custom-items="Array<any>"
  t-disabled="boolean"
  t-error-limit="boolean"
  t-field-error-message="string"
  t-field-label="string"
  t-field-value="string"
  t-filter-params="any"
  t-filter-search-select="Array<ThfLookupDataFilterSearchSelect>"
  t-filter-service="ThfLookupDataFilter | string"
  t-grid-properties="ThfLookupDataGridProperties"
  t-height="number"
  t-help="string"
  (t-focus)="EventEmitter"
  (t-keydown)="EventEmitter"
  t-keys-label="Array<ThfLookupDataKeysLabel>"
  t-label="string"
  t-literals="ThfLookupDataLiterals"
  t-multiple="boolean"
  t-no-autocomplete="boolean"
  (t-error)="EventEmitter"
  t-optional="boolean"
  t-helper="string | PoHelperOptions"
  t-required="boolean"
  (t-selected)="EventEmitter"
  t-show-required="boolean"
  t-size="string" >
</thf-lookup-grid>
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48,"t-auto-focus"),o(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"boolean"),t()(),i(53,"td",25)(54,"p")(55,"code"),e(56,"false"),t()()(),i(57,"td",26)(58,"em")(59,"strong"),e(60,"(opcional)"),t()(),i(61,"p"),e(62,"Aplica foco no campo de busca do componente ao ser iniciado."),t(),i(63,"blockquote")(64,"p"),e(65,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(66,"tr",19)(67,"td",20)(68,"div",27)(69,"span",28),e(70," (t-change)"),o(71,"br"),t()()(),i(72,"td",23)(73,"code",29),e(74,"EventEmitter"),t()(),i(75,"td",25),e(76,"-"),t(),i(77,"td",26)(78,"em")(79,"strong"),e(80,"(opcional)"),t()(),i(81,"p"),e(82,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(83,"tr",19)(84,"td",20)(85,"div",27)(86,"span",28),e(87," (t-change-model)"),o(88,"br"),t()()(),i(89,"td",23)(90,"code",29),e(91,"EventEmitter"),t()(),i(92,"td",25),e(93,"-"),t(),i(94,"td",26)(95,"em")(96,"strong"),e(97,"(opcional)"),t()(),i(98,"p"),e(99,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(100,"tr",19)(101,"td",20)(102,"div",21)(103,"span",22),e(104,"t-columns"),o(105,"br"),t()()(),i(106,"td",23)(107,"code",30),e(108,"Array<ThfLookupDataColumn>"),t()(),i(109,"td",25),e(110,"-"),t(),i(111,"td",26)(112,"em")(113,"strong"),e(114,"(opcional)"),t()(),i(115,"p"),e(116,"Permite definir e configurar as colunas do grid por meio da interface "),i(117,"strong"),e(118,"ThfLookupDataColumn"),t(),e(119,"."),t(),i(120,"pre")(121,"code",31),e(122,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>
`),t()(),i(123,"pre")(124,"code",32),e(125,`columns: Array<ThfLookupDataColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}
`),t()()()(),i(126,"tr",19)(127,"td",20)(128,"div",21)(129,"span",22),e(130," t-compact-label"),o(131,"br"),t()()(),i(132,"td",23)(133,"code",33),e(134,"boolean, any"),t()(),i(135,"td",25)(136,"p")(137,"code"),e(138,"false"),t()()(),i(139,"td",26)(140,"em")(141,"strong"),e(142,"(opcional)"),t()(),i(143,"p"),e(144,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),i(145,"p"),e(146,"Quando habilitado ("),i(147,"code"),e(148,"true"),t(),e(149,"), o modo compacto afeta o conjunto composto por:"),t(),i(150,"ul")(151,"li")(152,"code"),e(153,"po-label"),t()(),i(154,"li")(155,"code"),e(156,"p-requirement (showRequired)"),t()(),i(157,"li")(158,"code"),e(159,"po-helper"),t()()(),i(160,"p"),e(161,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),i(162,"p"),e(163,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),i(164,"ul")(165,"li")(166,"code"),e(167,"--field-container-title-justify"),t()(),i(168,"li")(169,"code"),e(170,"--field-container-title-flex"),t()()(),i(171,"p"),e(172,"Exemplo:"),t(),i(173,"pre")(174,"code"),e(175,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),i(176,"p"),e(177,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),i(178,"tr",19)(179,"td",20)(180,"div",21)(181,"span",22),e(182,"t-custom-items"),o(183,"br"),t()()(),i(184,"td",23)(185,"code",34),e(186,"Array<any>"),t()(),i(187,"td",25)(188,"p")(189,"code"),e(190,"[]"),t()()(),i(191,"td",26)(192,"em")(193,"strong"),e(194,"(opcional)"),t()(),i(195,"p"),e(196,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t()()(),i(197,"tr",19)(198,"td",20)(199,"div",21)(200,"span",22),e(201,"t-disabled"),o(202,"br"),t()()(),i(203,"td",23)(204,"code",24),e(205,"boolean"),t()(),i(206,"td",25)(207,"p")(208,"code"),e(209,"false"),t()()(),i(210,"td",26)(211,"em")(212,"strong"),e(213,"(opcional)"),t()(),i(214,"p"),e(215,'Desabilita a sele\xE7\xE3o na grid, o campo de busca e o bot\xE3o "Carregar mais resultados" do componente.'),t()()(),i(216,"tr",19)(217,"td",20)(218,"div",21)(219,"span",22),e(220,"t-error-limit"),o(221,"br"),t()()(),i(222,"td",23)(223,"code",24),e(224,"boolean"),t()(),i(225,"td",25)(226,"p")(227,"code"),e(228,"false"),t()()(),i(229,"td",26)(230,"em")(231,"strong"),e(232,"(opcional)"),t()(),i(233,"p"),e(234,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(235,"blockquote")(236,"p"),e(237,"Caso essa propriedade seja definida como "),i(238,"code"),e(239,"true"),t(),e(240,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(241,"tr",19)(242,"td",20)(243,"div",21)(244,"span",22),e(245,"t-field-error-message"),o(246,"br"),t()()(),i(247,"td",23)(248,"code",35),e(249,"string"),t()(),i(250,"td",25),e(251,"-"),t(),i(252,"td",26)(253,"em")(254,"strong"),e(255,"(opcional)"),t()(),i(256,"p"),e(257,"Exibe a mensagem definida se n\xE3o houver itens selecionados."),t(),i(258,"blockquote")(259,"p"),e(260,"Necess\xE1rio que a propriedade "),i(261,"code"),e(262,"t-required"),t(),e(263," esteja habilitada."),t()()()(),i(264,"tr",19)(265,"td",20)(266,"div",21)(267,"span",22),e(268,"t-field-label"),o(269,"br"),t()()(),i(270,"td",23)(271,"code",35),e(272,"string"),t()(),i(273,"td",25),e(274,"-"),t(),i(275,"td",26)(276,"p"),e(277,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o.
Propriedade obrigat\xF3ria.`),t()()(),i(278,"tr",19)(279,"td",20)(280,"div",21)(281,"span",22),e(282,"t-field-value"),o(283,"br"),t()()(),i(284,"td",23)(285,"code",35),e(286,"string"),t()(),i(287,"td",25),e(288,"-"),t(),i(289,"td",26)(290,"p"),e(291,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(292,"blockquote")(293,"p"),e(294,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(295,"tr",19)(296,"td",20)(297,"div",21)(298,"span",22),e(299,"t-filter-params"),o(300,"br"),t()()(),i(301,"td",23)(302,"code",36),e(303,"any"),t()(),i(304,"td",25),e(305,"-"),t(),i(306,"td",26)(307,"em")(308,"strong"),e(309,"(opcional)"),t()(),i(310,"p"),e(311,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(312,"strong"),e(313,"ThfLookupDataFilter"),t(),e(314,"."),t()()(),i(315,"tr",19)(316,"td",20)(317,"div",21)(318,"span",22),e(319,"t-filter-search-select"),o(320,"br"),t()()(),i(321,"td",23)(322,"code",37),e(323,"Array<ThfLookupDataFilterSearchSelect>"),t()(),i(324,"td",25),e(325,"-"),t(),i(326,"td",26)(327,"em")(328,"strong"),e(329,"(opcional)"),t()(),i(330,"p"),e(331,"Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro. Deve implementar a interface "),i(332,"strong"),e(333,"ThfLookupDataFilterSearchSelect"),t(),e(334,"."),t(),i(335,"pre")(336,"code",31),e(337,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>
`),t()(),i(338,"pre")(339,"code",32),e(340,`filterSelect: Array<ThfLookupDataFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];
`),t()()()(),i(341,"tr",19)(342,"td",20)(343,"div",21)(344,"span",22),e(345,"t-filter-service"),o(346,"br"),t()()(),i(347,"td",23)(348,"code",38),e(349,"ThfLookupDataFilter "),t(),i(350,"code",35),e(351," string"),t()(),i(352,"td",25),e(353,"-"),t(),i(354,"td",26)(355,"p"),e(356,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
`),i(357,"strong"),e(358,"ThfLookupDataFilter"),t(),e(359," ou uma URL."),t(),i(360,"p"),e(361,`Quando uma URL \xE9 definida:
Se houver filtro, \xE9 adicionado o par\xE2metro `),i(362,"code"),e(363,"filter"),t(),e(364," com o valor da busca:"),t(),i(365,"pre")(366,"code"),e(367,`url + ?page=1&pageSize=20&filter=Peter
`),t()(),i(368,"p"),e(369,"Se houver ordena\xE7\xE3o, \xE9 adicionado o par\xE2metro "),i(370,"code"),e(371,"order"),t(),e(372,` com o valor da coluna.
Exemplo de busca com ordena\xE7\xE3o decrescente:`),t(),i(373,"pre")(374,"code"),e(375,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()(),i(376,"p"),e(377,"Exemplo de busca com ordena\xE7\xE3o crescente:"),t(),i(378,"pre")(379,"code"),e(380,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()(),i(381,"p"),e(382,"Se definido "),i(383,"strong"),e(384,"t-filter-params"),t(),e(385,`, seu valor tamb\xE9m ser\xE1 concatenado.
Exemplo com `),i(386,"code"),e(387,"{ age: 23 }"),t(),e(388,":"),t(),i(389,"pre")(390,"code"),e(391,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),i(392,"p"),e(393,`Se o campo precisar iniciar com valores, os registros s\xE3o buscados das seguintes formas:
Exemplo com a sele\xE7\xE3o \xFAnica:`),t(),i(394,"pre")(395,"code"),e(396,`model = 1234;

GET url/1234
`),t()(),i(397,"p"),e(398,"Exemplo com a sele\xE7\xE3o m\xFAltipla:"),t(),i(399,"pre")(400,"code"),e(401,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),i(402,"blockquote")(403,"p"),e(404,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(405,"a",39),e(406,"API do PO UI"),t(),e(407,` e utilizar
os valores definidos nas propriedades `),i(408,"strong"),e(409,"t-field-label"),t(),e(410," e "),i(411,"strong"),e(412,"t-field-value"),t(),e(413," para a constru\xE7\xE3o do "),i(414,"strong"),e(415,"thf-lookup"),t(),e(416,"."),t()(),i(417,"p"),e(418,"Caso a busca tenha ocorrido pressionando a tecla "),i(419,"em"),e(420,"TAB"),t(),e(421,`, o filtro ser\xE1 codificado atrav\xE9s da fun\xE7\xE3o
`),i(422,"a",40),e(423,"encodeURIComponent"),t(),e(424,`, e portanto concatenado
na URL da seguinte forma:`),t(),i(425,"pre")(426,"code"),e(427,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),i(428,"blockquote")(429,"p"),e(430,"Caso utilize um servi\xE7o "),i(431,"strong"),e(432,"ThfLookupDataFilter"),t(),e(433,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(434,"tr",19)(435,"td",20)(436,"div",21)(437,"span",22),e(438,"t-grid-properties"),o(439,"br"),t()()(),i(440,"td",23)(441,"code",41),e(442,"ThfLookupDataGridProperties"),t()(),i(443,"td",25),e(444,"-"),t(),i(445,"td",26)(446,"em")(447,"strong"),e(448,"(opcional)"),t()(),i(449,"p"),e(450,"Propriedades para configura\xE7\xE3o do "),i(451,"code"),e(452,"THF-Grid"),t(),e(453,"."),t(),i(454,"p"),e(455,"// Exemplo de uso:"),t(),i(456,"pre")(457,"code",31),e(458,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>
`),t()(),i(459,"pre")(460,"code",32),e(461,`gridProperties: ThfLookupDataGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}
`),t()()()(),i(462,"tr",19)(463,"td",20)(464,"div",21)(465,"span",22),e(466,"t-height"),o(467,"br"),t()()(),i(468,"td",23)(469,"code",42),e(470,"number"),t()(),i(471,"td",25),e(472,"-"),t(),i(473,"td",26)(474,"em")(475,"strong"),e(476,"(opcional)"),t()(),i(477,"p"),e(478,"Define a altura do componente em pixels."),t(),i(479,"blockquote")(480,"p"),e(481,"Recomenda-se definir um valor acima de 368px para garantir uma boa visualiza\xE7\xE3o do componente."),t()(),i(482,"blockquote")(483,"p"),e(484,'A altura m\xEDnima do componente corresponde \xE0 soma da altura do campo de busca com a altura do bot\xE3o "Carregar mais resultados".'),t()()()(),i(485,"tr",19)(486,"td",20)(487,"div",21)(488,"span",22),e(489,"t-help"),o(490,"br"),t()()(),i(491,"td",23)(492,"code",35),e(493,"string"),t()(),i(494,"td",25),e(495,"-"),t(),i(496,"td",26)(497,"em")(498,"strong"),e(499,"(opcional)"),t()(),i(500,"p"),e(501,"Texto de apoio do componente."),t()()(),i(502,"tr",19)(503,"td",20)(504,"div",27)(505,"span",28),e(506," (t-focus)"),o(507,"br"),t()()(),i(508,"td",23)(509,"code",29),e(510,"EventEmitter"),t()(),i(511,"td",25),e(512,"-"),t(),i(513,"td",26)(514,"em")(515,"strong"),e(516,"(opcional)"),t()(),i(517,"p"),e(518,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(519,"p"),e(520,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(521,"tr",19)(522,"td",20)(523,"div",27)(524,"span",28),e(525," (t-keydown)"),o(526,"br"),t()()(),i(527,"td",23)(528,"code",29),e(529,"EventEmitter"),t()(),i(530,"td",25),e(531,"-"),t(),i(532,"td",26)(533,"em")(534,"strong"),e(535,"(opcional)"),t()(),i(536,"p"),e(537,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(538,"code"),e(539,"KeyboardEvent"),t(),e(540," com informa\xE7\xF5es sobre a tecla."),t()()(),i(541,"tr",19)(542,"td",20)(543,"div",21)(544,"span",22),e(545,"t-keys-label"),o(546,"br"),t()()(),i(547,"td",23)(548,"code",43),e(549,"Array<ThfLookupDataKeysLabel>"),t()(),i(550,"td",25),e(551,"-"),t(),i(552,"td",26)(553,"em")(554,"strong"),e(555,"(opcional)"),t()(),i(556,"p"),e(557,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no "),i(558,"code"),e(559,"accordion"),t(),e(560,"."),t(),i(561,"pre")(562,"code",31),e(563,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>
`),t()(),i(564,"pre")(565,"code",32),e(566,`keysLabel: Array<ThfLookupDataKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];
`),t()(),i(567,"pre")(568,"code"),e(569,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com
`),t()()()(),i(570,"tr",19)(571,"td",20)(572,"div",21)(573,"span",22),e(574,"t-label"),o(575,"br"),t()()(),i(576,"td",23)(577,"code",35),e(578,"string"),t()(),i(579,"td",25),e(580,"-"),t(),i(581,"td",26)(582,"em")(583,"strong"),e(584,"(opcional)"),t()(),i(585,"p"),e(586,"Label do campo de busca."),t()()(),i(587,"tr",19)(588,"td",20)(589,"div",21)(590,"span",22),e(591,"t-literals"),o(592,"br"),t()()(),i(593,"td",23)(594,"code",44),e(595,"ThfLookupDataLiterals"),t()(),i(596,"td",25),e(597,"-"),t(),i(598,"td",26)(599,"em")(600,"strong"),e(601,"(opcional)"),t()(),i(602,"p"),e(603,"Permite definir literais personalizados para o componente, conforme a interface "),i(604,"strong"),e(605,"ThfLookupDataLiterals"),t(),e(606,"."),t(),i(607,"pre")(608,"code",31),e(609,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>
`),t()(),i(610,"pre")(611,"code",32),e(612,`customLiterals: ThfLookupDataLiterals = { noData: 'Nenhum dado encontrado' };
`),t()()()(),i(613,"tr",19)(614,"td",20)(615,"div",21)(616,"span",22),e(617,"t-multiple"),o(618,"br"),t()()(),i(619,"td",23)(620,"code",24),e(621,"boolean"),t()(),i(622,"td",25)(623,"p")(624,"code"),e(625,"false"),t()()(),i(626,"td",26)(627,"em")(628,"strong"),e(629,"(opcional)"),t()(),i(630,"p"),e(631,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(632,"blockquote")(633,"p"),e(634,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(635,"code"),e(636,"[ 12345, 67890 ]"),t()()()()(),i(637,"tr",19)(638,"td",20)(639,"div",21)(640,"span",22),e(641,"t-no-autocomplete"),o(642,"br"),t()()(),i(643,"td",23)(644,"code",24),e(645,"boolean"),t()(),i(646,"td",25)(647,"p")(648,"code"),e(649,"false"),t()()(),i(650,"td",26)(651,"em")(652,"strong"),e(653,"(opcional)"),t()(),i(654,"p"),e(655,"Desabilita o "),i(656,"code"),e(657,"autocomplete"),t(),e(658," (propriedade nativa) do campo."),t()()(),i(659,"tr",19)(660,"td",20)(661,"div",27)(662,"span",28),e(663," (t-error)"),o(664,"br"),t()()(),i(665,"td",23)(666,"code",29),e(667,"EventEmitter"),t()(),i(668,"td",25),e(669,"-"),t(),i(670,"td",26)(671,"em")(672,"strong"),e(673,"(opcional)"),t()(),i(674,"p"),e(675,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(676,"tr",19)(677,"td",20)(678,"div",21)(679,"span",22),e(680,"t-optional"),o(681,"br"),t()()(),i(682,"td",23)(683,"code",24),e(684,"boolean"),t()(),i(685,"td",25)(686,"p")(687,"code"),e(688,"false"),t()()(),i(689,"td",26)(690,"em")(691,"strong"),e(692,"(opcional)"),t()(),i(693,"p"),e(694,"Exibe um indicador opcional do componente no campo de busca."),t(),i(695,"blockquote")(696,"p"),e(697,"Necess\xE1rio que "),i(698,"code"),e(699,"t-label"),t(),e(700," esteja definido e "),i(701,"code"),e(702,"t-required"),t(),e(703," desabilitado"),t()()()(),i(704,"tr",19)(705,"td",20)(706,"div",21)(707,"span",22),e(708," t-helper"),o(709,"br"),t()()(),i(710,"td",23)(711,"code",35),e(712,"string "),t(),i(713,"code",45),e(714," PoHelperOptions"),t()(),i(715,"td",25),e(716,"-"),t(),i(717,"td",26)(718,"em")(719,"strong"),e(720,"(opcional)"),t()(),i(721,"p"),e(722,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t()()(),i(723,"tr",19)(724,"td",20)(725,"div",21)(726,"span",22),e(727,"t-required"),o(728,"br"),t()()(),i(729,"td",23)(730,"code",24),e(731,"boolean"),t()(),i(732,"td",25)(733,"p")(734,"code"),e(735,"false"),t()()(),i(736,"td",26)(737,"em")(738,"strong"),e(739,"(opcional)"),t()(),i(740,"p"),e(741,"Define a sele\xE7\xE3o como obrigat\xF3ria. Caso t-disabled esteja habilitado, a obrigatoriedade ser\xE1 ignorada."),t()()(),i(742,"tr",19)(743,"td",20)(744,"div",27)(745,"span",28),e(746," (t-selected)"),o(747,"br"),t()()(),i(748,"td",23)(749,"code",29),e(750,"EventEmitter"),t()(),i(751,"td",25),e(752,"-"),t(),i(753,"td",26)(754,"em")(755,"strong"),e(756,"(opcional)"),t()(),i(757,"p"),e(758,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(759,"strong"),e(760,"t-field-value"),t(),e(761,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(762,"tr",19)(763,"td",20)(764,"div",21)(765,"span",22),e(766,"t-show-required"),o(767,"br"),t()()(),i(768,"td",23)(769,"code",24),e(770,"boolean"),t()(),i(771,"td",25)(772,"p")(773,"code"),e(774,"false"),t()()(),i(775,"td",26)(776,"em")(777,"strong"),e(778,"(opcional)"),t()(),i(779,"p"),e(780,"Exibe um indicador de obrigatoriedade no campo de busca."),t(),i(781,"blockquote")(782,"p"),e(783,"Necess\xE1rio que "),i(784,"code"),e(785,"t-required"),t(),e(786," esteja habilitado e "),i(787,"code"),e(788,"t-label"),t(),e(789," definido."),t()()()(),i(790,"tr",19)(791,"td",20)(792,"div",21)(793,"span",22),e(794," t-size"),o(795,"br"),t()()(),i(796,"td",23)(797,"code",35),e(798,"string"),t()(),i(799,"td",25)(800,"p")(801,"code"),e(802,"medium"),t()()(),i(803,"td",26)(804,"em")(805,"strong"),e(806,"(opcional)"),t()(),i(807,"p"),e(808,"Define o tamanho do componente:"),t(),i(809,"ul")(810,"li")(811,"code"),e(812,"small"),t()(),i(813,"li")(814,"code"),e(815,"medium"),t()()(),i(816,"blockquote")(817,"p"),e(818,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(819,"code"),e(820,"medium"),t(),e(821,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(822,"a",46),e(823,"po-theme"),t(),e(824,"."),t()()()()()(),i(825,"po-accordion-item",47)(826,"table",48)(827,"tr",19)(828,"th",49)(829,"div",21)(830,"h4")(831,"span",22),e(832," showAdditionalHelp "),t()()()()(),i(833,"tr",26)(834,"td",26)(835,"p"),e(836,"M\xE9todo que exibe "),i(837,"code"),e(838,"t-helper"),t(),e(839," ou executa a a\xE7\xE3o definida em "),i(840,"code"),e(841,"t-helper{eventOnClick}"),t(),e(842,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(843,"code"),e(844,"t-keydown"),t(),e(845,"."),t(),i(846,"pre")(847,"code"),e(848,`<thf-lookup-data
 #lookupData
 ...
 t-helper="Mensagem de ajuda complementar"
 (t-keydown)="onKeyDown($event, lookup)"
></thf-lookup-data>
`),t()(),i(849,"pre")(850,"code"),e(851,`...
onKeyDown(event: KeyboardEvent, inp: ThfLookupDataComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(852,"br"),t()()(),T(853,2),t(),i(854,"po-tab",50),T(855,3),i(856,"po-container",5)(857,"po-accordion",6)(858,"po-accordion-item",51)(859,"h4",9)(860,"code"),e(861,"ThfLookupDataColumn"),t()(),i(862,"div",10)(863,"p"),e(864,"Interface para configura\xE7\xE3o das colunas ("),i(865,"strong"),e(866,"t-columns"),t(),e(867,"). "),t()(),i(868,"h4",15),e(869,"Propriedades"),t(),i(870,"table",16)(871,"tr",17)(872,"th",18),e(873,"Nome"),t(),i(874,"th",18),e(875,"Tipo"),t(),i(876,"th",18),e(877,"Descri\xE7\xE3o"),t()(),i(878,"tr",19)(879,"td",20)(880,"div",21)(881,"span",22),e(882," boolean"),o(883,"br"),t()()(),i(884,"td",23)(885,"code",52),e(886,"PoTableBoolean"),t()(),i(887,"td",26)(888,"em")(889,"strong"),e(890,"(opcional)"),t()(),i(891,"p"),e(892,"Define um objeto do tipo "),i(893,"code"),e(894,"PoTableBoolean"),t(),e(895," para as colunas do tipo "),i(896,"em"),e(897,"boolean"),t(),e(898,". Por exemplo:"),t(),i(899,"pre")(900,"code"),e(901,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),t()(),i(902,"blockquote")(903,"p"),e(904,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(905,"em"),e(906,"boolean"),t(),e(907,`,
esta exibir\xE1 por padr\xE3o `),i(908,"code"),e(909,"Sim"),t(),e(910," e "),i(911,"code"),e(912,"N\xE3o"),t(),e(913," de acordo com os valores "),i(914,"em"),e(915,"booleanos"),t(),e(916,"."),t()()()(),i(917,"tr",19)(918,"td",20)(919,"div",21)(920,"span",22),e(921," booleanFalse"),o(922,"br"),t()()(),i(923,"td",23)(924,"code",35),e(925,"string"),t()(),i(926,"td",26)(927,"em")(928,"strong"),e(929,"(opcional)"),t()(),i(930,"p"),e(931,"Texto exibido quando o valor da coluna for "),i(932,"em"),e(933,"false"),t(),e(934,"."),t()()(),i(935,"tr",19)(936,"td",20)(937,"div",21)(938,"span",22),e(939," booleanTrue"),o(940,"br"),t()()(),i(941,"td",23)(942,"code",35),e(943,"string"),t()(),i(944,"td",26)(945,"em")(946,"strong"),e(947,"(opcional)"),t()(),i(948,"p"),e(949,"Texto exibido quando o valor da coluna for "),i(950,"em"),e(951,"true"),t(),e(952,"."),t()()(),i(953,"tr",19)(954,"td",20)(955,"div",21)(956,"span",22),e(957," disabled"),o(958,"br"),t()()(),i(959,"td",23)(960,"code",53),e(961,"Function"),t()(),i(962,"td",26)(963,"em")(964,"strong"),e(965,"(opcional)"),t()(),i(966,"p"),e(967,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(968,"em"),e(969,"link"),t(),e(970," e sua a\xE7\xE3o."),t(),i(971,"blockquote")(972,"p"),e(973,"Propriedade dispon\xEDvel nas colunas do tipo "),i(974,"code"),e(975,"link"),t(),e(976,"."),t()()()(),i(977,"tr",19)(978,"td",20)(979,"div",21)(980,"span",22),e(981," format"),o(982,"br"),t()()(),i(983,"td",23)(984,"code",35),e(985,"string"),t()(),i(986,"td",26)(987,"em")(988,"strong"),e(989,"(opcional)"),t()(),i(990,"p"),e(991,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(992,"ul")(993,"li"),e(994,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(995,"li"),e(996,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(997,"tr",19)(998,"td",20)(999,"div",21)(1e3,"span",22),e(1001," label"),o(1002,"br"),t()()(),i(1003,"td",23)(1004,"code",35),e(1005,"string"),t()(),i(1006,"td",26)(1007,"em")(1008,"strong"),e(1009,"(opcional)"),t()(),i(1010,"p"),e(1011,"Texto para t\xEDtulo da coluna."),t(),i(1012,"p"),e(1013,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(1014,"em"),e(1015,"label"),t(),e(1016," o valor da propriedade "),i(1017,"em"),e(1018,"property"),t(),e(1019," com a primeira letra em mai\xFAsculo."),t()()(),i(1020,"tr",19)(1021,"td",20)(1022,"div",21)(1023,"span",22),e(1024," labels"),o(1025,"br"),t()()(),i(1026,"td",23)(1027,"code",54),e(1028,"Array<PoTableColumnLabel>"),t()(),i(1029,"td",26)(1030,"em")(1031,"strong"),e(1032,"(opcional)"),t()(),i(1033,"p"),e(1034,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(1035,"code"),e(1036,"PoTableColumnLabel"),t(),e(1037," na qual devem ser definidas os labels. Por exemplo:"),t(),i(1038,"pre")(1039,"code"),e(1040,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),t()()()(),i(1041,"tr",19)(1042,"td",20)(1043,"div",21)(1044,"span",22),e(1045," locale"),o(1046,"br"),t()()(),i(1047,"td",23)(1048,"code",35),e(1049,"string"),t()(),i(1050,"td",26)(1051,"em")(1052,"strong"),e(1053,"(opcional)"),t()(),i(1054,"p"),e(1055,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(1056,"a",55)(1057,"code"),e(1058,"I18n"),t()()(),i(1059,"p"),e(1060,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(1061,"pre")(1062,"code"),e(1063,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},
`),t()(),i(1064,"blockquote")(1065,"p"),e(1066,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(1067,"p"),e(1068,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(1069,"p"),e(1070,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(1071,"a",55)(1072,"code"),e(1073,"I18n"),t()()()(),i(1074,"p"),e(1075,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(1076,"pre")(1077,"code"),e(1078,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}
`),t()(),i(1079,"blockquote")(1080,"p"),e(1081,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(1082,"code"),e(1083,"number"),t(),e(1084," e "),i(1085,"code"),e(1086,"currency"),t(),e(1087,"."),t()()()(),i(1088,"tr",19)(1089,"td",20)(1090,"div",21)(1091,"span",22),e(1092," property"),o(1093,"br"),t()()(),i(1094,"td",23)(1095,"code",35),e(1096,"string"),t()(),i(1097,"td",26)(1098,"em")(1099,"strong"),e(1100,"(opcional)"),t()(),i(1101,"p"),e(1102,"Nome identificador da coluna."),t()()(),i(1103,"tr",19)(1104,"td",20)(1105,"div",21)(1106,"span",22),e(1107," type"),o(1108,"br"),t()()(),i(1109,"td",23)(1110,"code",35),e(1111,"string"),t()(),i(1112,"td",26)(1113,"em")(1114,"strong"),e(1115,"(opcional)"),t()(),i(1116,"p"),e(1117,"Tipo da coluna:"),t(),i(1118,"ul")(1119,"li"),e(1120,"string (padr\xE3o): textos"),t(),i(1121,"li"),e(1122,"number: valores num\xE9ricos"),t(),i(1123,"li"),e(1124,"date: data"),t(),i(1125,"li"),e(1126,"currency: valores monet\xE1rios"),t(),i(1127,"li"),e(1128,"dateTime: data e hora"),t()()()(),i(1129,"tr",19)(1130,"td",20)(1131,"div",21)(1132,"span",22),e(1133," visible"),o(1134,"br"),t()()(),i(1135,"td",23)(1136,"code",24),e(1137,"boolean"),t()(),i(1138,"td",26)(1139,"em")(1140,"strong"),e(1141,"(opcional)"),t()(),i(1142,"p"),e(1143,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(1144,"strong"),e(1145,"gerenciador de colunas"),t(),e(1146,"."),t(),i(1147,"blockquote")(1148,"p"),e(1149,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(1150,"code"),e(1151,"p-max-columns"),t(),e(1152,"."),t()()()(),i(1153,"tr",19)(1154,"td",20)(1155,"div",21)(1156,"span",22),e(1157," width"),o(1158,"br"),t()()(),i(1159,"td",23)(1160,"code",35),e(1161,"string"),t()(),i(1162,"td",26)(1163,"em")(1164,"strong"),e(1165,"(opcional)"),t()(),i(1166,"p"),e(1167,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(1168,"po-accordion-item",56)(1169,"h4",9)(1170,"code"),e(1171,"ThfLookupDataFilterSearchSelect"),t()(),i(1172,"div",10)(1173,"p"),e(1174,"Interface que define as colunas para busca ("),i(1175,"strong"),e(1176,"t-filter-search-select"),t(),e(1177,") "),t()(),i(1178,"h4",15),e(1179,"Propriedades"),t(),i(1180,"table",16)(1181,"tr",17)(1182,"th",18),e(1183,"Nome"),t(),i(1184,"th",18),e(1185,"Tipo"),t(),i(1186,"th",18),e(1187,"Descri\xE7\xE3o"),t()(),i(1188,"tr",19)(1189,"td",20)(1190,"div",21)(1191,"span",22),e(1192," label"),o(1193,"br"),t()()(),i(1194,"td",23)(1195,"code",35),e(1196,"string"),t()(),i(1197,"td",26)(1198,"p"),e(1199,"R\xF3tulo da coluna"),t()()(),i(1200,"tr",19)(1201,"td",20)(1202,"div",21)(1203,"span",22),e(1204," value"),o(1205,"br"),t()()(),i(1206,"td",23)(1207,"code",35),e(1208,"string"),t()(),i(1209,"td",26)(1210,"p"),e(1211,"Coluna"),t()()()()(),i(1212,"po-accordion-item",57)(1213,"h4",9)(1214,"code"),e(1215,"ThfLookupDataFilter"),t()(),i(1216,"div",10)(1217,"p"),e(1218,"Interface para definir o tipo de busca via servi\xE7o. "),t()(),i(1219,"table",48)(1220,"tr",19)(1221,"th",49)(1222,"div",21)(1223,"h4")(1224,"span",22),e(1225," fetchItems "),t()()()()(),i(1226,"tr",26)(1227,"td",26)(1228,"p"),e(1229,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(1230,"em"),e(1231,"Observable"),t(),e(1232," com a resposta da API no formato { items: [] }."),t()()()(),i(1233,"h5")(1234,"b"),e(1235,"Par\xE2metros"),t()(),i(1236,"table",16)(1237,"tr",17)(1238,"th",18),e(1239,"Nome"),t(),i(1240,"th",18),e(1241,"Tipo"),t(),i(1242,"th",18),e(1243,"Descri\xE7\xE3o"),t()(),i(1244,"tr",19)(1245,"td",20),e(1246," query"),t(),i(1247,"td",23)(1248,"code",58),e(1249," string "),t()(),i(1250,"td",26)(1251,"p"),e(1252,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(1253,"tr",19)(1254,"td",20),e(1255," filterParams"),t(),i(1256,"td",23)(1257,"code",58),e(1258," any "),t()(),i(1259,"td",26)(1260,"p"),e(1261,"Valor informado atrav\xE9s da propriedade "),i(1262,"strong"),e(1263,"t-filter-params"),t(),e(1264,"."),t()()()(),o(1265,"br"),i(1266,"table",48)(1267,"tr",19)(1268,"th",49)(1269,"div",21)(1270,"h4")(1271,"span",22),e(1272," getFilteredItems "),t()()()()(),i(1273,"tr",26)(1274,"td",26)(1275,"p"),e(1276,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(1277,"em"),e(1278,"Observable"),t(),e(1279," com a resposta da API no formato da interface "),i(1280,"strong"),e(1281,"ThfLookupResponseApi"),t(),e(1282,"."),t()()()(),i(1283,"h5")(1284,"b"),e(1285,"Par\xE2metros"),t()(),i(1286,"table",16)(1287,"tr",17)(1288,"th",18),e(1289,"Nome"),t(),i(1290,"th",18),e(1291,"Tipo"),t(),i(1292,"th",18),e(1293,"Descri\xE7\xE3o"),t()(),i(1294,"tr",19)(1295,"td",20),e(1296," params"),t(),i(1297,"td",23)(1298,"code",58),e(1299," ThfLookupFilteredItemsParams "),t()(),i(1300,"td",26)(1301,"p"),e(1302,"Objeto enviado por par\xE2metro que implementa a interface "),i(1303,"strong"),e(1304,"ThfLookupFilteredItemsParams"),t(),e(1305,"."),t()()()(),o(1306,"br"),i(1307,"table",48)(1308,"tr",19)(1309,"th",49)(1310,"div",21)(1311,"h4")(1312,"span",22),e(1313," getObjectByValue "),t()()()()(),i(1314,"tr",26)(1315,"td",26)(1316,"p"),e(1317,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1318,"p"),e(1319,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1320,"code"),e(1321,"value"),t(),e(1322,` ser\xE1 enviado como uma lista de valores
e o `),i(1323,"em"),e(1324,"Observable"),t(),e(1325," deve retornar uma lista de objetos."),t()()()(),i(1326,"h5")(1327,"b"),e(1328,"Par\xE2metros"),t()(),i(1329,"table",16)(1330,"tr",17)(1331,"th",18),e(1332,"Nome"),t(),i(1333,"th",18),e(1334,"Tipo"),t(),i(1335,"th",18),e(1336,"Descri\xE7\xE3o"),t()(),i(1337,"tr",19)(1338,"td",20),e(1339," value"),t(),i(1340,"td",23)(1341,"code",35),e(1342," string "),t(),i(1343,"code",34),e(1344," Array<any> "),t()(),i(1345,"td",26)(1346,"p"),e(1347,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1348,"tr",19)(1349,"td",20),e(1350," filterParams"),t(),i(1351,"td",23)(1352,"code",58),e(1353," any "),t()(),i(1354,"td",26)(1355,"p"),e(1356,"Valor informado atrav\xE9s da propriedade "),i(1357,"strong"),e(1358,"t-filter-params"),t(),e(1359,"."),t()()()(),o(1360,"br"),t(),i(1361,"po-accordion-item",59)(1362,"h4",9)(1363,"code"),e(1364,"ThfLookupDataFilteredItemsParams"),t()(),i(1365,"div",10)(1366,"p"),e(1367,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1368,"strong"),e(1369,"getFilteredItems"),t(),e(1370,". "),t()(),i(1371,"h4",15),e(1372,"Propriedades"),t(),i(1373,"table",16)(1374,"tr",17)(1375,"th",18),e(1376,"Nome"),t(),i(1377,"th",18),e(1378,"Tipo"),t(),i(1379,"th",18),e(1380,"Descri\xE7\xE3o"),t()(),i(1381,"tr",19)(1382,"td",20)(1383,"div",21)(1384,"span",22),e(1385," filter"),o(1386,"br"),t()()(),i(1387,"td",23)(1388,"code",60),e(1389,`{ [key: string]: any;
}`),t()(),i(1390,"td",26)(1391,"em")(1392,"strong"),e(1393,"(opcional)"),t()(),i(1394,"p"),e(1395,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1396,"tr",19)(1397,"td",20)(1398,"div",21)(1399,"span",22),e(1400," filterParams"),o(1401,"br"),t()()(),i(1402,"td",23)(1403,"code",36),e(1404,"any"),t()(),i(1405,"td",26)(1406,"em")(1407,"strong"),e(1408,"(opcional)"),t()(),i(1409,"p"),e(1410,"Valor informado atrav\xE9s da propriedade "),i(1411,"code"),e(1412,"t-filter-params"),t(),e(1413,"."),t()()(),i(1414,"tr",19)(1415,"td",20)(1416,"div",21)(1417,"span",22),e(1418," order"),o(1419,"br"),t()()(),i(1420,"td",23)(1421,"code",35),e(1422,"string"),t()(),i(1423,"td",26)(1424,"em")(1425,"strong"),e(1426,"(opcional)"),t()(),i(1427,"p"),e(1428,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1429,"ul")(1430,"li"),e(1431,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1432,"code"),e(1433,"-<colunaOrdenada>"),t(),e(1434,", por exemplo "),i(1435,"code"),e(1436,"-name"),t(),e(1437,"."),t(),i(1438,"li"),e(1439,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1440,"code"),e(1441,"<colunaOrdenada>"),t(),e(1442,", por exemplo "),i(1443,"code"),e(1444,"name"),t(),e(1445,"."),t()()()(),i(1446,"tr",19)(1447,"td",20)(1448,"div",21)(1449,"span",22),e(1450," page"),o(1451,"br"),t()()(),i(1452,"td",23)(1453,"code",42),e(1454,"number"),t()(),i(1455,"td",26)(1456,"em")(1457,"strong"),e(1458,"(opcional)"),t()(),i(1459,"p"),e(1460,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1461,"tr",19)(1462,"td",20)(1463,"div",21)(1464,"span",22),e(1465," pageSize"),o(1466,"br"),t()()(),i(1467,"td",23)(1468,"code",42),e(1469,"number"),t()(),i(1470,"td",26)(1471,"em")(1472,"strong"),e(1473,"(opcional)"),t()(),i(1474,"p"),e(1475,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1476,"po-accordion-item",61)(1477,"h4",9)(1478,"code"),e(1479,"ThfLookupDataGridProperties"),t()(),i(1480,"div",10)(1481,"p"),e(1482,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup. "),t()(),i(1483,"h4",15),e(1484,"Propriedades"),t(),i(1485,"table",16)(1486,"tr",17)(1487,"th",18),e(1488,"Nome"),t(),i(1489,"th",18),e(1490,"Tipo"),t(),i(1491,"th",18),e(1492,"Descri\xE7\xE3o"),t()(),i(1493,"tr",19)(1494,"td",20)(1495,"div",21)(1496,"span",22),e(1497," actionRight"),o(1498,"br"),t()()(),i(1499,"td",23)(1500,"code",24),e(1501,"boolean"),t()(),i(1502,"td",26)(1503,"em")(1504,"strong"),e(1505,"(opcional)"),t()(),i(1506,"p"),e(1507,"Posiciona a coluna de a\xE7\xF5es ("),i(1508,"code"),e(1509,"t-actions"),t(),e(1510,") \xE0 direita."),t()()(),i(1511,"tr",19)(1512,"td",20)(1513,"div",21)(1514,"span",22),e(1515," actions"),o(1516,"br"),t()()(),i(1517,"td",23)(1518,"code",62),e(1519,"Array<ThfTableAction>"),t()(),i(1520,"td",26)(1521,"em")(1522,"strong"),e(1523,"(opcional)"),t()(),i(1524,"p"),e(1525,"Permite definir uma lista de a\xE7\xF5es que implementam a interface "),i(1526,"strong"),e(1527,"ThfTableAction"),t(),e(1528,`, adicionando uma coluna
ao componente thf-grid do lookup. Se houver apenas uma a\xE7\xE3o v\xE1lida, ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrupar m\xFAltiplas a\xE7\xF5es e exibe o \xEDcone `),i(1529,"a",63)(1530,"strong"),e(1531,"an an-dots-three-vertical"),t()(),e(1532,`. Ao
pressionar o \xEDcone, todas as a\xE7\xF5es ser\xE3o listadas.`),t(),i(1533,"p")(1534,"strong"),e(1535,"A coluna n\xE3o ser\xE1 exibida se:"),t()(),i(1536,"ul")(1537,"li"),e(1538,"a lista contiver valores inv\xE1lidos ou indefinidos;"),t(),i(1539,"li"),e(1540,"houver apenas uma a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),t()(),i(1541,"pre")(1542,"code",31),e(1543,`// Exemplo de uso:
<thf-lookup
 [t-grid-properties]="gridProperties"
></thf-lookup>
`),t()(),i(1544,"pre")(1545,"code",32),e(1546,`gridProperties: ThfLookupGridProperties = {
  actions: [
    {
      label: '',
      action: (e: any) => {
        this.poNotification.information(\`\${e.id} - \${e.name} \`);
      },
      icon: 'ICON_MENU_OPEN',
      fixed: true
    }
  ]
};

constructor(private poNotification: PoNotificationService) {}
`),t()()()(),i(1547,"tr",19)(1548,"td",20)(1549,"div",21)(1550,"span",22),e(1551," autoSize"),o(1552,"br"),t()()(),i(1553,"td",23)(1554,"code",24),e(1555,"boolean"),t()(),i(1556,"td",26)(1557,"em")(1558,"strong"),e(1559,"(opcional)"),t()(),i(1560,"p"),e(1561,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1562,"strong"),e(1563,"resizable"),t(),e(1564," esteja habilitada."),t(),i(1565,"blockquote")(1566,"p"),e(1567,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1568,"tr",19)(1569,"td",20)(1570,"div",21)(1571,"span",22),e(1572," autoSizeOnScroll"),o(1573,"br"),t()()(),i(1574,"td",23)(1575,"code",24),e(1576,"boolean"),t()(),i(1577,"td",26)(1578,"em")(1579,"strong"),e(1580,"(opcional)"),t()(),i(1581,"p"),e(1582,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1583,"p"),e(1584,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1585,"p"),e(1586,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1587,"code"),e(1588,"t-page-size-virtual"),t(),e(1589," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1590,"blockquote")(1591,"p")(1592,"strong"),e(1593,"Pr\xE9-requisitos"),t(),e(1594,": Requer que as propriedades "),i(1595,"code"),e(1596,"autoSize"),t(),e(1597,", "),i(1598,"code"),e(1599,"resizable"),t(),e(1600,`
e `),i(1601,"code"),e(1602,"virtualScroll"),t(),e(1603," estejam habilitadas."),t()(),i(1604,"blockquote")(1605,"p")(1606,"strong"),e(1607,"Incompatibilidade"),t(),e(1608,": N\xE3o funciona com "),i(1609,"code"),e(1610,"t-grid-row-actions"),t(),e(1611," habilitado;"),t()(),i(1612,"p")(1613,"strong"),e(1614,"Exemplo de uso:"),t()(),i(1615,"pre")(1616,"code",31),e(1617,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>
`),t()()()(),i(1618,"tr",19)(1619,"td",20)(1620,"div",21)(1621,"span",22),e(1622," draggable"),o(1623,"br"),t()()(),i(1624,"td",23)(1625,"code",24),e(1626,"boolean"),t()(),i(1627,"td",26)(1628,"em")(1629,"strong"),e(1630,"(opcional)"),t()(),i(1631,"p"),e(1632,"Habilita o Drag and Drop nas colunas."),t()()(),i(1633,"tr",19)(1634,"td",20)(1635,"div",21)(1636,"span",22),e(1637," group"),o(1638,"br"),t()()(),i(1639,"td",23)(1640,"code",64),e(1641,"Array<string>"),t()(),i(1642,"td",26)(1643,"em")(1644,"strong"),e(1645,"(opcional)"),t()(),i(1646,"p"),e(1647,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1648,"strong"),e(1649,"groupable"),t(),e(1650," esteja habilitada."),t()()(),i(1651,"tr",19)(1652,"td",20)(1653,"div",21)(1654,"span",22),e(1655," groupable"),o(1656,"br"),t()()(),i(1657,"td",23)(1658,"code",24),e(1659,"boolean "),t(),i(1660,"code",65),e(1661," GroupableSettings"),t()(),i(1662,"td",26)(1663,"em")(1664,"strong"),e(1665,"(opcional)"),t()(),i(1666,"p"),e(1667,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1668,"tr",19)(1669,"td",20)(1670,"div",21)(1671,"span",22),e(1672," hideSelectAll"),o(1673,"br"),t()()(),i(1674,"td",23)(1675,"code",24),e(1676,"boolean"),t()(),i(1677,"td",26)(1678,"em")(1679,"strong"),e(1680,"(opcional)"),t()(),i(1681,"p"),e(1682,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1683,"tr",19)(1684,"td",20)(1685,"div",21)(1686,"span",22),e(1687," resizable"),o(1688,"br"),t()()(),i(1689,"td",23)(1690,"code",24),e(1691,"boolean"),t()(),i(1692,"td",26)(1693,"em")(1694,"strong"),e(1695,"(opcional)"),t()(),i(1696,"p"),e(1697,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1698,"tr",19)(1699,"td",20)(1700,"div",21)(1701,"span",22),e(1702," selectableEntireLine"),o(1703,"br"),t()()(),i(1704,"td",23)(1705,"code",24),e(1706,"boolean"),t()(),i(1707,"td",26)(1708,"em")(1709,"strong"),e(1710,"(opcional)"),t()(),i(1711,"p"),e(1712,"Permite selecionar o item ao clicar na linha."),t()()(),i(1713,"tr",19)(1714,"td",20)(1715,"div",21)(1716,"span",22),e(1717," showDraggableIcon"),o(1718,"br"),t()()(),i(1719,"td",23)(1720,"code",24),e(1721,"boolean"),t()(),i(1722,"td",26)(1723,"em")(1724,"strong"),e(1725,"(opcional)"),t()(),i(1726,"p"),e(1727,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1728,"tr",19)(1729,"td",20)(1730,"div",21)(1731,"span",22),e(1732," showMoreDisabled"),o(1733,"br"),t()()(),i(1734,"td",23)(1735,"code",24),e(1736,"boolean"),t()(),i(1737,"td",26)(1738,"em")(1739,"strong"),e(1740,"(opcional)"),t()(),i(1741,"p"),e(1742,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1743,"tr",19)(1744,"td",20)(1745,"div",21)(1746,"span",22),e(1747," showMoreVisible"),o(1748,"br"),t()()(),i(1749,"td",23)(1750,"code",24),e(1751,"boolean"),t()(),i(1752,"td",26)(1753,"em")(1754,"strong"),e(1755,"(opcional)"),t()(),i(1756,"p"),e(1757,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1758,"strong"),e(1759,"pageable"),t(),e(1760," esteja habilitada."),t(),i(1761,"blockquote")(1762,"p"),e(1763,"Caso seja utilizado em conjunto com "),i(1764,"strong"),e(1765,"showMoreDisabled"),t(),e(1766,", a propriedade "),i(1767,"strong"),e(1768,"showMoreVisible"),t(),e(1769," ter\xE1 prioridade."),t()()()(),i(1770,"tr",19)(1771,"td",20)(1772,"div",21)(1773,"span",22),e(1774," sort"),o(1775,"br"),t()()(),i(1776,"td",23)(1777,"code",66),e(1778,"Array<{ field: string; dir: 'asc' "),t(),i(1779,"code",67),e(1780,` 'desc';
}>`),t()(),i(1781,"td",26)(1782,"em")(1783,"strong"),e(1784,"(opcional)"),t()(),i(1785,"p"),e(1786,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(1787,"pre")(1788,"code",32),e(1789,`sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];
`),t()()()(),i(1790,"tr",19)(1791,"td",20)(1792,"div",21)(1793,"span",22),e(1794," sortable"),o(1795,"br"),t()()(),i(1796,"td",23)(1797,"code",24),e(1798,"boolean"),t()(),i(1799,"td",26)(1800,"em")(1801,"strong"),e(1802,"(opcional)"),t()(),i(1803,"p"),e(1804,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(1805,"tr",19)(1806,"td",20)(1807,"div",21)(1808,"span",22),e(1809," spacing"),o(1810,"br"),t()()(),i(1811,"td",23)(1812,"code",68),e(1813,"'extraSmall' "),t(),i(1814,"code",69),e(1815," 'small' "),t(),i(1816,"code",70),e(1817," 'medium' "),t(),i(1818,"code",71),e(1819," 'large'"),t()(),i(1820,"td",26)(1821,"em")(1822,"strong"),e(1823,"(opcional)"),t()(),i(1824,"p"),e(1825,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(1826,"strong"),e(1827,"ThfColumnSpacing"),t(),e(1828,"."),t()()(),i(1829,"tr",19)(1830,"td",20)(1831,"div",21)(1832,"span",22),e(1833," striped"),o(1834,"br"),t()()(),i(1835,"td",23)(1836,"code",24),e(1837,"boolean"),t()(),i(1838,"td",26)(1839,"em")(1840,"strong"),e(1841,"(opcional)"),t()(),i(1842,"p"),e(1843,"Define o estilo listrado no grid (striped)."),t()()(),i(1844,"tr",19)(1845,"td",20)(1846,"div",21)(1847,"span",22),e(1848," virtualScroll"),o(1849,"br"),t()()(),i(1850,"td",23)(1851,"code",24),e(1852,"boolean"),t()(),i(1853,"td",26)(1854,"em")(1855,"strong"),e(1856,"(opcional)"),t()(),i(1857,"p"),e(1858,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(1859,"po-accordion-item",72)(1860,"h4",9)(1861,"code"),e(1862,"ThfLookupDataKeysLabel"),t()(),i(1863,"div",10)(1864,"p"),e(1865,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(1866,"strong"),e(1867,"t-keys-label"),t(),e(1868,"). "),t()(),i(1869,"h4",15),e(1870,"Propriedades"),t(),i(1871,"table",16)(1872,"tr",17)(1873,"th",18),e(1874,"Nome"),t(),i(1875,"th",18),e(1876,"Tipo"),t(),i(1877,"th",18),e(1878,"Descri\xE7\xE3o"),t()(),i(1879,"tr",19)(1880,"td",20)(1881,"div",21)(1882,"span",22),e(1883," label"),o(1884,"br"),t()()(),i(1885,"td",23)(1886,"code",35),e(1887,"string"),t()(),i(1888,"td",26)(1889,"p"),e(1890,"Texto exibido"),t()()(),i(1891,"tr",19)(1892,"td",20)(1893,"div",21)(1894,"span",22),e(1895," value"),o(1896,"br"),t()()(),i(1897,"td",23)(1898,"code",35),e(1899,"string"),t()(),i(1900,"td",26)(1901,"p"),e(1902,"Coluna"),t()()()()(),i(1903,"po-accordion-item",73)(1904,"h4",9)(1905,"code"),e(1906,"ThfLookupDataLiterals"),t()(),i(1907,"div",10)(1908,"p"),e(1909,"Interface para customizar literais ("),i(1910,"strong"),e(1911,"t-literals"),t(),e(1912,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(1913,"h4",15),e(1914,"Propriedades"),t(),i(1915,"table",16)(1916,"tr",17)(1917,"th",18),e(1918,"Nome"),t(),i(1919,"th",18),e(1920,"Tipo"),t(),i(1921,"th",18),e(1922,"Descri\xE7\xE3o"),t()(),i(1923,"tr",19)(1924,"td",20)(1925,"div",21)(1926,"span",22),e(1927," loadMoreData"),o(1928,"br"),t()()(),i(1929,"td",23)(1930,"code",35),e(1931,"string"),t()(),i(1932,"td",26)(1933,"em")(1934,"strong"),e(1935,"(opcional)"),t()(),i(1936,"p"),e(1937,"Label do "),i(1938,"code"),e(1939,"button"),t(),e(1940," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(1941,"tr",19)(1942,"td",20)(1943,"div",21)(1944,"span",22),e(1945," loadingData"),o(1946,"br"),t()()(),i(1947,"td",23)(1948,"code",35),e(1949,"string"),t()(),i(1950,"td",26)(1951,"em")(1952,"strong"),e(1953,"(opcional)"),t()(),i(1954,"p"),e(1955,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(1956,"tr",19)(1957,"td",20)(1958,"div",21)(1959,"span",22),e(1960," multipleItems"),o(1961,"br"),t()()(),i(1962,"td",23)(1963,"code",35),e(1964,"string"),t()(),i(1965,"td",26)(1966,"em")(1967,"strong"),e(1968,"(opcional)"),t()(),i(1969,"p"),e(1970,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(1971,"tr",19)(1972,"td",20)(1973,"div",21)(1974,"span",22),e(1975," noColumns"),o(1976,"br"),t()()(),i(1977,"td",23)(1978,"code",35),e(1979,"string"),t()(),i(1980,"td",26)(1981,"em")(1982,"strong"),e(1983,"(opcional)"),t()(),i(1984,"p"),e(1985,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(1986,"tr",19)(1987,"td",20)(1988,"div",21)(1989,"span",22),e(1990," noData"),o(1991,"br"),t()()(),i(1992,"td",23)(1993,"code",35),e(1994,"string"),t()(),i(1995,"td",26)(1996,"em")(1997,"strong"),e(1998,"(opcional)"),t()(),i(1999,"p"),e(2e3,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(2001,"tr",19)(2002,"td",20)(2003,"div",21)(2004,"span",22),e(2005," oneItem"),o(2006,"br"),t()()(),i(2007,"td",23)(2008,"code",35),e(2009,"string"),t()(),i(2010,"td",26)(2011,"em")(2012,"strong"),e(2013,"(opcional)"),t()(),i(2014,"p"),e(2015,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(2016,"tr",19)(2017,"td",20)(2018,"div",21)(2019,"span",22),e(2020," placeholder"),o(2021,"br"),t()()(),i(2022,"td",23)(2023,"code",35),e(2024,"string"),t()(),i(2025,"td",26)(2026,"em")(2027,"strong"),e(2028,"(opcional)"),t()(),i(2029,"p"),e(2030,"Texto exibido no placeholder do input."),t()()()()(),i(2031,"po-accordion-item",74)(2032,"h4",9)(2033,"code"),e(2034,"ThfLookupDataResponseApi"),t()(),i(2035,"div",10)(2036,"p"),e(2037,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(2038,"blockquote")(2039,"p"),e(2040,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(2041,"h4",15),e(2042,"Propriedades"),t(),i(2043,"table",16)(2044,"tr",17)(2045,"th",18),e(2046,"Nome"),t(),i(2047,"th",18),e(2048,"Tipo"),t(),i(2049,"th",18),e(2050,"Descri\xE7\xE3o"),t()(),i(2051,"tr",19)(2052,"td",20)(2053,"div",21)(2054,"span",22),e(2055," hasNext"),o(2056,"br"),t()()(),i(2057,"td",23)(2058,"code",24),e(2059,"boolean"),t()(),i(2060,"td",26)(2061,"p"),e(2062,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(2063,"tr",19)(2064,"td",20)(2065,"div",21)(2066,"span",22),e(2067," items"),o(2068,"br"),t()()(),i(2069,"td",23)(2070,"code",34),e(2071,"Array<any>"),t()(),i(2072,"td",26)(2073,"p"),e(2074,"Lista de itens retornados."),t()()()()()()(),T(2075,4),t(),i(2076,"po-tab",75)(2077,"po-container",5),T(2078,5),i(2079,"h3"),e(2080,"Tokens customiz\xE1veis"),t(),i(2081,"p"),e(2082,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(2083,"blockquote")(2084,"p"),e(2085,"Para maiores informa\xE7\xF5es, acesse o guia "),i(2086,"a",76),e(2087,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(2088,"."),t()(),i(2089,"p"),e(2090,"O componente "),i(2091,"strong"),e(2092,"THF-Lookup-Data"),t(),e(2093," \xE9 composto pelos componentes "),i(2094,"strong"),e(2095,"PO-Search"),t(),e(2096," e "),i(2097,"strong"),e(2098,"THF-Grid"),t(),e(2099,"."),t(),i(2100,"p"),e(2101,"Verifique os tokens dispon\xEDveis para customiza\xE7\xE3o em:"),t(),i(2102,"p")(2103,"strong"),e(2104,"- PO-Search:"),t(),e(2105," \xA0"),i(2106,"a",77),e(2107,"https://po-ui.io/documentation/po-search"),t()(),i(2108,"p")(2109,"strong"),e(2110,"- THF-Grid:"),t(),e(2111," \xA0"),i(2112,"a",78),e(2113,"https://thf.totvs.app/v19/documentation/thf-grid"),t()()(),T(2114,6),t(),i(2115,"po-tab",79),T(2116,7),t()()())},dependencies:[V,$,g,ne,Q],encapsulation:2})}}return d})();var Hi=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","labs",""]]],Ui=["[overview]","[especificacao-before]","[especificacao-after]","[labs]"],Dt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let k=E.querySelector(".po-tab-button-label");k&&k?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(I(Y))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-splitter-pane"]],viewQuery:function(r,n){if(r&1&&F(Q,5)(V,5),r&2){let l;D(l=w())&&(n.tabs=l.first),D(l=w())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Ui,decls:140,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(X(Hi),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),T(4),t(),i(5,"po-tab",4),T(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterPaneComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter-pane"),t(),e(21," representa uma das se\xE7\xF5es que comp\xF5em o "),i(22,"code"),e(23,"thf-splitter"),t(),e(24,"."),t(),i(25,"p"),e(26,"Devem ser utilizados "),i(27,"strong"),e(28,"exatamente dois panes"),t(),e(29," por splitter; panes adicionais ser\xE3o ignorados."),t(),i(30,"p"),e(31,"Cada "),i(32,"code"),e(33,"pane"),t(),e(34," se ajusta dinamicamente conforme o redimensionamento."),t(),i(35,"pre")(36,"code",11),e(37,`<thf-splitter>
 <thf-splitter-pane [(t-size)]="50%">
   Conte\xFAdo do painel
 </thf-splitter-pane>
 ...
</thf-splitter>
`),t()()(),i(38,"div",12)(39,"h4",13),e(40,"Seletor"),t(),i(41,"pre",14),e(42,`<thf-splitter-pane
  t-scrollable="boolean, any"
  t-size="string"
  (t-size-change)="EventEmitter" >
</thf-splitter-pane>
`),t()()(),i(43,"po-accordion-item",15)(44,"h4",16),e(45,"Propriedades"),t(),i(46,"table",17)(47,"tr",18)(48,"th",19),e(49,"Nome"),t(),i(50,"th",19),e(51,"Tipo"),t(),i(52,"th",19),e(53,"Padr\xE3o"),t(),i(54,"th",19),e(55,"Descri\xE7\xE3o"),t()(),i(56,"tr",20)(57,"td",21)(58,"div",22)(59,"span",23),e(60," t-scrollable"),o(61,"br"),t()()(),i(62,"td",24)(63,"code",25),e(64,"boolean, any"),t()(),i(65,"td",26)(66,"p"),e(67,"false"),t()(),i(68,"td",27)(69,"p"),e(70,`Habilita a rolagem horizontal/vertical do pane quando o conte\xFAdo exceder o valor de tamanho definido. A rolagem \xE9 aplicada
somente se o tamanho m\xEDnimo for atingido durante o redimensionamento.`),t()()(),i(71,"tr",20)(72,"td",21)(73,"div",22)(74,"span",23),e(75," t-size"),o(76,"br"),t()()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"p"),e(84,"Define o tamanho inicial do pane (% ou px), respeitando os limites entre "),i(85,"strong"),e(86,"30% e 70%"),t(),e(87,` do tamanho total
do splitter.`),t(),i(88,"p"),e(89,"Suporta two-way binding com "),i(90,"code"),e(91,"t-size-change"),t(),e(92,"."),t(),i(93,"blockquote")(94,"p"),e(95,"Apenas um pane pode definir "),i(96,"code"),e(97,"t-size"),t(),e(98,`; caso contr\xE1rio, ser\xE1 exibido um erro no console.
Quando o valor definido em `),i(99,"code"),e(100,"px"),t(),e(101,` estiver fora dos limites percentuais, ao realizar o redimensionamento os limites de 30% a 70% ser\xE3o aplicados automaticamente.
O uso de `),i(102,"code"),e(103,"px"),t(),e(104," \xE9 \xFAtil para cen\xE1rios onde o "),i(105,"code"),e(106,"thf-splitter"),t(),e(107," est\xE1 com "),i(108,"code"),e(109,"t-disabled"),t(),e(110," habilitado, pois o tamanho fixo n\xE3o ser\xE1 alterado."),t()(),i(111,"pre")(112,"code",11),e(113,`<!-- One-way -->
<thf-splitter-pane [t-size]="'50%'">

<!-- Two-way -->
<thf-splitter-pane [(t-size)]="variavel">
`),t()()()(),i(114,"tr",20)(115,"td",21)(116,"div",29)(117,"span",30),e(118," (t-size-change)"),o(119,"br"),t()()(),i(120,"td",24)(121,"code",31),e(122,"EventEmitter"),t()(),i(123,"td",26),e(124,"-"),t(),i(125,"td",27)(126,"p"),e(127,"Evento emitido quando o tamanho do pane que possui "),i(128,"code"),e(129,"t-size"),t(),e(130," \xE9 modificada. Caso nenhum pane possua "),i(131,"code"),e(132,"t-size"),t(),e(133,`, o
evento n\xE3o ser\xE1 disparado.`),t(),i(134,"pre")(135,"code",11),e(136,`<thf-splitter-pane (t-size-change)="onSizeChange($event)">
`),t()()()()()()()(),T(137,2),t(),i(138,"po-tab",32),T(139,3),t()()())},dependencies:[V,$,g,ne,Q],encapsulation:2})}}return d})();var $i=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Ki=["[overview]","[especificacao-before]","[especificacao-after]","[enums-before]","[enums-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],wt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let k=E.querySelector(".po-tab-button-label");k&&k?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(I(Y))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-splitter"]],viewQuery:function(r,n){if(r&1&&F(Q,5)(V,5),r&2){let l;D(l=w())&&(n.tabs=l.first),D(l=w())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Ki,decls:326,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ThfSplitterOrientation,","string"],[1,"language-typescript"],["p-label","Enums"],["p-label","ThfSplitterOrientation"],["p-label","Token CSS"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(X($i),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),T(4),t(),i(5,"po-tab",4),T(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter"),t(),e(21,` \xE9 respons\xE1vel por dividir visualmente a tela em duas se\xE7\xF5es, com suporte a
redimensionamento entre elas. \xC9 ideal para estruturar interfaces com pain\xE9is laterais e conte\xFAdos principais de forma
flex\xEDvel.`),t(),i(22,"p"),e(23,"O redimensionamento \xE9 realizado por meio de um "),i(24,"em"),e(25,"trigger"),t(),e(26,` interativo, que pode ser manipulado com o mouse ou pelo
teclado, utilizando as teclas `),i(27,"code"),e(28,"\u2190"),t(),e(29," e "),i(30,"code"),e(31,"\u2192"),t(),e(32," na orienta\xE7\xE3o "),i(33,"code"),e(34,"horizontal"),t(),e(35,", e "),i(36,"code"),e(37,"\u2191"),t(),e(38," e "),i(39,"code"),e(40,"\u2193"),t(),e(41," na orienta\xE7\xE3o "),i(42,"code"),e(43,"vertical"),t(),e(44,". O "),i(45,"em"),e(46,"trigger"),t(),e(47," recebe foco ao navegar com "),i(48,"code"),e(49,"TAB"),t(),e(50,"."),t(),i(51,"p"),e(52,"Cada "),i(53,"code"),e(54,"pane"),t(),e(55," respeita limites de largura entre "),i(56,"strong"),e(57,"30% e 70%"),t(),e(58,". O "),i(59,"em"),e(60,"trigger"),t(),e(61,` ser\xE1 automaticamente bloqueado ao tentar
ultrapassar esses limites.`),t(),i(62,"h4"),e(63,"Boas pr\xE1ticas"),t(),i(64,"ul")(65,"li"),e(66,"Evite usar o "),i(67,"code"),e(68,"thf-splitter"),t(),e(69," dentro de um modal ou componentes semelhantes que possam comprometer a usabilidade."),t()(),i(70,"pre")(71,"code",11),e(72,`<thf-splitter>
  <thf-splitter-pane [t-size]="'30%'">
    Conte\xFAdo do Painel Esquerdo
  </thf-splitter-pane>
  <thf-splitter-pane>
    Conte\xFAdo do Painel Direito (ocupa espa\xE7o restante)
  </thf-splitter-pane>
</thf-splitter>
`),t()()(),i(73,"div",12)(74,"h4",13),e(75,"Seletor"),t(),i(76,"pre",14),e(77,`<thf-splitter
  t-disabled="boolean, any"
  (t-layout-change)="EventEmitter"
  t-orientation="ThfSplitterOrientation, string" >
</thf-splitter>
`),t()()(),i(78,"po-accordion-item",15)(79,"h4",16),e(80,"Propriedades"),t(),i(81,"table",17)(82,"tr",18)(83,"th",19),e(84,"Nome"),t(),i(85,"th",19),e(86,"Tipo"),t(),i(87,"th",19),e(88,"Padr\xE3o"),t(),i(89,"th",19),e(90,"Descri\xE7\xE3o"),t()(),i(91,"tr",20)(92,"td",21)(93,"div",22)(94,"span",23),e(95," t-disabled"),o(96,"br"),t()()(),i(97,"td",24)(98,"code",25),e(99,"boolean, any"),t()(),i(100,"td",26)(101,"p"),e(102,"false"),t()(),i(103,"td",27)(104,"p"),e(105,"Desabilita o redimensionamento entre os panes, ocultando a intera\xE7\xE3o via trigger."),t()()(),i(106,"tr",20)(107,"td",21)(108,"div",28)(109,"span",29),e(110," (t-layout-change)"),o(111,"br"),t()()(),i(112,"td",24)(113,"code",30),e(114,"EventEmitter"),t()(),i(115,"td",26),e(116,"-"),t(),i(117,"td",27)(118,"p"),e(119,"Evento emitido sempre que houver altera\xE7\xE3o de layout provocada por redimensionamento. Quando "),i(120,"code"),e(121,"t-disabled"),t(),e(122,` estiver
ativado, este evento n\xE3o ser\xE1 disparado.`),t(),i(123,"pre")(124,"code",11),e(125,`<thf-splitter (t-layout-change)="onLayoutChange($event)">
`),t()()()(),i(126,"tr",20)(127,"td",21)(128,"div",22)(129,"span",23),e(130," t-orientation"),o(131,"br"),t()()(),i(132,"td",24)(133,"code",31),e(134,"ThfSplitterOrientation, string"),t()(),i(135,"td",26)(136,"p"),e(137,"'horizontal'"),t()(),i(138,"td",27)(139,"p"),e(140,`Define a orienta\xE7\xE3o dos pain\xE9is do splitter.
Valores aceitos: `),i(141,"code"),e(142,"'horizontal'"),t(),e(143," ou "),i(144,"code"),e(145,"'vertical'"),t(),e(146,"."),t(),i(147,"pre")(148,"code",11),e(149,`<thf-splitter t-orientation="vertical"> ...
`),t()(),i(150,"p"),e(151,"ou"),t(),i(152,"pre")(153,"code",32),e(154,`orientation = ThfSplitterOrientation.Vertical;
`),t()(),i(155,"pre")(156,"code",11),e(157,`<thf-splitter [t-orientation]="orientation"> ...
`),t()()()()()()()(),T(158,2),t(),i(159,"po-tab",33),T(160,3),i(161,"po-container",5)(162,"po-accordion",6)(163,"po-accordion-item",34)(164,"h4",9)(165,"code"),e(166,"ThfSplitterOrientation"),t()(),i(167,"h4",16),e(168,"Propriedades"),t(),i(169,"table",17)(170,"tr",18)(171,"th",19),e(172,"Nome"),t(),i(173,"th",19),e(174,"Descri\xE7\xE3o"),t()(),i(175,"tr",20)(176,"td",21)(177,"div",22)(178,"span",23),e(179," Horizontal"),o(180,"br"),t()()(),i(181,"td",27)(182,"p"),e(183,"Divide o espa\xE7o na "),i(184,"strong"),e(185,"horizontal"),t(),e(186," (esquerda/direita)"),t()()(),i(187,"tr",20)(188,"td",21)(189,"div",22)(190,"span",23),e(191," Vertical"),o(192,"br"),t()()(),i(193,"td",27)(194,"p"),e(195,"Divide o espa\xE7o na "),i(196,"strong"),e(197,"vertical"),t(),e(198," (cima/baixo)"),t()()()()()()(),T(199,4),t(),i(200,"po-tab",35)(201,"po-container",5),T(202,5),i(203,"h3"),e(204,"Tokens customiz\xE1veis"),t(),i(205,"p"),e(206,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(207,"blockquote")(208,"p"),e(209,"Para maiores informa\xE7\xF5es, acesse o guia "),i(210,"a",36),e(211,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(212,"."),t()(),i(213,"table")(214,"thead")(215,"tr")(216,"th"),e(217,"Propriedade"),t(),i(218,"th"),e(219,"Descri\xE7\xE3o"),t(),i(220,"th"),e(221,"Valor Padr\xE3o"),t()()(),i(222,"tbody")(223,"tr")(224,"td")(225,"strong"),e(226,"Splitter Track"),t()(),o(227,"td")(228,"td"),t(),i(229,"tr")(230,"td")(231,"code"),e(232,"--background-track"),t()(),i(233,"td"),e(234,"Cor de background do Track apresentado no Splitter"),t(),i(235,"td")(236,"code"),e(237,"var(--color-neutral-light-10)"),t()()(),i(238,"tr"),o(239,"td")(240,"td")(241,"td"),t(),i(242,"tr")(243,"td")(244,"strong"),e(245,"Splitter Trigger"),t()(),o(246,"td")(247,"td"),t(),i(248,"tr")(249,"td")(250,"code"),e(251,"--box-shadow"),t()(),i(252,"td"),e(253,"Sombra aplicado no bot\xE3o do trigger"),t(),i(254,"td")(255,"code"),e(256,"var(--shadow-sm)"),t()()(),i(257,"tr")(258,"td")(259,"code"),e(260,"--background-color"),t()(),i(261,"td"),e(262,"Cor de background"),t(),i(263,"td")(264,"code"),e(265,"var(--color-neutral-light-00)"),t()()(),i(266,"tr")(267,"td")(268,"code"),e(269,"--color"),t()(),i(270,"td"),e(271,"Cor do \xEDcone"),t(),i(272,"td")(273,"code"),e(274,"var(--color-action-default)"),t()()(),i(275,"tr")(276,"td")(277,"strong"),e(278,"Hover"),t()(),o(279,"td")(280,"td"),t(),i(281,"tr")(282,"td")(283,"code"),e(284,"--background-color-hover"),t()(),i(285,"td"),e(286,"Cor de background no estado hover"),t(),i(287,"td")(288,"code"),e(289,"var(--color-brand-01-lighter)"),t()()(),i(290,"tr")(291,"td")(292,"code"),e(293,"--color-hover"),t()(),i(294,"td"),e(295,"Cor do \xEDcone no estado hover"),t(),i(296,"td")(297,"code"),e(298,"var(--color-brand-01-darkest)"),t()()(),i(299,"tr")(300,"td")(301,"strong"),e(302,"Pressed"),t()(),o(303,"td")(304,"td"),t(),i(305,"tr")(306,"td")(307,"code"),e(308,"--background-color-pressed"),t()(),i(309,"td"),e(310,"Cor de background quando pressionada"),t(),i(311,"td")(312,"code"),e(313,"var(--color-brand-01-ligh)"),t()()(),i(314,"tr")(315,"td")(316,"code"),e(317,"--color-pressed"),t()(),i(318,"td"),e(319,"Cor de \xEDcone quando pressionado"),t(),i(320,"td")(321,"code"),e(322,"var(--color-brand-01-darkest)"),t()()()()()(),T(323,6),t(),i(324,"po-tab",37),T(325,7),t()()())},dependencies:[V,$,g,ne,Q],encapsulation:2})}}return d})();var At=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=Se({type:d})}static{this.\u0275inj=xe({imports:[ke,Ie]})}}return d})();var Re=[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",score:87,onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America"},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",score:42,onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps"},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",score:95,onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",score:63,onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",score:78,onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48998,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",score:12,onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",score:56,onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",score:91,onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America"},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",score:34,onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",score:88,onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",score:73,onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",score:27,onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",score:99,onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",score:15,onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",score:67,onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",score:84,onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",score:53,onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",score:39,onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}],kt=`export const DATA = ${JSON.stringify(Re,null,2)};`;var _t=`<po-button
    class="po-mb-2 po-mt-1"
    p-label="Limpa filtros por coluna"
    (p-click)="clearFiltersByColumn()"
  ></po-button>
  <thf-grid
  #gridComponent
  [t-actions-filter]="true"
  [t-columns]="columnsTotalizador"
  [t-resizable]="true"
  [t-groupable]="true"
  [t-draggable]="true"
  [t-items]="itemsTotalizador"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-show-densification-configuration]="true"
  [t-action-excel]="true"
  [t-action-pdf]="true"
  [t-aggregates-config]="aggregateConfig"
  [t-aggregates]="aggregatesDescriptor"
  [t-filter-column-properties]="filterColumnProperties"
  [t-show-footer-aggregates]="true"
  [t-height]="450"
/>
`,qt=`import { Component, ViewChild } from '@angular/core';

import {
  ThfAggregateConfig,
  ThfAggregateDescriptor,
  ThfFilterByColumn,
  ThfGridColumn,
  ThfGridComponent,
} from '@totvs/thf-components';

import { DATA } from './data';

@Component({
  selector: 'app-thf-grid-aggregates-doc',
  templateUrl: './thf-grid-aggregates-doc.component.html',
  styleUrl: './thf-grid-aggregates-doc.component.css',
})
export class ThfGridAggregateDocComponent {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columnsTotalizador: Array<ThfGridColumn> = [
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'available', color: 'caption-tag-11', label: 'Available' },
        { value: 'reserved', color: 'caption-tag-08', label: 'Reserved' },
        { value: 'closed', color: 'caption-tag-07', label: 'Closed' },
      ],
    },
    { property: 'region', label: 'Region', filter: true },
    { property: 'country', label: 'Country' },
    { property: 'destination', label: 'Destination' },
    { property: 'date', label: 'Date', type: 'date', filter: true },
    {
      property: 'onBoardService',
      label: 'On-board Service',
      type: 'boolean',
      filter: true,
    },
    { property: 'class', label: 'Class', type: 'string', filter: true },
    { property: 'score', label: 'Score', type: 'number', filter: true },
    {
      property: 'value',
      type: 'currency',
      label: 'Value',
      format: 'BRL',
      filter: true,
    },
  ];

  filterColumnProperties: Array<ThfFilterByColumn> = [
    {
      property: 'value',
      logic: 'and',
      operator1: 'gt',
      value1: 1500,
    },
  ];

  aggregateConfig: ThfAggregateConfig = {
    disabled: ['status'],
    visible: ['status', 'destination', 'value'],
    aggregateAlign: 'defaultColumn',
  };

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Total' },
    { field: 'destination', aggregate: 'count', label: 'Contagem' },
  ];

  itemsTotalizador = DATA;

  clearFiltersByColumn() {
    this.thfGrid.applyFilterByColumnProps([]);
  }
}
`;function Yi(d,y){}function Xi(d,y){d&1&&U(0,Yi,0,0,"ng-template")}function en(d,y){if(d&1&&(i(0,"po-accordion-item",1),U(1,Xi,1,0,null,7),t()),d&2){let a=p();m(),s("ngTemplateOutlet",a.dynamicTemplate)}}function tn(d,y){if(d&1&&o(0,"po-code-editor",5),d&2){let a=p();s("p-readonly",!0)("ngModel",a.htmlCode)("p-theme",a.themeActive===1?"vs-dark":"vs")}}function nn(d,y){if(d&1&&o(0,"po-code-editor",6),d&2){let a=p();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.tsCode)}}function on(d,y){if(d&1&&o(0,"po-code-editor",6),d&2){let a=p();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.serviceCode)}}function an(d,y){if(d&1&&o(0,"po-code-editor",6),d&2){let a=p();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.othersCode==null?null:a.othersCode.body)}}var P=(()=>{class d{constructor(a){this.sharedService=a,this.htmlCode="",this.marginTopClass="po-mt-3",this.properties=!1,this.serviceCode="",this.showOthersCodeButton=!1,this.showServiceButton=!1,this.tsCode="",this.buttons=[],this.selectedCode="html"}ngOnInit(){this.buttons=[{label:"HTML",selected:!0,action:()=>this.selectedCode="html"},{label:"TS",action:()=>this.selectedCode="ts"}],this.showServiceButton&&this.buttons.push({label:"Service",action:()=>this.selectedCode="service"}),this.showOthersCodeButton&&this.buttons.push({label:this.othersCode.label,action:()=>this.selectedCode="othersCode"}),this.sharedService.getThemeActive().subscribe(a=>{this.themeActive=a.type||0})}static{this.\u0275fac=function(r){return new(r||d)(I(vt))}}static{this.\u0275cmp=x({type:d,selectors:[["app-code-accordion-doc"]],inputs:{dynamicTemplate:"dynamicTemplate",htmlCode:"htmlCode",marginTopClass:"marginTopClass",othersCode:"othersCode",properties:"properties",serviceCode:"serviceCode",showOthersCodeButton:"showOthersCodeButton",showServiceButton:"showServiceButton",tsCode:"tsCode"},standalone:!1,decls:10,vars:8,consts:[[3,"ngClass"],["p-label","Propriedades"],["p-label","Fontes"],[1,"po-pt-1"],["p-toggle","single","ngDefaultControl","",3,"ngModelChange","p-buttons","ngModel"],["p-height","350","p-language","html","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","ngModel","p-theme"],["p-height","350","p-language","typescript","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","p-theme","ngModel"],[4,"ngTemplateOutlet"]],template:function(r,n){r&1&&(i(0,"div",0)(1,"po-accordion"),L(2,en,2,1,"po-accordion-item",1),i(3,"po-accordion-item",2)(4,"div",3)(5,"po-button-group",4),f("ngModelChange",function(E){return h(n.selectedCode,E)||(n.selectedCode=E),E}),t(),L(6,tn,1,3,"po-code-editor",5),L(7,nn,1,3,"po-code-editor",6),L(8,on,1,3,"po-code-editor",6),L(9,an,1,3,"po-code-editor",6),t()()()()),r&2&&(s("ngClass",n.marginTopClass),m(2),M(n.properties?2:-1),m(3),s("p-buttons",n.buttons),b("ngModel",n.selectedCode),m(),M(n.selectedCode==="html"?6:-1),m(),M(n.selectedCode==="ts"?7:-1),m(),M(n.selectedCode==="service"?8:-1),m(),M(n.selectedCode==="othersCode"?9:-1))},dependencies:[tt,it,at,G,H,V,$,ut,mt],encapsulation:2})}}return d})();var rn=["gridComponent"],Ft=(()=>{class d{constructor(){this.htmlCode=_t,this.tsCode=qt,this.tsOthersCode={label:"Data",body:kt},this.columnsTotalizador=[{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"caption-tag-11",label:"Available"},{value:"reserved",color:"caption-tag-08",label:"Reserved"},{value:"closed",color:"caption-tag-07",label:"Closed"}]},{property:"region",label:"Region",filter:!0},{property:"country",label:"Country"},{property:"destination",label:"Destination"},{property:"date",label:"Date",type:"date",filter:!0},{property:"onBoardService",label:"On-board Service",type:"boolean",filter:!0},{property:"class",label:"Class",type:"string",filter:!0},{property:"score",label:"Score",type:"number",filter:!0},{property:"value",type:"currency",label:"Value",format:"BRL",filter:!0}],this.filterColumnProperties=[{property:"value",logic:"and",operator1:"gt",value1:1500}],this.aggregateConfig={disabled:["status"],visible:["status","destination","value"],aggregateAlign:"defaultColumn"},this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"destination",aggregate:"count",label:"Contagem"}],this.itemsTotalizador=Re}clearFiltersByColumn(){this.thfGrid.applyFilterByColumnProps([])}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-aggregates-doc"]],viewQuery:function(r,n){if(r&1&&F(rn,5),r&2){let l;D(l=w())&&(n.thfGrid=l.first)}},standalone:!1,decls:8,vars:20,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["p-label","Limpa filtros por coluna",1,"po-mb-2","po-mt-1",3,"p-click"],[3,"t-actions-filter","t-columns","t-resizable","t-groupable","t-draggable","t-items","t-selectable","t-selectable-entire-line","t-show-densification-configuration","t-action-excel","t-action-pdf","t-aggregates-config","t-aggregates","t-filter-column-properties","t-show-footer-aggregates","t-height"],[3,"htmlCode","tsCode","othersCode","showOthersCodeButton"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Totalizador e Filtro por Colunas"),t(),o(3,"po-divider",2),i(4,"po-button",3),v("p-click",function(){return n.clearFiltersByColumn()}),t(),o(5,"thf-grid",4,0)(7,"app-code-accordion-doc",5),t()),r&2&&(m(5),s("t-actions-filter",!0)("t-columns",n.columnsTotalizador)("t-resizable",!0)("t-groupable",!0)("t-draggable",!0)("t-items",n.itemsTotalizador)("t-selectable",!0)("t-selectable-entire-line",!1)("t-show-densification-configuration",!0)("t-action-excel",!0)("t-action-pdf",!0)("t-aggregates-config",n.aggregateConfig)("t-aggregates",n.aggregatesDescriptor)("t-filter-column-properties",n.filterColumnProperties)("t-show-footer-aggregates",!0)("t-height",450),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)("othersCode",n.tsOthersCode)("showOthersCodeButton",!0))},dependencies:[B,g,C,R,P],encapsulation:2})}}return d})();var It=`<thf-grid
    t-service-api="https://po-sample-api.onrender.com/v1/heroes"
    [t-columns]="column"
    [t-height]="400"
  />

`,Lt=`import { Component } from '@angular/core';
import { ThfGridColumn } from '@totvs/thf-components';

@Component({
    selector: 'app-thf-grid-basic-doc',
    templateUrl: './thf-grid-basic-doc.component.html',
    styleUrl: './thf-grid-basic-doc.component.css',
    standalone: false
})
export class ThfGridBasicDocComponent {
column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', visible: false },
    { property: 'label', label: 'Label', visible: false },
    { property: 'value', label: 'Code' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail', width: 100 },
  ];
}

`;var Mt=(()=>{class d{constructor(){this.htmlCode=It,this.tsCode=Lt,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"value",label:"Code"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-basic-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-height"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Service"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-columns",n.column)("t-height",400),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[g,C,R,P],encapsulation:2})}}return d})();var Le=(()=>{class d{constructor(a){this.httpClient=a}deleteItem(a,r,n){return this.httpClient.delete("https://po-sample-api.onrender.com/v1/people"+"/"+n)}static{this.\u0275fac=function(r){return new(r||d)(Qe(ot))}}static{this.\u0275prov=Ne({token:d,factory:d.\u0275fac,providedIn:"root"})}}return d})();var Rt=`<thf-grid
    t-service-api="https://po-sample-api.onrender.com/v1/people"
    [t-action-delete]="true"
    [t-columns]="column"
    [t-height]="400"
    [t-literals]="literals"
    [t-selectable]="true"
    [t-selectable-entire-line]="false"
    [t-service-delete-api]="serviceDeleteApi"
    (t-selected)="selectedItem($event)"
  />

`,zt=`import { Component } from '@angular/core';
import { ThfGridColumn, ThfGridLiterals } from '@totvs/thf-components';
import { ThfDeleteService } from './thf-grid-delete-service-doc.service';

@Component({
    selector: 'app-thf-grid-delete-service-doc',
    templateUrl: './thf-grid-delete-service-doc.component.html',
    styleUrl: './thf-grid-delete-service-doc.component.css',
    providers: [ThfDeleteService],
    standalone: false
})
export class ThfGridDeleteServiceDocComponent {
literals!: ThfGridLiterals;
  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', visible: false },
    { property: 'label', label: 'Label', visible: false },
    { property: 'name', label: 'Nome' },
    { property: 'cityName', label: 'Cidade' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail', width: 100 },
  ];

  constructor(protected serviceDeleteApi: ThfDeleteService) { }

  selectedItem(event: any) {
    this.literals = {
      bodyDelete: 'Tem certeza que deseja excluir ' + event.name + '?',
    };
  }
}

`,jt=`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThfGridDeleteService } from '@totvs/thf-components';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThfDeleteService implements ThfGridDeleteService {
  constructor(private httpClient: HttpClient) {}

  deleteItem(
    selectedRow: any,
    filterParams?: any,
    keyValue?: any
  ): Observable<any> {
    const urlDelete = 'https://po-sample-api.onrender.com/v1/people';
    return this.httpClient.delete(urlDelete + '/' + keyValue);
  }
}

`;var Vt=(()=>{class d{constructor(a){this.serviceDeleteApi=a,this.htmlCode=Rt,this.tsCode=zt,this.serviceCode=jt,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"name",label:"Nome"},{property:"cityName",label:"Cidade"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}selectedItem(a){this.literals={bodyDelete:"Tem certeza que deseja excluir "+a.name+"?"}}static{this.\u0275fac=function(r){return new(r||d)(I(Le))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-delete-service-doc"]],standalone:!1,features:[Je([Le])],decls:6,vars:11,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-selected","t-action-delete","t-columns","t-height","t-literals","t-selectable","t-selectable-entire-line","t-service-delete-api"],[3,"htmlCode","tsCode","serviceCode","showServiceButton"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Grid Dele\xE7\xE3o com Servi\xE7o Customizado"),t(),o(3,"po-divider",1),i(4,"thf-grid",2),v("t-selected",function(E){return n.selectedItem(E)}),t(),o(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-action-delete",!0)("t-columns",n.column)("t-height",400)("t-literals",n.literals)("t-selectable",!0)("t-selectable-entire-line",!1)("t-service-delete-api",n.serviceDeleteApi),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)("serviceCode",n.serviceCode)("showServiceButton",!0))},dependencies:[g,C,R,P],encapsulation:2})}}return d})();var Ot=`<thf-grid
    [t-action-delete]="selection.includes('actionDelete')"
    [t-action-edit]="selection.includes('actionEdit')"
    [t-action-excel]="selection.includes('actionExcel')"
    [t-action-pdf]="selection.includes('actionPdf')"
    [t-actions]="actions || []"
    [t-actions-filter]="otherProperties.includes('actionsFilter')"
    [t-actions-right]="otherProperties.includes('actionRight')"
    [t-components-size]="componentsSize"
    [t-columns]="columns"
    [t-container]="otherProperties.includes('container')"
    [t-draggable]="otherProperties.includes('draggable')"
    [t-filter-input-mode]="filterinputModeValue"
    [t-groupable]="otherProperties.includes('groupable')"
    [t-height]="height"
    [t-max-height]="maxHeight"
    [t-min-height]="minHeight"
    [t-hide-columns-manager]="otherProperties.includes('hideColumnsManager')"
    [t-hide-action-fixed-columns]="
      otherProperties.includes('hideActionFixedColumns')
    "
    [t-hide-batch-actions]="selection.includes('hideBatchActions')"
    [t-hide-select-all]="selection.includes('hideSelectAll')"
    [t-hide-table-search]="otherProperties.includes('hideTableSearch')"
    [t-literals]="literalsCustom"
    [t-loading]="otherProperties.includes('loading')"
    [t-max-resizable-width]="maxResizableValue"
    [t-min-resizable-width]="minResizableValue"
    [t-options-paging]="customOptionsPage"
    [t-pageable]="pagination.includes('pageable')"
    t-param-delete-api="value"
    [t-resizable]="resizable"
    [t-selectable]="selection.includes('selectable')"
    [t-selectable-entire-line]="selection.includes('selectableEntireLine')"
    [t-show-densification-configuration]="
      otherProperties.includes('showDensificationConfiguration')
    "
    [t-show-draggable-icon]="otherProperties.includes('showDraggableIcon')"
    [t-show-more-disabled]="pagination.includes('showMoreDisabled')"
    [t-show-more-visible]="pagination.includes('showMoreVisible')"
    [t-single-select]="selection.includes('singleSelect')"
    [t-sort]="customSort"
    [t-sortable]="otherProperties.includes('sortable')"
    [t-spacing]="spacing"
    [t-striped]="otherProperties.includes('striped')"
    [t-text-wrap]="otherProperties.includes('textWrap')"
    [t-virtual-scroll]="otherProperties.includes('virtualScroll')"
    [t-show-footer-aggregates]="
      otherProperties.includes('showFooterAggregates')
    "
    [t-items]="items"
    (t-change-fixed-columns)="changeEvent('t-change-fixed-columns')"
    (t-change-order-column)="changeEvent('t-change-order-column')"
    (t-change-page-size)="changeEvent('t-change-page-size')"
    (t-change-sort-column)="changeEvent('t-change-sort-column')"
    (t-change-visible-columns)="changeEvent('t-change-visible-columns')"
    (t-change-options-column-manager)="
      changeEvent('t-change-options-column-manager')
    "
    (t-changed-density)="changeEvent('t-changed-density')"
    (t-delete-item)="changeEvent('t-delete-item')"
    (t-delete-items)="changeEvent('t-delete-items')"
    (t-delete-item-error)="changeEvent('t-delete-item-error')"
    (t-filter-item-error)="changeEvent('t-filter-item-error')"
    (t-restore-column-manager)="changeEvent('t-restore-column-manager')"
    (t-selected)="changeEvent('t-selected')"
    (t-all-selected)="changeEvent('t-all-selected')"
    (t-unselected)="changeEvent('t-unselected')"
    (t-all-unselected)="changeEvent('t-all-unselected')"
    (t-change-group)="changeEvent('t-change-group')"
    (t-rows-selected)="changeEvent('t-rows-selected')"
  />

  <po-container class="po-mt-2" style="display: flex">
    <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
  </po-container>

  <div class="po-row po-mt-2 po-mb-2" style="display: block">
    <po-container class="po-mb-2" style="display: flex">
      <po-checkbox-group
        name="columnsName"
        [(ngModel)]="columnsName"
        p-columns="4"
        p-label="Columns"
        [p-options]="columnsOptions"
        (p-change)="updateColumns()"
      >
      </po-checkbox-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-checkbox-group
        name="selection"
        p-label="Selection"
        p-columns="4"
        [p-options]="selectionOptions"
        [(ngModel)]="selection"
        (p-change)="changeSelectionOptions()"
      ></po-checkbox-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-checkbox-group
        name="otherProperties"
        p-label="Other Properties"
        [p-columns]="4"
        [p-options]="otherPropertiesOptions"
        [(ngModel)]="otherProperties"
        (p-change)="changeOtherProperties()"
      >
      </po-checkbox-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-radio-group
        name="spacing"
        p-help="Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar."
        p-label="Spacing"
        [p-columns]="4"
        [p-options]="spacingOptions"
        [(ngModel)]="spacing"
      ></po-radio-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-radio-group
        class="po-lg-6"
        name="componentsSize"
        [(ngModel)]="componentsSize"
        p-label="Components size"
        p-help="Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar."
        [p-options]="componentsSizeOptions"
      >
      </po-radio-group>

      <po-radio-group
        class="po-lg-6"
        name="filterinputModeValue"
        p-label="Filter Input Mode"
        [(ngModel)]="filterinputModeValue"
        [p-options]="filterModeOptions"
      ></po-radio-group>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-number
        class="po-md-6"
        p-label="Min Resizable Width"
        [(ngModel)]="minResizableValue"
        [disabled]="!resizable"
      ></po-number>
      <po-number
        class="po-md-6"
        p-label="Max Resizable Width"
        [(ngModel)]="maxResizableValue"
        [disabled]="!resizable"
      ></po-number>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-number
        class="po-md-6 po-lg-4"
        p-label="Height"
        [(ngModel)]="height"
      ></po-number>
      <po-number
        class="po-md-6 po-lg-4"
        p-label="Max Height"
        [(ngModel)]="maxHeight"
      ></po-number>
      <po-number
        class="po-md-6 po-lg-4"
        p-label="Min Height"
        [(ngModel)]="minHeight"
      ></po-number>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-textarea
        name="literals"
        p-label="Literals"
        p-help='{"noData": "Sem dados a serem exibidos"}'
        [(ngModel)]="literals"
        (p-change-model)="changeLiterals()"
      ></po-textarea>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-textarea
        name="sort"
        p-label="Sort"
        p-help='[{ "field":"name", "dir":"asc" }]'
        [(ngModel)]="sort"
        (p-change-model)="changeSort()"
      ></po-textarea>
    </po-container>

    <po-container class="po-mb-2 po-lg-12" style="display: flex">
      <div style="display: flex; flex-wrap: wrap">
        <po-checkbox-group
          class="po-lg-6"
          name="pagination"
          p-label="Pagination"
          [p-options]="paginationOptions"
          [(ngModel)]="pagination"
          (p-change)="changePagination()"
        ></po-checkbox-group>

        <po-textarea
          class="po-lg-6"
          name="optionsPage"
          p-label="Options Page"
          p-help='[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]'
          [(ngModel)]="optionsPage"
          (p-change-model)="changeOptionsPage()"
          [disabled]="!pagination.includes('pageable')"
        ></po-textarea>
      </div>
    </po-container>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-6"
      p-label="Restore"
      (p-click)="restore()"
    >
    </po-button>
  </div>
`,Gt=`import { AfterViewInit, Component } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoRadioGroupOption,
} from '@po-ui/ng-components';
import {
  ThfColumnSpacing,
  ThfGridColumn,
  ThfGridColumnSort,
  ThfGridLiterals,
  ThfTableAction,
} from '@totvs/thf-components';
import { ThfGridOptionPaging } from '@totvs/thf-components/lib/components/thf-grid/interfaces/thf-grid-option-paging.interface';

@Component({
  selector: 'app-thf-grid-labs-doc',
  templateUrl: './thf-grid-labs-doc.component.html',
  styleUrls: ['./thf-grid-labs-doc.component.css'],
})
export class ThfGridLabsDocComponent implements AfterViewInit {
  actions: Array<ThfTableAction> | undefined = undefined;
  columnsName: Array<string> = ['id', 'name', 'birthdate', 'email', 'over'];
  componentsSize: string = 'medium';
  customOptionsPage: Array<ThfGridOptionPaging> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: 1000, label: '1000' },
  ];
  customSort: Array<ThfGridColumnSort> = [
    {
      field: '',
      dir: 'asc',
    },
  ];
  event: string = '';
  filterinputModeValue: string = 'basic';
  height = 400;
  minHeight = undefined;
  maxHeight = undefined;
  literals: string = '';
  literalsCustom: ThfGridLiterals = {};
  maxResizableValue: number = 300;
  minResizableValue: number = 10;
  optionsPage: string = \`[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]\`;
  pagination: Array<string> = [];
  properties: Array<string> = [];
  resizable: boolean = false;
  selection: Array<string> = ['selectableEntireLine'];
  sort: string = '[{"field": "", "dir": "asc"}]';
  spacing: ThfColumnSpacing = ThfColumnSpacing.Medium;
  otherProperties: Array<string> = [
    'actionsFilter',
    'draggable',
    'container',
    'groupable',
    'sortable',
    'striped',
    'virtualScroll',
  ];

  customAction: Array<ThfTableAction> = [
    {
      label: '',
      action: (e: any) => {
        this.poNotification.information(\`\${e.id} - \${e.name}\`);
      },
      icon: 'ICON_MORE_VERT',
      fixed: true,
    },
  ];

  componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Single', value: 'singleSelect', disabled: true },
    { label: 'Entire Line', value: 'selectableEntireLine', disabled: true },
    { label: 'Hide Select All', value: 'hideSelectAll', disabled: true },
    { label: 'Action Delete', value: 'actionDelete', disabled: true },
    { label: 'Action Edit', value: 'actionEdit', disabled: true },
    { label: 'Action Excel', value: 'actionExcel', disabled: true },
    { label: 'Action PDF', value: 'actionPdf', disabled: true },
    { label: 'Hide Batch Actions', value: 'hideBatchActions', disabled: true },
  ];
  spacingOptions: Array<PoRadioGroupOption> = [
    { label: 'extraSmall', value: ThfColumnSpacing.ExtraSmall },
    { label: 'Small', value: ThfColumnSpacing.Small },
    { label: 'Medium', value: ThfColumnSpacing.Medium },
    { label: 'Large', value: ThfColumnSpacing.Large },
  ];
  filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: 'basic' },
    { label: 'Service', value: 'service' },
  ];
  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Actions Filter', value: 'actionsFilter' },
    { label: 'Action Right', value: 'actionRight' },
    { label: 'Container', value: 'container' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Groupable', value: 'groupable' },
    { label: 'Hide Columns Manager', value: 'hideColumnsManager' },
    { label: 'Hide Actions Fixed Columns', value: 'hideActionFixedColumns' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Loading', value: 'loading' },
    { label: 'Resizable', value: 'resizable' },
    {
      label: 'Show Densification Configuration',
      value: 'showDensificationConfiguration',
    },
    { label: 'Show Draggable Icon', value: 'showDraggableIcon' },
    { label: 'Sortable', value: 'sortable' },
    { label: 'Striped', value: 'striped' },
    { label: 'Text Wrap', value: 'textWrap', disabled: false },
    { label: 'Virtual Scroll', value: 'virtualScroll' },
    { label: 'Show Footer Aggregates', value: 'showFooterAggregates' },
  ];
  paginationOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Pageable', value: 'pageable' },
    { label: 'Show More Disabled', value: 'showMoreDisabled', disabled: false },
    { label: 'Show More Visible', value: 'showMoreVisible', disabled: false },
  ];

  items = [
    {
      id: 1,
      name: 'Jo\xE3o Silva',
      birthdate: '1990-05-15',
      lastLogin: '2024-02-14T15:30:00Z',
      active: true,
      email: 'joao.silva@example.com',
      over: 95.5,
    },
    {
      id: 2,
      name: 'Maria Souza',
      birthdate: '1985-10-23',
      lastLogin: '2024-02-13T08:45:00Z',
      active: false,
      email: 'maria.souza@example.com',
      over: 96,
    },
    {
      id: 3,
      name: 'Carlos Almeida',
      birthdate: '1998-07-09',
      lastLogin: '2024-02-14T20:15:00Z',
      active: true,
      email: 'carlos.almeida@example.com',
      over: 1100.5,
    },
    {
      id: 4,
      name: 'Fernanda Costa',
      birthdate: '1992-03-12',
      lastLogin: '2024-02-12T18:00:00Z',
      active: false,
      email: 'fernanda.costa@example.com',
      over: 1200.5,
    },
    {
      id: 5,
      name: 'Ricardo Lima',
      birthdate: '1980-11-30',
      lastLogin: '2024-02-11T07:25:00Z',
      active: true,
      email: 'ricardo.lima@example.com',
      over: 300.89,
    },
    {
      id: 6,
      name: 'Ana Pereira',
      birthdate: '1995-09-18',
      lastLogin: '2024-02-10T14:10:00Z',
      active: true,
      email: 'ana.pereira@example.com',
      over: 50.5,
    },
    {
      id: 7,
      name: 'Pedro Henrique',
      birthdate: '1993-06-25',
      lastLogin: '2024-02-09T12:30:00Z',
      active: false,
      email: 'pedro.henrique@example.com',
      over: 35,
    },
    {
      id: 8,
      name: 'Beatriz Ramos',
      birthdate: '1999-04-03',
      lastLogin: '2024-02-08T09:15:00Z',
      active: true,
      email: 'beatriz.ramos@example.com',
      over: 0.5,
    },
    {
      id: 9,
      name: 'Lucas Oliveira',
      birthdate: '1987-07-22',
      lastLogin: '2024-02-07T16:45:00Z',
      active: false,
      email: 'lucas.oliveira@example.com',
      over: 100,
    },
    {
      id: 10,
      name: 'Juliana Martins',
      birthdate: '1996-01-05',
      lastLogin: '2024-02-06T11:00:00Z',
      active: true,
      email: 'juliana.martins@example.com',
      over: 100.5,
    },
    {
      id: 11,
      name: 'Eduardo Nunes',
      birthdate: '1982-08-17',
      lastLogin: '2024-02-05T17:20:00Z',
      active: false,
      email: 'eduardo.nunes@example.com',
      over: 950,
    },
    {
      id: 12,
      name: 'Camila Ferreira',
      birthdate: '2000-12-29',
      lastLogin: '2024-02-04T13:40:00Z',
      active: true,
      email: 'camila.ferreira@example.com',
      over: 99.99,
    },
  ];

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Number' },
    { property: 'name', label: 'Text' },
    { property: 'birthdate', label: 'Date', type: 'date' },
    {
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this),
    },
    {
      property: 'over',
      label: 'Currency',
      type: 'currency',
      format: 'BRL',
      locale: 'pt',
    },
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Number' },
    { value: 'name', label: 'Text' },
    { value: 'birthdate', label: 'Date' },
    { value: 'lastLogin', label: 'DateTime' },
    { value: 'active', label: 'Boolean' },
    { value: 'email', label: 'Link' },
    { value: 'over', label: 'Currency' },
  ];

  private readonly columnsDefinition: any = {
    id: <ThfGridColumn>{ property: 'id', label: 'Number' },
    name: <ThfGridColumn>{ property: 'name', label: 'Text' },
    birthdate: <ThfGridColumn>{
      property: 'birthdate',
      label: 'Date',
      type: 'date',
    },
    lastLogin: <ThfGridColumn>{
      property: 'lastLogin',
      label: 'DateTime',
      type: 'dateTime',
    },
    active: <ThfGridColumn>{ property: 'active', label: 'Boolean' },
    email: <ThfGridColumn>{
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this),
    },
    over: <ThfGridColumn>{
      property: 'over',
      label: 'Currency',
      type: 'currency',
      format: 'BRL',
      locale: 'pt',
    },
  };

  constructor(private readonly poNotification: PoNotificationService) {}

  ngAfterViewInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  changeLiterals() {
    try {
      this.literalsCustom = JSON.parse(this.literals);
    } catch {
      this.literalsCustom = {};
    }
  }

  changeOptionsPage() {
    try {
      this.customOptionsPage = JSON.parse(this.optionsPage);
    } catch {
      this.customOptionsPage = [
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
        { value: 1000, label: '1000' },
      ];
    }
  }

  changeOtherProperties() {
    this.actions = this.otherProperties.includes('actions')
      ? this.customAction
      : [];

    const isVirtualScrollEnabled =
      this.otherProperties.includes('virtualScroll');
    const isResizableEnabled = this.otherProperties.includes('resizable');

    this.otherPropertiesOptions = this.otherPropertiesOptions.map((option) => {
      if (option.value === 'textWrap') {
        return { ...option, disabled: isVirtualScrollEnabled };
      }
      return option;
    });

    if (isVirtualScrollEnabled && this.otherProperties.includes('textWrap')) {
      this.otherProperties = this.otherProperties.filter(
        (prop) => prop !== 'textWrap'
      );
    }

    this.resizable = isResizableEnabled;
  }

  changePagination() {
    const pageable = this.pagination.includes('pageable');

    this.paginationOptions[1].disabled = !pageable;
    this.paginationOptions[2].disabled = !pageable;
    this.paginationOptions = [...this.paginationOptions];
  }

  changeSelectionOptions() {
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = !selectable;
    this.selectionOptions[2].disabled = !selectable;
    this.selectionOptions[3].disabled = !selectable;
    this.selectionOptions[4].disabled = !selectable;
    this.selectionOptions[5].disabled = !selectable;
    this.selectionOptions[6].disabled = !selectable;
    this.selectionOptions[7].disabled = !selectable;
    this.selectionOptions[8].disabled = !selectable;
    this.selectionOptions = [...this.selectionOptions];
  }

  changeSort() {
    try {
      this.customSort = JSON.parse(this.sort);
    } catch {
      this.customSort = [
        {
          field: '',
          dir: 'asc',
        },
      ];
    }
  }

  openEmail(email: string) {
    window.open(\`mailto:\${email}\`, '_blank');
  }

  restore() {
    this.actions = undefined;
    this.columnsName = ['id', 'name', 'birthdate', 'email', 'over'];
    this.componentsSize = 'medium';
    this.event = '';
    this.filterinputModeValue = 'basic';
    this.literals = '';
    this.literalsCustom = {};
    this.maxResizableValue = 300;
    this.minResizableValue = 10;
    this.height = 400;
    this.minHeight = undefined;
    this.maxHeight = undefined;
    this.optionsPage = \`[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]\`;
    this.pagination = ['showMoreVisible'];
    this.properties = [];
    this.resizable = false;
    this.selection = ['selectableEntireLine'];
    this.sort = '[{"field": "", "dir": "asc"}]';
    this.spacing = ThfColumnSpacing.Medium;
    this.otherProperties = [
      'actionsFilter',
      'container',
      'draggable',
      'groupable',
      'sortable',
      'striped',
      'virtualScroll',
    ];

    this.updateColumns();
    this.changeLiterals();
    this.changeSort();
    this.changePagination();
    this.changeSelectionOptions();
    this.changeOtherProperties();
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach((column) =>
      this.columns.push(this.columnsDefinition[column])
    );
  }
}
`;var pn=()=>[];function cn(d,y){if(d&1){let a=z();i(0,"div",7)(1,"po-container",8)(2,"po-checkbox-group",9),f("ngModelChange",function(n){c(a);let l=p();return h(l.columnsName,n)||(l.columnsName=n),u(n)}),v("p-change",function(){c(a);let n=p();return u(n.updateColumns())}),t()(),i(3,"po-container",8)(4,"po-checkbox-group",10),f("ngModelChange",function(n){c(a);let l=p();return h(l.selection,n)||(l.selection=n),u(n)}),v("p-change",function(){c(a);let n=p();return u(n.changeSelectionOptions())}),t()(),i(5,"po-container",8)(6,"po-checkbox-group",11),f("ngModelChange",function(n){c(a);let l=p();return h(l.otherProperties,n)||(l.otherProperties=n),u(n)}),v("p-change",function(){c(a);let n=p();return u(n.changeOtherProperties())}),t()(),i(7,"po-container",8)(8,"po-radio-group",12),f("ngModelChange",function(n){c(a);let l=p();return h(l.spacing,n)||(l.spacing=n),u(n)}),t()(),i(9,"po-container",8)(10,"po-radio-group",13),f("ngModelChange",function(n){c(a);let l=p();return h(l.componentsSize,n)||(l.componentsSize=n),u(n)}),t(),i(11,"po-radio-group",14),f("ngModelChange",function(n){c(a);let l=p();return h(l.filterinputModeValue,n)||(l.filterinputModeValue=n),u(n)}),t()(),i(12,"po-container",15)(13,"po-number",16),f("ngModelChange",function(n){c(a);let l=p();return h(l.minResizableValue,n)||(l.minResizableValue=n),u(n)}),t(),i(14,"po-number",17),f("ngModelChange",function(n){c(a);let l=p();return h(l.maxResizableValue,n)||(l.maxResizableValue=n),u(n)}),t()(),i(15,"po-container",15)(16,"po-number",18),f("ngModelChange",function(n){c(a);let l=p();return h(l.height,n)||(l.height=n),u(n)}),t(),i(17,"po-number",19),f("ngModelChange",function(n){c(a);let l=p();return h(l.maxHeight,n)||(l.maxHeight=n),u(n)}),t(),i(18,"po-number",20),f("ngModelChange",function(n){c(a);let l=p();return h(l.minHeight,n)||(l.minHeight=n),u(n)}),t()(),i(19,"po-container",15)(20,"po-textarea",21),f("ngModelChange",function(n){c(a);let l=p();return h(l.literals,n)||(l.literals=n),u(n)}),v("p-change-model",function(){c(a);let n=p();return u(n.changeLiterals())}),t()(),i(21,"po-container",15)(22,"po-textarea",22),f("ngModelChange",function(n){c(a);let l=p();return h(l.sort,n)||(l.sort=n),u(n)}),v("p-change-model",function(){c(a);let n=p();return u(n.changeSort())}),t()(),i(23,"po-container",23)(24,"div",24)(25,"po-checkbox-group",25),f("ngModelChange",function(n){c(a);let l=p();return h(l.pagination,n)||(l.pagination=n),u(n)}),v("p-change",function(){c(a);let n=p();return u(n.changePagination())}),t(),i(26,"po-textarea",26),f("ngModelChange",function(n){c(a);let l=p();return h(l.optionsPage,n)||(l.optionsPage=n),u(n)}),v("p-change-model",function(){c(a);let n=p();return u(n.changeOptionsPage())}),t()()()(),i(27,"div",27)(28,"po-button",28),v("p-click",function(){c(a);let n=p();return u(n.restore())}),t()()}if(d&2){let a=p();m(2),b("ngModel",a.columnsName),s("p-options",a.columnsOptions),m(2),s("p-options",a.selectionOptions),b("ngModel",a.selection),m(2),s("p-columns",4)("p-options",a.otherPropertiesOptions),b("ngModel",a.otherProperties),m(2),s("p-columns",4)("p-options",a.spacingOptions),b("ngModel",a.spacing),m(2),b("ngModel",a.componentsSize),s("p-options",a.componentsSizeOptions),m(),b("ngModel",a.filterinputModeValue),s("p-options",a.filterModeOptions),m(2),b("ngModel",a.minResizableValue),s("disabled",!a.resizable),m(),b("ngModel",a.maxResizableValue),s("disabled",!a.resizable),m(2),b("ngModel",a.height),m(),b("ngModel",a.maxHeight),m(),b("ngModel",a.minHeight),m(2),b("ngModel",a.literals),m(2),b("ngModel",a.sort),m(3),s("p-options",a.paginationOptions),b("ngModel",a.pagination),m(),b("ngModel",a.optionsPage),s("disabled",!a.pagination.includes("pageable"))}}var Nt=(()=>{class d{constructor(a){this.poNotification=a,this.htmlCode=Ot,this.tsCode=Gt,this.actions=void 0,this.columnsName=["id","name","birthdate","email","over"],this.componentsSize="medium",this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}],this.customSort=[{field:"",dir:"asc"}],this.event="",this.filterinputModeValue="basic",this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=[],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=Ee.Medium,this.otherProperties=["actionsFilter","draggable","container","groupable","sortable","striped","virtualScroll"],this.customAction=[{label:"",action:r=>{this.poNotification.information(`${r.id} - ${r.name}`)},icon:"ICON_MORE_VERT",fixed:!0}],this.componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Single",value:"singleSelect",disabled:!0},{label:"Entire Line",value:"selectableEntireLine",disabled:!0},{label:"Hide Select All",value:"hideSelectAll",disabled:!0},{label:"Action Delete",value:"actionDelete",disabled:!0},{label:"Action Edit",value:"actionEdit",disabled:!0},{label:"Action Excel",value:"actionExcel",disabled:!0},{label:"Action PDF",value:"actionPdf",disabled:!0},{label:"Hide Batch Actions",value:"hideBatchActions",disabled:!0}],this.spacingOptions=[{label:"extraSmall",value:Ee.ExtraSmall},{label:"Small",value:Ee.Small},{label:"Medium",value:Ee.Medium},{label:"Large",value:Ee.Large}],this.filterModeOptions=[{label:"Basic",value:"basic"},{label:"Service",value:"service"}],this.otherPropertiesOptions=[{label:"Actions",value:"actions"},{label:"Actions Filter",value:"actionsFilter"},{label:"Action Right",value:"actionRight"},{label:"Container",value:"container"},{label:"Draggable",value:"draggable"},{label:"Groupable",value:"groupable"},{label:"Hide Columns Manager",value:"hideColumnsManager"},{label:"Hide Actions Fixed Columns",value:"hideActionFixedColumns"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Loading",value:"loading"},{label:"Resizable",value:"resizable"},{label:"Show Densification Configuration",value:"showDensificationConfiguration"},{label:"Show Draggable Icon",value:"showDraggableIcon"},{label:"Sortable",value:"sortable"},{label:"Striped",value:"striped"},{label:"Text Wrap",value:"textWrap",disabled:!1},{label:"Virtual Scroll",value:"virtualScroll"},{label:"Show Footer Aggregates",value:"showFooterAggregates"}],this.paginationOptions=[{label:"Pageable",value:"pageable"},{label:"Show More Disabled",value:"showMoreDisabled",disabled:!1},{label:"Show More Visible",value:"showMoreVisible",disabled:!1}],this.items=[{id:1,name:"Jo\xE3o Silva",birthdate:"1990-05-15",lastLogin:"2024-02-14T15:30:00Z",active:!0,email:"joao.silva@example.com",over:95.5},{id:2,name:"Maria Souza",birthdate:"1985-10-23",lastLogin:"2024-02-13T08:45:00Z",active:!1,email:"maria.souza@example.com",over:96},{id:3,name:"Carlos Almeida",birthdate:"1998-07-09",lastLogin:"2024-02-14T20:15:00Z",active:!0,email:"carlos.almeida@example.com",over:1100.5},{id:4,name:"Fernanda Costa",birthdate:"1992-03-12",lastLogin:"2024-02-12T18:00:00Z",active:!1,email:"fernanda.costa@example.com",over:1200.5},{id:5,name:"Ricardo Lima",birthdate:"1980-11-30",lastLogin:"2024-02-11T07:25:00Z",active:!0,email:"ricardo.lima@example.com",over:300.89},{id:6,name:"Ana Pereira",birthdate:"1995-09-18",lastLogin:"2024-02-10T14:10:00Z",active:!0,email:"ana.pereira@example.com",over:50.5},{id:7,name:"Pedro Henrique",birthdate:"1993-06-25",lastLogin:"2024-02-09T12:30:00Z",active:!1,email:"pedro.henrique@example.com",over:35},{id:8,name:"Beatriz Ramos",birthdate:"1999-04-03",lastLogin:"2024-02-08T09:15:00Z",active:!0,email:"beatriz.ramos@example.com",over:.5},{id:9,name:"Lucas Oliveira",birthdate:"1987-07-22",lastLogin:"2024-02-07T16:45:00Z",active:!1,email:"lucas.oliveira@example.com",over:100},{id:10,name:"Juliana Martins",birthdate:"1996-01-05",lastLogin:"2024-02-06T11:00:00Z",active:!0,email:"juliana.martins@example.com",over:100.5},{id:11,name:"Eduardo Nunes",birthdate:"1982-08-17",lastLogin:"2024-02-05T17:20:00Z",active:!1,email:"eduardo.nunes@example.com",over:950},{id:12,name:"Camila Ferreira",birthdate:"2000-12-29",lastLogin:"2024-02-04T13:40:00Z",active:!0,email:"camila.ferreira@example.com",over:99.99}],this.columns=[{property:"id",label:"Number"},{property:"name",label:"Text"},{property:"birthdate",label:"Date",type:"date"},{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)},{property:"over",label:"Currency",type:"currency",format:"BRL",locale:"pt"}],this.columnsOptions=[{value:"id",label:"Number"},{value:"name",label:"Text"},{value:"birthdate",label:"Date"},{value:"lastLogin",label:"DateTime"},{value:"active",label:"Boolean"},{value:"email",label:"Link"},{value:"over",label:"Currency"}],this.columnsDefinition={id:{property:"id",label:"Number"},name:{property:"name",label:"Text"},birthdate:{property:"birthdate",label:"Date",type:"date"},lastLogin:{property:"lastLogin",label:"DateTime",type:"dateTime"},active:{property:"active",label:"Boolean"},email:{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)},over:{property:"over",label:"Currency",type:"currency",format:"BRL",locale:"pt"}}}ngOnInit(){this.restore()}changeEvent(a){this.event=a}changeLiterals(){try{this.literalsCustom=JSON.parse(this.literals)}catch(a){this.literalsCustom={}}}changeOptionsPage(){try{this.customOptionsPage=JSON.parse(this.optionsPage)}catch(a){this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}]}}changeOtherProperties(){this.actions=this.otherProperties.includes("actions")?this.customAction:[];let a=this.otherProperties.includes("virtualScroll"),r=this.otherProperties.includes("resizable");this.otherPropertiesOptions=this.otherPropertiesOptions.map(n=>n.value==="textWrap"?de(re({},n),{disabled:a}):n),a&&this.otherProperties.includes("textWrap")&&(this.otherProperties=this.otherProperties.filter(n=>n!=="textWrap")),this.resizable=r}changePagination(){let a=this.pagination.includes("pageable");this.paginationOptions[1].disabled=!a,this.paginationOptions[2].disabled=!a,this.paginationOptions=[...this.paginationOptions]}changeSelectionOptions(){let a=this.selection.includes("selectable");this.selectionOptions[1].disabled=!a,this.selectionOptions[2].disabled=!a,this.selectionOptions[3].disabled=!a,this.selectionOptions[4].disabled=!a,this.selectionOptions[5].disabled=!a,this.selectionOptions[6].disabled=!a,this.selectionOptions[7].disabled=!a,this.selectionOptions[8].disabled=!a,this.selectionOptions=[...this.selectionOptions]}changeSort(){try{this.customSort=JSON.parse(this.sort)}catch(a){this.customSort=[{field:"",dir:"asc"}]}}openEmail(a){window.open(`mailto:${a}`,"_blank")}restore(){this.actions=void 0,this.columnsName=["id","name","birthdate","email","over"],this.componentsSize="medium",this.event="",this.filterinputModeValue="basic",this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=["showMoreVisible"],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=Ee.Medium,this.otherProperties=["actionsFilter","container","draggable","groupable","sortable","striped","virtualScroll"],this.updateColumns(),this.changeLiterals(),this.changeSort(),this.changePagination(),this.changeSelectionOptions(),this.changeOtherProperties()}updateColumns(){this.columns=[],this.columnsName.forEach(a=>this.columns.push(this.columnsDefinition[a]))}static{this.\u0275fac=function(r){return new(r||d)(I(ie))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-labs-doc"]],standalone:!1,decls:10,vars:49,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-param-delete-api","value",3,"t-change-fixed-columns","t-change-order-column","t-change-page-size","t-change-sort-column","t-change-visible-columns","t-change-options-column-manager","t-changed-density","t-delete-item","t-delete-items","t-delete-item-error","t-filter-item-error","t-restore-column-manager","t-selected","t-all-selected","t-unselected","t-all-unselected","t-change-group","t-rows-selected","t-action-delete","t-action-edit","t-action-excel","t-action-pdf","t-actions","t-actions-filter","t-actions-right","t-components-size","t-columns","t-container","t-draggable","t-filter-input-mode","t-groupable","t-height","t-max-height","t-min-height","t-hide-columns-manager","t-hide-action-fixed-columns","t-hide-batch-actions","t-hide-select-all","t-hide-table-search","t-literals","t-loading","t-max-resizable-width","t-min-resizable-width","t-options-paging","t-pageable","t-resizable","t-selectable","t-selectable-entire-line","t-show-densification-configuration","t-show-draggable-icon","t-show-more-disabled","t-show-more-visible","t-single-select","t-sort","t-sortable","t-spacing","t-striped","t-text-wrap","t-virtual-scroll","t-show-footer-aggregates","t-items"],[1,"po-mt-2",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","columnsName","p-columns","4","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-options"],["name","selection","p-label","Selection","p-columns","4",3,"ngModelChange","p-change","p-options","ngModel"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","spacing","p-help","Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar.","p-label","Spacing",3,"ngModelChange","p-columns","p-options","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterinputModeValue","p-label","Filter Input Mode",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],[1,"po-mb-2","po-lg-6",2,"display","flex"],["p-label","Min Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Max Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Max Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Min Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","literals","p-label","Literals","p-help",'{"noData": "Sem dados a serem exibidos"}',3,"ngModelChange","p-change-model","ngModel"],["name","sort","p-label","Sort","p-help",'[{ "field":"name", "dir":"asc" }]',3,"ngModelChange","p-change-model","ngModel"],[1,"po-mb-2","po-lg-12",2,"display","flex"],[2,"display","flex","flex-wrap","wrap"],["name","pagination","p-label","Pagination",1,"po-lg-6",3,"ngModelChange","p-change","p-options","ngModel"],["name","optionsPage","p-label","Options Page","p-help",'[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel","disabled"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1&&(i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-grid",3),v("t-change-fixed-columns",function(){return n.changeEvent("t-change-fixed-columns")})("t-change-order-column",function(){return n.changeEvent("t-change-order-column")})("t-change-page-size",function(){return n.changeEvent("t-change-page-size")})("t-change-sort-column",function(){return n.changeEvent("t-change-sort-column")})("t-change-visible-columns",function(){return n.changeEvent("t-change-visible-columns")})("t-change-options-column-manager",function(){return n.changeEvent("t-change-options-column-manager")})("t-changed-density",function(){return n.changeEvent("t-changed-density")})("t-delete-item",function(){return n.changeEvent("t-delete-item")})("t-delete-items",function(){return n.changeEvent("t-delete-items")})("t-delete-item-error",function(){return n.changeEvent("t-delete-item-error")})("t-filter-item-error",function(){return n.changeEvent("t-filter-item-error")})("t-restore-column-manager",function(){return n.changeEvent("t-restore-column-manager")})("t-selected",function(){return n.changeEvent("t-selected")})("t-all-selected",function(){return n.changeEvent("t-all-selected")})("t-unselected",function(){return n.changeEvent("t-unselected")})("t-all-unselected",function(){return n.changeEvent("t-all-unselected")})("t-change-group",function(){return n.changeEvent("t-change-group")})("t-rows-selected",function(){return n.changeEvent("t-rows-selected")}),t(),i(5,"po-container",4),o(6,"po-info",5),t(),o(7,"app-code-accordion-doc",6),U(8,cn,29,27,"ng-template",null,0,J),t()),r&2){let l=W(9);m(4),s("t-action-delete",n.selection.includes("actionDelete"))("t-action-edit",n.selection.includes("actionEdit"))("t-action-excel",n.selection.includes("actionExcel"))("t-action-pdf",n.selection.includes("actionPdf"))("t-actions",n.actions||le(48,pn))("t-actions-filter",n.otherProperties.includes("actionsFilter"))("t-actions-right",n.otherProperties.includes("actionRight"))("t-components-size",n.componentsSize)("t-columns",n.columns)("t-container",n.otherProperties.includes("container"))("t-draggable",n.otherProperties.includes("draggable"))("t-filter-input-mode",n.filterinputModeValue)("t-groupable",n.otherProperties.includes("groupable"))("t-height",n.height)("t-max-height",n.maxHeight)("t-min-height",n.minHeight)("t-hide-columns-manager",n.otherProperties.includes("hideColumnsManager"))("t-hide-action-fixed-columns",n.otherProperties.includes("hideActionFixedColumns"))("t-hide-batch-actions",n.selection.includes("hideBatchActions"))("t-hide-select-all",n.selection.includes("hideSelectAll"))("t-hide-table-search",n.otherProperties.includes("hideTableSearch"))("t-literals",n.literalsCustom)("t-loading",n.otherProperties.includes("loading"))("t-max-resizable-width",n.maxResizableValue)("t-min-resizable-width",n.minResizableValue)("t-options-paging",n.customOptionsPage)("t-pageable",n.pagination.includes("pageable"))("t-resizable",n.resizable)("t-selectable",n.selection.includes("selectable"))("t-selectable-entire-line",n.selection.includes("selectableEntireLine"))("t-show-densification-configuration",n.otherProperties.includes("showDensificationConfiguration"))("t-show-draggable-icon",n.otherProperties.includes("showDraggableIcon"))("t-show-more-disabled",n.pagination.includes("showMoreDisabled"))("t-show-more-visible",n.pagination.includes("showMoreVisible"))("t-single-select",n.selection.includes("singleSelect"))("t-sort",n.customSort)("t-sortable",n.otherProperties.includes("sortable"))("t-spacing",n.spacing)("t-striped",n.otherProperties.includes("striped"))("t-text-wrap",n.otherProperties.includes("textWrap"))("t-virtual-scroll",n.otherProperties.includes("virtualScroll"))("t-show-footer-aggregates",n.otherProperties.includes("showFooterAggregates"))("t-items",n.items),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[G,H,B,g,C,ve,me,ht,ye,pe,R,P],encapsulation:2})}}return d})();var Qt=`<thf-grid
    #gridComponent
    t-service-api="https://po-sample-api.onrender.com/v1/people"
    [t-auto-size]="true"
    [t-columns]="columns"
    [t-actions-filter]="true"
    [t-selectable]="true"
    [t-selectable-entire-line]="false"
    [t-actions-right]="true"
    [t-draggable]="true"
    [t-groupable]="true"
    [t-height]="400"
    [t-edit-properties]="editProperties"
  />

`,Bt=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridEditProperties,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-inline-doc',
  templateUrl: './thf-grid-editing-inline-doc.component.html',
  styleUrls: ['./thf-grid-editing-inline-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingInlineDocComponent {
 @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', filter: true, editProperties: { disabled: true } },
    { property: 'name', label: 'Nome', filter: true },
    {
      property: 'birthdate',
      label: 'Data de  nascimento',
      type: 'date',
      editProperties: {
        componentEditable: 'datepicker',
        clean: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        helper:
          'Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.',
        keydown: this.onKeyDown.bind(this, 'birthdate'),
      },
    },
    {
      property: 'city',
      label: 'Cidade',
      filter: true,
      editProperties: {
        componentEditable: 'combo',
        options: [
          { value: '4201307', label: 'Araquari' },
          { value: '1501402', label: 'Bel\xE9m' },
          { value: '3509502', label: 'Campinas' },
          { value: '4106902', label: 'Curitiba' },
          { value: '4209102', label: 'Joinville' },
          { value: '3534401', label: 'Osasco' },
          { value: '3304557', label: 'Rio de Janeiro' },
          { value: '4215802', label: 'S\xE3o Bento do Sul' },
          { value: '4216206', label: 'S\xE3o Francisco do Sul' },
          { value: '3550308', label: 'S\xE3o Paulo' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        removeInitialFilter: true,
        controlValueWithLabel: true,
      },
    },
  ];

  form!: FormGroup;
  editProperties!: ThfGridEditProperties;

  ngOnInit() {
    this.editProperties = {
      actionEdit: this.setFormGroup.bind(this),
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  setFormGroup(dataItem: any) {
    this.form = new FormGroup({
      id: new FormControl(dataItem.id, [Validators.required]),
      name: new FormControl(dataItem.name),
      city: new FormControl(dataItem.city),
      birthdate: new FormControl(dataItem.birthdate),
    });
    return this.form;
  }
}

`;var En=["gridComponent"],Ht=(()=>{class d{constructor(){this.htmlCode=Qt,this.tsCode=Bt,this.columns=[{property:"id",label:"Id",filter:!0,editProperties:{disabled:!0}},{property:"name",label:"Nome",filter:!0},{property:"birthdate",label:"Data de  nascimento",type:"date",editProperties:{componentEditable:"datepicker",clean:!0,required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,helper:"Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.",keydown:this.onKeyDown.bind(this,"birthdate")}},{property:"city",label:"Cidade",filter:!0,editProperties:{componentEditable:"combo",options:[{value:"4201307",label:"Araquari"},{value:"1501402",label:"Bel\xE9m"},{value:"3509502",label:"Campinas"},{value:"4106902",label:"Curitiba"},{value:"4209102",label:"Joinville"},{value:"3534401",label:"Osasco"},{value:"3304557",label:"Rio de Janeiro"},{value:"4215802",label:"S\xE3o Bento do Sul"},{value:"4216206",label:"S\xE3o Francisco do Sul"},{value:"3550308",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}}]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)}}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}setFormGroup(a){return this.form=new N({id:new S(a.id,[q.required]),name:new S(a.name),city:new S(a.city),birthdate:new S(a.birthdate)}),this.form}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-editing-inline-doc"]],viewQuery:function(r,n){if(r&1&&F(En,5),r&2){let l;D(l=w())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:12,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-auto-size","t-columns","t-actions-filter","t-selectable","t-selectable-entire-line","t-actions-right","t-draggable","t-groupable","t-height","t-edit-properties"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Edi\xE7\xE3o em linha"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-auto-size",!0)("t-columns",n.columns)("t-actions-filter",!0)("t-selectable",!0)("t-selectable-entire-line",!1)("t-actions-right",!0)("t-draggable",!0)("t-groupable",!0)("t-height",400)("t-edit-properties",n.editProperties),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[g,C,R,P],encapsulation:2})}}return d})();var Ut=`<div class="po-row po-mb-2">
  <po-button
    class="po-mr-2"
    p-label="Finaliza modo edi\xE7\xE3o"
    (p-click)="finishEditMode()"
  ></po-button>
  <po-button
    p-label="Get itens alterados"
    [p-disabled]="getChangedItems()?.length === 0"
    (p-click)="poModal.open()"
  ></po-button>
</div>

<thf-grid
  #gridComponent
  [t-height]="400"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-single-select]="true"
  [t-items]="items"
  [t-columns]="columnWithItems"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-actions-right]="true"
  [t-sortable]="false"
  [t-custom-templates]="{ name: nameTemplate, perfil: perfilTemplate }"
/>

<ng-template #nameTemplate let-formControl="formControl">
  <po-input
    #input
    p-additional-help-tooltip="Informe pelo menos o primeiro nome."
    p-placeholder="Informe o nome"
    [formControl]="formControl"
    [p-append-in-body]="true"
    [p-error-pattern]="'Obrigat\xF3rio'"
    [p-required]="true"
    [p-required-field-error-message]="true"
    (p-keydown)="onKeyDown('name', $event)"
  ></po-input>
</ng-template>
<ng-template #perfilTemplate let-formControl="formControl">
  <po-multiselect
    #multiselect
    [formControl]="formControl"
    [p-append-in-body]="true"
    [p-field-error-message]="'Obrigat\xF3rio'"
    [p-required]="true"
    [p-additional-help-tooltip]="
      'Marque um ou mais status, conforme necess\xE1rio.'
    "
    [p-options]="[
      { value: 1, label: 'RH' },
      { value: 2, label: 'Almoxarifado' },
      { value: 3, label: 'Vendedor' }
    ]"
    [p-field-label]="'label'"
    [p-field-value]="'value'"
    [p-control-value-with-label]="true"
    (p-keydown)="onKeyDown('otherStatus', $event)"
  ></po-multiselect>
</ng-template>

<po-modal #modal p-title="Itens que foram alterados">
  <div class="code" *ngIf="getChangedItems()?.length">
    <pre>{{ getLabelChangedItems() }}</pre>
  </div>
</po-modal>`,Wt=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  PoInputComponent,
  PoModalComponent,
  PoMultiselectComponent,
} from '@po-ui/ng-components';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-row-actions-doc',
  templateUrl: './thf-grid-grid-row-actions-doc.component.html',
  styleUrls: ['./thf-grid-grid-row-actions-doc.component.css'],
  standalone: false,
})
export class ThfGridRowActionsDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  @ViewChild('multiselect', { static: false })
  multiselect!: PoMultiselectComponent;
  @ViewChild('input', { static: false }) input!: PoInputComponent;

  items = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      perfil: [1],
      state: { value: 'SC', label: 'Santa Catarina' },
      city: 'Lages',
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      perfil: [2],
      state: { value: 'SC', label: 'Santa Catarina' },
      city: 'Brusque',
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      perfil: [3],
      state: { value: 'SP', label: 'S\xE3o Paulo' },
      city: 'Guarulhos',
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      perfil: [3],
      state: { value: 'SP', label: 'S\xE3o Paulo' },
      city: 'Campinas',
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      perfil: [2],
      state: { value: 'RJ', label: 'Rio de Janeiro' },
      city: null,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      perfil: [1],
      state: null,
      city: null,
    },
  ];
  currentIdItem: any;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
      filter: true,
      editProperties: {
        componentEditable: 'input',
        required: true
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'caption-tag-11', label: 'Ativo' },
        { value: 2, color: 'caption-tag-08', label: 'Inativo' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 1, label: 'Ativo' },
          { value: 2, label: 'Inativo' },
          { value: 0, label: 'Other' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    },
    {
      property: 'values',
      label: 'Values',
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        keydown: this.onKeyDown.bind(this, 'values'),
      },
    },
    {
      property: 'perfil',
      label: 'Perfil',
      filter: true,
      editProperties: {
        componentEditable: 'multiselect',
        options: [
          { value: 1, label: 'RH' },
          { value: 2, label: 'Almoxarifado' },
          { value: 3, label: 'Vendedor' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        controlValueWithLabel: true,
        required: true
      },
    },
    {
      property: 'state',
      label: 'Estado',
      filter: true,
      editProperties: {
        componentEditable: 'combo',
        required: false,
        removeInitialFilter: true,
        options: [
          { value: 'MG', label: 'Minas Gerais' },
          { value: 'RJ', label: 'Rio de Janeiro' },
          { value: 'SC', label: 'Santa Catarina' },
          { value: 'SP', label: 'S\xE3o Paulo' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        controlValueWithLabel: true,
      },
    },
    {
      property: 'city',
      label: 'cidade',
      editProperties: {
        componentEditable: 'combo',
        required: false,
        removeInitialFilter: true,
        disabled: false,
        fieldLabel: 'value',
        fieldValue: 'value',
      },
    },
  ];

  itemsUpdated: Array<any> = [];
  disabledIncludeButton!: boolean;
  gridRowsActionsWithItems!: ThfGridRowActions;
  myForm!: FormGroup;

  ngOnInit() {
    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        this.myForm = new FormGroup({
          name: new FormControl(dataItem.name),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          values: new FormControl(dataItem.values, [Validators.required]),
          perfil: new FormControl(dataItem.perfil, [Validators.required]),
          state: new FormControl(dataItem.state),
          city: new FormControl(dataItem.city),
        });
        this.handleStateAndCity(this.myForm?.controls['state'].value);
        return this.myForm;
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
      validateField: this.onValidate.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
    const city = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (city?.editProperties) {
      city.editProperties.disabled = true;
    }
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.disabledIncludeButton = false;
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    const city = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (city?.editProperties) {
      city.editProperties.disabled = true;
    }
    return true;
  }

  onValidate(value: any, columnProperty: any) {
    console.log('onValidateField:', value, columnProperty);

    if (columnProperty === 'state') {
      this.myForm?.controls['city'].setValue(null);
      const stateValue = this.myForm.controls['state'].value;
      const cityColumn = this.columnWithItems.find(
        (column) => column.property === 'city'
      );

      if (!cityColumn?.editProperties) {
        return true;
      }

      if (!stateValue) {
        cityColumn.editProperties.loading = false;
        cityColumn.editProperties.disabled = true;
        cityColumn.editProperties.options = [];
      } else {
        cityColumn.editProperties.disabled = false;
        const stateCode = typeof stateValue === 'object' ? stateValue.value : stateValue;
        cityColumn.editProperties.options = this.getCity(stateCode);
      }
    }

    return true;
  }

  handleStateAndCity(value: any) {
    const cityColumn = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (!cityColumn?.editProperties) {
      return;
    }
    const stateCode = typeof value === 'object' ? value?.value : value;
    if (stateCode) {
      cityColumn.editProperties.disabled = false;
      cityColumn.editProperties.options = this.getCity(stateCode);
    } else {
      cityColumn.editProperties.loading = false;
      cityColumn.editProperties.disabled = true;
    }
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  getChangedItems() {
    return this.thfGrid?.getChangedItems() || [];
  }

  getLabelChangedItems() {
    return JSON.stringify(this.thfGrid?.getChangedItems() || [], null, 2);
  }

  finishEditMode() {
    this.thfGrid.cleanRowActionsMode();
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      if (property === 'otherStatus') {
        this.multiselect.showAdditionalHelp();
        return;
      } else if (property === 'name') {
        this.input.showAdditionalHelp();
        return;
      }
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  private getCity(state: string) {
    const city = {
      MG: [
        { value: 'Belo Horizonte' },
        { value: 'Contagem' },
        { value: 'Juiz de Fora' },
        { value: 'Uberl\xE2ndia' },
      ],
      RJ: [
        { value: 'Duque de Caxias' },
        { value: 'Nova Igua\xE7u' },
        { value: 'Rio de Janeiro' },
        { value: 'S\xE3o Gon\xE7alo' },
      ],
      SP: [
        { value: 'Campinas' },
        { value: 'Guarulhos' },
        { value: 'S\xE3o Bernardo do Campo' },
        { value: 'S\xE3o Paulo' },
      ],
      SC: [
        { value: 'Balne\xE1rio Cambori\xFA' },
        { value: 'Brusque' },
        { value: 'Lages' },
        { value: 'Palho\xE7a' },
      ],
    };

    return city[state as keyof typeof city] || [];
  }
}

`;var Sn=["modal"],bn=["gridComponent"],hn=["multiselect"],fn=["input"],vn=(d,y)=>({name:d,perfil:y}),gn=()=>({value:1,label:"RH"}),yn=()=>({value:2,label:"Almoxarifado"}),Cn=()=>({value:3,label:"Vendedor"}),Pn=(d,y,a)=>[d,y,a];function Tn(d,y){if(d&1){let a=z();i(0,"po-input",14,4),v("p-keydown",function(n){c(a);let l=p();return u(l.onKeyDown("name",n))}),t()}if(d&2){let a=y.formControl;s("p-append-in-body",!0)("formControl",a)("p-error-pattern","Obrigat\xF3rio")("p-required",!0)("p-required-field-error-message",!0)}}function Dn(d,y){if(d&1){let a=z();i(0,"po-multiselect",15,5),v("p-keydown",function(n){c(a);let l=p();return u(l.onKeyDown("otherStatus",n))}),t()}if(d&2){let a=y.formControl;s("p-append-in-body",!0)("formControl",a)("p-field-error-message","Obrigat\xF3rio")("p-required",!0)("p-additional-help-tooltip","Marque um ou mais status, conforme necess\xE1rio.")("p-options",Ze(12,Pn,le(9,gn),le(10,yn),le(11,Cn)))("p-field-label","label")("p-field-value","value")("p-control-value-with-label",!0)}}function wn(d,y){if(d&1&&(i(0,"div",12)(1,"pre"),e(2),t()()),d&2){let a=p();m(2),be(a.getLabelChangedItems())}}var $t=(()=>{class d{constructor(){this.htmlCode=Ut,this.tsCode=Wt,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],perfil:[1],state:{value:"SC",label:"Santa Catarina"},city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],perfil:[2],state:{value:"SC",label:"Santa Catarina"},city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],perfil:[2],state:{value:"RJ",label:"Rio de Janeiro"},city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],perfil:[1],state:null,city:null}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",filter:!0,editProperties:{componentEditable:"input",required:!0}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"caption-tag-11",label:"Ativo"},{value:2,color:"caption-tag-08",label:"Inativo"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",keydown:this.onKeyDown.bind(this,"values")}},{property:"perfil",label:"Perfil",filter:!0,editProperties:{componentEditable:"multiselect",options:[{value:1,label:"RH"},{value:2,label:"Almoxarifado"},{value:3,label:"Vendedor"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0,required:!0}},{property:"state",label:"Estado",filter:!0,editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,options:[{value:"MG",label:"Minas Gerais"},{value:"RJ",label:"Rio de Janeiro"},{value:"SC",label:"Santa Catarina"},{value:"SP",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0}},{property:"city",label:"cidade",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,disabled:!1,fieldLabel:"value",fieldValue:"value"}}],this.itemsUpdated=[]}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!1,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.dependents=[],this.currentIdItem=a.id),this.myForm=new N({name:new S(a.name),status:new S(a.status,[q.min(1)]),values:new S(a.values,[q.required]),perfil:new S(a.perfil,[q.required]),state:new S(a.state),city:new S(a.city)}),this.handleStateAndCity(this.myForm?.controls.state.value),this.myForm),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),validateField:this.onValidate.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(a){console.log("onAfterSave(new): ",a);let r=this.columnWithItems.find(n=>n.property==="city");r?.editProperties&&(r.editProperties.disabled=!0)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){console.log("before insert new value: ",a),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,a];let r=this.columnWithItems.find(n=>n.property==="city");return r?.editProperties&&(r.editProperties.disabled=!0),!0}onValidate(a,r){if(console.log("onValidateField:",a,r),r==="state"){this.myForm?.controls.city.setValue(null);let n=this.myForm.controls.state.value,l=this.columnWithItems.find(E=>E.property==="city");if(!l?.editProperties)return!0;if(!n)l.editProperties.loading=!1,l.editProperties.disabled=!0,l.editProperties.options=[];else{l.editProperties.disabled=!1;let E=typeof n=="object"?n.value:n;l.editProperties.options=this.getCity(E)}}return!0}handleStateAndCity(a){let r=this.columnWithItems.find(l=>l.property==="city");if(!r?.editProperties)return;let n=typeof a=="object"?a?.value:a;n?(r.editProperties.disabled=!1,r.editProperties.options=this.getCity(n)):(r.editProperties.loading=!1,r.editProperties.disabled=!0)}onBeforeRemove(a){return!0}onAfterRemove(a){return console.log("afterRemove: ",a),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(a,r){if(r.code==="F9"){if(a==="otherStatus"){this.multiselect.showAdditionalHelp();return}else if(a==="name"){this.input.showAdditionalHelp();return}this.thfGrid.showAdditionalHelp(a)}}getCity(a){return{MG:[{value:"Belo Horizonte"},{value:"Contagem"},{value:"Juiz de Fora"},{value:"Uberl\xE2ndia"}],RJ:[{value:"Duque de Caxias"},{value:"Nova Igua\xE7u"},{value:"Rio de Janeiro"},{value:"S\xE3o Gon\xE7alo"}],SP:[{value:"Campinas"},{value:"Guarulhos"},{value:"S\xE3o Bernardo do Campo"},{value:"S\xE3o Paulo"}],SC:[{value:"Balne\xE1rio Cambori\xFA"},{value:"Brusque"},{value:"Lages"},{value:"Palho\xE7a"}]}[a]||[]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-row-actions-doc"]],viewQuery:function(r,n){if(r&1&&F(Sn,7)(bn,5)(hn,5)(fn,5),r&2){let l;D(l=w())&&(n.poModal=l.first),D(l=w())&&(n.thfGrid=l.first),D(l=w())&&(n.multiselect=l.first),D(l=w())&&(n.input=l.first)}},standalone:!1,decls:17,vars:17,consts:[["gridComponent",""],["nameTemplate",""],["perfilTemplate",""],["modal",""],["input",""],["multiselect",""],[1,"po-font-text-large-bold"],[1,"po-row","po-mb-2"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-selectable-entire-line","t-single-select","t-items","t-columns","t-grid-row-actions","t-actions-right","t-sortable","t-custom-templates"],["p-title","Itens que foram alterados"],[1,"code"],[3,"htmlCode","tsCode"],["p-additional-help-tooltip","Informe pelo menos o primeiro nome.","p-placeholder","Informe o nome",3,"p-keydown","p-append-in-body","formControl","p-error-pattern","p-required","p-required-field-error-message"],[3,"p-keydown","p-append-in-body","formControl","p-field-error-message","p-required","p-additional-help-tooltip","p-options","p-field-label","p-field-value","p-control-value-with-label"]],template:function(r,n){if(r&1&&(i(0,"po-container")(1,"span",6),e(2,"Edi\xE7\xE3o flu\xEDda"),t(),o(3,"po-divider"),i(4,"div",7)(5,"po-button",8),v("p-click",function(){return n.finishEditMode()}),t(),i(6,"po-button",9),v("p-click",function(){return n.poModal.open()}),t()(),o(7,"thf-grid",10,0),U(9,Tn,2,5,"ng-template",null,1,J)(11,Dn,2,16,"ng-template",null,2,J),i(13,"po-modal",11,3),L(15,wn,3,1,"div",12),t(),o(16,"app-code-accordion-doc",13),t()),r&2){let l,E,k=W(10),Mi=W(12);m(6),s("p-disabled",((l=n.getChangedItems())==null?null:l.length)===0),m(),s("t-height",400)("t-selectable",!0)("t-selectable-entire-line",!1)("t-single-select",!0)("t-items",n.items)("t-columns",n.columnWithItems)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-actions-right",!0)("t-sortable",!1)("t-custom-templates",Ae(14,vn,k,Mi)),m(8),M((E=n.getChangedItems())!=null&&E.length?15:-1),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[G,rt,B,g,C,se,Fe,qe,R,P],styles:[".code[_ngcontent-%COMP%]{padding:1rem;background-color:#000;color:#adff2f;margin-top:.5rem;margin-left:2rem;border-radius:.5rem}"]})}}return d})();var Kt=`<div class="po-row po-mb-2">
  <po-button
    class="po-mr-2"
    p-label="Finaliza modo edi\xE7\xE3o"
    (p-click)="finishEditMode()"
  ></po-button>
  <po-button
    p-label="Get itens alterados"
    [p-disabled]="getChangedItems()?.length === 0"
    (p-click)="poModal.open()"
  ></po-button>
</div>

<thf-grid
  #gridComponent
  [t-height]="400"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-items]="items"
  [t-columns]="columnWithItems"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-aggregates]="aggregatesDescriptor"
  [t-show-footer-aggregates]="true"
  [t-actions]="lineActions"
  [t-actions-right]="true"
  [t-sortable]="true"
  [t-action-pdf]="true"
  [t-action-excel]="true"
  [t-custom-actions]="customBulkActions"
/>

<po-modal #modal p-title="Itens que foram alterados">
  <div class="code" *ngIf="getChangedItems()?.length">
    <pre>{{ getLabelChangedItems() }}</pre>
  </div>
</po-modal>

<po-modal
  #bulkEditModal
  p-title="Edi\xE7\xE3o em lote (a\xE7\xE3o customizada)"
  [p-primary-action]="bulkEditModalConfirm"
>
  <po-multiselect [(ngModel)]="editColumnsFilterValues" name="editColumnsFilterValues" p-label="Propriedades para Editar" [p-options]="editColumnsFilter"></po-multiselect>

  @for (column of editColumnsFilter; track column.property) {
    <ng-container *ngIf="editColumnsFilterValues.includes(column.property)">
      @switch (column.editProperties.componentEditable) {
        @case ('combo') {
          <po-combo
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-options]="column.editProperties.options"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
        @case ('decimal') {
          <po-decimal
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-decimals-length]="column.editProperties.decimalsLength"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
        @default {
          <po-input
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
      }
    </ng-container>
  }
</po-modal>`,Jt=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoDropdownAction, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import {
  ThfAggregateDescriptor,
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
  ThfTableAction,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-fluid-currency-doc',
  templateUrl: './thf-grid-editing-fluid-currency-doc.component.html',
  styleUrls: ['./thf-grid-editing-fluid-currency-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingFluidCurrencyDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  @ViewChild('bulkEditModal', { static: true }) bulkEditModal!: PoModalComponent;

  items = [
    {
      id: 11234,
      country: 'Brazil',
      time: '09:20:00',
      value: 1000.0,
      value_pt: 1000.0,
      value_en: 1000.0,
      value_ru: 1000.0,
      value_es: 1000.0,
      value_edit_pt: 1000.0,
      value_edit_en: 1000.0,
      value_edit_ru: 1000.0,
      value_edit_es: 1000.0,
      destination: 'Rio de Janeiro',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 22467,
      country: 'France',
      time: '10:00:00',
      value: 5000.0,
      value_pt: 5000.0,
      value_en: 5000.0,
      value_ru: 5000.0,
      value_es: 5000.0,
      value_edit_pt: 5000.0,
      value_edit_en: 5000.0,
      value_edit_ru: 5000.0,
      value_edit_es: 5000.0,
      destination: 'Paris',
      status: 'closed',
      region: 'Alps',
    },
    {
      id: 40670,
      country: 'Senegal',
      time: '10:45:00',
      value: 3200.0,
      value_pt: 3200.0,
      value_en: 3200.0,
      value_ru: 3200.0,
      value_es: 3200.0,
      value_edit_pt: 3200.0,
      value_edit_en: 3200.0,
      value_edit_ru: 3200.0,
      value_edit_es: 3200.0,
      destination: 'Dakar',
      status: 'closed',
      region: 'Western Africa',
    },
    {
      id: 34679,
      country: 'Portugal',
      time: '11:05:00',
      value: 5500.0,
      value_pt: 5500.0,
      value_en: 5500.0,
      value_ru: 5500.0,
      value_es: 5500.0,
      value_edit_pt: 5500.0,
      value_edit_en: 5500.0,
      value_edit_ru: 5500.0,
      value_edit_es: 5500.0,
      destination: 'Lisbon',
      status: 'closed',
      region: 'Mediterranean',
    },
    {
      id: 49000,
      country: 'Russia',
      time: '11:40:00',
      value: 6700.0,
      value_pt: 6700.0,
      value_en: 6700.0,
      value_ru: 6700.0,
      value_es: 6700.0,
      value_edit_pt: 6700.0,
      value_edit_en: 6700.0,
      value_edit_ru: 6700.0,
      value_edit_es: 6700.0,
      destination: 'Moscow',
      status: 'reserved',
      region: 'Caucasus',
    },
    {
      id: 48999,
      country: 'United States',
      time: '12:10:00',
      value: 2700.49,
      value_pt: 2700.49,
      value_en: 2700.49,
      value_ru: 2700.49,
      value_es: 2700.49,
      value_edit_pt: 2700.49,
      value_edit_en: 2700.49,
      value_edit_ru: 2700.49,
      value_edit_es: 2700.49,
      destination: 'Los Angeles',
      status: 'reserved',
      region: 'North America',
    },
    {
      id: 54563,
      country: 'Chile',
      time: '12:35:00',
      value: 2000.0,
      value_pt: 2000.0,
      value_en: 2000.0,
      value_ru: 2000.0,
      value_es: 2000.0,
      value_edit_pt: 2000.0,
      value_edit_en: 2000.0,
      value_edit_ru: 2000.0,
      value_edit_es: 2000.0,
      destination: 'Cusco',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 64568,
      country: 'Mexico',
      time: '12:55:00',
      value: 2100.0,
      value_pt: 2100.0,
      value_en: 2100.0,
      value_ru: 2100.0,
      value_es: 2100.0,
      value_edit_pt: 2100.0,
      value_edit_en: 2100.0,
      value_edit_ru: 2100.0,
      value_edit_es: 2100.0,
      destination: 'Mexico City',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 75456,
      country: 'Ireland',
      time: '13:00:00',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Cork',
      status: 'reserved',
      region: 'British Isle',
    },
    {
      id: 23445,
      country: 'South Africa',
      time: '13:25:00',
      value: 1900.0,
      value_pt: 1900.0,
      value_en: 1900.0,
      value_ru: 1900.0,
      value_es: 1900.0,
      value_edit_pt: 1900.0,
      value_edit_en: 1900.0,
      value_edit_ru: 1900.0,
      value_edit_es: 1900.0,
      destination: 'Cape Town',
      status: 'available',
      region: 'Southern Africa',
    },
    {
      id: 19238,
      country: 'Australia',
      time: '13:35:00',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Sydney',
      status: 'reserved',
      region: 'Australasia',
    },
    {
      id: 85456,
      country: 'Japan',
      time: '14:00:00',
      value: 5900.0,
      value_pt: 5900.0,
      value_en: 5900.0,
      value_ru: 5900.0,
      value_es: 5900.0,
      value_edit_pt: 5900.0,
      value_edit_en: 5900.0,
      value_edit_ru: 5900.0,
      value_edit_es: 5900.0,
      destination: 'Tokio',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 94565,
      country: 'China',
      time: '15:00:00',
      value: 2900.0,
      value_pt: 2900.0,
      value_en: 2900.0,
      value_ru: 2900.0,
      value_es: 2900.0,
      value_edit_pt: 2900.0,
      value_edit_en: 2900.0,
      value_edit_ru: 2900.0,
      value_edit_es: 2900.0,
      destination: 'Beijing',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 32330,
      country: 'England',
      time: '16:00:00',
      value: 2090.5,
      value_pt: 2090.5,
      value_en: 2090.5,
      value_ru: 2090.5,
      value_es: 2090.5,
      value_edit_pt: 2090.5,
      value_edit_en: 2090.5,
      value_edit_ru: 2090.5,
      value_edit_es: 2090.5,
      destination: 'London',
      status: 'available',
      region: 'British Isle',
    },
    {
      id: 14560,
      country: 'Canada',
      time: '17:00:00',
      value: 2090.5,
      value_pt: 2090.5,
      value_en: 2090.5,
      value_ru: 2090.5,
      value_es: 2090.5,
      value_edit_pt: 2090.5,
      value_edit_en: 2090.5,
      value_edit_ru: 2090.5,
      value_edit_es: 2090.5,
      destination: 'Quebec',
      status: 'available',
      region: 'North America',
    },
    {
      id: 93800,
      country: 'Iceland',
      time: '18:00:00',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Reykjav\xEDk',
      status: 'available',
      region: 'Nordics',
    },
    {
      id: 34239,
      country: 'Germany',
      time: '19:00:00',
      value: 3070.5,
      value_pt: 3070.5,
      value_en: 3070.5,
      value_ru: 3070.5,
      value_es: 3070.5,
      value_edit_pt: 3070.5,
      value_edit_en: 3070.5,
      value_edit_ru: 3070.5,
      value_edit_es: 3070.5,
      destination: 'Berlin',
      status: 'available',
      region: 'Danube',
    },
    {
      id: 45611,
      country: 'Argentina',
      time: '20:00:00',
      value: 3500.5,
      value_pt: 3500.5,
      value_en: 3500.5,
      value_ru: 3500.5,
      value_es: 3500.5,
      value_edit_pt: 3500.5,
      value_edit_en: 3500.5,
      value_edit_ru: 3500.5,
      value_edit_es: 3500.5,
      destination: 'Ushuaia',
      status: 'reserved',
      region: 'Latin America',
    },
  ];
  currentIdItem: any;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'available', color: 'caption-tag-11', label: 'Available' },
        { value: 'reserved', color: 'caption-tag-08', label: 'Reserved' },
        { value: 'closed', color: 'caption-tag-07', label: 'Closed' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'available', label: 'Available' },
          { value: 'reserved', label: 'Reserved' },
          { value: 'closed', label: 'Closed' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    },
    {
      property: 'region',
      label: 'Region',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe a regi\xE3o referida.',
        keydown: this.onKeyDown.bind(this, 'region'),
      },
    },
    {
      property: 'country',
      label: 'Country',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o pa\xEDs referido.',
        keydown: this.onKeyDown.bind(this, 'country'),
      },
    },
    {
      property: 'time',
      label: 'Time',
      type: 'time',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'timepicker',
        helper: 'Informe o hor\xE1rio desejado.',
        placeholder: 'HH:mm:ss',
        keydown: this.onKeyDown.bind(this, 'time'),
      }
    },
    {
      property: 'destination',
      label: 'Destination',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o destino dentro do pa\xEDs informado.',
        keydown: this.onKeyDown.bind(this, 'destination'),
      },
    },
    {
      property: 'value',
      label: 'Value',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
      },
    },
    {
      property: 'value_en',
      label: 'Value (en)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'en',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_pt',
      label: 'Value (pt)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'pt',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_ru',
      label: 'Value (ru)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'ru',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_es',
      label: 'Value (es)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'es',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_edit_en',
      label: 'Value Edit (en)',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'en'
      },
    },
    {
      property: 'value_edit_pt',
      label: 'Value Edit (pt)',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'pt'
      },
    },
    {
      property: 'value_edit_ru',
      label: 'Value Edit (ru)',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'ru'
      },
    },
    {
      property: 'value_edit_es',
      label: 'Value Edit (es)',
      type: 'currency',
      format: 'USD',
      width: 220,
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'es'
      },
    },
  ];

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Total' },
    { field: 'value_en', aggregate: 'sum', label: 'Total (en)' },
    { field: 'value_pt', aggregate: 'sum', label: 'Total (pt)' },
    { field: 'value_ru', aggregate: 'sum', label: 'Total (ru)' },
    { field: 'value_es', aggregate: 'sum', label: 'Total (es)' },
    { field: 'value_edit_en', aggregate: 'sum', label: 'Total (en)' },
    { field: 'value_edit_pt', aggregate: 'sum', label: 'Total (pt)' },
    { field: 'value_edit_ru', aggregate: 'sum', label: 'Total (ru)' },
    { field: 'value_edit_es', aggregate: 'sum', label: 'Total (es)' },
  ];

  itemsUpdated: Array<any> = [];
  disabledIncludeButton!: boolean;
  gridRowsActionsWithItems!: ThfGridRowActions;
  lineActions: Array<ThfTableAction> = [
    {
      label: 'Detalhes',
      action: (e: any) => {
        this.poNotificationService.success('Item ' + e.id + ' com destino a ' + e.destination + ' no valor de ' + e.value)
      },
      icon: 'ICON_INFO'
    }
  ];

  customBulkActions: Array<PoDropdownAction> = [
    { label: 'Editar selecionados (custom action)', action: this.editSelected.bind(this) },
    { label: 'Excluir selecionados (custom action)', action: this.bulkDelete.bind(this) }
  ]

  editColumnsFilter: Array<any> = [];
  editColumnsFilterValues: Array<string> = [];

  bulkEditModalConfirm: PoModalAction = {
    label: 'Confirmar',
    action: this.bulkEdit.bind(this)
  };

  constructor(private readonly poNotificationService: PoNotificationService) {}

  ngOnInit() {
    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          region: new FormControl(dataItem.region, [Validators.required]),
          country: new FormControl(dataItem.country, [Validators.required]),
          time: new FormControl(dataItem.time, [Validators.required]),
          destination: new FormControl(dataItem.destination, [Validators.required]),
          value: new FormControl(dataItem.value, [Validators.required]),
          value_en: new FormControl(dataItem.value_en, [Validators.required]),
          value_pt: new FormControl(dataItem.value_pt, [Validators.required]),
          value_ru: new FormControl(dataItem.value_ru, [Validators.required]),
          value_es: new FormControl(dataItem.value_es, [Validators.required]),
          value_edit_en: new FormControl(dataItem.value_edit_en, [Validators.required]),
          value_edit_pt: new FormControl(dataItem.value_edit_pt, [Validators.required]),
          value_edit_ru: new FormControl(dataItem.value_edit_ru, [Validators.required]),
          value_edit_es: new FormControl(dataItem.value_edit_es, [Validators.required]),
        });
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeSaveSubItems(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.disabledIncludeButton = false;
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    return true;
  }

  onBeforeInsertSubItems(newValue: { id: any; $uuidThfIncluded: any }) {
    newValue.id = newValue.$uuidThfIncluded;
    const item = this.itemsUpdated.find(
      (item) => item.id === this.currentIdItem
    );
    item.dependents = item.dependents
      ? [...item.dependents, newValue]
      : [newValue];
    return true;
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  getChangedItems() {
    return this.thfGrid?.getChangedItems() || [];
  }

  getLabelChangedItems() {
    return JSON.stringify(this.thfGrid?.getChangedItems() || [], null, 2);
  }

  finishEditMode() {
    this.thfGrid.cleanRowActionsMode();
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  editSelected() {
    const editableColumns = this.columnWithItems.filter(
      (column) => ['status', 'value'].includes(column.property)
    );
    
    this.editColumnsFilter = editableColumns.map((column) => ({
      label: column.label,
      value: column.property,
      property: column.property,
      valueModel: '',
      required: column.editProperties?.required,
      editProperties: column.editProperties,
    }));
      
    this.bulkEditModal.open();
  }

  bulkEdit() {
    const selectedItems = this.thfGrid.getSelectedRows();

    const updatedColumns =
      this.editColumnsFilter
        .filter(item => this.editColumnsFilterValues.includes(item.property))
        .filter(item => item.valueModel !== '');

    for (const updatedColumn of updatedColumns) {
      for (const item of selectedItems) {
        item[updatedColumn.property] = updatedColumn.valueModel;
        item.$edited = true;
        this.thfGrid.updateItem(item, item);
        this.thfGrid.unselectRowItem(item);
      }

      updatedColumn.valueModel = '';
    }

    this.editColumnsFilterValues = [];

    this.bulkEditModal.close();
  }

  bulkDelete() {
    const selectedItems = this.thfGrid.getSelectedRows();

    for (const item of selectedItems) {
      item.$removed = true;
      this.thfGrid.updateItem(item, item);
      this.thfGrid.unselectRowItem(item);
    }

    this.poNotificationService.success('Itens exclu\xEDdos com sucesso!');
  }
}
`;var kn=["modal"],_n=["gridComponent"],qn=["bulkEditModal"],Fn=(d,y)=>y.property;function In(d,y){if(d&1&&(i(0,"div",9)(1,"pre"),e(2),t()()),d&2){let a=p();m(2),be(a.getLabelChangedItems())}}function Ln(d,y){if(d&1){let a=z();i(0,"po-combo",16),f("ngModelChange",function(n){c(a);let l=p(2).$implicit;return h(l.valueModel,n)||(l.valueModel=n),u(n)}),t()}if(d&2){let a=p(2).$implicit;s("p-label",we(a.label)),b("ngModel",a.valueModel),s("p-options",a.editProperties.options)("p-required",a.required)("p-placeholder",a.editProperties.placeholder)("p-disabled",a.editProperties.disabled)}}function Mn(d,y){if(d&1){let a=z();i(0,"po-decimal",17),f("ngModelChange",function(n){c(a);let l=p(2).$implicit;return h(l.valueModel,n)||(l.valueModel=n),u(n)}),t()}if(d&2){let a=p(2).$implicit;s("p-label",we(a.label)),b("ngModel",a.valueModel),s("p-decimals-length",a.editProperties.decimalsLength)("p-required",a.required)("p-placeholder",a.editProperties.placeholder)("p-disabled",a.editProperties.disabled)}}function Rn(d,y){if(d&1){let a=z();i(0,"po-input",18),f("ngModelChange",function(n){c(a);let l=p(2).$implicit;return h(l.valueModel,n)||(l.valueModel=n),u(n)}),t()}if(d&2){let a=p(2).$implicit;s("p-label",we(a.label)),b("ngModel",a.valueModel),s("p-required",a.required)("p-placeholder",a.editProperties.placeholder)("p-disabled",a.editProperties.disabled)}}function zn(d,y){if(d&1&&L(0,Ln,1,7,"po-combo",13)(1,Mn,1,7,"po-decimal",14)(2,Rn,1,6,"po-input",15),d&2){let a,r=p().$implicit;M((a=r.editProperties.componentEditable)==="combo"?0:a==="decimal"?1:2)}}function jn(d,y){if(d&1&&L(0,zn,3,1),d&2){let a=y.$implicit,r=p();M(r.editColumnsFilterValues.includes(a.property)?0:-1)}}var Zt=(()=>{class d{constructor(a){this.poNotificationService=a,this.htmlCode=Kt,this.tsCode=Jt,this.items=[{id:11234,country:"Brazil",time:"09:20:00",value:1e3,value_pt:1e3,value_en:1e3,value_ru:1e3,value_es:1e3,value_edit_pt:1e3,value_edit_en:1e3,value_edit_ru:1e3,value_edit_es:1e3,destination:"Rio de Janeiro",status:"available",region:"Latin America"},{id:22467,country:"France",time:"10:00:00",value:5e3,value_pt:5e3,value_en:5e3,value_ru:5e3,value_es:5e3,value_edit_pt:5e3,value_edit_en:5e3,value_edit_ru:5e3,value_edit_es:5e3,destination:"Paris",status:"closed",region:"Alps"},{id:40670,country:"Senegal",time:"10:45:00",value:3200,value_pt:3200,value_en:3200,value_ru:3200,value_es:3200,value_edit_pt:3200,value_edit_en:3200,value_edit_ru:3200,value_edit_es:3200,destination:"Dakar",status:"closed",region:"Western Africa"},{id:34679,country:"Portugal",time:"11:05:00",value:5500,value_pt:5500,value_en:5500,value_ru:5500,value_es:5500,value_edit_pt:5500,value_edit_en:5500,value_edit_ru:5500,value_edit_es:5500,destination:"Lisbon",status:"closed",region:"Mediterranean"},{id:49e3,country:"Russia",time:"11:40:00",value:6700,value_pt:6700,value_en:6700,value_ru:6700,value_es:6700,value_edit_pt:6700,value_edit_en:6700,value_edit_ru:6700,value_edit_es:6700,destination:"Moscow",status:"reserved",region:"Caucasus"},{id:48999,country:"United States",time:"12:10:00",value:2700.49,value_pt:2700.49,value_en:2700.49,value_ru:2700.49,value_es:2700.49,value_edit_pt:2700.49,value_edit_en:2700.49,value_edit_ru:2700.49,value_edit_es:2700.49,destination:"Los Angeles",status:"reserved",region:"North America"},{id:54563,country:"Chile",time:"12:35:00",value:2e3,value_pt:2e3,value_en:2e3,value_ru:2e3,value_es:2e3,value_edit_pt:2e3,value_edit_en:2e3,value_edit_ru:2e3,value_edit_es:2e3,destination:"Cusco",status:"available",region:"Latin America"},{id:64568,country:"Mexico",time:"12:55:00",value:2100,value_pt:2100,value_en:2100,value_ru:2100,value_es:2100,value_edit_pt:2100,value_edit_en:2100,value_edit_ru:2100,value_edit_es:2100,destination:"Mexico City",status:"available",region:"Latin America"},{id:75456,country:"Ireland",time:"13:00:00",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Cork",status:"reserved",region:"British Isle"},{id:23445,country:"South Africa",time:"13:25:00",value:1900,value_pt:1900,value_en:1900,value_ru:1900,value_es:1900,value_edit_pt:1900,value_edit_en:1900,value_edit_ru:1900,value_edit_es:1900,destination:"Cape Town",status:"available",region:"Southern Africa"},{id:19238,country:"Australia",time:"13:35:00",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Sydney",status:"reserved",region:"Australasia"},{id:85456,country:"Japan",time:"14:00:00",value:5900,value_pt:5900,value_en:5900,value_ru:5900,value_es:5900,value_edit_pt:5900,value_edit_en:5900,value_edit_ru:5900,value_edit_es:5900,destination:"Tokio",status:"available",region:"East Asia"},{id:94565,country:"China",time:"15:00:00",value:2900,value_pt:2900,value_en:2900,value_ru:2900,value_es:2900,value_edit_pt:2900,value_edit_en:2900,value_edit_ru:2900,value_edit_es:2900,destination:"Beijing",status:"available",region:"East Asia"},{id:32330,country:"England",time:"16:00:00",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,value_edit_pt:2090.5,value_edit_en:2090.5,value_edit_ru:2090.5,value_edit_es:2090.5,destination:"London",status:"available",region:"British Isle"},{id:14560,country:"Canada",time:"17:00:00",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,value_edit_pt:2090.5,value_edit_en:2090.5,value_edit_ru:2090.5,value_edit_es:2090.5,destination:"Quebec",status:"available",region:"North America"},{id:93800,country:"Iceland",time:"18:00:00",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Reykjav\xEDk",status:"available",region:"Nordics"},{id:34239,country:"Germany",time:"19:00:00",value:3070.5,value_pt:3070.5,value_en:3070.5,value_ru:3070.5,value_es:3070.5,value_edit_pt:3070.5,value_edit_en:3070.5,value_edit_ru:3070.5,value_edit_es:3070.5,destination:"Berlin",status:"available",region:"Danube"},{id:45611,country:"Argentina",time:"20:00:00",value:3500.5,value_pt:3500.5,value_en:3500.5,value_ru:3500.5,value_es:3500.5,value_edit_pt:3500.5,value_edit_en:3500.5,value_edit_ru:3500.5,value_edit_es:3500.5,destination:"Ushuaia",status:"reserved",region:"Latin America"}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"caption-tag-11",label:"Available"},{value:"reserved",color:"caption-tag-08",label:"Reserved"},{value:"closed",color:"caption-tag-07",label:"Closed"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"available",label:"Available"},{value:"reserved",label:"Reserved"},{value:"closed",label:"Closed"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"region",label:"Region",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe a regi\xE3o referida.",keydown:this.onKeyDown.bind(this,"region")}},{property:"country",label:"Country",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o pa\xEDs referido.",keydown:this.onKeyDown.bind(this,"country")}},{property:"time",label:"Time",type:"time",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"timepicker",helper:"Informe o hor\xE1rio desejado.",placeholder:"HH:mm:ss",keydown:this.onKeyDown.bind(this,"time")}},{property:"destination",label:"Destination",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o destino dentro do pa\xEDs informado.",keydown:this.onKeyDown.bind(this,"destination")}},{property:"value",label:"Value",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_en",label:"Value (en)",type:"currency",format:"USD",width:220,locale:"en",filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_pt",label:"Value (pt)",type:"currency",format:"USD",width:220,locale:"pt",filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_ru",label:"Value (ru)",type:"currency",format:"USD",width:220,locale:"ru",filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_es",label:"Value (es)",type:"currency",format:"USD",width:220,locale:"es",filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_edit_en",label:"Value Edit (en)",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"en"}},{property:"value_edit_pt",label:"Value Edit (pt)",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"pt"}},{property:"value_edit_ru",label:"Value Edit (ru)",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"ru"}},{property:"value_edit_es",label:"Value Edit (es)",type:"currency",format:"USD",width:220,filter:!0,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"es"}}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"value_en",aggregate:"sum",label:"Total (en)"},{field:"value_pt",aggregate:"sum",label:"Total (pt)"},{field:"value_ru",aggregate:"sum",label:"Total (ru)"},{field:"value_es",aggregate:"sum",label:"Total (es)"},{field:"value_edit_en",aggregate:"sum",label:"Total (en)"},{field:"value_edit_pt",aggregate:"sum",label:"Total (pt)"},{field:"value_edit_ru",aggregate:"sum",label:"Total (ru)"},{field:"value_edit_es",aggregate:"sum",label:"Total (es)"}],this.itemsUpdated=[],this.lineActions=[{label:"Detalhes",action:r=>{this.poNotificationService.success("Item "+r.id+" com destino a "+r.destination+" no valor de "+r.value)},icon:"ICON_INFO"}],this.customBulkActions=[{label:"Editar selecionados (custom action)",action:this.editSelected.bind(this)},{label:"Excluir selecionados (custom action)",action:this.bulkDelete.bind(this)}],this.editColumnsFilter=[],this.editColumnsFilterValues=[],this.bulkEditModalConfirm={label:"Confirmar",action:this.bulkEdit.bind(this)}}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!1,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.dependents=[],this.currentIdItem=a.id),new N({status:new S(a.status,[q.min(1)]),region:new S(a.region,[q.required]),country:new S(a.country,[q.required]),time:new S(a.time,[q.required]),destination:new S(a.destination,[q.required]),value:new S(a.value,[q.required]),value_en:new S(a.value_en,[q.required]),value_pt:new S(a.value_pt,[q.required]),value_ru:new S(a.value_ru,[q.required]),value_es:new S(a.value_es,[q.required]),value_edit_en:new S(a.value_edit_en,[q.required]),value_edit_pt:new S(a.value_edit_pt,[q.required]),value_edit_ru:new S(a.value_edit_ru,[q.required]),value_edit_es:new S(a.value_edit_es,[q.required])})),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(a){console.log("onAfterSave(new): ",a)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeSaveSubItems(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){return console.log("before insert new value: ",a),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,a],!0}onBeforeInsertSubItems(a){a.id=a.$uuidThfIncluded;let r=this.itemsUpdated.find(n=>n.id===this.currentIdItem);return r.dependents=r.dependents?[...r.dependents,a]:[a],!0}onBeforeRemove(a){return!0}onAfterRemove(a){return console.log("afterRemove: ",a),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}editSelected(){let a=this.columnWithItems.filter(r=>["status","value"].includes(r.property));this.editColumnsFilter=a.map(r=>({label:r.label,value:r.property,property:r.property,valueModel:"",required:r.editProperties?.required,editProperties:r.editProperties})),this.bulkEditModal.open()}bulkEdit(){let a=this.thfGrid.getSelectedRows(),r=this.editColumnsFilter.filter(n=>this.editColumnsFilterValues.includes(n.property)).filter(n=>n.valueModel!=="");for(let n of r){for(let l of a)l[n.property]=n.valueModel,l.$edited=!0,this.thfGrid.updateItem(l,l),this.thfGrid.unselectRowItem(l);n.valueModel=""}this.editColumnsFilterValues=[],this.bulkEditModal.close()}bulkDelete(){let a=this.thfGrid.getSelectedRows();for(let r of a)r.$removed=!0,this.thfGrid.updateItem(r,r),this.thfGrid.unselectRowItem(r);this.poNotificationService.success("Itens exclu\xEDdos com sucesso!")}static{this.\u0275fac=function(r){return new(r||d)(I(ie))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-editing-fluid-currency-doc"]],viewQuery:function(r,n){if(r&1&&F(kn,7)(_n,5)(qn,7),r&2){let l;D(l=w())&&(n.poModal=l.first),D(l=w())&&(n.thfGrid=l.first),D(l=w())&&(n.bulkEditModal=l.first)}},standalone:!1,decls:18,vars:21,consts:[["gridComponent",""],["modal",""],["bulkEditModal",""],[1,"po-font-text-large-bold"],[1,"po-row","po-mb-2"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-selectable-entire-line","t-items","t-columns","t-grid-row-actions","t-aggregates","t-show-footer-aggregates","t-actions","t-actions-right","t-sortable","t-action-pdf","t-action-excel","t-custom-actions"],["p-title","Itens que foram alterados"],[1,"code"],["p-title","Edi\xE7\xE3o em lote (a\xE7\xE3o customizada)",3,"p-primary-action"],["name","editColumnsFilterValues","p-label","Propriedades para Editar",3,"ngModelChange","ngModel","p-options"],[3,"htmlCode","tsCode"],[3,"p-label","ngModel","p-options","p-required","p-placeholder","p-disabled"],[3,"p-label","ngModel","p-decimals-length","p-required","p-placeholder","p-disabled"],[3,"p-label","ngModel","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-options","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-decimals-length","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-required","p-placeholder","p-disabled"]],template:function(r,n){if(r&1){let l=z();i(0,"po-container")(1,"span",3),e(2,"Edi\xE7\xE3o Flu\xEDda com Casas Decimais e A\xE7\xF5es em Lote"),t(),o(3,"po-divider"),i(4,"div",4)(5,"po-button",5),v("p-click",function(){return n.finishEditMode()}),t(),i(6,"po-button",6),v("p-click",function(){return n.poModal.open()}),t()(),o(7,"thf-grid",7,0),i(9,"po-modal",8,1),L(11,In,3,1,"div",9),t(),i(12,"po-modal",10,2)(14,"po-multiselect",11),f("ngModelChange",function(k){return c(l),h(n.editColumnsFilterValues,k)||(n.editColumnsFilterValues=k),u(k)}),t(),Te(15,jn,1,1,null,null,Fn),t(),o(17,"app-code-accordion-doc",12),t()}if(r&2){let l,E;m(6),s("p-disabled",((l=n.getChangedItems())==null?null:l.length)===0),m(),s("t-height",400)("t-selectable",!0)("t-selectable-entire-line",!1)("t-items",n.items)("t-columns",n.columnWithItems)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-aggregates",n.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-actions",n.lineActions)("t-actions-right",!0)("t-sortable",!0)("t-action-pdf",!0)("t-action-excel",!0)("t-custom-actions",n.customBulkActions),m(4),M((E=n.getChangedItems())!=null&&E.length?11:-1),m(),s("p-primary-action",n.bulkEditModalConfirm),m(2),b("ngModel",n.editColumnsFilterValues),s("p-options",n.editColumnsFilter),m(),De(n.editColumnsFilter),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[G,H,B,g,C,Et,bt,se,Fe,qe,R,P],encapsulation:2})}}return d})();var Yt=`<thf-grid
    [t-items]="products"
    [t-columns]="columns"
    [t-grid-row-actions]="gridRowActions"
    [t-auto-size]="true"
    [t-actions-right]="true"
  />


`,Xt=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ThfGridColumn,
  ThfGridRowActions
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-dynamic-properties',
  templateUrl: './thf-grid-dynamic-properties.component.html',
  standalone: false,
})
export class ThfGridDynamicPropertiesComponent {
gridRowActions: ThfGridRowActions;
  editForm!: FormGroup;

  products = [
    { 
      id: 1, 
      status: { value: 'active', label: 'Ativo' },
      name: 'Smartphone', 
      price: 999.99, 
      discount: 0, 
    },
    { 
      id: 2, 
      status: { value: 'inactive', label: 'Inativo' },
      name: 'Tablet', 
      price: 499.99, 
      discount: 50, 
    },
    { 
      id: 3, 
      status: { value: 'active', label: 'Ativo' },
      name: 'Office Chair', 
      price: 299.99, 
      discount: 10, 
    }
  ];

  columns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'ID',
      editProperties: {
        disabled: true
      }
    },
    {
      property: 'status',
      label: 'Status',
      editProperties: {
        componentEditable: 'combo',
        options: [
          { value: 'active', label: 'Ativo' },
          { value: 'inactive', label: 'Inativo' }
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        removeInitialFilter: true,
        controlValueWithLabel: true,
      }
    },
    {
      property: 'name',
      label: 'Nome do Produto',
      editProperties: {
        readonly: (rowData) => rowData.status === 'inactive'
      }
    },
    {
      property: 'price',
      label: 'Pre\xE7o',
      editProperties: {
        readonly: true
      }
    },
    {
      property: 'discount',
      label: 'Desconto (%)',
      editProperties: {
        disabled: (rowData) => rowData.status === 'inactive'
      }
    },
  ];

  constructor() {
    this.gridRowActions = {
      title: 'Produtos',
      actionEdit: this.onEdit.bind(this),
      validateField: this.onValidate.bind(this),
    };
  }

  onEdit(dataItem: any, mode: string) {
    console.log('Editando produto:', dataItem, 'Modo:', mode);

    this.editForm = new FormGroup({
      id: new FormControl(dataItem.id),
      name: new FormControl(dataItem.name),
      price: new FormControl(dataItem.price),
      discount: new FormControl(dataItem.discount),
      status: new FormControl(dataItem.status),
    });

    return this.editForm;
  }

  onValidate(updatedField: any, columnProperty: any) {
    console.log('onValidateField:', updatedField, columnProperty);
    return true;
  }
}

`;var ei=(()=>{class d{constructor(){this.htmlCode=Yt,this.tsCode=Xt,this.products=[{id:1,status:{value:"active",label:"Ativo"},name:"Smartphone",price:999.99,discount:0},{id:2,status:{value:"inactive",label:"Inativo"},name:"Tablet",price:499.99,discount:50},{id:3,status:{value:"active",label:"Ativo"},name:"Office Chair",price:299.99,discount:10}],this.columns=[{property:"id",label:"ID",editProperties:{disabled:!0}},{property:"status",label:"Status",editProperties:{componentEditable:"combo",options:[{value:"active",label:"Ativo"},{value:"inactive",label:"Inativo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}},{property:"name",label:"Nome do Produto",editProperties:{readonly:a=>a.status==="inactive"}},{property:"price",label:"Pre\xE7o",editProperties:{readonly:!0}},{property:"discount",label:"Desconto (%)",editProperties:{disabled:a=>a.status==="inactive"}}],this.gridRowActions={title:"Produtos",actionEdit:this.onEdit.bind(this),validateField:this.onValidate.bind(this)}}onEdit(a,r){return console.log("Editando produto:",a,"Modo:",r),this.editForm=new N({id:new S(a.id),name:new S(a.name),price:new S(a.price),discount:new S(a.discount),status:new S(a.status)}),this.editForm}onValidate(a,r){return console.log("onValidateField:",a,r),!0}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-dynamic-properties"]],standalone:!1,decls:6,vars:7,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-items","t-columns","t-grid-row-actions","t-auto-size","t-actions-right"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Edi\xE7\xE3o com Propriedades din\xE2micas"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-items",n.products)("t-columns",n.columns)("t-grid-row-actions",n.gridRowActions)("t-auto-size",!0)("t-actions-right",!0),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[g,C,R,P],encapsulation:2})}}return d})();var ti=`<thf-grid
      #gridComponent
      t-spacing="extraSmall"
      t-components-size="small"
      [t-columns]="columnWithItems"
      [t-items]="items"
      [t-height]="500"
      [t-page-size-virtual]="20"
      [t-virtual-scroll]="true"
      [t-resizable]="true"
      [t-auto-size]="true"
      [t-auto-size-on-scroll]="true"
    />

`,ii=`import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ThfGridColumn,
  ThfGridComponent
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-auto-fit-scroll',
  templateUrl: './thf-grid-auto-fit-scroll.component.html',
  standalone: false,
})
export class ThfGridAutoFitScrollComponent implements OnInit {
@ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'caption-tag-11', label: 'Ativo' },
        { value: 2, color: 'caption-tag-08', label: 'Inativo' },
      ],
    },
    {
      property: 'values',
      label: 'Values',
    },

    {
      property: 'number',
      label: 'Number',
      type: 'number',
    },
    {
      property: 'datepicker',
      label: 'datepicker',
    },
    {
      property: 'otherStatus',
      label: 'Outro Status',
    },
    {
      property: 'select',
      label: 'select',
    },
    {
      property: 'switch',
      label: 'switch',
    },
    {
      property: 'decimal',
      label: 'decimal',
      type: 'currency',
    },
    {
      property: 'checkbox',
      label: 'checkbox',
    },
    {
      property: 'valuesx',
      label: 'Valuesx',
    },
  ];

  items: any[] = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      valuesx: [1495831666871],
      otherStatus: [233],
      number: 1,
      datepicker: '1980-11-01',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      valuesx: [1495831698598],
      otherStatus: [233],
      number: 2,
      datepicker: '1980-11-02',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      valuesx: [1495832652942],
      otherStatus: [3],
      number: 3,
      datepicker: '1980-11-03',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      valuesx: [1495832683682],
      otherStatus: [3],
      number: 4,
      datepicker: '1980-11-04',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      valuesx: [1495833068596],
      otherStatus: [233],
      number: 5,
      datepicker: '1980-11-05',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      valuesx: [1495833068597],
      otherStatus: [233],
      number: 6,
      datepicker: '1980-11-06',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
  ];


  ngOnInit() {
    let itemsUpdatedNew = [];

    const baseItem = this.items[0];
    for (let i = 1; i <= 100; i++) {
      const randomId = Date.now() + i;
      const newItem = {
        ...baseItem,
        id: randomId + i,
        name: \`\${baseItem.name} \${i}\${i}\`,
      };
      itemsUpdatedNew.push(newItem);
    }

    this.items = itemsUpdatedNew;
  }
}

`;var Gn=["gridComponent"],ni=(()=>{class d{constructor(){this.htmlCode=ti,this.tsCode=ii,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"caption-tag-11",label:"Ativo"},{value:2,color:"caption-tag-08",label:"Inativo"}]},{property:"values",label:"Values"},{property:"number",label:"Number",type:"number"},{property:"datepicker",label:"datepicker"},{property:"otherStatus",label:"Outro Status"},{property:"select",label:"select"},{property:"switch",label:"switch"},{property:"decimal",label:"decimal",type:"currency"},{property:"checkbox",label:"checkbox"},{property:"valuesx",label:"Valuesx"}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}]}ngOnInit(){let a=[],r=this.items[0];for(let n=1;n<=100;n++){let l=Date.now()+n,E=de(re({},r),{id:l+n,name:`${r.name} ${n}${n}`});a.push(E)}this.items=a}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-auto-fit-scroll"]],viewQuery:function(r,n){if(r&1&&F(Gn,5),r&2){let l;D(l=w())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:10,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","extraSmall","t-components-size","small",3,"t-columns","t-items","t-height","t-page-size-virtual","t-virtual-scroll","t-resizable","t-auto-size","t-auto-size-on-scroll"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando auto-size e auto-fit-on-scroll"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-columns",n.columnWithItems)("t-items",n.items)("t-height",500)("t-page-size-virtual",20)("t-virtual-scroll",!0)("t-resizable",!0)("t-auto-size",!0)("t-auto-size-on-scroll",!0),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[g,C,R,P],encapsulation:2})}}return d})();var oi=`<thf-splitter>
  <thf-splitter-pane>
    <po-page-default
      p-title="Empresas"
      p-subtitle="Exibindo 4 de 4"
      [p-actions]="leftActions"
      p-page-header-type="primary"
      p-page-actions-layout="mixed"
    >
      <thf-grid
        #mainGrid
        [t-items]="mainGridItems"
        [t-columns]="mainGridColumns"
        [t-grid-row-actions]="mainGridRowsActions"
        [t-actions-right]="true"
        [t-selectable]="true"
        [t-single-select]="true"
        [t-selectable-removed]="true"
        [t-selectable-entire-line]="false"
        (t-selected)="handleMainGridSelection($event)"
        (t-unselected)="handleMainGridUnselection($event)"
        (t-change-row-state-filter)="onMainGridRowStateFilter($event)"
        (t-before-duplicate)="beforeDuplicateMainGrid($event)"
        (t-after-duplicate)="afterDuplicateMainGrid($event)"
      />
    </po-page-default>
  </thf-splitter-pane>

  <thf-splitter-pane>

    <po-page-default
      p-title="Filial"
      p-subtitle="Controle de funcionarios"
      [p-actions]="rightActions"
      p-page-header-type="secondary"
      p-page-actions-layout="dropdown"
      (p-back)="onBack()"
    >
      <thf-grid
        #childGrid
        [t-items]="childGridItems"
        [t-columns]="childGridColumns"
        [t-grid-row-actions]="childGridRowsActions"
        [t-disabled-include-button]="childGridDisabledIncludeButton"
        [t-actions-right]="true"
        [t-selectable]="false"
        [t-single-select]="false"
        (t-after-duplicate)="afterDuplicateChildGrid($event)"
      />
    </po-page-default>
  </thf-splitter-pane>
</thf-splitter>`,ai=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoNotificationService } from '@po-ui/ng-components';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-parent-detail-editing-doc',
  templateUrl: './thf-grid-parent-detail-editing.component.html',
  styleUrls: ['./thf-grid-parent-detail-editing.component.css'],
  standalone: false,
})
export class ThfGridParentDetailEditingComponent {
  @ViewChild('mainGrid', { static: false }) mainGrid!: ThfGridComponent;
  @ViewChild('childGrid', { static: false }) childGrid!: ThfGridComponent;

  readonly leftActions: Array<PoPageAction> = [
    {
      label: '',
      icon: 'an an-star',
      action: () => window.open('https://github.com/po-ui/po-angular'),
    },
    {
      label: 'Exportar',
      icon: 'an an-export',
      action: () => this.notify('Exportar'),
    },
  ];

  readonly rightActions: Array<PoPageAction> = [
    {
      label: 'Filtrar',
      icon: 'an an-funnel',
      action: () => this.notify('Filtrar'),
    },
    {
      label: 'Atualizar',
      icon: 'an an-arrows-clockwise',
      action: () => this.notify('Atualizar'),
    },
  ];
  
  mainGridTitle = 'Equipes (Tabela Pai)';
  childGridTitle = 'Her\xF3is (Tabela Filha)';

  disabledIncludeButton: boolean = false;
  currentIdItem: string | number | undefined;
  private duplicatingHeroes: Array<any> | null = null;

  mainGridColumns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
      width: '100px',
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o nome da equipe'
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'ativo', color: 'caption-tag-11', label: 'Ativo' },
        { value: 'em-missao', color: 'caption-tag-09', label: 'Em miss\xE3o' },
        { value: 'inativo', color: 'caption-tag-06', label: 'Inativo' },
        { value: 'ferido', color: 'caption-tag-07', label: 'Ferido' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'ativo', label: 'Ativo' },
          { value: 'em-missao', label: 'Em miss\xE3o' },
          { value: 'inativo', label: 'Inativo' },
          { value: 'ferido', label: 'Ferido' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    }
  ];
  mainGridRowsActions!: ThfGridRowActions;
  mainGridItems: Array<any> = [
    {
      id: 1,
      name: 'Vingadores',
      status: 'ativo',
      heroes: [
        { id: 11, name: 'Homem de Ferro', status: 'ativo' },
        { id: 12, name: 'Capit\xE3o Am\xE9rica', status: 'em-missao' },
        { id: 13, name: 'Thor', status: 'ativo' }
      ]
    },
    {
      id: 2,
      name: 'X-man',
      status: 'em-missao',
      heroes: [
        { id: 21, name: 'Wolverine', status: 'ativo' },
        { id: 22, name: 'Ciclope', status: 'reserva' },
        { id: 23, name: 'Jean Grey', status: 'ferido' }
      ]
    },
    {
      id: 3,
      name: 'Jovens Tit\xE3s',
      status: 'ativo',
      heroes: [
        { id: 30, name: 'Ciborgue', status: 'ativo' },
        { id: 31, name: 'Estelar', status: 'ativo' },
        { id: 32, name: 'Mutano', status: 'ativo' },
        { id: 33, name: 'Ravena', status: 'reserva' },
        { id: 34, name: 'Robin', status: 'ativo' },
      ]
    },
    {
      id: 4,
      name: 'Liga da Justi\xE7a',
      status: 'ativo',
      heroes: [
        { id: 41, name: 'Superman', status: 'ativo' },
        { id: 42, name: 'Batman', status: 'reserva' },
        { id: 43, name: 'Mulher Maravilha', status: 'em-missao' }
      ]
    }
  ];
  mainGridItemsUpdated: Array<any> = [];
  mainGridSelectedItem: any;

  childGridColumns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
      width: '100px',
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o nome da empresa'
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'ativo', color: 'caption-tag-11', label: 'Ativo' },
        { value: 'em-missao', color: 'caption-tag-09', label: 'Em miss\xE3o' },
        { value: 'reserva', color: 'caption-tag-08', label: 'Reserva' },
        { value: 'inativo', color: 'caption-tag-06', label: 'Inativo' },
        { value: 'ferido', color: 'caption-tag-07', label: 'Ferido' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'ativo', label: 'Ativo' },
          { value: 'em-missao', label: 'Em miss\xE3o' },
          { value: 'reserva', label: 'Reserva' },
          { value: 'inativo', label: 'Inativo' },
          { value: 'ferido', label: 'Ferido' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    }
  ];
  childGridRowsActions!: ThfGridRowActions;
  childGridItems: Array<any> = [];
  childGridItemsUpdated: Array<any> = [];
  childGridSelectedItem: any;
  childGridDisabledIncludeButton: boolean = true;

  constructor(private readonly notificationService: PoNotificationService) {}

  ngOnInit() {
    this.mainGridRowsActions = {
      title: this.mainGridTitle,
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.heroes = this.duplicatingHeroes ?? [];
          this.duplicatingHeroes = null;
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          name: new FormControl(dataItem.name, [Validators.required]),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
        });
      },
      afterRemove: this.afterRemoveMainGrid.bind(this),
      afterUndoRemove: this.afterUndoRemoveMainGrid.bind(this)
    };

    this.mainGridItemsUpdated = [...this.mainGridItems];

    this.childGridRowsActions = {
      title: this.childGridTitle,
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.heroes = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          name: new FormControl(dataItem.name, [Validators.required]),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
        });
      },
      change: this.changeChildGrid.bind(this),
      beforeUndoRemove: this.beforeUndoRemoveChildGrid.bind(this),
      afterRemove: this.afterRemoveChildGrid.bind(this),
      afterUndoRemove: this.afterUndoRemoveChildGrid.bind(this),
    };

    this.childGridItemsUpdated = [];
  }

  handleMainGridSelection(event: any) {
    console.log('Selected item from main grid: ', event);
    this.mainGridSelectedItem = event;
    this.childGridItems = event.heroes || [];
    this.childGridDisabledIncludeButton = !!event.$removed;
    this.childGridRowsActions.title = this.childGridTitle + ' - ' + event.name;

    if (event.$removed) {
      this.childGrid.setRowStateFilter('removed', false, false);
    } else {
      this.childGrid.setRowStateFilter('active', false, false);
    }
  }

  handleMainGridUnselection(event?: any) {
    console.log('Unselected item from main grid: ', event);
    this.mainGridSelectedItem = undefined;
    this.childGridItems = [];
    this.childGridDisabledIncludeButton = true;
    this.childGridRowsActions.title = this.childGridTitle;
  }

  afterRemoveMainGrid(removedItem: any) {
    console.log('Removed item from main grid: ', removedItem);
    removedItem.status = 'inativo';
    removedItem.heroes.forEach((hero: any) => {
      hero.$removed = true;
      hero.status = 'inativo';
      this.childGrid.updateItem(hero, hero);
    });
  }

  afterUndoRemoveMainGrid(undoRemovedItem: any) {
    console.log('Undo removed item from main grid: ', undoRemovedItem);
    undoRemovedItem.status = 'ativo';
    undoRemovedItem.heroes.forEach((hero: any) => {
      hero.$removed = false;
      hero.status = 'ativo';
      this.childGrid.updateItem(hero, hero);
    });
  }

  beforeUndoRemoveChildGrid(undoRemovedItem: any) {
    console.log('Before undo remove item from child grid: ', undoRemovedItem);
    const parentItem = this.mainGrid.gridData.find((item: any) =>
      item.heroes?.includes(undoRemovedItem)
    );
    if (parentItem?.$removed) {
      this.notificationService.warning('N\xE3o \xE9 poss\xEDvel desfazer a remo\xE7\xE3o de um her\xF3i de um time inativo.');
      return false;
    }
    return true;
  }

  afterRemoveChildGrid(removedItem: any) {
    console.log('Removed item from child grid: ', removedItem);
    removedItem.status = 'inativo';
    this.childGrid.updateItem(removedItem, removedItem);
  }

  afterUndoRemoveChildGrid(undoRemovedItem: any) {
    console.log('Undo removed item from child grid: ', undoRemovedItem);
    undoRemovedItem.status = 'ativo';
    this.childGrid.updateItem(undoRemovedItem, undoRemovedItem);
  }

  beforeDuplicateMainGrid(event: any) {
    console.log('Before duplicate main grid: ', event);
    this.duplicatingHeroes = structuredClone(event.sourceRow.heroes || []);
  }

  afterDuplicateMainGrid(event: any) {
    console.log('After duplicate main grid: ', event);
  }

  afterDuplicateChildGrid(event: any) {
    console.log('After duplicate child grid: ', event);
    if (this.mainGridSelectedItem) {
      const heroes = this.mainGridSelectedItem.heroes;
      const sourceIndex = heroes.findIndex((h: any) => h.id === event.sourceRow.id);
      heroes.splice(sourceIndex > -1 ? sourceIndex + 1 : heroes.length, 0, event.duplicatedRow);
    }
  }

  changeChildGrid(changedItems: any) {
    console.log('Child grid change event: ', changedItems);
    if (this.mainGridSelectedItem) {
      this.mainGridSelectedItem.heroes = this.childGrid.gridData;
    }
  }

  onMainGridRowStateFilter(filter: any) {
    // Aplica novamente a sele\xE7\xE3o do item
    if (
      this.mainGridSelectedItem !== undefined && (
        (filter === 'active' && !this.mainGridSelectedItem?.$removed) ||
        (filter === 'removed' && this.mainGridSelectedItem?.$removed)
      )
    ) {
      this.mainGrid.selectRowItem(this.mainGridSelectedItem);
    }

    this.childGrid.setRowStateFilter(filter, false, false);
  }

  onBack(): void {
    this.notify('Voltar (page secondary)');
  }

  private notify(message: string): void {
    this.notificationService.information(message);
  }
}
`;var Qn=["mainGrid"],Bn=["childGrid"],ri=(()=>{class d{constructor(a){this.notificationService=a,this.htmlCode=oi,this.tsCode=ai,this.leftActions=[{label:"",icon:"an an-star",action:()=>window.open("https://github.com/po-ui/po-angular")},{label:"Exportar",icon:"an an-export",action:()=>this.notify("Exportar")}],this.rightActions=[{label:"Filtrar",icon:"an an-funnel",action:()=>this.notify("Filtrar")},{label:"Atualizar",icon:"an an-arrows-clockwise",action:()=>this.notify("Atualizar")}],this.mainGridTitle="Equipes (Tabela Pai)",this.childGridTitle="Her\xF3is (Tabela Filha)",this.disabledIncludeButton=!1,this.duplicatingHeroes=null,this.mainGridColumns=[{property:"id",label:"id",editProperties:{disabled:!0},width:"100px"},{property:"name",label:"Nome",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o nome da equipe"}},{property:"status",label:"Status",type:"label",labels:[{value:"ativo",color:"caption-tag-11",label:"Ativo"},{value:"em-missao",color:"caption-tag-09",label:"Em miss\xE3o"},{value:"inativo",color:"caption-tag-06",label:"Inativo"},{value:"ferido",color:"caption-tag-07",label:"Ferido"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"ativo",label:"Ativo"},{value:"em-missao",label:"Em miss\xE3o"},{value:"inativo",label:"Inativo"},{value:"ferido",label:"Ferido"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}}],this.mainGridItems=[{id:1,name:"Vingadores",status:"ativo",heroes:[{id:11,name:"Homem de Ferro",status:"ativo"},{id:12,name:"Capit\xE3o Am\xE9rica",status:"em-missao"},{id:13,name:"Thor",status:"ativo"}]},{id:2,name:"X-man",status:"em-missao",heroes:[{id:21,name:"Wolverine",status:"ativo"},{id:22,name:"Ciclope",status:"reserva"},{id:23,name:"Jean Grey",status:"ferido"}]},{id:3,name:"Jovens Tit\xE3s",status:"ativo",heroes:[{id:30,name:"Ciborgue",status:"ativo"},{id:31,name:"Estelar",status:"ativo"},{id:32,name:"Mutano",status:"ativo"},{id:33,name:"Ravena",status:"reserva"},{id:34,name:"Robin",status:"ativo"}]},{id:4,name:"Liga da Justi\xE7a",status:"ativo",heroes:[{id:41,name:"Superman",status:"ativo"},{id:42,name:"Batman",status:"reserva"},{id:43,name:"Mulher Maravilha",status:"em-missao"}]}],this.mainGridItemsUpdated=[],this.childGridColumns=[{property:"id",label:"id",editProperties:{disabled:!0},width:"100px"},{property:"name",label:"Nome",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o nome da empresa"}},{property:"status",label:"Status",type:"label",labels:[{value:"ativo",color:"caption-tag-11",label:"Ativo"},{value:"em-missao",color:"caption-tag-09",label:"Em miss\xE3o"},{value:"reserva",color:"caption-tag-08",label:"Reserva"},{value:"inativo",color:"caption-tag-06",label:"Inativo"},{value:"ferido",color:"caption-tag-07",label:"Ferido"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"ativo",label:"Ativo"},{value:"em-missao",label:"Em miss\xE3o"},{value:"reserva",label:"Reserva"},{value:"inativo",label:"Inativo"},{value:"ferido",label:"Ferido"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}}],this.childGridItems=[],this.childGridItemsUpdated=[],this.childGridDisabledIncludeButton=!0}ngOnInit(){this.mainGridRowsActions={title:this.mainGridTitle,hiddenGrid:!1,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.heroes=this.duplicatingHeroes??[],this.duplicatingHeroes=null,this.currentIdItem=a.id),new N({name:new S(a.name,[q.required]),status:new S(a.status,[q.min(1)])})),afterRemove:this.afterRemoveMainGrid.bind(this),afterUndoRemove:this.afterUndoRemoveMainGrid.bind(this)},this.mainGridItemsUpdated=[...this.mainGridItems],this.childGridRowsActions={title:this.childGridTitle,hiddenGrid:!1,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.heroes=[],this.currentIdItem=a.id),new N({name:new S(a.name,[q.required]),status:new S(a.status,[q.min(1)])})),change:this.changeChildGrid.bind(this),beforeUndoRemove:this.beforeUndoRemoveChildGrid.bind(this),afterRemove:this.afterRemoveChildGrid.bind(this),afterUndoRemove:this.afterUndoRemoveChildGrid.bind(this)},this.childGridItemsUpdated=[]}handleMainGridSelection(a){console.log("Selected item from main grid: ",a),this.mainGridSelectedItem=a,this.childGridItems=a.heroes||[],this.childGridDisabledIncludeButton=!!a.$removed,this.childGridRowsActions.title=this.childGridTitle+" - "+a.name,a.$removed?this.childGrid.setRowStateFilter("removed",!1,!1):this.childGrid.setRowStateFilter("active",!1,!1)}handleMainGridUnselection(a){console.log("Unselected item from main grid: ",a),this.mainGridSelectedItem=void 0,this.childGridItems=[],this.childGridDisabledIncludeButton=!0,this.childGridRowsActions.title=this.childGridTitle}afterRemoveMainGrid(a){console.log("Removed item from main grid: ",a),a.status="inativo",a.heroes.forEach(r=>{r.$removed=!0,r.status="inativo",this.childGrid.updateItem(r,r)})}afterUndoRemoveMainGrid(a){console.log("Undo removed item from main grid: ",a),a.status="ativo",a.heroes.forEach(r=>{r.$removed=!1,r.status="ativo",this.childGrid.updateItem(r,r)})}beforeUndoRemoveChildGrid(a){return console.log("Before undo remove item from child grid: ",a),this.mainGrid.gridData.find(n=>n.heroes?.includes(a))?.$removed?(this.notificationService.warning("N\xE3o \xE9 poss\xEDvel desfazer a remo\xE7\xE3o de um her\xF3i de um time inativo."),!1):!0}afterRemoveChildGrid(a){console.log("Removed item from child grid: ",a),a.status="inativo",this.childGrid.updateItem(a,a)}afterUndoRemoveChildGrid(a){console.log("Undo removed item from child grid: ",a),a.status="ativo",this.childGrid.updateItem(a,a)}beforeDuplicateMainGrid(a){console.log("Before duplicate main grid: ",a),this.duplicatingHeroes=structuredClone(a.sourceRow.heroes||[])}afterDuplicateMainGrid(a){console.log("After duplicate main grid: ",a)}afterDuplicateChildGrid(a){if(console.log("After duplicate child grid: ",a),this.mainGridSelectedItem){let r=this.mainGridSelectedItem.heroes,n=r.findIndex(l=>l.id===a.sourceRow.id);r.splice(n>-1?n+1:r.length,0,a.duplicatedRow)}}changeChildGrid(a){console.log("Child grid change event: ",a),this.mainGridSelectedItem&&(this.mainGridSelectedItem.heroes=this.childGrid.gridData)}onMainGridRowStateFilter(a){this.mainGridSelectedItem!==void 0&&(a==="active"&&!this.mainGridSelectedItem?.$removed||a==="removed"&&this.mainGridSelectedItem?.$removed)&&this.mainGrid.selectRowItem(this.mainGridSelectedItem),this.childGrid.setRowStateFilter(a,!1,!1)}onBack(){this.notify("Voltar (page secondary)")}notify(a){this.notificationService.information(a)}static{this.\u0275fac=function(r){return new(r||d)(I(ie))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-parent-detail-editing-doc"]],viewQuery:function(r,n){if(r&1&&F(Qn,5)(Bn,5),r&2){let l;D(l=w())&&(n.mainGrid=l.first),D(l=w())&&(n.childGrid=l.first)}},standalone:!1,decls:14,vars:19,consts:[["mainGrid",""],["childGrid",""],[1,"po-font-text-large-bold"],["p-title","Empresas","p-subtitle","Exibindo 4 de 4","p-page-header-type","primary","p-page-actions-layout","mixed",3,"p-actions"],[3,"t-selected","t-unselected","t-change-row-state-filter","t-items","t-columns","t-grid-row-actions","t-actions-right","t-selectable","t-single-select","t-selectable-removed","t-selectable-entire-line"],["p-title","Filial","p-subtitle","Controle de funcionarios","p-page-header-type","secondary","p-page-actions-layout","dropdown",3,"p-back","p-actions"],[3,"t-after-duplicate","t-items","t-columns","t-grid-row-actions","t-disabled-include-button","t-actions-right","t-selectable","t-single-select"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",2),e(2,"Edi\xE7\xE3o Flu\xEDda em Grade (Pai-Filha)"),t(),o(3,"po-divider"),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"po-page-default",3)(7,"thf-grid",4,0),v("t-selected",function(E){return n.handleMainGridSelection(E)})("t-unselected",function(E){return n.handleMainGridUnselection(E)})("t-change-row-state-filter",function(E){return n.onMainGridRowStateFilter(E)}),t()()(),i(9,"thf-splitter-pane")(10,"po-page-default",5),v("p-back",function(){return n.onBack()}),i(11,"thf-grid",6,1),v("t-after-duplicate",function(E){return n.afterDuplicateChildGrid(E)}),t()()()(),o(13,"app-code-accordion-doc",7),t()),r&2&&(m(6),s("p-actions",n.leftActions),m(),s("t-items",n.mainGridItems)("t-columns",n.mainGridColumns)("t-grid-row-actions",n.mainGridRowsActions)("t-actions-right",!0)("t-selectable",!0)("t-single-select",!0)("t-selectable-removed",!0)("t-selectable-entire-line",!1),m(3),s("p-actions",n.rightActions),m(),s("t-items",n.childGridItems)("t-columns",n.childGridColumns)("t-grid-row-actions",n.childGridRowsActions)("t-disabled-include-button",n.childGridDisabledIncludeButton)("t-actions-right",!0)("t-selectable",!1)("t-single-select",!1),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[g,C,K,R,ae,oe,P],encapsulation:2})}}return d})();var li=`<thf-grid
  #gridComponent
  t-spacing="small"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-single-select]="true"
  [t-columns]="columnWithItems"
  [t-items]="items"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-actions-right]="true"
  [t-auto-size]="false"
  [t-height]="500"
  [t-virtual-columns]="true"
  [t-virtual-scroll]="true"
/>`,di=`import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridEditProperties,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-virtual-doc',
  templateUrl: './thf-grid-virtual-doc.component.html',
  standalone: false,
})
export class ThfGridVirtualDocComponent implements OnInit {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  gridRowsActionsWithItems!: ThfGridRowActions;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      filter: true,
      editProperties: { componentEditable: 'number', disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
      filter: true,
      editProperties: {
        required: true,
        componentEditable: 'input',
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
        keydown: this.onKeyDown.bind(this, 'name'),
      },
    },
    {
      property: 'status',
      label: 'Status',
      filter: true,
      labels: [
        { value: 1, color: 'caption-tag-11', label: 'Ativo' },
        { value: 2, color: 'caption-tag-08', label: 'Inativo' },
      ],
      editProperties: {
        componentEditable: 'combo',
        required: true,
        disabledInitFilter: true,
        options: [
          { value: 1, label: 'Ativo' },
          { value: 2, label: 'Inativo' },
          { value: 0, label: 'Other' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
        controlValueWithLabel: true,
      },
    },
    {
      property: 'values',
      label: 'Values',
      filter: true,
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: false,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        help: 'Input lookup',
        keydown: this.onKeyDown.bind(this, 'values'),
        controlValueWithLabel: true,
      },
    },

    {
      property: 'number',
      label: 'Number',
      type: 'number',
      filter: true,
      editProperties: {
        componentEditable: 'number',
        errorMessage: 'Number \xE9 obrigat\xF3rio',
        help: 'Input number',
        helper: 'Digite um n\xFAmero aqui',
      },
    },
    {
      property: 'datepicker',
      label: 'datepicker',
      filter: true,
      type: 'date',
      editProperties: {
        componentEditable: 'datepicker',
        errorMessage: 'Datepicker \xE9 obrigat\xF3rio',
        help: 'Entre com a data',
        helper: 'Valor do tipo date',
      },
    },
    {
      property: 'timepicker',
      label: 'timepicker',
      filter: true,
      type: 'time',
      format: 'HH:mm',
      editProperties: {
        componentEditable: 'timepicker',
        errorMessage: 'Timepicker \xE9 obrigat\xF3rio',
        help: 'Entre com a hora',
        helper: 'Valor do tipo time',
        showSeconds: false,
        placeholder: 'HH:mm'
      },
    },
    {
      property: 'otherStatus',
      label: 'Outro Status',
      filter: true,
      editProperties: {
        componentEditable: 'multiselect',
        options: [
          { value: 123, label: 'Ativo' },
          { value: 233, label: 'Inativo' },
          { value: 3, label: 'Other' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        errorMessage: 'Obrigat\xF3rio',
        helper: 'Marque um ou mais status, conforme necess\xE1rio.',
        help: 'status',
        keydown: this.onKeyDown.bind(this, 'otherStatus'),
        controlValueWithLabel: true,
      },
    },
    {
      property: 'select',
      label: 'select',
      filter: true,
      editProperties: {
        componentEditable: 'select',
        options: [
          { value: 123, label: 'Ativo' },
          { value: 233, label: 'Inativo' },
          { value: 3, label: 'Other' },
        ],
        errorMessage: 'select \xE9 obrigat\xF3rio',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'switch',
      label: 'switch',
      filter: true,
      type: 'boolean',
      editProperties: {
        componentEditable: 'switch',
        hideLabelStatus: false,
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'decimal',
      label: 'decimal',
      type: 'currency',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'checkbox',
      label: 'checkbox',
      filter: true,
      type: 'boolean',
      editProperties: {
        componentEditable: 'checkbox',
        disabled: false,
        help: 'lorem impsum',
        helper: ' ok ok ok',
      },
    },
    {
      property: 'valuesx',
      label: 'Valuesx',
      filter: true,
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        help: 'Input lookup',
        keydown: this.onKeyDown.bind(this, 'valuesx'),
        controlValueWithLabel: true,
      },
    },
  ];

  items: any[] = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      valuesx: [1495831666871],
      otherStatus: [233],
      number: 1,
      datepicker: '1980-11-01',
      timepicker: '09:00',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      valuesx: [1495831698598],
      otherStatus: [233],
      number: 2,
      datepicker: '1980-11-02',
      timepicker: '10:00',
      select: '3',
      switch: false,
      decimal: 223.45,
      checkbox: false,
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      valuesx: [1495832652942],
      otherStatus: [3],
      number: 3,
      datepicker: '1980-11-03',
      timepicker: '11:00',
      select: '3',
      switch: true,
      decimal: 323.45,
      checkbox: true,
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      valuesx: [1495832683682],
      otherStatus: [3],
      number: 4,
      datepicker: '1980-11-04',
      timepicker: '12:00',
      select: '3',
      switch: false,
      decimal: 423.45,
      checkbox: false,
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      valuesx: [1495833068596],
      otherStatus: [233],
      number: 5,
      datepicker: '1980-11-05',
      timepicker: '13:00',
      select: '3',
      switch: true,
      decimal: 523.45,
      checkbox: true,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      valuesx: [1495833068597],
      otherStatus: [233],
      number: 6,
      datepicker: '1980-11-06',
      timepicker: '14:00',
      select: '3',
      switch: false,
      decimal: 623.456,
      checkbox: false,
    },
  ];

  form!: FormGroup;
  itemsUpdated: Array<any> = [];
  editProperties!: ThfGridEditProperties;
  currentIdItem: any;

  ngOnInit() {
    this.editProperties = {
      actionEdit: this.setFormGroup.bind(this),
    };

    for (let i = 1; i <= 600; i++) {
      const prop = \`property\` + i;
      this.columnWithItems.push({
        property: prop,
        label: \`Dynamic\` + i,
        editProperties: { componentEditable: 'input', disabled: false },
      });
    }

    let itemsUpdatedNew = [];

    const baseItem = this.items[0];
    for (let i = 1; i <= 10000; i++) {
      const randomId = Date.now() + i;
      const newItem = {
        ...baseItem,
        id: randomId + i,
        name: \`\${baseItem.name} \${i}\`,
      };
      for (let j = 1; j <= 600; j++) {
        newItem[\`property\${j}\`] = \`Valor \${j}\`;
      }

      itemsUpdatedNew.push(newItem);
    }

    this.items = [...this.items, ...itemsUpdatedNew];

    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: true,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        let group: any = {
          name: new FormControl(dataItem.name),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          values: new FormControl(dataItem.values, [Validators.required]),
          valuesx: new FormControl(dataItem.valuesx, [Validators.required]),
          otherStatus: new FormControl(dataItem.otherStatus),
          number: new FormControl(dataItem.number),
          datepicker: new FormControl(dataItem.datepicker),
          timepicker: new FormControl(dataItem.timepicker),
          select: new FormControl(dataItem.select),
          switch: new FormControl(dataItem.switch),
          decimal: new FormControl(dataItem.decimal),
          checkbox: new FormControl(dataItem.checkbox),
        };
        for (let i = 1; i <= 600; i++) {
          group[\`property\${i}\`] = new FormControl(dataItem[\`property\${i}\`]);
        }

        this.form = new FormGroup(group);
        return this.form;
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeSaveSubItems(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    return true;
  }

  onBeforeInsertSubItems(newValue: { id: any; $uuidThfIncluded: any }) {
    newValue.id = newValue.$uuidThfIncluded;
    const item = this.itemsUpdated.find(
      (item) => item.id === this.currentIdItem
    );
    item.dependents = item.dependents
      ? [...item.dependents, newValue]
      : [newValue];
    return true;
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  setFormGroup(dataItem: any) {
    this.form = new FormGroup({
      id: new FormControl(dataItem.id, [Validators.required]),
      name: new FormControl(dataItem.name),
      city: new FormControl(dataItem.city),
      birthdate: new FormControl(dataItem.birthdate),
      status: new FormControl(dataItem.status),
      email: new FormControl(dataItem.email),
    });
    return this.form;
  }
}
`;var Un=["gridComponent"],mi=(()=>{class d{constructor(){this.htmlCode=li,this.tsCode=di,this.columnWithItems=[{property:"id",label:"id",filter:!0,editProperties:{componentEditable:"number",disabled:!0}},{property:"name",label:"Nome",filter:!0,editProperties:{required:!0,componentEditable:"input",errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,helper:"Informe pelo menos o primeiro nome.",help:"Input text",keydown:this.onKeyDown.bind(this,"name")}},{property:"status",label:"Status",filter:!0,labels:[{value:1,color:"caption-tag-11",label:"Ativo"},{value:2,color:"caption-tag-08",label:"Inativo"}],editProperties:{componentEditable:"combo",required:!0,disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value",helper:"Informe pelo menos o primeiro nome.",help:"Input text",controlValueWithLabel:!0}},{property:"values",label:"Values",filter:!0,editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!1,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"values"),controlValueWithLabel:!0}},{property:"number",label:"Number",type:"number",filter:!0,editProperties:{componentEditable:"number",errorMessage:"Number \xE9 obrigat\xF3rio",help:"Input number",helper:"Digite um n\xFAmero aqui"}},{property:"datepicker",label:"datepicker",filter:!0,type:"date",editProperties:{componentEditable:"datepicker",errorMessage:"Datepicker \xE9 obrigat\xF3rio",help:"Entre com a data",helper:"Valor do tipo date"}},{property:"timepicker",label:"timepicker",filter:!0,type:"time",format:"HH:mm",editProperties:{componentEditable:"timepicker",errorMessage:"Timepicker \xE9 obrigat\xF3rio",help:"Entre com a hora",helper:"Valor do tipo time",showSeconds:!1,placeholder:"HH:mm"}},{property:"otherStatus",label:"Outro Status",filter:!0,editProperties:{componentEditable:"multiselect",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],fieldLabel:"label",fieldValue:"value",errorMessage:"Obrigat\xF3rio",helper:"Marque um ou mais status, conforme necess\xE1rio.",help:"status",keydown:this.onKeyDown.bind(this,"otherStatus"),controlValueWithLabel:!0}},{property:"select",label:"select",filter:!0,editProperties:{componentEditable:"select",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],errorMessage:"select \xE9 obrigat\xF3rio",helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"switch",label:"switch",filter:!0,type:"boolean",editProperties:{componentEditable:"switch",hideLabelStatus:!1,helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"decimal",label:"decimal",type:"currency",filter:!0,editProperties:{componentEditable:"decimal",helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"checkbox",label:"checkbox",filter:!0,type:"boolean",editProperties:{componentEditable:"checkbox",disabled:!1,help:"lorem impsum",helper:" ok ok ok"}},{property:"valuesx",label:"Valuesx",filter:!0,editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"valuesx"),controlValueWithLabel:!0}}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",timepicker:"09:00",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",timepicker:"10:00",select:"3",switch:!1,decimal:223.45,checkbox:!1},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",timepicker:"11:00",select:"3",switch:!0,decimal:323.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",timepicker:"12:00",select:"3",switch:!1,decimal:423.45,checkbox:!1},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",timepicker:"13:00",select:"3",switch:!0,decimal:523.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",timepicker:"14:00",select:"3",switch:!1,decimal:623.456,checkbox:!1}],this.itemsUpdated=[]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)};for(let n=1;n<=600;n++){let l=`property${n}`;this.columnWithItems.push({property:l,label:`Dynamic ${n}`,editProperties:{componentEditable:"input",disabled:!1}})}let a=[],r=this.items[0];for(let n=1;n<=1e4;n++){let l=Date.now()+n,E=de(re({},r),{id:l+n,name:`${r.name} ${n}`});for(let k=1;k<=600;k++)E[`property${k}`]=`Valor ${k}`;a.push(E)}this.items=[...this.items,...a],this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!0,actionEdit:(n,l)=>{l==="include"&&!n.id&&(console.log("mode: ",l),n.id=n.$uuidThfIncluded,n.dependents=[],this.currentIdItem=n.id);let E={name:new S(n.name),status:new S(n.status,[q.min(1)]),values:new S(n.values,[q.required]),valuesx:new S(n.values,[q.required]),otherStatus:new S(n.otherStatus),number:new S(n.number),datepicker:new S(n.datepicker),timepicker:new S(n.timepicker),select:new S(n.select),switch:new S(n.switch),decimal:new S(n.decimal),checkbox:new S(n.checkbox)};for(let k=1;k<=600;k++)E[`property${k}`]=new S(n[`property${k}`]);return this.form=new N(E),this.form},afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeSaveSubItems(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){return console.log("before insert new value: ",a),this.itemsUpdated=[...this.itemsUpdated,a],!0}onBeforeInsertSubItems(a){a.id=a.$uuidThfIncluded;let r=this.itemsUpdated.find(n=>n.id===this.currentIdItem);return r.dependents=r.dependents?[...r.dependents,a]:[a],!0}onBeforeRemove(a){return!0}onAfterSave(a){console.log("onAfterSave(new): ",a)}onAfterRemove(a){return console.log("afterRemove: ",a),!0}setFormGroup(a){return this.form=new N({id:new S(a.id,[q.required]),name:new S(a.name),city:new S(a.city),birthdate:new S(a.birthdate),status:new S(a.status),email:new S(a.email)}),this.form}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-virtual-doc"]],viewQuery:function(r,n){if(r&1&&F(Un,5),r&2){let l;D(l=w())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:13,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","small",3,"t-selectable","t-selectable-entire-line","t-single-select","t-columns","t-items","t-grid-row-actions","t-actions-right","t-auto-size","t-height","t-virtual-columns","t-virtual-scroll"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando virtual-columns e virtual-scroll"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-selectable",!0)("t-selectable-entire-line",!1)("t-single-select",!0)("t-columns",n.columnWithItems)("t-items",n.items)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-actions-right",!0)("t-auto-size",!1)("t-height",500)("t-virtual-columns",!0)("t-virtual-scroll",!0),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[g,C,R,P],encapsulation:2})}}return d})();function $n(d,y){d&1&&o(0,"app-thf-grid-basic-doc")}function Kn(d,y){d&1&&o(0,"app-thf-grid-editing-inline-doc")}function Jn(d,y){d&1&&o(0,"app-thf-grid-row-actions-doc")}function Zn(d,y){d&1&&o(0,"app-thf-grid-aggregates-doc")}function Yn(d,y){d&1&&o(0,"app-thf-grid-editing-fluid-currency-doc")}function Xn(d,y){d&1&&o(0,"app-thf-grid-delete-service-doc")}function e0(d,y){d&1&&o(0,"app-thf-grid-virtual-doc")}function t0(d,y){d&1&&o(0,"app-thf-grid-dynamic-properties")}function i0(d,y){d&1&&o(0,"app-thf-grid-auto-fit-scroll")}function n0(d,y){d&1&&o(0,"app-thf-grid-parent-detail-editing-doc")}var si=(()=>{class d{constructor(){this.samples=[{label:"Basic Service",value:"basic"},{label:"Edi\xE7\xE3o em Linha",value:"editing-inline"},{label:"Edi\xE7\xE3o Flu\xEDda",value:"row-actions"},{label:"Totalizador e Filtro por Colunas",value:"aggregates"},{label:"Edi\xE7\xE3o Flu\xEDda com Casas Decimais e A\xE7\xF5es em Lote",value:"editing-fluid-currency"},{label:"Grid Dele\xE7\xE3o com Servi\xE7o Customizado",value:"delete-service"},{label:"Grid utilizando virtual-columns e virtual-scroll",value:"virtual"},{label:"Edi\xE7\xE3o com Propriedades din\xE2micas",value:"dynamic-properties"},{label:"Grid utilizando auto-size e auto-fit-on-scroll",value:"auto-fit-scroll"},{label:"Edi\xE7\xE3o Flu\xEDda em Grade (Pai-Filha)",value:"parent-detail-editing"}],this.activeSample="basic"}setActiveSample(a){this.activeSample=a}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid"]],standalone:!1,decls:16,vars:12,consts:[["p-title","THF-Grid","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview","",1,"samples-container"],["p-label","Selecione um exemplo",3,"ngModelChange","ngModel","p-options"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-grid")(2,"div",1)(3,"po-select",2),f("ngModelChange",function(E){return h(n.activeSample,E)||(n.activeSample=E),E}),t(),L(4,$n,1,0,"app-thf-grid-basic-doc"),L(5,Kn,1,0,"app-thf-grid-editing-inline-doc"),L(6,Jn,1,0,"app-thf-grid-row-actions-doc"),L(7,Zn,1,0,"app-thf-grid-aggregates-doc"),L(8,Yn,1,0,"app-thf-grid-editing-fluid-currency-doc"),L(9,Xn,1,0,"app-thf-grid-delete-service-doc"),L(10,e0,1,0,"app-thf-grid-virtual-doc"),L(11,t0,1,0,"app-thf-grid-dynamic-properties"),L(12,i0,1,0,"app-thf-grid-auto-fit-scroll"),L(13,n0,1,0,"app-thf-grid-parent-detail-editing-doc"),t(),i(14,"div",3),o(15,"app-thf-grid-labs-doc"),t()()()),r&2&&(m(3),b("ngModel",n.activeSample),s("p-options",n.samples),m(),M(n.activeSample==="basic"?4:-1),m(),M(n.activeSample==="editing-inline"?5:-1),m(),M(n.activeSample==="row-actions"?6:-1),m(),M(n.activeSample==="aggregates"?7:-1),m(),M(n.activeSample==="editing-fluid-currency"?8:-1),m(),M(n.activeSample==="delete-service"?9:-1),m(),M(n.activeSample==="virtual"?10:-1),m(),M(n.activeSample==="dynamic-properties"?11:-1),m(),M(n.activeSample==="auto-fit-scroll"?12:-1),m(),M(n.activeSample==="parent-detail-editing"?13:-1))},dependencies:[G,H,ge,K,Ct,Ft,Mt,Vt,Nt,Ht,$t,Zt,ei,ni,ri,mi],encapsulation:2})}}return d})();var pi=`<po-container>
  <span class="po-font-text-large-bold">Labs</span>
  <po-divider class="po-divider-mb-0-75"></po-divider>

  <thf-lookup
    name="lookup"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    [t-helper]="helperText"
    [t-auto-height]="otherProperties.includes('autoHeight')"
    [t-clean]="otherProperties.includes('clean')"
    [t-columns]="columns"
    [t-compact-label]="otherProperties.includes('compactLabel')"
    [t-disabled]="otherProperties.includes('disabled')"
    [t-error-limit]="otherProperties.includes('fieldErrorLimit')"
    [t-field-error-message]="fieldErrorMessage"
    [t-field-format]="fieldFormat"
    [t-field-label]="fieldLabel"
    [t-field-value]="fieldValue"
    [t-field-error-message]="fieldErrorMessage"
    [t-filter-search-select]="customFilterSearchSelect"
    [t-grid-properties]="gridProperties"
    [t-help]="help"
    [t-keys-label]="customKeysLabel"
    [t-label]="label"
    [t-literals]="customLiterals"
    [t-loading]="otherProperties.includes('loading')"
    [t-modal-size]="lookupModalSize"
    [t-multiple]="otherProperties.includes('multiple')"
    [t-no-autocomplete]="otherProperties.includes('noAutoComplete')"
    [t-optional]="otherProperties.includes('optional')"
    [t-placeholder]="placeholder"
    [t-required]="otherProperties.includes('required')"
    [t-show-required]="otherProperties.includes('showRequired')"
    [t-search-on-enter]="searchOnEnter"
    [t-size]="size"
    [t-label-text-wrap]="otherProperties?.includes('labelTextWrap')"
    (t-change)="changeEvent('t-change')"
    (t-error)="changeEvent('t-error')"
    (t-selected)="changeEvent('t-selected')"
    (t-focus)="changeEvent('t-focus')"
    (t-keydown)="changeEvent('t-keydown')"
    (t-rows-selected)="changeEvent('t-rows-selected')"
    [(ngModel)]="lookupSingle"
  ></thf-lookup>

  <po-container class="po-mt-1" style="display: flex">
    <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
  </po-container>

    <div class="po-row po-mt-2 po-mb-2" style="display: block">
      <po-container class="po-mb-2" style="display: flex">
        <po-input
          class="po-md-6"
          name="label"
          [(ngModel)]="label"
          p-clean
          p-label="Label"
        ></po-input>
        <po-input
          class="po-md-6"
          name="help"
          [(ngModel)]="help"
          p-clean
          p-label="Help"
        ></po-input>
        <po-input
          class="po-md-6"
          name="helperText"
          [(ngModel)]="helperText"
          p-clean
          p-label="Additional Help"
        >
        </po-input>
        <po-input
          class="po-md-6"
          name="placeholder"
          [(ngModel)]="placeholder"
          p-clean
          p-label="Placeholder"
        ></po-input>

        <po-input
          class="po-md-6"
          name="fieldErrorMessage"
          [(ngModel)]="fieldErrorMessage"
          p-clean
          p-label="Field Error Message"
        ></po-input>

        <po-select
          class="po-md-6 po-lg-3"
          name="fieldLabel"
          [(ngModel)]="fieldLabel"
          p-label="Field Label"
          p-required
          [p-options]="fieldLabelOptions"
        ></po-select>

        <po-select
          class="po-md-6 po-lg-3"
          name="fieldValue"
          [(ngModel)]="fieldValue"
          p-label="Field Value"
          p-required
          [p-options]="fieldValueOptions"
        ></po-select>

        <po-input
          name="formatField"
          [(ngModel)]="fieldFormat"
          class="po-md-6"
          p-label="Field Format"
          p-help='Ex.: ["id", "name"]'
          (p-change)="onFieldFormatChange($event)"
        >
        </po-input>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="columnsName"
          [(ngModel)]="columnsName"
          [p-columns]="4"
          p-label="Columns"
          [p-options]="columnsOptions"
          (p-change)="updateColumns()"
        ></po-checkbox-group>
        <po-checkbox-group
          name="gridPropertiesName"
          [(ngModel)]="gridPropertiesName"
          [p-columns]="4"
          p-label="Grid Properties"
          [p-options]="gridPropertiesOptions"
          (p-change)="updateGridProperties()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="otherProperties"
          p-label="Other Properties"
          [p-columns]="4"
          [p-options]="otherPropertiesOptions"
          [(ngModel)]="otherProperties"
          (p-change)="changeOtherPropertiesOptions()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="lookupModalSize"
          p-label="Modal Size"
          [p-columns]="3"
          [p-options]="lookupModalSizeOptions"
          [(ngModel)]="lookupModalSize"
        ></po-radio-group>

        <po-radio-group
          class="po-lg-6"
          name="searchOnEnter"
          [(ngModel)]="searchOnEnter"
          p-label="SearchOnEnter"
          [p-options]="searchOnEnterOptions"
        >
        </po-radio-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="size"
          [(ngModel)]="size"
          p-label="Size"
          p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA."
          [p-options]="sizesOptions"
        >
        </po-radio-group>

        <po-textarea
          class="po-lg-6"
          name="literals"
          p-label="Literals"
          p-help='{ "modalTitle": "Busca avan\xE7ada" }'
          [(ngModel)]="literals"
          (p-change-model)="changeLiterals()"
        ></po-textarea>

        <po-textarea
          class="po-lg-6"
          name="filterSearchSelect"
          [(ngModel)]="filterSearchSelect"
          (p-change-model)="changeFilterSearchSelects()"
          p-help='[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]'
          p-label="Filter Search Select"
        ></po-textarea>

        <po-textarea
          class="po-lg-6"
          name="keysLabel"
          [(ngModel)]="keysLabel"
          (p-change-model)="changeKeysLabel()"
          p-help='[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]'
          p-label="Keys Label"
        ></po-textarea>
      </po-container>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-3 po-md-6"
        p-label="Restore"
        (p-click)="restore()"
      >
      </po-button>
    </div>
</po-container>
  `,ci=`import { Component } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption,
} from '@po-ui/ng-components';
import {
  ThfLookupColumn,
  ThfLookupFilterSearchSelect,
  ThfLookupGridProperties,
  ThfLookupKeysLabel,
  ThfLookupLiterals,
  ThfTableAction,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-labs-doc',
  templateUrl: './thf-lookup-labs-doc.component.html',
  styleUrl: './thf-lookup-labs-doc.component.css',
  standalone: false,
})
export class ThfLookupLabsDocComponent {
  helperText: string = '';
  columnsName: Array<string> = ['id', 'name', 'nickname', 'email'];
  gridPropertiesName: Array<string> = [
    'selectableEntireLine',
    'showMoreVisible',
    'striped',
    'sortable',
    'virtualScroll',
  ];
  customFilterSearchSelect: Array<ThfLookupFilterSearchSelect> = [];
  customKeysLabel: Array<ThfLookupKeysLabel> = [];
  customLiterals: ThfLookupLiterals = {};
  event: string = '';
  fieldLabel: string = 'name';
  fieldValue: string = 'value';
  filterSearchSelect: string = '';
  help: string = '';
  keysLabel: string = '';
  label: string = '';
  literals: string = '';
  fieldErrorMessage: string = '';
  lookupSingle: any;
  otherProperties: Array<string> = [];
  placeholder: string = '';
  fieldFormat: Array<string> | undefined;
  lookupModalSize: string = 'lg';
  size: string = 'medium';
  searchOnEnter: 'include' | 'equal' = 'equal';

  columns: Array<ThfLookupColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail' },
  ];

  gridProperties!: ThfLookupGridProperties;

  lookupModalSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' },
    { label: 'auto', value: 'auto' },
  ];

  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Auto Height', value: 'autoHeight' },
    { label: 'Clean', value: 'clean', disabled: false },
    { label: 'Disabled', value: 'disabled' },
    { label: 'Multiple', value: 'multiple' },
    { label: 'No Autocomplete', value: 'noAutoComplete' },
    { label: 'Optional', value: 'optional', disabled: false },
    { label: 'Required', value: 'required' },
    { label: 'Show Required', value: 'showRequired', disabled: true },
    { value: 'fieldErrorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  searchOnEnterOptions: Array<PoRadioGroupOption> = [
    { label: 'equal', value: 'equal' },
    { label: 'include', value: 'include' },
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  readonly gridPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'actions', label: 'Actions' },
    { value: 'actionsRight', label: 'Actions Right' },
    { value: 'autoSize', label: 'AutoSize' },
    { value: 'autoSizeOnScroll', label: 'AutoSizeOnScroll' },
    { value: 'draggable', label: 'Draggable' },
    { value: 'groupable', label: 'Groupable' },
    { value: 'hideSelectAll', label: 'HideSelectAll' },
    { value: 'resizable', label: 'Resizable' },
    { value: 'selectableEntireLine', label: 'SelectableEntireLine' },
    { value: 'striped', label: 'Striped' },
    { value: 'showDraggableIcon', label: 'ShowDraggableIcon' },
    { value: 'showMoreDisabled', label: 'ShowMoreDisabled' },
    { value: 'showMoreVisible', label: 'ShowMoreVisible' },
    { value: 'sortable', label: 'Sortable' },
    { value: 'virtualScroll', label: 'VirtualScroll' },
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Nome' },
    { value: 'nickname', label: 'Apelido' },
    { value: 'email', label: 'E-mail' },
  ];

  readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'Name' },
    ...this.columnsOptions,
  ];

  readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions,
  ];

  private readonly columnsDefinition: any = {
    id: <ThfLookupColumn>{ property: 'id', label: 'Id' },
    name: <ThfLookupColumn>{ property: 'name', label: 'Nome' },
    nickname: <ThfLookupColumn>{ property: 'nickname', label: 'Apelido' },
    email: <ThfLookupColumn>{ property: 'email', label: 'E-mail' },
  };

  customAction: Array<ThfTableAction> = [
    {
      label: 'Visualizar',
      fixed: true,
      action: (item: any) => {
        this.poNotification.information(\`Visualizando: \${item.id} - \${item.name}\`);
      },
      icon: 'ICON_EYE',
    },
    {
      label: 'Editar',
      action: (item: any) => {
        this.poNotification.warning(\`Editando: \${item.id} - \${item.name}\`);
      },
      icon: 'ICON_EDIT',
    },
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  changeFilterSearchSelects() {
    try {
      this.customFilterSearchSelect = JSON.parse(this.filterSearchSelect);
    } catch {
      this.customFilterSearchSelect = [];
    }
  }

  changeKeysLabel() {
    try {
      this.customKeysLabel = JSON.parse(this.keysLabel);
    } catch {
      this.customKeysLabel = [];
    }
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = {};
    }
  }

  changeOtherPropertiesOptions() {
    const multiple = this.otherProperties.includes('multiple');
    const required = this.otherProperties.includes('required');

    this.otherPropertiesOptions[1].disabled = multiple;
    this.otherPropertiesOptions[7].disabled = !required;
    this.otherPropertiesOptions[5].disabled = required;
    this.otherPropertiesOptions = [...this.otherPropertiesOptions];
  }

  onFieldFormatChange(event: any) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  restore() {
    this.helperText = '';
    this.columnsName = ['id', 'name', 'nickname', 'email'];
    this.gridPropertiesName = [
      'selectableEntireLine',
      'showMoreVisible',
      'striped',
      'sortable',
      'virtualScroll',
    ];
    this.customFilterSearchSelect = [];
    this.customKeysLabel = [];
    this.customLiterals = {};
    this.event = '';
    this.fieldErrorMessage = '';
    this.fieldLabel = 'name';
    this.fieldValue = 'value';
    this.filterSearchSelect = '';
    this.help = '';
    this.keysLabel = '';
    this.label = '';
    this.literals = '';
    this.lookupSingle = undefined;
    this.otherProperties = [];
    this.placeholder = '';
    this.fieldFormat = undefined;
    this.size = 'medium';
    this.searchOnEnter = 'equal';
    this.changeFilterSearchSelects();
    this.changeKeysLabel();
    this.changeLiterals();
    this.changeOtherPropertiesOptions();
    this.updateColumns();
    this.updateGridProperties();
    this.lookupModalSize = 'lg';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach((column) =>
      this.columns.push(this.columnsDefinition[column])
    );
  }

  updateGridProperties() {
    const gridProperties: ThfLookupGridProperties = {
      sortable: this.gridPropertiesName.includes('sortable'),
      striped: this.gridPropertiesName.includes('striped'),
      selectableEntireLine: this.gridPropertiesName.includes('selectableEntireLine'),
      showMoreVisible: this.gridPropertiesName.includes('showMoreVisible'),
      groupable: this.gridPropertiesName.includes('groupable'),
      autoSize: this.gridPropertiesName.includes('autoSize'),
      autoSizeOnScroll: this.gridPropertiesName.includes('autoSizeOnScroll'),
      draggable: this.gridPropertiesName.includes('draggable'),
      hideSelectAll: this.gridPropertiesName.includes('hideSelectAll'),
      resizable: this.gridPropertiesName.includes('resizable'),
      showDraggableIcon: this.gridPropertiesName.includes('showDraggableIcon'),
      showMoreDisabled: this.gridPropertiesName.includes('showMoreDisabled'),
      virtualScroll: this.gridPropertiesName.includes('virtualScroll'),
      actions: this.gridPropertiesName.includes('actions') ? this.customAction : undefined,
      actionRight: this.gridPropertiesName.includes('actionsRight'),
    };

    this.gridProperties = gridProperties;
  }
}`;function o0(d,y){if(d&1){let a=z();i(0,"div",7)(1,"po-container",8)(2,"po-input",9),f("ngModelChange",function(n){c(a);let l=p();return h(l.label,n)||(l.label=n),u(n)}),t(),i(3,"po-input",10),f("ngModelChange",function(n){c(a);let l=p();return h(l.help,n)||(l.help=n),u(n)}),t(),i(4,"po-input",11),f("ngModelChange",function(n){c(a);let l=p();return h(l.helperText,n)||(l.helperText=n),u(n)}),t(),i(5,"po-input",12),f("ngModelChange",function(n){c(a);let l=p();return h(l.placeholder,n)||(l.placeholder=n),u(n)}),t(),i(6,"po-input",13),f("ngModelChange",function(n){c(a);let l=p();return h(l.fieldErrorMessage,n)||(l.fieldErrorMessage=n),u(n)}),t(),i(7,"po-select",14),f("ngModelChange",function(n){c(a);let l=p();return h(l.fieldLabel,n)||(l.fieldLabel=n),u(n)}),t(),i(8,"po-select",15),f("ngModelChange",function(n){c(a);let l=p();return h(l.fieldValue,n)||(l.fieldValue=n),u(n)}),t(),i(9,"po-input",16),f("ngModelChange",function(n){c(a);let l=p();return h(l.fieldFormat,n)||(l.fieldFormat=n),u(n)}),v("p-change",function(n){c(a);let l=p();return u(l.onFieldFormatChange(n))}),t()(),i(10,"po-container",8)(11,"po-checkbox-group",17),f("ngModelChange",function(n){c(a);let l=p();return h(l.columnsName,n)||(l.columnsName=n),u(n)}),v("p-change",function(){c(a);let n=p();return u(n.updateColumns())}),t(),i(12,"po-checkbox-group",18),f("ngModelChange",function(n){c(a);let l=p();return h(l.gridPropertiesName,n)||(l.gridPropertiesName=n),u(n)}),v("p-change",function(){c(a);let n=p();return u(n.updateGridProperties())}),t()(),i(13,"po-container",8)(14,"po-checkbox-group",19),f("ngModelChange",function(n){c(a);let l=p();return h(l.otherProperties,n)||(l.otherProperties=n),u(n)}),v("p-change",function(){c(a);let n=p();return u(n.changeOtherPropertiesOptions())}),t()(),i(15,"po-container",8)(16,"po-radio-group",20),f("ngModelChange",function(n){c(a);let l=p();return h(l.lookupModalSize,n)||(l.lookupModalSize=n),u(n)}),t(),i(17,"po-radio-group",21),f("ngModelChange",function(n){c(a);let l=p();return h(l.searchOnEnter,n)||(l.searchOnEnter=n),u(n)}),t()(),i(18,"po-container",8)(19,"po-radio-group",22),f("ngModelChange",function(n){c(a);let l=p();return h(l.size,n)||(l.size=n),u(n)}),t(),i(20,"po-textarea",23),f("ngModelChange",function(n){c(a);let l=p();return h(l.literals,n)||(l.literals=n),u(n)}),v("p-change-model",function(){c(a);let n=p();return u(n.changeLiterals())}),t(),i(21,"po-textarea",24),f("ngModelChange",function(n){c(a);let l=p();return h(l.filterSearchSelect,n)||(l.filterSearchSelect=n),u(n)}),v("p-change-model",function(){c(a);let n=p();return u(n.changeFilterSearchSelects())}),t(),i(22,"po-textarea",25),f("ngModelChange",function(n){c(a);let l=p();return h(l.keysLabel,n)||(l.keysLabel=n),u(n)}),v("p-change-model",function(){c(a);let n=p();return u(n.changeKeysLabel())}),t()()(),i(23,"div",26)(24,"po-button",27),v("p-click",function(){c(a);let n=p();return u(n.restore())}),t()()}if(d&2){let a=p();m(2),b("ngModel",a.label),m(),b("ngModel",a.help),m(),b("ngModel",a.helperText),m(),b("ngModel",a.placeholder),m(),b("ngModel",a.fieldErrorMessage),m(),b("ngModel",a.fieldLabel),s("p-options",a.fieldLabelOptions),m(),b("ngModel",a.fieldValue),s("p-options",a.fieldValueOptions),m(),b("ngModel",a.fieldFormat),m(2),b("ngModel",a.columnsName),s("p-columns",4)("p-options",a.columnsOptions),m(),b("ngModel",a.gridPropertiesName),s("p-columns",4)("p-options",a.gridPropertiesOptions),m(2),s("p-columns",4)("p-options",a.otherPropertiesOptions),b("ngModel",a.otherProperties),m(2),s("p-columns",3)("p-options",a.lookupModalSizeOptions),b("ngModel",a.lookupModalSize),m(),b("ngModel",a.searchOnEnter),s("p-options",a.searchOnEnterOptions),m(2),b("ngModel",a.size),s("p-options",a.sizesOptions),m(),b("ngModel",a.literals),m(),b("ngModel",a.filterSearchSelect),m(),b("ngModel",a.keysLabel)}}var ui=(()=>{class d{constructor(a){this.poNotification=a,this.htmlCode=pi,this.tsCode=ci,this.helperText="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.fieldErrorMessage="",this.otherProperties=[],this.placeholder="",this.lookupModalSize="lg",this.size="medium",this.searchOnEnter="equal",this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.lookupModalSizeOptions=[{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"},{label:"auto",value:"auto"}],this.otherPropertiesOptions=[{label:"Auto Height",value:"autoHeight"},{label:"Clean",value:"clean",disabled:!1},{label:"Disabled",value:"disabled"},{label:"Readonly",value:"readonly"},{label:"Multiple",value:"multiple"},{label:"No Autocomplete",value:"noAutoComplete"},{label:"Optional",value:"optional",disabled:!1},{label:"Required",value:"required"},{label:"Show Required",value:"showRequired",disabled:!0},{value:"fieldErrorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}],this.searchOnEnterOptions=[{label:"equal",value:"equal"},{label:"include",value:"include"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.gridPropertiesOptions=[{value:"actions",label:"Actions"},{value:"actionsRight",label:"Actions Right"},{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Nome"},nickname:{property:"nickname",label:"Apelido"},email:{property:"email",label:"E-mail"}},this.customAction=[{label:"Visualizar",fixed:!0,action:r=>{this.poNotification.information(`Visualizando: ${r.id} - ${r.name}`)},icon:"ICON_EYE"},{label:"Editar",action:r=>{this.poNotification.warning(`Editando: ${r.id} - ${r.name}`)},icon:"ICON_EDIT"}]}ngOnInit(){this.restore()}changeEvent(a){this.event=a}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch(a){this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch(a){this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(a){this.customLiterals={}}}changeOtherPropertiesOptions(){let a=this.otherProperties.includes("multiple"),r=this.otherProperties.includes("required");this.otherPropertiesOptions[1].disabled=a,this.otherPropertiesOptions[8].disabled=!r,this.otherPropertiesOptions[6].disabled=r,this.otherPropertiesOptions=[...this.otherPropertiesOptions]}onFieldFormatChange(a){try{this.fieldFormat=JSON.parse(a)}catch(r){this.fieldFormat=void 0}}restore(){this.helperText="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldErrorMessage="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.lookupSingle=void 0,this.otherProperties=[],this.placeholder="",this.fieldFormat=void 0,this.size="medium",this.searchOnEnter="equal",this.changeFilterSearchSelects(),this.changeKeysLabel(),this.changeLiterals(),this.changeOtherPropertiesOptions(),this.updateColumns(),this.updateGridProperties(),this.lookupModalSize="lg"}updateColumns(){this.columns=[],this.columnsName.forEach(a=>this.columns.push(this.columnsDefinition[a]))}updateGridProperties(){let a={sortable:this.gridPropertiesName.includes("sortable"),striped:this.gridPropertiesName.includes("striped"),selectableEntireLine:this.gridPropertiesName.includes("selectableEntireLine"),showMoreVisible:this.gridPropertiesName.includes("showMoreVisible"),groupable:this.gridPropertiesName.includes("groupable"),autoSize:this.gridPropertiesName.includes("autoSize"),autoSizeOnScroll:this.gridPropertiesName.includes("autoSizeOnScroll"),draggable:this.gridPropertiesName.includes("draggable"),hideSelectAll:this.gridPropertiesName.includes("hideSelectAll"),resizable:this.gridPropertiesName.includes("resizable"),showDraggableIcon:this.gridPropertiesName.includes("showDraggableIcon"),showMoreDisabled:this.gridPropertiesName.includes("showMoreDisabled"),virtualScroll:this.gridPropertiesName.includes("virtualScroll"),actions:this.gridPropertiesName.includes("actions")?this.customAction:void 0,actionRight:this.gridPropertiesName.includes("actionsRight")};this.gridProperties=a}static{this.\u0275fac=function(r){return new(r||d)(I(ie))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-labs-doc"]],standalone:!1,decls:10,vars:36,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookup","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-error","t-selected","t-focus","t-keydown","t-rows-selected","ngModelChange","t-helper","t-auto-height","t-clean","t-columns","t-compact-label","t-disabled","t-readonly","t-error-limit","t-field-error-message","t-field-format","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-help","t-keys-label","t-label","t-literals","t-loading","t-modal-size","t-multiple","t-no-autocomplete","t-optional","t-placeholder","t-required","t-show-required","t-search-on-enter","t-size","t-label-text-wrap","ngModel"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","columnsName","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","lookupModalSize","p-label","Modal Size",1,"po-lg-6",3,"ngModelChange","p-columns","p-options","ngModel"],["name","searchOnEnter","p-label","SearchOnEnter",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-label","Literals","p-help",'{ "modalTitle": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=z();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-lookup",3),v("t-change",function(){return n.changeEvent("t-change")})("t-error",function(){return n.changeEvent("t-error")})("t-selected",function(){return n.changeEvent("t-selected")})("t-focus",function(){return n.changeEvent("t-focus")})("t-keydown",function(){return n.changeEvent("t-keydown")})("t-rows-selected",function(){return n.changeEvent("t-rows-selected")}),f("ngModelChange",function(k){return c(l),h(n.lookupSingle,k)||(n.lookupSingle=k),u(k)}),t(),i(5,"po-container",4),o(6,"po-info",5),t(),o(7,"app-code-accordion-doc",6),U(8,o0,25,29,"ng-template",null,0,J),t()}if(r&2){let l=W(9);m(4),s("t-helper",n.helperText)("t-auto-height",n.otherProperties.includes("autoHeight"))("t-clean",n.otherProperties.includes("clean"))("t-columns",n.columns)("t-compact-label",n.otherProperties.includes("compactLabel"))("t-disabled",n.otherProperties.includes("disabled"))("t-readonly",n.otherProperties.includes("readonly"))("t-error-limit",n.otherProperties.includes("fieldErrorLimit"))("t-field-error-message",n.fieldErrorMessage)("t-field-format",n.fieldFormat)("t-field-label",n.fieldLabel)("t-field-value",n.fieldValue)("t-field-error-message",n.fieldErrorMessage)("t-filter-search-select",n.customFilterSearchSelect)("t-grid-properties",n.gridProperties)("t-help",n.help)("t-keys-label",n.customKeysLabel)("t-label",n.label)("t-literals",n.customLiterals)("t-loading",n.otherProperties.includes("loading"))("t-modal-size",n.lookupModalSize)("t-multiple",n.otherProperties.includes("multiple"))("t-no-autocomplete",n.otherProperties.includes("noAutoComplete"))("t-optional",n.otherProperties.includes("optional"))("t-placeholder",n.placeholder)("t-required",n.otherProperties.includes("required"))("t-show-required",n.otherProperties.includes("showRequired"))("t-search-on-enter",n.searchOnEnter)("t-size",n.size)("t-label-text-wrap",n.otherProperties==null?null:n.otherProperties.includes("labelTextWrap")),b("ngModel",n.lookupSingle),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[G,H,B,g,C,ve,me,se,ge,ye,pe,ue,P],styles:[".po-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px}.containerProperties[_ngcontent-%COMP%]{flex:1 1 100%}"]})}}return d})();var Ei=(()=>{class d{constructor(){this.htmlCode=`<form [formGroup]="formMission">
  <thf-lookup
    formControlName="lookup2"
    name="lookupMultiple"
    t-field-label="name"
    t-field-value="value"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    t-key-last-search="lookupMultiple"
    t-label="Her\xF3is"
    t-placeholder="Placeholder multiple"
    [t-columns]="columns"
    [t-grid-properties]="gridProperties"
    [t-keys-label]="keysLabel"
    [t-multiple]="true"
    [t-filter-search-select]="filterSelect"
  ></thf-lookup>
</form>
  `,this.tsCode=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-thf-lookup-form-doc',
  templateUrl: './thf-lookup-form-doc.component.html',
  styleUrl: './thf-lookup-form-doc.component.css',
})
export class ThfLookupFormDocComponent {
  formMission = new FormGroup({
    lookup2: new FormControl(['1495831666871']),
  });

  gridProperties: ThfLookupGridProperties = {
    autoSize: true,
    autoSizeOnScroll: true,
    resizable: true,
    groupable: true,
    draggable: true,
    hideSelectAll: true,
  };

  columns = [
    { property: 'name', label: 'Name' },
    { property: 'nickname', label: 'Nickname' },
    { property: 'email', label: 'Email' },
    { property: 'id', label: 'Id' },
  ];

  keysLabel = [
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
  ];

  filterSelect = [
    { label: 'Nome', value: 'name' },
    { label: 'Nickname', value: 'nickname' },
    { label: 'Email', value: 'email' },
  ];
}
  `,this.formMission=new N({lookup2:new S(["1495831666871"])}),this.gridProperties={autoSize:!0,autoSizeOnScroll:!0,resizable:!0,groupable:!0,draggable:!0,hideSelectAll:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"},{property:"id",label:"Id"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-form-doc"]],standalone:!1,decls:7,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookup2","name","lookupMultiple","t-field-label","name","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes","t-key-last-search","lookupMultiple","t-label","Her\xF3is","t-placeholder","Placeholder multiple",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),o(3,"po-divider",1),i(4,"form",2),o(5,"thf-lookup",3),t(),o(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("formGroup",n.formMission),m(),s("t-columns",n.columns)("t-grid-properties",n.gridProperties)("t-keys-label",n.keysLabel)("t-multiple",!0)("t-filter-search-select",n.filterSelect),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[te,G,ee,fe,he,g,C,ue,P],encapsulation:2})}}return d})();var xi=(()=>{class d{constructor(){this.htmlCode=`<thf-lookup
  name="lookupSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
></thf-lookup>
  `,this.tsCode=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-basic-doc',
  templateUrl: './thf-lookup-basic-doc.component.html',
  styleUrl: './thf-lookup-basic-doc.component.css'
})
export class ThfLookupBasicDocComponent {}`}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-basic-doc"]],standalone:!1,decls:7,vars:2,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),o(3,"po-divider",1),i(4,"form"),o(5,"thf-lookup",2),t(),o(6,"app-code-accordion-doc",3),t()),r&2&&(m(6),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[te,ee,_e,g,C,ue,P],encapsulation:2})}}return d})();var Si=`<thf-lookup
  name="lookupSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-custom-items]="customItems"
>
</thf-lookup>`,bi=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-custom-items-doc',
  templateUrl: './thf-lookup-custom-items-doc.component.html',
  styleUrl: './thf-lookup-custom-items-doc.component.css',
  standalone: false
})
export class ThfLookupCustomItemsDocComponent {
  customItems = [
    {
      value: 9999999999999,
      label: "Todos os Her\xF3is",
      id: 9999999999999,
      name: "Todos os Her\xF3is",
      nickname: "Todos",
      email: "-"
    },
    {
      value: 8888888888888,
      label: "Her\xF3i Customizado",
      id: 8888888888888,
      name: "Her\xF3i Customizado",
      nickname: "Customizado",
      email: "customizado@example.com"
    }
  ];
}
`;var hi=(()=>{class d{constructor(){this.htmlCode=Si,this.tsCode=bi,this.customItems=[{value:9999999999999,label:"Todos os Her\xF3is",id:9999999999999,name:"Todos os Her\xF3is",nickname:"Todos",email:"-"},{value:8888888888888,label:"Her\xF3i Customizado",id:8888888888888,name:"Her\xF3i Customizado",nickname:"Customizado",email:"customizado@example.com"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-custom-items-doc"]],standalone:!1,decls:7,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingleCustomItems","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-custom-items"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Custom Items"),t(),o(3,"po-divider",1),i(4,"form"),o(5,"thf-lookup",2),t(),o(6,"app-code-accordion-doc",3),t()),r&2&&(m(5),s("t-custom-items",n.customItems),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[te,ee,_e,g,C,ue,P],encapsulation:2})}}return d})();var fi=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Lookup","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup")(2,"div",1)(3,"div",2),o(4,"app-thf-lookup-basic-doc")(5,"app-thf-lookup-form-doc")(6,"app-thf-lookup-custom-items-doc"),t()(),i(7,"div",3),o(8,"app-thf-lookup-labs-doc"),t()()())},dependencies:[K,Pt,ui,Ei,xi,hi],encapsulation:2})}}return d})();var vi=`<thf-lookup-data
  name="lookupDataSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-height]="320"
/>`,gi=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-data-basic-doc',
  templateUrl: './thf-lookup-data-basic-doc.component.html',
  standalone: false,
})
export class ThfLookupDataBasicDocComponent {}`;var ze=(()=>{class d{constructor(){this.htmlCode=vi,this.tsCode=gi}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-basic-doc"]],standalone:!1,decls:6,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupDataSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-height"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),o(3,"po-divider",1)(4,"thf-lookup-data",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-height",320),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[g,C,ce,P],encapsulation:2})}}return d})();var yi=`<form [formGroup]="form">
  <thf-lookup-data
    formControlName="lookupData"
    name="lookupDataSingle"
    t-field-label="nickname"
    t-field-value="value"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    [t-columns]="columns"
    [t-grid-properties]="gridProperties"
    [t-keys-label]="keysLabel"
    [t-multiple]="true"
    [t-filter-search-select]="filterSelect"
  />
</form>

<div>
  <p>Valor do Formul\xE1rio:<br />{{ form.value | json }}</p>
</div>

<div>
  @if (!disabledFom) {
  <po-button
    p-label="Desabilitar via FormControl"
    (p-click)="disableEnabledFom()"
  />
  } @else {
  <po-button
    p-label="Habilitar via FormControl"
    (p-click)="disableEnabledFom()"
  />
  }
</div>
`,Ci=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ThfLookupDataGridProperties } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-data-form-doc',
  templateUrl: './thf-lookup-data-form-doc.component.html',
  standalone: false,
})
export class ThfLookupDataFormDocComponent {
  disabledFom = false;

  form = new FormGroup({
    lookupData: new FormControl(['1495831666871']),
  });

  gridProperties: ThfLookupDataGridProperties = {
    autoSize: true,
    draggable: true,
    hideSelectAll: true,
    resizable: true,
  };

  columns = [
    { property: 'name', label: 'Name' },
    { property: 'nickname', label: 'Nickname' },
    { property: 'email', label: 'Email' },
  ];

  keysLabel = [
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
  ];

  filterSelect = [
    { label: 'Nome', value: 'name' },
    { label: 'Nickname', value: 'nickname' },
    { label: 'Email', value: 'email' },
  ];

  disableEnabledFom() {
    const lookupData = this.form.get('lookupData');
    this.disabledFom = !this.disabledFom;

    this.disabledFom ? lookupData?.disable() : lookupData?.enable();
  }
}`;function s0(d,y){if(d&1){let a=z();i(0,"po-button",7),v("p-click",function(){c(a);let n=p();return u(n.disableEnabledFom())}),t()}}function p0(d,y){if(d&1){let a=z();i(0,"po-button",8),v("p-click",function(){c(a);let n=p();return u(n.disableEnabledFom())}),t()}}var je=(()=>{class d{constructor(){this.htmlCode=yi,this.tsCode=Ci,this.disabledFom=!1,this.form=new N({lookupData:new S(["1495831666871"])}),this.gridProperties={autoSize:!0,draggable:!0,hideSelectAll:!0,resizable:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}disableEnabledFom(){let a=this.form.get("lookupData");this.disabledFom=!this.disabledFom,this.disabledFom?a?.disable():a?.enable()}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-form-doc"]],standalone:!1,decls:16,vars:12,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookupData","name","lookupDataSingle","t-field-label","nickname","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["p-label","Desabilitar via FormControl"],["p-label","Habilitar via FormControl"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"],["p-label","Desabilitar via FormControl",3,"p-click"],["p-label","Habilitar via FormControl",3,"p-click"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),o(3,"po-divider",1),i(4,"form",2),o(5,"thf-lookup-data",3),t(),i(6,"div")(7,"p"),e(8,"Valor do Formul\xE1rio:"),o(9,"br"),e(10),Ye(11,"json"),t()(),i(12,"div"),L(13,s0,1,0,"po-button",4)(14,p0,1,0,"po-button",5),t(),o(15,"app-code-accordion-doc",6),t()),r&2&&(m(4),s("formGroup",n.form),m(),s("t-columns",n.columns)("t-grid-properties",n.gridProperties)("t-keys-label",n.keysLabel)("t-multiple",!0)("t-filter-search-select",n.filterSelect),m(5),be(Xe(11,10,n.form.value)),m(3),M(n.disabledFom?14:13),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[te,G,ee,fe,he,B,g,C,ce,P,nt],encapsulation:2})}}return d})();var Pi=`<thf-lookup-data
  name="lookupDataSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-custom-items]="customItems"
  [t-height]="320"
/>`,Ti=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-data-basic-doc',
  templateUrl: './thf-lookup-data-basic-doc.component.html',
  standalone: false,
})
export class ThfLookupDataBasicDocComponent {
  customItems = [
    {
      value: 9999999999999,
      label: "Todos os Her\xF3is",
      id: 9999999999999,
      name: "Todos os Her\xF3is",
      nickname: "Todos",
      email: "-"
    },
    {
      value: 8888888888888,
      label: "Her\xF3i Customizado",
      id: 8888888888888,
      name: "Her\xF3i Customizado",
      nickname: "Customizado",
      email: "customizado@example.com"
    }
  ];
}`;var Ve=(()=>{class d{constructor(){this.htmlCode=Pi,this.tsCode=Ti,this.customItems=[{value:9999999999999,label:"Todos os Her\xF3is",id:9999999999999,name:"Todos os Her\xF3is",nickname:"Todos",email:"-"},{value:8888888888888,label:"Her\xF3i Customizado",id:8888888888888,name:"Her\xF3i Customizado",nickname:"Customizado",email:"customizado@example.com"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-custom-items-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupDataSingleCustomItems","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-custom-items","t-height"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Custom Items"),t(),o(3,"po-divider",1)(4,"thf-lookup-data",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-custom-items",n.customItems)("t-height",320),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[g,C,ce,P],encapsulation:2})}}return d})();var Di=`<form [formGroup]="formLabs">
<thf-lookup-data
    name="lookupData"
    formControlName="lookupData"
    [t-columns]="columns"
    [t-compact-label]="lookupDataProperties?.compactLabel"
    [t-disabled]="lookupDataProperties?.disabled"
    [t-field-label]="fieldLabel"
    [t-field-value]="fieldValue"
    [t-filter-search-select]="customFilterSearchSelect"
    [t-grid-properties]="gridProperties"
    [t-height]="height"
    [t-keys-label]="customKeysLabel"
    [t-literals]="customLiterals"
    [t-multiple]="lookupDataProperties?.multiple"
    [t-size]="size"
    [t-label]="label"
    [t-optional]="lookupDataProperties?.optional"
    [t-required]="lookupDataProperties?.required"
    [t-show-required]="lookupDataProperties?.showRequired"
    [t-help]="help"
    [t-helper]="helperText"
    [t-auto-focus]="lookupDataProperties?.autoFocus"
    [t-no-autocomplete]="lookupDataProperties?.noAutoComplete"
    [t-field-error-message]="fieldErrorMessage"
    [t-error-limit]="lookupDataProperties?.errorLimit"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    (t-change)="changeEvent('t-change', $event)"
    (t-change-model)="changeEvent('t-change-model', $event)"
    (t-error)="changeEvent('t-error', $event)"
    (t-focus)="changeEvent('t-focus', '')"
    (t-keydown)="changeEvent('t-keydown', $event)"
    (t-selected)="changeEvent('t-selected', $event)"
  />
</form>

<po-container class="po-mt-1" style="display: flex">
  <span class="po-font-text-large-bold">Events</span>
  <po-divider class="po-divider-mb-0-75"></po-divider>
  <div style="max-height: 150px" [innerHTML]="event"></div>
</po-container>

<div class="po-row po-mt-2 po-mb-2" style="display: block">
  <po-container class="po-mb-2" style="display: flex">
    <po-select
      class="po-md-4 po-lg-4"
      name="fieldValue"
      [(ngModel)]="fieldValue"
      p-label="Field Value"
      p-required
      [p-options]="fieldValueOptions"
    />

    <po-select
      class="po-md-4 po-lg-4"
      name="fieldLabel"
      [(ngModel)]="fieldLabel"
      p-label="Field Label"
      p-required
      [p-options]="fieldLabelOptions"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="heigth"
      [(ngModel)]="height"
      p-label="Height"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="label"
      [(ngModel)]="label"
      p-label="Label"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="fieldErrorMessage"
      [(ngModel)]="fieldErrorMessage"
      p-label="Field Error Message"
    ></po-input>

    <po-input
      class="po-md-4 po-lg-4"
      name="Help"
      [(ngModel)]="help"
      p-label="Help"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="Helper"
      [(ngModel)]="helperText"
      p-label="Additional Help"
    />

    <po-checkbox-group
      name="lookupDataPropertiesName"
      [(ngModel)]="lookupDataPropertiesName"
      [p-columns]="4"
      p-label="Lookup-Data Properties"
      [p-options]="lookupDataPropertiesOptions"
      (p-change)="updateLookupDataProperties()"
    />

    <div class="po-row">
      <po-radio-group
        class="po-lg-6"
        name="size"
        [(ngModel)]="size"
        p-label="Size"
        p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA."
        [p-options]="sizesOptions"
      />
    </div>

    <div class="po-row">
      <po-textarea
        class="po-lg-6"
        name="filterSearchSelect"
        [(ngModel)]="filterSearchSelect"
        (p-change-model)="changeFilterSearchSelects()"
        p-help='[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]'
        p-label="Filter Search Select"
      />

      <po-textarea
        class="po-lg-6"
        name="keysLabel"
        [(ngModel)]="keysLabel"
        (p-change-model)="changeKeysLabel()"
        p-help='[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]'
        p-label="Keys Label"
      />
    </div>

    <po-textarea
      class="po-lg-6"
      name="literals"
      p-label="Literals"
      p-help='{ "placeholder": "Busca avan\xE7ada" }'
      [p-rows]="2"
      [(ngModel)]="literals"
      (p-change-model)="changeLiterals()"
    />
  </po-container>

  <po-container class="po-mb-2" style="display: flex">
    <po-checkbox-group
      name="gridPropertiesName"
      [(ngModel)]="gridPropertiesName"
      [p-columns]="4"
      p-label="Grid Properties"
      [p-options]="gridPropertiesOptions"
      (p-change)="updateGridProperties()"
    />
  </po-container>
</div>
`,wi=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption,
} from '@po-ui/ng-components';
import {
  ThfLookupDataColumn,
  ThfLookupDataFilterSearchSelect,
  ThfLookupDataGridProperties,
  ThfLookupDataKeysLabel,
  ThfLookupDataLiterals,
  ThfTableAction,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-data-labs-doc',
  templateUrl: './thf-lookup-data-labs-doc.component.html',
  standalone: false,
})
export class ThfLookupDataLabsDocComponent {
  columns: Array<ThfLookupDataColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail' },
  ];

  customFilterSearchSelect: Array<ThfLookupDataFilterSearchSelect> = [];
  customKeysLabel: Array<ThfLookupDataKeysLabel> = [];
  customLiterals: ThfLookupDataLiterals = {};
  event: string = '';
  fieldLabel: string = 'name';
  fieldValue: string = 'value';
  filterSearchSelect: string = '';
 gridProperties!: ThfLookupDataGridProperties;
  lookupDataProperties!: any;
  height = 450;
  keysLabel: string = '';
  literals: string = '';
  size: string = 'medium';
  label: string = '';
  fieldErrorMessage: string = '';
  help: string = '';
  helperText: string = '';

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Nome' },
    { value: 'nickname', label: 'Apelido' },
    { value: 'email', label: 'E-mail' },
  ];

  readonly lookupDataPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Error Limit' },
    { value: 'autoFocus', label: 'Auto Focus' },
    { value: 'noAutoComplete', label: 'No Auto Complete' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  readonly gridPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'actions', label: 'Actions' },
    { value: 'actionsRight', label: 'Actions Right' },
    { value: 'autoSize', label: 'AutoSize' },
    { value: 'autoSizeOnScroll', label: 'AutoSizeOnScroll' },
    { value: 'draggable', label: 'Draggable' },
    { value: 'groupable', label: 'Groupable' },
    { value: 'hideSelectAll', label: 'HideSelectAll' },
    { value: 'resizable', label: 'Resizable' },
    { value: 'selectableEntireLine', label: 'SelectableEntireLine' },
    { value: 'striped', label: 'Striped' },
    { value: 'showDraggableIcon', label: 'ShowDraggableIcon' },
    { value: 'showMoreDisabled', label: 'ShowMoreDisabled' },
    { value: 'showMoreVisible', label: 'ShowMoreVisible' },
    { value: 'sortable', label: 'Sortable' },
    { value: 'virtualScroll', label: 'VirtualScroll' },
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'Name' },
    ...this.columnsOptions,
  ];

  readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions,
  ];

  gridPropertiesName: Array<string> = [
    'selectableEntireLine',
    'showMoreVisible',
    'striped',
    'sortable',
    'virtualScroll',
  ];

  lookupDataPropertiesName: Array<string> = [];

  customAction: Array<ThfTableAction> = [
    {
      label: 'Visualizar',
      fixed: true,
      action: (e: any) => {
        this.poNotification.information(\`Visualizando: \${e.id} - \${e.name}\`);
      },
      icon: 'ICON_EYE',
    },
    {
      label: 'Editar',
      action: (e: any) => {
        this.poNotification.warning(\`Editando: \${e.id} - \${e.name}\`);
      },
      icon: 'ICON_EDIT',
    },
  ];

  constructor(private poNotification: PoNotificationService) {
    this.updateGridProperties();
  }

  formLabs = new FormGroup({
    lookupData: new FormControl(),
  });

  changeEvent(eventDescription: any, value: any) {
    if (value instanceof KeyboardEvent) {
      value = {
        key: value.key,
        code: value.code,
        altKey: value.altKey,
        ctrlKey: value.ctrlKey,
        shiftKey: value.shiftKey,
      };
    }

    this.event =
      \`<p>\${eventDescription} - \${value ? JSON.stringify(value) : ''}</p>\` +
      this.event;
  }

  changeFilterSearchSelects() {
    try {
      this.customFilterSearchSelect = JSON.parse(this.filterSearchSelect);
    } catch {
      this.customFilterSearchSelect = [];
    }
  }

  changeKeysLabel() {
    try {
      this.customKeysLabel = JSON.parse(this.keysLabel);
    } catch {
      this.customKeysLabel = [];
    }
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = {};
    }
  }

  updateGridProperties() {
    const gridProperties: ThfLookupDataGridProperties = {
      sortable: this.gridPropertiesName.includes('sortable'),
      striped: this.gridPropertiesName.includes('striped'),
      selectableEntireLine: this.gridPropertiesName.includes('selectableEntireLine'),
      showMoreVisible: this.gridPropertiesName.includes('showMoreVisible'),
      groupable: this.gridPropertiesName.includes('groupable'),
      autoSize: this.gridPropertiesName.includes('autoSize'),
      autoSizeOnScroll: this.gridPropertiesName.includes('autoSizeOnScroll'),
      draggable: this.gridPropertiesName.includes('draggable'),
      hideSelectAll: this.gridPropertiesName.includes('hideSelectAll'),
      resizable: this.gridPropertiesName.includes('resizable'),
      showDraggableIcon: this.gridPropertiesName.includes('showDraggableIcon'),
      showMoreDisabled: this.gridPropertiesName.includes('showMoreDisabled'),
      virtualScroll: this.gridPropertiesName.includes('virtualScroll'),
      actions: this.gridPropertiesName.includes('actions') ? this.customAction : undefined,
      actionRight: this.gridPropertiesName.includes('actionsRight'),
    };

    this.gridProperties = gridProperties;
  }

  updateLookupDataProperties() {
    let lookupDataProperties = {};

    this.lookupDataPropertiesName.forEach((properties: any) => {
      lookupDataProperties = {
        ...lookupDataProperties,
        [properties]: true,
      };
    });

    this.lookupDataProperties = { ...lookupDataProperties };
  }
}`;function E0(d,y){if(d&1){let a=z();i(0,"div",8)(1,"po-container",9)(2,"po-select",10),f("ngModelChange",function(n){c(a);let l=p();return h(l.fieldValue,n)||(l.fieldValue=n),u(n)}),t(),i(3,"po-select",11),f("ngModelChange",function(n){c(a);let l=p();return h(l.fieldLabel,n)||(l.fieldLabel=n),u(n)}),t(),i(4,"po-input",12),f("ngModelChange",function(n){c(a);let l=p();return h(l.height,n)||(l.height=n),u(n)}),t(),i(5,"po-input",13),f("ngModelChange",function(n){c(a);let l=p();return h(l.label,n)||(l.label=n),u(n)}),t(),i(6,"po-input",14),f("ngModelChange",function(n){c(a);let l=p();return h(l.fieldErrorMessage,n)||(l.fieldErrorMessage=n),u(n)}),t(),i(7,"po-input",15),f("ngModelChange",function(n){c(a);let l=p();return h(l.help,n)||(l.help=n),u(n)}),t(),i(8,"po-input",16),f("ngModelChange",function(n){c(a);let l=p();return h(l.helperText,n)||(l.helperText=n),u(n)}),t(),i(9,"po-checkbox-group",17),f("ngModelChange",function(n){c(a);let l=p();return h(l.lookupDataPropertiesName,n)||(l.lookupDataPropertiesName=n),u(n)}),v("p-change",function(){c(a);let n=p();return u(n.updateLookupDataProperties())}),t(),i(10,"div",18)(11,"po-radio-group",19),f("ngModelChange",function(n){c(a);let l=p();return h(l.size,n)||(l.size=n),u(n)}),t()(),i(12,"div",18)(13,"po-textarea",20),f("ngModelChange",function(n){c(a);let l=p();return h(l.filterSearchSelect,n)||(l.filterSearchSelect=n),u(n)}),v("p-change-model",function(){c(a);let n=p();return u(n.changeFilterSearchSelects())}),t(),i(14,"po-textarea",21),f("ngModelChange",function(n){c(a);let l=p();return h(l.keysLabel,n)||(l.keysLabel=n),u(n)}),v("p-change-model",function(){c(a);let n=p();return u(n.changeKeysLabel())}),t()(),i(15,"po-textarea",22),f("ngModelChange",function(n){c(a);let l=p();return h(l.literals,n)||(l.literals=n),u(n)}),v("p-change-model",function(){c(a);let n=p();return u(n.changeLiterals())}),t()(),i(16,"po-container",9)(17,"po-checkbox-group",23),f("ngModelChange",function(n){c(a);let l=p();return h(l.gridPropertiesName,n)||(l.gridPropertiesName=n),u(n)}),v("p-change",function(){c(a);let n=p();return u(n.updateGridProperties())}),t()()()}if(d&2){let a=p();m(2),b("ngModel",a.fieldValue),s("p-options",a.fieldValueOptions),m(),b("ngModel",a.fieldLabel),s("p-options",a.fieldLabelOptions),m(),b("ngModel",a.height),m(),b("ngModel",a.label),m(),b("ngModel",a.fieldErrorMessage),m(),b("ngModel",a.help),m(),b("ngModel",a.helperText),m(),b("ngModel",a.lookupDataPropertiesName),s("p-columns",4)("p-options",a.lookupDataPropertiesOptions),m(2),b("ngModel",a.size),s("p-options",a.sizesOptions),m(2),b("ngModel",a.filterSearchSelect),m(),b("ngModel",a.keysLabel),m(),s("p-rows",2),b("ngModel",a.literals),m(2),b("ngModel",a.gridPropertiesName),s("p-columns",4)("p-options",a.gridPropertiesOptions)}}var Oe=(()=>{class d{constructor(a){this.poNotification=a,this.htmlCode=Di,this.tsCode=wi,this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.height=450,this.keysLabel="",this.literals="",this.size="medium",this.label="",this.fieldErrorMessage="",this.help="",this.helperText="",this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.lookupDataPropertiesOptions=[{value:"disabled",label:"Disabled"},{value:"multiple",label:"Multiple"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Error Limit"},{value:"autoFocus",label:"Auto Focus"},{value:"noAutoComplete",label:"No Auto Complete"},{value:"compactLabel",label:"Compact Label"}],this.gridPropertiesOptions=[{value:"actions",label:"Actions"},{value:"actionsRight",label:"Actions Right"},{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.lookupDataPropertiesName=[],this.customAction=[{label:"Visualizar",fixed:!0,action:r=>{this.poNotification.information(`Visualizando: ${r.id} - ${r.name}`)},icon:"ICON_EYE"},{label:"Editar",action:r=>{this.poNotification.warning(`Editando: ${r.id} - ${r.name}`)},icon:"ICON_EDIT"}],this.formLabs=new N({lookupData:new S}),this.updateGridProperties()}changeEvent(a,r){r instanceof KeyboardEvent&&(r={key:r.key,code:r.code,altKey:r.altKey,ctrlKey:r.ctrlKey,shiftKey:r.shiftKey}),this.event=`<p>${a} - ${r?JSON.stringify(r):""}</p>`+this.event}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch(a){this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch(a){this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(a){this.customLiterals={}}}updateGridProperties(){let a={sortable:this.gridPropertiesName.includes("sortable"),striped:this.gridPropertiesName.includes("striped"),selectableEntireLine:this.gridPropertiesName.includes("selectableEntireLine"),showMoreVisible:this.gridPropertiesName.includes("showMoreVisible"),groupable:this.gridPropertiesName.includes("groupable"),autoSize:this.gridPropertiesName.includes("autoSize"),autoSizeOnScroll:this.gridPropertiesName.includes("autoSizeOnScroll"),draggable:this.gridPropertiesName.includes("draggable"),hideSelectAll:this.gridPropertiesName.includes("hideSelectAll"),resizable:this.gridPropertiesName.includes("resizable"),showDraggableIcon:this.gridPropertiesName.includes("showDraggableIcon"),showMoreDisabled:this.gridPropertiesName.includes("showMoreDisabled"),virtualScroll:this.gridPropertiesName.includes("virtualScroll"),actions:this.gridPropertiesName.includes("actions")?this.customAction:void 0,actionRight:this.gridPropertiesName.includes("actionsRight")};this.gridProperties=a}updateLookupDataProperties(){let a={};this.lookupDataPropertiesName.forEach(r=>{a=de(re({},a),{[r]:!0})}),this.lookupDataProperties=re({},a)}static{this.\u0275fac=function(r){return new(r||d)(I(ie))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-labs-doc"]],standalone:!1,decls:14,vars:28,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["name","lookupData","formControlName","lookupData","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-change-model","t-error","t-focus","t-keydown","t-selected","t-columns","t-compact-label","t-disabled","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-height","t-keys-label","t-literals","t-multiple","t-size","t-label","t-optional","t-required","t-show-required","t-help","t-helper","t-auto-focus","t-no-autocomplete","t-field-error-message","t-error-limit"],[1,"po-mt-1",2,"display","flex"],[2,"max-height","150px",3,"innerHTML"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","heigth","p-label","Height",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","label","p-label","Label",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-label","Field Error Message",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","Help","p-label","Help",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","Helper","p-label","Additional Help",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],["name","lookupDataPropertiesName","p-label","Lookup-Data Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],[1,"po-row"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","literals","p-label","Literals","p-help",'{ "placeholder": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","p-rows","ngModel"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"]],template:function(r,n){if(r&1&&(i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"form",3)(5,"thf-lookup-data",4),v("t-change",function(E){return n.changeEvent("t-change",E)})("t-change-model",function(E){return n.changeEvent("t-change-model",E)})("t-error",function(E){return n.changeEvent("t-error",E)})("t-focus",function(){return n.changeEvent("t-focus","")})("t-keydown",function(E){return n.changeEvent("t-keydown",E)})("t-selected",function(E){return n.changeEvent("t-selected",E)}),t()(),i(6,"po-container",5)(7,"span",1),e(8,"Events"),t(),o(9,"po-divider",2)(10,"div",6),t(),o(11,"app-code-accordion-doc",7),U(12,E0,18,21,"ng-template",null,0,J),t()),r&2){let l=W(13);m(4),s("formGroup",n.formLabs),m(),s("t-columns",n.columns)("t-compact-label",n.lookupDataProperties==null?null:n.lookupDataProperties.compactLabel)("t-disabled",n.lookupDataProperties==null?null:n.lookupDataProperties.disabled)("t-field-label",n.fieldLabel)("t-field-value",n.fieldValue)("t-filter-search-select",n.customFilterSearchSelect)("t-grid-properties",n.gridProperties)("t-height",n.height)("t-keys-label",n.customKeysLabel)("t-literals",n.customLiterals)("t-multiple",n.lookupDataProperties==null?null:n.lookupDataProperties.multiple)("t-size",n.size)("t-label",n.label)("t-optional",n.lookupDataProperties==null?null:n.lookupDataProperties.optional)("t-required",n.lookupDataProperties==null?null:n.lookupDataProperties.required)("t-show-required",n.lookupDataProperties==null?null:n.lookupDataProperties.showRequired)("t-help",n.help)("t-helper",n.helperText)("t-auto-focus",n.lookupDataProperties==null?null:n.lookupDataProperties.autoFocus)("t-no-autocomplete",n.lookupDataProperties==null?null:n.lookupDataProperties.noAutoComplete)("t-field-error-message",n.fieldErrorMessage)("t-error-limit",n.lookupDataProperties==null?null:n.lookupDataProperties.errorLimit),m(5),s("innerHTML",n.event,Be),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[te,G,ee,H,fe,he,g,C,ve,me,se,ge,ye,ce,P],encapsulation:2})}}return d})();var Ge=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Lookup-Data","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup-data")(2,"div",1)(3,"div",2),o(4,"app-thf-lookup-data-basic-doc")(5,"app-thf-lookup-data-form-doc")(6,"app-thf-lookup-data-custom-items-doc"),t()(),i(7,"div",3),o(8,"app-thf-lookup-data-labs-doc"),t()()())},dependencies:[K,Tt,ze,je,Ve,Oe],encapsulation:2})}}return d})();var S0=["splitter"],b0=["paneForm"],h0=()=>({label:"horizontal",value:"horizontal"}),f0=()=>({label:"vertical",value:"vertical"}),v0=(d,y)=>[d,y];function g0(d,y){if(d&1){let a=z();i(0,"thf-splitter-pane",10),v("t-size-change",function(){c(a);let n=p();return u(n.changeEvent("(t-size-change)"))}),i(1,"div",11)(2,"po-widget",12),v("p-primary-action",function(){let n=c(a).$index,l=p();return u(l.removePane(n))}),i(3,"div",13),e(4),t()()()()}if(d&2){let a=y.$implicit,r=y.$index;s("t-resizable",a.resizable)("t-scrollable",a.scrollable)("t-size",a.size),m(4),Ke(" Pane Content ",r," ")}}function y0(d,y){if(d&1){let a=z();i(0,"div",14)(1,"po-container",15),o(2,"po-dynamic-form",16,2),i(4,"div",17)(5,"po-button",18),v("p-click",function(){c(a);let n=W(3),l=p();return u(l.addPane(n.form.value))}),t()()(),i(6,"po-container",15)(7,"po-switch",19),f("ngModelChange",function(n){c(a);let l=p();return h(l.disabled,n)||(l.disabled=n),u(n)}),t(),i(8,"po-radio-group",20),f("ngModelChange",function(n){c(a);let l=p();return h(l.orientation,n)||(l.orientation=n),u(n)}),t()()(),i(9,"div",17)(10,"po-button",21),v("p-click",function(){c(a);let n=p();return u(n.restore())}),t()()}if(d&2){let a=W(3),r=p();m(2),s("p-fields",r.panesFieldsForm)("p-value",r.pane),m(3),s("p-disabled",a.form.invalid),m(2),b("ngModel",r.disabled),m(),b("ngModel",r.orientation),s("p-options",Ae(8,v0,le(6,h0),le(7,f0)))}}var Ai=(()=>{class d{constructor(){this.event="",this.panes=[],this.pane={},this.disabled=!1,this.orientation="horizontal",this.panesFieldsForm=[{property:"size",gridColumns:6,type:"number",maxValue:100,minValue:0,maxLength:3,step:5,help:"Valor em porc (%)"},{property:"scrollable",type:"boolean",gridColumns:3}],this.htmlCode=`<thf-splitter
  #splitter
  name="splitter"
  [t-disabled]="disabled"
  [t-orientation]="orientation"
  (t-layout-change)="changeEvent('(t-layout-change)')"
>
  <thf-splitter-pane
    *ngFor="let pane of panes; let i = index"
    (t-size-change)="changeEvent('(t-size-change)')"
    [t-resizable]="pane.resizable"
    [t-scrollable]="pane.scrollable"
    [t-size]="pane.size"
  >
    <div class="po-m-2">
      <po-widget p-title="Title Pane" p-primary-label="Close" (p-primary-action)="removePane(i)">
        <div class="po-font-subtitle po-text-center">Pane Content {{ i }}</div>
      </po-widget>
    </div>
  </thf-splitter-pane>
</thf-splitter>

<po-container class="po-mt-1" style="display: flex">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</po-container>

<div class="po-row po-mt-2 po-mb-2" style="display: block">
  <po-container class="po-mb-2" style="display: flex">
    <po-dynamic-form #paneForm [p-fields]="panesFieldsForm" [p-value]="pane"> </po-dynamic-form>
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Pane"
        [p-disabled]="paneForm.form.invalid"
        (p-click)="addPane(paneForm.form.value)"
      />
    </div>
  </po-container>

  <po-container class="po-mb-2" style="display: flex">
    <po-switch class="po-md-6" name="disabled" p-label="Disabled" [(ngModel)]="disabled" />

    <po-radio-group
      class="po-md-6"
      name="orientation"
      p-label="orientation"
      [(ngModel)]="orientation"
      [p-options]="[
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' }
      ]"
    />
  </po-container>
</div>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Restore" (p-click)="restore()"> </po-button>
</div>
`,this.tsCode=`import { Component, OnInit, ViewChild } from '@angular/core';
import {
  PoDynamicFormComponent,
  PoDynamicFormField,
} from '@po-ui/ng-components';
import {
  ThfSplitterComponent,
  ThfSplitterPaneComponent,
} from '@totvs/thf-components';
 
@Component({
  selector: 'app-thf-splitter-labs-doc',
  templateUrl: './thf-splitter-labs-doc.component.html',
  styleUrl: './thf-splitter-labs-doc.component.css',
  standalone: false,
})
  export class ThfSplitterLabsDocComponent implements OnInit {
@ViewChild('splitter', { static: true }) splitter!: ThfSplitterComponent;
  @ViewChild('paneForm', { static: true }) paneForm!: PoDynamicFormComponent;

  event: string = '';
  panes: Array<ThfSplitterPaneComponent> = [];
  pane = {};
  disabled = false;
  orientation = 'horizontal';

  panesFieldsForm: Array<PoDynamicFormField> = [
    {
      property: 'size',
      gridColumns: 6,
      type: 'number',
      maxValue: 100,
      minValue: 0,
      maxLength: 3,
      step: 5,
      help: 'Valor em porc (%)'
    },
    { property: 'scrollable', type: 'boolean', gridColumns: 3 }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  restore() {
    this.event = '';
    this.panes = [];
    this.pane = {
      size: '50',
      scrollable: false
    };
  }

  addPane(_pane: any) {
    const newPane = Object.assign({}, _pane);
    newPane.size += '%';
    this.panes.push(newPane);
    this.pane = {
      size: '50',
      scrollable: false
    };
  }

  removePane(idx: number) {
    this.panes.splice(idx, 1);
  }
}`}ngOnInit(){this.restore()}changeEvent(a){this.event=a}restore(){this.event="",this.panes=[],this.pane={size:"50",scrollable:!1}}addPane(a){let r=Object.assign({},a);r.size+="%",this.panes.push(r),this.pane={size:"50",scrollable:!1}}removePane(a){this.panes.splice(a,1)}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-labs-doc"]],viewQuery:function(r,n){if(r&1&&F(S0,7)(b0,7),r&2){let l;D(l=w())&&(n.splitter=l.first),D(l=w())&&(n.paneForm=l.first)}},standalone:!1,decls:13,vars:7,consts:[["splitter",""],["customTemplate",""],["paneForm",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","splitter",3,"t-layout-change","t-disabled","t-orientation"],[3,"t-resizable","t-scrollable","t-size"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[3,"t-size-change","t-resizable","t-scrollable","t-size"],[1,"po-m-2"],["p-title","Title Pane","p-primary-label","Close",3,"p-primary-action"],[1,"po-font-subtitle","po-text-center"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Pane",1,"po-md-3",3,"p-click","p-disabled"],["name","disabled","p-label","Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","orientation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1&&(i(0,"po-container")(1,"span",3),e(2,"Labs"),t(),o(3,"po-divider",4),i(4,"thf-splitter",5,0),v("t-layout-change",function(){return n.changeEvent("(t-layout-change)")}),Te(6,g0,5,4,"thf-splitter-pane",6,$e),t(),i(8,"po-container",7),o(9,"po-info",8),t(),o(10,"app-code-accordion-doc",9),U(11,y0,11,11,"ng-template",null,1,J),t()),r&2){let l=W(12);m(4),s("t-disabled",n.disabled)("t-orientation",n.orientation),m(2),De(n.panes),m(3),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[G,H,B,g,C,ft,me,St,pe,Ce,ae,oe,P],encapsulation:2})}}return d})();var P0=["gridComponent"];function T0(d,y){if(d&1){let a=z();i(0,"thf-splitter-pane",9)(1,"po-widget",11),v("p-primary-action",function(){c(a);let n=p();return u(n.closePane())}),i(2,"div",12),o(3,"po-info",13),t(),i(4,"div",12),o(5,"po-info",14),t(),i(6,"div",12),o(7,"po-info",15),t(),i(8,"div",12),o(9,"po-info",16),t()()()}if(d&2){let a=p();s("t-size","30%"),m(3),s("p-value",a.selectedHero.name),m(2),s("p-value",a.selectedHero.nickname),m(2),s("p-value",a.selectedHero.email),m(2),s("p-value",a.selectedHero.city)}}var ki=(()=>{class d{constructor(a,r){this.router=a,this.changeDetector=r,this.showHeroPane=!1,this.selectedHero=null,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",email:"hulksmash@marvel.com",status:1,city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",email:"spvalueerman@marvel.com",status:2,city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,email:"goku@dbz.com",city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,email:"hawkeye@marvel.com",city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,email:"nickfuckingfury@marvel.com",city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,email:"gohan@dbz.com",city:null}],this.column=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"caption-tag-11",label:"Ativo"},{value:2,color:"caption-tag-08",label:"Inativo"}]},{property:"city",label:"Cidade"}],this.htmlCode=`  <thf-splitter t-disabled>
    <thf-splitter-pane>
      <div class="po-lg-12 po-pt-2 po-pb-2">
        <div
          class="po-row"
          style="justify-content: space-between; align-items: center"
        >
          <p class="po-font-subtitle">Controle de Her\xF3is</p>
          <po-button
            p-icon="an an-star"
            p-label="Star"
            (p-click)="openExternalLink()"
          ></po-button>
        </div>
        <thf-grid
          #gridComponent
          [t-height]="300"
          [t-selectable]="true"
          [t-single-select]="true"
          [t-items]="items"
          [t-columns]="column"
          [t-sortable]="true"
          (t-selected)="selectItem($event)"
          (t-unselected)="closePane()"
        />
      </div>
    </thf-splitter-pane>

    @if (showHeroPane) {
    <thf-splitter-pane [t-size]="'30%'">
      <po-widget
        p-title="Her\xF3i Selecionado"
        p-primary-label="Fechar Painel"
        (p-primary-action)="closePane()"
      >
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Name"
            [p-value]="selectedHero.name"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Apelido"
            [p-value]="selectedHero.nickname"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Contato"
            [p-value]="selectedHero.email"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Reside em"
            [p-value]="selectedHero.city"
          />
        </div>
      </po-widget>
    </thf-splitter-pane>
    }
  </thf-splitter>
`,this.tsCode=`import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ThfGridColumn, ThfGridComponent } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-splitter-grid-doc',
  templateUrl: './thf-splitter-grid-doc.component.html',
  standalone: false,
})
export class ThfSplitterGridDocComponent
  implements AfterContentInit, AfterViewInit
{
  @ViewChild('gridComponent', { static: true })
  grid!: ThfGridComponent;

  showHeroPane = false;
  selectedHero: any = null;

  items = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      email: 'hulksmash@marvel.com',
      status: 1,
      city: 'Lages',
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      email: 'spvalueerman@marvel.com',
      status: 2,
      city: 'Brusque',
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      email: 'goku@dbz.com',
      city: 'Guarulhos',
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      email: 'hawkeye@marvel.com',
      city: 'Campinas',
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      email: 'nickfuckingfury@marvel.com',
      city: null,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      email: 'gohan@dbz.com',
      city: null,
    },
  ];

  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'caption-tag-11', label: 'Ativo' },
        { value: 2, color: 'caption-tag-08', label: 'Inativo' },
      ],
    },
    { property: 'city', label: 'Cidade' },
  ];

  constructor(
    protected router: Router,
    protected changeDetector: ChangeDetectorRef
  ) {}

  ngAfterContentInit(): void {
    this.selectItem(this.items[0]);
  }

  ngAfterViewInit(): void {
    this.grid.selectRowItem(this.items[0]);
  }

  openExternalLink() {
    window.open('https://github.com/po-ui/po-angular');
  }

  selectItem(hero: any) {
    if (!hero) {
      this.closePane();
      return;
    }
    this.selectedHero = {
      id: hero.id || '',
      name: hero.name || '',
      nickname: hero.nickname || '',
      email: hero.email || '',
      city: hero.city || '',
    };
    this.showHeroPane = true;
    this.changeDetector.detectChanges();
  }

  closePane() {
    this.showHeroPane = false;
    this.selectedHero = null;
    this.grid.unselectRows();
  }
}`}ngAfterContentInit(){this.selectItem(this.items[0])}ngAfterViewInit(){this.grid.selectRowItem(this.items[0])}openExternalLink(){window.open("https://github.com/po-ui/po-angular")}selectItem(a){if(!a){this.closePane();return}this.selectedHero={id:a.id||"",name:a.name||"",nickname:a.nickname||"",email:a.email||"",city:a.city||""},this.showHeroPane=!0,this.changeDetector.detectChanges()}closePane(){this.showHeroPane=!1,this.selectedHero=null,this.grid.unselectRows()}static{this.\u0275fac=function(r){return new(r||d)(I(pt),I(et))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-grid-doc"]],viewQuery:function(r,n){if(r&1&&F(P0,7),r&2){let l;D(l=w())&&(n.grid=l.first)}},standalone:!1,decls:15,vars:9,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-disabled",""],[1,"po-lg-12","po-pt-2","po-pb-2"],[1,"po-row",2,"justify-content","space-between","align-items","center"],[1,"po-font-subtitle"],["p-icon","an an-star","p-label","Star",3,"p-click"],[3,"t-selected","t-unselected","t-height","t-selectable","t-single-select","t-items","t-columns","t-sortable"],[3,"t-size"],[3,"htmlCode","tsCode"],["p-title","Her\xF3i Selecionado","p-primary-label","Fechar Painel",3,"p-primary-action"],[1,"po-row"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Apelido",1,"po-md-12",3,"p-value"],["p-label","Contato",1,"po-md-12",3,"p-value"],["p-label","Reside em",1,"po-md-12",3,"p-value"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Divis\xE3o din\xE2mica"),t(),o(3,"po-divider",2),i(4,"thf-splitter",3)(5,"thf-splitter-pane")(6,"div",4)(7,"div",5)(8,"p",6),e(9,"Controle de Her\xF3is"),t(),i(10,"po-button",7),v("p-click",function(){return n.openExternalLink()}),t()(),i(11,"thf-grid",8,0),v("t-selected",function(E){return n.selectItem(E)})("t-unselected",function(){return n.closePane()}),t()()(),L(13,T0,10,5,"thf-splitter-pane",9),t(),o(14,"app-code-accordion-doc",10),t()),r&2&&(m(11),s("t-height",300)("t-selectable",!0)("t-single-select",!0)("t-items",n.items)("t-columns",n.column)("t-sortable",!0),m(2),M(n.showHeroPane?13:-1),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[B,g,C,pe,Ce,R,ae,oe,P],encapsulation:2})}}return d})();var _i=(()=>{class d{constructor(){this.optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7},rendererOption:"svg"},this.optionsPie={rendererOption:"svg"},this.categoriesColumn=["coffee","chocolate","tea"],this.evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:Pe.Column},{label:"2017",data:[93,52,18],type:Pe.Column},{label:"2020",data:[95,21,-17],type:Pe.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:Pe.Line,color:"caption-tag-10"}],this.coffeeProduction=[{label:"Brazil",data:2796,tooltip:"Brazil (South America)",color:"caption-tag-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}],this.htmlCode=`<thf-splitter>
  <thf-splitter-pane>
    <po-widget p-title="Chart type column with line">
      <po-chart
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </po-widget>
  </thf-splitter-pane>
  <thf-splitter-pane [t-size]="'50%'">
    <po-widget p-title="Chart type pizza">
      <po-chart p-title="Top 5 coffee producing countries (in tons)" [p-series]="coffeeProduction"> </po-chart>
    </po-widget>
  </thf-splitter-pane>
</thf-splitter>
`,this.tsCode=`import { Component } from '@angular/core';
import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'app-thf-splitter-chart-doc',
  templateUrl: './thf-splitter-chart-doc.component.html',
  styleUrl: './thf-splitter-chart-doc.component.css',
  standalone: false,
})
export class ThfSplitterChartDocComponent {
    optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7,
    },
    rendererOption: 'svg',
  };
  optionsPie: PoChartOptions = {
    rendererOption: 'svg',
  };

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];
  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    {
      label: 'Coffee consumption in Brazil',
      data: [34, 27, 79],
      type: PoChartType.Line,
      color: 'caption-tag-10',
    },
  ];
  coffeeProduction: Array<PoChartSerie> = [
    {
      label: 'Brazil',
      data: 2796,
      tooltip: 'Brazil (South America)',
      color: 'caption-tag-10',
    },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' },
  ];
}
`}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-chart-doc"]],standalone:!1,decls:12,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["p-title","Chart type column with line"],["p-title","Evolution of coffee and some competitors - %",3,"p-options","p-categories","p-series"],[3,"t-size"],["p-title","Chart type pizza"],["p-title","Top 5 coffee producing countries (in tons)",3,"p-series","p-options"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Divis\xE3o com gr\xE1ficos din\xE2micos"),t(),o(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"po-widget",2),o(7,"po-chart",3),t()(),i(8,"thf-splitter-pane",4)(9,"po-widget",5),o(10,"po-chart",6),t()()(),o(11,"app-code-accordion-doc",7),t()),r&2&&(m(7),s("p-options",n.optionsColumn)("p-categories",n.categoriesColumn)("p-series",n.evolutionOfCoffeeAndSomeCompetitors),m(),s("t-size","50%"),m(2),s("p-series",n.coffeeProduction)("p-options",n.optionsPie),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[xt,g,C,Ce,ae,oe,P],encapsulation:2})}}return d})();var qi=(()=>{class d{constructor(){this.htmlCode=`<thf-splitter>
          <thf-splitter-pane>
            <h4>Pane 1</h4>
          </thf-splitter-pane>

          <thf-splitter-pane>
            <thf-splitter [t-orientation]="'vertical'">
              <thf-splitter-pane>
                <h4>Pane 2</h4>
              </thf-splitter-pane>
              <thf-splitter-pane>
                <h4>Pane 3</h4>
              </thf-splitter-pane>
            </thf-splitter>
          </thf-splitter-pane>
        </thf-splitter>
`,this.tsCode=`import { Component } from '@angular/core';
  
@Component({
  selector: 'app-thf-splitter-basic-doc',
  standalone: false,
  templateUrl: './thf-thf-splitter-basic-doc.html',
})
export class ThfSplitterBasicDocComponent {
}
  `}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-basic-doc"]],standalone:!1,decls:17,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-orientation"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic"),t(),o(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"h4"),e(7,"Pane 1"),t()(),i(8,"thf-splitter-pane")(9,"thf-splitter",2)(10,"thf-splitter-pane")(11,"h4"),e(12,"Pane 2"),t()(),i(13,"thf-splitter-pane")(14,"h4"),e(15,"Pane 3"),t()()()()(),o(16,"app-code-accordion-doc",3),t()),r&2&&(m(9),s("t-orientation","vertical"),m(7),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[g,C,ae,oe,P],encapsulation:2})}}return d})();var k0=()=>[ki,_i,qi];function _0(d,y){d&1&&(i(0,"div",3),o(1,"app-thf-splitter-basic-doc")(2,"app-thf-splitter-grid-doc")(3,"app-thf-splitter-chart-doc"),t())}function q0(d,y){d&1&&o(0,"po-loading-overlay",4),d&2&&s("p-screen-lock",!1)}var Fi=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Splitter","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],["labs","",1,"samples-container"],[1,"samples-container"],[3,"p-screen-lock"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-splitter")(2,"div",1),He(3,_0,4,0)(4,q0,1,1),Ue(5,3,k0,null,4),We(),t(),i(7,"div",2),o(8,"app-thf-splitter-labs-doc"),t()()())},dependencies:[ct,K,wt,Ai],encapsulation:2})}}return d})();var Ii=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-pane"]],standalone:!1,decls:2,vars:0,consts:[["p-title","THF-Splitter-Pane","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"]],template:function(r,n){r&1&&(i(0,"po-page-default",0),o(1,"api-thf-splitter-pane"),t())},dependencies:[K,Dt],encapsulation:2})}}return d})();var F0=[{path:"thf-grid",component:si},{path:"thf-lookup",component:fi},{path:"thf-lookup-data",component:Ge},{path:"thf-splitter",component:Fi},{path:"thf-splitter-pane",component:Ii}],Li=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=Se({type:d})}static{this.\u0275inj=xe({imports:[Me.forChild(F0),Me]})}}return d})();var V1=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=Se({type:d})}static{this.\u0275inj=xe({imports:[ke,lt,dt,Ie,gt,yt,At,Li,st]})}}return d})();export{V1 as DocumentationModule};
