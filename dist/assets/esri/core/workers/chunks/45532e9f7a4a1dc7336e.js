/*! For license information please see 45532e9f7a4a1dc7336e.js.LICENSE.txt */
self.webpackChunkRemoteClient([110,153],{584:function(e,u,n){!function(e){"use strict";var u="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),n=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",u[7],u[8],u[9]];function a(e,a,t,i){var s="";switch(t){case"s":return i?"muutaman sekunnin":"muutama sekunti";case"ss":s=i?"sekunnin":"sekuntia";break;case"m":return i?"minuutin":"minuutti";case"mm":s=i?"minuutin":"minuuttia";break;case"h":return i?"tunnin":"tunti";case"hh":s=i?"tunnin":"tuntia";break;case"d":return i?"päivän":"päivä";case"dd":s=i?"päivän":"päivää";break;case"M":return i?"kuukauden":"kuukausi";case"MM":s=i?"kuukauden":"kuukautta";break;case"y":return i?"vuoden":"vuosi";case"yy":s=i?"vuoden":"vuotta"}return function(e,a){return e<10?a?n[e]:u[e]:e}(e,i)+" "+s}e.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(68))},66:function(e,u){function n(e){var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=66}});