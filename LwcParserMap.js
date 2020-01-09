// map of interfaces

 export  let  lighnningInterfceMap = new Map();

lighnningInterfceMap.set("force:appHostable", "lightning__AppPage");
lighnningInterfceMap.set("flexipage:availableForAllPageTypes", "lightning__HomePage");
lighnningInterfceMap.set("flexipage:availableForRecordHome", "lightning__RecordPage");
lighnningInterfceMap.set("forceCommunity:availableForAllPageTypes", "lightningCommunity__Page");
lighnningInterfceMap.set("force:hasRecordId", "@api recordId;");
lighnningInterfceMap.set("force:hasSObjectName", "@api objectName;");
lighnningInterfceMap.set("force:lightningQuickAction", "null");


    // map of lihgtning tags  and changed Kebab case tags in lwc

   export let  auraLwcTagsMap = new Map();
    auraLwcTagsMap.set('lightning:accordionsection','lightning-accordion-section');
    auraLwcTagsMap.set('lightning:buttongroup','lightning-button-group');
    auraLwcTagsMap.set('lightning:buttonicon','lightning-button-icon');
    auraLwcTagsMap.set('lightning:buttoniconstateful','lightning-button-icon-stateful');
    auraLwcTagsMap.set('lightning:buttonmenu','lightning-button-menu');
    auraLwcTagsMap.set('lightning:buttonstateful','lightning-button-stateful');
    auraLwcTagsMap.set('lightning:checkboxgroup','lightning-checkbox-group');
    auraLwcTagsMap.set('lightning:clicktodial','lightning-click-to-dial');
    auraLwcTagsMap.set('lightning:duallistbox','lightning-dual-listbox');
    auraLwcTagsMap.set('lightning:dynamicicon','lightning-dynamic-icon');
    auraLwcTagsMap.set('lightning:empapi','lightning-emp-api');
    auraLwcTagsMap.set('lightning:fileupload','lightning-file-upload');
    auraLwcTagsMap.set('lightning:formattedaddress','lightning-formatted-address');
    auraLwcTagsMap.set('lightning:formatteddatetime','lightning-formatted-date-time');
    auraLwcTagsMap.set('lightning:formattedemail','lightning-formatted-email');
    auraLwcTagsMap.set('lightning:formattedlocation','lightning-formatted-location');
    auraLwcTagsMap.set('lightning:formattedname','lightning-formatted-name');
    auraLwcTagsMap.set('lightning:formattednumber','lightning-formatted-number');
    auraLwcTagsMap.set('lightning:formattedphone','lightning-formatted-phone');
    auraLwcTagsMap.set('lightning:formattedrichtext','lightning-formatted-rich-text');
    auraLwcTagsMap.set('lightning:formattedtext','lightning-formatted-text');
    auraLwcTagsMap.set('lightning:formattedtime','lightning-formatted-time');
    auraLwcTagsMap.set('lightning:formattedurl','lightning-formatted-url');
    auraLwcTagsMap.set('lightning:inputaddress','lightning-input-address');
    auraLwcTagsMap.set('lightning:inputfield','lightning-input-field');
    auraLwcTagsMap.set('lightning:inputlocation','lightning-input-location');
    auraLwcTagsMap.set('lightning:inputname','lightning-input-name');
    auraLwcTagsMap.set('lightning:inputrichtext','lightning-input-rich-text');
    auraLwcTagsMap.set('lightning:layoutitem','lightning-layout-item');
    auraLwcTagsMap.set('lightning:menuitem','lightning-menu-item');
    auraLwcTagsMap.set('lightning:outputfield','lightning-output-field');
    auraLwcTagsMap.set('lightning:pillcontainer','lightning-pill-container');
    auraLwcTagsMap.set('lightning:progressbar','lightning-progress-bar');
    auraLwcTagsMap.set('lightning:progressindicator','lightning-progress-indicator');
    auraLwcTagsMap.set('lightning:radiogroup','lightning-radio-group');
    auraLwcTagsMap.set('lightning:recordeditform','lightning-record-edit-form');
    auraLwcTagsMap.set('lightning:recordform','lightning-record-form');
    auraLwcTagsMap.set('lightning:recordviewform','lightning-record-view-form');
    auraLwcTagsMap.set('lightning:relativedatetime','lightning-relative-date-time');
    auraLwcTagsMap.set('lightning:treegrid','lightning-tree-grid');
    auraLwcTagsMap.set('lightning:verticalnavigation','lightning-vertical-navigation');
    auraLwcTagsMap.set('lightning:verticalnavigationitem','lightning-vertical-navigation-item');
    auraLwcTagsMap.set('lightning:verticalnavigationitembadge','lightning-vertical-navigation-item-badge');