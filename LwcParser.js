// import {lighnningInterfceMap,auraLwcTagsMap }from './LwcParserMap.js';
// to collect the api propertys
 function apiPropertyObj(name,type,defaultvalue, requiredvlue) {
       this.name = name;
       this.type = type; 
       this.default =defaultvalue;
       this.requiredvlue =requiredvlue; 
   }
     let  lighnningInterfceMap = new Map();

   lighnningInterfceMap.set("force:appHostable", "lightning__AppPage");
   lighnningInterfceMap.set("flexipage:availableForAllPageTypes", "lightning__HomePage");
   lighnningInterfceMap.set("flexipage:availableForRecordHome", "lightning__RecordPage");
   lighnningInterfceMap.set("forceCommunity:availableForAllPageTypes", "lightningCommunity__Page");
   lighnningInterfceMap.set("force:hasRecordId", "@api recordId;");
   lighnningInterfceMap.set("force:hasSObjectName", "@api objectName;");
   lighnningInterfceMap.set("force:lightningQuickAction", "null");
   
   
       // map of lihgtning tags  and changed Kebab case tags in lwc
   
       let  auraLwcTagsMap = new Map();
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


 // to collect the track prpoerty
 function trackProprtyObj(name,type,defaultvalue, requiredvlue) {
    this.name = name;
    this.type = type;
    this.default =defaultvalue;
    this.requiredvlue =requiredvlue;
}

let auraAtteMap = new Map();
auraAtteMap.set('iconsize','icon-size');
auraAtteMap.set('iconname','icon-name');
auraAtteMap.set('alternativetext','alternative-text');
auraAtteMap.set('iconnamewhenon','icon-name-when-on');
auraAtteMap.set('iconnamewhenoff','icon-name-when-off');
auraAtteMap.set('iconnamewhenhover','icon-name-when-hover');
auraAtteMap.set('labelwhenoff','label-when-off');
auraAtteMap.set('labelwhenon','label-when-on');
auraAtteMap.set('labelwhenhover','label-when-hover');
auraAtteMap.set('disableautoscroll','disable-auto-scroll');
auraAtteMap.set('disableautorefresh','disable-auto-refresh');
auraAtteMap.set('scrollduration','scroll-duration');
auraAtteMap.set('messagewhenvaluemissing','message-when-value-missing');
auraAtteMap.set('horizontalalign','horizontal-align');
auraAtteMap.set('verticalalign','vertical-align');
auraAtteMap.set('pulltoboundary','pull-to-boundary');
auraAtteMap.set('multiplerows','multiple-rows');
auraAtteMap.set('smalldevicesize','small-device-size');
auraAtteMap.set('mediumdevicesize','medium-device-size');
auraAtteMap.set('largedevicesize','large-device-size');
auraAtteMap.set('iconvariant','icon-variant');
auraAtteMap.set('activesectionname','active-section-name');
auraAtteMap.set('allowmultiplesectionsopen','allow-multiple-sections-open');
    let componentname = '';
    // let map of aura change values
    let mapofVlueChnges = new Map();
    /// map of lightning tags from dom
    let auraAndlwcLtngTgMap = new Map();
    let start ;
  //@@CreatedBy   : Bhargav Alla
  //@@CreatedDate : 10/04/2019
  //@@purpose     : to parse aura comp file and genrate lwc html file.
 function lwcParserFromAuraFile() {
   start = window.performance.now();

   let btn = document.getElementById('lwcparserbtn');
   btn.innerText = 'Parsing...';
  let componentfile = document.getElementById('componentfile').value;
  let inptdiv = document.getElementById('input');
  inptdiv.innerHTML=componentfile;

  componentname = document.getElementById('cmpntName').value;
     //  console.log('componentname==='+componentname)
        let apiPropertyObjArry = [];
        let trackProprtyObjArry = [];
   const compntFile = document.getElementsByTagName('aura:attribute'); // retriev all aura ttribute to build the track and api variables.
          
   for(let i=0;i < compntFile.length;i++  ){
      let atrributes = compntFile[i].attributes;
      let name = '';
      let type = ''; let defaultvalue = ''; let requiredvlue = '';let access = '';
    for ( let i=0;i < atrributes.length;i++){
        if(atrributes[i].name == 'name'){
            name = atrributes[i].value;
            let oncnge = 'onchange={on'+name+'change}';
            mapofVlueChnges.set(name,oncnge);
        }
        if(atrributes[i].name == 'type'){
            type = atrributes[i].value; 
        }
        if(atrributes[i].name == 'default'){
            defaultvalue = atrributes[i].value;
        }
        if(atrributes[i].name == 'required'){
            requiredvlue = atrributes[i].value;
        }
        if(atrributes[i].name == 'access'){
            access = atrributes[i].value;
        }
    } 
    
      if(access =='private'){
        let trackProprtyObjvar =  new trackProprtyObj(name,type,defaultvalue,requiredvlue);
        trackProprtyObjArry.push(trackProprtyObjvar);
       }
     else{
            let apiPropertyObjvar =  new apiPropertyObj(name,type,defaultvalue,requiredvlue);
            apiPropertyObjArry.push(apiPropertyObjvar);
        
       }
      }              
   //  console.log('===apiPropertyObjArry=+'+JSON.stringify(apiPropertyObjArry));

      // parse for aura component tag for controller
      const auraCompntFile = document.getElementsByTagName('aura:component');
        let cntrlname = '';
        let cmpintrfaces ='';
      for(let i=0;i < auraCompntFile.length;i++  ){
        let atrributescmp = auraCompntFile[i].attributes;
       
      for ( let i=0;i < atrributescmp.length;i++){
        if(atrributescmp[i].name == 'controller'){
            cntrlname = atrributescmp[i].value;
        }
        if(atrributescmp[i].name == 'implements'){
            cmpintrfaces = atrributescmp[i].value;
        }

      }
       // console.log('cmpintrfaces'+cmpintrfaces.split(','));
      }
      createLwcJsFile(apiPropertyObjArry,trackProprtyObjArry,cntrlname,cmpintrfaces);

    }

      //@@ purpose : to create lwc js file
      function createLwcJsFile(apiPropertyObjArry,trackProprtyObjArry,cntrlname,cmpintrfaces){

       let lwcjsfile = 'import {LightningElement,api,track,wire } from '+'+lwc+'+';\n';
        if(cntrlname){
       lwcjsfile+='import yourapexmethodname from '+''+'+@salesforce/apex/'+cntrlname+'.yourapexmethodname+'+';\n';
      }
       lwcjsfile = lwcjsfile.replace(/\+/g, "'");
       lwcjsfile +='export default class yourcomponentname extends LightningElement '+'{\n';
         let interfaceArry = cmpintrfaces.split(',');
         let metaDataIntrfceArrycrt = [];
       for(let i=0;i< interfaceArry.length;i++){

          if(interfaceArry[i]=='force:hasRecordId'){
            lwcjsfile += lighnningInterfceMap.get('force:hasRecordId')+'\n';
          }
          else if(interfaceArry[i]=='force:hasSObjectName'){
            lwcjsfile += lighnningInterfceMap.get('force:hasSObjectName')+'\n';
          }
          else{
            metaDataIntrfceArrycrt.push(interfaceArry[i]);
          }

         }
         let valueChangeEvnts = '' ; //in lwc there is no auravaluechange handling it by onchange
            // call js method to create metadata file 
         createMetadaFile(metaDataIntrfceArrycrt);
         let jspropertys = '';
       // create api js property
        if(apiPropertyObjArry.length > 0){

           for(let i=0;i < apiPropertyObjArry.length;i++){
            let apiText = '@api ';
            apiText +=apiPropertyObjArry[i].name;

             if(apiPropertyObjArry[i].type == 'Object[]'){
                apiText +=' =[]'+';\n';
             }

             else if(apiPropertyObjArry[i].type == 'boolean'){
                apiText +=' ='+apiPropertyObjArry[i].default+';\n' ;
             }
             else if(apiPropertyObjArry[i].default != ''){
                apiText +=' ='+apiPropertyObjArry[i].default+';\n' ;
              }
             else{
                apiText +=';\n' ;
             }
             valueChangeEvnts +='on'+apiPropertyObjArry[i].name+'Change(event){\n this.'+apiPropertyObjArry[i].name+' = event.target.value;\n}\n';
             jspropertys +=apiText;
           }
          }
          //create track js property
          if(trackProprtyObjArry.length > 0){

            for(let i=0;i < trackProprtyObjArry.length;i++){
                let trackText = '@track ';

                trackText +=trackProprtyObjArry[i].name;
 
              if(trackProprtyObjArry[i].type == 'Object[]'){
                trackText +=' =[]'+';\n';
              }
 
              else if(trackProprtyObjArry[i].type == 'boolean'){
                trackText +=' ='+trackProprtyObjArry[i].default+';\n' ;
              }
              else if(trackProprtyObjArry[i].type == 'default'){
                trackText +=' ='+trackProprtyObjArry[i].default+';\n' ;
              }
              else{
                trackText +=';\n' ;
             }
             valueChangeEvnts +='on'+trackProprtyObjArry[i].name+'Change(event){\n this.'+trackProprtyObjArry[i].name+' = event.target.value;\n}\n';
              jspropertys +=trackText;
            }
 
           }

           // connectedcallback and other events
             let eventjs = '';
             let handlerTagAndEvntsTags = document.getElementsByTagName('aura:handler');
             for(let i=0;i < handlerTagAndEvntsTags.length;i++  ){
              let atrributescmp = handlerTagAndEvntsTags[i].attributes;
             for ( let i=0;i < atrributescmp.length;i++){
              if(atrributescmp[i].nodeValue == 'init'){ 
                eventjs +=  'connectedCallback(){\n // observed handler init in your cmp file, so push all your init js hire. \n'+'}\n';
              }
            }
          }
          console.log('eventjs===='+eventjs);
          jspropertys+='\n'+eventjs+'\n'+valueChangeEvnts; // collecting init event and onchange event.
          lwcjsfile += jspropertys+'}';
          // console.log('lwc js file ==='+lwcjsfile.replace(/\yourcomponentname/g, componentname));
           let parajsfile = document.createElement('p');
           parajsfile.innerText = componentname+'.js\n'+lwcjsfile.replace(/\yourcomponentname/g, componentname);
           let optdiv = document.getElementById('output');
           optdiv.appendChild(parajsfile);
           parseAuraLtngTagsToLwcTags(); // parse for lightnig tags
           createLwcHtmlFile(); // calling htmlFile Creation function.

        }

          //@@CreatedBy   : Bhargav Alla
          //@@CreatedDate : 10/05/2019
          ///@@purpose for creating meta  xml file.

           function createMetadaFile(cominterfaces) {
             let metadatafile = '<?xml version="1.0" encoding="UTF-8"?>\n<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="yourcomponentname">\n<apiVersion>45.0</apiVersion>\n<isExposed>true</isExposed>\n<targets>';
               let cominterfaceslen = cominterfaces.length;
               for(let i=0;i < cominterfaceslen;i++){
                 if(lighnningInterfceMap.has(cominterfaces[i])){
                metadatafile+='<target>'+lighnningInterfceMap.get(cominterfaces[i])+'</target>\n';
              }
               }
               metadatafile +=' </targets>\n</LightningComponentBundle>';
               //console.log('===========================================================================');
             //  console.log('metadatafile ==='+metadatafile.replace(/\yourcomponentname/g, componentname));
                let paramedtfle = document.createElement('p');
                paramedtfle.innerText = componentname+'.js-meta.xml\n'+metadatafile.replace(/\yourcomponentname/g, componentname);
                let optdiv = document.getElementById('output');
                optdiv.appendChild(paramedtfle);
           }
               //@@CreatedBy   : Bhargav Alla
               //@@CreatedDate : 10/07/2019
               /// @@purpose forming html file after js property and meta file creation
              
              // TODO: listing all other aura tags
              // mapping respective lwc tags
              // motive : just reason to code :)L
              function createLwcHtmlFile(){
                let infoText = '<p>';
                //let onetimeauraif  = false;
                //let dataservce  = false;
                let  lines = document.getElementById('componentfile').value.split('\n');
                let htmlFile = componentname+'.html\n'+'<template>'
                     for(var i = 0;i < lines.length;i++){
                     // console.log('line==='+lines[i]);
                        let str = lines[i];                     //code here using lines[i] which will give you each line
                        if(!str.includes('aura:') && !str.includes('force:') && !str.includes('<ltng:require') && !str.includes('ui:')) {
                            htmlFile += lines[i]+'\n';
                         }
                         if(str.includes('<aura:if') /*&& !onetimeauraif */){
                          onetimeauraif = true;
                          infoText +='observed aura:if in your cmp html file ,please replace it by if:true or if:false in a Lightning web component html file. at line :'+i+'</br>';
                         }
                         if(str.includes('<force:recordData ') /*&& !dataservce*/){
                          dataservce = true;
                          infoText +='observed  data service(force:recorddata) in your cmp html file ,please replace it by  import { getRecord } from lightning/uiRecordApi in js file. refer : https://developer.salesforce.com/docs/component-library/documentation/lwc/reference_wire_adapters_record at line no:'+i+'</br></p>';
                         }
                         if(str.includes('<lightning:')){  // code for lightning tag replacement 
                         // console.log('str lines====='+str);
                         // console.log(auraAndlwcLtngTgMap.has('str'));
                              /*
                          let strkeys = auraAndlwcLtngTgMap.keys();
                          console.log('str lines====='+strkeys.next().value);
                          infoText+=auraAndlwcLtngTgMap.get(str); */
                         }  
                        }
                        let tagSuggestions = 'hey you need replace below  aura lightning tags to lwc tags:\n'
                       /* try to replace complete old tag with new tag aproach is failed regexp is not allowing /> symbol */
                        let  iterator = auraAndlwcLtngTgMap[Symbol.iterator]();
                        for (let item of iterator) {
                         //console.log('tag old====='+item[0]);
                         //console.log('tag new======'+item[1]);
                         // let regex = new RegExp(oldtag, "ig");
                         // htmlFile= htmlFile.replace(oldtag , newtag);
                         // htmlFile= htmlFile.replace(/\'<lightning:icon iconname="standard:opportunity" alternativetext="Opportunity" /g, '<lightning-icon icon-name="standard:opportunity" alternative-text="Opportunity"/');
                         tagSuggestions +='tag old====='+item[0];
                         tagSuggestions +='tag new====='+item[1]+'\n';
                        }
                        let modloptdiv = document.getElementById('tagReplacement');
                        let suggestionoptp = document.createElement('p');
                        suggestionoptp.innerText = tagSuggestions;
                        modloptdiv.appendChild(suggestionoptp);
                        let optdiv = document.getElementById('output');
                        htmlFile =htmlFile.replace(/\!c./g, '');
                        let parahtmlfle = document.createElement('p');
                        parahtmlfle.innerText=htmlFile.replace(/\!v./g, '')+'</template>';
                        optdiv.appendChild(parahtmlfle);
                        let warndiv = document.getElementById('warningsHtml');
                        warndiv.innerHTML = infoText;
                        let btn = document.getElementById('lwcparserbtn');
                        btn.innerText = 'LWC PARSER';
                        let end = window.performance.now();
                        document.getElementById('resTime').textContent = Number(end-start).toFixed(2)+'ms';
                        
                        //console.log('===========================================================================');
                //@@Effect (Failed): reading child nodes and removing of aura attributes.
                //@@ Time Taken   : 2 hours
                //@@ observation  : while appending to parent all becomes to child nodes and removing attribute
                //                   nodes causes removing all child node include non attribute nodes.
                 /* Array.prototype.slice.call(document.getElementsByTagName('aura:attribute')).forEach(
                  function(item) {
                  item.remove();
                  // or item.parentNode.removeChild(item); for older browsers (Edge-)
                 });
                 let htmlFile = document.getElementById('pfile');
                 console.log('child nodes==='+htmlFile.innerHTML);
                */
                /*
                let htmlFile = document.getElementById('input').childNodes; // get all children of div#lg_image
                for( i = 0; i < 5; i++ ) { // loop through the children
                console.log('child nodes==='+htmlFile[i]);
                  // if( theAs[i].nodeType != 3 ) { // if the child is not a whitespace,
                    //   theImg = theAs[i].innerHTML; // it is the a which contains the img, so save its content
                    //   break;
                  // }
                 }
                */
                 //let aurattributeremoved = htmlFile.replace(/<aura:attribute.*>.*?<\/aura:attribute>/ig,'');
                 //let el = document.createElement('div');
                 //el.innerHTML = htmlFile;
                  /* el.querySelectorAll('aura').forEach(function(item, index){
                 item.parentNode.removeChild(item);
                 }) */
                 //console.log('aurattributeremoved===='+htmlFile.replace(/(<aura:attribute>|<\/aura:attribute>)/g, ""));
                 /* let div = document.createElement('div');
                 div.innerHTML = htmlFile;
                  // get all <a> elements from div
                   var elements = div.getElementsByTagName('aura:attribute');
                          // remove all <a> elements
                          while (elements[0])
                          console.log('htmlFile=elements==='+elements[0]);
                          elements[0].parentNode.removeChild(elements[0]);
                          let repl = div.innerHTML;
                          console.log('htmlFile1==repl=='+repl);*/
              }
               //@@CreatedBy    : Bhargav Alla
               //@@CreatedDate  : 10/09/2019
               //@@Purpose      : function is used to replace aura lightning tags to their respective LWC Tags.
       
          function parseAuraLtngTagsToLwcTags(){

            // finding lightning tags becomes complex in dom so querying for all Tags in dom(wild card*)

            let lightningTags = document.getElementsByTagName('*');
            let ltngTagsCollcton = [];
              for(let i=0; i < lightningTags.length; i++){
                
                let tagname = lightningTags[i].tagName;
                if(tagname.includes('LIGHTNING')){  
                  ltngTagsCollcton.push(lightningTags[i]);
                }
              }
             // looping through all lightning tags and related attributes

             for(let i=0;i < ltngTagsCollcton.length;i++  ){
              let ltngTagsAttrs = ltngTagsCollcton[i].attributes;
              if (ltngTagsAttrs.length < 0) continue;
              let tag = '';
                if(auraLwcTagsMap.has(ltngTagsCollcton[i].localName)){
                  tag = '<'+ auraLwcTagsMap.get(ltngTagsCollcton[i].localName) ;
                }
                else{
                 tag = '<'+ltngTagsCollcton[i].localName.replace(/\:/g, '-');
                }
              for ( let i=0;i < ltngTagsAttrs.length;i++){
                 if(ltngTagsAttrs[i].name =='value'){
                  tag += ' '+'value='+ltngTagsAttrs[i].nodeValue.replace(/\!v./g, '')+'';
                  let vl = ltngTagsAttrs[i].nodeValue.replace(/\!v./g, '');
                  if(mapofVlueChnges.has(vl)){
                  tag += ' '+mapofVlueChnges.get(vl)+'';
                }
                }
                else if(ltngTagsAttrs[i].name =='onclick' || ltngTagsAttrs[i].name =='onClick' ){
                  tag += ' '+'onclick='+ltngTagsAttrs[i].nodeValue.replace(/\!c./g, '')+'';
                }
                else {
                  if(auraAtteMap.has(ltngTagsAttrs[i].name)){
                  tag += ' '+auraAtteMap.get(ltngTagsAttrs[i].name)+'="'+ltngTagsAttrs[i].nodeValue+'"';
                }
                else{
                  tag += ' '+ltngTagsAttrs[i].name+'="'+ltngTagsAttrs[i].nodeValue+'"';
                }
                }
             }
             tag +='/>';
             let outerhtl = ltngTagsCollcton[i].outerHTML.search('</');
             let outerhtlmapele = ltngTagsCollcton[i].outerHTML.substring(0,outerhtl);
             let outerhtlmapeleendTg = outerhtlmapele.replace(/\>/g, ' />');
             auraAndlwcLtngTgMap.set(outerhtlmapeleendTg,tag);
          }

        }
 

         /*
         //@@Purpose : Finding cap letter in attributes and changing to kebab case

           function attrbteCreat(attrbteName){
            let arryAtrbteIndxBrk =[];
            let finalattrbtname = '';
            let character = '' ;
            for(let i=0;i < attrbteName.length;i++){ 
              character = attrbteName.charAt(i);
               if( character == character.toUpperCase)  {
               //console.log('trye'); 
               arryAtrbteIndxBrk.push(i);
              }
            }
             if(arryAtrbteIndxBrk.length == 0){
               if(auraAtteMap.has(attrbteName))
               return attrbteName;
             }
             else{
               let firstoccurence = false;
               let previousIndx = 0;
               for (let index = 0; index < arryAtrbteIndxBrk.length; index++) {
                 if(!firstoccurence){
                 let  element = arryAtrbteIndxBrk[index];
                 finalattrbtname +=formFinalAtrrbt(attrbteName,previousIndx,element);
                 firstoccurence = true;
                 previousIndx = element;
                 //debugger;
                // console.log('finalattrbtname==='+finalattrbtname);
                }
                else{
                 let element = arryAtrbteIndxBrk[index];
                  finalattrbtname +=formFinalAtrrbt(attrbteName,previousIndx,element);
                  previousIndx = element;
                 // console.log('finalattrbtname==='+finalattrbtname);
                }
               }
               return finalattrbtname;
             }
           }
           function formFinalAtrrbt(attrfnl ,startindex, finalindex){
               return(attrfnl.substring(startindex,finalindex)+'-');
           }*/
