/*! For license information please see main-143170c585790bf43e3f.js.LICENSE.txt */
(()=>{var e,t,i,r={22708:(e,t,i)=>{"use strict";i.d(t,{P:()=>s,U:()=>a});var r=i(52850),a=(e=>(e.TOGGLE_LAYER_ON="TOGGLE_LAYER_ON",e.TOGGLE_LAYER_OFF="TOGGLE_LAYER_OFF",e.TRAY_QUICK_BUTTON_CLICK="TRAY_QUICK_BUTTON_CLICK",e.TRAY_QUICK_ROAD_CLICK="TRAY_QUICK_ROAD_CLICK",e.COMMERCIAL_LAYER_ON="COMMERCIAL_LAYER_ON",e.COMMERCIAL_LAYER_OFF="COMMERCIAL_LAYER_OFF",e))(a||{});function s(e,t,i){return{type:r.MPk,name:e,label:t,category:i}}},66003:(e,t,i)=>{"use strict";i.d(t,{JK:()=>v,P8:()=>y,RB:()=>A,Xv:()=>$,_n:()=>m,aB:()=>f,dP:()=>w,f5:()=>E,oo:()=>T});var r=i(13446),a=i(80027),s=i(52850),o=i(10388),n=i(30191),l=i(21379),c=i(31395),d=i(76393),p=i(76310),u=i(78707),h=i(9748),g=i(22708);function m(e){return e.slice(1).split("&").reduce(((e,t)=>{const[i,r]=decodeURIComponent(t).split("=");if(i===s.csN.CLASSIFICATIONS&&r&&(e[s.csN.CLASSIFICATIONS]=r.split(",").map((e=>decodeURIComponent(e)))),i===s.csN.TRAY_POSITION&&r){const t=parseFloat(r);"number"==typeof t&&(e[s.csN.TRAY_POSITION]=t)}return i===s.csN.HAS_NAVIGATED_FROM_SEARCH&&"true"===r&&(e[s.csN.HAS_NAVIGATED_FROM_SEARCH]=!0),i===s.csN.SKIP_TUTORIALS&&"false"!==r&&(e[s.csN.SKIP_TUTORIALS]=!0),i===s.csN.NLP&&"false"!==r&&(e[s.csN.NLP]=!0),i===s.csN.KIOSK&&"false"!==r?(e[s.csN.KIOSK]=!0,o.Ay.dispatch((0,g.P)("kiosk","kiosk",s.l_R.KIOSK)),document.body.classList.add("kiosk")):document.body.classList.remove("kiosk"),e}),{})}function y(e){const t=[],i=e[s.csN.CLASSIFICATIONS],r=e[s.csN.TRAY_POSITION],a=e[s.csN.HAS_NAVIGATED_FROM_SEARCH];if(i&&t.push(`${s.csN.CLASSIFICATIONS}=${i.map((e=>encodeURIComponent(e))).join(",")}`),r){const i=e[s.csN.TRAY_POSITION]??"";t.push(`${s.csN.TRAY_POSITION}=${i}`)}return a&&t.push(`${s.csN.HAS_NAVIGATED_FROM_SEARCH}=true`),e[s.csN.SKIP_TUTORIALS]&&t.push(s.csN.SKIP_TUTORIALS),e[s.csN.NLP]&&t.push(`${s.csN.NLP}=true`),e[s.csN.KIOSK]&&t.push(`${s.csN.KIOSK}=true`),t.length?`?${t.join("&")}`:""}const v=e=>(t,i)=>{const{isSidebarCollapsed:r}=i().tray,a=i().app.layout;return window.appDimensions.sidebarWidth=(0,d.A)(r,e),!r&&a&&[s.EA.PHONE_XL,s.EA.TABLET].includes(e)&&[s.EA.DESKTOP,s.EA.DESKTOP_XL,s.EA.DESKTOP_ULTRAWIDE].includes(a)&&t((0,u.gX)()),t({type:s.yj9,layout:e})},b=s.uqS.includes("rem")?(0,p.A)(s.uqS):parseFloat(s.uqS);function f(e){return window.appDimensions.legendWidth=e?0:b,{type:s.U7i,collapse:e}}function w(e){return{type:s.Q3H,offline:e}}const S=e=>()=>{window.localStorage.setItem((0,h.DC)(e),JSON.stringify(!0))},A=(e,t)=>i=>{t||i(S(e)),i({type:s.DoY,tutorialType:e}),i({type:s.BSm,slug:t})},E=e=>t=>{const i=window.localStorage.getItem((0,h.DC)(s.S9j.FAVORITE));(i?JSON.parse(i):void 0)&&e!==s.QeQ.FAVORITE_SEARCH||t((0,l.z)(`${s.Gqw.TOUR}/${s.S9j.FAVORITE}/${e}`))},$=(e,t=(()=>{}))=>(window.location.hash.includes("tour")&&t(!0),e.app.tutorialStep),T=(e,t)=>async(i,o)=>{const d=window.location.origin||`${window.location.protocol}//${window.location.host}`,p=new URL(e.startsWith(d)?e:`${d}${e}`),g=m(p.search),v=g.skipTutorials??!1;let b=!1;if(t?.isFirstRun||g[s.csN.CLASSIFICATIONS]){const e=(e=>{const t=e[s.csN.CLASSIFICATIONS];let i=t?(0,n.JV)(Array.isArray(t)?t:[t],a.j9):(0,n.WG)(a.j9);const r=Object.values(i).filter(Boolean).length;t&&(!r&&t.length||r!==t.length)&&(i=(0,n.WG)(a.j9));const o=y({...e,[s.csN.CLASSIFICATIONS]:(0,n.LR)(i)}),{pathname:l,hash:c}=window.location;return window.history.replaceState({},"",`${l}${o}${c}`),i})(g),t=o().app.activeLayers;(0,r.A)(e,t)||(b=!0),i({type:s.mUz,activeLayers:e})}p.hash.startsWith("#scroll/")?i({type:s.oTX,elementId:p.hash.replace("#scroll/","#")}):i({type:s.oTX,elementId:null});const f=a._k.some((e=>p.hash.startsWith(e,1)));v&&p.hash.includes(s.Gqw.TOUR)&&(p.hash=""),v&&!f&&(i(S(s.S9j.WELCOME)),i(S(s.S9j.FAVORITE))),v||i((e=>{let t;const i=window.localStorage.getItem((0,h.DC)(s.S9j.WELCOME));i&&(t=JSON.parse(i)||!1),t||e((0,l.z)(`${s.Gqw.TOUR}/${s.S9j.WELCOME}/${s.QeQ.WELCOME}`))}));const w=[];w.push(i((0,l.z)(p.hash.substring(1)))),e.startsWith("#")||w.push(i((0,c.UW)(p.pathname,{...g})));const A=await Promise.all([...w,b]);!t?.isFirstRun&&A.some((e=>e))&&await i((0,u.gX)())}},52353:(e,t,i)=>{"use strict";i.d(t,{QB:()=>g,ac:()=>m});var r=i(25447),a=i(52850),s=i(80027),o=i(30191),n=i(22493),l=i(88014),c=i(5776),d=i(57914),p=i(97966);const u=e=>t=>{const i=e.cameraQuery;i&&t((0,d.gf)(l.UN.CAMERAS,i.camera,i.error))},h=()=>(e,t)=>(e({type:a.fQb}),{query:n.A`
			query Camera(
				$cameraId: ID!
				$layerSlugs: [String!]!
				$nearbyViewLimit: Int!
				$showCameraLastUpdated: Boolean!
				$isCamerasEnabled: Boolean!
				$showCommercialQuantities: Boolean!
			) {
				cameraQuery(cameraId: $cameraId) {
					camera {
						uri
						color
						title
						bbox
						icon
						agencyAttribution {
							agencyName
						}
						lastUpdated @include(if: $showCameraLastUpdated) {
							timestamp
							timezone
						}
						location {
							primaryLinearReference
							secondaryLinearReference
						}
						nearbyWeatherStation {
							uri
							status
							lastUpdated {
								timestamp
								timezone
							}
							description
							weatherStationFields
							drivingConditions {
								title
								description
								lastUpdated {
									timestamp
									timezone
								}
								icon
								color
							}
						}
						features {
							id
							geometry
							properties
						}
						...Views
						...NearbyResults
					}
					error {
						type
					}
				}
			}
			${c.A.viewsFeatureCollection}
			${c.A.nearbyResults}
		`,variables:{cameraId:(0,l.DY)(t()),showCameraLastUpdated:s.mc&&!s.mc.hideLastUpdateTime,layerSlugs:(0,o.LR)(t().app.activeLayers),nearbyViewLimit:a.az4,isCamerasEnabled:!!s.mc,showCommercialQuantities:(0,r.hf)(t(),s.UB,s.JM)}}),g=()=>{p.GS.subscribe(a.Vzk.TRAY,h),p.Rt.subscribe(a.Vzk.TRAY,u)},m=()=>{p.GS.has(a.Vzk.TRAY,h)&&p.GS.unsubscribe(a.Vzk.TRAY),p.Rt.has(a.Vzk.TRAY,u)&&p.Rt.unsubscribe(a.Vzk.TRAY)}},56089:(e,t,i)=>{"use strict";i.d(t,{Py:()=>f,Yf:()=>h,cV:()=>y,eL:()=>b});var r=i(26200),a=i(10388),s=i(4983),o=i(52114),n=i(22493),l=i(52850),c=i(97966),d=i(21379),p=i(86094),u=i(78707);function h(e){return e.filter((e=>!e.displayLocations||e.displayLocations.includes(s.L4.OneWeb)))}const g=n.A`
	query CmsMessages {
		cmsMessagesQuery {
			cmsMessages {
				uri
				title
				content
				priority
				messageType
				displayLocations
			}
			error {
				type
			}
		}
	}
`,m=n.A`
	query CmsLayers {
		cmsLayersQuery {
			cmsLayers
		}
	}
`;function y(){c.xg.subscribe("cmsLayers",(()=>()=>({query:m}))),c.Ky.subscribe("cmsLayers",(e=>t=>{try{const i=e.cmsLayersQuery?.cmsLayers;if(i){const{app:e}=a.Ay.getState();let{activeLayers:r}=e;const s=r;r=Object.keys(r).reduce(((e,t)=>{const r=s[t];return[...i].includes(t)?{...e,[t]:!1}:{...e,[t]:r}}),{}),t({type:l.So7,inactiveLayers:i}),t({type:l.mUz,activeLayers:r}),t((0,p.h)(r)),t((0,u.gX)())}}catch(e){console.error(e)}}))}let v=!0;function b(){c.xg.subscribe("cmsMessages",(()=>()=>({query:g}))),c.Ky.subscribe("cmsMessages",(e=>t=>{try{const i=e?.cmsMessagesQuery?.cmsMessages,a=i?.filter((e=>"message"===e.messageType)),s=i?.filter((e=>"floodgate"===e.messageType)),n=h(a||[]);if(a){const e=(0,o.S8)(n,[r.bB]);t({type:l.Bc5,result:e.result,entities:e.entities})}if(s){s.sort(((e,t)=>"High"===e.priority&&"High"===t.priority?0:"High"===e.priority&&"High"!==t.priority?-1:1));const e=s.find((e=>"High"===e.priority));if(e&&v){v=!1;const i=e.uri.split("/")?.[1];i&&!window.location.hash&&t((0,d.A)(`${l.Gqw.FLOODGATE}/${i}`))}t({type:l.X90,cmsFloodgates:s})}t({type:l.vgn,error:e?.cmsMessagesQuery?.error})}catch(e){t({type:l.vgn,error:{type:l.i65.INTERNAL_SERVER_ERROR}}),console.error(e)}}))}function f(){}n.A`
	query CmsDashboards {
		cmsDashboardsQuery {
			cmsDashboards {
				id
				title
				icon
				bounds {
					west
					south
					east
					north
				}
				layers
			}
		}
	}
`},75421:(e,t,i)=>{"use strict";i.d(t,{J:()=>m,X:()=>g});var r=i(25447),a=i(52850),s=i(22493),o=i(30191),n=i(80027),l=i(88014),c=i(5776),d=i(57914),p=i(97966);const u=()=>(e,t)=>(e({type:a.fQb}),{query:s.A`
			query CustomLayer(
				$customLayerId: ID!
				$layerSlugs: [String!]!
				$nearbyViewLimit: Int!
				$isCamerasEnabled: Boolean!
				$showCommercialQuantities: Boolean!
			) {
				customLayer(customLayerId: $customLayerId) {
					customLayer {
						uri
						title
						bbox
						icon
						descriptions
						color
						contextualHelp
						infoFields {
							fieldName
							displayValue
							inAlertState
							isTopField
							icon
							displayValueSecondary
							displayValueSecondaryHTML
							link
							priority
							style
							topFieldOverRideHTML
						}
						cardSection {
							title
							contextHelp
							cards {
								icon
								iconTitle
								text
							}
						}
						customHTMLSection
						features {
							id
							geometry
							properties
						}
						...NearbyResults
					}
					error {
						type
					}
				}
			}
			${c.A.nearbyResults}
		`,variables:{customLayerId:(0,l.DY)(t()),layerSlugs:(0,o.LR)(t().app.activeLayers),showCameraLastUpdated:n.mc&&!n.mc.hideLastUpdateTime,nearbyViewLimit:a.az4,isCamerasEnabled:!!n.mc,showCommercialQuantities:(0,r.hf)(t(),n.UB,n.JM)}}),h=e=>t=>{const i=e.customLayer;i&&t((0,d.gf)(l.UN.CUSTOM_LAYER,i.customLayer,i.error))},g=()=>{p.GS.subscribe(a.Vzk.TRAY,u),p.Rt.subscribe(a.Vzk.TRAY,h)},m=()=>{p.GS.has(a.Vzk.TRAY,u)&&p.GS.unsubscribe(a.Vzk.TRAY),p.Rt.has(a.Vzk.TRAY,h)&&p.Rt.unsubscribe(a.Vzk.TRAY)}},82224:(e,t,i)=>{"use strict";i.d(t,{Zp:()=>S,vl:()=>w});var r=i(52114),a=i(94857),s=i(80027),o=i(25447),n=i(52850),l=i(22493),c=i(4983),d=i(26200),p=i(5776),u=i(97966),h=i(34132),g=i(91780),m=i(56089),y=i(88014),v=i(95504);const b=()=>(e,t)=>{e({type:n.fQb});let i=s.ps.allowedLayerSlugs?.length?s.ps.allowedLayerSlugs:[...Object.values(s.Re)];const{inactiveLayers:r}=t().app;return i=i.filter((e=>!r.includes(e))),{query:l.A`
			query Dashboard(
				$layerSlugs: [String!]!
				$nearbyViewLimit: Int!
				$isCamerasEnabled: Boolean!
				$showCameraCarousel: Boolean!
				$isLoggedIn: Boolean!
				$maxPriority: Int
				$showCommercialQuantities: Boolean!
			) {
				dashboardQuery {
					cameraViewsPayload @include(if: $showCameraCarousel) {
						cameraViews {
							...CameraViewContents
						}
						cameraViewType
					}
					cmsPayload {
						messages {
							uri
							title
							content
							displayLocations
						}
						campaigns {
							title
							content
							url
							displayLocations
						}
					}
					collections(layerSlugs: $layerSlugs, maxPriority: $maxPriority) {
						uri
						title
						cityReference
						bbox
						icon
						color
						... on Event {
							agencyAttribution {
								agencyName
								agencyURL
								agencyIconURL
							}
							lastUpdated {
								timestamp
								timezone
							}
							beginTime {
								timestamp
								timezone
							}
							isWazeEvent
							priority
							quantities @include(if: $showCommercialQuantities) {
								label
								value
								icon
							}
							description
							...DelayDescriptions
						}

						location {
							primaryLinearReference
							secondaryLinearReference
						}
						views(limit: $nearbyViewLimit, orderBy: NEAREST_ASC) @include(if: $isCamerasEnabled) {
							uri
							... on CameraView {
								url
							}
							... on PlowCameraView {
								url
							}
							... on RestAreaView {
								url
							}
							parentCollection {
								uri
								location {
									primaryLinearReference
								}
							}
						}
					}
					favoritesPayload @include(if: $isLoggedIn) {
						favorites {
							uri
							...FavoriteVisual
							...AlertSchedule
						}
						error {
							type
						}
					}
				}
			}
			${p.A.cameraViewContents}
			${p.A.favoriteVisual}
			${p.A.alertSchedule}
			${p.A.delayDescriptions}
		`,variables:{layerSlugs:i,maxPriority:s.ps.maxPriority,nearbyViewLimit:n.az4,isCamerasEnabled:!!s.mc,showCameraCarousel:!!s.mc&&s.ps.showCameras,isLoggedIn:(0,v.M3)(t()),showCommercialQuantities:(0,o.hf)(t(),s.UB,s.JM)}}},f=e=>t=>{if(e.dashboardQuery)try{const i=(0,r.S8)(e.dashboardQuery.cameraViewsPayload?.cameraViews||[],[d.Ht]),s=(0,r.S8)(e.dashboardQuery?.collections||[],[d.cI]);e.dashboardQuery?.favoritesPayload?.favorites&&t((0,g.CI)(e.dashboardQuery.favoritesPayload.favorites)),e.dashboardQuery.favoritesPayload?.error?.type===n.i65.NOT_AUTHORIZED&&t((0,h.Wl)()),t({type:n.JBx,visibleUri:y.UN.DASHBOARD,visibleView:y.UN.DASHBOARD});const o=e.dashboardQuery.cameraViewsPayload?.cameraViewType||c.j6.Default,l=e.dashboardQuery.cmsPayload?.messages||[],p=e.dashboardQuery.cmsPayload?.campaigns||[];t({type:n.h6q,features:s.result,cameraViews:i.result,cameraViewType:o,cmsContent:{messages:(0,m.Yf)(l),campaigns:(0,m.Yf)(p)},favorites:e.dashboardQuery.favoritesPayload?.favorites??void 0,error:null===e.dashboardQuery.collections?{type:n.i65.INTERNAL_SERVER_ERROR}:null,entities:(0,a.A)(i.entities,s.entities)})}catch(e){console.error(e),t({type:n.ZkM,error:{type:n.i65.INTERNAL_SERVER_ERROR}})}},w=()=>{u.GS.subscribe(n.Vzk.TRAY,b),u.Rt.subscribe(n.Vzk.TRAY,f)},S=()=>{u.GS.has(n.Vzk.TRAY,b)&&u.GS.unsubscribe(n.Vzk.TRAY),u.Rt.has(n.Vzk.TRAY,f)&&u.Rt.unsubscribe(n.Vzk.TRAY)}},97780:(e,t,i)=>{"use strict";i.d(t,{D:()=>m,V:()=>g});var r=i(25447),a=i(52850),s=i(80027),o=i(30191),n=i(22493),l=i(88014),c=i(5776),d=i(57914),p=i(97966);const u=()=>(e,t)=>(e({type:a.fQb}),{query:n.A`
			query Event(
				$layerSlugs: [String!]!
				$eventId: ID!
				$nearbyViewLimit: Int!
				$isCamerasEnabled: Boolean!
				$showCameraLastUpdated: Boolean!
				$showCommercialQuantities: Boolean!
			) {
				eventQuery(eventId: $eventId, layerSlugs: $layerSlugs) {
					event {
						uri
						title
						description
						bbox
						location {
							primaryLinearReference
							secondaryLinearReference
						}
						icon
						color
						lastUpdated {
							timestamp
							timezone
						}
						beginTime {
							timestamp
							timezone
						}
						isWazeEvent
						priority
						agencyAttribution {
							agencyName
							agencyURL
							agencyIconURL
						}
						quantities @include(if: $showCommercialQuantities) {
							label
							value
							icon
						}
						feedbackOptions {
							id
							total
							prompt
							icon
							color
							lastUpdated {
								timestamp
								timezone
							}
							isConsideredNegative
						}
						delayDescription
						features {
							id
							geometry
							properties
						}
						routePositiveBearing
						laneImpacts {
							positiveLaneImpact {
								laneCount
								lanesAffected {
									lanes
								}
							}
							negativeLaneImpact {
								laneCount
								lanesAffected {
									lanes
								}
							}
						}
						active
						verified
						...DelayDescriptions
						...Views
						...NearbyResults
					}
					error {
						type
					}
				}
			}
			${c.A.delayDescriptions}
			${c.A.viewsFeatureCollection}
			${c.A.nearbyResults}
		`,variables:{layerSlugs:(0,o.LR)(t().app.activeLayers),eventId:(0,l.DY)(t()),nearbyViewLimit:a.az4,isCamerasEnabled:!!s.mc,showCameraLastUpdated:s.mc&&!s.mc.hideLastUpdateTime,showCommercialQuantities:(0,r.hf)(t(),s.UB,s.JM)}}),h=e=>t=>{const i=e.eventQuery;i&&t((0,d.gf)(l.UN.EVENTS,i.event,i.error))},g=()=>{p.GS.subscribe(a.Vzk.TRAY,u),p.Rt.subscribe(a.Vzk.TRAY,h)},m=()=>{p.GS.has(a.Vzk.TRAY,u)&&p.GS.unsubscribe(a.Vzk.TRAY),p.Rt.has(a.Vzk.TRAY,h)&&p.Rt.unsubscribe(a.Vzk.TRAY)}},9045:(e,t,i)=>{"use strict";i.d(t,{$I:()=>d,Bo:()=>p,CX:()=>m,EO:()=>f,Fh:()=>M,G5:()=>x,Hn:()=>h,IY:()=>v,Nc:()=>L,O8:()=>C,Tk:()=>R,_8:()=>g,eK:()=>u,fl:()=>_,gQ:()=>E,nS:()=>b,sX:()=>y,uM:()=>w,vP:()=>S,vU:()=>$,yo:()=>A});var r=i(72357),a=i(70192),s=i(80027),o=i(22645),n=i(21379),l=i(52850),c=i(9748);const d="FEEDBACK_AJAX_SUBMITTED",p="FEEDBACK_AJAX_SUCCESS",u="FEEDBACK_AJAX_ERROR",h="FEEDBACK_AJAX_RESET",g="STRUCTURED_FEEDBACK_NEGATIVE_STARTED",m="STRUCTURED_FEEDBACK_NEGATIVE_RESET",y="STRUCTURED_FEEDBACK_NEGATIVE_SUBMITTED",v="STRUCTURED_FEEDBACK_NEGATIVE_SUCCESS",b="STRUCTURED_FEEDBACK_NEGATIVE_ERROR",f="STRUCTURED_FEEDBACK_SUBMITTED",w="STRUCTURED_FEEDBACK_SUCCESS",S="STRUCTURED_FEEDBACK_ERROR",A="BROKEN_CAMERA_SUBMITTED",E="BROKEN_CAMERA_SUCCESS",$="BROKEN_CAMERA_ERROR",T="feedback endpoint not configured",R=({email:e,subject:t,body:i})=>async r=>{if(!s.Of||!s.DR.endpoints.feedback)throw new Error(T);r({type:d});try{const a=await(0,o.hw)("feedback_freetext"),n=`${s.DR.endpoints.feedback}/freeText?captchaToken=${a}`,{status:l}=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,subject:t,body:i,appId:"OneWeb"})});if(200!==l)throw new Error(`Feedback returned status: ${l}`);r({type:p})}catch(e){console.error("Feedback",e),r({type:u})}};function k(e,t){window.localStorage.setItem((0,c.A2)(e),t)}function M(e){return window.localStorage.getItem((0,c.A2)(e))}const C=(e,t)=>async i=>{i({type:g,situationId:e,responseId:t}),await i((0,n.A)(l.Gqw.NEGATIVE_EVENT_FEEDBACK))},_=(e,t)=>async i=>{i({type:f});try{if(!s.DR.endpoints.feedback)throw new Error(T);const r=await(0,o.hw)("feedback_structured"),a=`${s.DR.endpoints.feedback}/eventReports/${e}/feedback?captchaToken=${r}`,{status:n}=await fetch(a,{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({responseId:t})});if(200!==n&&204!==n)throw new Error(`Feedback returned status: ${n}`);k(e,t),i({type:w,situationId:e,responseId:t})}catch(r){console.error("Feedback",r),i({type:S,situationId:e,responseId:t})}},x=(e,t,i,r)=>async a=>{a({type:y});try{if(!s.DR.endpoints.feedback)throw new Error(T);const n=await(0,o.hw)("feedback_structured"),l=`${s.DR.endpoints.feedback}/eventReports/${e}/feedback?captchaToken=${n}`,{status:c}=await fetch(l,{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({responseId:t,submitterEmail:i,userFreeText:r})});if(200!==c&&204!==c)throw new Error(`Feedback returned status: ${c}`);k(e,t),a({type:v,situationId:e,responseId:t})}catch(i){console.error("Feedback",i),a({type:b,situationId:e,responseId:t})}},L=(e,t,i,n,l)=>async c=>{c({type:A});try{if(!s.DR.endpoints.feedback)throw new Error(T);const d=await(0,o.hw)("feedback_broken_camera"),p=`${s.DR.endpoints.feedback}/freeText?captchaToken=${d}`;if((0,a.HQ)(i)){const a=i?.parentCollection.bbox[1],o=i?.parentCollection.bbox[0];let d=i?.sources?.[0]?.src||i.url;if(s.mc?.fetchPlaylistFromCameraResponse&&i.sources?.[0]?.original)try{const e=await(0,r.A)({query:"query GetBrokenCameraQuery($originalURL: String!) {\n\t\t\t\t\t\t\t\t \t\tbrokenCameraQuery(originalURL: $originalURL) {\n\t\t\t\t\t\t\t\t \t\t  src\n\t\t\t\t\t\t\t\t \t\t}\n\t\t\t\t\t\t\t\t \t  }",variables:{originalURL:i.sources[0].original}});e?.brokenCameraQuery?.src&&(d=e.brokenCameraQuery?.src)}catch(e){}const u=await fetch(p,{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({subject:s.Lk.brokenCamera.getSubject(e),body:s.Lk.brokenCamera.getBody(e,t,"",""),appId:"OneWeb",cameraName:i?.title,latitude:a,longitude:o,cameraFeedUrl:d,reason:n,email:l,routeId:i?.parentCollection?.location?.routeDesignator||""})}),{status:h}=u;if(200!==h&&204!==h)throw new Error(`Feedback camera status: ${h}`);c({type:E,contentUri:e})}}catch(t){console.error("Feedback broken camera",t),c({type:$,contentUri:e})}}},45157:(e,t,i)=>{"use strict";i.d(t,{Jt:()=>l,Jv:()=>u,Vp:()=>p});var r=i(52850),a=i(22493),s=i(88014),o=i(57914),n=i(97966);const l=e=>({query:a.A`
		query FuelingStationQuery($fuelingStationId: ID!) {
			fuelingStationQuery(fuelingStationId: $fuelingStationId) {
				error {
					message
					type
				}
				fuelingStation {
					bbox
					address
					connectors
					totalChargers
					customHTMLSection
					features {
						bbox
						geometry
						id
						properties
						title
						type
					}
					dataFields {
						style
						fieldName
						displayValue
						displayValueSecondary
						displayValueSecondaryHTML
						inAlertState
						isTopField
						link
						icon
						priority
						tooltip
						topFieldOverRideHTML
					}
					title
					tooltip
					uri
					icon
				}
			}
		}
	`,variables:{fuelingStationId:e}}),c=()=>(e,t)=>(e({type:r.fQb}),l((0,s.DY)(t()))),d=e=>(t,i)=>{const r=e.fuelingStationQuery;r&&(null!=r.fuelingStation&&window.sessionStorage.setItem(`fuelingStation_${(0,s.DY)(i())}`,JSON.stringify(r.fuelingStation)),t((0,o.gf)(s.UN.FUELING_STATIONS,r.fuelingStation,r.error)))},p=()=>{n.GS.subscribe(r.Vzk.TRAY,c),n.Rt.subscribe(r.Vzk.TRAY,d)},u=()=>{n.GS.has(r.Vzk.TRAY,c)&&n.GS.unsubscribe(r.Vzk.TRAY),n.Rt.has(r.Vzk.TRAY,d)&&n.Rt.unsubscribe(r.Vzk.TRAY)}},30153:(e,t,i)=>{"use strict";i.d(t,{c4:()=>o,VV:()=>s});class r extends Error{constructor(e){super(e),this.name="SessionExpiredError"}}var a=i(9748);function s(e){if("SECONDS"===e.lifespan.units)return e.createdMillis+1e3*e.lifespan.time;if("MINUTES"===e.lifespan.units)return e.createdMillis+1e3*e.lifespan.time*60;if("HOURS"===e.lifespan.units)return e.createdMillis+1e3*e.lifespan.time*60*60;if("DAYS"===e.lifespan.units)return e.createdMillis+1e3*e.lifespan.time*60*60*24;throw new Error(`Unsupported unit: ${e.lifespan.units}`)}function o(){const e=window.localStorage.getItem(a.Ni)||window.sessionStorage.getItem(a.Ni);if(!e)return null;const t=JSON.parse(e),i=s(t);if(Date.now()>i){const e=new r;throw console.error(e),window.localStorage.removeItem(a.Ni),window.sessionStorage.removeItem(a.Ni),e}return t}},62239:(e,t,i)=>{"use strict";i.d(t,{C:()=>s});var r=i(52850),a=i(88014);const s=e=>(t,i)=>{t({type:r.wIz,searchType:e});const{activeView:s,visibleView:o}=i().tray;e!==r.nXf.SEARCH_ROUTE&&s!==a.UN.SEARCH_ROUTE&&o!==a.UN.SEARCH_ROUTE&&t({type:r.Zhl,clearFavoriteId:!1})}},86094:(e,t,i)=>{"use strict";i.d(t,{Ay:()=>u,WZ:()=>d,h:()=>c,wT:()=>p});var r=i(52850),a=i(80027),s=i(4983),o=i(30191),n=i(66003),l=i(78707);const c=e=>t=>{const i=(0,o.JV)((0,o.LR)(e),a.j9),{hash:s,pathname:l,search:c}=window.location,d=(0,n._n)(c);d[r.csN.CLASSIFICATIONS]=(0,o.LR)(i);const p=(0,n.P8)(d);window.history.replaceState({},"",`${l}${p}${s}`),t({type:r.mUz,activeLayers:i})},d=()=>(e,t)=>{const i=t().your511.account?.userType,r=(0,o.WG)(a.j9);i===s.ut.Trucker&&a.UB&&a.UB.sublayers&&a.UB.sublayers.forEach((e=>{r[e]=!0})),e(c(r)),e((0,l.gX)())},p=(e,t)=>(i,r)=>{const{activeLayers:s}=r().app,o=a.j9.find((t=>t.slug===e));return s[e]!==t&&(t&&((e,t)=>{t&&t.excludes&&t.excludes.forEach((t=>{e[t]=!1}))})(s,o),s[e]=t,i(c(s)),!0)},u=p},87190:(e,t,i)=>{"use strict";i.d(t,{Cg:()=>E,Er:()=>N,b1:()=>T,ec:()=>M,ik:()=>C,jF:()=>x,jU:()=>k,tf:()=>_,wf:()=>L});var r=i(34542),a=i(4983),s=i(61531),o=i(80027),n=i(52850),l=i(18211),c=i(11650),d=i(10388),p=i(72357),u=i(76393),h=i(22493),g=i(30191),m=i(93127),y=i(23356),v=i(78707),b=i(97966),f=i(31395),w=i(57914);const S=h.A`
	query MapFeatures($input: MapFeaturesArgs!, $plowType: String) {
		mapFeaturesQuery(input: $input) {
			mapFeatures {
				bbox
				title
				tooltip
				uri
				features {
					id
					geometry
					properties
					type
				}
				... on Cluster {
					maxZoom
				}
				... on Sign {
					signDisplayType
				}
				... on Event {
					priority
				}
				__typename
				... on Camera {
					active
					views(limit: 5) {
						uri
						... on CameraView {
							url
						}
						category
					}
				}
				... on Plow {
					views(limit: 5, plowType: $plowType) {
						uri
						... on PlowCameraView {
							url
						}
						category
					}
				}
			}
			error {
				message
				type
			}
		}
	}
`,A=/(around|predefined)=[^\\/]+/,E=0;let $=null;const T=e=>(t,i)=>{const r=(0,c.I3)(i());(0,y.A)(r,e)||(t((0,w.kr)(r)),(e=>{const t=`@${(0,l.A)(e.center.lng)},${(0,l.A)(e.center.lat)},${Math.floor(e.zoom)}`;let{pathname:i}=window.location;i=f.Zg.test(i)?i.replace(f.Zg,t):i.concat(t),i=i.replace(A,"around");const r=window.location.hash?`#${window.location.hash}`:"";window.history.replaceState({},"",`${i}${window.location.search}${r}`)})(e),t({type:n.pUN,mapPosition:e}))},R=e=>(t,i)=>{const{mapPosition:a}=i().map;if(!a)throw new Error("expected mapPosition");const s=i().app.layout===n.EA.DESKTOP,o=(0,r.T)({center:e,zoom:a.zoom},s);t({type:n.pUN,mapPosition:o})},k=()=>(e,t)=>{const i=t().map.myLocation.center;$&&i?e(R(i)):navigator?.geolocation?.getCurrentPosition((({coords:{latitude:t,longitude:i}})=>{const r={center:{lat:t,lng:i},statusCode:E};e({type:n.Hci,myLocation:r}),e(R(r.center)),e((e=>{const t=navigator?.geolocation?.watchPosition((({coords:{latitude:t,longitude:i}})=>{const r={center:{lat:t,lng:i},statusCode:E};e({type:n.Hci,myLocation:r})}),(({code:t})=>{e({type:n.Hci,myLocation:{statusCode:t}}),$&&navigator.geolocation.clearWatch($),$=null}));t&&($=t)}))}),(({code:t})=>{e({type:n.Hci,myLocation:{statusCode:t}})}))};function M(e){return{type:n.inE,spiderfyPosition:e}}const C=e=>(t,i)=>{const r=(0,c.I3)(i());if(!r)return;const a={...r,zoom:r.zoom+e};t(T(a)),t((0,v.gX)())},_=e=>(t,i)=>{const r=i(),{mapType:a}=r.map;a&&t({type:n.cae,mapType:e})};function x(e){return{type:n.hPA,hoveringCollectionUri:e}}function L(e){return{type:n.a$,highlightedCollectionUri:e??null}}let I;const O=e=>t=>{const i=d.Ay.getState().app.activeLayers.electronicSigns,r=o.j9.find((e=>e.slug===n.f2p.SIGNS_ACTIVE)),s=d.Ay.getState().app.activeLayers.postedBridges,l=o.j9.find((e=>e.slug===n.f2p.POSTED_BRIDGES)),c=d.Ay.getState().app.activeLayers.bridgeHeights,p=o.j9.find((e=>e.slug===n.f2p.BRIDGE_HEIGHTS));try{let o=e?.mapFeaturesQuery?.mapFeatures;o=o?.filter((e=>!e||null==e.signDisplayType||null==l&&null==p||!(!s||null==l||e.signDisplayType!==a.kg.Posted)||!(!c||null==p||e.signDisplayType!==a.kg.BridgeHeight)||!(!i||null==r||!r.signType?.includes(e.signDisplayType)))),o&&(clearTimeout(I),t({type:n.oj3,mapCollections:o})),t({type:n.j2Q,error:e?.mapFeaturesQuery?.error??null})}catch(e){console.error(e),t({type:n.j2Q,error:{type:n.i65.INTERNAL_SERVER_ERROR}})}},P=(0,s.A)((async(e,t)=>{clearTimeout(I),I=setTimeout((()=>{e({type:n.ckH})}),o.VV.loaderDelayMs);try{const i=t(),r=(0,g.LR)(i.app.activeLayers),a=(0,c.I3)(i),s=(0,m.A)(a,(0,u.V)()),{activeUri:o}=i.tray,d=o?[o]:void 0,h={north:(0,l.A)(s.north),south:(0,l.A)(s.south),east:(0,l.A)(s.east),west:(0,l.A)(s.west),zoom:Math.floor(a.zoom),layerSlugs:[],nonClusterableUris:d},y=r.map((e=>({query:S,variables:{input:{...h,layerSlugs:[e]},plowType:n.f2p.PLOW_CAMERA}}))),v=(await Promise.all(y.map((e=>(0,p.A)(e))))).reduce(((e,t)=>(null!=t?.mapFeaturesQuery?.mapFeatures&&e.mapFeaturesQuery.mapFeatures.push(...t.mapFeaturesQuery.mapFeatures),e)),{mapFeaturesQuery:{__typename:"MapFeaturesPayload",mapFeatures:[]}});e(O(v))}finally{clearTimeout(I),e({type:n.ckH})}}),100),N=(e,t)=>async(i,r)=>{clearTimeout(I),I=setTimeout((()=>{i({type:n.h_8})}),o.VV.loaderDelayMs);try{const{activeUri:a}=r().tray,s={input:{north:(0,l.A)(e.north),south:(0,l.A)(e.south),east:(0,l.A)(e.east),west:(0,l.A)(e.west),zoom:t,layerSlugs:(0,g.LR)(r().app.activeLayers),nonClusterableUris:a?[a]:void 0},plowType:n.f2p.PLOW_CAMERA},o=s.input.layerSlugs.map((e=>({input:{...s.input,layerSlugs:[e]},plowType:s.plowType}))),c=(await Promise.all(o.map((e=>(0,p.A)({query:S,variables:e}))))).reduce(((e,t)=>(null!=t.mapFeaturesQuery&&(null==e.mapFeaturesQuery?e.mapFeaturesQuery=t.mapFeaturesQuery:null!=t.mapFeaturesQuery.mapFeatures&&(null==e.mapFeaturesQuery.mapFeatures?e.mapFeaturesQuery.mapFeatures=t.mapFeaturesQuery.mapFeatures:e.mapFeaturesQuery.mapFeatures.push(...t.mapFeaturesQuery.mapFeatures))),e)),{});i(O(c))}catch(e){i({type:n.j2Q,error:{type:n.i65.INTERNAL_SERVER_ERROR}})}};b.GS.subscribe(n.Vzk.MAP,(()=>(e,t)=>{e({type:n.h_8}),P(e,t)})),b.Rt.subscribe(n.Vzk.MAP,(e=>e=>{}))},56921:(e,t,i)=>{"use strict";i.d(t,{AS:()=>m,Dp:()=>w,Ml:()=>f,qs:()=>S,to:()=>g});var r=i(52114),a=i(94857),s=i(22708),o=i(52850),n=i(22493),l=i(72357),c=i(80027),d=i(12172),p=i(26200),u=i(97966);const h=n.A`
	query Modal(
		$entitySlug: String!
		$entityId: ID!
		$viewId: ID!
		$showCameraLastUpdated: Boolean!
	) {
		modalQuery(entitySlug: $entitySlug, entityId: $entityId, viewId: $viewId) {
			current {
				...ViewFields
			}
			next {
				...ViewFields
			}
			prev {
				...ViewFields
			}
			error {
				type
			}
		}
	}
	fragment ViewFields on ViewInterface {
		uri
		category
		title
		... on CameraView {
			url
			sources {
				type
				src
				original
			}
		}
		... on PlowCameraView {
			url
		}
		... on RestAreaView {
			url
		}
		__typename
		... on SignComboView {
			imageUrl
			textJustification
			textLines
		}
		... on SignTextView {
			textJustification
			textLines
		}
		... on SignImageView {
			imageUrl
		}
		... on SignOverlayView {
			travelTimes
			imageUrl
			imageLayout
		}
		... on SignOverlayTPIMView {
			textLines
			imageUrl
		}
		parentCollection {
			__typename
			uri
			bbox
			icon
			location {
				routeDesignator
			}
			lastUpdated @include(if: $showCameraLastUpdated) {
				timestamp
				timezone
			}
			views {
				uri
			}
			... on Sign {
				gantrySigns {
					uri
					title
					bbox
					icon
					cityReference
					color
					signStatus
					signDisplayType
					views {
						uri
						category
						title
						icon
						__typename
						... on SignComboView {
							imageUrl
							textJustification
							textLines
						}
						... on SignTextView {
							textJustification
							textLines
						}
						... on SignImageView {
							imageUrl
						}
						... on SignOverlayView {
							travelTimes
							imageUrl
							imageLayout
						}
						... on SignOverlayTPIMView {
							textLines
							imageUrl
						}
					}
				}
				signStatus
			}
			... on Camera {
				agencyAttribution {
					agencyName
				}
			}
		}
	}
`,g=(e,t)=>({type:o.ob,modalView:e,currentUri:t}),m=()=>({type:o.ob,modalView:null}),y=()=>(e,t)=>{const{currentUri:i}=t().modal;if(!i)throw new Error("`modalQuery` called without `state.modal.currentUri`");const{mediaSlug:r,entityId:a,viewId:s}=(0,d.A)(i);return{query:h,variables:{entitySlug:r,entityId:a,viewId:s,showCameraLastUpdated:r!==o.xv_.CAMERAS||c.mc&&!c.mc.hideLastUpdateTime}}},v=e=>t=>{if(e.modalQuery)try{const i={type:o.vQg};if(e.modalQuery?.current){const t=(0,r.S8)(e.modalQuery.current,p.Ht);i.currentUri=t.result,i.entities=t.entities}if(e.modalQuery?.next){const t=(0,r.S8)(e.modalQuery.next,p.Ht);i.nextUri=t.result,i.entities=(0,a.A)(i.entities,t.entities)}if(e.modalQuery?.prev){const t=(0,r.S8)(e.modalQuery.prev,p.Ht);i.prevUri=t.result,i.entities=(0,a.A)(i.entities,t.entities)}t(i),t({type:o.CC4,error:e.modalQuery?.error})}catch(e){t({type:o.CC4,error:{type:o.i65.INTERNAL_SERVER_ERROR}}),console.error(e)}},b="MODAL_SUBSCRIBE_KEY",f=()=>{u.GS.subscribe(b,y),u.Rt.subscribe(b,v)},w=()=>{u.GS.unsubscribe(b),u.Rt.unsubscribe(b)},S=(e,t,i)=>async r=>{try{r({type:o.ilW,controller:new AbortController});const a=await(0,l.A)({query:h,variables:{entitySlug:e,entityId:t,viewId:i,showCameraLastUpdated:e!==o.xv_.CAMERAS||c.mc&&!c.mc.hideLastUpdateTime}});e===o.xv_.CAMERAS&&r((0,s.P)(`entityId=${t}&viewId=${i}`,`category=${a.modalQuery?.current?.category??""}&title=${a.modalQuery?.current?.title??""}`,o.l_R.MODAL_CAMERA)),r(v(a))}catch(e){r({type:o.CC4,error:{type:o.i65.INTERNAL_SERVER_ERROR}})}}},44508:(e,t,i)=>{"use strict";i.d(t,{X:()=>y,w:()=>v});var r=i(10388),a=i(80027),s=i(52850),o=i(23316),n=i(925),l=i(22708),c=i(66003),d=i(41183),p=i(72357);const u=i(22493).A`
	query {
		allPredefinedRoutesQuery {
			name
			sortOrder
			popular
			bbox
		}
		allPredefinedAreasQuery {
			name
			sortOrder
			popular
			bbox
		}
		allKnownQuantityLabels
	}
`;var h=i(86094),g=i(78707);const m="NO_RESULT",y=async(e,t=!1)=>{if(!e.trim())return null;const i=await fetch(`${a.DR.endpoints.nlp}?state=${a.DS.clientName||a.DS.stateName.toLowerCase()}&input=${encodeURI(e)}`),n=await i.json(),{maybeRouteSearch:m}=n;let{areasAndLocations:{allPredefinedAreas:y,allRoutes:v},app:b}=r.Ay.getState(),{activeLayers:f}=b,w=!1;if(0===[...y,...v].length){const e=await(async()=>{try{const e=new AbortController;return await(0,p.A)({query:u},"POST",e.signal)}catch(e){return{allPredefinedAreasQuery:[],allPredefinedRoutesQuery:[]}}})();y=e.allPredefinedAreasQuery,v=e.allPredefinedRoutesQuery,w=!0}const S=new Set([...n.matchedLayersSet]);let A="";S.size&&(A=[...S].join(","),f=Object.keys(f).reduce(((e,t)=>({...e,[t]:S.has(t)})),{}));const{layersLabel:E}=n,$=e=>{if(e?.name){const t=`?show=${Object.entries(f).filter((([e,t])=>t)).map((([e])=>e)).join(",")}`;if(v.includes(e)){const i=(0,d.A)(e.bbox,e.name);return r.Ay.dispatch((0,c.oo)(`${i}${t}&${s.csN.NLP}=true`)),!0}}return r.Ay.dispatch({type:s.mUz,activeLayers:f}),r.Ay.dispatch((0,h.h)(f)),setTimeout((()=>{r.Ay.dispatch((0,g.gX)())}),250),!1},{nlpPredictions:T}=n,{noResultRecommendations:R}=n,k={id:"layer",icon:"/images/sprites.svg#layers",plain:E,html:w?"<strong>View Map Layers</strong>":"<strong>Turn on Map Layers</strong>",layersCallback:()=>($(),!0),layersLabel:E,layersActual:A,predefinedStub:{__typename:void 0,bbox:[0,0,0,0],name:"",popular:!1,sortOrder:0}},{isLayerResult:M}=n;return r.Ay.dispatch((0,l.P)(`query="${e}"&resultCount=${T.length}`,"input",s.l_R.NLP)),[...T,...R].forEach((e=>{let t;e.layersActual=A,[...y,...v].forEach((i=>{e.id===i.name&&(t=i)})),t?(e.predefinedStub=t,e.layersCallback=()=>$(t)):(e.predefinedStub={__typename:void 0,bbox:[0,0,0,0],name:"",popular:!1,sortOrder:0},e.layersCallback=()=>!0)})),T?.forEach((e=>{e.icon===o.Al.ROADWAY?e.icon="/images/sprites.svg#roadway":e.icon===o.Al.AREA&&(e.icon="/images/sprites.svg#area-fill")})),R?.forEach((e=>{e.icon===o.Al.ROADWAY?e.icon="/images/sprites.svg#roadway":e.icon===o.Al.AREA&&(e.icon="/images/sprites.svg#area-fill")})),{speech:e,googlePredictionInput:n.googlePredictionInput,nlpPredictions:T,noResultRecommendations:R,layersCallback:$,layerOnlyResult:k,layersLabel:E,layersActual:A,maybeRouteSearch:m,routeResults:n.routeResults,isLayerResult:M,matchedLayersSet:S}},v=(e,t)=>t.sort(((t,i)=>{const r=t.id.length>20,s=i.id.length>20,o=r?t.plain.split(",")[0]:t.id,l=s?i.plain.split(",")[0]:i.id,c=(0,n.I)(o.toLowerCase(),e.toLowerCase()),d=(0,n.I)(l.toLowerCase(),e.toLowerCase()),p=()=>c<d?-1:c>d?1:t.layersLabel&&!i.layersLabel?-1:i.layersLabel&&!t.layersLabel?1:t.id.length<i.id.length?-1:t.id.length>i.id.length?1:0;if(c<4||d<4)return p();const u=t.id===m,h=i.id===m;if("layer"===t.id)return 1;if(u&&!h)return-1;if(!u&&h)return 1;if(r&&s){const e=t.plain.includes(` ${a.DS.stateName},`),r=i.plain.includes(` ${a.DS.stateName},`);if(e&&!r)return-1;if(!e&&r)return 1}if(a.DS.preferPopular){if(!r&&s)return-1;if(r&&!s)return 1}const g=t,y=i;if(null!=g?.predefinedStub?.sortOrder&&null!=y?.predefinedStub?.sortOrder){const e=g.predefinedStub.sortOrder-y.predefinedStub.sortOrder;if(0!==e)return e}return p()})).slice(0,7)},2096:(e,t,i)=>{"use strict";i.d(t,{AC:()=>y,K0:()=>g,gI:()=>p,gl:()=>u,uk:()=>m,zQ:()=>h});var r=i(52850),a=i(22493),s=i(80027),o=i(42768),n=i(93127),l=i(9748);function c(e=[]){window.localStorage.setItem(l.fz,JSON.stringify(e))}a.A`
	query Notifications {
		notificationsQuery {
			notifications {
				uri
				title
				description
				icon
				iconAlt
				borderColor
				lastUpdated {
					timestamp
					timezone
				}
				type
				images {
					title
					type
					url
				}
				audioURL
			}
			error {
				message
				type
			}
		}
	}
`;const d={west:-106.1949980276794,south:38.52286495593914,east:-103.6460319723206,north:41.00581504406086};function p(e,t){return!(!s.RQ.metroTrafficButton||!d)&&(0,o.A)((0,n.A)(e,t),d)}function u(){}const h=()=>(e,t)=>{const i=t().notifications.entities?.notifications??{},a=Object.values(i).reduce(((e,t)=>(t.isRegionalTriggered=!0,e[t.uri]=t,e)),{});e({type:r.tfy,entities:{notifications:a}})},g=()=>e=>{const t=function(){let e=[];const t=window.localStorage.getItem(l.fz);return t&&(e=JSON.parse(t),e=Array.isArray(e)?e:[]),e}();e({type:r.zVg,dismissed:t})},m=e=>(t,i)=>{const{dismissed:a}=i().notifications;a.includes(e)||a.push(e),t({type:r.zVg,dismissed:a}),c(a)},y=()=>(e,t)=>{const{notifications:i}=t(),a=[...i.dismissed];i.results.forEach((e=>{a.includes(e)||a.push(e)})),a.length>0&&(e({type:r.zVg,dismissed:a}),c(a))}},2266:(e,t,i)=>{"use strict";i.d(t,{cP:()=>p,y6:()=>d});var r=i(52850),a=i(22493),s=i(88014),o=i(57914),n=i(97966);const l=()=>(e,t)=>{e({type:r.fQb});const i=(0,s.DY)(t());return o="string"==typeof i?parseInt(i,10):0,{query:a.A`
		query OversizeLoadQuery($tripId: Int!) {
			oversizeLoadQuery(tripId: $tripId) {
				error {
					message
					type
				}
				oversizeLoad {
					bbox
					features {
						bbox
						geometry
						id
						properties
						title
						type
					}
					dataFields {
						style
						fieldName
						displayValue
						displayValueAccessibleLabel
						displayValueSecondary
						displayValueSecondaryHTML
						inAlertState
						isTopField
						link
						icon
						priority
						tooltip
						topFieldOverRideHTML
					}
					lastUpdated {
						timestamp
						timezone
					}
					title
					tooltip
					tripDescription
					tripId
					remainingTripGeometry {
						type
						coordinates
					}
					uri
					icon
				}
			}
		}
	`,variables:{tripId:o}};var o},c=e=>t=>{const i=e.oversizeLoadQuery;i&&t((0,o.gf)(s.UN.OVERSIZE_LOADS,i.oversizeLoad,i.error))},d=()=>{n.GS.subscribe(r.Vzk.TRAY,l),n.Rt.subscribe(r.Vzk.TRAY,c)},p=()=>{n.GS.has(r.Vzk.TRAY,l)&&n.GS.unsubscribe(r.Vzk.TRAY),n.Rt.has(r.Vzk.TRAY,c)&&n.Rt.unsubscribe(r.Vzk.TRAY)}},28912:(e,t,i)=>{"use strict";i.d(t,{JO:()=>m,pm:()=>g});var r=i(25447),a=i(52850),s=i(80027),o=i(30191),n=i(22493),l=i(88014),c=i(5776),d=i(57914),p=i(97966);const u=()=>(e,t)=>(e({type:a.fQb}),{query:n.A`
			query Plow(
				$plowId: ID!
				$layerSlugs: [String!]!
				$nearbyViewLimit: Int!
				$showCameraLastUpdated: Boolean!
				$isCamerasEnabled: Boolean!
				$showTotalPlows: Boolean!
				$showCommercialQuantities: Boolean!
			) {
				plowQuery(plowId: $plowId) {
					plow {
						uri
						bbox
						title
						tooltip
						icon
						color
						plowType
						activeMaterialPhrase
						totalPlows @include(if: $showTotalPlows)
						heading
						locationDescription
						lastUpdated {
							timestamp
							timezone
						}
						location {
							primaryLinearReference
							secondaryLinearReference
						}
						markers {
							title
							geometry
							uri
							properties
						}
						features {
							id
							geometry
							properties
						}
						...Views
						...NearbyResults
					}
					error {
						type
					}
				}
			}
			${c.A.viewsFeatureCollection}
			${c.A.nearbyResults}
		`,variables:{plowId:(0,l.DY)(t()),layerSlugs:(0,o.LR)(t().app.activeLayers),nearbyViewLimit:a.az4,showCameraLastUpdated:s.mc&&!s.mc.hideLastUpdateTime,isCamerasEnabled:!!s.mc,showTotalPlows:s.sQ?.totalActivePlowsEnabled,showCommercialQuantities:(0,r.hf)(t(),s.UB,s.JM)}}),h=e=>t=>{const i=e.plowQuery;i&&t((0,d.gf)(l.UN.PLOW,i.plow,i.error))},g=()=>{p.GS.subscribe(a.Vzk.TRAY,u),p.Rt.subscribe(a.Vzk.TRAY,h)},m=()=>{p.GS.has(a.Vzk.TRAY,u)&&p.GS.unsubscribe(a.Vzk.TRAY),p.Rt.has(a.Vzk.TRAY,h)&&p.Rt.unsubscribe(a.Vzk.TRAY)}},97966:(e,t,i)=>{"use strict";i.d(t,{GS:()=>a,Rt:()=>s,xg:()=>o,Ky:()=>n});const r=class{constructor(){this.observers={}}subscribe(e,t){this.observers[e]=t}unsubscribe(e){delete this.observers[e]}has(e,t){return this.observers[e]===t}async notify(e){return Promise.all(Object.values(this.observers).map((t=>t(e))))}},a=new r,s=new r,o=new r,n=new r},78707:(e,t,i)=>{"use strict";i.d(t,{$e:()=>g,Dl:()=>p,Gw:()=>m,gX:()=>u,nv:()=>h,qV:()=>c});var r=i(61531),a=i(52850),s=i(72357),o=i(97966),n=i(22493),l=i(56188);function c(e){return!!e&&"controller"in e}const d=n.A`
	query (
		$isYour511Enabled: Boolean!
		$isPredefinedAreasEnabled: Boolean!
		$isPredefinedRoadwaysEnabled: Boolean!
	) {
		mobileCarrierQuery @include(if: $isYour511Enabled) {
			id
			name
		}
		allPredefinedRoutesQuery @include(if: $isPredefinedRoadwaysEnabled) {
			name
			sortOrder
			popular
			bbox
		}
		allPredefinedAreasQuery @include(if: $isPredefinedAreasEnabled) {
			name
			sortOrder
			popular
			bbox
		}
	}
`;o.Ky.subscribe("predefined",(e=>t=>{try{e.mobileCarrierQuery&&t({type:a.g2z,mobileCarriers:e.mobileCarrierQuery}),e.allPredefinedRoutesQuery&&t({type:a.oGv,routes:e.allPredefinedRoutesQuery}),e.allPredefinedAreasQuery&&t({type:a.Fbp,predefinedAreas:e.allPredefinedAreasQuery})}catch(e){console.error(e)}})),o.xg.subscribe("predefined",(()=>()=>({query:d,variables:{isYour511Enabled:!0,isPredefinedAreasEnabled:!0,isPredefinedRoadwaysEnabled:!0}})));const p=e=>({type:a.Yw1,radarLastPolled:e}),u=(e=!1)=>async t=>{try{const i=new AbortController,r=(await o.GS.notify()).map((e=>t(e))),a=await(0,s.A)(r.filter((t=>e?!!t&&!t.query.startsWith("query SearchGeometry"):!!t)),"POST",i.signal);(await o.Rt.notify(a)).map((e=>t(e)))}catch(e){console.error(e),t({type:a.KhL,error:{type:a.i65.INTERNAL_SERVER_ERROR}})}finally{window.dispatchEvent((0,l.h)(a.Ve8))}},h=(0,r.A)((e=>e(u())),100,{leading:!1,trailing:!1}),g=()=>async e=>{try{const t=new AbortController;e({type:a.kkf,controller:t});const i=(await o.xg.notify()).map((t=>e(t))).filter((e=>!!e));if(!i.length)return;const r=await(0,s.A)(i,"POST",t.signal);(await o.Ky.notify(r)).map((t=>e(t)))}catch(t){console.error(t),e({type:a.KhL,error:{type:a.i65.INTERNAL_SERVER_ERROR}})}},m=()=>async e=>{try{const t=await(0,s.A)({query:d,variables:{isYour511Enabled:!0,isPredefinedAreasEnabled:!0,isPredefinedRoadwaysEnabled:!0}});t.mobileCarrierQuery&&e({type:a.g2z,mobileCarriers:t.mobileCarrierQuery})}catch(e){console.error(e)}}},22645:(e,t,i)=>{"use strict";i.d(t,{XT:()=>a,hw:()=>s});var r=i(80027),a=(e=>(e.LOGIN="login",e.SIGNUP="signup",e))(a||{});function s(e){return"enterprise"===r.mS.version?window.grecaptcha.enterprise.execute(r.mS.siteKey,{action:e}):window.grecaptcha.execute(r.mS.siteKey,{action:e})}},50060:(e,t,i)=>{"use strict";i.d(t,{ED:()=>m,WI:()=>g});var r=i(25447),a=i(52850),s=i(22493),o=i(88014),n=i(5776),l=i(30191),c=i(80027),d=i(57914),p=i(97966);const u=()=>(e,t)=>(e({type:a.fQb}),{query:s.A`
			query RestArea(
				$restAreaId: ID!
				$layerSlugs: [String!]!
				$nearbyViewLimit: Int!
				$isCamerasEnabled: Boolean!
				$showCameraLastUpdated: Boolean!
				$showCommercialQuantities: Boolean!
			) {
				restAreaQuery(restAreaId: $restAreaId) {
					restArea {
						uri
						title
						lastUpdated {
							timestamp
							timezone
						}
						description
						status
						theme
						tooltip
						bbox
						icon
						color
						isPrivate
						isStaticArea
						statusMessage
						location {
							primaryLinearReference
						}
						...RestAreaDescription
						restAreaAmenities {
							icon
							label
						}
						additionalRestAreaInfo {
							fieldName
							displayValue
							inAlertState
							isTopField
						}
						...Views
						...NearbyResults
						upstreamDownstreamOnRoute {
							upstream {
								...UpstreamDownStream
							}
							downstream {
								...UpstreamDownStream
							}
						}
						features {
							id
							geometry
							properties
						}
					}
					error {
						type
					}
				}
			}
			fragment UpstreamDownStream on RestArea {
				uri
				title
				icon
				color
				bbox
				directionOfTravel
				location {
					primaryLinearReference
				}
				...RestAreaDescription
			}
			${n.A.restAreaStatusSummery}
			${n.A.viewsFeatureCollection}
			${n.A.nearbyResults}
		`,variables:{restAreaId:(0,o.DY)(t()),layerSlugs:(0,l.LR)(t().app.activeLayers),nearbyViewLimit:a.az4,isCamerasEnabled:!!c.mc,showCameraLastUpdated:c.mc&&!c.mc.hideLastUpdateTime,showCommercialQuantities:(0,r.hf)(t(),c.UB,c.JM)}}),h=e=>t=>{const i=e.restAreaQuery;i&&t((0,d.gf)(o.UN.REST_AREAS,i.restArea,i.error))},g=()=>{p.GS.subscribe(a.Vzk.TRAY,u),p.Rt.subscribe(a.Vzk.TRAY,h)},m=()=>{p.GS.has(a.Vzk.TRAY,u)&&p.GS.unsubscribe(a.Vzk.TRAY),p.Rt.has(a.Vzk.TRAY,h)&&p.Rt.unsubscribe(a.Vzk.TRAY)}},21379:(e,t,i)=>{"use strict";i.d(t,{A:()=>f,z:()=>b});var r=i(44963),a=i(80027),s=i(52850),o=i(66003),n=i(56921),l=i(95504),c=i(34132),d=i(99863),p=i(91780),u=i(78707),h=i(22708);const g=[{path:"clip/:key/:analyticsName/:analyticsLabel/:analyticsCategory",action:({dispatch:e},{key:t,analyticsName:i,analyticsLabel:r,analyticsCategory:a})=>(e((0,h.P)(i,r,a)),navigator.clipboard.writeText(t),window.location.hash="",!1)},{path:s.Gqw.FEEDBACK,action:async({dispatch:e})=>(await Promise.all([i.e(1804),i.e(356),i.e(4002)]).then(i.bind(i,4964)),e((0,n.to)(s.Gqw.FEEDBACK)),!0)},{path:s.Gqw.VERIFY,action:async({dispatch:e})=>(await Promise.all([i.e(1804),i.e(356),i.e(4002)]).then(i.bind(i,95751)),e((0,n.to)(s.Gqw.VERIFY)),!0)},{path:s.Gqw.NEGATIVE_EVENT_FEEDBACK,action:async({dispatch:e})=>(await Promise.all([i.e(1804),i.e(356),i.e(3443)]).then(i.bind(i,50945)),e((0,n.to)(s.Gqw.NEGATIVE_EVENT_FEEDBACK)),!0)},{path:`${s.xv_.CAMERAS}/:parentId/:id`,async action({dispatch:e},{parentId:t,id:r}){const a=`${s.xv_.CAMERAS}/${t}/${r}`;return(0,n.Ml)(),await Promise.all([i.e(1804),i.e(4390),i.e(2439),i.e(1311),i.e(1509)]).then(i.bind(i,52196)),e((0,n.to)(s.Gqw.CAMERA,a)),e((0,n.qs)(s.xv_.CAMERAS,t,r)),!0}},{path:`${s.xv_.REST_AREAS}/:parentId/:id`,async action({dispatch:e},{parentId:t,id:r}){const a=`${s.xv_.REST_AREAS}/${t}/${r}`;return(0,n.Ml)(),await Promise.all([i.e(1804),i.e(4390),i.e(2439),i.e(1311),i.e(1509)]).then(i.bind(i,52196)),e((0,n.to)(s.Gqw.REST_AREA,a)),e((0,n.qs)(s.xv_.REST_AREAS,t,r)),!0}},{path:`${s.xv_.ELECTRONIC_SIGNS}/:parentId/:id`,async action({dispatch:e},{parentId:t,id:r}){const a=`${s.xv_.ELECTRONIC_SIGNS}/${t}/${r}`;return(0,n.Ml)(),await Promise.all([i.e(1804),i.e(4390),i.e(2439),i.e(1311),i.e(1509)]).then(i.bind(i,52196)),e((0,n.to)(s.Gqw.SIGN,a)),e((0,n.qs)(s.xv_.ELECTRONIC_SIGNS,t,r)),!0}},{path:`${s.Gqw.PLOW}/:parentId/:id`,async action({dispatch:e},{parentId:t,id:r}){const a=`${s.Gqw.PLOW}/${t}/${r}`;return await Promise.all([i.e(1804),i.e(4390),i.e(2439),i.e(1311),i.e(1509)]).then(i.bind(i,52196)),e((0,n.to)(s.Gqw.PLOW,a)),!0}},{path:`${s.Gqw.TOUR}/:type?/:step?`,action({dispatch:e},{type:t,step:i}){const r=t||s.S9j.WELCOME,n=r===s.S9j.WELCOME?Object.values(a.BQ.welcome.steps)?.[0]:Object.values(a.BQ.favorite.steps)?.[0];if(!n)return!1;if(!i)return{redirect:`${s.Gqw.TOUR}/${r}/${n.slug}`};const l=r===s.S9j.WELCOME?Object.entries(a.BQ.welcome.steps).find((([,e])=>e&&e.slug===i)):Object.entries(a.BQ.favorite.steps).find((([,e])=>e&&e.slug===i));return e((0,o.RB)(r,l?l[0]:void 0)),!0}},{path:s.Gqw.LOGIN,action:async({dispatch:e,getState:t})=>a.Vu?.isComingSoon?{redirect:s.Gqw.COMING_SOON}:(await Promise.all([Promise.all([i.e(1804),i.e(3356)]).then(i.bind(i,45809)),Promise.all([i.e(1804),i.e(2350),i.e(206)]).then(i.bind(i,70511))]),(0,l.M3)(t())?{redirect:`${s.Gqw.ACCOUNT}/${s.Bjw.SETTINGS}`}:(e((0,n.to)(s.Gqw.LOGIN)),!0))},{path:`${s.Gqw.FAVORITE}/:type/:action/:id?`,async action({dispatch:e,getState:t},{type:r,id:a,action:o}){if(!(0,l.M3)(t()))return{redirect:"login"};if(!(0,d.gt)(o)||!(0,d.il)(r))throw new Error("invalid URL params");return await Promise.all([i.e(1804),i.e(2350),i.e(4978)]).then(i.bind(i,32122)),e((0,p.NU)(o,r,a?parseInt(a,10):void 0)),e((0,n.to)(s.Gqw.FAVORITE)),!0}},{path:`${s.Gqw.ALERTD}/:key(.*)?`,async action({dispatch:e},{key:t}){await Promise.all([i.e(1804),i.e(1281)]).then(i.bind(i,90678));const r=function(e){const t=e.split("unsubscribe?key=");if(t.length<2)throw new Error("Bad unsubscribe key. Requested params not supplied");return t[1]}(t);return e({type:s.Qrc,alertDUnsubscribeKey:r}),e((0,n.to)(s.Gqw.ALERTD)),!0}},{path:s.Gqw.COMING_SOON,action:async({dispatch:e})=>(await Promise.all([i.e(1804),i.e(7838)]).then(i.bind(i,22215)),e((0,n.to)(s.Gqw.COMING_SOON)),!0)},{path:s.Gqw.GDPR,action:()=>!0},{path:`${s.Gqw.FLOODGATE}/:id`,action:async({dispatch:e})=>(new URLSearchParams(window.location.search).get("kiosk")||(await Promise.all([i.e(1804),i.e(932)]).then(i.bind(i,8524)),e((0,n.to)(s.Gqw.FLOODGATE))),!0)},a.DS.enabled?{path:s.Gqw.NLP,async action({dispatch:e}){const t=await navigator.permissions.query({name:"microphone"});if("granted"===t?.state){const t=await navigator.mediaDevices.enumerateDevices(),r=t?.filter((e=>"audioinput"===e.kind));if(r?.length)return await Promise.all([i.e(1804),i.e(3316),i.e(2316)]).then(i.bind(i,83749)),e((0,n.to)(s.Gqw.NLP)),!0}return{redirect:""}}}:{},{path:s.Gqw.ACCOUNT,children:[{path:`/${s.Bjw.CREATE}`,action:async({dispatch:e,getState:t})=>a.Vu?.isComingSoon?{redirect:s.Gqw.COMING_SOON}:(0,l.M3)(t())?{redirect:`${s.Gqw.ACCOUNT}/${s.Bjw.SETTINGS}`}:(await Promise.all([i.e(1804),i.e(2350),i.e(206)]).then(i.bind(i,70511)),e((0,c.i5)(s.Bjw.CREATE)),!0)},{path:`/${s.Bjw.FORGOT}`,action:async({dispatch:e,getState:t})=>(0,l.M3)(t())?{redirect:""}:(await Promise.all([i.e(1804),i.e(2587)]).then(i.bind(i,61636)),e((0,c.i5)(s.Bjw.FORGOT)),!0)},{path:`/${s.Bjw.SETTINGS}`,action:async({dispatch:e,getState:t})=>a.Vu?.isComingSoon?{redirect:s.Gqw.COMING_SOON}:(0,l.M3)(t())?(await Promise.all([Promise.all([i.e(1804),i.e(3023)]).then(i.bind(i,70396)),Promise.all([i.e(1804),i.e(2350),i.e(4361)]).then(i.bind(i,1737)),Promise.all([i.e(1804),i.e(9834)]).then(i.bind(i,47651))]),e((0,c.i5)(s.Bjw.SETTINGS)),!0):{redirect:"login"}},{path:`/${s.Bjw.ALERTS}`,action:async({dispatch:e,getState:t})=>(await Promise.all([Promise.all([i.e(1804),i.e(2350),i.e(4361)]).then(i.bind(i,1737)),Promise.all([i.e(1804),i.e(3023)]).then(i.bind(i,70396)),Promise.all([i.e(1804),i.e(9834)]).then(i.bind(i,47651))]),(0,l.M3)(t())?(e((0,c.i5)(s.Bjw.ALERTS)),!0):{redirect:""})},a.Vu?.includeDialInSettings?{path:`/${s.Bjw.DIAL_IN}`,action:async({dispatch:e,getState:t})=>(await Promise.all([Promise.all([i.e(1804),i.e(9834)]).then(i.bind(i,47651)),Promise.all([i.e(1804),i.e(3023)]).then(i.bind(i,70396)),Promise.all([i.e(1804),i.e(2350),i.e(4361)]).then(i.bind(i,1737))]),(0,l.M3)(t())?(e((0,c.i5)(s.Bjw.DIAL_IN)),!0):{redirect:""})}:{},{path:`/${s.Bjw.ACTIVATE}/:accountId/:token`,async action({dispatch:e},{accountId:t,token:r}){await Promise.all([i.e(1804),i.e(2350),i.e(6973)]).then(i.bind(i,23202));try{const i=parseInt(t,10);e((0,c.L2)(i,r)),e((0,c.i5)(s.Bjw.ACTIVATE))}catch(e){}return!0}},{path:`/${s.Bjw.PASSWORD_RESET}/:email/:token`,async action({dispatch:e},{email:t,token:r}){await Promise.all([i.e(1804),i.e(8457)]).then(i.bind(i,67078));try{e({type:s.Iaq,email:t,token:r}),e((0,c.i5)(s.Bjw.PASSWORD_RESET))}catch(e){}return!0}},{path:`/${s.Bjw.EMAIL_UPDATE}/:accountId/:code`,async action({dispatch:e},{accountId:t,code:r}){await Promise.all([i.e(1804),i.e(7196)]).then(i.bind(i,24897));try{const i=parseInt(t,10);e((0,c.A$)(i,r)),e((0,c.i5)(s.Bjw.EMAIL_UPDATE))}catch(e){}return!0}}]}],m=new r.A(g,{errorHandler:function(e,{path:t}){return console.error(`error routing hash: "${t}" - `,e),null}});function y(e=window.document.activeElement){return e?.shadowRoot?.activeElement?y(e.shadowRoot.activeElement):e}let v=null;const b=e=>async(t,i)=>{if(t((0,u.Gw)()),(0,n.Dp)(),e){v=y(),v.focus();const r=`${window.location.pathname}${window.location.search}#${e}`;window.history.replaceState({},"",r);const a={pathname:e,dispatch:t,getState:i},s=await m.resolve(a);s&&"object"==typeof s&&"redirect"in s&&await t(b(s.redirect))}else window.history.replaceState({},"",`${window.location.pathname}${window.location.search}`),t((0,n.AS)()),setTimeout((()=>{v&&(v?.focus(),v=null)}),300);return!1},f=b},31395:(e,t,i)=>{"use strict";i.d(t,{lC:()=>J,Zg:()=>ie,x6:()=>Y,YL:()=>K,UW:()=>de});var r=i(65160),a=i(21291),s=i(19743),o=i(44963),n=i(20802),l=i(45157),c=i(2266),d=i(80027),p=i(52850),u=i(78013),h=i(11650),g=i(88014),m=i(95050),y=i(25447),v=i(41769),b=i(52353),f=i(75421),w=i(82224),S=i(97780),A=i(83184),E=i(29349),$=i(52114),T=i(94857),R=i(26200),k=i(30191),M=i(22493),C=i(5776),_=i(97966);const x=()=>(e,t)=>{e({type:p._T2});const{urlRoadwayName:i}=t().search;return{query:M.A`
				query SearchRoadwayGeometry(
					$routeId: String!
					$layerSlugs: [String!]!
					$viewLimit: Int!
					$isCamerasEnabled: Boolean!
					$showCommercialQuantities: Boolean!
				) {
					searchRoadwayGeometryQuery(routeId: $routeId, layerSlugs: $layerSlugs) {
						geometry
						cameraViews {
							...CameraViewContents
						}
						results {
							...SearchResults
						}
						error {
							message
							type
						}
					}
				}
				${C.A.cameraViewContents}
				${C.A.searchResults}
			`,variables:{routeId:i,layerSlugs:(0,k.LR)(t().app.activeLayers),viewLimit:p.az4,isCamerasEnabled:!!d.mc,showCommercialQuantities:(0,y.hf)(t(),d.UB,d.JM)}}},L=e=>(t,i)=>{if(e.searchRoadwayGeometryQuery)try{const r=(0,$.S8)(e.searchRoadwayGeometryQuery.results,[R.cI]),a=(0,$.S8)(e.searchRoadwayGeometryQuery.cameraViews,[R.Ht]),{geometry:s}=e.searchRoadwayGeometryQuery,{urlRoadwayName:o}=i().search;t({type:p.JBx,visibleUri:`${g.UN.SEARCH_ROADWAY}/${o}`,visibleView:g.UN.SEARCH_ROADWAY}),t({type:p.MA8,results:r.result,cameraViews:a.result,error:e.searchRoadwayGeometryQuery.error,entities:(0,T.A)(a.entities,r.entities)});const n=s&&(0,u.A)(s);"MultiLineString"!==n?.type&&"LineString"!==n?.type||t({type:p.UwD,geometry:n})}catch(e){console.error(e),t({type:p.dPK,error:{type:p.i65.INTERNAL_SERVER_ERROR}})}};var I=i(32867),O=i(28912),P=i(93278),N=i(50060),D=i(62239),V=i(2096),U=i(57914),B=i(18211),F=i(46339),z=i(42978),q=i(93127),H=i(76885),W=i(97474),Q=i(34542),G=i(42768),j=i(42582),Z=i(98755);const Y=.15,K=.5,J=.29;function X({west:e,south:t,east:i,north:r}){return{west:parseFloat(e),south:parseFloat(t),east:parseFloat(i),north:parseFloat(r)}}function ee(e){if(!e)return;const{lat:t,lng:i,zoom:r}=e,a=parseFloat(t?.replace(",","")),s=parseFloat(i?.replace("/@","")),o=parseFloat(r?.replace(",",""));return Number.isNaN(a)||Number.isNaN(s)||Number.isNaN(o)?void 0:{center:{lng:s,lat:a},zoom:o}}function te(e){return e?parseInt(e.replace("favorite=",""),10):void 0}const ie=/@[\d.-]+,[\d.-]+,[\d.-]+$/;function re(e,t){const i=`@${(0,B.A)(t.center.lng)},${(0,B.A)(t.center.lat)},${Math.floor(t.zoom)}`;return ie.test(e)?e.replace(ie,i):`${e.replace(/\/$/,"")}/${i}`}function ae(e){return decodeURIComponent(e).replace(ie,"").replace(/\/$/,"")}function se(e,t){return t.map.mapPosition??(0,z.A)(d.VV.initialBounds,(0,Q.A)((0,y.tV)(t),e),{zoomToFit:!0})}function oe(e,t,i,r,a,s){let o=ee(r);return s?o:a?(o&&(0,G.A)(a,(0,q.A)(o))||(o=(0,F.A)(a,t,i,e,{maxZoom:d.VV.defaultMarkerZoom})),o):o}const ne=":lng(/?@[\\d.-]+)?:lat(,[\\d.-]+)?:zoom(,\\d+)?",le=[{path:`/${p.r1N}/:slug`,action:(e,t)=>(window.open(`${p.r1N}/${t.slug}`,"_self"),!1)},{path:`/${p.xv_.NOTIFICATIONS}/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){_.GS.unsubscribe(p.Vzk.TRAY),_.Rt.unsubscribe(p.Vzk.TRAY);const s=ee(a)??se(r.trayPosition,t()),o=`${p.xv_.NOTIFICATIONS}/${a.id}`,n=g.UN.NOTIFICATION;return await Promise.all([i.e(1804),i.e(2439),i.e(3661)]).then(i.bind(i,93845)),e((0,V.uk)(o)),e((0,U.SL)(o,n,s,r)),e({type:p.JBx,visibleUri:o,visibleView:n}),!0}},{path:`/${p.xv_.NOTIFICATIONS}${ne}`,async action({dispatch:e,getState:t,options:r},a){_.GS.unsubscribe(p.Vzk.TRAY),_.Rt.unsubscribe(p.Vzk.TRAY);const s=ee(a)??se(r.trayPosition,t()),o=p.xv_.NOTIFICATIONS,n=g.UN.NOTIFICATIONS;return await Promise.all([i.e(1804),i.e(8570),i.e(4892)]).then(i.bind(i,48988)),e((0,V.AC)()),e((0,U.SL)(o,n,s,r)),e({type:p.JBx,visibleUri:o,visibleView:n}),!0}},{path:`/${p.xv_.CMS_MESSAGES}/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){_.GS.unsubscribe(p.Vzk.TRAY),_.Rt.unsubscribe(p.Vzk.TRAY);const s=ee(a)??se(r.trayPosition,t()),o=`${p.xv_.CMS_MESSAGES}/${a.id}`,n=g.UN.CMS_MESSAGE;return await Promise.all([i.e(1804),i.e(2439),i.e(5509)]).then(i.bind(i,39243)),e((0,V.uk)(o)),e((0,U.SL)(o,n,s,r)),e({type:p.JBx,visibleUri:o,visibleView:n}),!0}},{path:`/${p.xv_.EVENTS}/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){const s=`${p.xv_.EVENTS}/${a.id}`,o=(0,g.Ax)(t(),s),n=oe(r.trayPosition,(0,y.tV)(t()),(0,h.I3)(t()),a,o);return await Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(544),i.e(2439),i.e(8920)]).then(i.bind(i,23217)),(0,S.V)(),e((0,U.SL)(s,g.UN.EVENTS,n,r)),!0}},{path:`/map/${p.xv_.EVENTS}/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){const s=`${p.xv_.EVENTS}/${a.id}`,o=(0,g.Ax)(t(),s),n=oe(r.trayPosition,(0,y.tV)(t()),(0,h.I3)(t()),a,o,!0);return await Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(544),i.e(2439),i.e(8920)]).then(i.bind(i,23217)),(0,S.V)(),e((0,U.SL)(s,g.UN.EVENTS,n,r)),!0}},{path:`/${d.er.RAMP_METERS}/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){const s=`${d.er.RAMP_METERS}/${a.id}`,o=(0,g.Ax)(t(),s),n=oe(r.trayPosition,(0,y.tV)(t()),(0,h.I3)(t()),a,o);return await Promise.all([i.e(1804),i.e(2439),i.e(6424)]).then(i.bind(i,86626)),e((0,U.SL)(s,g.UN.RAMPS,n,r)),!0}},{path:`/${p.xv_.CAMERAS}/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){const s=`${p.xv_.CAMERAS}/${a.id}`,o=(0,g.Ax)(t(),s),n=oe(r.trayPosition,(0,y.tV)(t()),(0,h.I3)(t()),a,o);return(0,b.QB)(),await Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(544),i.e(1371),i.e(2333)]).then(i.bind(i,65741)),e((0,U.SL)(s,g.UN.CAMERAS,n,r)),!0}},{path:`/search/:type(around|predefined)(=?):around([^/]+)?/@:west,:south,:east,:north([^/]+)/:favorite(favorite=[^@/]+)?${ne}`,async action({dispatch:e,getState:t,options:r},a){let s=ee(a);const o={trayPercent:K,...r},n=X(a),l=(0,Q.A)((0,y.tV)(t()),o.trayPercent),c={...l,east:0};(0,A.ce)(),await Promise.all([Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(544),i.e(5390)]).then(i.bind(i,54076)),i.e(8732).then(i.bind(i,12240)),Promise.all([i.e(1804),i.e(6771),i.e(3316),i.e(3627),i.e(2339)]).then(i.bind(i,37975)),Promise.all([i.e(1804),i.e(6771),i.e(3316),i.e(3627),i.e(1230)]).then(i.bind(i,57304))]),e((0,U.GJ)(!1)),s||a.around||(s=se(o.trayPercent,t())),s||(s=(0,z.A)(n,l,{zoomToFit:!0}));const d=`${g.UN.SEARCH_PLACE}/${(0,H.A)(s)}`;return e((0,U.SL)(d,g.UN.SEARCH_PLACE,s,r)),e({type:p.XU3,searchType:"predefined"===a.type?p.nXf.SEARCH_PREDEFINED_AREA:p.nXf.SEARCH_PLACE,urlAround:a.around?a.around.replace(/[+]/g," "):"",favoriteId:te(a.favorite),submittedBoundsExpanded:(0,q.A)(s,c),submittedBounds:n}),!0}},{path:`/search/drawnarea/:encodedgeometry([^@/]+)/:favorite(favorite=[^@/]+)?${ne}`,async action({dispatch:e,getState:t,options:r},a){const o=te(a.favorite),n=a.encodedgeometry,l={type:"Polygon",coordinates:[(0,j.S)(n)]},c=(0,u.A)(l);(0,E.kl)(),await Promise.all([Promise.all([i.e(1804),i.e(6771),i.e(3316),i.e(7229)]).then(i.bind(i,19989)),Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(544),i.e(5390)]).then(i.bind(i,54076)),i.e(8732).then(i.bind(i,12240))]),e({type:p.Lo9,customDrawnSearchArea:c,favoriteId:o});const h={trayPercent:K,...r};e((0,U.GJ)(!1));const m=(0,Q.A)((0,y.tV)(t()),h.trayPercent);let v=ee(a);const b=(0,Z.b)((0,s.A)(c));v||(v=(0,z.A)(b,m,{zoomToFit:!0,maxZoom:d.VV.defaultMarkerZoom}));const f=`${g.UN.SEARCH_DRAWN_AREA}/${n}`;return e((0,U.SL)(f,g.UN.SEARCH_DRAWN_AREA,v,r)),!0}},{path:`/${p.xv_.CLUSTERS}/:id`,action({dispatch:e,getState:t,options:i},r){const a=i?.trayPosition??K,s=`${p.xv_.CLUSTERS}/${r.id}`,o=t(),n=(0,g.Ax)(o,s),l=o.map.mapCollections.find((e=>e?.uri===s));let c=p.Klp;if("Cluster"===l?.__typename){const e=l;null!=e.maxZoom&&"unclusterThreshold"===d.VV.mapFeatureClusterTargetZoomLevel&&(c=e.maxZoom)}if(!n)throw new Error("Cluster not designed to be directly linkable");const u=(0,z.A)(n,(0,Q.A)((0,y.tV)(o),a),{zoomToFit:!0,maxZoom:c}),h=re(window.location.pathname,u);return window.history.pushState({},"",`${h}${window.location.search}${window.location.hash}`),e({type:p.pUN,mapPosition:u}),e({type:p.VI2}),{skipHistoryUpdate:!0}}},{path:`/search/from=:from([^/]+)/to=:to([^/]+)/mode=:mode([^@/]+)/:waypoints(waypoints=[^@/]+)?/:favorite(favorite=[^@/]+)?${ne}`,async action({dispatch:e,getState:t,options:r},a){const{mode:s,from:o,to:n,waypoints:l,favorite:c}=a,d={trayPercent:K,...r};let u=s&&s.toUpperCase();google.maps.TravelMode[u]||(u=google.maps.TravelMode.DRIVING);const v=(0,j.S)(o),b=(0,j.S)(n),f=function(e){if(!e)return[];const t=e.replace("waypoints=","");return JSON.parse(`[${t}]`).map((e=>({lng:e[0],lat:e[1]})))}(l),w=te(c),S=(0,m.z1)(t()),A=(0,W.A)(v,b,f,u),E=`${g.UN.SEARCH_ROUTE}/${A}`,$=oe(d.trayPercent,(0,y.tV)(t()),(0,h.I3)(t()),a,S),T=Date.now()+5e3;await(async()=>{Date.now()>T||t().map.showingMapLoader&&await new Promise((e=>{window.setTimeout(e,100)}))})();const{subscribeSearchRouteTrayToMapPolling:R}=await Promise.all([i.e(1804),i.e(6771)]).then(i.bind(i,98451));return R(),await Promise.all([Promise.all([i.e(1804),i.e(6771),i.e(3316),i.e(3627),i.e(453)]).then(i.bind(i,80256)),Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(544),i.e(1008)]).then(i.bind(i,20562))]),e((0,U.SL)(E,g.UN.SEARCH_ROUTE,$,r)),e({type:p.v9Q,urlFrom:v,urlTo:b,urlWaypts:f,mode:u,favoriteId:w}),!0}},{path:`/search/roadway=:roadway([^/]+)/@:west,:south,:east,:north([^/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){const{roadway:s}=a,o={trayPercent:K,...r},n=(0,j.S)(s||""),l=X(a),c=(0,Q.A)((0,y.tV)(t()),o.trayPercent),u=`${g.UN.SEARCH_ROADWAY}/${n}`,h=(0,z.A)(l,c,{zoomToFit:!0,maxZoom:d.VV.defaultMarkerZoom});return e((0,U.GJ)(!1)),_.GS.subscribe(p.Vzk.TRAY,x),_.Rt.subscribe(p.Vzk.TRAY,L),await Promise.all([Promise.all([i.e(1804),i.e(6771),i.e(3316),i.e(3627),i.e(8993)]).then(i.bind(i,93389)),Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(544),i.e(3232)]).then(i.bind(i,27902))]),e((0,U.SL)(u,g.UN.SEARCH_ROADWAY,h,r)),r.nlp?e({type:p.DZ5,roadway:{roadwayName:n,searchType:p.nXf.SEARCH_PLACE}}):e({type:p.DZ5,roadway:{roadwayName:n,searchType:p.nXf.SEARCH_ROADWAY}}),!0}},{path:"/dashboard:any(.*)",action:(e,t)=>({redirect:`/${t.any}`})},{path:`/:clear(clear)?${ne}`,async action({dispatch:e,getState:t,options:r},a){(0,w.vl)(),await Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(544),i.e(4364)]).then(i.bind(i,60278));let s=ee(a);const o={trayPercent:.2,...r},n=g.UN.DASHBOARD,{clearSearch:l}=await Promise.all([i.e(1804),i.e(6771)]).then(i.bind(i,98451));return l(),a.clear?s=s??se(o.trayPercent,t()):s||(s=(0,z.A)(d.VV.initialBounds,(0,Q.A)((0,y.tV)(t()),o.trayPercent),{zoomToFit:!0})),t().search.type===p.nXf.DRAW_CUSTOM_AREA&&e((0,D.C)(p.nXf.SEARCH_PLACE)),e((0,U.SL)(n,g.UN.DASHBOARD,s,r)),{pathname:"/"}}}];d.Ck?.active&&le.push({path:`/${p.xv_.FUELING_STATIONS}/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){const s=`${p.xv_.FUELING_STATIONS}/${a.id}`,o=(0,g.Ax)(t(),s),n=oe(r.trayPosition,(0,y.tV)(t()),(0,h.I3)(t()),a,o),c=`fuelingStation_${a.id}`,d=window.sessionStorage.getItem(c);if(null!=d){const t=JSON.parse(d);(0,l.Jv)(),e((0,U.gf)(g.UN.FUELING_STATIONS,t))}else(0,l.Vp)();return await Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(2439),i.e(1371),i.e(2146)]).then(i.bind(i,65649)),e((0,U.SL)(s,g.UN.FUELING_STATIONS,n,r)),!0}}),!0===d.Uv?.enabled&&le.push({path:`/journey-times${ne}`,async action({dispatch:e,getState:t,options:r},a){_.GS.unsubscribe(p.Vzk.TRAY),_.Rt.unsubscribe(p.Vzk.TRAY);const s=ee(a)??se(r.trayPosition,t()),o="journey-times",n=g.UN.JOURNEY_TIMES;return await Promise.all([i.e(1804),i.e(2161)]).then(i.bind(i,74375)),e((0,V.uk)(o)),e((0,U.SL)(o,n,s,r)),e({type:p.JBx,visibleUri:o,visibleView:n}),!0}}),d.L7?.active&&le.push({path:`/${p.f2p.OVERSIZE_LOADS}/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){const s=`${p.f2p.OVERSIZE_LOADS}/${a.id}`,o=(0,g.Ax)(t(),s),n=oe(r.trayPosition,(0,y.tV)(t()),(0,h.I3)(t()),a,o);return(0,c.y6)(),await Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(2439),i.e(1371),i.e(2071)]).then(i.bind(i,3086)),e((0,U.SL)(s,g.UN.OVERSIZE_LOADS,n,r)),!0}}),le.push({path:`/${p.xv_.WEATHER_STATIONS}/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){const s=`${p.xv_.WEATHER_STATIONS}/${a.id}`,o=(0,g.Ax)(t(),s),n=oe(r.trayPosition,(0,y.tV)(t()),(0,h.I3)(t()),a,o);return(0,v.wH)(),await Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(544),i.e(11)]).then(i.bind(i,54054)),e((0,U.SL)(s,g.UN.WEATHER_STATIONS,n,r)),!0}}),le.push({path:`/${p.xv_.PLOW_CAMERA}/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){const s=`${p.xv_.PLOW_CAMERA}/${a.id}`,o=(0,g.Ax)(t(),s),n=oe(r.trayPosition,(0,y.tV)(t()),(0,h.I3)(t()),a,o);return(0,O.pm)(),await Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(544),i.e(2439),i.e(9414)]).then(i.bind(i,12052)),e((0,U.SL)(s,g.UN.PLOW,n,r)),!0}}),le.push({path:`/${p.xv_.PLOW_LOCATION}/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){const s=`${p.xv_.PLOW_LOCATION}/${a.id}`,o=(0,g.Ax)(t(),s),n=oe(r.trayPosition,(0,y.tV)(t()),(0,h.I3)(t()),a,o);return(0,O.pm)(),await Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(544),i.e(2439),i.e(9414)]).then(i.bind(i,12052)),e((0,U.SL)(s,g.UN.PLOW,n,r)),!0}}),le.push({path:`/${p.xv_.REST_AREAS}/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){const s=`${p.xv_.REST_AREAS}/${a.id}`,o=(0,g.Ax)(t(),s),n=oe(r.trayPosition,(0,y.tV)(t()),(0,h.I3)(t()),a,o);return(0,N.WI)(),await Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(544),i.e(2439),i.e(1371),i.e(7216)]).then(i.bind(i,23408)),e((0,U.SL)(s,g.UN.REST_AREAS,n,r)),!0}}),le.push({path:`/${p.xv_.ELECTRONIC_SIGNS}/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){const s=`${p.xv_.ELECTRONIC_SIGNS}/${a.id}`,o=(0,g.Ax)(t(),s),n=oe(r.trayPosition,(0,y.tV)(t()),(0,h.I3)(t()),a,o);return await Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(544),i.e(5795)]).then(i.bind(i,93583)),(0,I.EK)(),e((0,U.SL)(s,g.UN.SIGNS,n,r)),!0}}),le.push({path:`/${p.xv_.WILDFIRES}/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){const{id:s}=a,o=`${p.xv_.WILDFIRES}/${s}`,n=(0,g.Ax)(t(),o),l=oe(r.trayPosition,(0,y.tV)(t()),(0,h.I3)(t()),a,n);return await Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(9608)]).then(i.bind(i,83346)),(0,P.NL)(),e((0,U.SL)(o,g.UN.WILDFIRE,l,r)),!0}}),le.push({path:`/${p.xv_.REGIONAL_ROAD_CONDITIONS}/:id([^@/]+)${ne}`,action:()=>!1}),le.push({path:`/${p.Mbj}/:slug`,action:(e,t)=>(window.open(`${p.Mbj}/${t.slug}`,"_self"),!1)}),le.push({path:`/:slug/:id([^@/]+)${ne}`,async action({dispatch:e,getState:t,options:r},a){const s=`${a.slug}/${a.id}`,o=(0,g.Ax)(t(),s),n=oe(r.trayPosition,(0,y.tV)(t()),(0,h.I3)(t()),a,o);return(0,f.X)(),await Promise.all([i.e(1804),i.e(6771),i.e(8570),i.e(2053),i.e(2894),i.e(544),i.e(2439),i.e(1581)]).then(i.bind(i,54529)),e((0,U.SL)(s,g.UN.CUSTOM_LAYER,n,r)),!0}});const ce=new o.A(le,{errorHandler:async function(e,{dispatch:t,getState:a,options:s}){const o=se(s.trayPosition,a()),n=g.UN.NOT_FOUND;return console.warn("Tray routing error",e),await Promise.all([i.e(1804),i.e(5256)]).then(i.bind(i,15628)),(0,r.D)({title:"Not Found"}),t((0,U.SL)(n,n,o,s)),t({type:p.JBx,visibleUri:n,visibleView:n}),!0}}),de=(e,t)=>async(i,r)=>{let s=!1,o=e;const l={trayPosition:J,...t},c={pathname:e,dispatch:i,getState:r,options:l},d=await ce.resolve(c);if(!1===d)return s;if((0,a.A)(d)&&"redirect"in d)return i(de(d.redirect,d.options));(0,a.A)(d)&&"pathname"in d&&(o=d.pathname);const u=(0,h.I3)(r()),g=re(o,u);return window.location.pathname!==g&&(s=!0),(0,a.A)(d)&&"skipHistoryUpdate"in d||(i({type:p.pUN,mapPosition:u}),i((0,U.kr)(u,r().tray.trayPercent??void 0)),ae(window.location.pathname)===ae(o)?window.history.replaceState({},"",`${g}${window.location.search}${window.location.hash}`):window.history.pushState({},"",`${g}${window.location.search}${window.location.hash}`),window.location.hash||window.dispatchEvent(new CustomEvent("trayFocus",{detail:{message:"Focus Tray",time:new Date}})),"map"!==window.page&&window.setTimeout((()=>window.location.reload()),100),(0,n.A)()),s}},41769:(e,t,i)=>{"use strict";i.d(t,{gp:()=>m,wH:()=>g});var r=i(25447),a=i(52850),s=i(30191),o=i(80027),n=i(22493),l=i(88014),c=i(5776),d=i(57914),p=i(97966);const u=()=>(e,t)=>(e({type:a.fQb}),{query:n.A`
			query Rwis(
				$rwisId: ID!
				$layerSlugs: [String!]!
				$nearbyViewLimit: Int!
				$isCamerasEnabled: Boolean!
				$showCameraLastUpdated: Boolean!
				$showCommercialQuantities: Boolean!
			) {
				weatherStationQuery(rwisId: $rwisId, layerSlugs: $layerSlugs) {
					weatherStation {
						uri
						title
						lastUpdated {
							timestamp
							timezone
						}
						status
						bbox
						icon
						titleIcon
						description
						location {
							primaryLinearReference
							secondaryLinearReference
						}
						weatherStationFields
						drivingConditions {
							title
							description
							lastUpdated {
								timestamp
								timezone
							}
							icon
							color
						}
						features {
							id
							geometry
							properties
						}
						...Views
						...NearbyResults
					}
					error {
						type
					}
				}
			}
			${c.A.viewsFeatureCollection}
			${c.A.nearbyResults}
		`,variables:{rwisId:(0,l.DY)(t()),layerSlugs:(0,s.LR)(t().app.activeLayers),nearbyViewLimit:a.az4,isCamerasEnabled:!!o.mc,showCameraLastUpdated:o.mc&&!o.mc.hideLastUpdateTime,showCommercialQuantities:(0,r.hf)(t(),o.UB,o.JM)}}),h=e=>t=>{const i=e.weatherStationQuery;i&&t((0,d.gf)(l.UN.WEATHER_STATIONS,i.weatherStation,i.error))},g=()=>{p.GS.subscribe(a.Vzk.TRAY,u),p.Rt.subscribe(a.Vzk.TRAY,h)},m=()=>{p.GS.has(a.Vzk.TRAY,u)&&p.GS.unsubscribe(a.Vzk.TRAY),p.Rt.has(a.Vzk.TRAY,h)&&p.Rt.unsubscribe(a.Vzk.TRAY)}},29349:(e,t,i)=>{"use strict";i.d(t,{Az:()=>A,HW:()=>R,dV:()=>w,kl:()=>T,rJ:()=>S});var r=i(52114),a=i(94857),s=i(25447),o=i(22708),n=i(66003),l=i(52850),c=i(26200),d=i(80027),p=i(62239),u=i(88014),h=i(5776),g=i(97966),m=i(26001),y=i(2379),v=i(30191),b=i(22493),f=i(56188);function w(e){const t=e?.map((e=>[e.lng,e.lat]))||[];return t.length&&t.push(t[0]),{type:"Polygon",coordinates:[t]}}const S=e=>async t=>{t({type:l.Lo9,customDrawnSearchArea:e});const i=(0,y.wE)(e);t((0,o.P)("custom-drawing",i,l.l_R.SEARCH)),await t((0,n.oo)(i)),window.dispatchEvent((0,f.h)(l.W3b)),d.Vu&&!d.Vu.isComingSoon&&t((0,n.f5)(l.QeQ.FAVORITE_ADD))},A=()=>async e=>{e({type:l.u0i}),await e((0,n.oo)("/clear")),e((0,p.C)(l.nXf.DRAW_CUSTOM_AREA))},E=()=>(e,t)=>{const{customDrawnSearchArea:i}=t().search;if(!i)throw new Error("Searching an area with no geometry");const r=(0,m.A)(i);return e({type:l._T2}),{query:b.A`
				query SearchGeometry(
					$geometry: Geometry!
					$layerSlugs: [String!]!
					$viewLimit: Int!
					$isCamerasEnabled: Boolean!
					$showCommercialQuantities: Boolean!
				) {
					searchGeometryQuery(geometry: $geometry, layerSlugs: $layerSlugs) {
						cameraViews {
							...CameraViewContents
						}
						results {
							...SearchResults
						}
						error {
							message
							type
						}
					}
				}
				${h.A.cameraViewContents}
				${h.A.searchResults}
			`,variables:{geometry:r,layerSlugs:(0,v.LR)(t().app.activeLayers),viewLimit:l.az4,isCamerasEnabled:!!d.mc,showCommercialQuantities:(0,s.hf)(t(),d.UB,d.JM)}}},$=e=>(t,i)=>{if(e.searchGeometryQuery)try{const s=(0,r.S8)(e.searchGeometryQuery.results,[c.cI]),o=(0,r.S8)(e.searchGeometryQuery.cameraViews,[c.Ht]),{customDrawnSearchArea:n}=i().search;if(!n)throw new Error("Searching an area with no geometry");const d=(0,m.A)(n).coordinates[0];t({type:l.JBx,visibleUri:`${u.UN.SEARCH_DRAWN_AREA}/${d}`,visibleView:u.UN.SEARCH_DRAWN_AREA}),t({type:l.MA8,results:s.result,cameraViews:o.result,error:e.searchGeometryQuery.error,entities:(0,a.A)(o.entities,s.entities)})}catch(e){console.error(e),t({type:l.dPK,error:{type:l.i65.INTERNAL_SERVER_ERROR}})}},T=()=>{g.GS.subscribe(l.Vzk.TRAY,E),g.Rt.subscribe(l.Vzk.TRAY,$)},R=()=>{g.GS.has(l.Vzk.TRAY,E)&&g.GS.unsubscribe(l.Vzk.TRAY),g.Rt.has(l.Vzk.TRAY,$)&&g.Rt.unsubscribe(l.Vzk.TRAY)}},83184:(e,t,i)=>{"use strict";i.d(t,{ce:()=>E,mG:()=>b,w$:()=>w,yW:()=>$});var r=i(52114),a=i(94857),s=i(25447),o=i(66003),n=i(52850),l=i(26200),c=i(30191),d=i(80027),p=i(22493),u=i(88014),h=i(5776),g=i(76885),m=i(93127),y=i(2379),v=i(97966);const b=()=>(e,t)=>{const{mapPosition:i}=t().map;if(!i)throw new Error("`mapPosition` undefined.");const r=(0,m.A)(i);e((0,o.oo)((0,y.Ay)(r)))},f=new google.maps.Geocoder,w=e=>async t=>{await f.geocode({address:e},((e,i)=>{if(i===google.maps.GeocoderStatus.OK&&e){const i=e[0].formatted_address,r=e[0].geometry.location.toJSON(),a=e[0].geometry.viewport.toJSON();t({type:n.V6J,place:{text:i,location:r,viewport:a,isLoading:!1}})}else t({type:n.V6J,place:null}),window.alert(`Could not geocode address due to: ${i}`)}))},S=()=>(e,t)=>{const{submittedBoundsExpanded:i}=t().search;if(!i)throw new Error("SearchBounds query called with no bounds given in app state.");return e({type:n._T2}),{query:p.A`
			query SearchBounds(
				$north: Float!
				$south: Float!
				$east: Float!
				$west: Float!
				$layerSlugs: [String!]!
				$viewLimit: Int!
				$isCamerasEnabled: Boolean!
				$showCommercialQuantities: Boolean!
			) {
				searchBoundsQuery(n: $north, s: $south, e: $east, w: $west, layerSlugs: $layerSlugs) {
					cameraViews {
						...CameraViewContents
					}
					results {
						...SearchResults
					}
					error {
						message
						type
					}
				}
			}
			${h.A.cameraViewContents}
			${h.A.searchResults}
		`,variables:{...i,layerSlugs:(0,c.LR)(t().app.activeLayers),viewLimit:n.az4,isCamerasEnabled:!!d.mc,showCommercialQuantities:(0,s.hf)(t(),d.UB,d.JM)}}},A=e=>(t,i)=>{if(e.searchBoundsQuery)try{const s=(0,r.S8)(e.searchBoundsQuery.results,[l.cI]),o=(0,r.S8)(e.searchBoundsQuery.cameraViews,[l.Ht]),c=(0,g.A)(i().search.submittedPosition);t({type:n.JBx,visibleUri:`${u.UN.SEARCH_PLACE}/${c}`,visibleView:u.UN.SEARCH_PLACE}),t({type:n.MA8,results:s.result,cameraViews:o.result,error:e.searchBoundsQuery.error,entities:(0,a.A)(o.entities,s.entities)})}catch(e){console.error(e),t({type:n.dPK,error:{type:n.i65.INTERNAL_SERVER_ERROR}})}},E=()=>{v.GS.subscribe(n.Vzk.TRAY,S),v.Rt.subscribe(n.Vzk.TRAY,A)},$=()=>{v.GS.has(n.Vzk.TRAY,S)&&v.GS.unsubscribe(n.Vzk.TRAY),v.Rt.has(n.Vzk.TRAY,A)&&v.Rt.unsubscribe(n.Vzk.TRAY)}},98451:(e,t,i)=>{"use strict";i.d(t,{q:()=>U,oK:()=>V,H:()=>ce,clearSearch:()=>q,n$:()=>he,Kg:()=>oe,l4:()=>ne,Jw:()=>te,Zr:()=>ue,MG:()=>ae,HQ:()=>se,AY:()=>de,sV:()=>le,subscribeSearchRouteTrayToMapPolling:()=>G,c6:()=>j,Kh:()=>pe});var r=i(52114),a=i(61531),s=i(94857),o=i(67896),n=i.n(o),l=i(17026),c=i(33655),d=i(7007),p=i(79233),u=i(78417),h=i(67077),g=i(29785),m=i(52850),y=i(26200),v=i(26001),b=i(18211),f=i(10388),w=i(30191),S=i(80027),A=i(22493),E=i(88014),$=i(5776),T=i(97474),R=i(62239),k=i(56188),M=i(31395),C=i(95050),_=i(46339),x=i(87190),L=i(25447),I=i(42791),O=i(97966),P=i(72357),N=i(66003),D=i(78707);const V="crc:search:originInput:focus",U="crc:search:destInput:focus",B="route-search-geometry",F="route-search-geometry-history";let z="";const q=()=>{z=""},H=(0,a.A)((async(e,t)=>{let i=t().search.directionsGeometry;if(!i)return void console.warn("SearchRoute query called with no geometry given in app state.");if("LineString"===i.type&&(i={type:"MultiLineString",coordinates:[i.coordinates]}),"MultiLineString"===i.type&&JSON.stringify(i.coordinates)?.length>2e5){const e=(0,c.C)({type:"MultiLineString",coordinates:i.coordinates},{tolerance:25e-5/i.coordinates.length});i.coordinates=e.coordinates}if(JSON.stringify({geometry:i,layers:(0,w.LR)(t().app.activeLayers)})===z)return;z=JSON.stringify({geometry:i,layers:(0,w.LR)(t().app.activeLayers)}),setTimeout((()=>{z=""}),1500),setTimeout((async()=>{const{search:e}=t();if(null==e.directionsGeometry)return;let i="";i=null!=e.originPlace?.placeId&&null!=e.destPlace?.placeId?e.originPlace.placeId+e.destPlace.placeId:JSON.stringify(e.directionsGeometry);const r=await async function(e){const t=(new TextEncoder).encode(e),i=await window.crypto.subtle.digest("SHA-1",t);return Array.from(new Uint8Array(i)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(i),a={hash:r,geometry:e.directionsGeometry},s=JSON.stringify(a),o=sessionStorage.getItem(B),n=sessionStorage.getItem(F);if(sessionStorage.setItem(B,s),null==o)sessionStorage.removeItem(F);else if(null==n)sessionStorage.setItem(B,s),sessionStorage.setItem(F,`[${o}]`);else{const e=JSON.parse(n);if(e.some((e=>e.hash===r)))return;const t=[...e,a];t.length>50&&t.shift();const i=JSON.stringify(t);sessionStorage.setItem(F,i)}}),0);const a=e=>({query:A.A`
				query SearchGeometry(
					$geometry: Geometry!
					$layerSlugs: [String!]!
					$viewLimit: Int!
					$isCamerasEnabled: Boolean!
					$showCommercialQuantities: Boolean!
				) {
					searchGeometryQuery(geometry: $geometry, layerSlugs: $layerSlugs) {
						cameraViews {
							...CameraViewContents
						}
						results {
							...SearchResults
						}
						error {
							message
							type
						}
					}
				}
				${$.A.cameraViewContents}
				${$.A.searchResults}
			`,variables:{geometry:(0,v.A)(e),layerSlugs:(0,w.LR)(t().app.activeLayers),viewLimit:m.az4,isCamerasEnabled:!!S.mc,showCommercialQuantities:(0,L.hf)(t(),S.UB,S.JM)}});let o;if("MultiLineString"===i.type){const e=i.coordinates.map((e=>({type:"LineString",coordinates:e}))).map(a),t=await Promise.all(e.map((e=>(0,P.A)(e,"POST")))),r=new Set,s=new Set;o=t.reduce(((e,t)=>{const i=e.searchGeometryQuery;return t?.searchGeometryQuery?.cameraViews.length&&t.searchGeometryQuery.cameraViews.forEach((e=>{if(null!=e){const t=e.url??e.uri;r.has(t)||(i.cameraViews.push(e),r.add(t))}})),null!=t?.searchGeometryQuery?.error?.message&&""!==t.searchGeometryQuery.error.message.trim()&&(null==i.error?i.error=t.searchGeometryQuery.error:i.error.message+=`; ${t.searchGeometryQuery.error.message.trim()}`),t?.searchGeometryQuery?.results.length&&t.searchGeometryQuery.results.forEach((e=>{if(null!=e){const t=e.uri;s.has(t)||(i.results.push(e),s.add(t))}})),e}),{searchGeometryQuery:{__typename:"SearchResult",cameraViews:[],error:null,results:[]}})}else{const e=a(i);o=await(0,P.A)(e,"POST")}if(!o.searchGeometryQuery)return;const n=t().search.directionsGeometry,l=o.searchGeometryQuery.results,u=[];l.forEach((e=>{const t=e?.features?.find((e=>"Point"===e?.geometry?.type));if(t){if(n&&"Point"===t.geometry.type){let i;if("LineString"===n.type)i={type:"Feature",geometry:{type:"MultiLineString",coordinates:[n.coordinates]},properties:{}};else{if("MultiLineString"!==n.type)return;i={type:"Feature",geometry:{type:"MultiLineString",coordinates:n.coordinates},properties:{}}}const r=(0,d.zx)(t.geometry.coordinates),a=(0,p.W)(i,r),s=S.hC.routeSearchEventBufferKM?S.hC.routeSearchEventBufferKM:.05;e&&a.properties.dist&&a.properties.dist<s&&u.push(e)}}else e&&u.push(e)}));try{const i=(0,r.S8)(u,[y.cI]),a=(0,r.S8)(o.searchGeometryQuery.cameraViews,[y.Ht]),{urlFrom:n,urlTo:l,urlWaypts:c,mode:d}=t().search,p=(0,T.A)(n,l,c,d);if(t().tray.activeUri!==t().tray.visibleUri||t().tray.isLoading){const i=(0,C.z1)(t());if(i){const r=(0,_.A)(i,(0,L.tV)(t()),t().map.mapPosition,M.YL,{maxZoom:S.VV.defaultMarkerZoom});e((0,x.b1)(r))}}e({type:m.JBx,visibleUri:`${E.UN.SEARCH_ROUTE}/${p}`,visibleView:E.UN.SEARCH_ROUTE}),e({type:m.MA8,results:i.result,cameraViews:a.result,error:o.searchGeometryQuery.error,entities:(0,s.A)(a.entities,i.entities)})}catch(t){console.error(t),e({type:m.dPK,error:{type:m.i65.INTERNAL_SERVER_ERROR}})}}),100),W=()=>(e,t)=>{e({type:m._T2}),H(e,t)},Q=e=>e=>{},G=()=>{O.GS.subscribe(m.Vzk.TRAY,W),O.Rt.subscribe(m.Vzk.TRAY,Q)},j=()=>{O.GS.has(m.Vzk.TRAY,W)&&O.GS.unsubscribe(m.Vzk.TRAY),O.Rt.has(m.Vzk.TRAY,Q)&&O.Rt.unsubscribe(m.Vzk.TRAY)},Z=e=>{const t=e.routes[0];return e.routes.forEach(((e,i)=>{0!==i&&t.legs.push(...e.legs)})),{type:"MultiLineString",coordinates:e.routes[0].legs.map((e=>e.steps.map((e=>e.path.map((e=>[e.lng(),e.lat()])))))).reduce(((e,t)=>e.concat(Array.isArray(t)?[...t]:t)),[])}},Y=new google.maps.Geocoder,K=async e=>{let t=null;return await Y.geocode({address:e},((e,i)=>{i===google.maps.GeocoderStatus.OK&&e&&(t=e[0].geometry.location.toJSON())})),t},J=new google.maps.DirectionsService;let X=[],ee=!1;const te=(e,t,i,r,a={updateResults:!0})=>async(s,o)=>{if("string"==typeof e&&"string"==typeof t&&(X.push(`${e.toString()}${t.toString()}`),setTimeout((()=>{X=X.filter((i=>i!==`${e.toString()}${t.toString()}`))}),6e4)),X.length>S.DR.routeSearchRPM)return s({type:m.j2Q,error:{type:"Error",message:"You have reached your maximum number of searches. Please try again soon."}}),null;const l={updateResults:!0,forcePoll:!1,...a};let c=[...r];const g={first:[],last:[]};let y=e;"string"==typeof e&&(y=await K(e));let v=t;if("string"==typeof t&&(v=await K(t)),ee)return null;ee=!0,setTimeout((()=>{ee=!1}),1e3);const b=[],w=[];let A,E=[],$=[],T=0;const R=async(e,t)=>{let a=e;const l=e.location;null!=l&&(a={lat:"function"==typeof l.lat?l.lat():l.lat,lng:"function"==typeof l.lng?l.lng():l.lng});let k=t;const M=t.location;null!=M&&(k={lat:"function"==typeof M.lat?M.lat():M.lat,lng:"function"==typeof M.lng?M.lng():M.lng});const C=await(async(e,t)=>{if(!w.includes(t)&&y&&v&&S.DR.endpoints.osrm&&i===google.maps.TravelMode.DRIVING){w.push(t);try{let i=[];const r=new AbortController;setTimeout((()=>r.abort()),5e3);const a=c.map((e=>`${e.lng.toFixed(5)},${e.lat.toFixed(5)}`)),s=a.length?`${a.join(";").toString()};`:"",o=await fetch(`${S.DR.endpoints.osrm}/route/v1/driving/${e.lng.toFixed(5)},${e.lat.toFixed(5)};${s}${t.lng.toFixed(5)},${t.lat.toFixed(5)}?overview=full&steps=true`,{signal:r.signal}),l=await o.json();if(l?.routes?.length){const r=n().decode(l.routes?.[0]?.geometry);!0===S.VV.showOSRMRoute&&b.push([...r.map((e=>[e[1],e[0]]))]);let a=0;const s=async()=>{a<=5&&0===f.Ay.getState().map.mapCollections.length&&(await new Promise((e=>{setTimeout(e,1e3)})),a+=1,await s())};let o;await s();const y=[];f.Ay.getState().map.mapCollections?.forEach((e=>{e?.features?.[0]?.properties?.clustered?.length?e?.features?.[0]?.properties?.clustered?.forEach((e=>{e.uri.includes("event")&&(e.features[0]&&(e.features[0].collectionType=m.Tgm.Event),y.push(e))})):e&&y.push(e)})),y.forEach((e=>{!e||"Event"!==e.features?.[0]?.collectionType||"Point"!==e.features?.[0]?.geometry.type||e.features?.[0]?.properties?.icon?.url?.toLowerCase().includes("future")||e.features?.[0]?.properties?.tooltip?.toLowerCase()?.startsWith("starts")||r.forEach(((t,i)=>{if(i+2>r.length||o)return;const a=r[i],s=r[i+1],n={lat:e.features?.[0]?.geometry.coordinates[1],lng:e.features?.[0]?.geometry.coordinates[0]};if(n&&"number"==typeof n.lat&&"number"==typeof n.lng){const t=(0,d.wi)([[a[1],a[0]],[s[1],s[0]]]),r=(0,d.zx)([n.lng,n.lat]),l=(0,p.W)(t,r);l.properties.dist&&l.properties.dist<.008&&(o={feat:e,leg:i})}}))}));let v=[];if(void 0!==o&&o?.feat&&o.feat?.features.length>1){let e=!1;const t=o.feat.features?.filter((t=>{if("LineString"===t?.geometry.type&&!1===t.properties.visible&&t.properties.icons?.length){let i=1/0,a=1/0,s=0,o=0,n=0,l=0,c=!1;return r.forEach(((e,c)=>{if(c+2>r.length)return;const d=r[c],p=r[c+1],g=(t.geometry.coordinates?.[0])[1],m=(t.geometry.coordinates?.[0])[0],y=(t.geometry.coordinates?.[t.geometry.coordinates.length-1])[1],v=(t.geometry.coordinates?.[t.geometry.coordinates.length-1])[0],b={type:"Feature",geometry:{type:"LineString",coordinates:[d.reverse(),p.reverse()]},properties:{}},f=(0,u.B)(b),w=f/50;let S=0;const A=[];for(;S<=f;)S+=w,A.push((0,h.Q)(b,S));A.forEach(((e,t)=>{const r=Math.sqrt((m-e.geometry.coordinates[0])**2+(g-e.geometry.coordinates[1])**2),d=Math.sqrt((v-e.geometry.coordinates[0])**2+(y-e.geometry.coordinates[1])**2);r<i&&(i=r,s=c,o=t),d<a&&(a=d,n=c,l=t)}))})),2===t?.properties?.icons?.length?((s>=n||s===n&&o>l)&&(e=!0),c=!0):(s<=n||s===n&&o<l)&&(c=!0),c}return!1}));if(t.length&&t[0]){const r=e?t?.[0]?.geometry.coordinates.reverse():t?.[0]?.geometry.coordinates;v=r,r&&r.length>1&&(i=[r[0],r[r.length-1]])}}if(i?.length)return c.forEach((r=>{const a=(0,d.wi)([[e.lng,e.lat],[i?.[0]?.[0],i?.[0]?.[1]]]),s=(0,d.wi)([[i?.[1]?.[0],i?.[1]?.[1]],[t.lng,t.lat]]),o=(0,d.zx)([r.lng,r.lat]),n=(0,p.W)(a,o),l=(0,p.W)(s,o);n.properties.dist&&l.properties.dist&&n.properties.dist<=l.properties.dist?(g.first.push(r),c=c.filter((e=>e!==r))):(g.last.push(r),c=c.filter((e=>e!==r)))})),{detourStart:{lat:i?.[0]?.[1],lng:i?.[0]?.[0]},detourEnd:{lat:i?.[1]?.[1],lng:i?.[1]?.[0]},detourGeo:v}}}catch(e){}}return{detourStart:null,detourEnd:null,detourGeo:null}})(a,k);let _=[];0===g.first.length&&0===g.last.length?_=c.map((e=>({location:new google.maps.LatLng(e),stopover:!1}))):0===T?_=g.first.map((e=>({location:new google.maps.LatLng(e),stopover:!1}))):C.detourStart||(_=g.last.map((e=>({location:new google.maps.LatLng(e),stopover:!1}))));const x={origin:e?.location??e,destination:C?.detourStart??t?.location??t,waypoints:_||[],travelMode:i,unitSystem:google.maps.UnitSystem.IMPERIAL};T++;const L=new Date;(o().search.withTravelTimes||r.length>10)&&(x.drivingOptions={departureTime:L});const I=L.getTime();s({type:m.lOD,directionsRequestTime:I});try{const e={...await J.route(x,((e,t)=>{(t!==google.maps.DirectionsStatus.OK||!e||e.routes.length<1)&&s({type:m.YHj,status:t})}))};if(!e)return null;A||(A=e),E=[...E,...e.routes],e.geocoded_waypoints&&($=[...$,...e.geocoded_waypoints]),C?.detourStart&&C?.detourEnd&&C?.detourGeo&&(b.push(C.detourGeo),await R(C.detourEnd,v))}catch{return null}return null};return await R(y,v),setTimeout((()=>{f.Ay.dispatch((0,D.gX)())}),500),A?(A.routes=[...E],A.geocoded_waypoints=[...$],A.waypoints=[...c],A.crcOptions=l,A.detours=b,s({type:m.Rqj,directionsResponse:{...A,detours:b,routes:E,geocoded_waypoints:$,time:Date.now()}}),A):null},ie=async e=>{const{results:t}=await Y.geocode({location:e});if(t?.[0])return{text:t[0].formatted_address,location:t[0].geometry.location.toJSON(),viewport:t[0].geometry.viewport.toJSON(),isLoading:!1,placeId:t[0].place_id};console.error("Could not reverse geocode location")};async function re(e){if(null==S.VV.googleKey)throw new Error("Google API key not set");const t={points:`${e.lat},${e.lng}`,key:S.VV.googleKey},i=`https://roads.googleapis.com/v1/nearestRoads?${Object.entries(t).map((([e,t])=>`${e}=${encodeURIComponent(t)}`)).join("&")}`,r=await fetch(i);if(r.ok){const e=await r.json();if(!e?.snappedPoints?.[0])return;const t=await l.A.getMap(),i=new google.maps.places.PlacesService(t),a={placeId:e.snappedPoints[0].placeId},s=await new Promise((e=>{i.getDetails(a,((t,i)=>{e(i===google.maps.places.PlacesServiceStatus.OK&&null!=t?t:void 0)}))}));return null==s?void console.error("Could not determine nearest road details"):{text:s.formatted_address,location:{lat:e.snappedPoints[0].location.latitude,lng:e.snappedPoints[0].location.longitude},viewport:s.geometry?.viewport?.toJSON(),isLoading:!1,placeId:e.snappedPoints[0].placeId}}}const ae=(e,t=!1)=>async(i,r)=>{const{destPlace:a,destChosen:s,directionsWaypts:o,mode:n}=r().search;let l;if(i({type:m.T96,location:e,isDragging:!1}),S.hC.roadSnappingEnabled){const[r,c]=await Promise.all([ie(e),re(e)]);if(null==r&&null!=c)l=c;else if(null!=r&&null==c)l=r;else if(null!=r&&null!=c){const t=[e.lng,e.lat],i=[c.location.lng,c.location.lat];l=(0,g.I)(t,i,{units:"meters"})<(S.hC.roadSnappingBufferMeters??5)?c:r}if(a&&s&&!t){const t=await i(te(l||e,a,n,o));if(t&&null==l){const e=t.routes[0].legs[0];l={text:e.start_address,viewport:null,location:e.start_location.toJSON(),isLoading:!1}}}return i({type:m.izv,place:l}),l}if(a&&s&&!t){const t=await i(te(e,a.location,n,o));if(t){const e=t.routes[0].legs[0];l={text:e.start_address,viewport:null,location:e.start_location.toJSON(),isLoading:!1}}}return l||(l=await ie(e)),i({type:m.izv,place:l}),l},se=e=>async(t,i)=>{const{destPlace:r,destChosen:a,directionsWaypts:s,mode:o}=i().search;t({type:m.Za9}),r&&a&&await t(te(e.location,r.location,o,s))},oe=(e,t=!1)=>async(i,r)=>{const{originPlace:a,originChosen:s,directionsWaypts:o,mode:n}=r().search;let l;if(i({type:m.jGZ,location:e,isDragging:!1}),S.hC.roadSnappingEnabled){const[r,c]=await Promise.all([ie(e),re(e)]);if(null==r&&null!=c)l=c;else if(null!=r&&null==c)l=r;else if(null!=r&&null!=c){const t=[e.lng,e.lat],i=[c.location.lng,c.location.lat];l=(0,g.I)(t,i,{units:"meters"})<(S.hC.roadSnappingBufferMeters??5)?c:r}if(a&&s&&!t){const t=await i(te(a.location,e,n,o));if(t&&null==l){const e=t.routes[t.routes.length-1].legs[t.routes[t.routes.length-1].legs.length-1];l={text:e.start_address,viewport:null,location:e.end_location.toJSON(),isLoading:!1}}}return i({type:m.izv,place:l}),l}if(a&&s&&!t){const t=await i(te(a.location,e,n,o));if(t){const e=t.routes[t.routes.length-1].legs[t.routes[t.routes.length-1].legs.length-1];l={text:e.end_address,viewport:null,location:e.end_location.toJSON(),isLoading:!1}}}return l||(l=await ie(e)),i({type:m.SEh,place:l}),l},ne=e=>async(t,i)=>{const{originPlace:r,originChosen:a,directionsWaypts:s,mode:o}=i().search;t({type:m.RV5}),r&&a&&await t(te(r.location,e.location,o,s))},le=e=>async(t,i)=>{t({type:m.e72,mode:e});const{search:r}=i();r.type===m.nXf.SEARCH_ROUTE&&""!==r.urlFrom&&""!==r.urlTo&&await t((0,N.oo)((0,I.X)(r.urlFrom,r.urlTo,e,r.urlWaypts)))},ce=e=>(t,i)=>{const{originPlace:r,destPlace:a,mode:s,directionsWaypts:o}=i().search;if(!r||!a)throw new Error("Invalid search state");const n=[...o];return n.push(e),t({type:m.Nzv,directionsWaypts:[...new Set(n)]}),t(te(r.location,a.location,s,n))},de=e=>(t,i)=>{const{originPlace:r,destPlace:a,mode:s,directionsWaypts:o}=i().search,n=o.filter((t=>t.lng!==e.lng||t.lat!==e.lat));if(!r||!a)throw new Error("Invalid search state");return t({type:m.Nzv,directionsWaypts:n}),t(te(r.location,a.location,s,n))},pe=e=>async(t,i)=>{try{const{activeView:r}=i().tray,{mode:a,favoriteId:s}=i().search,o=[];e.routes.forEach((e=>o.push(...e.legs)));const n=e.routes[0].legs[0],l=e.routes[e.routes.length-1].legs[e.routes[e.routes.length-1].legs.length-1],c=o.reduce(((e,t)=>e.concat(t.via_waypoints.map((e=>({lng:(0,b.A)(e.lng()),lat:(0,b.A)(e.lat())}))))),[]),d={text:n.start_address,viewport:null,location:n.start_location.toJSON(),isLoading:!1},p={text:l.end_address,viewport:null,location:l.end_location.toJSON(),isLoading:!1};t({type:m.Smv,directionsResponse:e,directionsGeometry:Z(e),directionsWaypts:c,originPlace:d,destPlace:p}),r===E.UN.SEARCH_ROUTE&&await t((0,N.oo)((0,I.X)(d.text,p.text,a,c,s)))}catch(e){console.warn(e)}},ue=e=>async(t,i)=>{t((0,R.C)(m.nXf.SEARCH_ROUTE));const r=await t(ae(e));if(window.dispatchEvent((0,k.h)(V)),!r)return;const{destPlace:a,mode:s,directionsWaypts:o,favoriteId:n}=i().search,{activeView:l}=i().tray;a&&l!==E.UN.SEARCH_ROUTE&&await t((0,N.oo)((0,I.X)(r.text,a.text,s,o,n)))},he=e=>async(t,i)=>{t((0,R.C)(m.nXf.SEARCH_ROUTE));const r=await t(oe(e));if(!r)return;window.dispatchEvent((0,k.h)(U));const{originPlace:a,mode:s,directionsWaypts:o,favoriteId:n}=i().search,{activeView:l}=i().tray;a&&l!==E.UN.SEARCH_ROUTE&&await t((0,N.oo)((0,I.X)(a.text,r.text,s,o,n)))}},32867:(e,t,i)=>{"use strict";i.d(t,{EK:()=>g,EQ:()=>m});var r=i(25447),a=i(52850),s=i(22493),o=i(30191),n=i(80027),l=i(88014),c=i(5776),d=i(57914),p=i(97966);const u=()=>(e,t)=>(e({type:a.fQb}),{query:s.A`
			query Sign(
				$signId: ID!
				$layerSlugs: [String!]!
				$nearbyViewLimit: Int!
				$isCamerasEnabled: Boolean!
				$showCommercialQuantities: Boolean!
			) {
				signQuery(signId: $signId) {
					sign {
						uri
						title
						bbox
						icon
						cityReference
						color
						signStatus
						signDisplayType
						gantrySigns {
							uri
							title
							bbox
							icon
							cityReference
							color
							signStatus
							signDisplayType
							views {
								uri
								category
								title
								icon
								__typename
								... on SignComboView {
									imageUrl
									textJustification
									textLines
								}
								... on SignTextView {
									textJustification
									textLines
								}
								... on SignImageView {
									imageUrl
								}
								... on SignOverlayView {
									travelTimes
									imageUrl
									imageLayout
								}
								... on SignOverlayTPIMView {
									textLines
									imageUrl
								}
							}
						}
						views {
							uri
							category
							title
							icon
							__typename
							... on SignComboView {
								imageUrl
								textJustification
								textLines
							}
							... on SignTextView {
								textJustification
								textLines
							}
							... on SignImageView {
								imageUrl
							}
							... on SignOverlayView {
								travelTimes
								imageUrl
								imageLayout
							}
							... on SignOverlayTPIMView {
								textLines
								imageUrl
							}
						}
						features {
							id
							geometry
							properties
						}
						...NearbyResults
					}
					error {
						type
					}
				}
			}
			${c.A.nearbyResults}
		`,variables:{signId:(0,l.DY)(t()),layerSlugs:(0,o.LR)(t().app.activeLayers),nearbyViewLimit:a.az4,isCamerasEnabled:!!n.mc,showCommercialQuantities:(0,r.hf)(t(),n.UB,n.JM)}}),h=e=>t=>{const i=e.signQuery;i&&t((0,d.gf)(l.UN.SIGNS,i.sign,i.error))},g=()=>{p.GS.subscribe(a.Vzk.TRAY,u),p.Rt.subscribe(a.Vzk.TRAY,h)},m=()=>{p.GS.has(a.Vzk.TRAY,u)&&p.GS.unsubscribe(a.Vzk.TRAY),p.Rt.has(a.Vzk.TRAY,h)&&p.Rt.unsubscribe(a.Vzk.TRAY)}},57914:(e,t,i)=>{"use strict";i.d(t,{A3:()=>A,GJ:()=>E,ML:()=>S,SL:()=>T,gf:()=>R,kr:()=>$,m1:()=>k});var r=i(52114),a=i(42978),s=i(42582),o=i(18211),n=i(93127),l=i(52850),c=i(26200),d=i(98755),p=i(46339),u=i(31395),h=i(87190),g=i(11650),m=i(80027),y=i(2096),v=i(34542),b=i(25447),f=i(76393),w=i(78707);function S(e){return{type:l.ORK,trayPercent:e}}const A=()=>(e,t)=>{const i=t().tray.isSidebarCollapsed;return window.appDimensions.sidebarWidth=(0,f.A)(!i,t().app.layout),i||e((0,w.gX)()),e({type:l.I7h})},E=e=>(t,i)=>(window.appDimensions.sidebarWidth=(0,f.A)(e,i().app.layout),e&&t((0,w.gX)()),t({type:l.kS_,collapse:e})),$=(e,t)=>(i,r)=>{let a;try{a=(0,v.A)((0,b.tV)(r()),t)}catch{a=(0,v.A)((0,b.tV)(r()),u.lC)}(0,y.gI)(e,a)?(i((0,y.zQ)()),i({type:l.DCu,isActive:!0})):i({type:l.DCu,isActive:!1})},T=(e,t,i,r)=>(a,s)=>{const o=r?.trayPosition??u.lC;a({type:l.Tyb,activeUri:e,activeView:t,mapPosition:i,trayPercent:o,hasNavigatedFromSearch:r?.hasNavigatedFromSearch}),i&&a($(i,o)),setTimeout((()=>{s().tray.activeUri===e&&a({type:l.JBx,visibleUri:e,visibleView:t})}),m.VV.loaderDelayMs)},R=(e,t,i)=>(a,s)=>{try{if(t){const i=s();(0,g.ip)(t);const o=(0,r.S8)(t,c.cI);a({type:l.JBx,visibleUri:o.result,visibleView:e}),a({type:l.HMp,entities:o.entities});const y=(0,p.A)((0,d.b)(t.bbox),(0,b.tV)(s()),s().map.mapPosition,u.lC,{maxZoom:m.VV.defaultMarkerZoom});(i.tray.activeUri?.includes("plow")&&i.tray.activeUri!==i.tray.visibleUri||i.tray.isLoading)&&a((0,h.b1)(y)),!i.map.mapPosition&&t?.bbox&&a((0,h.Er)((0,n.A)(y),Math.floor(y.zoom)))}a({type:l.ZkM,error:i})}catch(e){console.error(e),a({type:l.ZkM,error:{type:l.i65.INTERNAL_SERVER_ERROR}})}};function k(e,t){let i;if("href"in e)i=e.href;else{let r,n="/";if(e.search?n="/search/around"+("string"==typeof e.search?`=${(0,s.A)(e.search)}`:""):t.tray.activeUri&&(n=`/${t.tray.activeUri}`),e.bounds){const i=(0,v.A)((0,b.tV)(t),u.lC);r=(0,a.X)(e.bounds,i,{zoomToFit:!0})}else if(t.map.mapPosition)r=t.map.mapPosition;else{const e=(0,v.A)((0,b.tV)(t),u.lC);r=(0,a.X)(m.VV.initialBounds,e,{zoomToFit:!0})}i=`${n}@${(0,o.A)(r.center.lng)},${(0,o.A)(r.center.lat)},${Math.floor(r.zoom)}?show=${e.layers?.join(",")??""}`}return i}},93278:(e,t,i)=>{"use strict";i.d(t,{NL:()=>g,T:()=>m});var r=i(25447),a=i(52850),s=i(22493),o=i(88014),n=i(5776),l=i(30191),c=i(80027),d=i(57914),p=i(97966);const u=()=>(e,t)=>(e({type:a.fQb}),{query:s.A`
			query Wildfire(
				$wildfireId: ID!
				$layerSlugs: [String!]!
				$nearbyViewLimit: Int!
				$isCamerasEnabled: Boolean!
				$showCommercialQuantities: Boolean!
			) {
				wildfireQuery(wildfireId: $wildfireId) {
					wildfire {
						uri
						title
						lastUpdated {
							timestamp
							timezone
						}
						tooltip
						bbox
						icon
						color
						startDate {
							timestamp
							timezone
						}
						description
						percentContained
						fullReportURL
						wildfireFields {
							fieldName
							displayValue
							isTopField
						}
						features {
							id
							geometry
							properties
						}
						...NearbyResults
					}
					error {
						type
					}
				}
			}
			${n.A.nearbyResults}
		`,variables:{wildfireId:(0,o.DY)(t()),layerSlugs:(0,l.LR)(t().app.activeLayers),nearbyViewLimit:a.az4,isCamerasEnabled:!!c.mc,showCommercialQuantities:(0,r.hf)(t(),c.UB,c.JM)}}),h=e=>t=>{const i=e.wildfireQuery;i&&t((0,d.gf)(o.UN.WILDFIRE,i.wildfire,i.error))},g=()=>{p.GS.subscribe(a.Vzk.TRAY,u),p.Rt.subscribe(a.Vzk.TRAY,h)},m=()=>{p.GS.has(a.Vzk.TRAY,u)&&p.GS.unsubscribe(a.Vzk.TRAY),p.Rt.has(a.Vzk.TRAY,h)&&p.Rt.unsubscribe(a.Vzk.TRAY)}},34132:(e,t,i)=>{"use strict";i.d(t,{$q:()=>R,A$:()=>O,CE:()=>Y,Ck:()=>ie,L2:()=>ee,Wj:()=>ae,Wl:()=>w,Wo:()=>L,_m:()=>V,e1:()=>Z,f3:()=>_,i5:()=>A,iD:()=>H,kL:()=>J,lv:()=>N,lw:()=>B,pr:()=>k,ri:()=>Q,sx:()=>M,w2:()=>P});var r=i(22645),a=i(42215),s=i(60969),o=i(80027),n=i(52850),l=i(4983),c=i(9748),d=i(5776),p=i(72357),u=i(90293),h=i(22493),g=i(30153),m=i(86094),y=i(78707),v=i(97966),b=i(21379),f=i(91780);const w=()=>e=>{window.localStorage.removeItem(c.Ni),window.localStorage.removeItem(c.HN),window.sessionStorage.removeItem(c.Ni),window.sessionStorage.removeItem(c.HN),e({type:n.vZI,show:!0}),e({type:n.Bb,account:null}),e({type:n.xId,favoriteUris:null})},S=()=>e=>{window.localStorage.removeItem(c.Ni),window.localStorage.removeItem(c.HN),window.sessionStorage.removeItem(c.Ni),window.sessionStorage.removeItem(c.HN),e({type:n.Bb,account:void 0}),e({type:n.mVL,status:n.vky.UNSUBMITTED}),e({type:n.pfQ,show:!0}),e((0,f.Ll)([])),setTimeout((()=>{e({type:n.pfQ,show:!1})}),3e3)},A=e=>({type:n.Uf2,accountView:e}),E=(e,t)=>i=>!(!o.UB||e===t||t!==l.ut.Trucker)&&(o.UB.sublayers?.map((e=>i((0,m.wT)(e,!0)))).some((e=>e))??!1),$=h.A`
	mutation UpdateAccountMutation(
		$accountInput: AccountInput!
		$mobilePhoneNumberInput: SMSChangeInput
	) {
		updateAccountMutation(input: $accountInput) {
			account {
				...AccountContents
			}
			error {
				type
			}
		}
		changeSMSNumberMutation(input: $mobilePhoneNumberInput) {
			error {
				type
			}
		}
	}
	${d.A.accountContents}
	${d.A.travelTimeMessageSchedule}
	${d.A.alertSchedule}
`,T=(e,t)=>async(i,r)=>{i({type:n.cjo,status:n.vky.PENDING});const o=r().your511.account?.userType;delete e.favorites,delete e.favoriteCameraViews,delete e.creationDate,delete e.lastLogin,delete e.accountStatus;const l=(0,a.A)(e,s.A);try{const r=await(0,p.A)({query:$,variables:{accountInput:{...l,defaultMapView:JSON.stringify(e.defaultMapView)},mobilePhoneNumberInput:t}}),a=r.updateAccountMutation?.account;if(a&&(i({type:n.Bb,account:a}),(window.localStorage.getItem(c.HN)?window.localStorage:window.sessionStorage).setItem(c.HN,JSON.stringify((0,u.A)(a))),i(E(o,a.userType))&&i((0,y.gX)())),r.updateAccountMutation?.error||r.changeSMSNumberMutation?.error){const e=r.updateAccountMutation?.error??r.changeSMSNumberMutation?.error;i({type:n.cjo,status:n.vky.ERROR,error:e?.type})}else r.updateAccountMutation?.account?.favorites&&i((0,f.CI)(r.updateAccountMutation?.account?.favorites)),i({type:n.cjo,status:n.vky.SUCCESS})}catch(e){console.error(e),i({type:n.cjo,status:n.vky.ERROR})}},R=e=>async(t,i)=>{const{account:r}=i().your511;if(!r)throw await t((0,b.A)(null)),new Error("No account found");const{firstName:a,lastName:s,userType:o,defaultMapView:n}=e,l={...r,firstName:a,lastName:s,userType:o,defaultMapView:n};await t(T(l))},k=e=>async(t,i)=>{const{account:r}=i().your511;if(!r)throw new Error("No account found");const{statewideEmergencyAlertsEnabled:a,optInAlertFilters:s,priorityThreshold:o,phoneNumber:n,mobileCarrierId:l}=e,c={...r,alertSettings:{...r.alertSettings,statewideEmergencyAlertsEnabled:a,optInAlertFilters:s,priorityThreshold:o,smsAlertEnabled:!0}};if(n&&l){const e={phoneNumber:n,mobileCarrierId:l};await t(T(c,e))}else await t(T(c))},M=e=>async(t,i)=>{const{account:r}=i().your511;if(!r)throw new Error("No account found");const{phoneNumbers:a,enabled:s}=e,o={...r,your511Settings:{phoneNumbers:a,enabled:s}};await t(T(o))},C=h.A`
	mutation UpdatePassword($accountId: Int!, $oldPassword: String!, $newPassword: String!) {
		updatePasswordMutation(
			accountId: $accountId
			oldPassword: $oldPassword
			newPassword: $newPassword
		) {
			authToken {
				id
				createdMillis
				accountId
				lifespan {
					units
					time
				}
			}
			error {
				message
				type
			}
		}
	}
`,_=e=>async(t,i)=>{const{account:r}=i().your511;if(!r)throw new Error("No account found");t({type:n.M3h,status:n.vky.PENDING});const{currentPassword:a,newPassword:s}=e,{id:o}=r;try{const e=await(0,p.A)({query:C,variables:{accountId:o,oldPassword:a,newPassword:s}});e.updatePasswordMutation?.error?e.updatePasswordMutation?.error?.type===n.i65.PREVIOUS_PASSWORD?t({type:n.M3h,status:n.vky.ERROR,error:n.i65.PREVIOUS_PASSWORD,errorMessage:null==e.updatePasswordMutation.error.message?void 0:e.updatePasswordMutation.error.message}):t({type:n.M3h,status:n.vky.ERROR}):(t({type:n.M3h,status:n.vky.SUCCESS}),setTimeout((()=>{t({type:n.M3h,status:n.vky.UNSUBMITTED})}),3500),e.updatePasswordMutation?.authToken&&(window.localStorage.getItem(c.Ni)||window.localStorage.getItem(c.HN)?window.localStorage:window.sessionStorage).setItem(c.Ni,JSON.stringify(e.updatePasswordMutation.authToken)))}catch(e){console.error(e),t({type:n.M3h,status:n.vky.ERROR})}},x=h.A`
	mutation UpdateEmail($newEmail: String!, $password: String!) {
		updateEmailMutation(newEmail: $newEmail, password: $password) {
			error {
				type
			}
		}
	}
`,L=e=>async t=>{t({type:n.nt6,status:n.vky.PENDING});const{password:i,newEmail:r}=e;try{const e=await(0,p.A)({query:x,variables:{password:i,newEmail:r}});e.updateEmailMutation?.error?t({type:n.nt6,status:n.vky.ERROR}):(t({type:n.nt6,status:n.vky.SUCCESS}),setTimeout((()=>{t({type:n.nt6,status:n.vky.UNSUBMITTED})}),3500))}catch(e){console.error(e),t({type:n.nt6,status:n.vky.ERROR})}},I=h.A`
	mutation VerifyEmail($accountId: Int!, $code: String!) {
		verifyEmailMutation(accountId: $accountId, code: $code) {
			authToken {
				id
				createdMillis
				accountId
				lifespan {
					units
					time
				}
			}
			account {
				...AccountContents
			}
			error {
				type
			}
		}
	}
	${d.A.alertSchedule}
	${d.A.travelTimeMessageSchedule}
	${d.A.accountContents}
`,O=(e,t)=>async(i,r)=>{i({type:n.ZZW,status:n.vky.PENDING});try{const a={query:I,variables:{accountId:e,code:t}},s=await(0,p.A)(a);if(s.verifyEmailMutation?.error)return console.error(s.verifyEmailMutation.error),void i({type:n.ZZW,status:n.vky.ERROR});if(r().your511.account){const e=window.localStorage.getItem(c.Ni)||window.localStorage.getItem(c.HN)?window.localStorage:window.sessionStorage;s.verifyEmailMutation?.authToken&&e.setItem(c.Ni,JSON.stringify(s.verifyEmailMutation.authToken)),s.verifyEmailMutation?.account&&(e.setItem(c.HN,JSON.stringify((0,u.A)(s.verifyEmailMutation.account))),i({type:n.Bb,account:s.verifyEmailMutation.account}))}i({type:n.ZZW,status:n.vky.SUCCESS})}catch(e){console.error(e),i({type:n.ZZW,status:n.vky.ERROR})}},P=e=>async t=>{t({type:n.cjo,status:n.vky.PENDING});try{if(!o.DR.endpoints.accounts)throw new Error("Accounts endpoint not set");const i=await fetch(`${o.DR.endpoints.accounts}/accounts/password/requestReset?userId=${encodeURIComponent(e)}&appContextId=oneweb`,{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({})});if(!i.ok)throw new Error(JSON.stringify(i));t({type:n.cjo,status:n.vky.SUCCESS})}catch(e){console.error(e),t({type:n.cjo,status:n.vky.ERROR})}},N=(e,t)=>async(i,r)=>{try{t?window.localStorage.setItem(c.e6,JSON.stringify(t)):window.localStorage.removeItem(c.e6)}catch(e){console.error(`failed to set local storage key "${c.e6}" to value`,t,e)}if(e)try{const{firstName:e,lastName:a,userType:s}=r().your511.account??{};e&&a&&s&&await i(R({firstName:e,lastName:a,userType:s,defaultMapView:t}))}catch(e){console.error(e)}i({type:n.qAo,mapView:t})},D=h.A`
	mutation CreateAccount($input: CreateAccountInput!, $captchaToken: String) {
		createAccountMutation(input: $input, captchaToken: $captchaToken) {
			authToken {
				id
				createdMillis
				accountId
				lifespan {
					units
					time
				}
			}
			account {
				...AccountContents
			}
			error {
				type
			}
		}
	}
	${d.A.accountContents}
	${d.A.travelTimeMessageSchedule}
	${d.A.alertSchedule}
`,V=(e,t)=>async t=>{t({type:n.cjo,status:n.vky.PENDING});try{let i=null;o.Vu?.recaptchaProtected&&(i=await(0,r.hw)(r.XT.SIGNUP));const a=await(0,p.A)({query:D,variables:{input:e,captchaToken:i}});a.createAccountMutation?.error?t({type:n.cjo,status:n.vky.ERROR,error:a.createAccountMutation.error.type}):t({type:n.cjo,status:n.vky.SUCCESS})}catch(e){console.error(e),t({type:n.cjo,status:n.vky.ERROR})}},U=h.A`
	mutation AccountDelete($password: String!) {
		accountDeleteMutation(password: $password) {
			error {
				type
			}
		}
	}
`,B=e=>async t=>{t({type:n.kkf,controller:new AbortController}),t({type:n.roW,status:n.vky.PENDING});try{if(!(0,g.c4)())throw new Error("No Auth");const i=await(0,p.A)({query:U,variables:{password:e}});i.accountDeleteMutation?.error?t({type:n.roW,status:n.vky.ERROR}):(t(S()),await t((0,y.gX)()),t({type:n.roW,status:n.vky.SUCCESS}),await t((0,b.A)(null)))}catch(e){console.error(e),t({type:n.BmI,status:n.vky.ERROR})}},F=h.A`
	query Account {
		accountQuery {
			account {
				...AccountContents
			}
			error {
				type
			}
		}
	}
	${d.A.accountContents}
	${d.A.travelTimeMessageSchedule}
	${d.A.alertSchedule}
`,z=e=>(t,i)=>{if(e.accountQuery)try{const r=i().your511.account?.userType;t({type:n.Bb,account:e.accountQuery?.account}),t(E(r,e.accountQuery?.account?.userType))&&t((0,y.gX)()),o.Vu?.saveDefaultMapViewToAccount&&t(N(!1,e?.accountQuery?.account?.defaultMapView??void 0)),e.accountQuery?.account?.favorites&&t((0,f.CI)(e.accountQuery?.account?.favorites)),e.accountQuery?.account?.favoriteCameraViews&&t((0,f.Ll)(e.accountQuery?.account?.favoriteCameraViews)),[n.i65.NOT_AUTHORIZED,n.i65.NOT_FOUND].includes(e.accountQuery?.error?.type)&&t(w()),t({type:n.Bb,account:e.accountQuery?.account})}catch(e){console.error(e)}};v.Ky.subscribe("account",z),v.xg.subscribe("account",(()=>()=>{if((0,g.c4)())return{query:F}}));const q=h.A`
	mutation ($email: String!, $password: String!, $captchaToken: String) {
		loginMutation(email: $email, password: $password, captchaToken: $captchaToken) {
			authToken {
				id
				createdMillis
				accountId
				lifespan {
					units
					time
				}
			}
			account {
				...AccountContents
			}
			error {
				type
				message
			}
		}
	}
	${d.A.alertSchedule}
	${d.A.travelTimeMessageSchedule}
	${d.A.accountContents}
`,H=(e,t,i)=>async a=>{a({type:n.mVL,status:n.vky.PENDING});try{let s=null;o.Vu?.recaptchaProtected&&(s=await(0,r.hw)(r.XT.LOGIN));const l=await(0,p.A)({query:q,variables:{email:e,password:t,captchaToken:s}});if(l.loginMutation?.error?.type===n.i65.UNVERIFIED_USER)return await a((0,b.A)(n.Gqw.VERIFY)),void setTimeout((()=>{a({type:n.mVL,status:n.vky.UNSUBMITTED})}),3e3);if(l.loginMutation?.authToken){const e=i?window.localStorage:window.sessionStorage;e.setItem(c.Ni,JSON.stringify(l.loginMutation.authToken)),l.loginMutation?.account&&e.setItem(c.HN,JSON.stringify((0,u.A)(l.loginMutation.account))),a({type:n.Bb,account:l.loginMutation?.account}),a(E(void 0,l.loginMutation?.account?.userType)),await a((0,y.gX)()),l.loginMutation?.account?.favorites&&a((0,f.CI)(l.loginMutation?.account?.favorites)),l.loginMutation?.account?.favoriteCameraViews&&a((0,f.Ll)(l.loginMutation?.account?.favoriteCameraViews)),l.loginMutation?.account?.defaultMapView&&o.Vu?.saveDefaultMapViewToAccount&&a(N(!1,l?.loginMutation?.account?.defaultMapView)),a({type:n.mVL,status:n.vky.SUCCESS}),await a((0,b.A)(null)),setTimeout((()=>{a({type:n.mVL,status:n.vky.UNSUBMITTED})}),3e3)}l.loginMutation?.error&&a({type:n.mVL,status:n.vky.ERROR,errorMessage:null==l.loginMutation.error.message?void 0:l.loginMutation.error.message})}catch(e){console.error(e),a({type:n.mVL,status:n.vky.ERROR})}},W=h.A`
	mutation {
		logoutMutation {
			error {
				type
			}
		}
	}
`,Q=()=>async e=>{try{if(e({type:n.kkf,controller:new AbortController}),!(0,g.c4)())return;const t=await(0,p.A)({query:W});if(t.logoutMutation?.error)throw new Error(JSON.stringify(t))}catch(e){console.error(e)}e(S()),await e((0,y.gX)())},G=h.A`
	mutation VerifySMSAlertNumber($verificationCode: String!) {
		verifySMSAlertNumberMutation(verificationCode: $verificationCode) {
			account {
				...AccountContents
			}
			error {
				type
			}
		}
	}
	${d.A.accountContents}
	${d.A.travelTimeMessageSchedule}
	${d.A.alertSchedule}
`,j=h.A`
	query SendActivateEmail {
		sendActivateEmailQuery {
			error {
				type
			}
		}
	}
`,Z=()=>async e=>{try{if(e({type:n.j0C,status:n.vky.PENDING}),!(0,g.c4)())return void e(w());const t=await(0,p.A)({query:j});if(t.sendActivateEmailQuery?.error)throw new Error(JSON.stringify(t));e({type:n.j0C,status:n.vky.SUCCESS})}catch(t){console.error(t),e({type:n.j0C,status:n.vky.ERROR})}},Y=e=>async t=>{t({type:n.cjo,status:n.vky.PENDING});try{t({type:n.kkf,controller:new AbortController});const i=await(0,p.A)({query:G,variables:{verificationCode:e}});i.verifySMSAlertNumberMutation?.error?t({type:n.cjo,status:n.vky.ERROR}):(i.verifySMSAlertNumberMutation&&t({type:n.Bb,account:i.verifySMSAlertNumberMutation.account}),t({type:n.cjo,status:n.vky.SUCCESS}))}catch(e){console.error(e),t({type:n.cjo,status:n.vky.ERROR})}},K=h.A`
	mutation ChangeSMSNumber($mobilePhoneNumberInput: SMSChangeInput) {
		changeSMSNumberMutation(input: $mobilePhoneNumberInput) {
			error {
				type
			}
		}
	}
`,J=(e,t)=>async()=>{try{return(await(0,p.A)({query:K,variables:{mobilePhoneNumberInput:{phoneNumber:e,mobileCarrierId:t}}})).changeSMSNumberMutation}catch(e){return void console.error(e)}},X=h.A`
	mutation ActivateAndAuth($accountId: Int!, $activationToken: String!) {
		activateAndAuthMutation(accountId: $accountId, activationToken: $activationToken) {
			authToken {
				id
				createdMillis
				accountId
				lifespan {
					units
					time
				}
			}
			account {
				...AccountContents
			}
			error {
				type
			}
		}
	}
	${d.A.alertSchedule}
	${d.A.travelTimeMessageSchedule}
	${d.A.accountContents}
`,ee=(e,t)=>async i=>{try{i({type:n.kkf,controller:new AbortController}),i({type:n.tqt,status:n.vky.PENDING});const r=await(0,p.A)({query:X,variables:{accountId:e,activationToken:t}}),a=window.localStorage.getItem(c.Ni)||window.localStorage.getItem(c.HN)?window.localStorage:window.sessionStorage;r.activateAndAuthMutation?.authToken&&a.setItem(c.Ni,JSON.stringify(r.activateAndAuthMutation?.authToken)),r.activateAndAuthMutation?.account&&a.setItem(c.HN,JSON.stringify((0,u.A)(r.activateAndAuthMutation.account))),i({type:n.Bb,account:r.activateAndAuthMutation?.account}),await i((0,y.gX)()),r.activateAndAuthMutation?.error&&i({type:n.tqt,status:n.vky.ERROR}),r.activateAndAuthMutation?.authToken&&i({type:n.tqt,status:n.vky.SUCCESS})}catch(e){i({type:n.tqt,status:n.vky.ERROR}),console.error(e)}},te=h.A`
	mutation ResetPasswordFromTokenMutation(
		$password: String!
		$resetToken: String!
		$email: String!
	) {
		resetPasswordFromTokenMutation(password: $password, resetToken: $resetToken, email: $email) {
			authToken {
				id
				createdMillis
				accountId
				lifespan {
					units
					time
				}
			}
			error {
				message
				type
			}
		}
	}
`,ie=(e,t,i)=>async r=>{try{r({type:n.tqt,status:n.vky.PENDING});const a=await(0,p.A)({query:te,variables:{password:e,resetToken:t,email:i}});a.resetPasswordFromTokenMutation?.error?a.resetPasswordFromTokenMutation?.error?.type===n.i65.PREVIOUS_PASSWORD?r({type:n.cjo,status:n.vky.ERROR,error:n.i65.PREVIOUS_PASSWORD,errorMessage:null==a.resetPasswordFromTokenMutation.error.message?void 0:a.resetPasswordFromTokenMutation.error.message}):r({type:n.cjo,status:n.vky.ERROR}):r({type:n.cjo,status:n.vky.SUCCESS})}catch(e){r({type:n.cjo,status:n.vky.ERROR}),console.error(e)}},re=h.A`
	mutation AlertDUnsubscribeMutation($alertDUnsubscribeKey: String!) {
		alertDUnsubscribeMutation(alertDUnsubscribeKey: $alertDUnsubscribeKey) {
			error {
				type
			}
		}
	}
`,ae=()=>async(e,t)=>{try{const{alertDUnsubscribeKey:i}=t().your511;if(!i)return void e({type:n.cjo,status:n.vky.ERROR});e({type:n.tqt,status:n.vky.PENDING});const r=await(0,p.A)({query:re,variables:{alertDUnsubscribeKey:i}});r.alertDUnsubscribeMutation?.error?e({type:n.cjo,status:n.vky.ERROR}):(e({type:n.cjo,status:n.vky.SUCCESS}),e((async e=>{const t=new AbortController;if(e({type:n.kkf,controller:t}),!(0,g.c4)())return;const i=await(0,p.A)({query:F},"POST",t.signal);e(z(i))})),setTimeout((()=>{e((0,b.A)(null)).then((()=>{e({type:n.cjo,status:n.vky.UNSUBMITTED})}))}),2500))}catch(t){e({type:n.cjo,status:n.vky.ERROR}),console.error(t)}}},91780:(e,t,i)=>{"use strict";i.d(t,{oS:()=>B,C5:()=>Z,tN:()=>z,jP:()=>H,jx:()=>W,VA:()=>G,NU:()=>V,Ll:()=>N,CI:()=>P,$h:()=>Y});var r=i(52114),a=i(63822),s=i(52850),o=i(4983),n=i(10388),l=i(5776),c=i(99863),d=i(88014),p=i(30153),u=i(21379),h=i(72357),g=i(22493),m=i(98755),y=i(2379),v=i(42791);function b(e,t){const i=/(\d{1,2}):(\d{1,2})/,r=i.exec(e),a=i.exec(t);return{startMillis:r?parseInt(r[1],10)*s.WRp+parseInt(r[2],10)*s.wBG:0,endMillis:a?parseInt(a[1],10)*s.WRp+parseInt(a[2],10)*s.wBG:0}}const f=function(e,t){return{id:t,alertingTimeInterval:b(e.fromTime.value,e.toTime.value),daysOfWeek:e.daysActive.value,lastUpdated:(new Date).getTime(),sendEmail:e.emailActive.value,sendSms:e.smsActive.value}};function w(e){const[t,i]=e.split(":");return[parseInt(t,10),parseInt(i,10),0,0]}const S=function(e){return{daysOfWeek:e.daysActive.value,lastUpdated:(new Date).getTime(),sendEmail:e.emailActive.value,sendSms:e.smsActive.value,travelTimeSecondsThreshold:60*parseInt(e.travelTimeSecondsThreshold.value,10),timeOfDay:w(e.travelTimeAlertTime.value)}};var A=i(26001);const E=function(e){return e.reduce(((e,t)=>(t.bounds&&(e.minLat=Math.min(e.minLat,t.bounds.minLat),e.minLon=Math.min(e.minLon,t.bounds.minLon),e.maxLat=Math.max(e.maxLat,t.bounds.maxLat),e.maxLon=Math.max(e.maxLon,t.bounds.maxLon)),e)),{minLat:90,minLon:180,maxLat:-90,maxLon:-180})};function $(e){const t=e.path.map((e=>[e.lng(),e.lat()]));return(0,A.A)({type:"LineString",coordinates:t})}const T=function(e){const t=e?.routes?.[0];if(!e?.request?.travelMode||!t)throw new Error("Missing directions data");const i=[];t.legs.forEach(((e,t)=>{const r=e;let a=0,s=r.steps[0];const o=r.via_waypoints.length;let n,l,c,d,p,u,h,g,m,y,v,b=null;for(n=0;n<=o;n+=1){for(l=r.via_waypoint[n],c=0,d=0,p=[];s&&(!l||a<=l.step_index);)c+=s.distance.value,d+=s.distance.value,p.push(s),a+=1,s=r.steps[a];g="",0===n&&(g=r.start_address),y=b?b.location:r.start_location,u={major:0===n,lat:y.lat(),lon:y.lng(),address:g},m="",n===o&&(m=r.end_address),v=l?l.location:r.end_location,h={major:n===o,lat:v.lat(),lon:v.lng(),address:m};const e=p.map(((e,t)=>({stepSequence:t,instructions:e.instructions,distanceMeters:e.distance.value,localizedDistance:e.distance.text,durationSeconds:e.duration.value,localizedDuration:e.duration.text,lineString:$(e)})));i.push({legSequence:t,startWayPoint:u,endWayPoint:h,distanceMeters:c,durationSeconds:d,steps:e,bounds:E(e)}),b=l}}));const r=e.routes[0].bounds.toJSON();return{legs:i,bounds:{minLon:r.west,minLat:r.south,maxLon:r.east,maxLat:r.north},travelMode:e.request.travelMode}};var R=i(12172),k=i(43908),M=i(26200),C=i(78013),_=i(34132),x=i(66003),L=i(78707);function I(e){return e?[[[e.west,e.south],[e.west,e.north],[e.east,e.north],[e.east,e.south],[e.west,e.south]]]:e}function O(e){return e.reduce(((e,t)=>{if(t){const i=(0,C.A)(t.geometry);e.push({...t,id:t.id??void 0,geometry:i,type:"Feature",bbox:t.bbox??void 0})}return e}),[])}const P=e=>t=>{const i=e.reduce(((e,t)=>(t?.visual?e.push({...t,visual:O(t.visual)}):e.push(t),e)),[]),a=(0,r.S8)(i,[M.JY]);t({type:s.xId,favoriteUris:a.result,entities:a.entities})},N=e=>t=>{const i=(0,r.S8)(e,[M.Ht]);t({type:s.jUB,favoriteCameraViewUris:i.result,entities:i.entities})},D=e=>t=>{if(!e?.visual)throw new Error("addFavorite: visual required.");const i={...e,visual:O(e.visual)},a=(0,r.S8)(i,M.JY);t({type:s.tOe,favoriteUri:a.result,entities:a.entities})};function V(e,t,i){return{type:s.rAm,favoriteAction:e,favoriteType:t,favoriteId:i}}const U=g.A`
	mutation AddFavoriteCameraView($cameraId: ID!, $viewId: ID!) {
		addFavoriteCameraViewMutation(cameraId: $cameraId, viewId: $viewId) {
			favoriteCameraView {
				uri
				title
				url
				parentCollection {
					uri
					bbox
				}
			}
			error {
				type
			}
		}
	}
`,B=e=>async t=>{const{entityId:i,viewId:a}=(0,R.A)(e);try{if(!(0,p.c4)())return void t((0,_.Wl)());t({type:s.ywZ,status:s.vky.PENDING,pendingCameraUri:e});const o=await(0,h.A)({query:U,variables:{cameraId:i,viewId:a}});if(o.addFavoriteCameraViewMutation?.error||!o.addFavoriteCameraViewMutation?.favoriteCameraView)throw new Error(JSON.stringify(o));const n=o.addFavoriteCameraViewMutation?.favoriteCameraView;await t((0,L.gX)());const l=(0,r.S8)(n,M.Ht);t({type:s.$I,cameraViewUri:l.result,entities:l.entities}),t({type:s.ywZ,status:s.vky.UNSUBMITTED,pendingCameraUri:e})}catch(i){console.error(i),t({type:s.ywZ,status:s.vky.UNSUBMITTED,pendingCameraUri:e})}},F=g.A`
	mutation RemoveFavoriteCameraView($cameraId: ID!, $viewId: ID!) {
		removeFavoriteCameraViewMutation(cameraId: $cameraId, viewId: $viewId) {
			error {
				type
			}
		}
	}
`,z=e=>async t=>{const{entityId:i,viewId:r}=(0,R.A)(e);try{if(!(0,p.c4)())return void t((0,_.Wl)());t({type:s.ywZ,status:s.vky.PENDING,pendingCameraUri:e});const a=await(0,h.A)({query:F,variables:{cameraId:i,viewId:r}});if(a.removeFavoriteCameraViewMutation?.error)throw new Error(JSON.stringify(a));await t((0,L.gX)()),t({type:s.Gqy,cameraViewUri:e}),t({type:s.ywZ,status:s.vky.UNSUBMITTED,pendingCameraUri:e})}catch(i){console.error(i),t({type:s.ywZ,status:s.vky.UNSUBMITTED,pendingCameraUri:e})}},q=g.A`
	mutation AreaSave($area: AreaInput!) {
		areaSaveMutation(area: $area) {
			favoriteArea {
				...FavoriteVisual
				...AlertSchedule
			}
			error {
				type
			}
		}
	}
	${l.A.favoriteVisual}
	${l.A.alertSchedule}
`,H=(e,t,i,r,l)=>async(g,v)=>{g({type:s.BmI,status:s.vky.PENDING});try{const b=v(),w=(0,c.PZ)(b);if(!(0,p.c4)())return void g((0,_.Wl)());let S;if(l)S=I(l);else{if(!w?.bbox)throw new Error("no map coordinates for saving an area");S=I((0,m.b)(w?.bbox))}const E=e.mobilePhoneNumber.value.replace(/\D/g,"");if(e.smsActive.value&&""!==E){const t=b.your511.account?.alertSettings?.phoneNumber?.replace(/\D/g,"")??"";if(""===t||E!==t){const t=await n.M_.dispatch((0,_.kL)(E,parseInt(e.mobileCarrierId.value,10)));if(null!=t?.error?.type){const e=t.error.type===s.i65.DUPLICATE_DATA?(0,a.l)("your511.phone.inUse","This phone number is already registered to another account. Please use a different number."):t.error.message??t.error.type;return void g({type:s.BmI,status:s.vky.ERROR,error:e})}}}const $={id:r,name:e.favoriteLabel.value,polygon:(0,A.A)({type:"Polygon",coordinates:S}),alertSchedule:t?f(e,w?.alertSchedule?.id):void 0,customAreaShapeSource:o.dT.ConfigDefined},T=await(0,h.A)({query:q,variables:{area:$}});if(T.areaSaveMutation?.error||!T.areaSaveMutation?.favoriteArea)throw new Error(JSON.stringify(T));if(g(D(T.areaSaveMutation?.favoriteArea)),v().tray.activeView===d.UN.SEARCH_PLACE){const e=v().search;if(!e.submittedBounds)throw new Error("saveFavoriteAreaSuccess: Illegal state");const t=(0,m.z)(e.submittedBounds);await g((0,x.oo)(`${(0,y.Ay)(t,e.urlAround,T.areaSaveMutation.favoriteArea.id)}${window.location.search}${window.location.hash}`))}i?(g({type:s.BmI,status:s.vky.UNSUBMITTED,mobileVerificationOpen:!0}),await g((0,u.A)(`${s.Gqw.FAVORITE}/${s.Odl.FAVORITE_AREA}/${c.u2.EDIT}/${T.areaSaveMutation.favoriteArea.id}`))):(g({type:s.BmI,status:s.vky.SUCCESS}),await g((0,u.A)(null)))}catch(e){console.error(e),g({type:s.BmI,status:s.vky.ERROR})}},W=(e,t,i,r,a)=>async(n,l)=>{n({type:s.BmI,status:s.vky.PENDING});try{const g=(0,c.PZ)(l());if(!(0,p.c4)())return void n((0,_.Wl)());let m;if(a&&a.coordinates?m=a:"Polygon"===g?.visual?.[0]?.geometry.type&&g?.visual?.[0]?.geometry.coordinates&&(m=g?.visual?.[0]?.geometry),!m)throw new Error("no map coordinates for saving an area");const v=(0,A.A)(m),b={id:r,name:e.favoriteLabel.value,polygon:v,alertSchedule:t?f(e,g?.alertSchedule?.id):void 0,customAreaShapeSource:o.dT.UserDrawn},w=function(e,t){const i=(0,k.U)(e),r=parseInt(t,10);if(i&&r)return{phoneNumber:i,mobileCarrierId:r}}(e.mobilePhoneNumber.value,e.mobileCarrierId.value),S=await(0,h.A)({query:q,variables:{area:b,mobilePhoneNumberInput:w}});if(S.areaSaveMutation?.error||!S.areaSaveMutation?.favoriteArea)throw new Error(JSON.stringify(S));if(n(D(S.areaSaveMutation?.favoriteArea)),l().tray.activeView===d.UN.SEARCH_DRAWN_AREA){const e=S.areaSaveMutation.favoriteArea.id;await n((0,x.oo)(`${(0,y.wE)(m,e)}${window.location.search}${window.location.hash}`))}i?(n({type:s.BmI,status:s.vky.UNSUBMITTED,mobileVerificationOpen:!0}),await n((0,u.A)(`${s.Gqw.FAVORITE}/${s.Odl.FAVORITE_AREA}/${c.u2.EDIT}/${S.areaSaveMutation.favoriteArea.id}`))):(n({type:s.BmI,status:s.vky.SUCCESS}),await n((0,u.A)(null)))}catch(e){console.error(e),n({type:s.BmI,status:s.vky.ERROR})}},Q=g.A`
	mutation TripSave($trip: TripInput!) {
		tripSaveMutation(trip: $trip) {
			favoriteTrip {
				...FavoriteVisual
				...AlertSchedule
				...TravelTimeMessageSchedule
			}
			error {
				type
			}
		}
	}
	${l.A.favoriteVisual}
	${l.A.alertSchedule}
	${l.A.travelTimeMessageSchedule}
`,G=(e,t,i,r,o)=>async(l,g)=>{l({type:s.BmI,status:s.vky.PENDING});try{if(!(0,p.c4)())return void l((0,_.Wl)());if(!o&&!r)throw new Error("Directions required when creating a trip.");const m=g(),y=(0,c.PZ)(m),b=e.travelTimeUpdatesActive.value,w=e.mobilePhoneNumber.value.replace(/\D/g,"");if(e.smsActive.value&&""!==w){const t=m.your511.account?.alertSettings?.phoneNumber?.replace(/\D/g,"")??"";if(""===t||w!==t){const t=await n.M_.dispatch((0,_.kL)(w,parseInt(e.mobileCarrierId.value,10)));if(null!=t?.error?.type){const e=t.error.type===s.i65.DUPLICATE_DATA?(0,a.l)("your511.phone.inUse","This phone number is already registered to another account. Please use a different number."):t.error.message??t.error.type;return void l({type:s.BmI,status:s.vky.ERROR,error:e})}}}const A=await(0,h.A)({query:Q,variables:{trip:{id:o,name:e.favoriteLabel.value,alertSchedule:t?f(e,y?.alertSchedule?.id):void 0,travelTimeMessageSchedule:t&&b?S(e):void 0,...r?T(r):{}}}});if(A.tripSaveMutation?.error||!A.tripSaveMutation?.favoriteTrip)throw new Error(JSON.stringify(A));l(D(A.tripSaveMutation.favoriteTrip));const E=g().search;if(g().tray.activeView===d.UN.SEARCH_ROUTE){if(!E.urlFrom||!E.urlTo||!E.mode)throw new Error("saveFavoriteRouteSuccess: Illegal state");await l((0,x.oo)(`${(0,v.A)(E.urlFrom,E.urlTo,E.mode,E.urlWaypts,A.tripSaveMutation.favoriteTrip.id)}\n\t\t\t\t\t\t${window.location.search}${window.location.hash}`))}i?(l({type:s.BmI,status:s.vky.UNSUBMITTED,mobileVerificationOpen:!0}),await l((0,u.A)(`${s.Gqw.FAVORITE}/${s.Odl.FAVORITE_ROUTE}/${c.u2.EDIT}/${A.tripSaveMutation.favoriteTrip.id}`))):(l({type:s.BmI,status:s.vky.SUCCESS}),await l((0,u.A)(null)))}catch(e){console.error(e),l({type:s.BmI,status:s.vky.ERROR})}},j=g.A`
	query FavoriteDelete($favoriteId: Int!, $favoriteType: String!) {
		favoriteDeleteQuery(favoriteId: $favoriteId, favoriteType: $favoriteType) {
			error {
				type
			}
		}
	}
`,Z=(e,t)=>async(i,r)=>{i({type:s.BmI,status:s.vky.PENDING});try{if(!(0,p.c4)())return void i((0,_.Wl)());const a=function(e,t,i){const r=(0,c.iM)(i),a=`${s.Gqw.FAVORITE}/${t}/${e}`;return r?.find((e=>a===e.uri))??null}(e,t,r());if(!a)throw new Error("Favorite not in state");const o=await(0,h.A)({query:j,variables:{favoriteId:e,favoriteType:t}});if(o.favoriteDeleteQuery?.error)throw new Error(JSON.stringify(o));i({type:s.GfU,favoriteUri:a.uri});const{search:n}=r();if(r().tray.activeView===d.UN.SEARCH_PLACE&&n.submittedBounds){const e=(0,y.Ay)(n.submittedBounds,n.urlAround);await i((0,x.oo)(e))}if(r().tray.activeView===d.UN.SEARCH_ROUTE){const e=(0,v.A)(n.urlFrom,n.urlTo,n.mode,n.urlWaypts);await i((0,x.oo)(e))}i({type:s.BmI,status:s.vky.SUCCESS}),await i((0,u.A)(null))}catch(e){console.error(e),i({type:s.BmI,status:s.vky.ERROR})}},Y=e=>t=>{t({type:s.Ltw,hoveringFavoriteUri:e}),(0,L.nv)(t)}},17026:(e,t,i)=>{"use strict";i.d(t,{W:()=>Z,A:()=>Y});var r=i(71413),a=i(52706),s=i(56599),o=i(61531),n=i(66003),l=i(63822),c=i(80027),d=i(52850),p=i(11650),u=i(10388);const h={},g={};let m=!1;var y=i(70192),v=i(18211),b=i(80480),f=i(5218),w=i(30555),S=i(52081),A=i(91098),E=(i(82890),i(38155)),$=i(32701),T=Object.defineProperty,R=Object.getOwnPropertyDescriptor,k=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?R(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&T(t,i,s),s};let M=class extends r.WF{constructor(){super(...arguments),this.visible=!1,this.tooltip="",this.views=[],this.viewIndex=0,this.isImagesUnavailable=!1,this.loaderActive=!1,this.imageElementRef=(0,E._)(),this.cameraUnavailableTimeoutId=0}static get styles(){return[$.A,S.A]}updated(e){if(e.has("views")&&(clearInterval(this.slideshowIntervalId),clearTimeout(this.cameraUnavailableTimeoutId),this.viewIndex=0,this.isImagesUnavailable=!1,null!=this.views&&null!=this.imageElementRef.value)){const e=this.views[this.viewIndex]?this.views[this.viewIndex].url:"";this.imageElementRef.value.src=e??"",this.loaderActive=!0,null!=c.mc?.unavailableCameraTimeoutMilliseconds&&(this.cameraUnavailableTimeoutId=window.setTimeout((()=>{this.isImagesUnavailable=!0}),c.mc.unavailableCameraTimeoutMilliseconds))}}render(){return this.views?.length?r.qy`<div id="tooltip" class="tooltip--camera" ?visible=${this.visible} role="tooltip">
				<p class="tooltip-title">${this.tooltip}</p>
				<div class="tooltip-img-container">
					<spinning-loader
						class="${(0,w.H)({"tooltip-loader":!0,active:this.loaderActive&&!this.isImagesUnavailable})}"
					></spinning-loader>
					${this.renderImage()}
				</div>
				${this.renderIcons()}
			</div>`:r.qy`
			<div id="tooltip" ?visible=${this.visible} role="tooltip">${(0,f._)(this.tooltip)}</div>
		`}renderImage(){const e=this.views[this.viewIndex]?this.views[this.viewIndex].url:"";if(this.isImagesUnavailable){const e="/images/icon-camera-closed-fill-solid-padded.svg";return r.qy`<div
				class="tooltip-img"
				style=${(0,b.W)({backgroundImage:`url(${e})`})}
			></div>`}return r.qy`<img
				${(0,E.K)(this.imageElementRef)}
				class="visually-hidden"
				alt=""
				role="presentation"
				@error=${this.findHealthyImage}
				@load=${this.showImage}
			/>
			<div
				?hidden=${this.loaderActive}
				class="tooltip-img"
				style=${(0,b.W)({backgroundImage:e?`url(${e.replace("(","\\(").replace(")","\\)")})`:void 0})}
			></div>`}renderIcons(){return"VIDEO"===this.views[this.viewIndex].category&&this.views[this.viewIndex].url!==A.QW["camera-video-unavailable"]?r.qy`
				<div class="tooltip-video-icon" title="Video" ?visible=${!this.loaderActive}>
					<svg role="presentation" part="icon" aria-hidden="true">
						<use href="${"/images/sprites.svg#play"}"></use>
					</svg>
				</div>
			`:this.views&&this.views?.length>1?r.qy`
				<ul class="tooltip-pagination" ?visible=${!this.loaderActive}>
					${this.views.map(((e,t)=>{const i=!(!e||t!==this.viewIndex);return r.qy`
							<li
								class=${(0,w.H)({active:i,"tooltip-pagination-dot":!0})}
							>
								<div class="btn bullet">
									<div></div>
								</div>
							</li>
						`}))}
				</ul>
			`:r.qy``}findHealthyImage(){this.views&&this.viewIndex<this.views.length-1?this.viewIndex+=1:this.isImagesUnavailable=!0}showImage(){clearTimeout(this.cameraUnavailableTimeoutId),this.isImagesUnavailable=!1,this.loaderActive=!1,this.views&&this.views?.length>1&&(this.slideshowIntervalId=window.setInterval((()=>{this.views&&this.viewIndex<this.views.length-1?this.viewIndex+=1:this.viewIndex=0}),c.VV.cameraTooltipRotateMs||3e3))}setPosition(e,t){this.style.transform=`translate3D(${e}px, ${t}px, 0)`}};k([(0,a.MZ)({type:Boolean})],M.prototype,"visible",2),k([(0,a.MZ)({type:String})],M.prototype,"tooltip",2),k([(0,a.MZ)({type:Array})],M.prototype,"views",2),k([(0,a.MZ)({type:Number})],M.prototype,"viewIndex",2),k([(0,a.MZ)({type:Boolean})],M.prototype,"isImagesUnavailable",2),k([(0,a.MZ)({type:Boolean})],M.prototype,"loaderActive",2),M=k([(0,a.EM)("feature-tooltip")],M);const C=M;class _ extends google.maps.OverlayView{constructor(){super(),this._featureTooltip=new C,google.maps.OverlayView.preventMapHitsFrom(this._featureTooltip)}setMessage(e,t,i,r=!1){if(!e||!t)return void this.hide();this.coords=t,this.resetTooltipState(),this._featureTooltip.tooltip=e;const a=i?.filter((e=>!!e));a?.length&&(this._featureTooltip.views=a),this._featureTooltip.updateComplete.then((()=>{this.draw(r)})),clearTimeout(this._timeout),this._timeout=window.setTimeout((()=>{e&&t&&(this._featureTooltip.visible=!0)}),c.VV.tooltipDelayMs)}resetTooltipState(){this._featureTooltip.loaderActive=!0,this._featureTooltip.isImagesUnavailable=!1,this._featureTooltip.viewIndex=0,this._featureTooltip.views=[]}drawWithCoords(e){this.coords=e,this.draw()}draw(e=!1){if(!this.coords)return;const t=this.getMap();if(!(t&&t instanceof google.maps.Map))throw new Error("`MapFeatureTooltip: draw()` called without map reference");const{x:i,y:r}=this.coords,a=this.getProjection(),s=t.getBounds();if(!s)return;const o=a.fromLatLngToDivPixel(s.getSouthWest()).x,n=a.fromLatLngToDivPixel(s.getNorthEast()).x,l=a.fromLatLngToDivPixel(s.getNorthEast()).y,c=i+o,d=r+l,{offsetWidth:p,offsetHeight:u}=this._featureTooltip;requestAnimationFrame((()=>{const t=c-p>o+window.appDimensions.sidebarWidth,i=c+p<n-window.appDimensions.legendWidth;let r=0;r=t&&i?c<0?c:c-p:t?c-p:i?c:c-p/2;let a=0;a=e?d-15:d>0?d-u:d,this._featureTooltip.setPosition(r,a)}))}hide(){clearTimeout(this._timeout),this._timeout=window.setTimeout((()=>{this._featureTooltip.visible=!1,this.resetTooltipState()}),50)}getIsVisible(){return this._featureTooltip.visible}getCurrentViewIndex(){return this._featureTooltip.viewIndex||0}onAdd(){this.getPanes().floatPane.appendChild(this._featureTooltip)}onRemove(){this._featureTooltip.parentNode&&this._featureTooltip.parentNode.removeChild(this._featureTooltip)}}const x=_;var L=i(87190),I=i(30191),O=i(25447),P=i(93127),N=i(78707),D=i(83002),V=i(83184),U=i(98451),B=i(23356),F=i(47479);var z,q=i(83448),H=i(85385),W=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,G=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?Q(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&W(t,i,s),s},j=(e,t,i)=>(((e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field")})(e,t),i?i.call(e):t.get(e));let Z=class extends((0,s.N)(u.M_)(r.WF)){constructor(){var e;super(...arguments),this.features={},this.simpleFeatures={},this.mouseoverFeatures=[],this.activeLayers=O.bj.activeLayers,this.drawingMode=!1,this.tooltip=new x,this.mouseOnMap=!1,this.googleTrafficLayer=new google.maps.TrafficLayer,this.googleBikeLayer=new google.maps.BicyclingLayer,this.weatherRadarLayer=c.VV.weatherRadar&&(e=c.VV.weatherRadar,new google.maps.ImageMapType({tileSize:new google.maps.Size(d.dn9,d.dn9),opacity:e.opacity,maxZoom:e.maxZoom,getTileUrl({x:t,y:i},r){if(r>e.maxZoom)return"";const a=(0,F.I6)({x:t,y:i+1},r),s=(0,F.I6)({x:t+1,y:i},r);return function(e,t,i){const{xmin:r,ymin:a,xmax:s,ymax:o}=e,{width:n,height:l}=t,c=6e4*i.updateIntervalMinutes,d=Math.floor(Date.now()/c)*c,p=Object.entries({SERVICE:"WMS",VERSION:"1.1.1",REQUEST:"GetMap",LAYERS:"conus_cref_qcd",STYLES:"",WIDTH:n,HEIGHT:l,FORMAT:"image/png",SRS:"EPSG:4326",TRANSPARENT:"TRUE",BBOX:[r,a,s,o],time:d}).reduce(((e,[t,i])=>`${e}${""===e?"?":"&"}${t}=${i.toString()}`),"");return`${i.baseUrl}${p}`}({xmin:a.lng,ymin:a.lat,xmax:s.lng,ymax:s.lat},this.tileSize,e)}})),this.mapType=google.maps.MapTypeId.ROADMAP,this.firstLoad=!0,this.lastZoom=null,this.toggledFarZoom=!1,this.handleLayerZoomChanges=(0,o.A)((e=>{if(this.toggledFarZoom=!1,this.lastZoom&&this.lastZoom<=9&&e>9&&(this.toggledFarZoom=!0),this.lastZoom&&this.lastZoom>9&&e<=9&&(this.toggledFarZoom=!0),null==this.lastZoom)return void(this.lastZoom=e);if(this.lastZoom===e)return;this.lastZoom=e;let t={};t=this.updateMapIcons(e,!0),this.commitFeatureUpdates(t,this.features,!0)}),500,{trailing:!0}),this.isAndroid=/Android/i.test(navigator.userAgent),this.isDebouncing=!1,this.debounceTimeout=setTimeout((()=>{}),0),this.updateMapPositionDebounced=()=>{const e=async()=>{if(!this.isDebouncing){this.isDebouncing=!0;const e=Z.googleMap.getCenter(),t=Z.googleMap.getZoom();if(!e||!t)return;const i={center:e.toJSON(),zoom:t};(0,B.A)(i,Z.position)||(Z.position=i,u.M_.dispatch((0,L.b1)(Z.position)),await u.M_.dispatch((0,N.gX)(!0)),u.M_.dispatch((0,L.ec)(null)))}};clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout((()=>{this.isDebouncing=!1,e()}),c.VV.debounceTime||600)},this.initializeMapDebounced=(0,o.A)((()=>this.initializeMap()),200),this.setLastMouseCoords=e=>{const{top:t}=this.getBoundingClientRect();this.mouseCoords={x:e.clientX,y:e.clientY-t},this.tooltip.getIsVisible()&&this.tooltip.drawWithCoords(this.mouseCoords)},this.setTouchMouseCoords=e=>{this.mouseCoords={x:e.touches[0].clientX,y:e.touches[0].clientY}},this.previousZoom=0,this.previousFeatures="",this.onClickFeature=e=>{this.firstLoad=!0,document.activeElement instanceof HTMLElement&&document.activeElement.blur();const t=e.feature.getId(),i=this.features[t]||this.simpleFeatures[t],r=Object.values(this.features),a=e.feature.getProperty("uri");if(!i)throw new Error("Feature not found");if(!a)return void((0,H.C)()&&i.properties.tooltip&&(clearTimeout(this.tooltipTimeout),setTimeout((()=>{this.tooltip.setMessage(i.properties.tooltip,this.mouseCoords,null,!0),this.tooltipTimeout=setTimeout((()=>{this.tooltip.hide()}),1750)}),250)));u.M_.dispatch({type:d.VB3,id:t,collectionType:a});const s=(0,q.Lf)(i,this.position.zoom,r);if(!i.spidered&&(0,q.Z0)(i)&&"Point"===i.geometry.type){const e={lng:i.geometry.coordinates[0],lat:i.geometry.coordinates[1]};if(u.M_.dispatch((0,L.ec)(e)),s)return}if("Camera"===i.collectionType){const t=e.feature.getProperty("views"),i=this.tooltip.getCurrentViewIndex()||0,r=t?.[i]?.uri;if(r)return void u.M_.dispatch((0,n.oo)(`#${r}`))}if(i.spidered||!s){let t=`/${e.feature.getProperty("uri")}/`;if(e.feature.getProperty("uri").startsWith("event")){t=`/map/${e.feature.getProperty("uri")}/`;const i=(0,p.I3)(u.M_.getState());t=`${t}@${(0,v.A)(i.center.lng)},${(0,v.A)(i.center.lat)},${Math.floor(i.zoom)}`}u.M_.dispatch((0,n.oo)(t))}},this.onMouseoverFeature=e=>{if((0,H.C)()&&(0,H.V)())return;const t=e.feature.getId(),i=this.features[t]||this.simpleFeatures[t];let{tooltip:r,views:a}=i.properties;if(c.VV.spiderfying?.tooltipOverride){const e=Object.values(this.features);!i.spidered&&(0,q.Lf)(i,this.position.zoom,e)&&(r=c.VV.spiderfying.tooltipOverride,a=[])}this.mouseoverFeatures.push({tooltip:r,feature:i}),this.mouseoverFeatures.sort(((e,t)=>t.feature.properties.zIndex-e.feature.properties.zIndex)),this.currentHoverId=this.mouseoverFeatures[0].feature.id,this.currentHoverId&&e.feature.getId()!==this.currentHoverId||this.tooltip.setMessage(r,this.mouseCoords,a);const s=Z.googleMap.getZoom()||0;if(c.k9){const e=i.collectionType===d.Tgm.OversizeLoad;(s>c.k9.zoomLevel||e)&&u.M_.dispatch((0,L.jF)(this.mouseoverFeatures[0]?.feature.properties.uri??null))}else u.M_.dispatch((0,L.jF)(this.mouseoverFeatures[0]?.feature.properties.uri??null))},this.onMouseoutFeature=e=>{this.mouseoverFeatures=this.mouseoverFeatures.filter((t=>t.feature.id!==e.feature.getId())),e.feature.getId()===this.currentHoverId&&this.tooltip.setMessage(this.mouseoverFeatures?.[0]?.tooltip,this.mouseCoords,this.mouseoverFeatures?.[0]?.feature?.views),this.mouseoverFeatures.length||this.tooltip.hide(),u.M_.dispatch((0,L.jF)(this.mouseoverFeatures[0]?.feature.properties.uri??null))},((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,z,document.createElement("div"))}get position(){return Z.position}set position(e){const t=Z.position;(0,B.A)(e,t)||(Z.position=e,this.requestUpdate("position",t))}static get styles(){return[r.AH`
				*:focus:focus-visible {
					outline: rgb(var(--peter-river)) solid 0.25rem;
				}

				.gm-style > div:nth-child(3) {
					border-color: rgb(var(--peter-river)) !important;
					border-width: 0.25rem !important;
				}

				.gm-style > div:nth-child(14) > div {
					left: initial !important;
					right: 0 !important;
					bottom: 12px !important;
				}

				.gm-style > div:nth-child(14) > div > a:focus:focus-visible {
					outline: rgb(var(--peter-river)) auto;
				}
			`]}updated(e){e.has("activeLayers")&&Z.googleMap&&this.toggleMapLayers(),e.has("mapType")&&Z.googleMap&&Z.googleMap.setMapTypeId(this.mapType),e.has("position")&&this.position&&!Z.googleMap?this.initializeMapDebounced():e.has("position")&&this.position&&(Z.googleMap.setZoom(this.position.zoom),Z.googleMap.panTo(this.position.center),this.handleLayerZoomChanges(this.position.zoom)),e.has("drawingMode")&&(this.drawingMode?(this.onMapFeaturesUpdated({},this.features),this.contextMenu?.hide()):this.onMapFeaturesUpdated(this.features,{}))}async onMapFeaturesUpdated(e,t={}){const i=await Z.getBounds(),r=await Z.getZoom(),a=await(async(e,t,i)=>{const r={},a=.025;try{if(c.Hp.length)for(const s of c.Hp){if(!i[s.layer]){h[s.file]=[],m=!1;break}if(!s.zoom||s.zoom<e){let e=[];try{h[s.file]?.length?e=h[s.file]:null!=g[s.file]?(e=await g[s.file],h[s.file]=e):(g[s.file]=(async()=>{const t=await fetch(s.file);return e=await t.json(),e})(),e=await g[s.file],h[s.file]=e,setTimeout((()=>{delete h[s.file],delete g[s.file]}),6e4)),e.forEach(((e,i)=>{"Error"!==e.tooltip&&e.coordinates[0]<t.east+a&&e.coordinates[0]>t.west-a&&e.coordinates[1]<t.north+a&&e.coordinates[1]>t.south-a&&(r[`${s.id_prefix}${i}`]={id:`${s.id_prefix}${i}`,type:"Feature",state:p.qX.NORMAL,collectionType:d.Tgm.Custom,properties:{icon:{url:e.icon||s.icon.url,scaledSize:{width:s.icon.w,height:s.icon.h},anchor:{x:s.icon.w/2,y:s.icon.h/2}},zIndex:4,tooltip:`${e.tooltip}`,uri:s.uri?`${s.uri}/${e.id}`:""},geometry:{type:"Point",coordinates:[...e.coordinates]}})}))}catch(e){m||(m=!0,u.Ay.dispatch({type:d.j2Q,error:{type:"Error",message:`The ${s.layer} layer is currently unavailable.`}})),h[s.file]=[{tooltip:"Error",coordinates:[0,0]}]}}}}catch(e){console.error(e)}return r})(r,i,this.activeLayers);let s={...e,...a};Object.keys(this.features).length&&this.firstLoad&&(s={...this.updateMapIcons(r,!0),...a},this.firstLoad=!1),Object.entries(s).forEach((([e,t])=>{this.mouseOnMap||(t.properties.title=t.properties?.tooltip?.replace(/<[^>]*>/g,"")||t.properties.title||"Map Feature")})),this.commitFeatureUpdates(s,t),this.simpleFeatures=a}commitFeatureUpdates(e,t,i=!1){Object.entries({...t,...this.simpleFeatures}).forEach((([t])=>{if(!e[t]){const e=Z.googleMap.data.getFeatureById(t);if(!e)return;Z.googleMap.data.remove(e),this.mouseoverFeatures=this.mouseoverFeatures.filter((t=>t.feature.id!==e.getId()));const i=this.mouseoverFeatures[0]?.feature?.views;this.tooltip.setMessage(this.mouseoverFeatures[0]?.tooltip,this.mouseCoords,i)}})),Object.entries({...e,...this.simpleFeatures}).forEach((([e,r])=>{const a=t[e]||this.simpleFeatures[e];if(a){if(r.state!==a.state){const t=Z.googleMap.data.getFeatureById(e);if(!t)return void Z.googleMap.data.addGeoJson(r);Z.googleMap.data.overrideStyle(t,r.properties)}else if(i){const t=Z.googleMap.data.getFeatureById(e);if(!t)return void Z.googleMap.data.addGeoJson(r);Z.googleMap.data.overrideStyle(t,r.properties)}}else Z.googleMap.data.addGeoJson(r)}))}updateMapIcons(e,t=!1){const i={};return Object.keys(this.features).forEach((t=>{const r=this.features[t],a=JSON.parse(JSON.stringify(r));r.state!==p.qX.ACTIVE&&c.k9&&(0,y.HV)(a)&&e<9?(a.collectionType===d.Tgm.Cluster?a.properties.icon.scaledSize={height:c.k9.clusters.height,width:c.k9.clusters.width}:r.properties?.priority&&r.properties?.priority<=c.k9.priority.level?a.properties.icon.scaledSize={height:c.k9.priority.height,width:c.k9.priority.width}:Object.keys(c.k9.resolvers).forEach((e=>{if(c.k9&&r.collectionType===e){a.properties.icon.scaledSize={height:c.k9.resolvers[e].height,width:c.k9.resolvers[e].width};const t=c.k9.resolvers[e].smallImageUrl||a.properties.icon.url;a.properties.icon.url=t}})),a.properties.icon.anchor={x:a.properties.icon.scaledSize.width/2,y:a.properties.icon.scaledSize.height/2},this.isAndroid&&!window.location.href.includes("localhost")&&a.properties.icon.url.endsWith(".svg")&&(a.properties.icon.url=`${a.properties.icon.url}.png`),i[a.id]=a):(this.isAndroid&&(0,y.HV)(r)&&!window.location.href.includes("localhost")&&r.properties.icon.url.endsWith(".svg")&&(r.properties.icon.url=`${r.properties.icon.url}.png`),i[r.id]=r)})),t?i:(this.toggledFarZoom&&this.commitFeatureUpdates(i,this.features,!0),{})}static getMap(){return Z.mapResolving}static async getBounds(){if(await Z.mapResolving,!Z.position)throw new Error("`getBounds()` called before position set on `AppMap`");return(0,P.A)(Z.position)}static async getZoom(){return(await Z.mapResolving).getZoom()}static async setZoom(e){const t=await Z.mapResolving;t.getZoom()!==e&&(t.setZoom(e),u.M_.dispatch((0,N.Dl)(Date.now())))}static async setPosition(e){const t=await Z.mapResolving;t.setZoom(e.zoom),t.panTo(e.center)}initializeMap(){let e;const t=!0===c.VV.androidOnlyVector&&/Android/i.test(navigator.userAgent);e=c.VV.mapID&&(!0!==c.VV.androidOnlyVector||t)?{center:this.position.center,zoom:this.position.zoom,maxZoom:d.Klp,minZoom:d.u0R,disableDefaultUI:!0,scaleControl:!0,clickableIcons:!1,mapId:c.VV.mapID}:{center:this.position.center,zoom:this.position.zoom,maxZoom:d.Klp,minZoom:d.u0R,disableDefaultUI:!0,scaleControl:!0,clickableIcons:!1,styles:c.VV.styles},Z.googleMap=new google.maps.Map(j(this,z),e),Z.googleMap.data.setStyle((e=>{const t={};return e.forEachProperty(((e,i)=>{t[i]=e})),t})),Z.googleMap.addListener("bounds_changed",this.updateMapPositionDebounced),Z.googleMap.addListener("click",(()=>{document.activeElement instanceof HTMLElement&&document.activeElement.blur(),u.M_.dispatch((0,L.ec)(null))})),Z.googleMap.addListener("dragstart",(()=>{document.activeElement instanceof HTMLElement&&document.activeElement.blur(),this.dispatchEvent(new CustomEvent("map-dragstart"))})),document.addEventListener("mousemove",this.setLastMouseCoords),(0,H.C)()&&document.addEventListener("touchstart",this.setTouchMouseCoords),this.addEventListener("click",(()=>{const e=j(this,z).querySelector('div[tabindex="0"]');e?.focus()})),j(this,z).addEventListener("mousemove",(()=>{this.mouseOnMap||(this.mouseOnMap=!0,Z.googleMap.data.forEach((e=>{e.removeProperty("title"),Z.googleMap.data.overrideStyle(e,{title:void 0})})))})),Z.googleMap.data.addListener("click",this.onClickFeature),Z.googleMap.data.addListener("mouseover",this.onMouseoverFeature),Z.googleMap.data.addListener("mouseout",this.onMouseoutFeature),this._initContextMenu(Z.googleMap),this.tooltip.setMap(Z.googleMap),this.onMapFeaturesUpdated(this.features),Z.mapResolver(Z.googleMap),this.toggleMapLayers()}_initContextMenu(e){this.contextMenu=new D.A([{title:"Search visible area",callback:()=>{u.M_.dispatch((0,V.mG)())}},{title:(0,l.A)("map.startRoute","Start route here"),callback:function(e){u.M_.dispatch((0,U.Zr)(e.clickedLatLng))}},{title:(0,l.A)("map.endRoute","End route here"),callback:function(e){u.M_.dispatch((0,U.n$)(e.clickedLatLng))}}]),this.contextMenu.setMap(e),Z.googleMap.addListener("rightclick",(e=>{!this.drawingMode&&e.latLng&&this.contextMenu?.show(e.latLng.toJSON(),!0)})),Z.googleMap.data.addListener("rightclick",(e=>{!this.drawingMode&&e.latLng&&(this.contextMenu?.show(e.latLng.toJSON(),!0),this.tooltip.hide())}))}static async reloadTiles(){const e=await Z.mapResolving,t=e.getMapTypeId();t===google.maps.MapTypeId.HYBRID?e.setMapTypeId(google.maps.MapTypeId.TERRAIN):e.setMapTypeId(google.maps.MapTypeId.HYBRID),e.setMapTypeId(t)}render(){return j(this,z)}async addPlowHistory(){if(!c.Hu)return;u.M_.dispatch({type:d.h_8,action:{show:!0}});const e=await async function(){if(c.Hu)try{const e=await fetch(`${c.Hu.url}?bbox=${c.Hu.wholeMapBounds.join(",")}`);return(await e.json()).features}catch(e){return u.Ay.dispatch({type:d.j2Q,error:{type:d.i65.INTERNAL_SERVER_ERROR}}),[]}return[]}();let t=!1;e.forEach((e=>{(0,I.Ap)(this.activeLayers,c.j9).includes(c.er.PLOW_HISTORY)?Z.googleMap.data.addGeoJson({...e,properties:{...e.properties,id:`PH-${e.id}`,strokeWeight:c.Hu?.strokeWeight||2,strokeOpacity:c.Hu?.opacity||.75,clickable:!1,tooltip:null}}):t=!0,u.M_.dispatch({type:d.h_8,action:{show:!1}})})),t&&Z.googleMap.data.forEach((e=>{e.getProperty("id")?.toString()?.includes("PH-")&&Z.googleMap.data.remove(e)}))}async toggleMapLayers(){const e=(0,I.Ap)(this.activeLayers,c.j9),t=e.includes(d.f2p.TRAFFIC_SPEED);t&&!this.googleTrafficLayer.getMap()?this.googleTrafficLayer.setMap(await Z.mapResolving):!t&&this.googleTrafficLayer.getMap()&&this.googleTrafficLayer.setMap(null),e.includes(c.er.BIKE)?this.googleBikeLayer.setMap(await Z.mapResolving):this.googleBikeLayer.setMap(null);const i=e.includes(d.f2p.WEATHER_RADAR);this.weatherRadarLayer&&i&&!Z.googleMap.overlayMapTypes.getAt(0)&&(Z.googleMap.overlayMapTypes.push(this.weatherRadarLayer),u.M_.dispatch((0,N.Dl)(Date.now()))),this.weatherRadarLayer&&!i&&Z.googleMap.overlayMapTypes.getAt(0)&&Z.googleMap.overlayMapTypes.removeAt(0),e.includes(c.er.PLOW_HISTORY)?(await Z.mapResolving||console.error("Map unavailable"),c.Hu&&this.addPlowHistory()):Z.googleMap.data.forEach((e=>{e.getProperty("id")?.toString()?.includes("PH-")&&Z.googleMap.data.remove(e)}))}static async forceWeatherRadarRefresh(){const e=await Z.mapResolving;e.setZoom(e.getZoom()),u.M_.dispatch((0,N.Dl)(Date.now()))}stateChanged(e){const t=(0,p.iG)(e);Object.keys(t).length?(Object.keys(t).forEach((e=>{this.features[e]||(this.firstLoad=!0)})),this.onMapFeaturesUpdated(t,this.features),this.features=t):0===Object.keys(t).length&&(this.firstLoad=!0,this.onMapFeaturesUpdated(t,this.features),this.features=t),this.position=(0,p.I3)(e),this.mapType=e.map.mapType,this.activeLayers=e.app.activeLayers,this.drawingMode=e.search.drawingMode}};z=new WeakMap,Z.mapResolving=new Promise((e=>{Z.mapResolver=e})),G([(0,a.MZ)({type:Object})],Z.prototype,"features",2),G([(0,a.MZ)({type:Object})],Z.prototype,"activeLayers",2),G([(0,a.MZ)({type:Boolean})],Z.prototype,"drawingMode",2),G([(0,a.MZ)({type:String})],Z.prototype,"mapType",2),G([(0,a.MZ)({type:Object})],Z.prototype,"position",1),Z=G([(0,a.EM)("app-map")],Z);const Y=Z},78563:(e,t,i)=>{"use strict";i(33106);var r=i(92942),a=i.n(r),s=i(71413),o=i(52706),n=i(56599),l=i(46660),c=i(16083),d=i(30555),p=i(5218),u=i(56089),h=i(2096),g=i(18211);const m=(e,t)=>{const i=e?.split("#")?.[1]||"";return`/@${(0,g.A)(t.mapPosition.center.lng)},${(0,g.A)(t.mapPosition.center.lat)},${Math.floor(t.mapPosition.zoom)}?show=${t.activeLayerSlugs.join(",")}${i?`#${i}`:""}`};var y=(e=>(e[e.BACK_BUTTON=0]="BACK_BUTTON",e[e.CLICK=1]="CLICK",e[e.FIRST_RUN=2]="FIRST_RUN",e))(y||{});var v=i(80027),b=i(66003),f=i(78707),w=i(34132),S=i(30153),A=i(9748);var E=i(10388),$=i(52850),T=i(24634),R=Object.defineProperty,k=Object.getOwnPropertyDescriptor,M=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?k(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&R(t,i,s),s};const C=window.localStorage.setItem.bind(window.localStorage),_=window.sessionStorage.setItem.bind(window.sessionStorage);let x=class extends((0,n.N)(E.Ay)(s.WF)){constructor(){super(...arguments),this.allWhitelists=v.v7?{"allow-all":[...v.v7.whitelist.necessary,...v.v7.whitelist.functional,...v.v7.whitelist.analytic],analytic:[...v.v7.whitelist.necessary,...v.v7.whitelist.analytic],functional:[...v.v7.whitelist.necessary,...v.v7.whitelist.functional],necessary:[...v.v7.whitelist.necessary]}:{"allow-all":[],analytic:[],functional:[],necessary:[]},this.show=!1,this.showCustom=!1}get whitelist(){return this.allWhitelists[this.gdpr||"necessary"]}static get styles(){return[T.A,s.AH`
				.gdpr {
					box-sizing: border-box;
					position: fixed;
					bottom: 0;
					left: 0;
					width: 100vw;
					padding: 10px 40px 20px 40px;
					color: rgb(var(--clouds));
					background: rgb(var(--darker));
					font-size: 16px;
					z-index: 15;
					transition: all 0.25s ease-in-out;
					display: block;
				}

				.gdpr.hidden {
					padding: 0 60px;
					overflow: hidden;
					transform: translate(0, 100%);
				}

				.gdpr h2 {
					display: flex;
					align-items: center;
					justify-content: space-between;
					fill: rgb(var(--clouds));
				}

				.gdpr-custom {
					overflow: hidden;
					max-height: 0;
					transition: all 0.5s ease-in-out;
					padding-top: 1.2rem;
				}

				.gdpr-custom-inner {
					height: 40vh;
					padding-right: 15px;
					overflow-y: scroll;
				}

				.gdpr-custom-inner::-webkit-scrollbar {
					background: rgb(var(--darker));
				}

				.gdpr-custom-inner::-webkit-scrollbar-thumb {
					background: #ccc;
					border-radius: 10px;
				}

				.gdpr-custom.show {
					max-height: 50vh;
				}

				.gdpr-btn {
					border-color: transparent;
					border-style: solid;
					border-radius: 4px;
					padding: 10px 15px;
					font-size: 14px;
					color: rgb(var(--clouds));
					line-height: 1rem;
					margin-top: 15px;
					margin-right: 15px;
				}

				.gdpr-toggle {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.gdpr-menu {
					position: relative;
					bottom: 1px;
				}

				.gdpr-toggle h3 {
					margin: 5px 0;
				}

				.gdpr-toggle .green-text {
					color: #1cf399;
				}

				.gdpr-btn:hover {
					cursor: pointer;
				}

				.gdpr-btn.accept {
					background-color: ${(0,s.iz)(v.v7?.allowAllButton.backgroundColor)};
				}

				.gdpr-btn.customize {
					background-color: ${(0,s.iz)(v.v7?.customize.buttonBackgroundColor)};
				}

				.gdpr-btn.deny {
					background-color: ${(0,s.iz)(v.v7?.denyAllButton.backgroundColor)};
				}

				.gdpr-btn.learn {
					background-color: ${(0,s.iz)(v.v7?.infoButton.backgroundColor)};
				}

				.gdpr-btn.save {
					background-color: ${(0,s.iz)(v.v7?.saveButton.backgroundColor)};
				}

				.gdpr-btn.learn:hover {
					color: rgb(var(--clouds));
				}

				/* The switch - the box around the slider */
				.switch {
					position: relative;
					display: inline-block;
					width: 60px;
					height: 34px;
				}

				/* Hide default HTML checkbox */
				.switch input {
					opacity: 0;
					width: 0;
					height: 0;
				}

				/* The slider */
				.slider {
					position: absolute;
					cursor: pointer;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background-color: #ccc;
					-webkit-transition: 0.4s;
					transition: 0.4s;
				}

				.slider:before {
					position: absolute;
					content: '';
					height: 26px;
					width: 26px;
					left: 4px;
					bottom: 4px;
					background-color: rgb(var(--clouds));
					-webkit-transition: 0.4s;
					transition: 0.4s;
				}

				input[checked] + .slider {
					background-color: #2196f3;
				}

				input:focus + .slider {
					box-shadow: 0 0 1px #2196f3;
				}

				input[checked] + .slider:before {
					-webkit-transform: translateX(26px);
					-ms-transform: translateX(26px);
					transform: translateX(26px);
				}

				/* Rounded sliders */
				.slider.round {
					border-radius: 34px;
				}

				.slider.round:before {
					border-radius: 50%;
				}

				@media (max-width: ${(0,s.iz)($.EA.PHONE_XL)}) {
					.gdpr {
						padding: 15px 10px;
					}
				}
			`]}onCheckAnalytic(){"allow-all"===this.gdpr||"analytic"===this.gdpr?(this.gdpr="allow-all"===this.gdpr?"functional":"necessary",window[`ga-disable-${v.s1.analyticsTag}`]=!0,this.whitelistKeys()):(this.gdpr="functional"===this.gdpr?"allow-all":"analytic",window[`ga-disable-${v.s1.analyticsTag}`]=!1),C("gdpr",this.gdpr)}onCheckFunctional(){"allow-all"===this.gdpr||"functional"===this.gdpr?(this.gdpr="allow-all"===this.gdpr?"analytic":"necessary",this.whitelistKeys()):this.gdpr="analytic"===this.gdpr?"allow-all":"functional",C("gdpr",this.gdpr)}onClickAllowAll(){this.gdpr="allow-all",C("gdpr",this.gdpr),this.show=!1,this.showCustom=!1,window[`ga-disable-${v.s1.analyticsTag}`]=!1}onClickDenyAll(){this.gdpr="necessary",C("gdpr",this.gdpr),this.show=!1,this.showCustom=!1,window[`ga-disable-${v.s1.analyticsTag}`]=!0,this.whitelistKeys()}onClickSave(){this.show=!1,this.showCustom=!1}onClickCustomize(){this.showCustom=!this.showCustom}whitelistKeys(){for(const e of[window.localStorage,window.sessionStorage]){const t=[];for(let i=0;i<e.length;i++){const r=e.key(i);r&&!this.whitelist.some((e=>e.test(r)))&&t.push(r)}t.forEach((t=>e.removeItem(t)))}document.cookie.split(";").map((e=>e.split("=")[0])).filter((e=>!this.whitelist?.some((t=>t.test(e))))).forEach((e=>{document.cookie=`${e}=;path=/;max-age=0`}))}connectedCallback(){if(super.connectedCallback(),!v.v7?.active)return;this.gdpr=localStorage.getItem("gdpr"),this.show=null==this.gdpr,this.whitelistKeys();const e=e=>(t,i)=>{this.whitelist.some((e=>e.test(t)))&&e(t,i)};window.localStorage.setItem=e(C),window.sessionStorage.setItem=e(_),window.addEventListener("show-gdpr",(()=>{this.show=!0}))}renderCookieList(e){return s.qy`
			<ul>
				${e.map((({description:e,name:t})=>s.qy`<li><b>${t}</b> - ${e}</li>`))}
			</ul>
		`}render(){return v.v7?s.qy` <div
					class="gdpr ${this.show?"show":"hidden"}"
					id="gdpr"
					aria-hidden=${!this.show}
			  >
					<h2>${(0,p._)(v.v7.title)}</h2>

					<p>${(0,p._)(v.v7.description)}</p>

					<div class="actions">
						<a href="${v.v7.infoButton.href}" class="gdpr-btn learn" target="_blank"
							>${v.v7.infoButton.text}</a
						>

						<button class="gdpr-btn accept" id="gdprAccept" @click=${this.onClickAllowAll}>
							${v.v7.allowAllButton.text}
						</button>

						<button class="gdpr-btn deny" id="gdprDeny" @click=${this.onClickDenyAll}>
							${v.v7.denyAllButton.text}
						</button>

						<button class="gdpr-btn customize" id="gdprCustom" @click=${this.onClickCustomize}>
							<span class="gdpr-menu">&#9776;</span>
							${v.v7.customize.buttonText}
						</button>
					</div>

					<div id="gdprCustomizer" class="gdpr-custom ${this.showCustom?"show":""}">
						<hr />

						<div class="gdpr-custom-inner">
							<h2>${(0,p._)(v.v7.customize.title)}</h2>
							<p>${(0,p._)(v.v7.customize.description)}</p>

							<hr />

							<div class="gdpr-toggle">
								<h3>${(0,p._)(v.v7.sections.necessary.title)}</h3>
								<h3 class="green-text">Always Active</h3>
							</div>

							${(0,p._)(v.v7.sections.necessary.description)}
							${this.renderCookieList(v.v7.sections.necessary.cookies)}

							<hr />

							<div class="gdpr-toggle">
								<h3>${(0,p._)(v.v7.sections.functional.title)}</h3>
								<label class="switch" for="gdprFunctionToggle">
									<input
										id="gdprFunctionToggle"
										type="checkbox"
										?checked="${"allow-all"===this.gdpr||"functional"===this.gdpr}"
										@change=${this.onCheckFunctional}
									/>
									<span class="slider round"></span>
								</label>
							</div>

							${(0,p._)(v.v7.sections.functional.description)}
							${this.renderCookieList(v.v7.sections.functional.cookies)}

							<hr />

							<div class="gdpr-toggle">
								<h3>${(0,p._)(v.v7.sections.analytic.title)}</h3>
								<label class="switch" for="gdprGAToggle">
									<input
										id="gdprGAToggle"
										type="checkbox"
										?checked="${"allow-all"===this.gdpr||"analytic"===this.gdpr}"
										@change=${this.onCheckAnalytic}
									/>
									<span class="slider round"></span>
								</label>
							</div>

							${(0,p._)(v.v7.sections.analytic.description)}
							${this.renderCookieList(v.v7.sections.analytic.cookies)}
						</div>

						<div class="actions">
							<button class="gdpr-btn save" id="gdprCustomSave" @click=${this.onClickSave}>
								${v.v7.saveButton.text}
							</button>
						</div>
					</div>
			  </div>`:s.qy``}};M([(0,o.MZ)({type:Boolean})],x.prototype,"show",2),M([(0,o.MZ)({type:Boolean})],x.prototype,"showCustom",2),M([(0,o.MZ)({type:String})],x.prototype,"gdpr",2),x=M([(0,o.EM)("app-gdpr")],x);var L=i(35135),I=i(63822),O=i(88014),P=i(98451),N=i(95050),D=i(56188);Object.defineProperty,Object.getOwnPropertyDescriptor;let V=class extends s.WF{static get styles(){return[T.A,s.AH`
				:host {
					--bg-color: rgb(var(--peter-river));
					--border-color: rgb(var(--belize-hole));
					--text-color: #fff;

					display: flex;
					align-items: center;
					width: max-content;
					background-color: var(--bg-color);
					max-width: 360px;
					white-space: nowrap;
					border-radius: var(--border-radius);
					border: var(--border-width) solid var(--border-color);
					box-shadow: var(--shadow-sm);
					text-align: left;
					text-transform: initial;
					color: var(--text-color);
					fill: white;
					font-size: var(--smaller);
				}
				.content {
					padding: var(--gap) 0.25rem var(--gap) 1rem;
				}
				.content a {
					text-decoration: underline;
					color: var(--text-color);
				}
			`]}render(){return s.qy`
			<div class="content">
				<slot></slot>
			</div>
			<button class="btn btn-sm close-btn" @click="${this.handleClose}" aria-label="Close">
				<svg role="presentation" class="btn_icon btn-sm_icon" aria-label="Close">
					<use href="${"/images/sprites.svg#close"}"></use>
				</svg>
			</button>
		`}handleClose(){this.dispatchEvent((0,D.h)($.G4t))}};V=((e,t,i,r)=>{for(var a,s=t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=a(s)||s);return s})([(0,o.EM)("tooltip-closable")],V);var U=i(38155),B=i(10427),F=i(5470),z=i(32701),q=i(56365),H=i(68050),W=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,G=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?Q(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&W(t,i,s),s};let j=class extends s.WF{constructor(){super(...arguments),this.isFocused=!1,this.dropdownExpanded=!1,this.dropdownIndex=-1,this.menuListRef=(0,U._)()}static get styles(){return[z.A,T.A,q.A,F.A]}render(){return s.qy`
			<dropdown-menu
				slot="prefix"
				position="${B.nU.RIGHT}"
				.expanded=${this.dropdownExpanded}
				@show="${this.handleDropdownShow}"
				@hide="${this.handleDropdownHide}"
			>
				<button
					slot="toggler"
					class=${(0,d.H)({btn:!0,"btn-light":!0,"btn-header":!0,"btn-half-pad-left--sm":!0,fadein:!0,"btn-light--inverted":this.isFocused})}
					title="Additional item menu"
					role="menuitem"
					aria-label="Additional item menu"
					aria-haspopup="true"
					aria-controls="menuWrap"
					aria-expanded=${this.dropdownExpanded}
				>
					<svg role="presentation" class="btn_icon" aria-hidden="true">
						<use href="${"/images/sprites.svg#hamburger"}"></use>
					</svg>
				</button>
				<div ${(0,U.K)(this.menuListRef)} role="menu" id="menuWrap">
					${v.U2.linkSelection.links.map(((e,t)=>e instanceof H.F7?s.qy`
									<a
										role="menuitem"
										href="${e.href}"
										target="${(0,L.J)(e.target)}"
										rel="${(0,L.J)(e.target?"noopener noreferrer":void 0)}"
										class="menu_item ${t===this.dropdownIndex?"menu_item_active":""}"
										aria-label=${e.ariaLabel}
										>${e.title}</a
									>
							  `:s.qy`<hr aria-hidden="true" />`))}
				</div>
			</dropdown-menu>
		`}connectedCallback(){super.connectedCallback(),document.addEventListener("keyup",(e=>{window.location.hash.startsWith(`#${$.Gqw.TOUR}`)||this.dropdownExpanded&&"Escape"===e.key&&(this.dropdownExpanded=!1)}))}handleDropdownShow(){this.dropdownExpanded=!0}handleDropdownHide(){this.dropdownExpanded=!1,this.dropdownIndex=-1}};G([(0,o.MZ)({type:Boolean,reflect:!0,attribute:"is-focused"})],j.prototype,"isFocused",2),G([(0,o.MZ)({type:Boolean})],j.prototype,"dropdownExpanded",2),G([(0,o.MZ)({type:Number})],j.prototype,"dropdownIndex",2),j=G([(0,o.EM)("header-hamburger-menu")],j);var Z=i(85564),Y=i(5366),K=Object.defineProperty,J=Object.getOwnPropertyDescriptor,X=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?J(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&K(t,i,s),s};const ee="crc:help-menu-interaction";let te=class extends s.WF{constructor(){super(...arguments),this.isFocused=!1,this.dropdownExpanded=!1,this.dropdownIndex=-1,this.menuListRef=(0,U._)(),this.dropdownButtonRef=(0,U._)(),this.menuEntry=e=>e instanceof H.G?s.qy`<hr aria-hidden="true" />`:e.special===H._A.FEEDBACK?s.qy`
				<popper-container
					role="menuitem"
					position="${Y.kl.BOTTOM}"
					class="tutorial-popper menu-item-wrapper"
					?is-visible="${this.tutorialStep===$.QeQ.FEEDBACK&&this.dropdownExpanded}"
				>
					<a
						slot="toggler"
						href="${e.href}"
						@click=${this.gtagClick(e.title)}
						class="${(0,d.H)({menu_item:!0,"tutorial-spotlight":this.tutorialStep===$.QeQ.FEEDBACK&&e.special===H._A.FEEDBACK})}"
						target="${(0,L.J)(e.target)}"
						rel="${(0,L.J)(e.target?"noopener noreferrer":void 0)}"
						aria-label=${e.ariaLabel}
						role="menuitem"
					>
						${e.title}
					</a>
					<slot name="tutorial-feedback"> </slot>
				</popper-container>
			`:s.qy`
			<div class="menu-item-wrapper" role="menuitem">
				<a
					href="${e.href}"
					@click=${this.gtagClick(e.title)}
					class="menu_item"
					target="${(0,L.J)(e.target)}"
					rel="${(0,L.J)(e.target?"noopener noreferrer":void 0)}"
					aria-label=${e.ariaLabel}
				>
					${e.title}
				</a>
			</div>
		`}static get styles(){return[z.A,T.A,q.A,F.A,Z.A,s.AH`
				@media (min-width: ${(0,s.iz)($.EA.DESKTOP)}) {
					.hidden-md {
						display: none;
					}
				}
			`]}render(){return s.qy`
			<dropdown-menu
				id="header-help"
				?force-expanded=${this.tutorialStep===$.QeQ.FEEDBACK}
				slot="prefix"
				position="${B.nU.RIGHT}"
				.expanded=${this.dropdownExpanded||this.tutorialStep===$.QeQ.FEEDBACK}
				@show=${this.onHelpShow}
				@hide=${this.onHelpHide}
			>
				<button
					${(0,U.K)(this.dropdownButtonRef)}
					slot="toggler"
					class=${(0,d.H)({btn:!0,"btn-light":!0,"btn-header":!0,fadein:!0,"btn-light--inverted":this.isFocused,"btn-half-pad-left--sm":!0,"btn-half-pad-right--sm":!0})}
					title="Help menu"
					role="menuitem"
					aria-label="Help Menu"
					aria-haspopup="true"
					aria-controls="helpMenuWrap"
					aria-expanded=${this.dropdownExpanded||this.tutorialStep===$.QeQ.FEEDBACK}
				>
					<svg role="presentation" class="btn_icon hidden-md" aria-hidden="true">
						<use href=${"/images/sprites.svg#help"}></use>
					</svg>
					<span class="btn-label--lg" aria-hidden="true">
						${v.xQ.linkSelection.title}
					</span>
				</button>
				<div id="helpMenuWrap" role="menu" ${(0,U.K)(this.menuListRef)}>
					${v.xQ.linkSelection.links.map(this.menuEntry)}
				</div>
			</dropdown-menu>
		`}connectedCallback(){super.connectedCallback(),document.addEventListener("keyup",(e=>{window.location.hash.startsWith(`#${$.Gqw.TOUR}`)||this.dropdownExpanded&&"Escape"===e.key&&(this.dropdownExpanded=!1)}))}onHelpShow(){this.dispatchEvent((0,D.h)(ee,{detail:{interaction:"open menu"}})),this.dropdownExpanded=!0}onHelpHide(){this.dispatchEvent((0,D.h)(ee,{detail:{interaction:"close menu"}})),this.dropdownExpanded=!1,this.dropdownIndex=-1}gtagClick(e){return()=>this.dispatchEvent((0,D.h)(ee,{detail:{interaction:e}}))}};X([(0,o.MZ)({type:Boolean,reflect:!0,attribute:"is-focused"})],te.prototype,"isFocused",2),X([(0,o.MZ)({type:String,attribute:"tutorial-step"})],te.prototype,"tutorialStep",2),X([(0,o.MZ)({type:Boolean})],te.prototype,"dropdownExpanded",2),X([(0,o.MZ)({type:Number})],te.prototype,"dropdownIndex",2),te=X([(0,o.EM)("header-help-menu")],te);var ie=i(21379),re=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,se=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?ae(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&re(t,i,s),s};let oe=class extends((0,n.N)(E.M_)(s.WF)){constructor(){super(...arguments),this.isFocused=!1,this.dropdownExpanded=!1,this.dropdownIndex=-1,this.showExpiredSession=!1,this.isLoginSuccess=!1,this.showLogout=!1,this.menuListRef=(0,U._)()}static get styles(){return[z.A,T.A,q.A,F.A,s.AH`
				.account-button-label {
					display: none;
				}

				@media (min-width: ${(0,s.iz)($.EA.DESKTOP)}) {
					.account-button-label {
						display: block;
					}

					.table-view-label {
						display: block;
					}
				}
			`]}render(){return s.qy`
			<popper-container
				id="user-account-button"
				position="${Y.kl.BOTTOM}"
				class=${(0,d.H)({"tutorial-popper":!0,"tutorial-popper--active":this.tutorialStep===$.QeQ.USER_ACCOUNT,fadein:!0,"menu-item-wrapper":!0})}
				?is-visible="${this.tutorialStep===$.QeQ.USER_ACCOUNT}"
			>
				${this.account?s.qy`
							<dropdown-menu
								id="headerAccount"
								slot="toggler"
								role="menu"
								position="${B.nU.RIGHT}"
								@show="${this.handleDropdownShow}"
								@hide="${this.handleDropdownHide}"
								.expanded=${this.dropdownExpanded}
							>
								${this.renderUserAccountButton()}

								<div ${(0,U.K)(this.menuListRef)}>
									<a
										role="menuitem"
										href="#${$.Gqw.ACCOUNT}/${`${$.Bjw.SETTINGS}`}"
										class="menu_item"
									>
										Edit Profile
									</a>
									<a
										role="menuitem"
										href="#${$.Gqw.ACCOUNT}/${`${$.Bjw.ALERTS}`}"
										class="menu_item"
									>
										Edit Alerts
									</a>
									${v.Vu?.includeDialInSettings?s.qy`<a
												role="menuitem"
												href="#${$.Gqw.ACCOUNT}/${`${$.Bjw.DIAL_IN}`}"
												class="menu_item"
										  >
												Edit Dial In
										  </a>`:s.qy``}
									<a role="menuitem" href="#" class="menu_item" @click=${this.logout}> Sign Out </a>
								</div>
							</dropdown-menu>
					  `:this.renderUserAccountButton()}
				${v.BQ.welcome.steps.account?s.qy`
							<tutorial-bubble
								id="tutorial-user-account"
								position=${Y.kl.BOTTOM}
								slug=${$.QeQ.USER_ACCOUNT}
							>
								<h2 slot="title">${v.BQ.welcome.steps.account.title}</h2>
								<div slot="content">
									${(0,p._)(v.BQ.welcome.steps.account.content)}
								</div>
								<div slot="next-button-label">NEXT TIP</div>
							</tutorial-bubble>
					  `:void 0}
			</popper-container>
		`}renderUserAccountButton(){let e=this.your511HeaderText();return null!=v.RQ.headerAccountButton.label&&(e+=`, ${v.RQ.headerAccountButton.label}`),s.qy`
			<popper-container
				slot="toggler"
				position=${Y.kl.BOTTOM}
				class="account-messages"
				?is-visible=${!this.tutorialStep&&(this.showExpiredSession||this.isLoginSuccess||this.showLogout)}
			>
				<button
					slot="toggler"
					type="button"
					title=${(0,L.J)(v.RQ.headerAccountButton.label)}
					aria-label=${e}
					aria-haspopup="true"
					@click=${this.login}
					class=${(0,d.H)({btn:!0,"btn-light":!0,"btn-header":!0,"btn-half-pad-right--sm":!0,"btn-light--enabled":!!this.account&&!this.isFocused,"btn-light--inverted":this.isFocused,"tutorial-spotlight":this.tutorialStep===$.QeQ.USER_ACCOUNT})}
				>
					<svg role="presentation" class="btn_icon" aria-hidden="true">
						<use href="${v.RQ.headerAccountButton.icon}"></use>
					</svg>
					<p class="btn-label account-button-label">${this.your511HeaderText()}</p>
				</button>
				<tooltip-closable @close=${this.handleSessionClose}>
					${this.showExpiredSession?s.qy`Session Expired. <a href="#login">Login again?</a>`:void 0}
					${this.isLoginSuccess?s.qy`Login Successful`:void 0}
					${this.showLogout?s.qy`Logout Successful`:void 0}
				</tooltip-closable>
			</popper-container>
		`}connectedCallback(){super.connectedCallback(),this.handleKeyUp=e=>{if(window.location.hash.startsWith("#"))return;const t=this.menuListRef.value?.querySelectorAll(".menu_item");null!=t&&this.dropdownExpanded&&"Escape"===e.key&&(this.dropdownExpanded=!1)},document.addEventListener("keyup",this.handleKeyUp)}disconnectedCallback(){super.disconnectedCallback(),null!=this.handleKeyUp&&document.removeEventListener("keyup",this.handleKeyUp)}stateChanged(e){this.tutorialStep=(0,b.Xv)(e),this.account=e.your511.account,this.showExpiredSession=e.your511.showExpiredSession,this.isLoginSuccess=e.your511.loginFormStatus===$.vky.SUCCESS,this.showLogout=e.your511.showLogout}handleDropdownShow(){this.dropdownExpanded=!0}handleDropdownHide(){this.dropdownExpanded=!1,this.dropdownIndex=-1}handleSessionClose(){E.M_.dispatch({type:$.vZI,show:!1})}login(){this.account||E.M_.dispatch((0,ie.z)($.Gqw.LOGIN))}logout(){E.M_.dispatch((0,w.ri)())}your511HeaderText(){if(!v.Vu)throw new Error($.vmQ);if(!this.account)return v.Vu.loggedOutNavLabel;const e=this.account?.firstName?this.account.firstName[0]:"",t=this.account?.lastName?this.account.lastName[0]:"";return v.Vu.loggedInNavLabel(`${e.toUpperCase()}${t.toUpperCase()}`)}};se([(0,o.MZ)({type:Boolean,reflect:!0,attribute:"is-focused"})],oe.prototype,"isFocused",2),se([(0,o.MZ)({type:Boolean})],oe.prototype,"dropdownExpanded",2),se([(0,o.MZ)({type:Number})],oe.prototype,"dropdownIndex",2),se([(0,o.MZ)({type:Object})],oe.prototype,"account",2),se([(0,o.MZ)({type:String})],oe.prototype,"tutorialStep",2),se([(0,o.MZ)({type:Boolean})],oe.prototype,"showExpiredSession",2),se([(0,o.MZ)({type:Boolean})],oe.prototype,"isLoginSuccess",2),se([(0,o.MZ)({type:Boolean})],oe.prototype,"showLogout",2),oe=se([(0,o.EM)("header-user-menu")],oe),i(10147),i(92142);const ne=function(e){return(t,i)=>{const r={get(){return this.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==i?Object.defineProperty(t,i,r):{kind:"method",placement:"prototype",key:t.key,descriptor:r}}};i(37975),i(80256),i(93389),i(57304),i(19989),i(6039);var le=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,de=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?ce(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&le(t,i,s),s};let pe=class extends((0,n.N)(E.M_)(s.WF)){constructor(){super(...arguments),this._isFocused=!1,this.metroRegionActive=!1,this.drawingMode=!1,this.searchType=N.q_.type}set isFocused(e){if(!1!==v.s1?.allowHeaderColorInversion){const t=this.isFocused;this._isFocused=e,this.requestUpdate("isFocused",t)}}get isFocused(){return this._isFocused}static get styles(){return[z.A,T.A,q.A,Z.A,F.A,s.AH`
				:host {
					/* box-shadow: var(--shadow-md); */
					pointer-events: all;

					border-bottom: var(--border-width) solid rgb(var(--concrete));
				}

				.top-half {
					grid-area: 2 / 1 / auto / -1;
					position: relative;
					background-color: rgb(var(--app-header-bg, 255, 255, 255));
					transition: var(--is-flipped-dark-transition, background-color 0.25s ease-out);
					margin-top: -250px; /* for ios overscroll */
				}

				@media screen and (prefers-reduced-motion: reduce) {
					.top-half {
						transition: none;
					}
				}

				.top-half_left {
					display: flex;
					grid-area: 2 / 1;
					/* input height + input border height + padding & margin */
				}

				.top-half_center {
					display: flex;
					grid-area: 2 / 2;
					z-index: 2;
				}

				.top-half_right {
					display: flex;
					align-items: center;
					grid-area: 2 / 3;
				}

				#user-account-button,
				#list-view-link {
					position: relative;
					align-self: flex-start;
					z-index: 2;
				}

				#user-account-button > button {
					height: 100%;
				}

				.table-view-label {
					display: none;
				}

				#list-view-link {
					display: none;
				}

				#list-view-link-mobile {
					display: block;
					position: absolute;
					bottom: 0;
					right: 1rem;
				}

				.bottom-half {
					position: relative;
					grid-area: 3 / 1 / auto / -1;
					justify-content: center;
					background-color: rgb(var(--app-header-bg-bottom, var(--clouds)));
					transition: var(--is-flipped-dark-transition, background-color 0.25s ease-out);
				}

				@media screen and (prefers-reduced-motion: reduce) {
					.bottom-half {
						transition: none;
					}
				}

				.bottom-half_center {
					display: flex;
					justify-content: center;
					z-index: 1;
					grid-area: 3 / 2;
				}

				.bottom-half_full {
					display: flex;
					justify-content: center;
					z-index: 1;
					grid-area: 3 / 1 / auto / -1;
				}
				.btn-transit_icon {
					padding: 0 0.125rem 0 0;
				}

				.drawing-instructions {
					text-align: center;
					font-size: var(--smallest);
					padding: 0.25rem var(--gap);
				}

				.account-messages {
					--tail-color: rgb(var(--peter-river));
					--tail-border-color: rgb(var(--belize-hole));
				}

				.list-btn {
					position: relative;
				}

				@media (min-width: ${(0,s.iz)($.EA.DESKTOP)}) {
					.table-view-label {
						display: block;
					}
				}

				@media (min-width: ${(0,s.iz)($.EA.TABLET)}) {
					.hidden-md {
						display: none;
					}

					.drawing-instructions {
						font-size: var(--smaller);
					}
				}

				@media (min-width: ${(0,s.iz)($.EA.PHONE_XL)}) {
					#list-view-link {
						display: block;
					}

					#list-view-link-mobile {
						display: none;
					}
				}

				:host([is-focused]) .top-half {
					background-color: rgb(var(--app-header-bg-inverted, var(--wet-asphalt)));
				}

				:host([is-focused]) .bottom-half {
					background-color: rgb(var(--app-header-bg-inverted-bottom, var(--midnight-blue)));
				}

				:host([is-focused]) .drawing-instructions {
					color: #fff;
				}

				/* state: tray-at-header*/

				:host([tray-at-header]) {
					box-shadow: none;
				}
			`]}render(){const e=v.BQ.favorite.steps[$.QeQ.FAVORITE_SEARCH];return s.qy`
			<slot name="notifications"></slot>
			<div class="top-half"></div>
			<div class="top-half_left">
				<slot name="logo"></slot>
			</div>

			<popper-container
				id="tutorial-popper"
				position="${Y.kl.BOTTOM}"
				?is-visible="${this.tutorialStep===$.QeQ.SEARCH||this.tutorialStep===$.QeQ.FAVORITE_SEARCH}"
				class=${(0,d.H)({fadein:!0,"top-half_center":!0,"tutorial-popper":!0,"tutorial-spotlight":this.tutorialStep===$.QeQ.SEARCH||this.tutorialStep===$.QeQ.FAVORITE_SEARCH})}
			>
				<search-place
					slot="toggler"
					?active="${this.searchType===$.nXf.SEARCH_PLACE}"
					?hidden="${this.searchType!==$.nXf.SEARCH_PLACE}"
					@focusin="${this.onSearchFocus}"
					@focusout="${this.onSearchBlur}"
				>
				</search-place>

				<search-route
					slot="toggler"
					?active="${this.searchType===$.nXf.SEARCH_ROUTE}"
					?hidden="${this.searchType!==$.nXf.SEARCH_ROUTE}"
					@focusin="${this.onSearchFocus}"
					@focusout="${this.onSearchBlur}"
				>
				</search-route>

				<search-roadway
					slot="toggler"
					?active="${this.searchType===$.nXf.SEARCH_ROADWAY}"
					?hidden="${this.searchType!==$.nXf.SEARCH_ROADWAY}"
					@focusin="${this.onSearchFocus}"
					@focusout="${this.onSearchBlur}"
				>
				</search-roadway>

				<search-predefined-area
					slot="toggler"
					?active="${this.searchType===$.nXf.SEARCH_PREDEFINED_AREA}"
					?hidden="${this.searchType!==$.nXf.SEARCH_PREDEFINED_AREA}"
					@focusin="${this.onSearchFocus}"
					@focusout="${this.onSearchBlur}"
				>
				</search-predefined-area>
				<header-draw-custom-area
					slot="toggler"
					?active="${this.searchType===$.nXf.DRAW_CUSTOM_AREA}"
					?hidden="${this.searchType!==$.nXf.DRAW_CUSTOM_AREA}"
				>
				</header-draw-custom-area>
				${v.BQ.welcome.steps.search||e?this.renderSearchTutorialBubble():void 0}
			</popper-container>

			<div
				class="bottom-half"
				?hidden=${this.searchType!==$.nXf.SEARCH_ROUTE&&this.searchType!==$.nXf.DRAW_CUSTOM_AREA}
				aria-hidden=${this.searchType!==$.nXf.SEARCH_ROUTE&&this.searchType!==$.nXf.DRAW_CUSTOM_AREA}
			></div>
			<div
				class="bottom-half_full"
				?hidden=${this.searchType!==$.nXf.DRAW_CUSTOM_AREA||!this.drawingMode}
				aria-hidden=${this.searchType!==$.nXf.DRAW_CUSTOM_AREA||!this.drawingMode}
			>
				<p class="drawing-instructions">Click and drag on the map to draw your search area.</p>
			</div>
			<div
				class="bottom-half_center"
				?hidden=${this.searchType!==$.nXf.SEARCH_ROUTE}
				role="tablist"
			>
				<button
					role="tab"
					class="${(0,d.H)({btn:!0,"btn-sm":!0,"btn-light":!0,"btn-header":!0,"btn-light--enabled":this.searchMode===google.maps.TravelMode.DRIVING,"btn-light--inverted":this.isFocused})}"
					data-search-mode="${google.maps.TravelMode.DRIVING}"
					aria-label="Drive Search"
					@click="${this.setSearchMode}"
					aria-selected=${this.searchMode===google.maps.TravelMode.DRIVING}
				>
					<svg role="presentation" class="btn_icon btn-transit_icon" aria-hidden="true">
						<use href="${"/images/sprites.svg#drive"}"></use>
					</svg>
					<span class="btn-label btn-label--sm">Drive</span>
				</button>
				<button
					role="tab"
					class="${(0,d.H)({btn:!0,"btn-sm":!0,"btn-light":!0,"btn-header":!0,"btn-light--inverted":this.isFocused,"btn-light--enabled":this.searchMode===google.maps.TravelMode.WALKING})}"
					data-search-mode="${google.maps.TravelMode.WALKING}"
					aria-label="Walk Search"
					@click="${this.setSearchMode}"
					aria-selected=${this.searchMode===google.maps.TravelMode.WALKING}
				>
					<svg role="presentation" class="btn_icon btn-transit_icon" aria-hidden="true">
						<use href="${"/images/sprites.svg#walk"}"></use>
					</svg>
					<span class="btn-label btn-label--sm"> Walk</span>
				</button>
				<button
					role="tab"
					class="${(0,d.H)({btn:!0,"btn-sm":!0,"btn-light":!0,"btn-header":!0,"btn-light--inverted":this.isFocused,"btn-light--enabled":this.searchMode===google.maps.TravelMode.BICYCLING})}"
					data-search-mode="${google.maps.TravelMode.BICYCLING}"
					aria-label="Bike Search"
					@click="${this.setSearchMode}"
					aria-selected=${this.searchMode===google.maps.TravelMode.BICYCLING}
				>
					<svg role="presentation" class="btn_icon btn-transit_icon" aria-hidden="true">
						<use href="${"/images/sprites.svg#bike"}"></use>
					</svg>
					<span class="btn-label btn-label--sm">Bike</span>
				</button>
				<button
					role="tab"
					class="${(0,d.H)({btn:!0,"btn-sm":!0,"btn-light":!0,"btn-header":!0,"btn-light--inverted":this.isFocused,"btn-light--enabled":this.searchMode===google.maps.TravelMode.TRANSIT})}"
					data-search-mode="${google.maps.TravelMode.TRANSIT}"
					aria-label="Bus, Public Transit Search"
					@click="${this.setSearchMode}"
					aria-selected=${this.searchMode===google.maps.TravelMode.TRANSIT}
				>
					<svg role="presentation" class="btn_icon btn-transit_icon" aria-hidden="true">
						<use href="${"/images/sprites.svg#bus"}"></use>
					</svg>
					<span class="btn-label btn-label--sm">Bus</span>
				</button>
			</div>
			<div class="top-half_right">
				<ow-localize-select
					.reloadsPageOnChange=${!0}
					.analyticsPageName=${"MAP_VIEW"}
				></ow-localize-select>
				${s.qy`<header-user-menu ?is-focused=${this.isFocused}></header-user-menu>`}
				${this.renderListViewLink()}
				<header-help-menu
					?is-focused=${this.isFocused}
					tutorial-step=${(0,L.J)(this.tutorialStep)}
					.handleDropdownShown=${this.helpMenuShown}
					@crc:help-menu-interaction=${this.helpMenuInteraction}
				>
					${v.BQ.welcome.steps.feedback?s.qy`
								<tutorial-bubble
									aria-hidden=${this.tutorialStep!==$.QeQ.FEEDBACK}
									slot="tutorial-feedback"
									id="tutorial-feedback"
									slug=${$.QeQ.FEEDBACK}
								>
									<h2 slot="title">${v.BQ.welcome.steps.feedback.title}</h2>
									<div slot="content">
										${(0,p._)(v.BQ.welcome.steps.feedback.content)}
									</div>
									<div slot="next-button-label">NEXT TIP</div>
								</tutorial-bubble>
						  `:void 0}
				</header-help-menu>
				<header-hamburger-menu
					?is-focused=${this.isFocused}
					.handleDropdownShown=${this.hamburgerMenuShown}
				></header-hamburger-menu>
				${this.mobileTableTutorial()}
			</div>
			<map-drawn-bounds-mask aria-hidden="true"></map-drawn-bounds-mask>
			<map-bounds-mask aria-hidden="true" .bounds=${this.submittedBoundsExpanded}></map-bounds-mask>
		`}renderSearchTutorialBubble(){const e=this.tutorialStep===$.QeQ.SEARCH,t=this.tutorialStep===$.QeQ.FAVORITE_SEARCH,i=v.BQ.favorite.steps[$.QeQ.FAVORITE_SEARCH];if(!(t&&!i||e&&!v.BQ.welcome.steps.search))return s.qy`
			<tutorial-bubble
				id="tutorial-bubble-search"
				position=${Y.kl.BOTTOM}
				slug=${(0,L.J)(this.tutorialStep)}
			>
				<h2 slot="title">
					${e?v.BQ.welcome.steps.search?.title:i?.title}
				</h2>
				<div slot="content">
					${e&&v.BQ.welcome.steps.search?.content?(0,p._)(v.BQ.welcome.steps.search.content):void 0}
					${!e&&i?.content?(0,p._)(i.content):void 0}
				</div>
				${t?s.qy`
							<div slot="footer">
								<button
									id="next-button"
									class="btn btn-white btn-rounded btn-sm btn-padding-sm"
									@click="${this.handlePerformSearch}"
									title="Perform a search"
								>
									PERFORM SEARCH
								</button>
							</div>
					  `:void 0}
			</tutorial-bubble>
		`}async handlePerformSearch(){await E.M_.dispatch((0,b.oo)(v.BQ.favorite.exampleSearchHref)),await E.M_.dispatch((0,ie.z)(`${$.Gqw.TOUR}/${$.S9j.FAVORITE}/${$.QeQ.FAVORITE_ADD}`))}mobileTableTutorial(){return s.qy`<popper-container
			id="list-view-link-mobile"
			position="${Y.kl.BOTTOM}"
			class="tutorial-popper fadein"
			?is-visible="${this.tutorialStep===$.QeQ.LIST_VIEW}"
		>
			<div class="tutorial-drop" slot="toggler"></div>
			${v.BQ.welcome.steps["list-view"]?s.qy`
						<tutorial-bubble
							id="tutorial-list-views"
							position=${Y.kl.BOTTOM}
							slug=${$.QeQ.LIST_VIEW}
						>
							<h2 slot="title">${v.BQ.welcome.steps["list-view"].title}</h2>
							<div slot="content">
								${(0,p._)(v.BQ.welcome.steps["list-view"].content)}
							</div>
							<div slot="next-button-label">NEXT TIP</div>
						</tutorial-bubble>
				  `:void 0}
		</popper-container>`}renderListViewLink(){return s.qy`
			<popper-container
				id="list-view-link"
				position="${Y.kl.BOTTOM}"
				class=${(0,d.H)({"tutorial-popper":!0,"tutorial-popper--active":this.tutorialStep===$.QeQ.LIST_VIEW,fadein:!0})}
				?is-visible="${this.tutorialStep===$.QeQ.LIST_VIEW}"
			>
				<a
					slot="toggler"
					href="/list/events"
					class=${(0,d.H)({btn:!0,"btn-light":!0,"btn-header":!0,"btn-half-pad-left--sm":!0,"btn-half-pad-right--sm":!0,"btn-light--inverted":this.isFocused,"list-btn":!0,"tutorial-spotlight":this.tutorialStep===$.QeQ.LIST_VIEW})}
					title="${(0,I.A)("header.tableview.label","Table View")}"
				>
					<svg role="presentation" class="btn_icon" aria-hidden="true">
						<use href="${"/images/sprites.svg#list-view"}"></use>
					</svg>
					<span class="table-view-label btn-label"
						>${(0,I.A)("header.tableview.label","Table View")}</span
					>
				</a>
				${v.BQ.welcome.steps["list-view"]?s.qy`
							<tutorial-bubble
								id="tutorial-list-view"
								position=${Y.kl.BOTTOM}
								slug=${$.QeQ.LIST_VIEW}
							>
								<h2 slot="title">${v.BQ.welcome.steps["list-view"].title}</h2>
								<div slot="content">
									${(0,p._)(v.BQ.welcome.steps["list-view"].content)}
								</div>
								<div slot="next-button-label">NEXT TIP</div>
							</tutorial-bubble>
					  `:void 0}
			</popper-container>
		`}stateChanged(e){this.searchType=e.search.type,this.searchMode=e.search.mode,this.tutorialStep=(0,b.Xv)(e),this.account=e.your511.account,this.metroRegionActive=e.map.metroRegionActive,this.visibleDashboardUri=e.tray.visibleView===O.UN.CMS_DASHBOARD&&e.tray.visibleUri,this.submittedBoundsExpanded=e.search.submittedBoundsExpanded,this.drawingMode=e.search.drawingMode,this.setNotificationArea(e.cmsContent)}setNotificationArea(e){if(this.notificationArea)if(e.cmsFloodgates.length){const t=e.cmsFloodgates.filter((e=>"Medium"===e.priority||"High"===e.priority));let i="";t.forEach((e=>{i+=`<a class="notification-banner" href="/${e.uri}" aria-label="Emergency Notification - ${e.title}">${e.title}</a>`})),this.notificationArea.innerHTML=i}else this.notificationArea.innerHTML=""}willUpdate(e){e.has("searchType")&&this.searchType===$.nXf.DRAW_CUSTOM_AREA&&(this.isFocused=!0),e.has("metroRegionActive")&&this.metroRegionActive&&this.logoWrapRegional&&(this.logoWrapStatewide?.classList.remove("logo-wrap--show"),this.logoWrapRegional.classList.add("logo-wrap--show")),e.has("metroRegionActive")&&!this.metroRegionActive&&this.logoWrapRegional&&(this.logoWrapStatewide?.classList.add("logo-wrap--show"),this.logoWrapRegional.classList.remove("logo-wrap--show")),e.has("visibleDashboardUri")&&this.visibleDashboardUri?this.regionalCmsLogo?.forEach((e=>{const t=e.getAttribute("data-cms-id");t&&this.visibleDashboardUri===`${O.UN.CMS_DASHBOARD}/${t}`&&(this.logoWrapStatewide?.classList.remove("logo-wrap--show"),this.logoWrapRegional?.classList.remove("logo-wrap--show"),e.classList.add("logo-wrap--show"))})):(this.regionalCmsLogo?.forEach((e=>{e.classList.remove("logo-wrap--show")})),this.logoWrapStatewide?.classList.add("logo-wrap--show"),this.logoWrapRegional?.classList.add("logo-wrap--show"))}onSearchFocus(){this.isFocused=!0}onSearchBlur(){setTimeout((()=>{this.shadowRoot&&this.shadowRoot.activeElement&&Array.from(this.renderRoot.querySelectorAll("search-route, search-place, search-roadway, search-predefined-area")).includes(this.shadowRoot.activeElement)||(this.isFocused=this.searchType===$.nXf.DRAW_CUSTOM_AREA)}))}hamburgerMenuShown(){E.M_.dispatch({type:$.Ob3})}setSearchMode(e){const t=e.currentTarget;E.M_.dispatch((0,P.sV)(t.dataset.searchMode))}helpMenuShown(){E.M_.dispatch({type:$.lVs})}helpMenuInteraction(e){E.M_.dispatch({type:$.M8v,link:e.detail.interaction})}};de([(0,o.MZ)({type:Boolean,reflect:!0,attribute:"is-focused"})],pe.prototype,"isFocused",1),de([(0,o.MZ)({type:Boolean})],pe.prototype,"metroRegionActive",2),de([(0,o.MZ)({type:String})],pe.prototype,"visibleDashboardUri",2),de([(0,o.MZ)({type:Boolean})],pe.prototype,"drawingMode",2),de([(0,o.MZ)({type:String})],pe.prototype,"searchType",2),de([(0,o.MZ)({type:String})],pe.prototype,"searchMode",2),de([(0,o.MZ)({type:String})],pe.prototype,"tutorialStep",2),de([(0,o.MZ)({type:Object})],pe.prototype,"account",2),de([(0,o.MZ)({type:Object})],pe.prototype,"submittedBoundsExpanded",2),de([ne("#logo-wrap-statewide")],pe.prototype,"logoWrapStatewide",2),de([ne("#logo-wrap-regional")],pe.prototype,"logoWrapRegional",2),de([ne("#notifications")],pe.prototype,"notificationArea",2),de([(".regional-cms-logo",(e,t)=>{const i={get(){return this.querySelectorAll(".regional-cms-logo")},enumerable:!0,configurable:!0};return void 0!==t?Object.defineProperty(e,t,i):{kind:"method",placement:"prototype",key:e.key,descriptor:i}})],pe.prototype,"regionalCmsLogo",2),pe=de([(0,o.EM)("app-header")],pe);var ue=i(17026),he=i(27116),ge=i(80480),me=i(62239),ye=i(39569),ve=Object.defineProperty,be=Object.getOwnPropertyDescriptor,fe=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?be(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&ve(t,i,s),s};let we=class extends s.WF{constructor(){super(...arguments),this.menuEntry=e=>e instanceof H.G?s.qy`<hr />`:e.gdpr?s.qy`<li class="text pointer" @click=${this.showGDPRSettings}>
				<a href="#gdpr" aria-label=${e.ariaLabel}>${e.title}</a>
			</li>`:e.href?s.qy`
					<li class="link">
						<a
							href="${e.href}"
							target="${e.target||"_self"}"
							rel="${(0,L.J)(e.target?"noopener noreferrer":void 0)}"
							aria-label=${e.ariaLabel}
							>${e.title}</a
						>
					</li>
			  `:s.qy`<li class="text">${e.title}</li>`}static get styles(){return[z.A,s.AH`
				:host {
					display: grid;
					margin-top: var(--gap);
					font-size: var(--smaller);
					grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
					grid-column-gap: calc(var(--gap) * 2);
					padding: 0 calc(var(--gap) * 2);
					position: relative;
				}

				.link-header {
					color: rgb(var(--darker));
					font-size: var(--smaller);
					line-height: 1.5;
					margin-bottom: 0.25rem;
				}

				a {
					color: rgb(var(--darker));
				}

				/* Avoid using cost-context for ie11 compat */
				:host([is-searching]) .link-header {
					color: #fff;
				}
				:host([is-searching]) a {
					color: rgb(var(--silver));
				}

				.link-section {
					padding-bottom: 2rem;
				}

				.links {
					list-style-type: none;
					margin: 0;
					padding: 0;
				}

				.pointer {
					cursor: pointer;
				}

				.footer-skip-links {
					position: absolute;
					top: -20px;
					left: 0;
					overflow: hidden;
					height: 0.5px;
					width: 0;
					opacity: 0;
				}
				.footer-skip-links-bottom {
					top: auto;
					bottom: 10px;
				}

				.footer-skip-links:focus {
					height: auto;
					width: auto;
					opacity: 1;
				}
			`]}render(){return s.qy`
			<button
				class="footer-skip-links"
				@click=${this.linkEndFocus}
				aria-label="Skip Footer Links"
				id="footerLinkStart"
				type="button"
			>
				Skip Footer Links
			</button>
			${v.oX.linkSections.map((e=>s.qy`
					<div class="link-section">
						<h2 class="link-header">${e.title}</h2>
						<ul class="links">
							${e.links.map(this.menuEntry)}
						</ul>
					</div>
				`))}
			<button
				class="footer-skip-links footer-skip-links-bottom"
				aria-label="Go to Footer Link Start"
				id="footerLinkEnd"
				@click=${this.linkStartFocus}
				type="button"
			>
				Go To Footer Link Start
			</button>
		`}linkStartFocus(){this.linkStart?.focus()}linkEndFocus(){this.linkEnd?.focus()}showGDPRSettings(){window.dispatchEvent(new Event("show-gdpr"))}};fe([(0,o.P)("#footerLinkStart")],we.prototype,"linkStart",2),fe([(0,o.P)("#footerLinkEnd")],we.prototype,"linkEnd",2),we=fe([(0,o.EM)("app-footer")],we);var Se=i(57914),Ae=i(31395),Ee=i(25447),$e=i(87738),Te=i(75340),Re=(i(62600),Object.defineProperty),ke=Object.getOwnPropertyDescriptor,Me=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?ke(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&Re(t,i,s),s};let Ce=class extends((0,n.N)(E.M_)(s.WF)){constructor(){super(),this.notifications=[],this.showNotificationPopup=!1,this.hideForTutorial=!1,this.isTop=!1,E.M_.dispatch((0,h.K0)())}static get styles(){return[z.A,s.AH`
				#notifications {
					max-width: 500px;
					width: calc(100vw - var(--scrollbar-width) - var(--gap) * 2);
					box-shadow: var(--shadow-lg);
					border-radius: var(--border-radius);
					overflow: hidden;
				}
				popper-container {
					--tail-color: rgb(var(--danger));
					--tail-border-color: rgb(var(--danger-dark));
				}
			`]}render(){return s.qy`
			<slot> </slot>
			<popper-container
				id="notifications-popper"
				position="${this.isTop?Y.kl.TOP:Y.kl.BOTTOM}"
				positionx="${Y.kl.TOP}"
				overflow="${Y.tg.VERTICLE}"
				?is-visible="${this.showNotificationPopup&&!this.hideForTutorial}"
			>
				${this.notifications?s.qy`
							<div id="notifications" role="list">
								${this.notifications.map(((e,t)=>s.qy`
										<card-result
											role="listitem"
											icon=${(0,L.J)(e.iconAlt??void 0)}
											uri="/${e.uri}"
											@click-dismiss="${this.clickDismiss}"
											data-dismiss-uri=${e.uri}
											thumb-url=${(0,L.J)(e.images?.[0]?.url??void 0)}
											thumb-alt=${(0,L.J)(e.images?.[0]?.title??void 0)}
											preserve-aspect-ratio
											show-close
											border-color="rgb(var(--danger-dark))"
											background-color="rgb(var(--danger))"
											text-color="rgb(var(--clouds))"
											style=${(0,ge.W)({"background-color":"rgb(var(--danger))","border-top":"var(--border-width) solid rgb(var(--danger-dark))","border-bottom":this.notifications.length-1===t?"var(--border-width) solid rgb(var(--danger-dark))":"0"})}
										>
											<h3>${(0,ye.p)(e.title)}</h3>
											<p class="text-smaller">${(0,ye.p)(e.description)}</p>
										</card-result>
									`))}
							</div>
					  `:s.qy``}
			</popper-container>
		`}stateChanged(e){this.notifications=(0,Te.ab)(e),this.showNotificationPopup=!!(0,Te.ab)(e).length,this.isTop=!(0,Ee.tV)(e)}firstUpdated(){this.renderRoot.querySelector("#notifications-popper").element=this}clickDismiss({currentTarget:e}){const t=e?.dataset?.dismissUri;if(!t)throw new Error("Notifications must have a dismiss uri defined");E.M_.dispatch((0,h.uk)(t))}};Me([(0,o.MZ)({type:Array})],Ce.prototype,"notifications",2),Me([(0,o.MZ)({type:Boolean})],Ce.prototype,"showNotificationPopup",2),Me([(0,o.MZ)({type:Boolean})],Ce.prototype,"hideForTutorial",2),Me([(0,o.MZ)({type:Boolean})],Ce.prototype,"isTop",2),Ce=Me([(0,o.EM)("notifications-popup")],Ce);Object.defineProperty,Object.getOwnPropertyDescriptor;let _e=class extends s.WF{static get styles(){return[s.AH`
				@keyframes disabledColor {
					from {
						background-color: rgba(255, 255, 255, 0.1);
					}
					to {
						background-color: rgba(255, 255, 255, 0.8);
					}
				}

				:host {
					width: 100%;
					height: 100%;
					position: absolute;
					z-index: 4;
					animation-name: disabledColor;
					animation-duration: 1s;
					animation-iteration-count: 1;
					animation-fill-mode: forwards;
				}
			`]}render(){return s.qy` <div></div> `}};_e=((e,t,i,r)=>{for(var a,s=t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=a(s)||s);return s})([(0,o.EM)("no-click-overlay")],_e);var xe=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,Ie=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?Le(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&xe(t,i,s),s};let Oe=class extends s.WF{constructor(){super(...arguments),this.collapsed=!1,this.inverted=!1}static get styles(){return[T.A,s.AH`
				:host {
					display: block;
					padding: calc(0.75 * var(--smaller));
				}

				.inner {
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: rgb(var(--darker));
					fill: rgb(var(--clouds));
					border-radius: 50%;
					border: var(--border-width) solid rgb(var(--clouds));
					width: calc(1.5 * var(--smaller));
					height: calc(1.5 * var(--smaller));
					box-shadow: var(--shadow-sm);
					transition: var(
						--is-flipped-dark-transition,
						background-color 0.25s ease-out,
						border-color 0.25s ease-out,
						fill 0.25s ease-out
					);
				}
				.inner:active,
				.inner:hover {
					background-color: rgb(var(--darkest));
				}
				.collapse_icon {
					width: var(--gap);
					height: var(--gap);
				}
				.collapse_icon--flipped {
					margin-top: -1px;
					transform: rotate(180deg);
				}
				.inner--light {
					background-color: rgb(var(--clouds));
					fill: rgb(var(--asbestos));
					border-color: rgb(var(--app-header-bg-inverted, var(--wet-asphalt)));
				}
				.inner--light:active,
				.inner--light:hover {
					background-color: white;
				}
			`]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button")}render(){return s.qy`
			<div
				class=${(0,d.H)({inner:!0,"inner--light":this.inverted})}
			>
				<svg
					class=${(0,d.H)({icon:!0,collapse_icon:!0,"collapse_icon--flipped":this.collapsed})}
					aria-label=${this.collapsed?"Expand":"Collapse"}
				>
					<use href=${"/images/sprites.svg#arrow-left-single"}></use>
				</svg>
			</div>
		`}};Ie([(0,o.MZ)({type:Boolean,reflect:!0})],Oe.prototype,"collapsed",2),Ie([(0,o.MZ)({type:Boolean,reflect:!0})],Oe.prototype,"inverted",2),Oe=Ie([(0,o.EM)("collapse-button")],Oe);var Pe=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,De=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?Ne(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&Pe(t,i,s),s};let Ve=class extends((0,n.N)(E.M_)(s.WF)){constructor(){super(...arguments),this.trayAtHeader=!1,this.trayAtBottom=!1,this.hasHandlebarShadow=!1,this.isSidebarCollapsed=O.q.isSidebarCollapsed,this.notificationsCount=0,this.isSearching=!1,this.hasNavigatedFromSearch=!1,this.shouldTrayShowBackButton=!1,this.trayContentsTutorial=!1,this.drawingMode=!1,this.cmsDashboards=[],this.cmsDashboardsLoading=!0,this.showFavorites=!1,this.twitterInited=!1}static get styles(){return[T.A,z.A,$e.A,Z.A,s.AH`
				#statewideBtn,
				#trayBackBtn,
				.btn-tray-link,
				.collapse-btn_tray {
					padding: calc(var(--gap) - 0.25rem);
					margin: 0.25rem;
				}

				.handlebar {
					display: grid;
					grid-template-columns: min-content 1fr min-content;
					top: -1px;
					position: sticky;
					position: -webkit-sticky;
					z-index: 3;
					border-top: var(--border-width) solid white;
					background-color: rgb(var(--app-tray-bg, var(--clouds)));
					/* Place handlebar in own compositing layer:
						 https://developer.mozilla.org/en-US/docs/Web/CSS/will-change */
					will-change: transform;
					/* transition: box-shadow 0.3s ease-in-out; */
					transition: var(--is-flipped-dark-transition, background-color 0.25s ease-out);
					--tail-color: rgb(var(--darker-blue));
					--tail-border-width: 0;
				}

				.handlebar::after {
					content: '';
					display: block;
					position: absolute;
					width: 100%;
					height: 100%;
					clip-path: inset(0 0 -0.75rem 0);
					pointer-events: none;
				}

				.handlebar-left,
				.handlebar-right {
					display: flex;
					align-items: stretch;
				}

				.handlebar-left {
					justify-content: flex-start;
				}

				.handlebar-center {
					display: flex;
					justify-content: center;
					position: relative;
				}

				.handlebar_control-btn[disabled] {
					cursor: not-allowed;
					background: none;
					fill: rgba(var(--silver), 0.5);
				}

				.handlebar--highlight {
					fill: rgb(var(--belize-hole));
					color: rgb(var(--belize-hole));
				}

				.handlebar-right {
					justify-content: flex-end;
				}

				.notification-alert {
					width: var(--smaller);
					height: var(--smaller);
					margin: calc(var(--smaller) * -0.5) calc(var(--smaller) * -0.6) 0
						calc(var(--smaller) * -0.4);
					z-index: 1;
				}

				#tray-contents {
					display: flex;
					flex-direction: column;
					flex: 1 1 auto;
				}

				/* state: handlebar sticky */

				.handlebar--at-header {
					border-top: 1px solid rgb(var(--silver));
				}

				.handlebar--shadow {
					background-color: rgba(var(--app-tray-bg, var(--clouds)));
					border-bottom: var(--border-width) solid rgb(var(--silver));
					margin-bottom: calc(var(--border-width) * -1);
					z-index: 5;
				}
				.handlebar--shadow::after {
					box-shadow: var(--shadow-md);
				}

				:host([is-searching]) {
					background-color: rgb(var(--app-header-bg-inverted, var(--wet-asphalt))) !important;
				}

				:host([is-searching]) .handlebar {
					background-color: rgb(var(--app-header-bg-inverted, var(--wet-asphalt)));
					border-color: black;
				}

				.collapse-btn_tray {
					display: none;
					position: absolute;
					right: -1.5rem;
					z-index: 6;
				}

				.invisible {
					visibility: hidden;
					pointer-events: none;
				}

				.tray-contents--tutorial {
					overflow-y: initial !important;
				}

				.dashboard-svg-container svg {
					height: 1rem;
					width: 1rem;
					padding: 0.125rem;
				}

				.dashboard-placeholder {
					display: flex;
					align-items: center;
					padding: var(--gap);
				}

				.placeholder_tray-icon {
					width: 1rem;
					height: 1rem;
					padding: 0.125rem;
				}

				.placeholder_tray-text {
					display: none;
					width: 5rem;
					height: 1rem;
					margin: 0;
					margin-left: 0.375rem;
				}

				.twitter {
					padding: 0px 15px 15px 15px;
					min-height: 350px;
				}

				@media screen and (prefers-reduced-motion: reduce) {
					.handlebar {
						transition: none;
					}
				}

				@media (min-width: ${(0,s.iz)($.EA.PHONE_XL)}) {
					.placeholder_tray-text {
						display: block;
					}
				}

				@media (min-width: ${(0,s.iz)($.EA.DESKTOP)}) {
					.handlebar {
						border-top: var(--border-width) solid rgb(var(--silver));
					}

					.handlebar-center {
						display: none;
					}
					.handlebar-right {
						margin-right: var(--gap);
					}
					#tray-contents {
						overflow-y: scroll;
					}
					.collapse-btn_tray {
						display: block;
					}
				}
				.aria-hidden {
					overflow: hidden;
					height: 0.5px;
					width: 0.5px;
				}
			`]}render(){return s.qy`
			${this.drawingMode?s.qy`<no-click-overlay></no-click-overlay>`:s.qy``}
			${this.rednerHandlebar(!v.mq.enableCmsDashboards||!this.cmsDashboardsLoading)}
			<collapse-button
				tabindex="0"
				@keypress=${this.toggleSidebar}
				@click=${this.toggleSidebar}
				aria-label=${(this.isSidebarCollapsed?"Expand":"Collapse")+" tray"}
				class="btn collapse-btn_tray"
				?collapsed=${this.isSidebarCollapsed}
				?inverted=${this.isSearching}
			></collapse-button>
			<div
				id="tray-contents"
				@scroll=${this.trayContentsScrolling}
				class=${(0,d.H)({"tray-contents--tutorial":this.trayContentsTutorial,fadein:!!this.visibleView})}
				style=${(0,ge.W)({visibility:this.visibleView?"visible":"hidden",display:this.isSidebarCollapsed?"none":null})}
				aria-hidden="${this.isSidebarCollapsed}"
			>
				<div class="aria-hidden" aria-live="polite">
					${this.visibleView&&!["custom-layer","cms-message","cms-dashboard"].includes(this.visibleView)?`Navigated to ${this.visibleView}`:""}
				</div>
				<main>${this.renderTrayContents()}</main>
				<footer>
					<app-footer ?is-searching=${this.isSearching}></app-footer>
				</footer>
			</div>
		`}setShowFavorites(){this.showFavorites=!0,setTimeout((()=>{this.clickClearSearchResults()}),0)}setHideFavorites(){this.showFavorites=!1}rednerHandlebar(e){let t,i,r=he.A;return this.isSearching&&v.RQ.clearSearchResultsButton&&(t=v.RQ.clearSearchResultsButton.label,i=v.RQ.clearSearchResultsButton.icon,r=this.clickClearSearchResults),this.hasNavigatedFromSearch&&v.RQ.backToSearchResultsButton&&(t=v.RQ.backToSearchResultsButton.label,i=v.RQ.backToSearchResultsButton.icon,r=this.clickBackToSearchResults),this.shouldTrayShowBackButton&&v.RQ.clearTrayDetailsButton&&(t=v.RQ.clearTrayDetailsButton.label,i=v.RQ.clearTrayDetailsButton.icon,r=this.clickClearSearchResults),s.qy`
			<popper-container
				position="${Y.kl.TOP}"
				?is-visible="${this.tutorialStep===$.QeQ.CONTENT_TRAY}"
				id="handlebar"
				class="${(0,d.H)({handlebar:!0,"handlebar--shadow":this.hasHandlebarShadow,"tutorial-spotlight":this.tutorialStep===$.QeQ.CONTENT_TRAY,fadein:e})}"
				style=${(0,ge.W)({visibility:e?"visible":"hidden"})}
			>
				<div slot="toggler" class="handlebar-left">
					<button
						@click=${r}
						class=${(0,d.H)({btn:!0,"btn-sm":!0,"btn-light":!0,"btn-light--inverted":this.isSearching,invisible:!i})}
						aria-label=${t||"Back"}
						id="trayBackBtn"
					>
						<svg role="presentation" class="btn-sm_icon" aria-hidden="true">
							<use href=${i}></use>
						</svg>
						${t&&s.qy`
							<span
								class="${(0,d.H)({"btn-label":!0,"btn-label--md":!0})}"
							>
								${t}
							</span>
						`}
					</button>
				</div>

				<div slot="toggler" class="handlebar-center">
					<button
						id="maximize"
						class="${(0,d.H)({btn:!0,"btn-sm":!0,"btn-light":!0,"btn-light--inverted":this.isSearching,"handlebar_control-btn":!0,"handlebar--highlight":this.trayAtBottom})}"
						style="border-right: var(--border-width) dotted rgb(var(--silver));"
						@click=${this.clickMaximizeTray}
						?disabled=${this.trayAtHeader}
						title=${(0,L.J)(v.RQ.maximizeTrayButton.tooltip)}
						aria-label=${(0,L.J)(v.RQ.maximizeTrayButton.tooltip)}
					>
						<svg role="presentation" class="btn-sm_icon" aria-hidden="true">
							<use href="${v.RQ.maximizeTrayButton.icon}"></use>
						</svg>
						<span
							class="${(0,d.H)({"btn-label":!0,"btn-label--md":!0})}"
							>${v.RQ.maximizeTrayButton.label}</span
						>
					</button>
					<button
						class="${(0,d.H)({btn:!0,"btn-sm":!0,"btn-light":!0,"btn-light--inverted":this.isSearching,"handlebar_control-btn":!0,"handlebar--highlight":this.trayAtHeader})}"
						@click=${this.clickMinimizeTray}
						?disabled=${this.trayAtBottom}
						title=${(0,L.J)(v.RQ.minimizeTrayButton.tooltip)}
						aria-label=${(0,L.J)(v.RQ.minimizeTrayButton.tooltip)}
					>
						<svg role="presentation" class="btn-sm_icon" aria-hidden="true">
							<use href="${v.RQ.minimizeTrayButton.icon}"></use>
						</svg>
						<span
							class="${(0,d.H)({"btn-label":!0,"btn-label--md":!0})}"
						>
							${v.RQ.minimizeTrayButton.label}
						</span>
					</button>
				</div>

				<div slot="toggler" class="handlebar-right">
					${this.renderHomeButton()}
					<!-- -->
					${this.renderJourneyTimesButton(this.isSearching)}
					<!--  -->
					${this.renderScoutButton(this.isSearching)}
					<!--  -->
					${this.renderMetroButton(this.isSearching,this.tutorialStep)}
					<!--  -->
					${this.renderCMSDashboardButtons(this.isSearching,this.cmsDashboardsLoading)}
					<!--  -->
					${this.renderNotificationsButton(this.isSearching)}
				</div>
				${v.BQ.welcome.steps.tray?s.qy`
							<tutorial-bubble id="tutorial-tray" slug=${$.QeQ.CONTENT_TRAY}>
								<h2 slot="title">${v.BQ.welcome.steps.tray.title}</h2>
								<div slot="content">${(0,p._)(v.BQ.welcome.steps.tray.content)}</div>
								<div slot="next-button-label">NEXT TIP</div>
							</tutorial-bubble>
					  `:void 0}
			</popper-container>
		`}renderTrayContents(){return s.qy`
			${this.visibleView===O.UN.DASHBOARD?s.qy`<tray-dashboard
						@setshow-favorites=${this.setShowFavorites}
						@sethide-favorites=${this.setHideFavorites}
						.showFavorites=${this.showFavorites}
						@click-more-quick-roads=${this.clickMaximizeTray}
				  >
						<div class="${v.OZ.enabled?"twitter":""}" slot="twitterFeed">
							<slot name="twitter"></slot>
						</div>
				  </tray-dashboard>`:void 0}
			${this.visibleView===O.UN.NOTIFICATIONS?s.qy`<tray-notifications></tray-notifications>`:void 0}
			${this.visibleView===O.UN.NOTIFICATION?s.qy`<tray-notification></tray-notification>`:void 0}
			${this.visibleView===O.UN.CMS_MESSAGE?s.qy`<tray-cms-message></tray-cms-message>`:void 0}
			${this.visibleView===O.UN.EVENTS?s.qy`<tray-event></tray-event>`:void 0}
			${this.visibleView===O.UN.CAMERAS?s.qy`<tray-camera></tray-camera>`:void 0}
			${this.visibleView===O.UN.FUELING_STATIONS?s.qy`<tray-fueling-station></tray-fueling-station>`:void 0}
			${this.visibleView===O.UN.OVERSIZE_LOADS?s.qy`<tray-oversize-load></tray-oversize-load>`:void 0}
			${this.visibleView===O.UN.PLOW?s.qy`<tray-plow></tray-plow>`:void 0}
			${this.visibleView===O.UN.REST_AREAS?s.qy`<tray-rest-area></tray-rest-area>`:void 0}
			${this.visibleView===O.UN.PARKING?s.qy`<tray-parking></tray-parking>`:void 0}
			${this.visibleView===O.UN.WEATHER_STATIONS?s.qy`<tray-weather-station> </tray-weather-station>`:void 0}
			${this.visibleView===O.UN.JOURNEY_TIMES?s.qy`<tray-journey-times></tray-journey-times>`:void 0}
			${this.visibleView===O.UN.WILDFIRE?s.qy`<tray-wildfire></tray-wildfire> `:void 0}
			${this.visibleView===O.UN.CUSTOM_LAYER?s.qy`<tray-custom-layer></tray-custom-layer>`:void 0}
			${this.visibleView===O.UN.MOUNTAIN_PASSES?s.qy`<tray-mountain-pass></tray-mountain-pass>`:void 0}
			${this.visibleView===O.UN.SEARCH_PLACE?s.qy`<tray-search-place
						@setshow-favorites=${this.setShowFavorites}
						searchType=${$.nXf.SEARCH_PLACE}
				  ></tray-search-place>`:void 0}
			${this.visibleView===O.UN.SEARCH_ROUTE?s.qy`<tray-search-route @setshow-favorites=${this.setShowFavorites}></tray-search-route>`:void 0}
			${this.visibleView===O.UN.SEARCH_ROADWAY?s.qy`<tray-search-roadway
						@setshow-favorites=${this.setShowFavorites}
				  ></tray-search-roadway>`:void 0}
			${this.visibleView===O.UN.SEARCH_DRAWN_AREA?s.qy`<tray-search-place
						@setshow-favorites=${this.setShowFavorites}
						searchType=${$.nXf.DRAW_CUSTOM_AREA}
				  ></tray-search-place>`:void 0}
			${this.visibleView===O.UN.SIGNS?s.qy`<tray-sign> </tray-sign>`:void 0}
			${this.visibleView===O.UN.CMS_DASHBOARD?s.qy`<tray-cms-dashboard></tray-cms-dashboard>`:void 0}
			${this.visibleView===O.UN.RAMPS?s.qy`<tray-ramp></tray-ramp>`:void 0}
			${this.visibleView===O.UN.NOT_FOUND?s.qy`<tray-not-found> </tray-not-found>`:void 0}
		`}renderCMSDashboardButtons(e,t){return t&&v.mq.enableCmsDashboards?Object.values(v.mq.enableCmsDashboards).map((()=>s.qy`<div class="dashboard-placeholder">
					<div class="placeholder_icon placeholder_tray-icon"></div>
					<div class="placeholder placeholder_tray-text"></div>
				</div> `)):s.qy`${this.cmsDashboards.map((t=>{const i=`/${O.UN.CMS_DASHBOARD}/${t.id}?show=${t.layers.join(",")}`;return s.qy` <a
				class=${(0,d.H)({btn:!0,"btn-sm":!0,"btn-light":!0,"btn-tray-link":!0,"dashboard-svg-container":!0,"btn-light--inverted":e})}
				slot="toggler"
				title="${t.title}"
				href="${i}"
			>
				${(0,p._)(t.icon)}
				<span class="btn-label btn-label--sm">${(0,ye.p)(t.title)}</span>
			</a>`}))}`}renderHomeButton(){if(v.RQ.trayHomeButton)return s.qy`
			<a
				href=${v.RQ.trayHomeButton.href||"/"}
				@click=${this.handleTrayHomeButtonClick}
				title=${(0,L.J)(v.RQ.trayHomeButton.tooltip)}
				class=${(0,d.H)({btn:!0,"btn-sm":!0,"btn-light":!0,"btn-light--inverted":this.isSearching})}
				id="statewideBtn"
			>
				<svg role="presentation" class="btn-sm_icon" aria-hidden="true">
					<use href="${v.RQ.trayHomeButton.icon}"></use>
				</svg>
				${v.RQ.trayHomeButton.label?s.qy`
							<span class="btn-label btn-label--sm">${v.RQ.trayHomeButton.label}</span>
					  `:s.qy``}
			</a>
		`}renderJourneyTimesButton(e){if(v.RQ.journeyTimesButton&&!0===v.Uv?.enabled)return s.qy`<button
			class=${(0,d.H)({btn:!0,"btn-sm":!0,"btn-light":!0,"btn-tray-link":!0,"btn-light--inverted":e})}
			slot="toggler"
			@click=${this.handleJourneyTimesButtonClick}
			title=${(0,L.J)(v.RQ.journeyTimesButton.tooltip)}
			aria-label=${(0,L.J)(v.RQ.journeyTimesButton.tooltip)}
		>
			<svg role="presentation" class="btn-sm_icon" aria-hidden="true">
				<use href=${v.RQ.journeyTimesButton.icon}></use>
			</svg>
			<span class="btn-label btn-label--sm"> ${v.RQ.journeyTimesButton.label} </span>
		</button>`}renderScoutButton(e){if(v.RQ.trayScoutButton)return s.qy` <a
			class=${(0,d.H)({btn:!0,"btn-sm":!0,"btn-light":!0,"btn-tray-link":!0,"btn-light--inverted":e})}
			slot="toggler"
			href=${(0,L.J)(v.RQ.trayScoutButton.href)}
		>
			<svg role="presentation" class="btn-sm_icon" aria-hidden="true">
				<use href=${v.RQ.trayScoutButton.icon}></use>
			</svg>
			<span class="btn-label btn-label--sm"> ${v.RQ.trayScoutButton.label} </span>
		</a>`}connectedCallback(){super.connectedCallback(),window.addEventListener("trayFocus",(e=>{let t=0;const i=()=>{t>10||this.trayContents?this.trayContents?.focus():(setTimeout(i,1e3),t+=1)};i()}))}renderMetroButton(e,t){if(!v.RQ.metroTrafficButton)return;const i=s.qy` <button
			class=${(0,d.H)({btn:!0,"btn-sm":!0,"btn-light":!0,"btn-tray-link":!0,"btn-light--inverted":e})}
			slot="toggler"
			@click=${this.handleMetroButtonClick}
			title=${(0,L.J)(v.RQ.metroTrafficButton.tooltip)}
			aria-label=${(0,L.J)(v.RQ.metroTrafficButton.tooltip)}
		>
			<svg role="presentation" class="btn-sm_icon" aria-hidden="true">
				<use href=${v.RQ.metroTrafficButton.icon}></use>
			</svg>
			<span class="btn-label btn-label--sm"> ${v.RQ.metroTrafficButton.label} </span>
		</button>`;return v.BQ.welcome.steps.metro?s.qy`
				<popper-container
					class=${(0,d.H)({fadein:!0,"bottom-half_center":!0,"tutorial-popper":!0,"tutorial-spotlight":t===$.QeQ.METRO})}
					position="${Y.kl.BOTTOM}"
					?is-visible="${t===$.QeQ.METRO}"
				>
					${i}
					<tutorial-bubble id="tutorial-metro" slug=${$.QeQ.METRO}>
						<h2 slot="title">${(0,p._)(v.BQ.welcome.steps.metro.title)}</h2>
						<div slot="content">${(0,p._)(v.BQ.welcome.steps.metro.content)}</div>
						<div slot="next-button-label">NEXT TIP</div>
					</tutorial-bubble>
				</popper-container>
			`:i}renderNotificationsButton(e){return s.qy`
			${s.qy``}
		`}stateChanged(e){this.visibleView=e.tray.visibleView,this.visibleUri=e.tray.visibleUri,this.isSearching=!!this.visibleView&&[O.UN.SEARCH_PLACE,O.UN.SEARCH_ROUTE,O.UN.SEARCH_ROADWAY,O.UN.SEARCH_DRAWN_AREA].includes(this.visibleView),this.isSidebarCollapsed=e.tray.isSidebarCollapsed,this.hasNavigatedFromSearch=e.tray.hasNavigatedFromSearch,this.shouldTrayShowBackButton=!this.isSearching&&!this.hasNavigatedFromSearch&&!!this.visibleView&&this.visibleView!==O.UN.DASHBOARD,this.trayPercent=e.tray.trayPercent,this.notificationsCount=e.notifications.notificationsCount,this.tutorialStep=(0,b.Xv)(e),this.isDesktop=(0,Ee.tV)(e),this.trayContentsTutorial=this.tutorialStep===$.QeQ.FAVORITE_ADD,this.drawingMode=e.search.drawingMode,this.cmsDashboards=e.cmsContent.allDashboards,this.cmsDashboardsLoading=e.cmsContent.getDashboardsLoading}updated(e){(e.has("visibleUri")||e.has("trayContentsTutorial"))&&(this.trayContents.scrollTop=0),(e.has("visibleUri")||e.has("trayContentsTutorial"))&&!this.isDesktop&&this.trayPercent&&this.scrollTray(this.trayPercent),e.has("trayContentsTutorial")&&this.trayContentsTutorial&&(this.hasHandlebarShadow=!1),e.has("isDesktop")&&this.isDesktop&&this.scrollContainer&&this.scrollTray(0,"auto"),e.has("isDesktop")&&!this.isDesktop&&this.scrollContainer&&this.scrollTray(Ae.x6,"auto")}setScrollContainer(e){this.scrollContainer=e,this.scrollContainer.addEventListener("scroll",(()=>{this.scrollContainer&&this.handlebar&&(this.trayAtBottom=this.trayPercentVisible<=0,this.trayAtHeader=this.trayPercentVisible>=1,this.hasHandlebarShadow=this.scrollContainer.scrollTop/this.usableViewportHeight>1,this.hasHandlebarShadow&&/Android/i.test(navigator.userAgent)&&!this.twitterInited&&this.visibleView===O.UN.DASHBOARD&&(window.initTwitter(),this.twitterInited=!0))}))}scrollTray(e,t="smooth"){if(!this.scrollContainer||!this.handlebar)throw new Error("`_scroll()` called before `this.scrollContainer` set or #handlebar available.");if("auto"===t)return E.M_.dispatch((0,Se.ML)(null)),this._scroll(e,"auto");this.scrollContainer.scrollTop>=this.usableViewportHeight&&this._scroll(.9,"auto"),setTimeout((()=>{this._scroll(e,"smooth")}),0),E.M_.dispatch((0,Se.ML)(null))}_scroll(e,t){if(!this.scrollContainer)throw new Error("`_scroll()` called before `this.scrollContainer` available.");const i=this.usableViewportHeight*e;this.scrollContainer.scroll({top:i,behavior:t})}get usableViewportHeight(){const{windowHeight:e}=window.appDimensions;return e-$.xBA+2}get trayPercentVisible(){return this.scrollContainer?this.scrollContainer.scrollTop/this.usableViewportHeight:0}handleMetroButtonClick(){E.M_.dispatch({type:$.pNK,button:"metro"}),E.M_.dispatch((0,b.oo)((0,Se.m1)(v.RQ.metroTrafficButton,E.M_.getState())))}handleJourneyTimesButtonClick(){E.M_.dispatch({type:$.pNK,button:"journeyTimes"}),E.M_.dispatch((0,b.oo)(`/${O.UN.JOURNEY_TIMES}`))}handleTrayHomeButtonClick(){this.showFavorites=!1,E.M_.dispatch({type:$.pNK,button:"statewide"})}trayContentsScrolling(){this.hasHandlebarShadow=0!==this.trayContents.scrollTop}clickClearSearchResults(){E.M_.dispatch({type:$.EnK}),E.M_.dispatch((0,b.oo)("/clear")),(E.M_.getState().search.fromNlp||v.FB.defaultSearchType===$.nXf.SEARCH_PLACE)&&(E.M_.dispatch({type:$.$IX,nlp:!1}),E.M_.dispatch((0,me.C)($.nXf.SEARCH_PLACE)))}toggleSidebar(){E.M_.dispatch((0,Se.A3)())}clickBackToSearchResults(){E.M_.dispatch({type:$.Aj5}),window.history.back()}clickMaximizeTray(){this.trayAtHeader||this.scrollTray(1)}clickMinimizeTray(){this.scrollTray(0)}clickTrayNotificationsButton(){E.M_.dispatch({type:$.pNK,button:"notifications"}),E.M_.dispatch((0,b.oo)(`/${$.xv_.NOTIFICATIONS}/`))}get trayContents(){return this.renderRoot.querySelector("#tray-contents")}};De([(0,o.MZ)({type:String})],Ve.prototype,"visibleView",2),De([(0,o.MZ)({type:String})],Ve.prototype,"visibleUri",2),De([(0,o.MZ)({type:Boolean})],Ve.prototype,"trayAtHeader",2),De([(0,o.MZ)({type:Boolean})],Ve.prototype,"trayAtBottom",2),De([(0,o.MZ)({type:Boolean})],Ve.prototype,"hasHandlebarShadow",2),De([(0,o.MZ)({type:Boolean})],Ve.prototype,"isSidebarCollapsed",2),De([(0,o.MZ)({type:Number})],Ve.prototype,"trayPercent",2),De([(0,o.MZ)({type:String})],Ve.prototype,"tutorialStep",2),De([(0,o.MZ)({type:Number})],Ve.prototype,"notificationsCount",2),De([(0,o.MZ)({type:Boolean,reflect:!0,attribute:"is-searching"})],Ve.prototype,"isSearching",2),De([(0,o.MZ)({type:Boolean})],Ve.prototype,"hasNavigatedFromSearch",2),De([(0,o.MZ)({type:Boolean})],Ve.prototype,"shouldTrayShowBackButton",2),De([(0,o.MZ)({type:Boolean})],Ve.prototype,"isDesktop",2),De([(0,o.MZ)({type:Boolean})],Ve.prototype,"trayContentsTutorial",2),De([(0,o.MZ)({type:Boolean})],Ve.prototype,"drawingMode",2),De([(0,o.MZ)({type:Array})],Ve.prototype,"cmsDashboards",2),De([(0,o.MZ)({type:Boolean})],Ve.prototype,"cmsDashboardsLoading",2),De([(0,o.MZ)({type:Boolean})],Ve.prototype,"showFavorites",2),De([(0,o.P)("#handlebar")],Ve.prototype,"handlebar",2),De([(0,o.P)("#trayBackBtn")],Ve.prototype,"trayBackBtn",2),Ve=De([(0,o.EM)("app-tray")],Ve),i(76364),i(95313);var Ue=i(22708),Be=i(86094),Fe=i(22544),ze=(i(31224),i(51427),i(11650)),qe=Object.defineProperty,He=Object.getOwnPropertyDescriptor,We=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?He(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&qe(t,i,s),s};let Qe=class extends((0,n.N)(E.Ay)(s.WF)){static get styles(){return[T.A,s.AH`
				:host {
					display: flex;
					justify-content: space-between;
					border-top: var(--map-controls-separator);
					background: rgba(var(--clouds), 0.25);
				}

				#viewSavedMap,
				#getSavedMap {
					text-decoration: none;
				}
				.trashcan-btn {
					height: 35px;
					width: 35px;
					margin-right: 5px;
					padding: 2.5px;
					border-radius: 40px;
					border: 1px solid transparent;
				}
				.trashcan-btn:hover {
					border: 1px solid #ccc;
				}

				#viewSavedMap:hover,
				#getSavedMap:hover {
					text-decoration: underline;
				}
			`]}render(){return this.defaultMapView?s.qy`<button
					id="viewSavedMap"
					class="btn btn-padding-sm btn-link layer-controls_btn"
					@click=${this.onClickViewMap}
				>
					View Default Map
				</button>
				<button
					id="clearSavedMap"
					class="btn btn-padding-sm btn-light trashcan-btn"
					@click=${this.onClickClearMap}
					aria-label="Clear Map"
				>
					<svg role="button" class="btn-sm_icon" aria-label="Clear Default Map View">
						<use href="${"/images/sprites.svg#trashcan"}"></use>
					</svg>
				</button>`:s.qy`<button
			id="setSavedMap"
			class="btn btn-padding-sm btn-link layer-controls_btn"
			style="text-wrap: wrap; text-align: left;"
			@click=${this.onClickSetMap}
			?disabled=${!this.currentMapView}
		>
			Set Default Map View
		</button>`}stateChanged(e){this.defaultMapView=e.your511.defaultMapView,this.currentMapView=(0,ze.ed)(e)}onClickViewMap(){this.defaultMapView&&E.Ay.dispatch((0,b.oo)(m("",this.defaultMapView)))}onClickSetMap(){confirm("Please confirm that you would like to set your default map view. Each time you visit the site, your map will be zoomed to this location and your layers will match the current selection.")&&E.Ay.dispatch((0,w.lv)(!!v.Vu?.saveDefaultMapViewToAccount,this.currentMapView))}onClickClearMap(){confirm("Please confirm that you would like to delete your default map view.")&&E.Ay.dispatch((0,w.lv)(!!v.Vu?.saveDefaultMapViewToAccount,void 0))}};We([(0,o.wk)()],Qe.prototype,"defaultMapView",2),We([(0,o.wk)()],Qe.prototype,"currentMapView",2),Qe=We([(0,o.EM)("default-map-view-controls")],Qe);var Ge=Object.defineProperty,je=Object.getOwnPropertyDescriptor,Ze=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?je(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&Ge(t,i,s),s};let Ye=class extends((0,n.N)(E.Ay)(s.WF)){constructor(){super(...arguments),this.activeLayers=Ee.bj.activeLayers,this.inactiveLayers=[],this.eventCount=0,this.mapState="Loading"}static get styles(){return[z.A,$e.A,Fe.A,T.A,s.AH`
				:host {
					font-size: var(--smaller);
					color: rgb(var(--darker));
					display: flex;
					flex: 1;
				}

				.flex-items-center {
					display: flex;
					align-items: center;
				}

				.layers-container {
					display: flex;
					flex-direction: column;
					flex: 1;
					position: relative;
				}

				.layers-controls {
					padding: 0 var(--gap);
					border-bottom: var(--border-width) dotted rgb(var(--concrete));
					display: flex;
					align-items: center;
					position: relative;
				}

				.layers-controls::before {
					background: linear-gradient(rgb(255, 255, 255, 1), rgba(255, 255, 255, 0));
					content: '';
					z-index: 1;
					display: block;
					position: absolute;
					bottom: calc(-1 * var(--gap) - 1px);
					left: 0;
					right: 0;
					height: var(--gap);
				}

				.layers-controls > p {
					margin: calc(var(--gap) / 2) 0;
				}

				.layer-controls_btn {
					padding: 0.25rem;
					margin: 0.25rem;
					text-decoration: none;
				}

				.layer-controls_btn:hover {
					text-decoration: underline;
				}

				form-checkbox,
				ul.legend-layers-list > li.layer-group {
					padding: 0 calc(var(--gap) - 0.25rem);
					margin: 0 0.25rem;
				}
				.partial-line {
					border-top: var(--border-width) dotted rgb(var(--concrete));
				}
				.hr {
					margin: 0 0 2px 0;
				}

				#trucker-toggle-help {
					padding-left: 0.125rem;
				}
				@media (min-width: ${(0,s.iz)($.EA.TABLET)}) {
					#trucker-toggle-help {
						display: block;
					}
				}
			`]}render(){return s.qy`
			<div class="layers-container">
				<div class="layers-controls">
					<p>Select:</p>
					<button
						class="btn btn-link layer-controls_btn"
						@click=${this.selectDefaultLayers}
						aria-label="Select Default Layers"
					>
						Default
					</button>
					/
					<button
						class="btn btn-link layer-controls_btn"
						@click=${this.clearAllLayerSelections}
						aria-label="None, Deselect all layers"
					>
						None
					</button>
				</div>
				<ul class="legend-layers-list">
					${null!=v.Gu?.groups&&v.Gu.groups.length>0?this.renderGroupedLayers(v.Gu.groups):this.renderUngroupedLayers()}
					<li>
						<p aria-live="assertive" style="text-align: center;">${this.mapState}</p>
					</li>
				</ul>
				${v.UB?s.qy`
							<div class="flex-items-center partial-line">
								<toggle-switch
									name=${v.UB.slug}
									?checked=${!!v.UB.sublayers&&v.UB.sublayers.every((e=>this.activeLayers[e]))}
									?hide-switch=${!0===v.UB.hideSwitch}
									@change=${this.handleParentToggle}
									data-test-id="trucker-toggle"
								>
									<img
										class="legend-layers-list-icon"
										src=${(0,L.J)(v.UB.icon)}
										alt=""
										role="presentation"
									/>
									${v.UB.label}
								</toggle-switch>
								${(0,p._)(v.d2.truckerModeToggleHelp)?s.qy`<context-help-tooltip
											id="trucker-toggle-help"
											small-footprint
											position=${Y.kl.BOTTOM}
											@show="${()=>{E.Ay.dispatch({type:$.Aky,title:"trucking model toggle"})}}"
									  >
											<h3>What's This?</h3>
											<p>${(0,p._)(v.d2.truckerModeToggleHelp)}</p>
									  </context-help-tooltip>`:s.qy``}
							</div>
					  `:void 0}
				<hr class="hr partial-line" />
				<default-map-view-controls></default-map-view-controls>
			</div>
		`}renderGroupedLayers(e){const t={};v.j9.forEach((i=>{if(i.hidden)return;const r=i.group?.trim();null!=r&&e.includes(r)?t[r]?t[r].push(i):t[r]=[i]:t[""]?t[""].push(i):t[""]=[i]}));const i=t[""]||[];return delete t[""],s.qy`
			${e.filter((e=>null==e||t[e])).map((e=>{if(null==e||""===e.trim())return s.qy`<hr class="mx-3" />`;const i=t[e];return s.qy`
						<li class="layer-group">
							<b class="">${e}</b>
							<ul class="list-unstyled ps-0">
								${i.map((e=>s.qy`
										<li>
											<form-checkbox
												@change=${this.handleCheckbox}
												?checked=${!!this.activeLayers[e.slug]}
												id=${`${e.slug}-checkbox`}
												value=${e.slug}
											>
												${e.icon&&s.qy`<img
													src=${e.icon}
													alt=""
													class="legend-layers-list-icon"
													role="presentation"
												/>`}
												<div class="text">${e.label}</div>
											</form-checkbox>
										</li>
									`))}
							</ul>
						</li>
					`}))}
			${0===i.length?void 0:s.qy`
						<hr class="mx-3" />
						${i.map((e=>s.qy`
								<li>
									<form-checkbox
										@change=${this.handleCheckbox}
										?checked=${!!this.activeLayers[e.slug]}
										id=${`${e.slug}-checkbox`}
										value=${e.slug}
									>
										${e.icon&&s.qy`<img
											src=${e.icon}
											alt=""
											class="legend-layers-list-icon"
											role="presentation"
										/>`}
										<div class="text">${e.label}</div>
									</form-checkbox>
								</li>
							`))}
						<hr class="mx-3" />
				  `}
		`}renderUngroupedLayers(){return s.qy`${v.j9.map((e=>e.hidden?void 0:s.qy`
						<li>
							<form-checkbox
								@change=${this.handleCheckbox}
								?checked=${!!this.activeLayers[e.slug]}
								id=${`${e.slug}-checkbox`}
								value=${e.slug}
							>
								${e.icon&&s.qy`<img
									src=${e.icon}
									alt=""
									class="legend-layers-list-icon"
									role="presentation"
								/>`}
								<div class="text">${e.label}</div>
							</form-checkbox>
						</li>
				  `))}`}stateChanged(e){this.activeLayers=e.app.activeLayers,this.inactiveLayers=e.app.inactiveLayers,this.eventCount=e.map.mapCollections.length,this.mapState=`Map Now Showing ${this.eventCount} Features`}handleCheckbox(e){this.mapState="Loading";const t=e.currentTarget;if(this.inactiveLayers.includes(t.value))return t.checked=!1,E.Ay.dispatch({type:$.j2Q,error:{type:$.i65.REDACTED}}),void setTimeout((()=>{E.Ay.dispatch({type:$.j2Q,error:null})}),4e3);const i=t.value;i===v.Re.ROAD_REPORTS&&v.j9.some((({slug:e})=>e===$.f2p.OVERSIZE_LOADS))&&E.Ay.dispatch((0,Be.Ay)($.f2p.OVERSIZE_LOADS,t.checked)),E.Ay.dispatch((0,Be.Ay)(i,t.checked));const r=t.checked?Ue.U.TOGGLE_LAYER_ON:Ue.U.TOGGLE_LAYER_OFF;E.Ay.dispatch((0,Ue.P)(r,t.value,$.l_R.LAYER)),E.Ay.dispatch((0,f.gX)())}clearAllLayerSelections(){E.Ay.dispatch((0,Be.h)({})),E.Ay.dispatch((0,f.gX)())}selectDefaultLayers(){E.Ay.dispatch((0,Be.WZ)())}handleParentToggle(e){const t=e.currentTarget;(v.UB&&v.UB.sublayers?v.UB.sublayers:[]).forEach((e=>{E.Ay.dispatch((0,Be.Ay)(e,t.checked))}));const i=t.checked?Ue.U.COMMERCIAL_LAYER_ON:Ue.U.COMMERCIAL_LAYER_OFF;E.Ay.dispatch((0,Ue.P)(i,void 0,$.l_R.LAYER)),E.Ay.dispatch((0,f.gX)())}};Ze([(0,o.MZ)({type:Object})],Ye.prototype,"activeLayers",2),Ze([(0,o.MZ)({type:Array})],Ye.prototype,"inactiveLayers",2),Ze([(0,o.MZ)({type:Number})],Ye.prototype,"eventCount",2),Ze([(0,o.MZ)({type:String})],Ye.prototype,"mapState",2),Ye=Ze([(0,o.EM)("layers-panel")],Ye),i(51441);var Ke=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,Xe=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?Je(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&Ke(t,i,s),s};let et=class extends((0,n.N)(E.M_)(s.WF)){constructor(){super(),this.urlParams=new URLSearchParams(window.location.search),this.isLayersCollapsed=!1,this.isLayersButtonSelected=!this.urlParams.get("kiosk"),this.isLegendButtonSelected=!!this.urlParams.get("kiosk"),this.drawingMode=!1;const e=!window.matchMedia(`(min-width: ${$.EA.TABLET})`).matches;E.M_.dispatch((0,b.aB)(e))}static get styles(){return[z.A,T.A,Z.A,s.AH`
				:host {
					pointer-events: auto;
					border-radius: var(--border-radius);
					box-shadow: var(--shadow-md);
					transition: flex-basis 0.2s cubic-bezier(0, 0, 0.2, 1);
				}

				:host([collapsed]) {
					flex-basis: 9rem !important;
				}

				.layers-legend-container {
					position: relative;
				}

				.layers-legend-button-container {
					display: grid;
				}

				.layers-legend-button-container_open {
					grid-template-columns: 1fr 1fr;
				}

				.layers-legend-button-container_closed {
					grid-template-columns: auto;
				}

				.panel-button {
					background-color: rgb(var(--clouds));
					border: var(--border-width) solid rgb(var(--concrete));
					border-radius: 0;
					color: rgb(var(--darker));
					clip-path: inset(-0.75rem -0.75rem 0 -0.75rem);
					transition: all 0.15s ease-out;
				}

				.panel-button:hover {
					background-color: rgb(var(--tab-fill));
				}

				.panel-button_left {
					box-shadow: var(--shadow-inset-bottom-right);
					border-top-left-radius: var(--border-radius);
				}
				.panel-button_right {
					box-shadow: var(--shadow-inset-bottom-left);
					border-left: 0;
					border-top-right-radius: var(--border-radius);
				}

				.panel-button_highlighted {
					background-color: white;
					border-bottom-color: white;
					z-index: 1;
					color: rgb(var(--darkest));
					box-shadow: none;
				}

				.panel-button_highlighted:hover {
					background-color: white;
				}

				.panel-button_single {
					padding-left: calc(var(--gap) * 2);
					background-color: white;
					border-radius: var(--border-radius);
					z-index: 1;
					color: rgb(var(--darkest));
					box-shadow: none;
				}

				.info-panel {
					display: flex;
					max-width: calc(${(0,s.iz)($.uqS)} - var(--border-width) * 2);
					background-color: white;
					grid-column: span 2;
					border-radius: 0 0 0.25rem 0.25rem;
					position: relative;
					border: var(--border-width) solid rgb(var(--concrete));
					border-top: 0;
					max-height: calc(var(--information-panel-height) - 3.5rem);
				}

				.info-panel--tutorial {
					max-height: 25vh;
				}

				.collapse-btn_layers {
					position: absolute;
					left: -1.5rem;
					z-index: 6;
				}
				#layers-tutorial {
					--bubble-width: calc(100vw - var(--gap) * 2);
				}

				#layers-help {
					z-index: 6;
					position: absolute;
					left: 35%;
					top: 2%;
					display: none;
				}

				#legend-help {
					z-index: 7;
					position: absolute;
					left: 85%;
					top: 2%;
					display: none;
				}

				#trucker-toggle-help {
					z-index: 7;
					position: absolute;
					left: 85%;
					bottom: 2%;
					display: none;
				}

				.link-311 {
					height: 48px;
					width: 48px;
					display: flex;
					align-items: center;
					justify-content: center;
					background: red;
					position: absolute;
					bottom: -68px;
					right: 10px;
					z-index: 20;
					border-radius: 48px;
					background: #192840;
				}
				.link-311 img {
					width: 30px;
				}

				no-click-overlay {
					border-radius: var(--border-radius);
				}

				@media (min-width: ${(0,s.iz)($.EA.TABLET)}) {
					#layers-tutorial {
						--bubble-max-width: calc(100vw - var(--gap) * 3 - ${(0,s.iz)($.uqS)});
						--bubble-width: 32rem;
					}
					.info-panel {
						max-height: var(--information-panel-height);
					}

					#layers-help,
					#legend-help,
					#trucker-toggle-help {
						display: block;
					}
				}
			`]}render(){return s.qy`
			<popper-container
				class="layers-legend-container tutorial-popper fadein"
				position=${this.isPhone?Y.kl.BOTTOM:Y.kl.LEFT}
				?is-visible=${this.tutorialStep===$.QeQ.LAYER_CONTROLS}
			>
				<!-- override the width properties for this tutorial bubble.  max-width to account for toolbar, gap, and bubble arrow -->
				${v.BQ.welcome.steps.layers?s.qy`
							<tutorial-bubble id="layers-tutorial" slug=${$.QeQ.LAYER_CONTROLS}>
								<h2 slot="title">${v.BQ.welcome.steps.layers.title}</h2>
								<div slot="content">${(0,p._)(v.BQ.welcome.steps.layers.content)}</div>
								<div slot="next-button-label">NEXT TIP</div>
							</tutorial-bubble>
					  `:void 0}
				<collapse-button
					slot="toggler"
					tabindex="0"
					@keypress=${this.toggleCollapsableButtons}
					@click=${this.toggleCollapsableButtons}
					aria-label=${(this.isLayersCollapsed?"Expand":"Collapse")+" layers and legend"}
					class="btn collapse-btn_layers"
					?collapsed=${!this.isLayersCollapsed}
				></collapse-button>
				<div
					slot="toggler"
					class="${(0,d.H)({"layers-legend-button-container":!0,"layers-legend-button-container_open":!this.isLayersCollapsed,"layers-legend-button-container_closed":this.isLayersCollapsed,"tutorial-spotlight":this.tutorialStep===$.QeQ.LAYER_CONTROLS})}"
					role="tablist"
				>
					${this.drawingMode?s.qy`<no-click-overlay></no-click-overlay>`:s.qy``}
					${this.isLayersCollapsed?s.qy` ${v.s1.link311?s.qy`
											<a href=${v.s1.link311} class="link-311" target="_blank"
												><img src="${"/images/icon-chat-bubble.svg"}" alt="Visit 311"
											/></a>
									  `:s.qy``}<button
									class="panel-button btn btn-sm panel-button_single"
									@click=${this.openPanel}
								>
									Layers/Legend
								</button>`:s.qy`${v.s1.link311?s.qy`
											<a href=${v.s1.link311} class="link-311" target="_blank"
												><img src="${"/images/icon-chat-bubble.svg"}" alt="Visit 311"
											/></a>
									  `:s.qy``}<button
									class="${(0,d.H)({btn:!0,"btn-sm":!0,"panel-button":!0,"panel-button_left":!0,"panel-button_highlighted":this.isLayersButtonSelected})}"
									aria-selected="${this.isLayersButtonSelected}"
									@click=${this.toggleLayersButton}
									role="tab"
								>
									${(0,I.A)("map.layers","Layers")}
								</button>

								${null===v.d2.layersHelp?s.qy``:s.qy` <context-help-tooltip
											id="layers-help"
											small-footprint
											position=${Y.kl.BOTTOM}
											@show="${()=>{E.M_.dispatch({type:$.Aky,title:"layers help"})}}"
									  >
											<h3>What's This?</h3>
											<p>${(0,p._)(v.d2.layersHelp)}</p>
									  </context-help-tooltip>`}
								<button
									class="${(0,d.H)({btn:!0,"btn-sm":!0,"panel-button":!0,"panel-button_right":!0,"panel-button_highlighted":this.isLegendButtonSelected})}"
									@click=${this.toggleLegendButton}
									role="tab"
									aria-selected="${this.isLegendButtonSelected}"
								>
									${(0,I.A)("map.legend","Legend")}
								</button>
								${null===v.d2.legendHelp?s.qy``:s.qy` <context-help-tooltip
											id="legend-help"
											small-footprint
											position=${Y.kl.BOTTOM}
											@show="${()=>{E.M_.dispatch({type:$.Aky,title:"legend help"})}}"
									  >
											<h3>What's This?</h3>
											<p>
												<unsafe-translate-html
													.text=${v.d2.legendHelp}
												></unsafe-translate-html>
											</p>
									  </context-help-tooltip>`} `}
					${this.isLayersCollapsed?"":s.qy`
								<div
									class=${(0,d.H)({"info-panel":!0,"info-panel--tutorial":this.tutorialStep===$.QeQ.LAYER_CONTROLS})}
								>
									${this.isLayersButtonSelected?s.qy` <layers-panel></layers-panel> `:s.qy`<legend-panel></legend-panel>`}
								</div>
						  `}
				</div>
			</popper-container>
		`}stateChanged(e){this.isPhone=e.app.layout===$.EA.PHONE_XL,this.tutorialStep=(0,b.Xv)(e),this.isLayersCollapsed=e.app.isLayersCollapsed,this.drawingMode=e.search.drawingMode}openPanel(){E.M_.dispatch((0,b.aB)(!1))}toggleCollapsableButtons(){E.M_.dispatch((0,b.aB)(!this.isLayersCollapsed))}toggleLayersButton(){this.isLegendButtonSelected=!1,this.isLayersButtonSelected=!0}async toggleLegendButton(){await Promise.resolve().then(i.bind(i,51441)),this.isLayersButtonSelected=!1,this.isLegendButtonSelected=!0}};Xe([(0,o.MZ)({type:Boolean,reflect:!0,attribute:"collapsed"})],et.prototype,"isLayersCollapsed",2),Xe([(0,o.MZ)({type:Boolean})],et.prototype,"isPhone",2),Xe([(0,o.MZ)({type:Boolean})],et.prototype,"isLayersButtonSelected",2),Xe([(0,o.MZ)({type:Boolean})],et.prototype,"isLegendButtonSelected",2),Xe([(0,o.MZ)({type:String})],et.prototype,"tutorialStep",2),Xe([(0,o.MZ)({type:Boolean})],et.prototype,"drawingMode",2),et=Xe([(0,o.EM)("layers-legend-panel")],et);var tt=i(19821),it=i(5124),rt=i(85864),at=(i(32825),Object.defineProperty),st=Object.getOwnPropertyDescriptor,ot=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?st(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&at(t,i,s),s};let nt=class extends((0,n.N)(E.M_)(s.WF)){constructor(){super(),this.modalView=tt.FL.modalView,this.focusLoopDivRef=(0,U._)(),this.addEventListener("click",(e=>{e.currentTarget===(0,rt.A)(e)&&E.M_.dispatch((0,ie.z)(null))})),document.addEventListener("keydown",(e=>{this.open&&"Escape"===e.code&&E.M_.dispatch((0,ie.z)(null))}))}static get styles(){return[z.A,T.A,it.A,s.AH`
				@media screen and (prefers-reduced-motion: reduce) {
					:host {
						transition: none;
					}
				}

				:host {
					position: fixed;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					background: rgba(var(--dialog-modals-bg, 0, 0, 0), 0.5);
					backdrop-filter: var(--filter-effect-dialogs);
					transition: opacity 0.15s ease-in-out, visibility 0.15s ease-in-out;
					opacity: 0;
					visibility: hidden;
					z-index: 11;
				}

				:host([open]) {
					opacity: 1;
					visibility: visible !important;
				}

				.modal {
					display: none;
					width: 100%;
					height: 100%;
					align-items: center;
					justify-content: center;
					pointer-events: none;
				}

				@media screen and (prefers-reduced-motion: reduce) {
					:host([open]) .modal {
						animation: none;
					}
				}
				:host([open]) .modal {
					animation: enlarge 0.25s;
					display: flex;
				}
			`]}render(){return s.qy`
			<div role="dialog" class="modal" aria-label="${this.modalView} modal">
				${this.modalView===$.Gqw.ACCOUNT&&this.accountModalView===$.Bjw.SETTINGS?s.qy` <settings-form> </settings-form> `:void 0}
				${this.modalView===$.Gqw.ACCOUNT&&this.accountModalView===$.Bjw.ALERTS?s.qy` <alerts-form></alerts-form> `:void 0}
				${this.modalView===$.Gqw.ACCOUNT&&this.accountModalView===$.Bjw.DIAL_IN?s.qy` <dial-in-form></dial-in-form> `:void 0}
				${this.modalView===$.Gqw.ACCOUNT&&this.accountModalView===$.Bjw.ACTIVATE?s.qy` <activate-panel></activate-panel> `:void 0}
				${this.modalView===$.Gqw.FEEDBACK?s.qy` <modal-feedback></modal-feedback>`:void 0}
				${$.Gqw.LOGIN===this.modalView?s.qy` <signin-form></signin-form>`:void 0}
				${this.modalView===$.Gqw.VERIFY?s.qy`<verify-message></verify-message>`:void 0}
				${$.Gqw.ACCOUNT===this.modalView&&this.accountModalView===$.Bjw.CREATE?s.qy` <signup-form></signup-form>`:void 0}
				${$.Gqw.ACCOUNT===this.modalView&&this.accountModalView===$.Bjw.FORGOT?s.qy` <forgot-password-form></forgot-password-form>`:void 0}
				${$.Gqw.ACCOUNT===this.modalView&&this.accountModalView===$.Bjw.PASSWORD_RESET?s.qy` <password-reset-form></password-reset-form>`:void 0}
				${$.Gqw.ACCOUNT===this.modalView&&this.accountModalView===$.Bjw.EMAIL_UPDATE?s.qy` <email-verifier></email-verifier>`:void 0}
				${this.modalView===$.Gqw.NEGATIVE_EVENT_FEEDBACK?s.qy` <modal-negative-event-feedback></modal-negative-event-feedback>`:void 0}
				${this.modalView===$.Gqw.FAVORITE?s.qy`<favorite-form></favorite-form>`:void 0}
				${this.modalView===$.Gqw.ALERTD?s.qy`<alertd-unsubscribe></alertd-unsubscribe>`:void 0}
				${this.modalView===$.Gqw.COMING_SOON?s.qy`<coming-soon></coming-soon>`:void 0}
				${this.modalView===$.Gqw.NLP?s.qy`<modal-nlp></modal-nlp>`:void 0}
				${this.modalView===$.Gqw.FLOODGATE?s.qy`<modal-floodgate></modal-floodgate>`:void 0}
			</div>
			<div ${(0,U.K)(this.focusLoopDivRef)} tabindex="0"></div>
		`}connectedCallback(){super.connectedCallback();const e=()=>{this.focusLoopDivRef.value?this.focusLoopDivRef.value.addEventListener("focus",(()=>this.focus())):setTimeout(e,1e3)};e()}stateChanged(e){this.modalView=e.modal.modalView,this.accountModalView=e.your511.accountView,this.open=!!this.modalView&&[$.Gqw.FEEDBACK,$.Gqw.LOGIN,$.Gqw.ACCOUNT,$.Gqw.NEGATIVE_EVENT_FEEDBACK,$.Gqw.FAVORITE,$.Gqw.ALERTD,$.Gqw.COMING_SOON,$.Gqw.NLP,$.Gqw.FLOODGATE,$.Gqw.VERIFY].includes(this.modalView),this.setAttribute("tabindex",this.open?"0":"-1")}willUpdate(e){super.willUpdate(e),(e.has("open")&&this.open||this.open&&e.has("modalView"))&&setTimeout((()=>this.focus()),350)}};ot([(0,o.MZ)({type:Boolean,reflect:!0})],nt.prototype,"open",2),ot([(0,o.MZ)({type:String,reflect:!0})],nt.prototype,"mode",2),ot([(0,o.MZ)({type:String})],nt.prototype,"modalView",2),ot([(0,o.MZ)({type:String})],nt.prototype,"accountModalView",2),nt=ot([(0,o.EM)("modal-dialogs")],nt);var lt=i(87190),ct=(i(99201),Object.defineProperty),dt=Object.getOwnPropertyDescriptor,pt=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?dt(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&ct(t,i,s),s};let ut=class extends((0,n.N)(E.M_)(s.WF)){constructor(){super(...arguments),this.myLocation={statusCode:lt.Cg},this.finding=!1}static get styles(){return[z.A,T.A,s.AH`
				:host {
					display: block;
				}
				.map-controls-wrap {
					box-shadow: var(--shadow-md);
					background-color: rgb(var(--map-controls-bg, 255, 255, 255));
					border: var(--border-width) solid rgb(var(--concrete));
					border-radius: var(--border-radius);
					margin-bottom: var(--gap);
					position: relative;
				}
				.map-controls-wrap:hover .location-error-wrapper {
					visibility: initial;
				}
				.map-controls-btn {
					fill: rgb(var(--map-controls-btn-fill, var(--asbestos)));
					position: relative;
					cursor: pointer;
				}
				.map-controls-btn[disabled] {
					opacity: 0.5;
				}
				.map-controls-btn .btn_icon {
					height: 1.25rem;
					width: 1.25rem;
					display: inline-block;
				}
				.map-controls-btn:hover {
					background-color: rgb(var(--tab-fill));
				}

				.map-controls-btn:active:after {
					visibility: visible;
					opacity: 1;
				}

				.map-controls-btn--active {
					fill: rgb(var(--map-controls-btn-fill-active, var(--peter-river)));
					background-color: rgb(var(--map-controls-btn-bg-active, 0, 0, 0));
				}
				.location-error-wrapper {
					visibility: hidden;
					position: absolute;
					top: calc(var(--border-width) * -1);
					left: 100%;
					padding-left: var(--gap);
				}
				.location-error {
					position: relative;
					border-radius: var(--border-radius);
					width: 300px;
					background: white;
					border: 1px solid rgb(var(--concrete));
					color: black;
					padding: var(--gap);
					z-index: 100;
					box-shadow: var(--shadow-md);
				}
				.location-error:after {
					content: ' ';
					position: absolute;
					width: 12px;
					height: 12px;
					left: -7px;
					right: auto;
					top: 40%;
					transform: translateY(-50%);
					bottom: auto;
					background: white;
					transform: rotate(-45deg);
					border-top: 1px solid rgb(var(--concrete));
					border-left: 1px solid rgb(var(--concrete));
				}
				.finding-location {
					animation: findingLocation 1s ease-in-out infinite;
				}
				@keyframes findingLocation {
					0% {
						opacity: 1;
					}
					50% {
						opacity: 0.3;
					}
					100% {
						opacity: 1;
					}
				}
				@media all and (max-width: ${(0,s.iz)($.EA.PHONE_XL)}) {
					.location-error-wrapper {
						padding-top: 3.75rem;
						left: 0;
						padding-left: 0;
					}
					.location-error:after {
						left: 1rem;
						right: auto;
						top: -7px;
						border-left: 0;
						border-right: 1px solid rgb(var(--concrete));
					}
				}
			`]}get permissionDenied(){return this.myLocation?.statusCode===GeolocationPositionError.PERMISSION_DENIED}renderError(){if(!this.permissionDenied)return s.qy``;const e=this.myLocation.statusCode===GeolocationPositionError.PERMISSION_DENIED?"Please allow location access.":"Unable to find location.";return s.qy`
			<div class="location-error-wrapper">
				<div class="location-error">
					<p>
						${e}
						<a target="_blank" href="https://support.google.com/maps/answer/2839911#permission"
							>Learn More</a
						>
					</p>
				</div>
			</div>
		`}render(){return s.qy`
			<div class="map-controls-wrap fadein">
				<button
					@click="${this.focusCurrentPosition}"
					class="btn map-controls-btn"
					title="My Location"
					aria-label="My Location"
					?disabled=${this.permissionDenied||this.finding}
				>
					<svg role="presentation" class="btn_icon ${this.finding?"finding-location":""}" aria-hidden="true">
						<use href="${"/images/sprites.svg#my-location"}"></use>
					</svg>
				</button>
				${this.renderError()}
				</div>
			</div>
			${this.renderMapMarker()}
		`}renderMapMarker(){return s.qy` <map-marker
			.position=${this.myLocation?.center}
			.icon=${{url:"/images/icon-location-dot.svg",scaledSize:{height:32,width:32}}}
			.opacity=${1}
			.clickable=${!1}
			.zIndex=${$.uNF}
		></map-marker>`}focusCurrentPosition(){this.finding=!0,E.M_.dispatch((0,lt.jU)())}stateChanged(e){this.myLocation=e.map.myLocation,e.map.myLocation&&(this.finding=!1)}};pt([(0,o.MZ)({type:Object})],ut.prototype,"myLocation",2),pt([(0,o.MZ)({type:Boolean})],ut.prototype,"finding",2),ut=pt([(0,o.EM)("map-controls-position")],ut);Object.defineProperty,Object.getOwnPropertyDescriptor;let ht=class extends s.WF{static get styles(){return[z.A,T.A,s.AH`
				:host {
					display: block;
					/* position: absolute; */
					/* pointer-events: auto; */
					/* margin: var(--gap); */
				}
				.map-controls-wrap {
					box-shadow: var(--shadow-md);
					background-color: rgb(var(--map-controls-bg, 255, 255, 255));
					border: var(--border-width) solid rgb(var(--concrete));
					border-radius: var(--border-radius);
				}
				.map-controls-btn {
					fill: rgb(var(--map-controls-btn-fill, var(--asbestos)));
					border-bottom: var(--map-controls-btn-separator-width, var(--border-width)) dotted
						rgb(var(--map-controls-btn-separator-color, var(--concrete)));
					position: relative;
				}

				.map-controls-btn:hover {
					background-color: rgb(var(--tab-fill));
				}

				.map-controls-btn:after {
					content: '';
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					visibility: hidden;
					opacity: 0;
					background-color: rgba(var(--darkest), 0.1);
					transition: all 0.15s ease-out;
					pointer-events: none;
				}

				.map-controls-btn:active:after {
					visibility: visible;
					opacity: 1;
				}

				.map-controls-btn:last-child {
					border-bottom: none;
				}

				.map-controls-btn--active {
					fill: rgb(var(--map-controls-btn-fill-active, var(--peter-river)));
					background-color: rgb(var(--map-controls-btn-bg-active, 0, 0, 0));
				}
				@media all and (max-width: ${(0,s.iz)($.EA.PHONE_XL)}) {
					.map-controls-zooms {
						display: none;
					}
				}
			`]}render(){return s.qy`
			<div class="map-controls-wrap fadein map-controls-zooms">
				<button
					@click="${this.zoomIn}"
					class="btn map-controls-btn"
					title="Zoom map in"
					aria-label="Zoom map in"
					data-test-zoom-in
				>
					<svg role="presentation" class="btn_icon" aria-hidden="true">
						<use href="${"/images/sprites.svg#plus"}"></use>
					</svg>
				</button>
				<button
					@click="${this.zoomOut}"
					class="btn map-controls-btn"
					title="Zoom map out"
					aria-label="Zoom map out"
					data-test-zoom-out
				>
					<svg role="presentation" class="btn_icon" aria-hidden="true">
						<use href="${"/images/sprites.svg#minus"}"></use>
					</svg>
				</button>
			</div>
		`}zoomIn(){const e=(0,D.h)("crc:zoomIn",{detail:null});this.dispatchEvent(e)}zoomOut(){const e=(0,D.h)("crc:zoomOut",{detail:null});this.dispatchEvent(e)}};ht=((e,t,i,r)=>{for(var a,s=t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=a(s)||s);return s})([(0,o.EM)("map-controls-zoom")],ht);var gt=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,yt=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?mt(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&gt(t,i,s),s};const vt="crc:updateMapType";let bt=class extends s.WF{constructor(){super(...arguments),this.mapType=google.maps.MapTypeId.ROADMAP}static get styles(){return[z.A,T.A,s.AH`
				:host {
					display: block;
					pointer-events: auto;
				}
				.map-controls-type-container {
					display: flex;
					box-shadow: var(--shadow-md);
					background-color: rgb(var(--map-controls-bg, 255, 255, 255));
					border: var(--border-width) solid rgb(var(--concrete));
					border-radius: var(--border-radius);
				}
				.map-controls-btn {
					fill: rgb(var(--map-controls-btn-fill, var(--asbestos)));

					position: relative;
				}

				.map-controls-btn:hover {
					background-color: rgb(var(--tab-fill));
				}

				.map-controls-btn--active {
					box-shadow: inset var(--shadow-sm);
				}

				.map-controls-border {
					border-right: var(--map-controls-btn-separator-width, var(--border-width)) dotted
						rgb(var(--map-controls-btn-separator-color, var(--concrete)));
				}
				@media all and (max-width: ${(0,s.iz)($.EA.PHONE_XL)}) {
					:host {
						display: none;
					}
				}
			`]}render(){return s.qy`
			<div class="map-controls-type-container fadein" role="radiogroup" aria-label="Map type">
				<button
					id="map-type--roadmap"
					role="radio"
					aria-checked=${this.mapType===google.maps.MapTypeId.ROADMAP}
					tabindex=${this.mapType===google.maps.MapTypeId.ROADMAP?"0":"-1"}
					@click="${this.updateMapType(google.maps.MapTypeId.ROADMAP)}"
					title="Map View"
					class="${(0,d.H)({btn:!0,"map-controls-btn":!0,"map-controls-btn--active":this.mapType===google.maps.MapTypeId.ROADMAP})}"
				>
					Map
				</button>
				<button
					id="map-type--hybrid"
					role="radio"
					aria-checked=${this.mapType===google.maps.MapTypeId.HYBRID}
					tabindex=${this.mapType===google.maps.MapTypeId.HYBRID?"0":"-1"}
					@click="${this.updateMapType(google.maps.MapTypeId.HYBRID)}"
					class="${(0,d.H)({btn:!0,"map-controls-btn":!0,"map-controls-btn--active":this.mapType===google.maps.MapTypeId.HYBRID})}"
					title="Satellite View"
				>
					Satellite
				</button>
			</div>
		`}connectedCallback(){super.connectedCallback(),this.addEventListener("keyup",(e=>{if("ArrowUp"===e.key||"ArrowLeft"===e.key||"ArrowDown"===e.key||"ArrowRight"===e.key){const e=(0,D.h)(vt,{detail:{mapType:this.mapType===google.maps.MapTypeId.ROADMAP?google.maps.MapTypeId.HYBRID:google.maps.MapTypeId.ROADMAP}});this.dispatchEvent(e),this.mapType===google.maps.MapTypeId.HYBRID?this.shadowRoot?.querySelector("#map-type--roadmap")?.focus():this.shadowRoot?.querySelector("#map-type--hybrid")?.focus()}}))}updateMapType(e){return()=>{const t=(0,D.h)(vt,{detail:{mapType:e}});this.dispatchEvent(t)}}};yt([(0,o.MZ)({type:String})],bt.prototype,"mapType",2),bt=yt([(0,o.EM)("map-controls-type")],bt);var ft=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,St=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?wt(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&ft(t,i,s),s};let At=class extends((0,n.N)(E.M_)(s.WF)){constructor(){super(...arguments),this.mapType=google.maps.MapTypeId.ROADMAP}static get styles(){return[z.A,T.A,s.AH`
				:host {
					display: flex;
					position: absolute;
					pointer-events: none;
					margin: var(--gap);
					gap: var(--gap);
				}
				.stack-vertical {
					display: flex;
					flex-direction: column;
					pointer-events: auto;
				}
			`]}render(){return s.qy`
			<div class="stack-vertical">
				<map-controls-position></map-controls-position>
				<map-controls-zoom
					@crc:zoomIn=${this.zoomIn}
					@crc:zoomOut=${this.zoomOut}
				></map-controls-zoom>
			</div>
			<map-controls-type
				@crc:updateMapType=${this.updateMapType}
				mapType=${this.mapType}
			></map-controls-type>
		`}zoomIn(){E.M_.dispatch((0,lt.ik)(1))}zoomOut(){E.M_.dispatch((0,lt.ik)(-1))}updateMapType(e){const{mapType:t}=e.detail;E.M_.dispatch((0,lt.tf)(t))}stateChanged(e){this.mapType=e.map.mapType}};St([(0,o.MZ)({type:String})],At.prototype,"mapType",2),At=St([(0,o.EM)("map-controls")],At),i(53903);var Et=i(61531),$t=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,Rt=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?Tt(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&$t(t,i,s),s};const kt=v.QW["enforcement-area"]??"/images/automated_enforcement_area.svg";let Mt=class extends((0,n.N)(E.M_)(s.WF)){constructor(){super(...arguments),this.isOffline=Ee.bj.offline,this.showEnforcementAreaWarning=!1,this.debouncedAreaWarningCheck=(0,Et.A)((e=>{if(e.map.showingMapLoader)return void(this.showEnforcementAreaWarning=!1);if(!Object.entries(e.app.activeLayers).some((([e,t])=>"enforcementAreas"===e&&t)))return void(this.showEnforcementAreaWarning=!1);const t=e.map.mapCollections.some((e=>e?.features.some((e=>e?.properties?.icon?.url===kt))||"Cluster"===e?.__typename&&e.features.some((e=>e?.properties?.clustered?.some((e=>e.icon===kt))))));this.showEnforcementAreaWarning=!t}),500)}static get styles(){return[T.A,s.AH`
				:host {
					display: block;
				}

				.notification {
					padding: 0.5rem var(--gap);
					border-radius: var(--border-radius);
					box-shadow: var(--shadow-md);
					position: relative;
					z-index: 1;
					pointer-events: auto;
					margin-bottom: var(--gap);
				}

				.notification--warning {
					border: 1px solid rgb(var(--that-sunday));
					background-color: rgb(var(--that-sunday-light));
				}

				.notification--error {
					border: 1px solid rgb(var(--danger-dark));
					background-color: rgb(var(--danger));
					color: #fff;
				}

				.notification--error a {
					color: #fff;
					text-decoration: underline;
				}
			`]}renderMapAlert(){return this.isOffline?s.qy`
				<div class="notification notification--warning">
					${(0,p._)(v.s1.error.network)}
				</div>
			`:this.error?.message?s.qy` <div class="notification notification--warning">${this.error.message}</div> `:this.error?.type===$.i65.INTERNAL_SERVER_ERROR?s.qy`
				<div class="notification notification--error">
					${(0,p._)(v.s1.error.application)}
				</div>
			`:this.error?.type===$.i65.REDACTED?s.qy`
				<div class="notification notification--error">
					<p>This information is not currently available. Please check back again soon.</p>
				</div>
			`:s.qy``}render(){return s.qy`
			${this.renderMapAlert()}
			${this.showEnforcementAreaWarning?s.qy`
						<div class="notification notification--warning">
							${(0,I.A)("automatedEnforcementArea.noFeaturesWarning","There are no Automated Enforcement Areas in the system at this time.")}
						</div>
				  `:void 0}
		`}stateChanged(e){this.error=e.map.error,this.isOffline=e.app.offline,this.debouncedAreaWarningCheck(e)}};Rt([(0,o.MZ)({type:Object})],Mt.prototype,"error",2),Rt([(0,o.MZ)({type:Boolean})],Mt.prototype,"isOffline",2),Rt([(0,o.MZ)({type:Boolean})],Mt.prototype,"showEnforcementAreaWarning",2),Mt=Rt([(0,o.EM)("map-notifications")],Mt),i(12240);var Ct=i(23316),_t=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,Lt=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?xt(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&_t(t,i,s),s};a().polyfill();let It=class extends((0,n.N)(E.M_)(s.WF)){constructor(){super(),this.isOffline=Ee.bj.offline,this.showingMapLoader=ze.M5.showingMapLoader,this.isSidebarCollapsed=O.q.isSidebarCollapsed,this.tutorialShow=!0,this.setTutorialShow=e=>{this.tutorialShow=e},this.emulateParallax=()=>{const e=Math.floor(this.scroller.scrollTop/2);requestAnimationFrame((()=>{this.map.style.transform=`translateY(${e+$.xBA/2}px)`}))},document.documentElement.style.setProperty("--scrollbar-width",`${function(){const e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e);const t=document.createElement("div");e.appendChild(t);const i=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),i}()}px`);try{const e=(0,S.c4)();E.M_.dispatch({type:$.f4d,isLoggedIn:!!e});const t=function(){try{const e=window.localStorage.getItem(A.HN)||window.sessionStorage.getItem(A.HN);return e?JSON.parse(e):null}catch(e){throw console.error(e),window.localStorage.removeItem(A.HN),window.sessionStorage.removeItem(A.HN),e}}();if(t&&E.M_.dispatch({type:$.Bb,account:t}),e){const t=(0,S.VV)(e);if(!t)throw new Error;setTimeout((()=>{E.M_.dispatch((0,w.Wl)())}),t-Date.now())}}catch(e){E.M_.dispatch((0,w.Wl)())}let e=!1;window.addEventListener(Ct.Ir,(()=>{document.body.style.minHeight=`${window.innerHeight}px`,e=!0})),window.addEventListener(Ct.Z0,(()=>{setTimeout((()=>{document.body.style.minHeight="initial",e=!1}),100)})),window.addEventListener("resize",(()=>{const t=window.matchMedia(`(min-width: ${$.EA.DESKTOP})`).matches;e&&!t||(window.appDimensions.windowHeight=window.innerHeight)})),E.M_.dispatch({type:$.k2P}),E.M_.dispatch({type:$.GIe}),(0,u.cV)(),(0,u.eL)(),(0,u.Py)(),(0,h.gl)()}static get styles(){return[Z.A,z.A,s.AH`
				#tutorial-bubble-welcome,
				#tutorial-bubble-favorite-camera {
					position: fixed !important;
					z-index: 10;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -75%);
					overflow: hidden !important;
					max-height: 100vh !important;
				}
			`]}render(){return s.qy`<slot></slot>
			${v.BQ.welcome.steps.welcome?s.qy`
						<tutorial-bubble
							id="tutorial-bubble-welcome"
							class="fadein"
							slug=${$.QeQ.WELCOME}
							?hidden=${this.tutorialStep!==$.QeQ.WELCOME||!this.tutorialShow}
						>
							<h2 slot="title">${v.BQ.welcome.steps.welcome.title}</h2>
							<div slot="content">${(0,p._)(v.BQ.welcome.steps.welcome.content)}</div>
							<div slot="next-button-label">NEXT TIP</div>
						</tutorial-bubble>
				  `:void 0}
			${v.BQ.favorite.steps["favorite-camera"]?s.qy` <tutorial-bubble
						id="tutorial-bubble-favorite-camera"
						class="fadein"
						slug=${$.QeQ.FAVORITE_CAMERA_ADD}
						?hidden=${this.tutorialStep!==$.QeQ.FAVORITE_CAMERA_ADD}
				  >
						<h2 slot="title">${v.BQ.favorite.steps["favorite-camera"].title}</h2>
						<div slot="content">
							${(0,p._)(v.BQ.favorite.steps["favorite-camera"].content)}
						</div>
				  </tutorial-bubble>`:void 0}

			<div
				class=${(0,d.H)({"tutorial-spotlight":this.tutorialStep===$.QeQ.WELCOME&&this.tutorialShow||this.tutorialStep===$.QeQ.FAVORITE_CAMERA_ADD,fadein:this.tutorialStep===$.QeQ.WELCOME&&this.tutorialShow||this.tutorialStep===$.QeQ.FAVORITE_CAMERA_ADD})}
			></div> `}stateChanged(e){this.isOffline=e.app.offline,this.tutorialStep=(0,b.Xv)(e,this.setTutorialShow),this.showingMapLoader=e.map.showingMapLoader,this.isSidebarCollapsed=e.tray.isSidebarCollapsed}firstUpdated(){var e;this.classList.add("app-loaded"),void 0!==document.documentElement.style.webkitOverflowScrolling&&this.scroller.addEventListener("scroll",this.emulateParallax),this.scroller.addEventListener("scroll",(e=>{window.appDimensions.scrollerPositionTop=e.currentTarget.scrollTop})),this.tray.setScrollContainer(this.scroller),(0,l.S)(`(max-width: ${$.EA.TABLET})`,(e=>{e&&E.M_.dispatch((0,b.JK)($.EA.PHONE_XL))})),(0,l.S)(`(min-width: ${$.EA.TABLET}) and (max-width: ${$.EA.DESKTOP})`,(e=>{e&&E.M_.dispatch((0,b.JK)($.EA.TABLET))})),(0,l.S)(`(min-width: ${$.EA.DESKTOP}) and (max-width: ${$.EA.DESKTOP_XL})`,(e=>{e&&E.M_.dispatch((0,b.JK)($.EA.DESKTOP))})),(0,l.S)(`(min-width: ${$.EA.DESKTOP_XL})`,(e=>{e&&E.M_.dispatch((0,b.JK)($.EA.DESKTOP_XL))})),e=async(e,t)=>{const i=t===y.FIRST_RUN,r=E.M_.getState().your511.defaultMapView,a=window.location.pathname.split("/");i&&r&&!a?.[2]?await E.M_.dispatch((0,b.oo)(m(e,r))):await E.M_.dispatch((0,b.oo)(e,{isFirstRun:i})),t!==y.CLICK&&await E.M_.dispatch((0,f.gX)())},document.body.addEventListener("click",(t=>{if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const i=t.composedPath().filter((e=>"A"===e.tagName))[0];if(!i||i.hasAttribute("download"))return;const r=i.getAttribute("href"),{href:a}=i;if(!a||!r||a.includes("mailto:")||a.includes("javascript:"))return;const{location:s}=window,o=s.origin||`${s.protocol}//${s.host}`;!a.startsWith(o)||"_blank"===i.target||a.includes(`${window.origin}/help`)||a.includes(`${window.origin}/list`)||"external"===i.getAttribute("rel")||new URL(a.startsWith(o)?a:`${o}${a}`).href.startsWith(document.baseURI)&&(t.preventDefault(),e(r,1))})),window.addEventListener("popstate",(()=>{e(window.location.href,0)})),e(window.location.href,2),(0,c.R)((e=>{E.M_.dispatch((0,b.dP)(e))})),this._pollingTimer=setTimeout(this.primaryPolling,v.DR.clientPollTime),window.addEventListener($.Ve8,(()=>{clearTimeout(this._pollingTimer),this._pollingTimer=setTimeout(this.primaryPolling,v.DR.clientPollTime)})),document.addEventListener("visibilitychange",(()=>{this.primaryPolling(),this.secondaryPolling()})),setInterval(this.secondaryPolling,v.DR.clientPollTime),E.M_.dispatch((0,f.$e)());const t=document.getElementById("skipNav"),i=document.getElementById("endNav");t&&i&&(t.addEventListener("click",(()=>i.focus())),i.addEventListener("click",(()=>t.focus())));const r=document.getElementById("compatibility");null!=r&&/Trident\/|MSIE/.test(window.navigator.userAgent)&&(r.style.display="block");const a=document.getElementById("layers-wrap"),s=document.querySelector("app-map"),o=document.querySelector("app-header");if(a&&s&&o){const e=e=>{window.appDimensions.headerHeight=e,a.style.top=`${e}px`,s.style.marginTop=`${e}px`};window.screen?.orientation?.addEventListener("change",(()=>{setTimeout((()=>{window.screen.orientation.type.includes("portrait")&&window.innerWidth!==o.clientWidth&&window.location.reload()}),250)})),"ResizeObserver"in window?new ResizeObserver((t=>{e(t[0].contentRect.height)})).observe(o):(window.addEventListener("resize",(()=>{e(o.offsetHeight)})),e(o.offsetHeight))}}primaryPolling(){document.visibilityState&&"visible"!==document.visibilityState||E.M_.dispatch((0,f.gX)())}secondaryPolling(){document.visibilityState&&"visible"!==document.visibilityState||(E.M_.dispatch((0,f.$e)()),ue.W.forceWeatherRadarRefresh())}async getUpdateComplete(){return await this.header.updateComplete,await this.tray.updateComplete,!0}updated(e){e.has("showingMapLoader")&&this.showingMapLoader&&this.spinnerControl.setAttribute("show","true"),e.has("showingMapLoader")&&!this.showingMapLoader&&this.spinnerControl.removeAttribute("show"),e.has("isSidebarCollapsed")&&this.isSidebarCollapsed&&(this.mainWrap.classList.add("is-collapsed"),this.mapControls.classList.add("is-collapsed"),this.layersWrap.classList.add("layers-wrap--collapsed"),this.searchUpdate.classList.add("search-place-update--collapsed")),e.has("isSidebarCollapsed")&&!this.isSidebarCollapsed&&(this.mainWrap.classList.remove("is-collapsed"),this.mapControls.classList.remove("is-collapsed"),this.layersWrap.classList.remove("layers-wrap--collapsed"),this.searchUpdate.classList.remove("search-place-update--collapsed")),!0===e.get("isOffline")&&!1===this.isOffline&&(E.M_.dispatch((0,f.gX)()),ue.W.reloadTiles()),e.has("tutorialStep")&&!this.tutorialStep&&(this.tutorialShow=!1),e.has("tutorialStep")&&this.tutorialStep===$.QeQ.LAYER_CONTROLS&&this.layersWrap.classList.add("layers-wrap--tutorial"),e.has("tutorialStep")&&this.tutorialStep!==$.QeQ.LAYER_CONTROLS&&this.layersWrap.classList.remove("layers-wrap--tutorial"),!e.has("tutorialStep")||this.tutorialStep!==$.QeQ.CONTENT_TRAY&&this.tutorialStep!==$.QeQ.METRO&&this.tutorialStep!==$.QeQ.FAVORITE_ADD||this.mainWrap.classList.add("main-wrap--tutorial"),e.has("tutorialStep")&&this.tutorialStep!==$.QeQ.CONTENT_TRAY&&this.tutorialStep!==$.QeQ.METRO&&this.tutorialStep!==$.QeQ.FAVORITE_ADD&&this.mainWrap.classList.remove("main-wrap--tutorial")}};Lt([(0,o.MZ)({type:Boolean})],It.prototype,"isOffline",2),Lt([(0,o.MZ)({type:Boolean})],It.prototype,"showingMapLoader",2),Lt([(0,o.MZ)({type:Boolean})],It.prototype,"isSidebarCollapsed",2),Lt([(0,o.MZ)({type:Boolean})],It.prototype,"tutorialShow",2),Lt([(0,o.MZ)({type:String})],It.prototype,"tutorialStep",2),Lt([ne("#layers-wrap")],It.prototype,"layersWrap",2),Lt([ne("#spinner-control")],It.prototype,"spinnerControl",2),Lt([ne("#main-wrap")],It.prototype,"mainWrap",2),Lt([ne("#scroller")],It.prototype,"scroller",2),Lt([ne("app-map")],It.prototype,"map",2),Lt([ne("map-controls")],It.prototype,"mapControls",2),Lt([ne("layers-legend-panel")],It.prototype,"layersLegends",2),Lt([ne("search-place-update")],It.prototype,"searchUpdate",2),Lt([ne("app-header")],It.prototype,"header",2),Lt([ne("app-tray")],It.prototype,"tray",2),It=Lt([(0,o.EM)("app-shell")],It)},31224:(e,t,i)=>{"use strict";var r=i(71413),a=i(52706),s=i(38155),o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,l=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?n(t,i):t,l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&o(t,i,s),s};let c=class extends r.WF{constructor(){super(...arguments),this.checked=!1,this.value="",this.inputRef=(0,s._)()}static get styles(){return[r.AH`
				:host {
					display: flex;
					align-items: center;
					position: relative;
					cursor: pointer;
					margin-bottom: 0.75rem;
					transition: box-shadow 0.1s ease-in-out, color 0.1s ease-in-out;

					--checkbox-color-active: rgb(var(--peter-river));
				}

				:host(:hover) {
					color: rgba(var(--belize-hole));
				}

				:host(:focus) {
					outline: 0;
					box-shadow: 0 0 0 0.25rem rgba(var(--peter-river), 0.4);
				}

				input[type='checkbox'] {
					visibility: hidden;
					width: 1px;
					margin: -1px;
					padding: 0;
					clip: rect(0, 0, 0, 0);
				}

				label {
					flex: 1;
					display: flex;
					align-items: center;
					padding: 0.25rem 0;
				}

				input[type='checkbox'] + label:before {
					border: var(--border-width) solid rgb(var(--dell-gray));
					border-radius: 0.25rem;
					content: '\\00a0';
					display: block;
					font-weight: bold;
					height: var(--smaller);
					min-width: var(--smaller);
					margin: 0 0.5rem 0 0;
					padding: 0;
					line-height: 1rem;
					transition: all 0.1s ease-in-out;
				}

				input[type='checkbox'] + label:hover::before {
					background-color: rgba(var(--peter-river), 0.25);
				}

				input[type='checkbox']:checked + label:before {
					background: var(--checkbox-color-active);
					color: white;
					content: '\\2713';
					text-align: center;
				}
			`]}render(){return this.setAttribute("aria-checked",String(this.checked)),r.qy`
			<input
				${(0,s.K)(this.inputRef)}
				id="${this.id}"
				type="checkbox"
				.checked=${this.checked}
				readonly
			/>
			<label id="${this.value}" for="${this.id}" @click=${this.preventDefault}>
				<slot></slot>
			</label>
		`}connectedCallback(){this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.focusSelf),this.addEventListener("keyup",this.handleKeyup),this.setAttribute("tabindex","0"),this.setAttribute("role","checkbox"),this.setAttribute("aria-labelledby",this.value),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleClick),this.removeEventListener("focus",this.focusSelf),this.removeEventListener("keyup",this.handleKeyup)}focusSelf(){this.focus()}handleKeyup(e){"Enter"!==e.code&&"Space"!==e.code||(this.checked=!this.checked,this.setAttribute("aria-checked",String(this.checked)),this.dispatchEvent(new Event("change")))}preventDefault(e){"A"!==e.target.tagName&&e.preventDefault()}handleClick(e){"A"!==e.target.tagName&&(this.checked=!this.checked,this.setAttribute("aria-checked",String(this.checked)),this.dispatchEvent(new Event("change")))}};l([(0,a.MZ)({type:Boolean,reflect:!0})],c.prototype,"checked",2),l([(0,a.MZ)({type:String,reflect:!0})],c.prototype,"value",2),c=l([(0,a.EM)("form-checkbox")],c)},43908:(e,t,i)=>{"use strict";i.d(t,{U:()=>v,n4:()=>y});var r=i(71413),a=i(52706),s=i(30555),o=i(25461),n=i(38155),l=i(32701),c=i(24634),d=i(82625),p=i(31376),u=i(56188),h=Object.defineProperty,g=Object.getOwnPropertyDescriptor,m=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?g(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&h(t,i,s),s};function y(e){if(!e)return"";const t="(ddd) ddd-dddd";let i="";const r=e.replace(/\D/g,"");for(let e=0,a=0;e<14;e+=1)/\d/g.test(t.charAt(e))?t.charAt(e)===r.charAt(a)?(i+=r.charAt(a),a+=1):i+=t.charAt(e):"d"!==t.charAt(e)?""===r.charAt(a)&&"+"!==t.charAt(e)||(i+=t.charAt(e)):""===r.charAt(a)?i+="":(i+=r.charAt(a),a+=1);const a=t.charAt(i.length);return"d"!==a&&(i+=a),i}function v(e){return e.replace(/\D/g,"")}let b=class extends r.WF{constructor(){super(...arguments),this.label="",this.name="",this.value="",this.errorText="",this.floatLabel=!1,this.disabled=!1,this.isLoading=!1,this.isError=!1,this.isUpdated=!1,this.inputRef=(0,n._)()}static get styles(){return[l.A,c.A,d.A,p.A,r.AH`
				:host {
					display: block;
					position: relative;
				}
			`]}render(){return r.qy`
			<label
				for=${this.name}
				class=${(0,s.H)({"base-input-label":!0,"float-label":this.floatLabel})}
				>${this.label}</label
			>
			<input
				${(0,n.K)(this.inputRef)}
				id=${this.name}
				class=${(0,s.H)({"base-input":!0,"input-is-error":this.isError})}
				type="tel"
				maxlength="14"
				name=${this.name}
				label=${this.label}
				.value="${(0,o.V)(this.value)}"
				@input=${this.onInput}
				@blur=${this.onBlur}
				@focus=${this.onFocus}
				?disabled=${this.disabled}
				aria-invalid=${this.isError}
			/>
			<p
				class=${(0,s.H)({"input-error-label":!0,"input-error-label-show":this.isError})}
				aria-hidden=${!this.isError}
			>
				<svg class="input-error-label-icon" role="presentation" aria-label="Error">
					<use href="${"/images/sprites.svg#close"}" />
				</svg>
				${this.errorText}
			</p>
			<div
				class=${(0,s.H)({"error-spacer":!0,"error-spacer-is-error":this.isError})}
				aria-hidden=${!this.isError}
			></div>
			${this.isLoading?r.qy`<div class="input-spinner-container">
						<div class="spinner" aria-label="Loading..."></div>
				  </div>`:void 0}
		`}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this.focusInput)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this.focusInput)}focusInput(){this.inputRef.value?.focus()}onInput(e){const{inputType:t}=e,{name:i,value:r}=e.currentTarget,a=y(function(e,t){return"deleteContentBackward"!==t||4!==e.length&&9!==e.length?e:e.substring(0,e.length-1)}(r,t));this.value=a,this.dispatchEvent((0,u.h)("crc:textInput:input",{detail:{name:i,value:a}}))}onBlur(e){const{name:t,value:i}=e.currentTarget;this.dispatchEvent((0,u.h)("crc:textInput:blur",{detail:{name:t,value:i}})),""===i&&(this.floatLabel=!1)}onFocus(){this.floatLabel=!0}updated(e){e.has("value")&&(""===this.value?this.floatLabel=!1:this.floatLabel=!0)}};m([(0,a.MZ)({type:String})],b.prototype,"label",2),m([(0,a.MZ)({type:String})],b.prototype,"name",2),m([(0,a.MZ)({type:String,hasChanged:()=>!0})],b.prototype,"value",2),m([(0,a.MZ)({type:String})],b.prototype,"errorText",2),m([(0,a.MZ)({type:Boolean})],b.prototype,"floatLabel",2),m([(0,a.MZ)({type:Boolean})],b.prototype,"disabled",2),m([(0,a.MZ)({type:Boolean})],b.prototype,"isLoading",2),m([(0,a.MZ)({type:Boolean})],b.prototype,"isError",2),m([(0,a.MZ)({type:Boolean})],b.prototype,"isUpdated",2),b=m([(0,a.EM)("tel-input")],b)},51427:(e,t,i)=>{"use strict";var r=i(71413),a=i(52706),s=i(38155),o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,l=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?n(t,i):t,l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&o(t,i,s),s};let c=class extends r.WF{constructor(){super(...arguments),this.inputRef=(0,s._)(),this.checked=!1,this.label="",this.name="",this.disabled=!1,this.hideSwitch=!1}static get styles(){return[r.AH`
				@media screen and (prefers-reduced-motion: reduce) {
					:host {
						transition: none;
					}
				}
				:host {
					--toggle-switch-disabled-opacity: 0.5;
					--toggle-switch-toggle-duration: 0.1s;

					--toggle-switch-color: rgb(var(--concrete));
					--toggle-switch-color-active: rgb(var(--peter-river));
					--toggle-switch-color-focus: rgba(var(--peter-river), 0.5);

					--toggle-switch-track-height: 0.75rem;

					--toggle-switch-knob-color: rgb(var(--concrete));
					--toggle-switch-knob-color-active: rgb(var(--peter-river));

					display: block;
					outline: 0.25rem solid transparent;
					cursor: pointer;
					transition: fill 0.1s linear, color 0.1s linear, outline 0.15s ease-in-out;
					fill: var(--toggle-switch-color);
				}

				:host([hidden]) {
					display: none;
				}

				:host([disabled]) {
					opacity: var(--toggle-switch-disabled-opacity);
				}

				:host([checked]) {
					/*color: var(--toggle-switch-color-active);*/
					fill: var(--toggle-switch-color-active);
				}

				:host(:focus),
				:host(:hover) {
					--toggle-switch-knob-color: rgba(var(--peter-river), 0.5);
				}

				label {
					flex-grow: 1;
				}

				#track,
				#knob {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					margin: auto;
				}

				#wrapper {
					display: flex;
					padding: 0.5rem var(--gap);
					/*border-top: 1px solid black;*/
					/*justify-content: space-between;*/
					align-items: center;
				}

				label {
					/*margin-right: var(--gap);*/
					display: flex;
					align-items: stretch;
				}

				#inner-wrap {
					position: relative;
					height: 1.25rem;
					width: 2em;
					margin-right: 0.5rem;
				}

				#inner-wrap:focus:focus-visible {
					outline: rgb(var(--peter-river)) solid 0.25rem;
				}

				@media screen and (prefers-reduced-motion: reduce) {
					#track {
						transition: none;
					}
				}
				#track {
					height: var(--toggle-switch-track-height);
					width: 100%;
					border-radius: 1rem;
					background-color: var(--toggle-switch-knob-color);
					opacity: 0.25;
					transition: background-color var(--toggle-switch-toggle-duration);
				}

				:host([checked]) #track {
					background-color: var(--toggle-switch-knob-color-active);
				}

				@media screen and (prefers-reduced-motion: reduce) {
					#knob {
						transition: none;
					}
				}
				#knob {
					position: absolute;
					left: 0;
					top: 0;
					bottom: 0;
					margin: auto;
					height: 90%;
					width: 1.1rem;
					border-radius: 50%;
					background-color: var(--toggle-switch-knob-color);
					transition: transform var(--toggle-switch-toggle-duration),
						background-color var(--toggle-switch-toggle-duration);
				}

				@media screen and (prefers-reduced-motion: reduce) {
					:host([checked]) #knob {
						transition: none;
					}
				}
				:host([checked]) #knob {
					transform: translateX(70%);
					background-color: var(--toggle-switch-knob-color-active);
				}
			`]}render(){return r.qy`
			<span id="wrapper" @click="${this.clickHandler}">
				${this.hideSwitch?"":r.qy`
							<span
								${(0,s.K)(this.inputRef)}
								id="inner-wrap"
								aria-label="${this.label||this.name}"
								tabindex="0"
								role="switch"
								aria-checked="${this.checked}"
							>
								<span id="track"></span>
								<span id="knob"></span>
							</span>
					  `}
				<label for="wrapper">
					<slot></slot>
				</label>
			</span>
		`}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this.focusInput),this.addEventListener("keydown",this.keyDownHandler),this.hasAttribute("checked")||(this.checked=!1)}disconnectedCallback(){this.removeEventListener("focus",this.focusInput),this.removeEventListener("keydown",this.keyDownHandler)}focusInput(){this.inputRef.value?.focus()}clickHandler(e){this.disabled||(e.preventDefault(),this.toggleChecked())}keyDownHandler(e){"Enter"!==e.code&&"Space"!==e.code||this.disabled||(e.preventDefault(),this.toggleChecked())}toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}};l([(0,a.MZ)({type:Boolean,reflect:!0})],c.prototype,"checked",2),l([(0,a.MZ)({type:String})],c.prototype,"label",2),l([(0,a.MZ)({type:String})],c.prototype,"name",2),l([(0,a.MZ)({type:Boolean})],c.prototype,"disabled",2),l([(0,a.MZ)({type:Boolean,attribute:"hide-switch"})],c.prototype,"hideSwitch",2),c=l([(0,a.EM)("toggle-switch")],c)},19989:(e,t,i)=>{"use strict";i.r(t),i.d(t,{HeaderDrawCustomArea:()=>$,default:()=>T});var r=i(71413),a=i(52706),s=i(56599),o=i(5453),n=i(66003),l=i(52850),c=i(10388),d=i(83184),p=i(29349),u=i(62239),h=i(95050),g=i(24634),m=i(32701),y=i(56365),v=i(79066),b=i(85564),f=i(17026),w=(i(23316),Object.defineProperty),S=Object.getOwnPropertyDescriptor,A=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?S(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&w(t,i,s),s};function E(e){e.preventDefault()}let $=class extends((0,s.N)(c.M_)(r.WF)){constructor(){super(...arguments),this.active=!1,this.searchType=h.q_.type,this.urlAround="",this.drawingMode=!1}static get styles(){return[m.A,g.A,v.A,y.A,b.A,r.AH`
				:host {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.cancel-btn {
					margin-left: var(--gap);
					border: 1px solid rgb(var(--darkest));
					border-radius: var(--border-radius);
					padding: 0.5rem 1rem 0.5rem 1rem;
					background-color: #fff;
					color: rgb(var(--darkest));
				}

				.cancel-btn:hover {
					background-color: rgb(var(--clouds));
				}
			`]}render(){return r.qy`
			${this.drawingMode?r.qy` <button class="btn cancel-btn" @click=${this.onCancelClick}>Cancel</button>`:r.qy`<button class="btn cancel-btn" @click=${this.onCancelClick}>Done</button>
						<button class="btn cancel-btn" @click=${this.restartDraw}>Draw new area</button>`}
		`}updated(e){e.has("_urlAround")&&this.urlAround&&c.M_.dispatch((0,d.w$)(this.urlAround)),e.has("active")&&this.active&&this.startDraw(),e.has("searchType")&&this.searchType!==l.nXf.DRAW_CUSTOM_AREA&&this.clearMapPolygon(),e.has("tutorialStep")&&this.tutorialStep===l.QeQ.SEARCH&&this.searchType!==l.nXf.SEARCH_PLACE&&c.M_.dispatch({type:l.wIz,searchType:l.nXf.SEARCH_PLACE})}stateChanged(e){this.urlAround=e.search.urlAround,this.searchType=e.search.type,this.tutorialStep=(0,n.Xv)(e),this.customDrawnSearchArea=e.search.customDrawnSearchArea,this.drawingMode=e.search.drawingMode}disableMap(){f.W.getMap().then((e=>{e.setOptions({draggable:!1,scrollwheel:!1,disableDoubleClickZoom:!0,draggableCursor:"crosshair"})}))}enableMap(){f.W.getMap().then((e=>{e.setOptions({draggable:!0,scrollwheel:!0,disableDoubleClickZoom:!1,draggableCursor:void 0})}))}isPathClockwise(e){return!(google.maps.geometry.spherical.computeSignedArea(e)<0)}drawFreeHand(){f.W.getMap().then((e=>{if(this.mapPoly=new google.maps.Polyline({map:e,clickable:!1,strokeOpacity:.6,strokeColor:"#4287f5"}),!this.mapPoly)return;const t=google.maps.event.addListener(e,"mousemove",(e=>{e.latLng&&this.mapPoly?.getPath().push(e.latLng)}));google.maps.event.addListenerOnce(e,"mouseup",(()=>{this.completeDrawing(e,t,"mousedown")}));const i=document.getElementById("scroller");i?.addEventListener("touchmove",E,{passive:!1});const r=google.maps.event.addListener(e,"touchmove",(e=>{e.latLng&&this.mapPoly?.getPath().push(e.latLng)}));google.maps.event.addListenerOnce(e,"touchup",(()=>{this.completeDrawing(e,r,"touchdown")}))}))}async completeDrawing(e,t,i){if(!this.mapPoly)return;google.maps.event.removeListener(t);const r=this.mapPoly?.getPath().getArray().map((e=>({lat:e.lat(),lng:e.lng()})));this.clearMapPolygon();const a=document.getElementById("scroller");a?.removeEventListener("touchmove",E);const s=this.isPathClockwise(this.mapPoly?.getPath())?r:r.reverse(),n=(0,p.dV)(s),l=(0,o.A)(n,{tolerance:.005,highQuality:!1});google.maps.event.clearListeners(e.getDiv(),i),await c.M_.dispatch((0,p.rJ)(l)),this.enableMap()}clearMapPolygon(){this.mapPoly?.setMap(null)}onCancelClick(){this.mouseDrawingListener&&google.maps.event.removeListener(this.mouseDrawingListener),this.touchDrawingListener&&google.maps.event.removeListener(this.touchDrawingListener),this.enableMap(),c.M_.dispatch({type:l.Up5,drawingMode:!1}),c.M_.dispatch((0,u.C)(l.nXf.SEARCH_PLACE))}async restartDraw(){this.clearMapPolygon(),await c.M_.dispatch((0,p.Az)()),this.startDraw()}startDraw(){this.disableMap(),f.W.getMap().then((e=>{this.mouseDrawingListener=google.maps.event.addDomListenerOnce(e.getDiv(),"mousedown",(()=>{this.drawFreeHand()})),this.touchDrawingListener=google.maps.event.addDomListenerOnce(e.getDiv(),"touchstart",(()=>{this.drawFreeHand()}))}))}};A([(0,a.MZ)({type:Boolean})],$.prototype,"active",2),A([(0,a.MZ)({type:String})],$.prototype,"searchType",2),A([(0,a.MZ)({type:String})],$.prototype,"urlAround",2),A([(0,a.MZ)({type:String})],$.prototype,"tutorialStep",2),A([(0,a.MZ)({type:Object})],$.prototype,"customDrawnSearchArea",2),A([(0,a.MZ)({type:Object})],$.prototype,"mapPoly",2),A([(0,a.MZ)({type:Boolean})],$.prototype,"drawingMode",2),A([(0,a.MZ)({type:Object})],$.prototype,"mouseDrawingListener",2),A([(0,a.MZ)({type:Object})],$.prototype,"touchDrawingListener",2),$=A([(0,a.EM)("header-draw-custom-area")],$);const T=$},43627:(e,t,i)=>{"use strict";i.d(t,{h:()=>f});var r=i(71413),a=i(52706),s=i(30555),o=i(56599),n=i(80480),l=i(63822),c=i(52850),d=i(80027),p=i(10388),u=i(62239),h=i(95050),g=i(56188),m=i(10427),y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,b=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?v(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&y(t,i,s),s};class f extends((0,o.N)(p.M_)(r.WF)){constructor(){super(...arguments),this.active=!1,this.searchType=h.q_.type,this.urlAround="",this.dropdownExpanded=!1}activated(e){}deactivated(e){}onSearchSubmit(e){}shouldUpdate(e){return e.has("active")&&this.active&&this.activated(e),e.has("active")&&!this.active&&this.deactivated(e),!0}get dropdownHtml(){return r.qy`
			<dropdown-menu
				id="searchTypeDropdownMenu"
				slot="prefix"
				position="${m.nU.CENTER}"
				.expanded="${this.dropdownExpanded}"
				@show=${this.onShowDropdown}
				@hide=${this.onHideDropdown}
				role="menu"
			>
				${this.renderIconSearchTypeButton()}
				${d.FB.searchTypeButton.useTextOptionButton?r.qy`${this.renderTextSearchTypeButton()}`:r.qy``}
				<h5 id="search-by-header" aria-hidden="true" class="menu_header">
					${(0,l.A)("header.search.header.text","Search by:")}
				</h5>
				<button
					role="menuitem"
					type="button"
					class="${(0,s.H)({btn:!0,menu_item:!0,"menu_item--selected":this.searchType===c.nXf.SEARCH_PLACE})}"
					@click="${this.updateSearchType}"
					data-search-type="${c.nXf.SEARCH_PLACE}"
					aria-label="${c.nXf.SEARCH_PLACE.replace("_"," ")}"
				>
					<svg class="menu_icon" role="presentation" aria-hidden="true">
						<use href="${"/images/sprites.svg#map-pin"}"></use>
					</svg>
					<span class="btn-label">${(0,l.A)("header.search.place.label.text","Place")}</span>
				</button>
				<button
					role="menuitem"
					type="button"
					class="${(0,s.H)({btn:!0,menu_item:!0,"menu_item--selected":this.searchType===c.nXf.SEARCH_ROUTE})}"
					@click="${this.updateSearchType}"
					data-search-type="${c.nXf.SEARCH_ROUTE}"
					aria-label="${c.nXf.SEARCH_ROUTE.replace("_"," ")}"
				>
					<svg class="menu_icon" role="presentation" aria-hidden="true">
						<use href="${"/images/sprites.svg#directions"}"></use>
					</svg>
					<span class="btn-label">${(0,l.A)("header.search.route.label.text","Custom route")}</span>
				</button>

				${r.qy`
							<button
								role="menuitem"
								type="button"
								class="${(0,s.H)({btn:!0,menu_item:!0,"menu_item--selected":this.searchType===c.nXf.SEARCH_ROADWAY})}"
								@click="${this.updateSearchType}"
								data-search-type="${c.nXf.SEARCH_ROADWAY}"
								aria-label="${c.nXf.SEARCH_ROADWAY.replace("_"," ")}"
							>
								<svg class="menu_icon" role="presentation" aria-hidden="true">
									<use href="${"/images/sprites.svg#roadway"}"></use>
								</svg>
								<span class="btn-label">${(0,l.A)("header.search.roadway.label.text","Roadway")}</span>
							</button>
					  `}
				${r.qy`
							<button
								role="menuitem"
								type="button"
								class="${(0,s.H)({btn:!0,menu_item:!0,"menu_item--selected":this.searchType===c.nXf.SEARCH_PREDEFINED_AREA})}"
								@click="${this.updateSearchType}"
								data-search-type="${c.nXf.SEARCH_PREDEFINED_AREA}"
								aria-label="${c.nXf.SEARCH_PREDEFINED_AREA.replace(/_/g," ")}"
							>
								<svg class="menu_icon" role="presentation" aria-hidden="true">
									<use href="${"/images/sprites.svg#area-fill"}"></use>
								</svg>
								<span class="btn-label"
									>${(0,l.A)("header.search.predefinedArea.label.text","Predefined Area")}</span
								>
							</button>
					  `}

				<button
					role="menuitem"
					class="${(0,s.H)({btn:!0,menu_item:!0,"menu_item--selected":this.searchType===c.nXf.DRAW_CUSTOM_AREA})}"
					@click="${this.updateSearchType}"
					data-search-type="${c.nXf.DRAW_CUSTOM_AREA}"
					aria-label="${c.nXf.DRAW_CUSTOM_AREA.replace(/_/g," ")}"
				>
					<svg class="menu_icon" role="presentation" aria-hidden="true">
						<use href="${"/images/sprites.svg#draw-area"}"></use>
					</svg>
					<span class="btn-label">${(0,l.A)("header.search.draw.label.text","Draw Custom Area")}</span>
				</button>
			</dropdown-menu>
		`}renderTextSearchTypeButton(){return r.qy`<button
			slot="toggler"
			type="button"
			class="${(0,s.H)({btn:!0,"btn-light":!0,"search-btn":!0,"search-btn-left":!0,"dropdown-toggle":!0,"text-search-type":!0,active:this.dropdownExpanded})}"
			aria-label=${(0,l.A)("header.search.moreOptions","More Search Options")}
			aria-haspopup="true"
			aria-expanded=${this.dropdownExpanded}
			aria-controls="seachTypeDropdownMenu"
			role="menuitem"
		>
			${(0,l.A)("header.search.moreOptions","More Search Options")}
		</button>`}renderIconSearchTypeButton(){return r.qy`
			<button
				slot="toggler"
				type="button"
				class="${(0,s.H)({btn:!0,"btn-light":!0,"search-btn":!0,"search-btn-left":!0,"dropdown-toggle":!0,active:this.dropdownExpanded,"desktop-only":d.FB.searchTypeButton.useTextOptionButton})}"
				aria-label="Select search type"
				aria-haspopup="true"
				aria-expanded=${this.dropdownExpanded}
				aria-controls="seachTypeDropdownMenu"
			>
				<svg
					role="presentation"
					class="btn_icon"
					style=${(0,n.W)({display:this.searchType===c.nXf.SEARCH_PLACE?"block":"none"})}
					aria-hidden="true"
				>
					<use href="${"/images/sprites.svg#map-pin"}"></use>
				</svg>
				<svg
					role="presentation"
					class="btn_icon"
					style=${(0,n.W)({display:this.searchType===c.nXf.SEARCH_ROUTE?"block":"none"})}
					aria-hidden="true"
				>
					<use href="${"/images/sprites.svg#directions"}"></use>
				</svg>
				${r.qy`
							<svg
								role="presentation"
								class="btn_icon"
								style=${(0,n.W)({display:this.searchType===c.nXf.SEARCH_ROADWAY?"block":"none"})}
								aria-hidden="true"
							>
								<use href="${"/images/sprites.svg#roadway"}"></use>
							</svg>
					  `}
				${r.qy`
							<svg
								role="presentation"
								class="btn_icon"
								style=${(0,n.W)({display:this.searchType===c.nXf.SEARCH_PREDEFINED_AREA?"block":"none"})}
								aria-hidden="true"
							>
								<use href="${"/images/sprites.svg#area-fill"}"></use>
							</svg>
					  `}
			</button>
		`}stateChanged(e){this.searchType=e.search.type}onHideDropdown(){this.dropdownExpanded=!1}onShowDropdown(){this.dropdownExpanded=!0,p.M_.dispatch({type:c.CSl})}updateSearchType(e){const t=e.currentTarget.dataset.searchType;p.M_.dispatch((0,u.C)(t));const i=(0,g.h)(c.faW,{detail:{searchType:t}});window.dispatchEvent(i),this.dropdownExpanded=!1}onKeyDownSubmit(e){if(13===e.which||13===e.keyCode||"Enter"===e.key){if(this.dropdownExpanded)return;this.onSearchSubmit(e)}}}b([(0,a.MZ)({type:Boolean})],f.prototype,"active",2),b([(0,a.MZ)({type:String})],f.prototype,"searchType",2),b([(0,a.MZ)({type:String})],f.prototype,"urlAround",2),b([(0,a.MZ)({type:String})],f.prototype,"tutorialStep",2),b([(0,a.MZ)({type:Boolean,reflect:!0})],f.prototype,"dropdownExpanded",2)},23316:(e,t,i)=>{"use strict";i.d(t,{Al:()=>I,Ir:()=>_,Sb:()=>M,Z0:()=>x,j2:()=>C});var r=i(71413),a=i(52706),s=i(5218),o=i(30555),n=i(25461),l=i(61531),c=i(56599),d=i(10388),p=i(34850),u=i(80027),h=i(38155),g=i(58673),m=i(44508),y=i(52850),v=i(85385),b=i(66003),f=i(24634),w=i(32701),S=i(79066),A=i(96842),E=i(40974),$=i(56188),T=Object.defineProperty,R=Object.getOwnPropertyDescriptor,k=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?R(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&T(t,i,s),s};const M="place-chosen",C="prediction-clicked",_="search-focus",x="search-blur",L={name:"xx",geometry:{location:new google.maps.LatLng(0,0),viewport:new google.maps.LatLngBounds}};var I=(e=>(e.AREA="area",e.ROADWAY="roadway",e))(I||{});const O="There were no results for your search";let P=class extends((0,c.N)(d.Ay)(r.WF)){constructor(){super(),this.placeholder="",this.nlpOn=!1,this.splash=!1,this.error=!1,this.errorMsg="",this.value="",this.wrapperFocused=!1,this.open=!1,this.predictions=[],this.showLoader=!1,this.focused=!1,this.disabled=!1,this.originalValue="",this._sessionToken=void 0,this.autocompleteService=new google.maps.places.AutocompleteService,this.inputRef=(0,h._)(),this.maybeRouteSearch=!1,this.maybeRouteSearchRoutes=[],this.maybeRouteSearchLayers=[],this.maybeRouteSearchLayerLabels=[],this.updateValueDebounced=(0,l.A)((()=>{this.buildPredictions()}),this.nlpOn?1250:400,{trailing:!0}),this.previousRoadwaySearch="",this.addEventListener("focusin",(()=>{this.focused=!0})),this.addEventListener("focusout",this.onInputGroupFocusout)}static get styles(){return[w.A,f.A,S.A,r.AH`
				.result-layer-separator {
					color: rgba(var(--belize-hole), 0.25);
					margin-left: 0.3rem;
					margin-right: 0.3rem;
				}
				.result-layer {
					color: rgb(var(--belize-hole));
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: normal;
					max-width: 70%;
				}
				.result-p {
					padding-left: 0.5rem;
					text-align: left;
				}
				.result-p .btn-label {
					padding-left: 0;
				}
				.rounded {
					border-top-left-radius: 10px;
					border-bottom-left-radius: 10px;
				}
			`]}render(){return r.qy`
			<slot name="prefix"></slot>
			<label id="header-search-input-label" for="input" class="visually-hidden" aria-hidden="true"
				>${this.placeholder}</label
			>
			<input
				${(0,h.K)(this.inputRef)}
				id="input"
				type="text"
				?disabled=${this.disabled}
				@keydown="${this.onKeydown}"
				@input=${this.updateValueOnInput}
				@focus="${this.onInputFocused}"
				@click="${()=>{this.open=!!this.predictions.length}}"
				@blur=${this.onInputBlurred}
				@paste=${this.onInputPaste}
				placeholder="${this.placeholder}"
				.value=${(0,n.V)(this.value)}
				autocomplete="off"
				class=${(0,o.H)({input:!0,rounded:this.splash,results:this.splash&&(this.maybeRouteSearch||this.predictions.length)})}
				role="combobox"
				aria-expanded="${this.open}"
				aria-controls="autocomplete"
				aria-invalid="${!!this.errorMsg}"
				aria-describedby="header-search-input-label"
				aria-errormessage="${this.errorMsg?this.value?this.errorMsg:"Search Text Required":""}"
			/>

			<div class="spinner-wrap" ?data-show="${this.showLoader}"><div class="spinner"></div></div>
			<slot name="suffix"></slot>

			<div class="error-msg-wrap">
				<div class="error-msg" ?hidden="${!this.error}">
					${this.value?this.errorMsg:"Search Text Required"}
				</div>
			</div>

			<ul id="autocomplete" role="listbox" tabindex="-1">
				${this.maybeRouteSearch&&this.maybeRouteSearchRoutes.length>1?r.qy`<li>
							<button
								class="${(0,o.H)({btn:!0,result:!0,selected:"route"===this.selectedPrediction?.id})}"
								@mousedown="${this.onPredictionMouseover}"
								@click=${this.routeSearch}
								aria-label="${y.nXf.SEARCH_ROUTE}"
								tabindex="-1"
							>
								<svg class="btn_icon" role="presentation" aria-hidden="true">
									<use href="${"/images/sprites.svg#directions"}"></use>
								</svg>

								${this.maybeRouteSearchLayerLabels?.length>50||(0,v.V)()?r.qy`
											<p class="result-p">
												<span
													class="btn-label result-label result-text"
													style="text-transform: capitalize"
													><b>${this.maybeRouteSearchRoutes[0]} </b>
													to
													<b>${this.maybeRouteSearchRoutes[1]} </b></span
												>
												${this.maybeRouteSearchLayerLabels?r.qy` <br />
															<span
																class="result-layer"
																title="${this.maybeRouteSearchLayerLabels.toString()}"
																>${this.maybeRouteSearchLayerLabels}</span
															>`:null}
											</p>
									  `:r.qy` <span
												class="btn-label result-label result-text"
												style="text-transform: capitalize"
												><b>${this.maybeRouteSearchRoutes[0]} </b>
												to
												<b>${this.maybeRouteSearchRoutes[1]} </b></span
											>
											${this.maybeRouteSearchLayerLabels?r.qy` <span class="result-layer-separator">-</span>
														<span
															class="result-layer"
															title="${this.maybeRouteSearchLayerLabels.toString()}"
															>${this.maybeRouteSearchLayerLabels}</span
														>`:null}`}
							</button>
					  </li>`:""}
				${this.predictions.map((e=>e)).map((e=>r.qy`
							<li>
								<button
									class="${(0,o.H)({btn:!0,result:!0,selected:e===this.selectedPrediction})}"
									@mousedown="${this.onPredictionMouseover}"
									data-prediction-id="${e.id}"
									@click="${this.onPredictionClicked}"
									tabindex="-1"
								>
									<svg class="btn_icon" role="presentation" aria-hidden="true">
										<use href="${e.icon??"/images/sprites.svg#map-pin"}"></use>
									</svg>
									${e.layersLabel?.length>50||e.html.length>100||(0,v.V)()?r.qy`
												<p class="result-p">
													<span class="btn-label result-label result-text"
														>${(0,s._)(e.html)}</span
													>
													${e.layersLabel?r.qy` <br />
																<span class="result-layer" title="${e.layersLabel}"
																	>${e.layersLabel}</span
																>`:null}
												</p>
										  `:r.qy` <span class="btn-label result-label result-text"
													>${(0,s._)(e.html)}</span
												>
												${e.layersLabel?r.qy` <span class="result-layer-separator">-</span>
															<span class="result-layer" title="${e.layersLabel}"
																>${e.layersLabel}</span
															>`:null}`}
								</button>
							</li>
						`))}
			</ul>
		`}updated(e){if(e.has("place")){const e=(0,$.h)(M,{detail:{place:this.place}});this.dispatchEvent(e)}if((e.has("value")||e.has("error"))&&this.error){const e=(0,$.h)("search-error",{detail:{message:""}});this.dispatchEvent(e)}}connectedCallback(){super.connectedCallback(),this.nlpOn&&window.addEventListener(p.B$.PASS_NLP,(e=>{d.Ay.dispatch({type:p.B$.RESET_NLP});const{detail:t}=e;this.value=t.speech,this.inputRef.value.focus(),this.buildPredictions()}))}async submit(){return this.buildPlaceDetails(void 0)}set place(e){if(e===this._place)return;const t=this._place;this._place=e,e?(this.value=e.text,this.showLoader=e.isLoading,e.isLoading&&!this.loadingExternallyPromise?this.loadingExternallyPromise=new Promise((e=>{this.loadingExternallyResolver=e})):!e.isLoading&&this.loadingExternallyResolver&&this.loadingExternallyResolver(),this.error=!1):(this.value="",this.showLoader=!1,this.loadingExternallyPromise=void 0,this.selectedPrediction=void 0),this._sessionToken=void 0,this.predictions=[],this.requestUpdate("place",t)}get place(){return this._place}onInputGroupFocusout(){(0,E.A)((()=>{const e=(0,A.A)(this);(this.shadowRoot&&!this.shadowRoot.activeElement||e&&e.shadowRoot&&!this.contains(e.shadowRoot.activeElement))&&(this.focused=!1,this.error=!1)}))}updateValueOnInput(){this.value=this.input?.value??"",this.updateValueDebounced()}onInputFocused(e){window.dispatchEvent((0,$.h)(_));const t=e.currentTarget;this.open=!!this.predictions.length,t.select()}onInputPaste(){this.buildPredictions()}onInputBlurred(){window.dispatchEvent((0,$.h)(x)),this.open=!1}onPredictionMouseover(e){e.preventDefault()}async onPredictionClicked(e){const t=e.currentTarget,i=this.predictions.find((e=>e.id===t.dataset.predictionId));if(!i)throw new Error("Rendered autocomplete list doesn't reflect _predictions");this.value=i.plain;const r=i.predefinedStub?(0,g.Cq)(i.predefinedStub):await this.buildPlaceDetails(i);let a=!1;if(!this.splash&&i.layersCallback&&(a=i.layersCallback(),(this.shadowRoot?.activeElement).blur()),!a){const e=(0,$.h)(C,{detail:{place:r,prediction:i}});this.dispatchEvent(e)}}async onEnter(){let e=this.selectedPrediction;if(null!=e&&"route"===e.id&&this.maybeRouteSearch)return void this.routeSearch();if(!e){if(this.maybeRouteSearch&&this.maybeRouteSearchRoutes?.length>0)return void this.routeSearch();if(!this.predictions?.length)return;[e]=this.predictions}this.value=e.plain;const t=e.predefinedStub?(0,g.Cq)(e.predefinedStub):await this.buildPlaceDetails(e);let i=!1;if(e.layersCallback&&(i=e.layersCallback(),this.shadowRoot?.activeElement?.blur()),!i){const i=(0,$.h)(C,{detail:{place:t,prediction:e}});this.dispatchEvent(i)}}onKeydown(e){switch(e.which){case 16:case 17:case 18:case 9:break;case 40:this.predictions.length&&(this.open=!0),this.selectPrediction(!0),null!=this.inputRef.value&&setTimeout((()=>this.inputRef.value.select()),100);break;case 38:this.predictions.length&&(this.open=!0),this.selectPrediction(!1),null!=this.inputRef.value&&setTimeout((()=>this.inputRef.value.select()),100);break;case 13:this.disabled=!0,window.setTimeout((()=>{this.disabled=!1}),500),this.nlpOn?(this.selectedPrediction||this.predictions.length)&&(e.preventDefault(),e.stopImmediatePropagation(),this.onEnter()):this.buildPlaceDetails(this.selectedPrediction);break;case 27:this.value=this.originalValue,this.selectedPrediction=void 0,this.open=!1}}async buildPlaceDetails(e){let t=e;if(this.showLoader=!0,await this.autocompletePromise,await this.placeDetailsPromise,await this.loadingExternallyPromise,this.open=!1,this.place)return this.showLoader=!1,this.place;if(!t&&this.predictions.length&&([t]=this.predictions),t){this.value=t.plain,this.originalValue=t.plain;try{const e={placeId:t.id,sessionToken:this.sessionToken,fields:["geometry"]};this.placeDetailsPromise=this.fetchPlaceDetails(e);const i=await this.placeDetailsPromise;if(!i.geometry?.viewport||!i.geometry.location)throw new Error(`Place details request returned result without geometry: ${JSON.stringify(i)}`);return this.place={text:t.plain,viewport:i.geometry.viewport.toJSON(),location:i.geometry.location.toJSON(),isLoading:!1},this.predictions=[],this._sessionToken=void 0,this.open=!1,this.place}catch(e){this.error=!0,this.placeDetailsPromise=void 0,this.errorMsg="Network unavailable"}}else this.error=!0,this.errorMsg=O;this.showLoader=!1}selectPrediction(e=!0){if(!this.selectedPrediction&&this.maybeRouteSearch&&this.maybeRouteSearchRoutes.length>1)this.selectedPrediction={id:"route",plain:"route",html:""},this.value=this.originalValue;else if(this.predictions.length&&!this.selectedPrediction)this.selectedPrediction=this.predictions[e?0:this.predictions.length-1],this.value=this.predictions[e?0:this.predictions.length-1].plain;else if("route"===this.selectedPrediction?.id&&e)this.selectedPrediction=this.predictions[0],this.value=this.predictions[0].plain;else if(this.selectedPrediction===this.predictions[0]&&!e&&this.maybeRouteSearch&&this.maybeRouteSearchRoutes.length>1)this.selectedPrediction={id:"route",plain:"route",html:""},this.value=this.originalValue;else if("route"!==this.selectedPrediction?.id||e)for(let t=0;t<this.predictions.length;t++){if(this.predictions[t]===this.selectedPrediction&&this.predictions[e?t+1:t-1]){this.selectedPrediction=this.predictions[e?t+1:t-1],this.value=this.predictions[e?t+1:t-1].plain;break}if(this.predictions[t]===this.selectedPrediction){if(!(!this.selectedPrediction&&this.maybeRouteSearch&&this.maybeRouteSearchRoutes.length>1)){this.value=this.originalValue,this.selectedPrediction=void 0;break}this.selectedPrediction={id:"route",plain:"route",html:""}}}else this.value=this.originalValue,this.selectedPrediction=void 0}async buildPredictions(){const e=this.nlpOn&&u.DS.enabled?await(0,m.X)(this.value):null;this.showLoader=!0;const t=this._place;this._place=void 0,t&&this.requestUpdate("place",t),this.originalValue=this.input?.value??"";const i=e?.nlpPredictions??[];if(this.value.length>=3){const t=new google.maps.LatLng((u.VV.initialBounds.north+u.VV.initialBounds.south)/2,(u.VV.initialBounds.east+u.VV.initialBounds.west)/2);try{const r={input:e?.googlePredictionInput??this.value,sessionToken:this.sessionToken,origin:t,...u.VV.autocompleteOptions};let a;this.autocompletePromise=this.fetchPredictions(r);try{a=await this.autocompletePromise}catch(e){a=[]}const s=a?a.map((e=>({id:e.place_id,plain:e.description,html:this.formatText(e.structured_formatting.main_text,e.structured_formatting.main_text_matched_substrings||[],e.structured_formatting.secondary_text)}))):[],o=[],n=[];if(s.forEach((e=>{o.includes(`${e.plain.toLowerCase()}${e.layersLabel||""}`)||(o.push(`${e.plain.toLowerCase()}${e.layersLabel||""}`),n.push(e))})),!e?.nlpPredictions.length&&e?.layersLabel&&e.isLayerResult){const t=[];if(e.matchedLayersSet.size>0&&n.length>0){const i=n[0];t.push({id:i.id,plain:i.plain,html:i.html,layersCallback:e?.layersCallback,layersLabel:e?.layersLabel,layersActual:e?.layersActual})}t.push(...n,...e.noResultRecommendations);const i=(0,m.w)(e?.googlePredictionInput||"",t);this.predictions=[e.layerOnlyResult,...i].slice(0,u.DS.length||7)}else{const t=[];if(e?.layersLabel&&n.length>0){const i=n[0];t.push({id:i.id,plain:i.plain,html:i.html,layersCallback:e?.layersCallback,layersLabel:e?.layersLabel,layersActual:e?.layersActual})}t.push(...n,...i);const r=(0,m.w)(e?.googlePredictionInput||"",t);this.predictions=r.slice(0,u.DS.length||7)}if(this.maybeRouteSearch=!!e?.maybeRouteSearch,e?.maybeRouteSearch&&e.routeResults?.routes?.length&&e.routeResults?.routes?.length>1&&(this.maybeRouteSearchRoutes=e.routeResults.routes,this.maybeRouteSearchLayers=[...e.matchedLayersSet],this.maybeRouteSearchLayerLabels=[...e.layersLabel]),0===this.predictions.length&&!this.maybeRouteSearch)throw new Error("No results.");this.error=!1,this.selectedPrediction=void 0,this.open=!!(this.predictions.length&&this.shadowRoot&&this.shadowRoot.activeElement===this.renderRoot.querySelector("input")||this.maybeRouteSearch)}catch(t){"ZERO_RESULTS"===t&&e?.nlpPredictions.length?(this.predictions=(0,m.w)(e?.googlePredictionInput||"",[...i]),this.error=!1,this.selectedPrediction=void 0,this.open=!(!this.predictions.length||!this.shadowRoot||this.shadowRoot.activeElement!==this.renderRoot.querySelector("input"))):(this.predictions=[],this.maybeRouteSearch=!1,this.autocompletePromise=void 0,this.error=!0,this.errorMsg=O)}}else this._sessionToken=void 0,this.error=!1,this.selectedPrediction=void 0,this.open=!1,this.predictions=[];this.showLoader=!1}fetchPredictions(e){return this.predictionsInput=e.input,new Promise(((t,i)=>{this.autocompleteService.getPlacePredictions(e,((e,r)=>{r===google.maps.places.PlacesServiceStatus.OK&&e?t(e):i(r)}))}))}fetchPlaceDetails(e){return new Promise(((t,i)=>{if(this.splash)return this.placesService=new google.maps.places.PlacesService(document.createElement("div")),void this.placesService.getDetails(e,((e,r)=>{r===google.maps.places.PlacesServiceStatus.OK&&e?t(e):i(r)}));this.getAppMapFunc?this.getAppMapFunc().then((r=>{this.placesService||(this.placesService=new google.maps.places.PlacesService(r)),this.placesService.getDetails(e,((e,r)=>{r===google.maps.places.PlacesServiceStatus.OK&&e?t(e):i(r)}))})):t(L)}))}get sessionToken(){return this._sessionToken||(this._sessionToken=new google.maps.places.AutocompleteSessionToken),this._sessionToken}routeSearch(){const e=this.maybeRouteSearchLayers.reduce(((e,t,i)=>e+`${0!==i?",":""}${t}`),""),t=`/search/from=${this.maybeRouteSearchRoutes[0].replace(" ","+")}${u.X0.metric?"":`,+${u.DS.stateName},+USA`}/to=${this.maybeRouteSearchRoutes[1].replace(" ","+")}${u.X0.metric?"":`,+${u.DS.stateName},+USA`}/mode=DRIVING/${e?`?show=${e}`:""}`;d.Ay.dispatch({type:"SEARCH_FROM_NLP",nlp:!0}),d.Ay.dispatch((0,b.oo)(t)),this.splash&&(window.location.href=t);const i=(0,$.h)(y.faW,{detail:{searchType:y.nXf.SEARCH_ROUTE}});window.dispatchEvent(i)}formatText(e,t,i){const r=t.reduce(((e,t)=>({length:e.length>t.length?e.length:t.length,offset:e.offset>t.offset?t.offset:e.offset})),{length:0,offset:99}),a=e.slice(r.offset,r.offset+r.length),s=`<strong>${a}</strong>`;return`${e.replace(a,s)} <span class="result-secondary">${i||""}</span>`}async focusInput(){if(await this.updateComplete,!this.input)throw new Error("input element missing");this.input.focus()}getInputValue(){return this.value}stateChanged(e){this.previousRoadwaySearch.length&&""===e.search.urlRoadwayName&&(this.value=""),this.previousRoadwaySearch=e.search.urlRoadwayName}};k([(0,a.MZ)({type:String})],P.prototype,"placeholder",2),k([(0,a.MZ)({type:Boolean})],P.prototype,"nlpOn",2),k([(0,a.MZ)({type:Boolean})],P.prototype,"splash",2),k([(0,a.MZ)({type:Boolean,reflect:!0})],P.prototype,"error",2),k([(0,a.MZ)({type:String})],P.prototype,"errorMsg",2),k([(0,a.MZ)({type:String})],P.prototype,"value",2),k([(0,a.MZ)({type:Boolean})],P.prototype,"wrapperFocused",2),k([(0,a.MZ)({type:Boolean,reflect:!0,attribute:"open"})],P.prototype,"open",2),k([(0,a.MZ)({type:Array})],P.prototype,"predictions",2),k([(0,a.MZ)({type:Object})],P.prototype,"selectedPrediction",2),k([(0,a.MZ)({type:Boolean})],P.prototype,"showLoader",2),k([(0,a.MZ)({type:Boolean,reflect:!0})],P.prototype,"focused",2),k([(0,a.MZ)({type:Boolean})],P.prototype,"disabled",2),k([(0,a.P)("#input")],P.prototype,"input",2),P=k([(0,a.EM)("search-input")],P)},37975:(e,t,i)=>{"use strict";i.r(t),i.d(t,{HeaderSearchPlace:()=>x,default:()=>L});var r=i(71413),a=i(52706),s=i(56599),o=i(80027),n=i(21379),l=i(58673),c=i(85385),d=i(22708),p=i(41183),u=i(83184),h=i(52850),g=i(10388),m=i(43627),y=(i(23316),i(24634)),v=i(32701),b=i(56365),f=i(79066),w=i(85564),S=i(63822),A=i(56188),E=i(66003),$=i(62239),T=i(2379),R=i(17026),k=Object.defineProperty,M=Object.getOwnPropertyDescriptor,C=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?M(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&k(t,i,s),s};const _=window.SpeechRecognition||window.webkitSpeechRecognition;let x=class extends((0,s.N)(g.M_)(m.h)){constructor(){super(),window.addEventListener(h.faW,(e=>{e.detail.searchType===h.nXf.SEARCH_PLACE&&this.updateComplete.then((()=>{this.searchInput?.focusInput()}))})),this.checkMicrophonePermission()}static get styles(){return[v.A,y.A,f.A,b.A,w.A,r.AH`
				:host {
					align-self: center;
				}
			`]}render(){const e=this.tutorialStep===h.QeQ.FAVORITE_SEARCH?o.BQ.favorite.exampleSearchLocation:`${(0,S.A)("header.search.place.placeholder.text","Search for a place")}`;return r.qy`
			<div id="search-form-wrapper">
				${this.dropdownHtml}
				<form id="search-form" @submit="${this.onSearchSubmit}" @keydown="${this.onKeyDownSubmit}">
					${this.active?r.qy` <search-input
								@place-chosen="${this.onPlaceChanged}"
								.place="${this.place}"
								.placeholder="${e}"
								?nlpOn=${!0}
								class="focused"
								.getAppMapFunc="${R.A.getMap}"
								@prediction-clicked="${this.onPredictionClicked}"
						  >
								<div slot="suffix" style="display: flex">
									${_?this.renderNlpButton():null}

									<button
										class="btn btn-light search-btn search-btn-right"
										aria-label="Search place"
										type="submit"
									>
										<svg role="presentation" class="btn_icon" aria-label="Submit place search">
											<use href="${"/images/sprites.svg#magnifying-glass"}"></use>
										</svg>
									</button>
								</div>
						  </search-input>`:void 0}
				</form>
			</div>
		`}renderNlpButton(){if(!o.DS.enabled||(0,c.V)())return null;const e="granted"===this.micPermission?"fill":"outline";return r.qy` <button
			class="btn btn-light search-btn"
			@click=${this.tryShowNlpModal}
			title="${_?o.DS.speechRecognitionAvailableMessage:o.DS.speechRecognitionUnavailableMessage}"
			aria-label="${_?o.DS.speechRecognitionAvailableMessage:o.DS.speechRecognitionUnavailableMessage}"
			type="reset"
			?disabled=${!_}
		>
			<svg role="presentation" class="btn_icon" aria-label="Show speech recognition modal">
				<use href="${{311:"/images/icon-chat-bubble.svg","511-compact":"/images/511_icon.png","511-compact-inverse":"/images/511_icon_inverted.png","511-default":"/images/511_logo.png","511-default-inverse":"/images/511_logo_inverted.png","alert-default":"/images/icon-alert-fill-solid.svg","alert-triangle":"/images/icon-alert-triangle.svg","alert-triangle-white":"/images/icon-alert-triangle-white.svg","alert-white":"/images/icon-alert-fill-solid-white.svg","announcement-solid":"/images/icon-notification-fill-solid.svg","area-fill-solid":"/images/icon-draw-fill-solid.svg","area-fill-solid-alerts":"/images/icon-draw-notification-fill-solid.svg","arrow-left":"/images/sprites.svg#arrow-left","arrow-left-double":"/images/sprites.svg#arrow-left-double","arrow-left-single":"/images/sprites.svg#arrow-left-single","arrow-right":"/images/sprites.svg#arrow-right","arrow-right-double":"/images/sprites.svg#arrow-right-double","arrow-right-single":"/images/sprites.svg#arrow-right-single","arrow-down":"/images/sprites.svg#arrow-down","camera-add-favorite-prompt":"/images/icon-camera-add-favorites.svg","camera-broken":"/images/icon-camera-closed-fill-solid.svg","camera-broken-selected":"/images/icon-camera-closed-active-fill-solid.svg","camera-cluster":"/images/clusters/icon-cluster-camera-5-solid.svg","camera-default":"/images/icon-camera-fill-solid.svg","camera-hot":"/images/icon-camera-fill-solid.svg","camera-hot-inverted":"/images/icon-camera-hot-inverted-fill-solid.svg","camera-favorite":"/images/icon-camera-favorite-fill-solid.svg","camera-favorite-inverted":"/images/icon-camera-favorite-fill-solid.svg","camera-modal-unavailable":"/images/icon-camera-closed-fill-solid-padded-modal.svg","camera-unavailable":"/images/icon-camera-closed-fill-solid-padded.svg","camera-video-unavailable":"/images/icon-video-fill-solid.svg","camera-inactive-feed":"/images/icon-video-fill-solid.svg","camera-video":"/images/icon-video-fill-solid.svg","cardinal-east":"/images/icon-cardinal-east.svg","cardinal-north":"/images/icon-cardinal-north.svg","cardinal-northeast":"/images/icon-cardinal-northeast.svg","cardinal-northwest":"/images/icon-cardinal-northwest.svg","cardinal-south":"/images/icon-cardinal-south.svg","cardinal-southeast":"/images/icon-cardinal-southeast.svg","cardinal-southwest":"/images/icon-cardinal-southwest.svg","cardinal-west":"/images/icon-cardinal-west.svg","close-btn":"/images/sprites.svg#close-btn",cluster:"/images/clusters/icon-cluster-5-solid.svg","condition-seasonal":"/images/icon-bar-seasonal-fill.svg","condition-partially-covered":"/images/icon-bar-partially-fill.svg","condition-completely-covered":"/images/icon-bar-completely-fill.svg","condition-not-advised":"/images/icon-bar-not-advised-fill.svg","condition-impassable":"/images/icon-bar-impassable-fill.svg","content-favorite":"/images/icon-favorite-fill-solid.svg","content-favorite-selected":"/images/icon-favorite-fill-solid-selected.svg","favorite-place":"/images/icon-pin-fill-solid.svg","favorite-place-alerts":"/images/icon-pin-notification-fill-solid.svg","favorite-route":"/images/icon-road-fill-solid.svg","favorite-route-alerts":"/images/icon-road-notification-fill-solid.svg",construction:"/images/icon-construction-fill-solid.svg","construction-shazam":"/images/icon-construction-fill-solid-shazam.svg",danger:"/images/icon-danger-full-solid.svg","dot-compact":"/images/logo-mobile@2x.png","dot-compact-inverse":"/images/logo-mobile-inverse@2x.png","dot-default":"/images/logo.png","dot-default-inverse":"/images/logo-inverse.png","state-patrol-default":"/images/iowa-state-patrol.png","state-patrol-default-inverse":"/images/iowa-state-patrol-reversed.png","email-grey-square":"/images/icon-mail-fill-solid.svg","express-lane":"/images/icon-express-lane-fill-solid.svg","external-camera-link":"/images/icon-external-link-fill-solid.svg","external-link":"/images/icon-external-link-outline.svg","facebook-grey-square":"/images/icon-facebook-fill-solid.svg","failure-triangle":"/images/icon-notice-fill-solid.svg","feedback-grey-square":"/images/icon-feedback-fill-solid.svg","ferry-closed":"/images/icon-ferry-out-of-service-fill-solid.svg","ferry-open":"/images/icon-ferry-fill-solid.svg","floodgate-regional":"/images/icon-regional-alert-fill-solid.svg","fueling-station-dot":"/images/fueling-stations/icon-ev-small-fill.svg","fueling-station-plug":"/images/fueling-stations/icon-ev-fill.svg","fueling-station-connector-chademo":"/images/fueling-stations/icon-ev-chademo-fill.svg","fueling-station-connector-j1772":"/images/fueling-stations/icon-ev-j1772-fill.svg","fueling-station-connector-j1772combo":"/images/fueling-stations/icon-ev-ccs-fill.svg","fueling-station-connector-nema1450":"/images/fueling-stations/icon-ev-nema1450-fill.svg","fueling-station-connector-nema515":"/images/fueling-stations/icon-ev-nema515-fill.svg","fueling-station-connector-tesla":"/images/fueling-stations/icon-ev-tesla-fill.svg",globe:"/images/sprites.svg#globe","globe-alt":"/images/sprites.svg#globe-alt","icon-active-indicator":"/images/icon-active-indicator.svg","icon-hovering-indicator":"/images/icon-hovering-indicator.svg","icon-hovering-indicator-hot-camera":"/images/icon-hovering-indicator-hot-camera.svg","info-exclamation":"/images/icon-info-fill-solid.svg","info-question-mark":"/images/icon-whats-fill-solid.svg","info-question-mark-white":"/images/icon-info-fill-solid-white.svg","info-question-mark-sprite":"/images/sprites.svg#help",edit:"images/icon-edit-fill-solid.svg",mail:"images/icon-mail-fill-solid-round.svg","layer-commercial-vehicle":"/images/icon-truck-fill.svg","list-view":"/images/sprites.svg#list-view",loading:"/images/loading.svg","map-feature-cluster":"/images/icon-cluster-solid.svg","maximize-arrow":"/images/sprites.svg#maximize-arrow","metro-traffic":"/images/sprites.svg#metro-traffic","mountain-passes":"/images/icon-mountains-fill-solid.svg","minimize-arrow":"/images/sprites.svg#minimize-arrow","parking-ev":"/images/icon-parking-ev-solid.svg","parking-l":"/images/icon-parking-l-solid.svg","parking-p":"/images/icon-parking-p-solid.svg","pin-a-fill":"/images/icon-pin-a-fill.svg","pin-a-padded":"/images/icon-pin-a-padded.svg","pin-b-fill":"/images/icon-pin-b-fill.svg","pin-b-padded":"/images/icon-pin-b-padded.svg","pin-default":"/images/icon-pin-fill.svg","play-button":"/images/sprites.svg#play","plow-applying-liquid":"/images/icon-plow-liquids-fill-solid.svg","plow-applying-mixed":"/images/icon-plow-mixed-fill-solid.svg","plow-applying-none":"/images/icon-plow-fill-solid.svg","plow-applying-solid":"/images/icon-plow-solids-fill-solid.svg","plow-camera":"/images/icon-plow-camera-fill-solid.svg","plow-default":"/images/icon-camera-plow-fill-solid.svg","plow-historic":"/images/plow-location-dot.svg","plow-location-dot":"/images/plow-location-dot.svg","print-grey-square":"/images/icon-printer-fill-solid.svg","rest-area-closed":"/images/icon-restarea-closed-fill-solid.svg","rest-area-open":"/images/icon-rest-area-open-fill-solid.svg","rest-area-p-high-availability":"/images/icon-restarea-p-open-fill-solid.svg","rest-area-p-low-availability":"/images/icon-restarea-p-low-fill-solid.svg","rest-area-p-medium-availability":"/images/icon-restarea-p-med-fill-solid.svg","rest-area-p-no-realtime":"/images/icon-restarea-p-no-data-fill-solid.svg","rest-area-p-stateless":"/images/icon-restarea-p-stateless-fill-solid.svg","rest-area-p-trending-high-availability":"/images/icon-restarea-p-trending-open-fill.svg","rest-area-p-trending-low-availability":"/images/icon-restarea-p-trending-low-fill-solid.svg","rest-area-p-trending-medium-availability":"/images/icon-restarea-p-trending-med-fill.svg","rest-area-r-high-availability":"/images/icon-restarea-r-open-fill.svg","rest-area-r-low-availability":"/images/icon-restarea-r-low-fill.svg","rest-area-r-medium-availability":"/images/icon-restarea-r-med-fill.svg","rest-area-r-no-realtime":"/images/icon-restarea-r-no-data-fill-solid.svg","rest-area-r-stateless":"/images/icon-restarea-r-stateless-fill-solid.svg","rest-area-r-trending-high-availability":"/images/icon-restarea-r-trending-open-fill.svg","rest-area-r-trending-low-availability":"/images/icon-restarea-r-trending-low-fill.svg","rest-area-r-trending-medium-availability":"/images/icon-restarea-r-trending-med-fill.svg","rest-area-t-high-availability":"/images/icon-restarea-t-open-fill-solid.svg","rest-area-t-low-availability":"/images/icon-restarea-t-low-fill-solid.svg","rest-area-t-medium-availability":"/images/icon-restarea-t-med-fill-solid.svg","rest-area-t-no-realtime":"/images/icon-restarea-t-no-data-fill-solid.svg","rest-area-t-stateless":"/images/icon-restarea-t-stateless-fill-solid.svg","rest-area-t-trending-high-availability":"/images/icon-restarea-t-trending-open-fill.svg","rest-area-t-trending-low-availability":"/images/icon-restarea-t-trending-low-fill-solid.svg","rest-area-t-trending-medium-availability":"/images/icon-restarea-t-trending-med-fill.svg","rest-area-legend":"/images/icon-parking-location-fill.svg","rest-area-stateless":"/images/icon-stateless-trending-fill-solid.svg","roadway-fill":"/images/icon-roadway-fill.svg","roadway-regular":"/images/icon-bar-regular-road-fill-solid.svg","road-conditions":"/images/icon-road-condition-legend.svg","road-condition-dry":"/images/driving_dry.svg","road-condition-wet":"/images/driving_wet.svg","road-condition-snow":"/images/driving_snow.svg","road-condition-icy":"/images/driving_icy.svg","road-condition-wind":"/images/driving_wind.svg","road-condition-visibility":"/images/driving_visibility.svg","road-report-axle-width-limit":"/images/icon-axle-width-fill-solid.svg","road-report-closure":"/images/icon-closure-fill-solid.svg","road-report-closure-critical":"/images/icon-closure-fill-solid-shazam.svg","road-report-closure-normal-delay":"/images/icon-closure-fill-solid-delay.svg","road-report-closure-critical-delay":"/images/icon-closure-fill-solid-delay-shazam.svg","road-report-coming-soon":"/images/future/icon-scheduled-event-31-fill-solid.svg","road-report-construction":"/images/icon-construction-fill-solid.svg","road-report-crash-normal":"/images/icon-warning-fill-solid.svg","road-report-crash-critical":"/images/icon-warning-fill-solid-shazam.svg","road-report-crash-normal-delay":"/images/icon-warning-fill-solid-delay.svg","road-report-crash-critical-delay":"/images/icon-warning-fill-solid-delay-shazam.svg","road-report-critical-disruption":"/images/icon-shazam-fill.svg","road-report-danger":"/images/icon-danger-fill-solid.svg","road-report-flooding":"/images/icon-flooding-fill-solid.svg","road-report-information-normal":"/images/icon-info-fill-solid-round.svg","road-report-information-critical":"/images/icon-info-fill-solid-shazam.svg","road-report-information-normal-delay":"/images/icon-info-fill-solid-delay.svg","road-report-information-critical-delay":"/images/icon-info-fill-solid-delay-shazam.svg","road-report-lane-closure-normal":"/images/icon-lane-closure-fill-solid.svg","road-report-lane-closure-critical":"/images/icon-lane-closure-fill-solid-shazam.svg","road-report-lane-closure-normal-delay":"/images/icon-lane-closure-fill-solid-delay.svg","road-report-lane-closure-critical-delay":"/images/icon-lane-closure-fill-solid-delay-shazam.svg","road-report-mountain-pass":"/images/icon-mountains-fill-solid-purple.svg","road-report-mountain-pass-alert":"/images/icon-mountains-alert-fill-solid.svg","road-report-mountain-pass-alert-white":"/images/icon-mountains-alert-fill-white.svg","road-report-pandemic-normal":"/images/icon-virus-fill-solid.svg","road-report-pandemic-critical":"/images/icon-virus-fill-solid-shazam.svg","road-report-restriction-blue-normal":"/images/icon-restrictions-blue-fill-solid.svg","road-report-restriction-normal":"/images/icon-restrictions-fill-solid.svg","road-report-restriction-critical":"/images/icon-restrictions-fill-solid-shazam.svg","road-report-restriction-normal-delay":"/images/icon-restrictions-fill-solid-delay.svg","road-report-restriction-critical-delay":"/images/icon-restrictions-fill-solid-delay-shazam.svg","road-report-roadwork-normal":"/images/icon-construction-fill-solid.svg","road-report-roadwork-critical":"/images/icon-construction-fill-solid-shazam.svg","road-report-roadwork-normal-delay":"/images/icon-construction-fill-solid-delay.svg","road-report-roadwork-critical-delay":"/images/icon-construction-fill-solid-delay-shazam.svg","road-report-tow-prohibited":"/images/icon-towban-fill-solid.svg","road-report-traffic-delay":"/images/icon-delay-fill.svg","road-report-truck-ramp":"/images/icon-truck-ramp-fill-solid.svg","road-report-truck-ramp-closed":"/images/icon-truck-ramp-closed-fill-solid.svg","road-report-truck-stop":"/images/icon-truck-parking-open-fill-solid.svg","road-report-chain-station":"/images/icon-chain-station-fill-solid.svg","road-report-weigh-station":"/images/icon-weight-station-fill-solid.svg","road-report-warning-normal":"/images/icon-warning-fill-solid.svg","road-report-warning-critical":"/images/icon-warning-fill-solid-shazam.svg","road-report-warning-normal-delay":"/images/icon-warning-fill-solid-delay.svg","road-report-warning-critical-delay":"/images/icon-warning-fill-solid-delay-shazam.svg","road-report-weather-normal":"/images/icon-storm-fill-solid.svg","road-report-weather-critical":"/images/icon-storm-fill-solid-shazam.svg","roundabout-default":"/images/icon-roundabout-fill-solid.svg","scenic-byway":"/images/icon-scenic-byway.svg","search-default":"/images/icon-search-fill-solid.svg","sign-active":"/images/icon-sign-active-fill-solid.svg","sign-active-travel-time":"/images/icon-travel-time-sign-fill-solid.svg","sign-active-tpim":"/images/icon-sign-parking-active-fill-solid.svg","sign-active-vsl":"/images/icon-vsl-active-fill-solid.svg","sign-default":"/images/icon-sign-fill-solid.svg","sign-inactive":"/images/icon-sign-inactive-fill-solid.svg","sign-no-data":"/images/icon-sign-no-data-fill-solid.svg","sign-unavailable":"/images/icon-sign-broken-fill-solid.svg","sign-unavailable-fallback":"/images/icon-sign-broken-fill-solid-fallback.png","sign-overlay-not-found":"/images/overlay-signs/notFound.png","sprite-alert-triangle":"/images/sprites.svg#alert-triangle","sprite-area-fill":"/images/sprites.svg#area-fill","sprite-draw-area":"/images/sprites.svg#draw-area","sprite-arrow-left-lg":"/images/sprites.svg#arrow-left-lg","sprite-arrow-right-lg":"/images/sprites.svg#arrow-right-lg","sprite-bike":"/images/sprites.svg#bike","sprite-bus":"/images/sprites.svg#bus","sprite-camera":"/images/sprites.svg#camera","sprite-camera-fill":"/images/sprites.svg#camera-fill","sprite-camera-hot":"/images/sprites.svg#hot-camera","sprite-close":"/images/sprites.svg#close","sprite-directions":"/images/sprites.svg#directions","sprite-drive":"/images/sprites.svg#drive","sprite-feedback-confirmed":"/images/sprites.svg#confirm-check","sprite-feedback-wrong":"/images/sprites.svg#wrong-x","sprite-hamburger-menu":"/images/sprites.svg#hamburger","sprite-home":"/images/sprites.svg#home","sprite-info-question-mark":"/images/sprites.svg#help","sprite-layers":"/images/sprites.svg#layers","sprite-layers-collapse":"/images/sprites.svg#layers-collapse","sprite-layers-expand":"/images/sprites.svg#layers-expand","sprite-legend":"/images/sprites.svg#legend","sprite-legend-collapse":"/images/sprites.svg#legend-collapse","sprite-legend-expand":"/images/sprites.svg#legend-expand","sprite-magnifying-glass":"/images/sprites.svg#magnifying-glass","sprite-map-pin":"/images/sprites.svg#map-pin","sprite-mic-magic-fill":"/images/sprites.svg#mic-magic-fill","sprite-mic-magic-outline":"/images/sprites.svg#mic-magic-outline","sprite-mic-off-fill":"/images/sprites.svg#mic-off-fill","sprite-mic-off-outline":"/images/sprites.svg#mic-off-outline","sprite-mic-on-fill":"/images/sprites.svg#mic-on-fill","sprite-mic-on-outline":"/images/sprites.svg#mic-on-outline","sprite-minus":"/images/sprites.svg#minus","sprite-my-location":"/images/sprites.svg#my-location","sprite-mountain-pass":"/images/sprites.svg#mountain-pass","sprite-notifications":"/images/sprites.svg#notifications","sprite-other-state-info":"/images/sprites.svg#info","sprite-pause":"/images/sprites.svg#pause","sprite-pin-a":"/images/sprites.svg#pin-a","sprite-pin-b":"/images/sprites.svg#pin-b","sprite-play":"/images/sprites.svg#play","sprite-plug":"/images/sprites.svg#plug","sprite-plus":"/images/sprites.svg#plus","sprite-refresh":"/images/sprites.svg#refresh","sprite-rest-area":"/images/sprites.svg#rest-area","sprite-reverse":"/images/sprites.svg#reverse","sprite-roadway":"/images/sprites.svg#roadway","sprite-schedule":"/images/sprites.svg#schedule","sprite-station-alert":"/images/sprites.svg#station-alert","sprite-station-normal":"/images/sprites.svg#station-normal","sprite-traffic":"/images/sprites.svg#traffic","sprite-trashcan":"/images/sprites.svg#trashcan","sprite-trucker":"/images/sprites.svg#trucker","sprite-up-arrow":"/images/sprites.svg#arrow-up","sprite-user":"/images/sprites.svg#user","sprite-walk":"/images/sprites.svg#walk","sprite-weather":"/images/sprites.svg#weather","sprite-winter":"/images/sprites.svg#winter","traffic-speeds":"/images/icon-speed-bar-legend.svg","traffic-speed-dark":"/images/icon-speedtable-fill-dark-bg.svg","traffic-speed-light":"/images/icon-speedtable-fill-light-bg.svg","truck-parking-closed":"/images/icon-truck-closed-fill-solid.svg","truck-parking-default":"/images/icon-truck-open-fill-solid.svg","truck-parking-high-availability":"/images/icon-truck-open-fill-solid.svg","truck-parking-low-availability":"/images/icon-truck-low-fill-solid.svg","truck-parking-medium-availability":"/images/icon-truck-med-fill-solid.svg","truck-parking-open-no-realtime-data":"/images/icon-truck-nodata-fill-solid.svg","twitter-grey-square":"/images/icon-twitter-fill-solid.svg","waze-accident":"/images/icon-waze-warning-fill.svg","waze-closure":"/images/icon-waze-closure-fill-solid.svg","waze-construction":"/images/icon-waze-construction-fill-solid.svg","waze-hazard":"/images/icon-waze-hazard-fill-solid.svg","waze-heavy-traffic":"/images/icon-waze-heavy-traffic-fill-solid.svg","waze-mod-traffic":"/images/icon-waze-traffic-fill-solid.svg","waze-weather-reports":"/images/icon-waze-storm-fill-solid.svg","weather-radar-layer":"/images/icon-radar-bar-legend.svg","weather-radar-legend":"/images/weather-radar-legend.svg","weather-station-alert":"/images/icon-rwis-alert-fill-solid.svg","weather-station-alert-inverted":"/images/icon-rwis-alert-fill-solid-white.svg","weather-station-alert-frozen-inverted":"/images/icon-rwis-alert-frozen-fill-solid-white.svg","weather-station-alert-freezing":"/images/icon-rwis-alert-fill-solid.svg","weather-station-alert-freezing-white":"/images/icon-rwis-alert-fill-solid-white.svg","weather-station-alert-white":"/images/icon-rwis-alert-fill-solid-white.svg","weather-station-default":"/images/icon-rwis-fill-solid.svg","weather-station-freezing":"/images/icon-rwis-freezing-fill-solid.svg","weather-station-no-data":"/images/icon-rwis-nodata-fill-solid.svg"}[`sprite-mic-magic-${e}`]}"></use>
			</svg>
		</button>`}updated(e){e.has("_urlAround")&&this.urlAround&&g.M_.dispatch((0,u.w$)(this.urlAround)),e.has("tutorialStep")&&this.tutorialStep===h.QeQ.SEARCH&&this.searchType!==h.nXf.SEARCH_PLACE&&g.M_.dispatch((0,$.C)(h.nXf.SEARCH_PLACE))}stateChanged(e){this.predefinedRoutes=e.areasAndLocations.allRoutes,this.urlAround=e.search.urlAround,this.place=e.search.aroundPlace,this.searchType=e.search.type,this.tutorialStep=(0,E.Xv)(e)}async onSearchSubmit(e){e.preventDefault();let t=null,i=!1;if(e instanceof CustomEvent){const r=e;r?.detail?.prediction?.layersCallback&&(i=r.detail.prediction.layersCallback());const a=r.detail?.prediction;t=a.predefinedStub}else{if(this.searchInput?.maybeRouteSearch&&this.searchInput.maybeRouteSearchRoutes.length>1)return void this.searchInput.routeSearch();if(null!=this.searchInput?.predictions?.[0]){const e=this.searchInput.predictions[0];this.searchInput?.predictions?.[0]?.layersCallback&&(i=this.searchInput?.predictions?.[0]?.layersCallback()),null!=e.predefinedStub&&(t=e.predefinedStub)}}if(i)return;if(null!=t){const e=(0,l.Cq)(t);if(e.viewport){const i=null!=t.name&&this.predefinedRoutes?.some((({name:e})=>e===t?.name))?(0,p.A)(e.viewport,t.name):(0,T.Ay)(e.viewport,e.text);return g.M_.dispatch((0,d.P)("prediction-predefined",i,h.l_R.SEARCH)),await g.M_.dispatch((0,E.oo)(i)),void(this.shadowRoot&&this.shadowRoot.activeElement&&this.shadowRoot.activeElement.blur())}}const r=await(this.searchInput?.submit());if(r&&r.viewport){g.M_.dispatch({type:h.S2Z,value:r.text});const e=(0,T.Ay)(r.viewport,r.text);g.M_.dispatch((0,d.P)("prediction-google",e,h.l_R.SEARCH)),await g.M_.dispatch((0,E.oo)(e)),this.shadowRoot&&this.shadowRoot.activeElement&&this.shadowRoot.activeElement.blur(),window.dispatchEvent((0,A.h)(h.W3b)),o.Vu&&!o.Vu.isComingSoon&&g.M_.dispatch((0,E.f5)(h.QeQ.FAVORITE_ADD))}else this.searchInput?.focusInput()}onPlaceChanged(e){g.M_.dispatch({type:h.V6J,place:e.detail.place})}async onPredictionClicked(e){g.M_.dispatch({type:h.V6J,place:e.detail.place}),await this.onSearchSubmit(e)}async checkMicrophonePermission(){const e=await navigator.permissions.query({name:"microphone"});this.micPermission=e.state}async tryShowNlpModal(){try{await this.checkMicrophonePermission(),"granted"!==this.micPermission&&(await navigator.mediaDevices.getUserMedia({audio:!0,video:!1})).getAudioTracks().forEach((e=>e.stop()));const e=await navigator.mediaDevices.enumerateDevices(),t=e?.filter((e=>"audioinput"===e.kind));if(!t?.length)return void alert(o.DS.microphoneNotFoundMessage);g.M_.dispatch((0,n.A)(h.Gqw.NLP))}catch(e){console.error(e),e instanceof DOMException&&"Permission denied"===e.message&&alert(o.DS.microphonePermissionDeniedMessage)}}};C([(0,a.MZ)({type:Object})],x.prototype,"place",2),C([(0,a.P)("search-input")],x.prototype,"searchInput",2),x=C([(0,a.EM)("search-place")],x);const L=x},57304:(e,t,i)=>{"use strict";i.r(t),i.d(t,{HeaderSearchPredefinedArea:()=>A,default:()=>E});var r=i(71413),a=i(52706),s=i(22708),o=i(80027),n=i(52850),l=i(10388),c=i(43627),d=(i(10147),i(24634)),p=i(32701),u=i(56365),h=i(79066),g=i(85564),m=i(63822),y=i(56188),v=i(66003),b=(i(58673),i(2379)),f=Object.defineProperty,w=Object.getOwnPropertyDescriptor,S=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?w(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&f(t,i,s),s};let A=class extends c.h{constructor(){super(),window.addEventListener(n.faW,(e=>{e.detail.searchType===n.nXf.SEARCH_PREDEFINED_AREA&&this.updateComplete.then((()=>{this.predefinedInput?.focusInput()}))}))}static get styles(){return[p.A,d.A,h.A,u.A,g.A]}render(){return r.qy`
			<div id="search-form-wrapper">
				${this.dropdownHtml}
				<form id="search-form" @submit="${this.onSearchSubmit}" @keydown="${this.onKeyDownSubmit}">
					${this.active?r.qy`<predefined-search-input
								.placeholder="${(0,m.A)("header.search.predefinedArea.placeholder.text","Search for a predefined area")}"
								class="focused"
								@place-chosen="${this.onPlaceChanged}"
								.place="${this.place}"
						  >
								<button
									slot="suffix"
									class=" btn btn-light search-btn search-btn-right"
									aria-label="Search area"
								>
									<svg role="presentation" class="btn_icon" aria-label="Submit area search">
										<use href="${"/images/sprites.svg#magnifying-glass"}"></use>
									</svg>
								</button>
						  </predefined-search-input>`:void 0}
				</form>
			</div>
		`}async onSearchSubmit(e){e.preventDefault();const t=await(this.predefinedInput?.submit());if(t&&t.viewport){const e=(0,b.Ay)(t.viewport,t.text,void 0,n.nXf.SEARCH_PREDEFINED_AREA);l.M_.dispatch((0,s.P)("predefined-area",e,n.l_R.SEARCH)),await l.M_.dispatch((0,v.oo)(e)),this.shadowRoot&&this.shadowRoot.activeElement&&this.shadowRoot.activeElement.blur(),window.dispatchEvent((0,y.h)(n.W3b)),o.Vu&&!o.Vu.isComingSoon&&l.M_.dispatch((0,v.f5)(n.QeQ.FAVORITE_ADD))}else this.predefinedInput?.focusInput()}onPlaceChanged(e){l.M_.dispatch({type:n.mXv,place:e.detail.place})}stateChanged(e){this.urlAround=e.search.urlAround,this.place=e.search.predefinedAreaPlace,this.searchType=e.search.type,this.tutorialStep=(0,v.Xv)(e)}};S([(0,a.MZ)({type:Object})],A.prototype,"place",2),S([(0,a.P)("predefined-search-input")],A.prototype,"predefinedInput",2),A=S([(0,a.EM)("search-predefined-area")],A);const E=A},93389:(e,t,i)=>{"use strict";i.r(t),i.d(t,{HeaderSearchRoadway:()=>A,default:()=>E});var r=i(71413),a=i(52706),s=i(22708),o=i(80027),n=i(52850),l=i(10388),c=i(43627),d=(i(10147),i(24634)),p=i(32701),u=i(56365),h=i(79066),g=i(85564),m=i(63822),y=i(56188),v=i(66003),b=(i(58673),i(41183)),f=Object.defineProperty,w=Object.getOwnPropertyDescriptor,S=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?w(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&f(t,i,s),s};let A=class extends c.h{constructor(){super(),window.addEventListener(n.faW,(e=>{e.detail.searchType===n.nXf.SEARCH_ROADWAY&&this.updateComplete.then((()=>{this.predefinedInput?.focusInput()}))})),window.location.hash?.includes(n.nXf.SEARCH_ROADWAY)&&this.updateComplete.then((()=>{this.predefinedInput?.focusInput()}))}static get styles(){return[p.A,d.A,h.A,u.A,g.A]}render(){const e=this.tutorialStep===n.QeQ.FAVORITE_SEARCH?o.BQ.favorite.exampleSearchLocation:`${(0,m.A)("header.search.roadway.placeholder.text","Search for a roadway")}`;return r.qy`
			<div id="search-form-wrapper">
				${this.dropdownHtml}
				<form id="search-form" @submit="${this.onSearchSubmit}" @keydown="${this.onKeyDownSubmit}">
					${this.active?r.qy`<predefined-search-input
								isRoadwaySearch
								@place-chosen="${this.onPlaceChanged}"
								.place="${this.roadwayPlace}"
								.placeholder="${e}"
								class="focused"
						  >
								<button
									slot="suffix"
									class=" btn btn-light search-btn search-btn-right"
									aria-label="Search roadway"
								>
									<svg role="presentation" class="btn_icon" aria-label="Submit roadway search">
										<use href="${"/images/sprites.svg#magnifying-glass"}"></use>
									</svg>
								</button>
						  </predefined-search-input>`:r.qy``}
				</form>
			</div>
		`}async onSearchSubmit(e){e.preventDefault();const t=await(this.predefinedInput?.submit());if(t&&t.viewport){const e=(0,b.A)(t.viewport,t.text);l.M_.dispatch((0,s.P)("predefined-roadway",e,n.l_R.SEARCH)),await l.M_.dispatch((0,v.oo)(e)),this.shadowRoot&&this.shadowRoot.activeElement&&this.shadowRoot.activeElement.blur(),window.dispatchEvent((0,y.h)(n.W3b))}else this.predefinedInput?.focusInput()}onPlaceChanged(e){l.M_.dispatch({type:n.xyE,place:e.detail.place})}stateChanged(e){this.urlAround=e.search.urlAround,this.roadwayPlace=e.search.roadwayPlace,this.searchType=e.search.type,this.tutorialStep=(0,v.Xv)(e)}};S([(0,a.MZ)({type:Object})],A.prototype,"roadwayPlace",2),S([(0,a.P)("predefined-search-input")],A.prototype,"predefinedInput",2),A=S([(0,a.EM)("search-roadway")],A);const E=A},80256:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>O});var r=i(71413),a=i(52706),s=i(30555),o=i(35135),n=i(13446),l=i(56599),c=i(22708),d=i(80027),p=i(98451),u=i(52850),h=i(95050),g=i(10388),m=i(17026),y=i(43627),v=(i(23316),i(24634)),b=i(32701),f=i(56365),w=i(79066),S=(i(83002),i(56188)),A=Object.defineProperty,E=Object.getOwnPropertyDescriptor,$=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?E(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&A(t,i,s),s};const T="directions-changed";let R=class extends r.WF{constructor(){super(...arguments),this.dataLayer=new google.maps.Data,this.features=[],this.prevDetour=[],this._directionsRenderer=new google.maps.DirectionsRenderer({draggable:!0,suppressMarkers:!0,preserveViewport:!0,polylineOptions:{strokeColor:d.hC.polylineOptions.strokeColor,strokeOpacity:d.hC.polylineOptions.strokeOpacity,strokeWeight:d.hC.polylineOptions.strokeWeight}})}set response(e){if(!e&&this._response)return this._directionsRenderer.setMap(null),this._response=e,this.features.forEach((e=>this.dataLayer.remove(e))),this.prevDetour=[],void this.dataLayer.setMap(null);!e||e===this._response||e?.routes[0].overview_polyline===this._response?.routes[0].overview_polyline&&e?.routes[e.routes.length-1].overview_polyline===this._response?.routes[this._response.routes.length-1].overview_polyline||(this._response=e,m.W.getMap().then((t=>{const i=()=>{const e={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"MultiLineString",coordinates:this.prevDetour},properties:{}}]};this.features=this.dataLayer.addGeoJson(e),this.dataLayer.setMap(t);const i=`${d.gC.arrowParams.spacing}px`,r=[{icon:{path:2,scale:3},offset:`${d.gC.arrowParams.forwardArrowOffsetPx}px`,repeat:i}];this.dataLayer.setStyle({strokeColor:d.gC.polylineOptions.strokeColor,strokeWeight:d.gC.polylineOptions.strokeWeight===u.vxF?void 0:d.gC.polylineOptions.strokeWeight,strokeOpacity:d.gC.polylineOptions.strokeOpacity===u.QMM?void 0:d.gC.polylineOptions.strokeOpacity,zIndex:1,icons:r})};this._directionsRenderer.setMap(t),this.features.forEach((e=>this.dataLayer.remove(e))),e?.routes?.length>1?e.detours?(this.prevDetour=e.detours,i()):setTimeout((()=>{e.detours&&(this.prevDetour=e.detours),i()}),250):(this.features.forEach((e=>this.dataLayer.remove(e))),this.prevDetour=[],i(),this.dataLayer.setMap(null)),this._directionsRenderer.setDirections(e)})))}get response(){return this._response}connectedCallback(){super.connectedCallback(),this._directionsRenderer.addListener("directions_changed",(()=>{const e=this._directionsRenderer.getDirections(),t=this._response?.routes;if(e&&t){const i=t.slice(1)||[];e.routes=[e.routes[0],...i],this.dispatchEvent((0,S.h)(T,{detail:{directions:e}}))}else this._response=this._directionsRenderer.getDirections(),this.dispatchEvent((0,S.h)(T,{detail:{directions:this._response}}))}))}disconnectedCallback(){google.maps.event.clearInstanceListeners(this._directionsRenderer),this._directionsRenderer.setMap(null),super.disconnectedCallback()}createRenderRoot(){return this}};$([(0,a.MZ)({type:Object})],R.prototype,"response",1),R=$([(0,a.EM)("map-directions-renderer")],R),i(99201);var k=i(40974),M=i(63822),C=i(66003),_=i(42791),x=Object.defineProperty,L=Object.getOwnPropertyDescriptor,I=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?L(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&x(t,i,s),s};let O=class extends((0,l.N)(g.M_)(y.h)){constructor(){super(),this.urlFrom="",this.urlTo="",this.mode=h.q_.mode,this.urlWaypts=[],this.originChosen=!1,this.destChosen=!1,this.waypoints=[],this.directionsFetching=!1,window.addEventListener(p.oK,(()=>{this.originInput?.focusInput()})),window.addEventListener(p.q,(()=>{this.destInput?.focusInput()})),window.addEventListener(u.faW,(e=>{e.detail.searchType===u.nXf.SEARCH_ROUTE&&this.renderRoot.querySelector("#origin-input").focusInput()}))}static get styles(){return[b.A,v.A,w.A,f.A,r.AH`
				#dest-input {
					z-index: 3;
				}
				.search-route-wrapper {
					display: flex;
					flex-direction: column;
					padding: 6px 0 0 6px;
				}
				.search-route-input-group {
					flex-grow: 1;
					display: flex;
					flex-direction: row;
					gap: 0;
					margin: calc(var(--gap) / 2) 0 calc(var(--gap) / 2) calc(var(--gap) / 2);
				}

				@media (min-width: ${(0,r.iz)(u.EA.TABLET)}) {
					.search-route-wrapper {
						flex-direction: row;
						gap: 4px;
					}
				}
			`]}directionsFailMessage(e){return e===google.maps.DirectionsStatus.NOT_FOUND||e===google.maps.DirectionsStatus.ZERO_RESULTS?"No route found":e===google.maps.DirectionsStatus.OVER_QUERY_LIMIT?"Too many requests":"Unknown error"}render(){return r.qy`
			<div class="search-route-wrapper">
				<div class="search-route-input-group">
					${this.dropdownHtml}
					<form
						id="search-form"
						@submit="${this.onSearchSubmit}"
						@keydown="${this.onKeyDownSubmit}"
					>
						<search-input
							id="origin-input"
							class="input--no-suffix focused"
							style=""
							@keydown="${this.preventValidationOnEnter}"
							@place-chosen="${this.onOriginPlaceChanged}"
							.place="${this.originPlace}"
							placeholder="${(0,M.A)("header.search.route.start.placeholder.text","Start city or address")}"
							?nlpon=${!1}
							@prediction-clicked="${this.onOriginPredictionClicked}"
							.getAppMapFunc="${m.A.getMap}"
						>
							<button
								slot="prefix"
								type="button"
								@click="${this.pinAClicked}"
								class="${(0,s.H)({"search-btn-pin":!0,"search-btn-pin--muted":!this.originChosen})}"
								aria-label="Route origin pin"
							>
								<svg
									role="presentation"
									class="btn_icon"
									aria-hidden="true"
									style="fill: rgb(${this.originChosen?"var(--directions-origin)":"var(--asbestos)"})"
								>
									<use href="${"/images/sprites.svg#pin-a"}"></use>
								</svg>
							</button>
						</search-input>
					</form>
				</div>

				<form
					class="search-route-input-group"
					@submit="${this.onSearchSubmit}"
					@keydown="${this.onKeyDownSubmit}"
				>
					<button
						slot="prefix"
						type="button"
						class="btn btn-light search-btn search-btn-left"
						@click="${this.reverseInputValues}"
						aria-label="Reverse route direction by swapping the selected origin and destination locations"
					>
						<svg role="presentation" class="btn_icon" aria-hidden="true">
							<use href="${"/images/sprites.svg#reverse"}"></use>
						</svg>
					</button>

					<search-input
						id="dest-input"
						@place-chosen="${this.onDestPlaceChanged}"
						.place="${this.destPlace}"
						placeholder="${(0,M.A)("header.search.route.end.placeholder.text","End city or address")}"
						.errorMsg=${this.directionsFailStatus?this.directionsFailMessage(this.directionsFailStatus):void 0}
						?error=${!!this.directionsFailStatus}
						.getAppMapFunc="${m.A.getMap}"
					>
						<button
							slot="prefix"
							type="button"
							@click="${this.pinBClicked}"
							class="${(0,s.H)({"search-btn-pin":!0,"search-btn-pin--muted":!this.destChosen})}"
							aria-label="Route destination pin"
						>
							<svg
								role="presentation"
								class="btn_icon"
								aria-hidden="true"
								style="fill: rgb(${this.destChosen?"var(--directions-destination)":"var(--asbestos)"})"
							>
								<use href="${"/images/sprites.svg#pin-b"}"></use>
							</svg>
						</button>

						<button
							slot="suffix"
							class="btn btn-light search-btn search-btn-right"
							aria-label="Search route"
						>
							<svg role="presentation" class="btn_icon" aria-label="Submit route search">
								<use href="${"/images/sprites.svg#magnifying-glass"}"></use>
							</svg>
						</button>
					</search-input>
				</form>

				<map-marker
					aria-hidden="true"
					title="${(0,o.J)(this.originChosen&&this.originPlace?.text)}"
					.position="${this.originChosen&&this.originPlace?this.originPlace.location:void 0}"
					draggable
					@marker-dragend="${this.onOriginDragend}"
					@marker-click="${this.onClickZoomTo}"
					.icon="${{url:"/images/icon-pin-a-padded.svg"}}"
					zIndex="${u.MPK}"
				></map-marker>
				<!-- Require > 100 for z-index to prevent the directions waypoint hover marker from overlapping -->
				<map-marker
					aria-hidden="true"
					title="${(0,o.J)(this.destChosen&&this.destPlace?.text)}"
					.position="${this.destChosen&&this.destPlace?this.destPlace.location:void 0}"
					draggable
					@marker-dragend="${this.onDestinationDragend}"
					@marker-click="${this.onClickZoomTo}"
					.icon="${{url:"/images/icon-pin-b-padded.svg"}}"
					zIndex="${u.MPK}"
				></map-marker>
				<map-directions-renderer
					.response=${this.directionsResponse}
					@directions-changed="${this.onDirectionsChanged}"
				>
				</map-directions-renderer>
				${this.waypoints.map((e=>r.qy`
						<map-marker
							.position=${e}
							draggable
							@marker-dragend="${this.onWaypointDragend}"
							.menu="${[{title:"Remove marker",callback:this.onWaypointRemoved}]}"
							.icon="${{url:"https://maps.gstatic.com/mapfiles/dd-via.png"}}"
							zIndex="${u.cu7}"
						></map-marker>
					`))}
			</div>
		`}stateChanged(e){this.searchType=e.search.type,this.urlFrom=e.search.urlFrom,this.urlTo=e.search.urlTo,this.urlWaypts=e.search.urlWaypts,this.mode=e.search.mode,this.originPlace=e.search.originPlace,this.originChosen=e.search.originChosen,this.destPlace=e.search.destPlace,this.destChosen=e.search.destChosen,this.waypoints=e.search.directionsWaypts,this.directionsFetching=e.search.directionsFetching,this.directionsResponse=e.search.directionsResponse,this.directionsFailStatus=e.search.directionsFailStatus,this.directionsFailStatus&&(this.originPlace={text:this.urlFrom||"",viewport:null,location:{lat:0,lng:0},isLoading:!1},this.destPlace={text:this.urlTo||"",viewport:null,location:{lat:0,lng:0},isLoading:!1})}deactivated(){(0,k.A)((()=>{this.originInput&&(this.originInput?.classList.add("focused"),this.originInput.error=!1),this.destInput&&(this.destInput.error=!1)}))}willUpdate(e){if(e.has("urlFrom")||e.has("urlTo")||e.has("urlWaypts")){const e=!(0,n.A)(this.waypoints,this.urlWaypts)||!this.originPlace||this.originPlace.text!==this.urlFrom||!this.destPlace||this.destPlace.text!==this.urlTo,t=!this.directionsResponse&&!this.directionsFetching;this.urlFrom&&this.urlTo&&(e||t)&&g.M_.dispatch((0,p.Jw)(this.urlFrom,this.urlTo,this.mode,this.urlWaypts))}else if(e.has("mode")&&this.directionsResponse){if(!this.originPlace||!this.destPlace)throw new Error("Invalid search state");g.M_.dispatch((0,p.Jw)(this.originPlace.text,this.destPlace.text,this.mode,this.waypoints))}}async onSearchSubmit(e){g.M_.dispatch({type:u.$IX,nlp:!1}),e.preventDefault();const t=await(this.originInput?.submit()),i=await(this.destInput?.submit());if(t&&i){const e=(0,_.A)(t.text,i.text,this.mode,this.waypoints);g.M_.dispatch((0,c.P)("custom-route",e,u.l_R.SEARCH)),await g.M_.dispatch((0,C.oo)(e)),this.shadowRoot&&this.shadowRoot.activeElement&&this.shadowRoot.activeElement.blur(),window.dispatchEvent((0,S.h)(u.W3b)),d.Vu&&!d.Vu.isComingSoon&&g.M_.dispatch((0,C.f5)(u.QeQ.FAVORITE_ADD))}else i?this.originInput?.focusInput():this.destInput?.focusInput()}async reverseInputValues(){const e=g.M_.getState().search,t=e.originalOrigin,i=e.originalDestination;t&&i&&(await g.M_.dispatch((0,p.MG)(i,!0)),await g.M_.dispatch((0,p.Kg)(t)),(0,p.Jw)(t,i,this.mode,this.waypoints))}onOriginPlaceChanged(e){g.M_.dispatch({type:u.izv,place:e.detail.place})}onDestPlaceChanged(e){g.M_.dispatch({type:u.SEh,place:e.detail.place})}onOriginPredictionClicked(){this.destInput?.focusInput()}onOriginDrag(e){const t=e.detail.location;g.M_.dispatch({type:u.T96,location:t,isDragging:!0}),this.destChosen&&this.destPlace&&g.M_.dispatch((0,p.Jw)(t,this.destPlace.text,this.mode,this.waypoints,{updateResults:!1}))}onOriginDragend(e){const t=e.detail.location;g.M_.dispatch((0,p.MG)(t)),window.dispatchEvent((0,S.h)(p.oK))}onDestinationDrag(e){const t=e.detail.location;g.M_.dispatch({type:u.jGZ,location:t,isDragging:!0}),this.originChosen&&this.originPlace&&g.M_.dispatch((0,p.Jw)(this.originPlace.text,t,this.mode,this.waypoints,{updateResults:!1}))}onDestinationDragend(e){const t=e.detail.location;g.M_.dispatch((0,p.Kg)(t)),window.dispatchEvent((0,S.h)(p.q))}onClickZoomTo(e){const t=e.detail.location;m.A.setPosition({center:t,zoom:d.VV.defaultMarkerZoom})}onDirectionsChanged(e){const{directions:t}=e.detail;t&&(t.crcOptions&&!t.crcOptions.updateResults||g.M_.dispatch((0,p.Kh)(t)))}onWaypointDragend(e){if(!e.detail.oldLocation)throw new Error("Search: `oldLocation` required.");this.directionsResponse&&g.M_.dispatch((0,p.Kh)(this.directionsResponse))}onWaypointRemoved(e){g.M_.dispatch((0,p.AY)(e.clickedLatLng))}async pinAClicked(){if(this.originChosen||this.originInput?.getInputValue())if(!this.originChosen&&this.originInput?.getInputValue()){const e=await(this.originInput?.submit());e&&g.M_.dispatch((0,p.HQ)(e))}else{if(!this.originPlace)throw new Error("invalid search state");m.A.setPosition({center:this.originPlace.location,zoom:d.VV.defaultMarkerZoom})}else this.originInput?.focusInput()}async pinBClicked(){if(this.destChosen||this.destInput?.getInputValue())if(!this.destChosen&&this.destInput?.getInputValue()){const e=await(this.destInput?.submit());e&&g.M_.dispatch((0,p.l4)(e))}else{if(!this.destPlace)throw new Error("invalid search state");m.A.setPosition({center:this.destPlace.location,zoom:d.VV.defaultMarkerZoom})}else this.destInput?.focusInput()}preventValidationOnEnter(e){13!==e.which&&13!==e.keyCode&&"Enter"!==e.key||!this.shadowRoot||this.shadowRoot.activeElement!==this.originInput||""!==this.destInput?.getInputValue()||(e.stopPropagation(),this.destInput?.focusInput())}};I([(0,a.MZ)({type:String})],O.prototype,"urlFrom",2),I([(0,a.MZ)({type:String})],O.prototype,"urlTo",2),I([(0,a.MZ)({type:String})],O.prototype,"mode",2),I([(0,a.MZ)({type:Array})],O.prototype,"urlWaypts",2),I([(0,a.MZ)({type:Object})],O.prototype,"originPlace",2),I([(0,a.MZ)({type:Boolean})],O.prototype,"originChosen",2),I([(0,a.MZ)({type:Object})],O.prototype,"destPlace",2),I([(0,a.MZ)({type:Boolean})],O.prototype,"destChosen",2),I([(0,a.MZ)({type:Array})],O.prototype,"waypoints",2),I([(0,a.MZ)({type:Boolean})],O.prototype,"directionsFetching",2),I([(0,a.MZ)({type:Object})],O.prototype,"directionsResponse",2),I([(0,a.MZ)({type:String})],O.prototype,"directionsFailStatus",2),I([(0,a.MZ)({type:String})],O.prototype,"activeView",2),I([(0,a.P)("#origin-input")],O.prototype,"originInput",2),I([(0,a.P)("#dest-input")],O.prototype,"destInput",2),O=I([(0,a.EM)("search-route")],O)},58673:(e,t,i)=>{"use strict";i.d(t,{Cq:()=>E});var r=i(71413),a=i(52706),s=i(5218),o=i(30555),n=i(56599),l=i(66625),c=i.n(l),d=i(38155),p=i(10388),u=i(24634),h=i(32701),g=i(79066),m=i(96842),y=i(40974),v=i(56188),b=i(23316),f=i(98755),w=Object.defineProperty,S=Object.getOwnPropertyDescriptor,A=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?S(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&w(t,i,s),s};function E(e){const t=(0,f.b)(e.bbox),i={lat:(t.south+t.north)/2,lng:(t.west+t.east)/2};return{text:e.name,viewport:t,location:i,isLoading:!1}}let $=class extends((0,n.N)(p.M_)(r.WF)){constructor(){super(),this.isRoadwaySearch=!1,this.allPredefinedStubs=[],this.placeholder="",this.value="",this.wrapperFocused=!1,this.open=!1,this.focused=!1,this.allowAutocompleteOpen=!1,this.predictions=[],this.originalValue="",this.inputRef=(0,d._)(),this.addEventListener("focusin",(()=>{this.focused=!0})),this.addEventListener("focusout",this.onInputGroupFocusout)}static get styles(){return[h.A,u.A,g.A,r.AH`
				.non-result {
					cursor: default;
				}

				.non-result:hover {
					color: rgb(var(--darkest));
				}

				.non-result:active {
					background-color: #fff;
				}

				.search-drop {
					max-height: 45vh;
					overflow-y: scroll;
				}
			`]}render(){return r.qy`
			<slot name="prefix"></slot>
			<label for="input" class="visually-hidden" aria-hidden="true">${this.placeholder}</label>
			<input
				${(0,d.K)(this.inputRef)}
				id="input"
				class="input"
				type="text"
				@keydown="${this.onKeydown}"
				@input=${this.onInput}
				@focus="${this.onInputFocused}"
				@click="${this.onClick}"
				@blur=${this.onInputBlurred}
				@paste="${this.onPaste}"
				placeholder="${this.placeholder}"
				.value="${this.value}"
				autocomplete="off"
				role="combobox"
				aria-expanded="${this.open}"
				aria-controls="autocomplete"
			/>

			<slot name="suffix"></slot>

			<ul id="autocomplete" class="search-drop">
				${this.value?r.qy`${this.withSearchInputDisplayHTML()}`:r.qy`${this.noSearchInputDisplayHTML()}`}
			</ul>
		`}searchInputSectionHeader(e){return r.qy`<li>
			<button
				class="${(0,o.H)({btn:!0,result:!0,"non-result":!0})}"
				@mousedown=${this.onPredictionMouseover}
			>
				<span class="btn-label result-label">${e}</span>
			</button>
		</li>`}searchDropdownHTML(e){const t=this.isRoadwaySearch?"/images/sprites.svg#roadway":"/images/sprites.svg#area-fill";return r.qy`<li>
			<button
				class="${(0,o.H)({btn:!0,result:!0,selected:e===this.highlightedSelection})}"
				@mousedown=${this.onPredictionMouseover}
				data-prediction-id="${e.id}"
				@click="${this.onPredictionClicked}"
			>
				<svg class="btn_icon" role="presentation" aria-hidden="true">
					<use href="${t}"></use>
				</svg>
				<span class="btn-label">${(0,s._)(e.html)}</span>
			</button>
		</li>`}noSearchInputDisplayHTML(){const e=this.predictions.filter((e=>e.isPopular)),t=this.predictions.filter((e=>!e.isPopular));return r.qy`
			${this.isRoadwaySearch&&e.length>0?r.qy`${this.searchInputSectionHeader("Popular Roadways")}`:r.qy``}
			${e.map((e=>r.qy` ${this.searchDropdownHTML(e)} `))}
			${this.isRoadwaySearch&&t.length>0?r.qy`${this.searchInputSectionHeader("All Roadways")}`:r.qy``}
			${t.map((e=>r.qy` ${this.searchDropdownHTML(e)} `))}
		`}withSearchInputDisplayHTML(){return r.qy`${this.predictions.map((e=>r.qy` ${this.searchDropdownHTML(e)} `))}`}firstUpdated(){this.setPredictions()}willUpdate(e){if(e.has("place")){const e=(0,v.h)(b.Sb,{detail:{place:this.place}});this.dispatchEvent(e)}e.has("allPredefinedStubs")&&(this.sifterSearch=new(c())(this.allPredefinedStubs))}stateChanged(e){this.allPredefinedStubs=this.isRoadwaySearch?e.areasAndLocations.allRoutes:e.areasAndLocations.allPredefinedAreas,this.allowAutocompleteOpen=e.search.allowAutocompleteOpen}onClick(){this.setPredictions(),this.open=!!this.predictions.length}onPaste(e){this.buildPredictions(e.currentTarget)}onInputGroupFocusout(){(0,y.A)((()=>{const e=(0,m.A)(this);(this.shadowRoot&&!this.shadowRoot.activeElement||e&&e.shadowRoot&&!this.contains(e.shadowRoot.activeElement))&&(this.focused=!1)}))}onInputFocused(e){window.dispatchEvent((0,v.h)(b.Ir));const t=e.currentTarget;this.allowAutocompleteOpen&&(this.open=!0),t.select()}onInputBlurred(){window.dispatchEvent((0,v.h)(b.Z0)),this.open=!1}async focusInput(){if(await this.updateComplete,!this.input)throw new Error("input element missing");this.input.focus()}onPredictionMouseover(e){e.preventDefault()}onPredictionClicked(e){const t=e.currentTarget,i=this.predictions.find((e=>e.id===t.dataset.predictionId));if(this.highlightedSelection=i,!i)throw new Error("Rendered autocomplete list doesn't reflect _predictions");this.value=i.plain,this.buildPlaceDetails(i);const r=(0,v.h)(b.j2,{detail:{prediction:i}});this.dispatchEvent(r)}onInput(e){const t=e.currentTarget;this.value=t.value,this.buildPredictions(t)}onKeydown(e){const t=e.currentTarget;switch(e.which){case 16:case 17:case 18:case 9:default:break;case 40:this.predictions.length&&(this.open=!0),this.highlightSelectionWithKeyboard(!0),null!=this.inputRef.value&&setTimeout((()=>this.inputRef.value.select()),100);break;case 38:this.predictions.length&&(this.open=!0),this.highlightSelectionWithKeyboard(!1),null!=this.inputRef.value&&setTimeout((()=>this.inputRef.value.select()),100);break;case 13:this.buildPlaceDetails(this.highlightedSelection);break;case 27:t.value=this.originalValue,this.highlightedSelection=void 0,this.open=!1}}highlightSelectionWithKeyboard(e=!0){if(this.predictions.length&&!this.highlightedSelection)this.highlightedSelection=this.predictions[e?0:this.predictions.length-1],this.value=this.predictions[e?0:this.predictions.length-1].plain;else for(let t=0;t<this.predictions.length;t++){if(this.predictions[t].id===this.highlightedSelection?.id&&this.predictions[e?t+1:t-1]){this.highlightedSelection=this.predictions[e?t+1:t-1],this.value=this.predictions[e?t+1:t-1].plain;const i=this.renderRoot.querySelector(`[data-prediction-id="${this.highlightedSelection.id}"]`);i?.scrollIntoView({behavior:"smooth",block:"nearest"});break}if(this.predictions[t].id===this.highlightedSelection?.id){this.value=this.originalValue,this.highlightedSelection=void 0;break}}}async buildPlaceDetails(e){let t=e;if(await this.loadingExternallyPromise,this.open=!1,!t&&this.predictions.length&&([t]=this.predictions),t){this.value=t.plain,this.originalValue=t.plain;const e=this.allPredefinedStubs.find((e=>e.name===t?.id));if(e)return this.place=E(e),this.open=!1,this.place}}getFilteredPredefinedStubsAndMatchTokensFromPrediction(){if(!this.sifterSearch||!this.value)return{matchedPredefinedStubs:this.allPredefinedStubs,tokens:[]};const e=this.sifterSearch.search(this.value,{fields:["name"],limit:5}),t=[],{items:i,tokens:r}=e;return i.forEach((e=>{t.push(this.allPredefinedStubs[e.id])})),{matchedPredefinedStubs:t,tokens:r}}initialPredefinedStubSorting(e){return e.sort(((e,t)=>e.popular&&!t.popular?-1:!e.popular&&t.popular?1:e.sortOrder-t.sortOrder))}setPredictions(){const{matchedPredefinedStubs:e,tokens:t}=this.getFilteredPredefinedStubsAndMatchTokensFromPrediction(),i=this.value?e:this.initialPredefinedStubSorting(e);this.predictions=i.map((e=>({id:e.name,isPopular:e.popular,plain:e.name,html:this.boldMatchedSearchText(e.name,t)})))}async buildPredictions(e){const t=this._place;this._place=void 0,t&&this.requestUpdate("place",t),await new Promise((e=>{(0,y.A)(e)})),this.originalValue=e.value,this.value=e.value,this.setPredictions(),this.highlightedSelection=void 0,this.open=!(!this.predictions.length||!this.shadowRoot||this.shadowRoot.activeElement!==this.renderRoot.querySelector("input"))}boldMatchedSearchText(e,t){const i=[];t.forEach((t=>{const r=t.regex.exec(e)?.index,{length:a}=t.string;void 0!==r&&i.push({startIndex:r,endIndex:r+a})}));let r=0,a=0;i.forEach((e=>{e.startIndex<r&&(r=e.startIndex),e.endIndex>a&&(a=e.endIndex)}));const s=e.slice(r,a),o=`<strong>${s}</strong>`;return`${e.replace(s,o)}`}getInputValue(){return this.value}async submit(){return this.buildPlaceDetails(this.highlightedSelection)}set place(e){const t=this._place;this._place=e,e?(this.value=e.text,e.isLoading&&!this.loadingExternallyPromise?this.loadingExternallyPromise=new Promise((e=>{this.loadingExternallyResolver=e})):!e.isLoading&&this.loadingExternallyResolver&&this.loadingExternallyResolver()):(this.value="",this.loadingExternallyPromise=void 0,this.highlightedSelection=void 0),this.requestUpdate("place",t)}get place(){return this._place}};$.enabledWarnings=[],A([(0,a.MZ)({type:Boolean})],$.prototype,"isRoadwaySearch",2),A([(0,a.MZ)({type:Array})],$.prototype,"allPredefinedStubs",2),A([(0,a.MZ)({type:Object})],$.prototype,"sifterSearch",2),A([(0,a.MZ)({type:String})],$.prototype,"placeholder",2),A([(0,a.MZ)({type:String})],$.prototype,"value",2),A([(0,a.MZ)({type:Boolean})],$.prototype,"wrapperFocused",2),A([(0,a.MZ)({type:Boolean,reflect:!0})],$.prototype,"open",2),A([(0,a.MZ)({type:Boolean,reflect:!0})],$.prototype,"focused",2),A([(0,a.MZ)({type:Boolean})],$.prototype,"allowAutocompleteOpen",2),A([(0,a.MZ)({type:Array})],$.prototype,"predictions",2),A([(0,a.MZ)({type:Object})],$.prototype,"highlightedSelection",2),A([(0,a.P)("#input")],$.prototype,"input",2),$=A([(0,a.EM)("predefined-search-input")],$)},5470:(e,t,i)=>{"use strict";i.d(t,{A:()=>s});var r=i(71413),a=i(52850);const s=r.AH`
	.btn-logo {
		position: relative;
		padding-top: 0;
		padding-bottom: 0;
		align-self: stretch;
		/* Allow for logos of variable height but don't center logo 
					when search route mode is active */
		height: var(--initial-header-height);
	}

	.btn-header {
		align-self: flex-start;
		padding-top: 1rem;
		padding-bottom: 1rem;
		margin: 0.25rem;
	}

	.btn-light.btn-header {
		color: rgb(var(--app-header-text-color, var(--darker)));
		fill: rgb(var(--app-header-text-color, var(--asbestos)));
	}
	.btn-light--inverted.btn-header {
		color: rgb(var(--app-header-text-color-inverted, var(--clouds)));
		fill: rgb(var(--app-header-text-color-inverted, var(--clouds)));
	}

	.btn-light.btn-header:hover,
	.btn-light.btn-header:active,
	.btn-light--enabled.btn-header {
		color: rgb(var(--app-header-text-active-color-inverted, var(--belize-hole)));
		fill: rgb(var(--app-header-text-active-color-inverted, var(--belize-hole)));
	}

	.btn-light--inverted.btn-header:hover,
	.btn-light--inverted.btn-header:active,
	.btn-light--inverted.btn-light--enabled.btn-header {
		color: rgb(var(--app-header-text-active-color-inverted, var(--peter-river-light)));
		fill: rgb(var(--app-header-text-active-color-inverted, var(--peter-river-light)));
	}
	@media (max-width: ${(0,r.iz)(a.EA.TABLET)}) {
		.btn-half-pad-left--sm {
			padding-left: calc(var(--gap) * 0.5);
		}
		.btn-half-pad-right--sm {
			padding-right: calc(var(--gap) * 0.5);
		}
	}
`},58959:(e,t,i)=>{"use strict";i.d(t,{o:()=>h});var r=i(71413),a=i(52706),s=i(52850),o=i(10388),n=i(66003),l=i(20732),c=i(87190),d=Object.defineProperty,p=Object.getOwnPropertyDescriptor,u=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?p(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&d(t,i,s),s};class h extends r.WF{constructor(){super(...arguments),this.isLoading=!1}cameraViewClicked(e){(0,l.n)();const t=e.currentTarget;if(o.M_.dispatch((0,c.wf)(null)),t.category===s.NaE.LINK&&t.src){const e=window.open(t.src);e&&(e.opener=null)}else o.M_.dispatch((0,n.oo)(`#${t.uri??""}`))}onCarouselScrollToCard(){o.M_.dispatch({type:s.JQP})}}u([(0,a.MZ)({type:Boolean,attribute:"loading",reflect:!0})],h.prototype,"isLoading",2),u([(0,a.MZ)({type:Object})],h.prototype,"error",2)},62894:(e,t,i)=>{"use strict";i.d(t,{Ay:()=>_,Q9:()=>M});var r=i(56599),a=i(71413),s=i(52706),o=i(30555),n=i(35135),l=i(5218),c=i(63822),d=i(22708),p=i(86094),u=i(98451),h=i(78707),g=i(70192),m=i(20732),y=i(10388),v=i(58959),b=i(80027),f=i(52850),w=(i(43520),i(5366)),S=(i(53903),i(85564)),A=i(24634),E=i(5124),$=i(32701),T=Object.defineProperty,R=Object.getOwnPropertyDescriptor,k=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?R(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&T(t,i,s),s};const M=e=>{const t=y.M_.getState().app.activeLayers,i=[];if(Object.keys(t).forEach((e=>{t[e]&&i.push(e)})),0===i.length)return[];let r=[],a=!1;return i.forEach((e=>{b.j9.forEach((t=>{t.signType&&(a=!0),t.slug===e&&t.signType&&(r=[...r,...t.signType])}))})),e.filter((e=>!a||!((0,g.A7)(e)&&(0===r.length||e.signDisplayType&&!r.includes(e.signDisplayType)))))};class C extends((0,r.N)(y.M_)(v.o)){constructor(){super(...arguments),this.favoriteMessageExpanded=!1,this.loadingEV=!1,this.favoriteMessage="Saved successfully!",this.isFavoriteErrorMessage=!1,this.isLoggedIn=!1,this.results=[],this.tab="results",this.useTabs=!!b.Ck?.active,this.focusFirstResult=()=>{const e=this.renderRoot.querySelector("card-media, card-result");e&&e.focusCard({preventScroll:!0})},this.dedup=!1}get resultCountText(){const e=b.Ck?.active?[...this.results]:"ev"===this.tab?this.results?.filter((e=>e?.__typename===f.Tgm.FuelingStation))??[]:this.results?.filter((e=>e?.__typename!==f.Tgm.FuelingStation))??[];return"directions"===this.tab?"":0===e.length?"no results":1===e.length?"1 result":`${e.length} results`}activated(){window.addEventListener(f.W3b,this.focusFirstResult)}deactivated(){window.removeEventListener(f.W3b,this.focusFirstResult)}hideMessage(){this.favoriteMessageExpanded=!1}static get styles(){return[$.A,E.A,A.A,S.A,a.AH`
				card-media-carousel {
					margin-bottom: 0;
				}

				.bg-light {
					background-color: #fff;
				}

				.h-display_favorite-offset {
					flex-grow: 1;
				}

				.title-favorite {
					display: flex;
					flex-direction: row;
					align-items: center;
				}
				.favorite-tutorial-popper {
					z-index: 6;
				}

				.card-result-list_title {
					display: flex;
					flex-direction: row;
					align-items: center;
				}
				.directions-origin-color {
					color: rgb(var(--directions-origin, var(--green-dark)));
				}
				.directions-destination-color {
					color: rgb(var(--directions-destination, var(--red-dark)));
				}
				hr {
					border-style: solid;
					margin: 0;
				}
				.tab-nav {
					background-color: #fff;
					display: flex;
					gap: var(--gap);
					justify-content: center;
					padding: var(--gap) 6px;
				}
				@media all and (max-width: 485px) {
					.tab-nav {
						flex-wrap: wrap;
					}
				}
				.tab {
					background-color: #fff;
					border: rgb(var(--asbestos)) solid 1px;
					border-radius: 2rem;
					color: rgb(var(--darker));
					cursor: pointer;
					display: flex;
					fill: #fff;
					font-size: var(--smaller);
					font-weight: bold;
					justify-content: center;
					align-items: center;
					padding: 0.25rem 0.5rem;
					transition: all 0.25s ease-in-out 0s;
				}
				.tab svg {
					border: rgb(var(--asbestos)) solid 3px;
					border-radius: 2rem;
					background-color: rgb(var(--darker));
					height: 16px;
					margin-right: calc(var(--gap) / 2);
					width: 16px;
				}
				.tab:hover {
					box-shadow: var(--shadow-sm);
				}
				.tab[data-active] {
					background-color: rgb(227, 235, 244);
					border-color: rgb(203, 218, 234);
					box-shadow: var(--shadow-sm);
					color: rgb(24, 74, 150);
					cursor: default;
					pointer-events: none;
				}
				.tab[data-active] svg {
					background-color: rgb(24, 74, 150);
					border-color: rgb(24, 74, 150);
				}
				#svg-plug {
					width: 22px;
					height: 22px;
					border-width: 0;
				}
				.llm-wrapper {
					background: #fff;
					padding: 15px;
				}
				.llm-bubble {
					border: 1px solid var(--silver);
					border-radius: 4px;
					padding: 15px;
					box-shadow: var(--shadow-md);
				}
				.llm-bubble h3 {
					font-size: 1.2em;
				}
				.llm-icon {
					width: 24px;
					margin-right: 5px;
					position: relative;
					top: 2px;
				}
			`]}favoriteButton(e,t){const i=b.BQ.favorite.steps[f.QeQ.FAVORITE_ADD];return a.qy`
			<popper-container
				id="tutorial-popper"
				position="${w.kl.RIGHT}"
				?is-visible="${this.tutorialStep===f.QeQ.FAVORITE_ADD&&t}"
				class=${(0,o.H)({fadein:!0,"top-half_center":!0,"tutorial-popper":!0,"favorite-tutorial-popper":!0})}
			>
				<favorite-button
					id="favorite-button"
					slot="toggler"
					?expanded=${this.favoriteMessageExpanded}
					?isError=${this.isFavoriteErrorMessage}
					favoriteType=${e}
					favoriteId=${(0,n.J)(this.favoriteId)}
					@hide=${this.hideMessage}
					class=${(0,o.H)({"tutorial-spotlight":this.tutorialStep===f.QeQ.FAVORITE_ADD})}
				>
					<div slot="message">
						<p>${this.favoriteMessage}</p>
						<button
							@click=${this.showFavorites}
							class="btn btn-white btn-rounded btn-margin-top btn-sm btn-padding-sm"
						>
							${(0,c.A)("tray.favorites.view.label","View your favorites")}
						</button>
					</div>

					${"number"==typeof this.favoriteId?"Update":(0,c.A)("favorite","Favorite")}
				</favorite-button>
				${i?a.qy`
							<tutorial-bubble
								id="tutorial-bubble-search"
								position=${w.kl.RIGHT}
								slug=${f.QeQ.FAVORITE_ADD}
								style="--bubble-width: calc(100vw - var(--gap) * 2 - 70px)"
							>
								<h2 slot="title">${i.title}</h2>
								<div slot="content">${(0,l._)(i.content)}</div>
							</tutorial-bubble>
					  `:void 0}
			</popper-container>
		`}showFavorites(){this.hideMessage(),this.dispatchEvent(new CustomEvent("setshow-favorites"))}async tabToEV(){this.loadingEV=!0,y.M_.dispatch((0,p.Ay)(f.f2p.FUELING_STATIONS,!0)),this.tab="ev",y.M_.dispatch((0,d.P)("tray-tab-nav","ev",f.l_R.SEARCH)),await y.M_.dispatch((0,h.gX)()),this.loadingEV=!1}renderLLMSummary(){return this.llmSummary?a.qy`
						<div class="llm-wrapper">
							<div class="llm-bubble">
								<h3>
									<img src="/images/icon-ai-sparkle-black.svg" alt="AI Icon" role="presentation" class="llm-icon" />
									${(0,c.A)("header.ai","Search Summary")}
									<context-help-tooltip slot="prefix">
										<h3>What's This?</h3>
										<p>${(0,l._)(b.d2.llm)}</p>
									</context-help-tooltip>
								</h3>
								<p class="text-muted text-smaller">${this.llmSummary}<br></p>
								<p class="text-smaller" style="margin-bottom: 5px;"><i>${(0,l._)(b.d2.llmDisclaimer),"This is an AI generated summary of events.  AI can make mistakes. Consider checking the information."}</i></p>
								<p class="text-muted text-smaller"></p>
							</card-result>
			</div>
			</div>
				  `:a.qy``}renderTabNav(){return a.qy`
			${"results"===this.tab&&this.llmSummary?this.renderLLMSummary():a.qy``}
			<hr />
			<div class="tab-nav ">
				<button class="tab" ?data-active=${"results"===this.tab} @click=${()=>{y.M_.dispatch((0,d.P)("tray-tab-nav","results",f.l_R.SEARCH)),this.tab="results"}}>
					<svg role="presentation" aria-hidden="true">
						<use href="${"/images/sprites.svg#alert-triangle"}"></use>
					</svg>
					Results
				</button>

				${"route"===this.trayName?a.qy`<button
							class="tab"
							?data-active=${"directions"===this.tab}
							@click=${()=>{y.M_.dispatch((0,d.P)("tray-tab-nav","directions",f.l_R.SEARCH)),this.tab="directions"}}
					  >
							<svg role="presentation" aria-hidden="true">
								<use href="${"/images/sprites.svg#directions"}"></use>
							</svg>
							Directions
					  </button>`:null}
				${b.Ck?.active?a.qy`
							<button class="tab" ?data-active=${"ev"===this.tab} @click=${this.tabToEV}>
								<svg id="svg-plug" role="presentation" aria-hidden="true">
									<use href="${"/images/sprites.svg#plug"}"></use>
								</svg>
								EV Charging
							</button>
					  `:a.qy``}
				${b.hC.travelTimesAlwaysOn||"route"!==this.trayName?null:a.qy`<button class="tab" ?data-active=${"delays"===this.tab} @click=${()=>{y.M_.dispatch((0,d.P)("tray-tab-nav","delays",f.l_R.SEARCH));const e=y.M_.getState();if(!e.search.withTravelTimes){y.M_.dispatch({type:f.EMc,withTravelTimes:!0});const{originPlace:t,originChosen:i,destPlace:r,destChosen:a,directionsWaypts:s,mode:o}=e.search;t&&i&&r&&a&&y.M_.dispatch((0,u.Jw)(t.location,r.location,o,s))}this.tab="delays"}}>
							<svg role="presentation" aria-hidden="true">
								<use href="${"/images/sprites.svg#schedule"}"></use>
							</svg>
							${b.hC.travelTimeTabName||"Delays"}
					  </button>`}
			</div>
		`}renderTabEV(){const e=this.results?.filter((e=>e?.__typename===f.Tgm.FuelingStation))??[];return this.loadingEV?a.qy`<card-result loading></card-result>`:this.isLoading||0!==e.length?a.qy`<card-result-list style="margin-bottom: 0; border: none;" role="list">
			${e.map((e=>a.qy`<tray-search-route-ev
						role="listitem"
						.feature=${e}
						.canAddToRoute=${"route"===this.trayName}
					></tray-search-route-ev>`))}
		</card-result-list>`:a.qy`
				<card-result-list style="margin-bottom: 0; border: none;" role="list">
					<card-result
						icon="${"/images/icon-search-fill-solid.svg"}"
						style="border: none;"
						role="listitem"
					>
						<h3>No results found.</h3>
						<p class="text-muted text-smaller">
							We can't find any EV charging stations around your
							${this.searchType===f.nXf.SEARCH_PLACE?"selected area":this.searchType===f.nXf.DRAW_CUSTOM_AREA?"drawn area":"searched route"}.
						</p>
					</card-result>
				</card-result-list>
			`}renderTabResults(){let e=b.Ck?.active?this.results?.filter((e=>e?.__typename!==f.Tgm.FuelingStation))??[]:this.results;e=M(e);const t=e.filter((e=>!!((0,g.ju)(e)&&e.priority<=1)));return 0===e.length?a.qy`
				<card-result-list style="margin-bottom: 0; border: none;" role="list">
					<card-result
						icon="${"/images/icon-search-fill-solid.svg"}"
						style="border: none;"
						role="listitem"
					>
						<h3>No results found.</h3>
						<p class="text-muted text-smaller">
							We can't find any critical road or weather events around your
							${this.searchType===f.nXf.SEARCH_PLACE?"selected area":this.searchType===f.nXf.DRAW_CUSTOM_AREA?"drawn area":"searched route"}.
						</p>
					</card-result>
				</card-result-list>
			`:a.qy`
			${t.length?this.renderCriticalEvents(t):a.qy``}

			<card-result-list style="margin-bottom: 0; border: none;" role="list">
				${t.length?a.qy`
							<h2 slot="title" class="h-display heading-list-title">
								Other Information
								<context-help-tooltip slot="prefix">
									<h3>What's This?</h3>
									<p>${(0,l._)(b.d2.otherInformation)}</p>
								</context-help-tooltip>
							</h2>
					  `:a.qy``}
				${e.filter((e=>!((0,g.ju)(e)&&e.priority<=1))).map((e=>{const t=((0,g.ju)(e)&&e?.delayDescriptions?e?.delayDescriptions:[]).filter((e=>!e?.segmentDelays?.length)),i=(0,g.ju)(e)&&e?.quantities;return a.qy`
							<card-result
								role="listitem"
								.result=${e}
								uri="/${e?.uri}?hasNavigatedFromSearch=true"
								hover-uri=${e?.uri}
								thumb-url=${(0,n.J)(e?.views?.[0]?.url??void 0)}
								thumb-alt=${(0,n.J)(e?.title??void 0)}
								thumb-category=${(0,n.J)(e?.views&&e?.views[0]?e?.views[0].category:f.NaE.UNKNOWN)}
								.quantities=${i||[]}
								border-color=${(0,n.J)(e?.color??void 0)}
								icon=${(0,n.J)(e?.icon??void 0)}
								.delayDescriptions=${t}
								.restAreaStatusSummary=${e?.restAreaStatusSummary}
								@crc:card:mouseover=${m.A}
								@crc:card:mouseout=${m.n}
							>
								<h3>${e?.title}</h3>
								<p class="text-muted text-smaller">${e?.cityReference}</p>
							</card-result>
						`}))}
			</card-result-list>
		`}async fetchWithTimeout(e,t,i=5e3){const r=new AbortController,a=setTimeout((()=>r.abort()),i),s=await fetch(e,{...t,signal:r.signal});return clearTimeout(a),s}loadLLM(e,t){if(this.dedup)return;this.dedup=!0;const i=[],r=[];[...e,...t].forEach((e=>{if((0,g.ju)(e)&&!e.title?.toLowerCase().includes("seasonal")){const t=e.description?.replace(/<\/?[^>]+(>|$)/g,"");i.push(`${e.title} - ${t}`),r.push(e.tooltip||e.description.replace(/<\/?[^>]+(>|$)/g,""))}})),"route"!==this.trayName&&i.length>=1&&b.DR.endpoints.llmSummary&&!this.llmSummary&&b.DR.endpoints.llmSummary&&this.fetchWithTimeout(b.DR.endpoints.llmSummary,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({events:i,tooltips:r,length:500})},1e3).then((e=>e.json())).then((e=>{e.success&&(this.llmSummary=`${e.llmSummary}`)})).catch((e=>{})).finally((()=>{this.dedup=!1}))}renderCriticalEvents(e){return a.qy`
			<card-result-list style="margin-bottom: 0; border: none;" role="list">
				<h2 slot="title" class="h-display heading-list-title">
					Critical Information
					<context-help-tooltip slot="prefix">
						<h3>What's This?</h3>
						<p>${(0,l._)(b.d2.criticalInformation)}</p>
					</context-help-tooltip>
				</h2>
				${e.map((e=>{const t=((0,g.ju)(e)&&e?.delayDescriptions?e?.delayDescriptions:[]).filter((e=>!e?.segmentDelays?.length)),i=(0,g.ju)(e)&&e?.quantities;return a.qy`
						<card-result
							role="listitem"
							.result=${e}
							uri="/${e?.uri}?hasNavigatedFromSearch=true"
							hover-uri=${e?.uri}
							thumb-url=${(0,n.J)(e?.views?.[0]?.url??void 0)}
							thumb-alt=${(0,n.J)(e?.title??void 0)}
							thumb-category=${(0,n.J)(e?.views&&e?.views[0]?e?.views[0].category:f.NaE.UNKNOWN)}
							.quantities=${i||[]}
							border-color=${(0,n.J)(e?.color??void 0)}
							icon=${(0,n.J)(e?.icon??void 0)}
							.delayDescriptions=${t}
							.restAreaStatusSummary=${e?.restAreaStatusSummary}
							@crc:card:mouseover=${m.A}
							@crc:card:mouseout=${m.n}
						>
							<h3>${e?.title}</h3>
							<p class="text-muted text-smaller">${e?.cityReference}</p>
						</card-result>
					`}))}
			</card-result-list>
		`}firstUpdated(){if(!b.Ck?.active)return;const e=Object.entries(y.M_.getState().app.activeLayers).filter((([,e])=>e)).map((([e])=>e));1===e.length&&e[0]===f.f2p.FUELING_STATIONS&&(this.tab="ev")}}k([(0,s.MZ)({type:Boolean})],C.prototype,"favoriteMessageExpanded",2),k([(0,s.MZ)({type:Boolean})],C.prototype,"loadingEV",2),k([(0,s.MZ)({type:String})],C.prototype,"favoriteMessage",2),k([(0,s.MZ)({type:Boolean})],C.prototype,"isFavoriteErrorMessage",2),k([(0,s.MZ)({type:Number})],C.prototype,"favoriteId",2),k([(0,s.MZ)({type:String})],C.prototype,"llmSummary",2),k([(0,s.MZ)({type:String})],C.prototype,"tutorialStep",2),k([(0,s.MZ)({type:Boolean})],C.prototype,"isLoggedIn",2),k([(0,s.MZ)({type:Array})],C.prototype,"results",2),k([(0,s.MZ)({type:String})],C.prototype,"searchType",2),k([(0,s.MZ)({type:String})],C.prototype,"tab",2);const _=C},12240:(e,t,i)=>{"use strict";i.r(t),i.d(t,{TraySearchPlaceUpdate:()=>h,default:()=>g});var r=i(71413),a=i(52706),s=i(56599),o=i(30555),n=i(10388),l=i(24634),c=i(83184),d=Object.defineProperty,p=Object.getOwnPropertyDescriptor,u=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?p(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&d(t,i,s),s};let h=class extends((0,s.N)(n.M_)(r.WF)){constructor(){super(...arguments),this.shown=!1}static get styles(){return[l.A,r.AH`
				:host {
					position: absolute;
					left: 50%;
					will-change: transform;
					display: flex;
					pointer-events: none;
				}

				.wrap {
					padding: 1rem;
					transform: translateX(-50%);
					overflow: hidden;
				}

				.control {
					position: relative;
					visibility: hidden;
					margin-bottom: -0.25rem;
					transform: translateY(3.5rem);
					transition: transform 0.3s, visibility 0.3s;
					box-shadow: var(--shadow-md);
					/* border: var(--border-width) solid rgb(var(--asbestos)); */
					border: var(--border-width) solid rgb(var(--concrete));
					border-radius: var(--border-radius);
					background-color: #fff;
				}

				.control--shown {
					visibility: visible;
					transform: translateY(0);
				}

				.place-change {
					padding: 0.75rem calc(2 * var(--gap));
					color: rgba(var(--darkest));
					text-align: center;
					pointer-events: auto;
					transition: none;
					font-weight: 500;
				}

				.place-change:hover,
				.place-change:focus,
				.place-change:active {
					/* TODO: explore refactoring btn class so overrides are not necessary */
					color: rgba(var(--darker));
				}

				.control:before {
					display: block;
					content: '';
					position: absolute;
					bottom: -1rem;
					left: calc(50% - 0.5rem);
					border: 0.5rem solid transparent;
					border-top-color: rgb(var(--concrete));
					margin-bottom: -1px;
				}
				.control:after {
					display: block;
					content: '';
					position: absolute;
					bottom: -1rem;
					left: calc(50% - 0.5rem);
					border: 0.5rem solid transparent;
					border-top-color: #fff;
				}
			`]}render(){return r.qy`
			<div class="wrap">
				<div class=${(0,o.H)({control:!0,"control--shown":this.shown})}>
					<button class="btn place-change" @click="${this.onSearchArea}">Search this area</button>
				</div>
			</div>
		`}stateChanged(e){this.shown=e.search.isSearchUpdateOpen}onSearchArea(){n.M_.dispatch((0,c.mG)())}};u([(0,a.MZ)({type:Boolean})],h.prototype,"shown",2),h=u([(0,a.EM)("search-place-update")],h);const g=h},43520:(e,t,i)=>{"use strict";var r=i(9748),a=i(71413),s=i(52706),o=(i(82890),i(72357)),n=i(45157),l=i(35135),c=i(32701),d=i(24634),p=i(80027),u=i(56599),h=i(10388),g=i(98451),m=(i(62600),i(22708)),y=i(52850),v=i(20732),b=Object.defineProperty,f=Object.getOwnPropertyDescriptor,w=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?f(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&b(t,i,s),s};let S=class extends((0,u.N)(h.Ay)(a.WF)){constructor(){super(...arguments),this.canAddToRoute=!1,this.isWaypoint=!1,this.status="loading"}static get styles(){return[d.A,c.A,a.AH`
				card-result {
					border-bottom: rgb(var(--silver)) solid var(--border-width);
				}
				.add-btn {
					background-color: ${(0,a.iz)(p.Ck?.tray.themeColor)};
					border-radius: 2rem;
					color: rgb(var(--clouds));
					font-size: 0.8rem;
					padding: calc(var(--gap) / 2) var(--gap);
					transition: all ease-in-out 0.2s;
				}
				.add-btn:active,
				.add-btn:focus,
				.add-btn:hover {
					text-decoration: underline;
					box-shadow: var(--shadow-sm);
				}
				.add-btn[disabled] {
					background-color: ${(0,a.iz)(p.Ck?.tray.themeColor)}50;
					text-decoration: none !important;
					box-shadow: none !important;
				}
				.btn-container {
					background-color: #fff;
					position: absolute;
					margin-right: 1rem;
					margin-top: 1rem;
					right: 0;
					top: 0;
					z-index: 10;
				}
				.heading {
					display: flex;
					justify-content: space-between;
					margin-bottom: var(--gap) !important;
					max-width: 75%;
					position: relative;
				}
				.heading-title {
					font-weight: 600;
					margin: 0;
					padding: 0;
				}
				.heading-subtitle {
					padding: 0;
				}
				.spinner-container {
					align-items: center;
					display: flex;
					justify-content: center;
					width: 100%;
				}
				.highlight-group {
					display: flex;
					flex-wrap: wrap;
					gap: var(--gap);
				}
				.highlight-icon {
					height: 1.5rem;
					margin-right: calc(var(--gap) / 2);
					width: 1.5rem;
				}
				.highlight {
					align-items: center;
					background-color: rgb(var(--clouds));
					border: rgb(var(--silver)) solid 1px;
					border-radius: 4px;
					color: rgb(var(--darker));
					display: flex;
					font-size: var(--smaller);
					font-weight: bold;
					padding: calc(var(--gap) / 2);
				}
			`]}render(){return this.feature?a.qy`
			<div style="position: relative;">
				<card-result
					.result=${this.feature}
					uri="/${this.feature.uri}?hasNavigatedFromSearch=true"
					hover-uri=${this.feature.uri}
					thumb-alt="${(0,l.J)(this.feature.title??void 0)}"
					border-color="${(0,l.J)(this.feature.color??void 0)}"
					icon="${(0,l.J)(this.feature.icon??void 0)}"
					@crc:card:mouseover=${v.A}
					@crc:card:mouseout=${v.n}
				>
					<div class="heading">
						<div>
							<h3 class="heading-title">${this.feature.title}</h3>
							<p class="heading-subtitle text-concrete">
								${"loading"===this.status?a.qy`<spinning-loader></spinning-loader>`:null}
								${"error"===this.status?a.qy`<span class="text-error">Failed to load station details.</span>`:null}
								${"ready"===this.status?a.qy`${this.fuelingStation?.dataFields?.find((e=>"Address"===e.fieldName))?.displayValue}`:null}
							</p>
						</div>
					</div>
					${this.renderHighlights()}
				</card-result>

				<div class="btn-container">
					${"error"===this.status?a.qy`<button class="btn-retry" type="button" @click=${this.query}>Try Again</button>`:null}
					${"ready"===this.status&&this.canAddToRoute?a.qy` <button
								class="add-btn btn"
								type="button"
								@click="${this.addToRoute}"
								?disabled="${this.isWaypoint}"
						  >
								${p.Ck?.route.routeButtonText}
						  </button>`:null}
				</div>
			</div>
		`:null}firstUpdated(){this.query()}updated(e){if(super.updated(e),e.has("fuelingStation")){const e=this.fuelingStation?.features?.find((e=>"Point"===e?.geometry.type))?.geometry;if(!e?.coordinates)return;const[t,i]=e.coordinates;this.isWaypoint=h.Ay.getState().search.directionsWaypts?.some((e=>e.lat.toFixed(3)===i.toFixed(3)&&e.lng.toFixed(3)===t.toFixed(3)))??!1}}stateChanged(e){const t=this.fuelingStation?.features?.find((e=>"Point"===e?.geometry.type))?.geometry;if(!t?.coordinates)return;const[i,r]=t.coordinates;this.isWaypoint=e.search.directionsWaypts?.some((e=>e.lat.toFixed(3)===r.toFixed(3)&&e.lng.toFixed(3)===i.toFixed(3)))??!1}addToRoute(e){e.preventDefault();const t=this.fuelingStation?.features?.find((e=>"Point"===e?.geometry.type))?.geometry,i=this.fuelingStation?.features?.[0]?.id??this.fuelingStation?.uri;if(h.Ay.dispatch((0,m.P)("click-add-to-route",i,y.l_R.EV_EVENT)),t){const[e,i]=t.coordinates,r={lat:i,lng:e};h.Ay.dispatch((0,g.H)(r))}}renderHighlights(){if("ready"!==this.status||!this.fuelingStation)return null;const e=[...this.fuelingStation.connectors];e.sort();const t=[{icon:null,text:1===this.fuelingStation.totalChargers?"1 Charger":`${this.fuelingStation.totalChargers||"No"} Chargers`},...e.map((e=>({icon:{311:"/images/icon-chat-bubble.svg","511-compact":"/images/511_icon.png","511-compact-inverse":"/images/511_icon_inverted.png","511-default":"/images/511_logo.png","511-default-inverse":"/images/511_logo_inverted.png","alert-default":"/images/icon-alert-fill-solid.svg","alert-triangle":"/images/icon-alert-triangle.svg","alert-triangle-white":"/images/icon-alert-triangle-white.svg","alert-white":"/images/icon-alert-fill-solid-white.svg","announcement-solid":"/images/icon-notification-fill-solid.svg","area-fill-solid":"/images/icon-draw-fill-solid.svg","area-fill-solid-alerts":"/images/icon-draw-notification-fill-solid.svg","arrow-left":"/images/sprites.svg#arrow-left","arrow-left-double":"/images/sprites.svg#arrow-left-double","arrow-left-single":"/images/sprites.svg#arrow-left-single","arrow-right":"/images/sprites.svg#arrow-right","arrow-right-double":"/images/sprites.svg#arrow-right-double","arrow-right-single":"/images/sprites.svg#arrow-right-single","arrow-down":"/images/sprites.svg#arrow-down","camera-add-favorite-prompt":"/images/icon-camera-add-favorites.svg","camera-broken":"/images/icon-camera-closed-fill-solid.svg","camera-broken-selected":"/images/icon-camera-closed-active-fill-solid.svg","camera-cluster":"/images/clusters/icon-cluster-camera-5-solid.svg","camera-default":"/images/icon-camera-fill-solid.svg","camera-hot":"/images/icon-camera-fill-solid.svg","camera-hot-inverted":"/images/icon-camera-hot-inverted-fill-solid.svg","camera-favorite":"/images/icon-camera-favorite-fill-solid.svg","camera-favorite-inverted":"/images/icon-camera-favorite-fill-solid.svg","camera-modal-unavailable":"/images/icon-camera-closed-fill-solid-padded-modal.svg","camera-unavailable":"/images/icon-camera-closed-fill-solid-padded.svg","camera-video-unavailable":"/images/icon-video-fill-solid.svg","camera-inactive-feed":"/images/icon-video-fill-solid.svg","camera-video":"/images/icon-video-fill-solid.svg","cardinal-east":"/images/icon-cardinal-east.svg","cardinal-north":"/images/icon-cardinal-north.svg","cardinal-northeast":"/images/icon-cardinal-northeast.svg","cardinal-northwest":"/images/icon-cardinal-northwest.svg","cardinal-south":"/images/icon-cardinal-south.svg","cardinal-southeast":"/images/icon-cardinal-southeast.svg","cardinal-southwest":"/images/icon-cardinal-southwest.svg","cardinal-west":"/images/icon-cardinal-west.svg","close-btn":"/images/sprites.svg#close-btn",cluster:"/images/clusters/icon-cluster-5-solid.svg","condition-seasonal":"/images/icon-bar-seasonal-fill.svg","condition-partially-covered":"/images/icon-bar-partially-fill.svg","condition-completely-covered":"/images/icon-bar-completely-fill.svg","condition-not-advised":"/images/icon-bar-not-advised-fill.svg","condition-impassable":"/images/icon-bar-impassable-fill.svg","content-favorite":"/images/icon-favorite-fill-solid.svg","content-favorite-selected":"/images/icon-favorite-fill-solid-selected.svg","favorite-place":"/images/icon-pin-fill-solid.svg","favorite-place-alerts":"/images/icon-pin-notification-fill-solid.svg","favorite-route":"/images/icon-road-fill-solid.svg","favorite-route-alerts":"/images/icon-road-notification-fill-solid.svg",construction:"/images/icon-construction-fill-solid.svg","construction-shazam":"/images/icon-construction-fill-solid-shazam.svg",danger:"/images/icon-danger-full-solid.svg","dot-compact":"/images/logo-mobile@2x.png","dot-compact-inverse":"/images/logo-mobile-inverse@2x.png","dot-default":"/images/logo.png","dot-default-inverse":"/images/logo-inverse.png","state-patrol-default":"/images/iowa-state-patrol.png","state-patrol-default-inverse":"/images/iowa-state-patrol-reversed.png","email-grey-square":"/images/icon-mail-fill-solid.svg","express-lane":"/images/icon-express-lane-fill-solid.svg","external-camera-link":"/images/icon-external-link-fill-solid.svg","external-link":"/images/icon-external-link-outline.svg","facebook-grey-square":"/images/icon-facebook-fill-solid.svg","failure-triangle":"/images/icon-notice-fill-solid.svg","feedback-grey-square":"/images/icon-feedback-fill-solid.svg","ferry-closed":"/images/icon-ferry-out-of-service-fill-solid.svg","ferry-open":"/images/icon-ferry-fill-solid.svg","floodgate-regional":"/images/icon-regional-alert-fill-solid.svg","fueling-station-dot":"/images/fueling-stations/icon-ev-small-fill.svg","fueling-station-plug":"/images/fueling-stations/icon-ev-fill.svg","fueling-station-connector-chademo":"/images/fueling-stations/icon-ev-chademo-fill.svg","fueling-station-connector-j1772":"/images/fueling-stations/icon-ev-j1772-fill.svg","fueling-station-connector-j1772combo":"/images/fueling-stations/icon-ev-ccs-fill.svg","fueling-station-connector-nema1450":"/images/fueling-stations/icon-ev-nema1450-fill.svg","fueling-station-connector-nema515":"/images/fueling-stations/icon-ev-nema515-fill.svg","fueling-station-connector-tesla":"/images/fueling-stations/icon-ev-tesla-fill.svg",globe:"/images/sprites.svg#globe","globe-alt":"/images/sprites.svg#globe-alt","icon-active-indicator":"/images/icon-active-indicator.svg","icon-hovering-indicator":"/images/icon-hovering-indicator.svg","icon-hovering-indicator-hot-camera":"/images/icon-hovering-indicator-hot-camera.svg","info-exclamation":"/images/icon-info-fill-solid.svg","info-question-mark":"/images/icon-whats-fill-solid.svg","info-question-mark-white":"/images/icon-info-fill-solid-white.svg","info-question-mark-sprite":"/images/sprites.svg#help",edit:"images/icon-edit-fill-solid.svg",mail:"images/icon-mail-fill-solid-round.svg","layer-commercial-vehicle":"/images/icon-truck-fill.svg","list-view":"/images/sprites.svg#list-view",loading:"/images/loading.svg","map-feature-cluster":"/images/icon-cluster-solid.svg","maximize-arrow":"/images/sprites.svg#maximize-arrow","metro-traffic":"/images/sprites.svg#metro-traffic","mountain-passes":"/images/icon-mountains-fill-solid.svg","minimize-arrow":"/images/sprites.svg#minimize-arrow","parking-ev":"/images/icon-parking-ev-solid.svg","parking-l":"/images/icon-parking-l-solid.svg","parking-p":"/images/icon-parking-p-solid.svg","pin-a-fill":"/images/icon-pin-a-fill.svg","pin-a-padded":"/images/icon-pin-a-padded.svg","pin-b-fill":"/images/icon-pin-b-fill.svg","pin-b-padded":"/images/icon-pin-b-padded.svg","pin-default":"/images/icon-pin-fill.svg","play-button":"/images/sprites.svg#play","plow-applying-liquid":"/images/icon-plow-liquids-fill-solid.svg","plow-applying-mixed":"/images/icon-plow-mixed-fill-solid.svg","plow-applying-none":"/images/icon-plow-fill-solid.svg","plow-applying-solid":"/images/icon-plow-solids-fill-solid.svg","plow-camera":"/images/icon-plow-camera-fill-solid.svg","plow-default":"/images/icon-camera-plow-fill-solid.svg","plow-historic":"/images/plow-location-dot.svg","plow-location-dot":"/images/plow-location-dot.svg","print-grey-square":"/images/icon-printer-fill-solid.svg","rest-area-closed":"/images/icon-restarea-closed-fill-solid.svg","rest-area-open":"/images/icon-rest-area-open-fill-solid.svg","rest-area-p-high-availability":"/images/icon-restarea-p-open-fill-solid.svg","rest-area-p-low-availability":"/images/icon-restarea-p-low-fill-solid.svg","rest-area-p-medium-availability":"/images/icon-restarea-p-med-fill-solid.svg","rest-area-p-no-realtime":"/images/icon-restarea-p-no-data-fill-solid.svg","rest-area-p-stateless":"/images/icon-restarea-p-stateless-fill-solid.svg","rest-area-p-trending-high-availability":"/images/icon-restarea-p-trending-open-fill.svg","rest-area-p-trending-low-availability":"/images/icon-restarea-p-trending-low-fill-solid.svg","rest-area-p-trending-medium-availability":"/images/icon-restarea-p-trending-med-fill.svg","rest-area-r-high-availability":"/images/icon-restarea-r-open-fill.svg","rest-area-r-low-availability":"/images/icon-restarea-r-low-fill.svg","rest-area-r-medium-availability":"/images/icon-restarea-r-med-fill.svg","rest-area-r-no-realtime":"/images/icon-restarea-r-no-data-fill-solid.svg","rest-area-r-stateless":"/images/icon-restarea-r-stateless-fill-solid.svg","rest-area-r-trending-high-availability":"/images/icon-restarea-r-trending-open-fill.svg","rest-area-r-trending-low-availability":"/images/icon-restarea-r-trending-low-fill.svg","rest-area-r-trending-medium-availability":"/images/icon-restarea-r-trending-med-fill.svg","rest-area-t-high-availability":"/images/icon-restarea-t-open-fill-solid.svg","rest-area-t-low-availability":"/images/icon-restarea-t-low-fill-solid.svg","rest-area-t-medium-availability":"/images/icon-restarea-t-med-fill-solid.svg","rest-area-t-no-realtime":"/images/icon-restarea-t-no-data-fill-solid.svg","rest-area-t-stateless":"/images/icon-restarea-t-stateless-fill-solid.svg","rest-area-t-trending-high-availability":"/images/icon-restarea-t-trending-open-fill.svg","rest-area-t-trending-low-availability":"/images/icon-restarea-t-trending-low-fill-solid.svg","rest-area-t-trending-medium-availability":"/images/icon-restarea-t-trending-med-fill.svg","rest-area-legend":"/images/icon-parking-location-fill.svg","rest-area-stateless":"/images/icon-stateless-trending-fill-solid.svg","roadway-fill":"/images/icon-roadway-fill.svg","roadway-regular":"/images/icon-bar-regular-road-fill-solid.svg","road-conditions":"/images/icon-road-condition-legend.svg","road-condition-dry":"/images/driving_dry.svg","road-condition-wet":"/images/driving_wet.svg","road-condition-snow":"/images/driving_snow.svg","road-condition-icy":"/images/driving_icy.svg","road-condition-wind":"/images/driving_wind.svg","road-condition-visibility":"/images/driving_visibility.svg","road-report-axle-width-limit":"/images/icon-axle-width-fill-solid.svg","road-report-closure":"/images/icon-closure-fill-solid.svg","road-report-closure-critical":"/images/icon-closure-fill-solid-shazam.svg","road-report-closure-normal-delay":"/images/icon-closure-fill-solid-delay.svg","road-report-closure-critical-delay":"/images/icon-closure-fill-solid-delay-shazam.svg","road-report-coming-soon":"/images/future/icon-scheduled-event-31-fill-solid.svg","road-report-construction":"/images/icon-construction-fill-solid.svg","road-report-crash-normal":"/images/icon-warning-fill-solid.svg","road-report-crash-critical":"/images/icon-warning-fill-solid-shazam.svg","road-report-crash-normal-delay":"/images/icon-warning-fill-solid-delay.svg","road-report-crash-critical-delay":"/images/icon-warning-fill-solid-delay-shazam.svg","road-report-critical-disruption":"/images/icon-shazam-fill.svg","road-report-danger":"/images/icon-danger-fill-solid.svg","road-report-flooding":"/images/icon-flooding-fill-solid.svg","road-report-information-normal":"/images/icon-info-fill-solid-round.svg","road-report-information-critical":"/images/icon-info-fill-solid-shazam.svg","road-report-information-normal-delay":"/images/icon-info-fill-solid-delay.svg","road-report-information-critical-delay":"/images/icon-info-fill-solid-delay-shazam.svg","road-report-lane-closure-normal":"/images/icon-lane-closure-fill-solid.svg","road-report-lane-closure-critical":"/images/icon-lane-closure-fill-solid-shazam.svg","road-report-lane-closure-normal-delay":"/images/icon-lane-closure-fill-solid-delay.svg","road-report-lane-closure-critical-delay":"/images/icon-lane-closure-fill-solid-delay-shazam.svg","road-report-mountain-pass":"/images/icon-mountains-fill-solid-purple.svg","road-report-mountain-pass-alert":"/images/icon-mountains-alert-fill-solid.svg","road-report-mountain-pass-alert-white":"/images/icon-mountains-alert-fill-white.svg","road-report-pandemic-normal":"/images/icon-virus-fill-solid.svg","road-report-pandemic-critical":"/images/icon-virus-fill-solid-shazam.svg","road-report-restriction-blue-normal":"/images/icon-restrictions-blue-fill-solid.svg","road-report-restriction-normal":"/images/icon-restrictions-fill-solid.svg","road-report-restriction-critical":"/images/icon-restrictions-fill-solid-shazam.svg","road-report-restriction-normal-delay":"/images/icon-restrictions-fill-solid-delay.svg","road-report-restriction-critical-delay":"/images/icon-restrictions-fill-solid-delay-shazam.svg","road-report-roadwork-normal":"/images/icon-construction-fill-solid.svg","road-report-roadwork-critical":"/images/icon-construction-fill-solid-shazam.svg","road-report-roadwork-normal-delay":"/images/icon-construction-fill-solid-delay.svg","road-report-roadwork-critical-delay":"/images/icon-construction-fill-solid-delay-shazam.svg","road-report-tow-prohibited":"/images/icon-towban-fill-solid.svg","road-report-traffic-delay":"/images/icon-delay-fill.svg","road-report-truck-ramp":"/images/icon-truck-ramp-fill-solid.svg","road-report-truck-ramp-closed":"/images/icon-truck-ramp-closed-fill-solid.svg","road-report-truck-stop":"/images/icon-truck-parking-open-fill-solid.svg","road-report-chain-station":"/images/icon-chain-station-fill-solid.svg","road-report-weigh-station":"/images/icon-weight-station-fill-solid.svg","road-report-warning-normal":"/images/icon-warning-fill-solid.svg","road-report-warning-critical":"/images/icon-warning-fill-solid-shazam.svg","road-report-warning-normal-delay":"/images/icon-warning-fill-solid-delay.svg","road-report-warning-critical-delay":"/images/icon-warning-fill-solid-delay-shazam.svg","road-report-weather-normal":"/images/icon-storm-fill-solid.svg","road-report-weather-critical":"/images/icon-storm-fill-solid-shazam.svg","roundabout-default":"/images/icon-roundabout-fill-solid.svg","scenic-byway":"/images/icon-scenic-byway.svg","search-default":"/images/icon-search-fill-solid.svg","sign-active":"/images/icon-sign-active-fill-solid.svg","sign-active-travel-time":"/images/icon-travel-time-sign-fill-solid.svg","sign-active-tpim":"/images/icon-sign-parking-active-fill-solid.svg","sign-active-vsl":"/images/icon-vsl-active-fill-solid.svg","sign-default":"/images/icon-sign-fill-solid.svg","sign-inactive":"/images/icon-sign-inactive-fill-solid.svg","sign-no-data":"/images/icon-sign-no-data-fill-solid.svg","sign-unavailable":"/images/icon-sign-broken-fill-solid.svg","sign-unavailable-fallback":"/images/icon-sign-broken-fill-solid-fallback.png","sign-overlay-not-found":"/images/overlay-signs/notFound.png","sprite-alert-triangle":"/images/sprites.svg#alert-triangle","sprite-area-fill":"/images/sprites.svg#area-fill","sprite-draw-area":"/images/sprites.svg#draw-area","sprite-arrow-left-lg":"/images/sprites.svg#arrow-left-lg","sprite-arrow-right-lg":"/images/sprites.svg#arrow-right-lg","sprite-bike":"/images/sprites.svg#bike","sprite-bus":"/images/sprites.svg#bus","sprite-camera":"/images/sprites.svg#camera","sprite-camera-fill":"/images/sprites.svg#camera-fill","sprite-camera-hot":"/images/sprites.svg#hot-camera","sprite-close":"/images/sprites.svg#close","sprite-directions":"/images/sprites.svg#directions","sprite-drive":"/images/sprites.svg#drive","sprite-feedback-confirmed":"/images/sprites.svg#confirm-check","sprite-feedback-wrong":"/images/sprites.svg#wrong-x","sprite-hamburger-menu":"/images/sprites.svg#hamburger","sprite-home":"/images/sprites.svg#home","sprite-info-question-mark":"/images/sprites.svg#help","sprite-layers":"/images/sprites.svg#layers","sprite-layers-collapse":"/images/sprites.svg#layers-collapse","sprite-layers-expand":"/images/sprites.svg#layers-expand","sprite-legend":"/images/sprites.svg#legend","sprite-legend-collapse":"/images/sprites.svg#legend-collapse","sprite-legend-expand":"/images/sprites.svg#legend-expand","sprite-magnifying-glass":"/images/sprites.svg#magnifying-glass","sprite-map-pin":"/images/sprites.svg#map-pin","sprite-mic-magic-fill":"/images/sprites.svg#mic-magic-fill","sprite-mic-magic-outline":"/images/sprites.svg#mic-magic-outline","sprite-mic-off-fill":"/images/sprites.svg#mic-off-fill","sprite-mic-off-outline":"/images/sprites.svg#mic-off-outline","sprite-mic-on-fill":"/images/sprites.svg#mic-on-fill","sprite-mic-on-outline":"/images/sprites.svg#mic-on-outline","sprite-minus":"/images/sprites.svg#minus","sprite-my-location":"/images/sprites.svg#my-location","sprite-mountain-pass":"/images/sprites.svg#mountain-pass","sprite-notifications":"/images/sprites.svg#notifications","sprite-other-state-info":"/images/sprites.svg#info","sprite-pause":"/images/sprites.svg#pause","sprite-pin-a":"/images/sprites.svg#pin-a","sprite-pin-b":"/images/sprites.svg#pin-b","sprite-play":"/images/sprites.svg#play","sprite-plug":"/images/sprites.svg#plug","sprite-plus":"/images/sprites.svg#plus","sprite-refresh":"/images/sprites.svg#refresh","sprite-rest-area":"/images/sprites.svg#rest-area","sprite-reverse":"/images/sprites.svg#reverse","sprite-roadway":"/images/sprites.svg#roadway","sprite-schedule":"/images/sprites.svg#schedule","sprite-station-alert":"/images/sprites.svg#station-alert","sprite-station-normal":"/images/sprites.svg#station-normal","sprite-traffic":"/images/sprites.svg#traffic","sprite-trashcan":"/images/sprites.svg#trashcan","sprite-trucker":"/images/sprites.svg#trucker","sprite-up-arrow":"/images/sprites.svg#arrow-up","sprite-user":"/images/sprites.svg#user","sprite-walk":"/images/sprites.svg#walk","sprite-weather":"/images/sprites.svg#weather","sprite-winter":"/images/sprites.svg#winter","traffic-speeds":"/images/icon-speed-bar-legend.svg","traffic-speed-dark":"/images/icon-speedtable-fill-dark-bg.svg","traffic-speed-light":"/images/icon-speedtable-fill-light-bg.svg","truck-parking-closed":"/images/icon-truck-closed-fill-solid.svg","truck-parking-default":"/images/icon-truck-open-fill-solid.svg","truck-parking-high-availability":"/images/icon-truck-open-fill-solid.svg","truck-parking-low-availability":"/images/icon-truck-low-fill-solid.svg","truck-parking-medium-availability":"/images/icon-truck-med-fill-solid.svg","truck-parking-open-no-realtime-data":"/images/icon-truck-nodata-fill-solid.svg","twitter-grey-square":"/images/icon-twitter-fill-solid.svg","waze-accident":"/images/icon-waze-warning-fill.svg","waze-closure":"/images/icon-waze-closure-fill-solid.svg","waze-construction":"/images/icon-waze-construction-fill-solid.svg","waze-hazard":"/images/icon-waze-hazard-fill-solid.svg","waze-heavy-traffic":"/images/icon-waze-heavy-traffic-fill-solid.svg","waze-mod-traffic":"/images/icon-waze-traffic-fill-solid.svg","waze-weather-reports":"/images/icon-waze-storm-fill-solid.svg","weather-radar-layer":"/images/icon-radar-bar-legend.svg","weather-radar-legend":"/images/weather-radar-legend.svg","weather-station-alert":"/images/icon-rwis-alert-fill-solid.svg","weather-station-alert-inverted":"/images/icon-rwis-alert-fill-solid-white.svg","weather-station-alert-frozen-inverted":"/images/icon-rwis-alert-frozen-fill-solid-white.svg","weather-station-alert-freezing":"/images/icon-rwis-alert-fill-solid.svg","weather-station-alert-freezing-white":"/images/icon-rwis-alert-fill-solid-white.svg","weather-station-alert-white":"/images/icon-rwis-alert-fill-solid-white.svg","weather-station-default":"/images/icon-rwis-fill-solid.svg","weather-station-freezing":"/images/icon-rwis-freezing-fill-solid.svg","weather-station-no-data":"/images/icon-rwis-nodata-fill-solid.svg"}[`fueling-station-connector-${e.toLowerCase()}`],text:e})))];return a.qy`<div class="highlight-group">
			${t.map((({icon:e,text:t})=>a.qy`
					<span class="highlight">
						${e?a.qy`<img class="highlight-icon" alt="" src="${e}" role="presentation" />`:null}
						${t}
					</span>
				`))}
		</div>`}async query(){try{this.status="loading";const e=this.feature?.uri?.split("/").slice(-1)[0];if(e){const t=(0,r.gV)(e),i=window.sessionStorage.getItem(t);if(null!=i)this.fuelingStation=JSON.parse(i),this.status="ready";else{const i=await(0,o.A)((0,n.Jt)(e));i?.fuelingStationQuery?.fuelingStation?(this.status="ready",this.fuelingStation=i.fuelingStationQuery.fuelingStation,window.sessionStorage.setItem(t,JSON.stringify(this.fuelingStation))):this.status="error"}}}catch(e){this.status="error",console.error("Failed to load fueling station details",e)}}};w([(0,s.MZ)({type:Boolean})],S.prototype,"canAddToRoute",2),w([(0,s.MZ)({type:Boolean})],S.prototype,"isWaypoint",2),w([(0,s.MZ)({type:Object})],S.prototype,"feature",2),w([(0,s.MZ)({type:Object})],S.prototype,"fuelingStation",2),w([(0,s.MZ)({type:String})],S.prototype,"status",2),S=w([(0,s.EM)("tray-search-route-ev")],S)},96548:(e,t,i)=>{"use strict";i.d(t,{Ay:()=>p,Wj:()=>d});var r=i(71413),a=i(52706),s=i(56188),o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,l=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?n(t,i):t,l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&o(t,i,s),s};const c=class extends r.WF{constructor(){super(...arguments),this._borderColor="rgb(var(--concrete))",this._backgroundColor=c.DEFAULT_BACKGROUND_COLOR,this._textColor="rgb(var(--darkest))",this.hoverUri=void 0}set borderColor(e){const t=this._borderColor;this._borderColor=e,this.requestUpdate("borderColor",t)}get borderColor(){return this._borderColor}set backgroundColor(e){const t=this._backgroundColor;this._backgroundColor=e,this.requestUpdate("backgroundColor",t)}get backgroundColor(){return this._backgroundColor}set textColor(e){const t=this._textColor;this._textColor=e,this.requestUpdate("textColor",t)}get textColor(){return this._textColor}onCardMouseOver(){this.dispatchEvent((0,s.h)("crc:card:mouseover"))}onCardMouseOut(e){if(this.hoverUri){const t=e.relatedTarget;if(!t||this.shadowRoot&&this.shadowRoot.contains(t))return}this.dispatchEvent((0,s.h)("crc:card:mouseout"))}get card(){return this.renderRoot.querySelector("#card")}focusCard(e){this.hasUpdated?this.renderRoot.querySelector("#card").focus(e):this.updateComplete.then((()=>{this.renderRoot.querySelector("#card").focus(e)}))}};let d=c;d.DEFAULT_BACKGROUND_COLOR="#FFF",l([(0,a.MZ)({type:String,attribute:"border-color"})],d.prototype,"borderColor",1),l([(0,a.MZ)({type:String,attribute:"background-color"})],d.prototype,"backgroundColor",1),l([(0,a.MZ)({type:String,attribute:"text-color"})],d.prototype,"textColor",1),l([(0,a.MZ)({type:String,reflect:!0})],d.prototype,"uri",2),l([(0,a.MZ)({type:String,attribute:"hover-uri",reflect:!0})],d.prototype,"hoverUri",2);const p=d},62600:(e,t,i)=>{"use strict";var r=i(20492),a=i(71413),s=i(52706),o=i(80480),n=i(35135),l=i(30555),c=i(4983),d=i(40342),p=i(11457),u=i(10388),h=i(96548),g=i(87190),m=i(32701),y=i(5124),v=i(24634),b=i(98101),f=i(52850),w=i(70192),S=i(66003),A=i(54833),E=(i(47531),Object.defineProperty),$=Object.getOwnPropertyDescriptor,T=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?$(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&E(t,i,s),s};let R=class extends h.Ay{constructor(){super(...arguments),this.thumbCategory=f.NaE.UNKNOWN,this.loadThumb=!1,this.showClose=!1,this.preserveAspectRatio=!1,this.quantities=[],this.tpimSign="",this.tpimID="",this.isError=!1}static get styles(){return[m.A,y.A,v.A,b.A,a.AH`
				:host {
					display: block;
					--sign-background-color: 0 0 0;
				}

				::slotted(*) {
					overflow: hidden;
					white-space: normal;
				}
				a.card-result-container:hover {
					text-decoration: none;
				}
				.card-result_text {
					overflow: hidden;
				}

				::slotted(p) {
					margin: 0 !important;
				}

				.embedded-image-sign {
					display: flex;
				}

				.image-side {
					width: 25%;
					object-fit: contain;
					box-sizing: border-box;
				}

				.text-side {
					width: 75%;
					box-sizing: border-box;
				}

				.gantry-image-signs {
					display: flex;
					padding-top: 1px;
					justify-content: center;
					background: #000;
				}
				.gantry-image-signs.full-height {
					height: 40px;
					align-items: center;
				}

				.gantry-image-signs .gantry-sign {
					flex-grow: 1;
					display: flex;
					align-items: center;
					justify-content: center;
					border-right: 1px solid white;
					max-width: 45px;
					max-height: 60px;
				}

				.gantry-image-signs .gantry-sign:last-of-type {
					border-right: 0px solid white !important;
				}

				.gantry-image-signs .gantry-sign img {
					width: 100%;
					max-height: 100px;
				}

				@media screen and (prefers-reduced-motion: reduce) {
					.card-result-container {
						transition: none;
					}
				}
				.card-result-container {
					display: flex;
					transition: all 0.15s ease-in-out;
				}

				.card-result_content {
					flex: 1;
				}

				.card-result_content svg {
					display: inline-block;
					min-height: 80px;
					margin: 10px;
					width: 144px;
				}

				.sign-is-active {
					color: rgb(var(--that-sunday));
				}

				.sign-is-not-active {
					color: #ffffff;
				}

				#signMessageDiv {
					background-color: rgb(var(--sign-background-color));
					padding: 0.5rem;
					min-width: 8rem;
					overflow-x: hidden;
				}

				#signImageDiv {
					background-color: rgb(var(--sign-background-color));
					min-height: inherit;
					position: relative;
				}

				#signImageDiv.posted {
					text-align: center;
				}

				#signImageDiv.posted svg {
					max-width: 80px;
				}

				.card-result_border {
					flex: 0 0 var(--gap);
					align-self: stretch;
					margin: calc(var(--border-width) * -1) 0 calc(var(--border-width) * -1)
						calc(var(--border-width) * -1);
				}

				.card-result_border:hover {
					margin-bottom: 0;
				}

				.card-result_icon {
					align-self: start;
					margin: 1.25rem 0 1rem 1rem;
					flex-shrink: 0;
					width: 1.5rem;
					height: 1.5rem;
					grid-area: icon;
				}

				.card-result_text {
					padding: 1rem;
					grid-area: text;
				}

				.card-result_figure {
					position: relative;
					transition: opacity 0.25s ease-in-out;
					overflow: hidden;
					min-width: 10.5rem;
					max-width: 11rem;
					min-height: 6rem;
					width: 20%;
					margin: 0.5rem;
					justify-self: end;
					/* image will be cropped on top and bottom at some viewport widths if image is taller
						 than it is wide */
				}
				@media all and (max-width: 475px) {
					.card-result_figure {
						min-width: 6.5rem;
					}
				}
				.card-result-sign_text_frame {
					display: flex;
					justify-content: flex-end;
					flex-direction: column !important;
					padding-left: 0;
					padding-right: 0;
					flex-flow: row wrap;
					margin: 0;
				}
				.card-result-sign_text_page {
					background-color: var(--sign-background-color);
					flex-direction: row;
					min-height: 6rem;
					flex: 0 0 0%;
					margin: 0.5rem;
					display: flex;
					justify-content: center;
					align-items: center;
					max-width: 9rem;
				}

				.com-icon-wrapper {
					display: flex;
					flex-flow: row;
					flex-wrap: wrap;
					margin: 0.25rem -0.5rem -0.25rem 0;
					font-weight: 500;
					font-size: var(--smaller);
				}

				.com-icon-card {
					background-color: rgba(var(--clouds), 1);
					display: inline-flex;
					align-items: center;
					justify-content: center;
					width: auto;
					height: calc(1.5 * var(--smaller));
					margin: 0.25rem 0.5rem 0.25rem 0;
					border: none;
					padding: 0.25rem 0.5rem;
				}

				.com-icon-card img {
					max-height: 100%;
					max-width: 1.5rem;
					margin-right: 0.5rem;
				}

				/*	iOS/Safari needs to allow notification thumbs to shrink down farther	*/
				@supports (-webkit-overflow-scrolling: touch) {
					.card-result_figure {
						min-width: 6rem;
					}
					#signImageDiv {
						min-height: 4rem !important;
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						width: 100%;
					}
					.card-result-sign_text_frame {
						margin-top: 0.5rem;
						margin-bottom: 0.5rem;
					}
					.card-result-sign_text_page {
						min-height: 4rem !important;
						max-height: 4rem !important;
						width: 6rem !important;
					}
					#signMessageDiv {
						min-width: 3rem !important;
						max-height: 3rem !important;
						padding: 0.25rem;
					}
				}

				@media screen and (prefers-reduced-motion: reduce) {
					.card-result_figure {
						transition: none;
					}
				}

				.card-result_thumb {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					height: auto;
					width: 100%;
				}

				.GANTRY .card-result_thumb {
					max-height: 100px;
				}

				.card-result_thumb-preserve {
					position: absolute;
					display: inline-block;
					left: 50%;
					transform: translate(-50%);
					height: auto;
					width: auto;
					max-width: 100%;
					max-height: 100%;
				}

				.card-result_thumb-overlay {
					max-height: 100%;
					width: auto;
					transform: translate(8%, -50%);
				}

				.card-result_close-btn,
				.card-result_close-btn:hover,
				.card-result_close-btn:focus {
					grid-area: x-button;
				}
				.card-result_close-btn:active {
					background: radial-gradient(rgba(var(--darkest), 0.25), transparent);
				}

				.delay-description {
					grid-area: tiles;
					display: flex;
					justify-content: flex-start;
					min-width: 200px;
				}

				.delay-description .top-fields-grid-search {
					justify-content: flex-start;
				}

				.delay-description.small .top-fields-grid-search {
					width: 100%;
				}

				.delay-description .top-field-item-search {
					margin: 5px 5px 5px 0;
					flex: auto;
					overflow: hidden;
					text-overflow: elipses;
				}

				.rest-area-description {
					grid-area: tiles;
					display: flex;
					justify-content: flex-start;
				}

				.rest-area-description .top-fields-grid-search {
					max-width: 100%;
					justify-content: flex-start;
				}

				.rest-area-description .top-field-item-search {
					flex: auto;
				}

				.top-field-rest-area-content {
					text-decoration-color: transparent !important;
				}

				.rest-area-description li {
					margin: 5px 0;
					max-width: 100%;
				}

				.delay-description.small .top-field-item-search {
					max-width: 28%;
					min-width: 95px;
				}

				.delay-description.small figure {
					min-width: 35%;
				}

				figure.card-result_figure.hide {
					display: none;
				}

				.card-result-grid-container,
				.card-result-grid-container-image-multi-tile,
				.card-result-grid-container-image,
				.card-result-grid-container-multi-tile {
					display: grid;
				}

				.card-result-grid-container-multi-tile {
					grid-template:
						[r1] 'icon text x-button' auto [r1end]
						[r2] '. tiles .' / min-content 1fr min-content;
				}

				.card-result-grid-container {
					grid-template: [r1] 'icon text tiles x-button' auto [r1end] / min-content 1fr auto min-content;
					padding-right: 3px;
				}
				.card-result-grid-container-image-multi-tile {
					grid-template:
						[r1] 'icon text image x-button' auto [r1end]
						[r2] '. tiles tiles .' auto [r2end] / min-content 1fr auto min-content;
				}

				.card-result-grid-container-image {
					grid-template:
						[r1] 'icon text image x-button' auto [r1end]
						[r2] '. . tiles .' auto [r2end] / min-content 1fr auto min-content;
				}

				@media all and (min-width: 625px) {
					.card-result-grid-container-multi-tile {
						grid-template: [r1] 'icon text tiles x-button' auto [r1end] / min-content 1fr auto min-content;
					}

					.card-result-grid-container-image {
						grid-template: [r1] 'icon text tiles image x-button' auto [r1end] / min-content 1fr auto auto min-content;
					}
				}

				@media all and (min-width: ${(0,a.iz)(f.EA.TABLET)}) {
					.card-result-grid-container-image-multi-tile {
						grid-template: [r1] 'icon text tiles image x-button' auto [r1end] / min-content 1fr auto auto min-content;
					}
				}

				@media all and (min-width: ${(0,a.iz)(f.EA.DESKTOP)}) {
					.card-result-grid-container-multi-tile {
						grid-template:
							[r1] 'icon text x-button' auto [r1end]
							[r2] '. tiles .' / min-content 1fr min-content;
					}

					.card-result-grid-container-image-multi-tile {
						grid-template:
							[r1] 'icon text image x-button' auto [r1end]
							[r2] '. tiles tiles .' auto [r2end] / min-content 1fr auto min-content;
					}
				}
			`]}render(){const e=this.delayDescriptions||[],t=e.length>1,i=this.thumbUrl&&this.thumbCategory===f.NaE.LINK?"/images/icon-external-link-fill-solid.svg":this.thumbUrl,r=a.qy`
			<div
				class="card-result_border"
				style=${(0,o.W)({"background-color":this.borderColor})}
			></div>
			<div
				style=${(0,o.W)({"background-color":this.backgroundColor})}
				class=${(0,l.H)({"card-result_content":!0,"card-result-grid-container-multi-tile":!this.thumbUrl&&t,"card-result-grid-container":!this.thumbUrl&&!t,"card-result-grid-container-image":!(!this.thumbUrl||t||!this.thumbUrl||this.restAreaStatusSummary),"card-result-grid-container-image-multi-tile":!!(this.thumbUrl&&t||this.thumbUrl&&this.restAreaStatusSummary)})}
			>
				${this.icon?a.qy` <img src="${this.icon}" alt="" class="card-result_icon" role="presentation" /> `:a.qy` <div class="placeholder_icon card-result_icon"></div> `}
				<div class="card-result_text">
					<span id="${this.uri?this.uri:100*Math.random()}Title">
						<slot id="title-slot">
							<div class="placeholder placeholder_h3"></div>
							<div class="placeholder" style="margin-bottom: 0;"></div>
						</slot>
					</span>
					${i&&e.length?a.qy`
								<div
									class="delay-description ${window.appDimensions.sidebarWidth<540?"small":""}"
								>
									<ul class="top-fields-grid-search">
										${e.map((e=>e&&e.currentDelay?a.qy`
														<li class="top-field-item-search card--rounded top-field-item-no-alert">
															<div class="top-field-delay-item-content">
																<p style="margin-bottom: 2px;">
																	<b>${e.direction}</b>
																</p>
																<h2 style=${(0,o.W)({color:e.timeColor??"initial"})}>
																	${e.delayTime}
																</h2>
																<p>${e.qualifier}</p>
															</div>
														</li>
												  `:a.qy``))}
									</ul>
								</div>
						  `:""}
					${i&&this.restAreaStatusSummary?a.qy`
								<div class="rest-area-description">
									<ul class="top-fields-grid-search">
										<li class="top-field-item-search card--rounded top-field-item-no-alert">
											<div class="top-field-rest-area-content">
												<h2 style=${(0,o.W)({color:this.restAreaStatusSummary.headerColor})}>
													${this.restAreaStatusSummary.header}
												</h2>
												<h3 style=${(0,o.W)({color:this.restAreaStatusSummary.bodyColor})}>
													${this.restAreaStatusSummary.body}
												</h3>
												<p style=${(0,o.W)({color:this.restAreaStatusSummary.footerColor})}>
													${this.restAreaStatusSummary.footer.map((e=>a.qy`<div>${e}</div>`))}
												</p>
											</div>
										</li>
									</ul>
								</div>
						  `:void 0}
					${this.renderQuantities()}
				</div>
				${i?this.renderImage():""}
				${!i&&this.restAreaStatusSummary?a.qy`
							<div class="rest-area-description">
								<ul class="top-fields-grid-search">
									<li class="top-field-item-search card--rounded top-field-item-no-alert">
										<div class="top-field-rest-area-content">
											<h1 style=${(0,o.W)({color:this.restAreaStatusSummary.headerColor})}>
												${this.restAreaStatusSummary.header}
											</h1>
											<h2 style=${(0,o.W)({color:this.restAreaStatusSummary.bodyColor})}>
												${this.restAreaStatusSummary.body}
											</h2>
											<p style=${(0,o.W)({color:this.restAreaStatusSummary.footerColor})}>
												${this.restAreaStatusSummary.footer.map((e=>a.qy`<div>${e}</div>`))}
											</p>
										</div>
									</li>
								</ul>
							</div>
					  `:void 0}
				${!i&&e.length?a.qy`
							<div
								class="delay-description ${window.appDimensions.sidebarWidth<540?"small":""}"
							>
								<ul class="top-fields-grid-search">
									${e.map((e=>e&&e.currentDelay?a.qy`
													<li class="top-field-item-search card--rounded top-field-item-no-alert">
														<div class="top-field-delay-item-content">
															<p style="margin-bottom: 2px;">
																<b>${e.direction}</b>
															</p>
															<h2 style=${(0,o.W)({color:e.timeColor??"initial"})}>
																${e.delayTime}
															</h2>
															<p>${e.qualifier}</p>
														</div>
													</li>
											  `:a.qy``))}
								</ul>
							</div>
					  `:""}
				${(0,w.A7)(this.result)&&this.result?.views?.[0]?(0,p.T)(this.generateSignDisplayContent(this.result.views[0],this.result),a.qy`<span></span>`):void 0}
				${this.showClose?a.qy`
							<div class="close-wrap" style="${(0,o.W)({fill:this.textColor})}">
								<button
									class="btn card-result_close-btn"
									id="close-btn"
									@click="${this.onDismissClick}"
									aria-label="Close"
								>
									<svg role="presentation" class="btn_icon" aria-label="Close">
										<use href="${"/images/sprites.svg#close"}"></use>
									</svg>
								</button>
							</div>
					  `:a.qy``}
			</div>
		`;return this.uri?a.qy`
					<a
						id="card"
						class="card-result-container card--link"
						style="${(0,o.W)({color:this.textColor})}"
						href=${this.uri}
						@click="${this.onURIClick}"
						@mouseenter="${this.onCardMouseOver}"
						@mouseleave="${this.onCardMouseOut}"
						@focus="${this.onCardMouseOver}"
						@blur="${this.onCardMouseOut}"
						aria-labelledby="${this.uri}Title"
					>
						${r}
					</a>
			  `:a.qy`
					<div
						id="card"
						class="card-result-container"
						style="${(0,o.W)({color:this.textColor})}"
					>
						${r}
					</div>
			  `}renderImage(){const e=this.thumbUrl&&this.thumbCategory===f.NaE.LINK?"/images/icon-external-link-fill-solid.svg":this.thumbUrl;return e?a.qy` <figure
			class=${(0,l.H)({"card-result_figure":!0})}
			aria-label="${(0,n.J)(e)}"
			style=${(0,o.W)({opacity:this.loadThumb?"1":"0.25","background-color":this.preserveAspectRatio?"black":"transparent"})}
		>
			<img
				class=${(0,l.H)({"card-result_thumb":!this.preserveAspectRatio,"card-result_thumb-preserve":this.preserveAspectRatio})}
				src=${this.loadThumb?e:""}
				alt=""
				role="presentation"
				@error="${e=>{const t=e.currentTarget;t&&(t.src="/images/icon-camera-closed-fill-solid-padded.svg")}}"
			/>
		</figure>`:null}renderQuantities(){if(this.quantities.length)return a.qy`
			<div class="com-icon-wrapper" data-test-id="quantities">
				${this.quantities.map((e=>a.qy`<div
						class="com-icon-card card--rounded"
						title="${e.label}: ${e.value}"
					>
						${e.icon?a.qy`<img src="${e.icon}" alt="${e.label}" role="presentation" />`:void 0}
						<p>${e.value}</p>
					</div>`))}
			</div>
		`}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem"),"IntersectionObserver"in window?(this.loadObserver=new IntersectionObserver((e=>{e.some((e=>e.isIntersecting))&&(this.loadThumb=!0,this.loadObserver&&this.loadObserver.disconnect())}),{rootMargin:"15%"}),this.loadObserver.observe(this)):this.loadThumb=!0}disconnectedCallback(){this.loadObserver&&this.loadObserver.disconnect(),super.disconnectedCallback()}onDismissClick(){this.dispatchEvent(new CustomEvent("click-dismiss"))}onURIClick(e){e.preventDefault();const t=e.target;(!t.closest&&e.target!==this.renderRoot.querySelector("#close-btn")||t.closest&&!t.closest(".close-wrap"))&&(u.M_.dispatch((0,g.wf)(null)),this.uri&&(u.M_.dispatch((0,S.oo)(this.uri)),setTimeout((()=>{window.dispatchEvent(new CustomEvent("trayFocus",{detail:{message:"Focus Tray",time:new Date}}))}),0)))}async generateSignDisplayContent(e,t){const i=t.signStatus===c.Ol.DisplayingMessage;if(t.gantrySigns?.length){const e=t.views?.[0];return this.generateGantryImageSign(e.imageUrl,e.title,t)}return(0,w.jq)(e)&&i?await this.generateOverlayTpimSign(e):(0,w.B_)(e)&&i?this.generateOverlayTravelTimeSign(e):(0,w.Cm)(e)&&i?this.generateVMSImageSign(e.imageUrl,e.title):(0,w.f2)(e)&&i?this.generateEmbeddedImageSign(t.signStatus,e.textLines,e.imageUrl,e.textJustification):(0,w.uv)(e)?e.category===f.A68.POSTED?this.generatePostedSign(e):e.category===f.A68.BRIDGE_HEIGHT?(0,r.A)(e.textLines,80,"1.25rem"):this.generateSignPageText(t.signStatus,e.textLines,e.textJustification):void 0}generateOverlayTravelTimeSign(e){return a.qy`<figure
			class="card-result_figure"
			aria-label="${(0,n.J)(this.thumbAlt)}"
			style=${(0,o.W)({opacity:this.loadThumb?"1":"0.25","background-color":this.preserveAspectRatio?"black":"transparent"})}
		>
			<sign-overlay-travel-time
				imageUrl=${e.imageUrl}
				imageLayout=${e.imageLayout}
				.travelTimes=${e.travelTimes}
				title=${e.title}
			></sign-overlay-travel-time>
		</figure>`}async generatePostedSign(e){let t="/images/weight-restriction.svg";e.title?.includes("CSX/US20/WESTFLD")&&(t="/images/weight-restriction_i90i90.svg");const i=await fetch(t),r=await i.text();let s=3,l=r.replaceAll('<tspan x="0" y="0">0T</tspan>',(t=>{const i=e.textLines[s];return i?(s-=1,`<tspan x="0" y="0">${i}T</tspan>`):'<tspan x="0" y="0">--</tspan>'}));return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&(l=l.replace('data-safari=""','height="300" width="200"')),l.includes("svg")?a.qy` <figure
				class="card-result_figure"
				aria-label="${(0,n.J)(this.thumbAlt)}"
				style=${(0,o.W)({opacity:this.loadThumb?"1":"0.25","background-color":"transparent"})}
			>
				<div id="signImageDiv" class="posted" style="background: transparent;">
					${(0,d._)(l)}
				</div>
			</figure>`:a.qy``}async generateOverlayTpimSign(e){if(e.imageUrl===this.tpimID&&this.tpimSign)return a.qy`${(0,d._)(this.tpimSign)}`;const t=await fetch(e.imageUrl),i=await t.text(),r=e?.textLines?.[0]?.split(" ").filter((e=>!!e))||["","",""];let s=0;const o=i.replaceAll('<tspan x="0" y="0">--</tspan>',(e=>{const t=r[s];return t?(s+=1,`<tspan x="${-1*(t.length-1)*48}" y="0">${t}</tspan>`):'<tspan x="0" y="0">--</tspan>'}));return o.includes("svg")?(this.tpimID=e.imageUrl,this.tpimSign=o,a.qy` ${(0,d._)(o)} `):a.qy`<span></span>`}generateVMSImageSign(e,t){return a.qy`
			<figure
				class="card-result_figure"
				aria-label=${this.thumbAlt||t}
				style=${(0,o.W)({opacity:this.loadThumb?"1":"0.25","background-color":this.preserveAspectRatio?"black":"transparent"})}
			>
				<div id="signImageDiv">
					<img
						class=${(0,l.H)({"card-result_thumb":!this.preserveAspectRatio,"card-result_thumb-preserve":this.preserveAspectRatio})}
						alt=""
						role="presentation"
						src="${this.loadThumb?e:""}"
						@error="${e=>{const t=e.currentTarget;t&&(t.src="/images/icon-sign-broken-fill-solid.svg")}}"
					/>
				</div>
			</figure>
		`}generateGantryImageSign(e,t,i){return a.qy`
			<figure
				class="card-result_figure GANTRY"
				aria-label=${this.thumbAlt||t}
				style=${(0,o.W)({opacity:this.loadThumb?"1":"0.25","background-color":this.preserveAspectRatio?"black":"transparent"})}
			>
				${e.startsWith("data")?a.qy``:a.qy`
							<div id="signImageDiv">
								<img
									class=${(0,l.H)({"card-result_thumb":!this.preserveAspectRatio,"card-result_thumb-preserve":this.preserveAspectRatio})}
									alt=""
									role="presentation"
									src="${this.loadThumb?e:""}"
									@error="${e=>{const t=e.currentTarget;t&&(t.src="/images/icon-sign-broken-fill-solid.svg")}}"
								/>
							</div>
					  `}
				<div class="gantry-image-signs ${e.startsWith("data")?"full-height":""}">
					${i?.gantrySigns?.map((e=>{const t=e?.views?.[0];return t.imageUrl?a.qy`
									<div class="gantry-sign">
										<img
											src="${t.imageUrl}"
											alt=${t.title||"Gantry Sign"}
										/>
									</div>
							  `:a.qy``}))}
				</div>
			</figure>
		`}generateEmbeddedImageSign(e,t=[],i,r){const s=e===c.Ol.DisplayingMessage,n=(0,A.u)(r);return a.qy`
			<div class="card-result-sign_text_frame">
				<div class="card-result-sign_text_page" style=${(0,o.W)({"text-align":n})}>
					<div
						id="signMessageDiv"
						class="${(0,l.H)({"sign-is-not-active":!s,"sign-is-active":s})}"
					>
						<div class="embedded-image-sign">
							<img
								class="image-side"
								src="${this.loadThumb?i:""}"
								alt=""
								role="presentation"
							/>
							<div class="text-side">
								<card-sign-media-text
									textAlign=${n}
									?preserveAspectRatio=${this.preserveAspectRatio}
									?signIsActive=${s}
									.signPageLines=${t}
									?inViewport=${this.loadThumb}
								></card-sign-media-text>
							</div>
						</div>
					</div>
				</div>
			</div>
		`}generateSignPageText(e,t=[],i){const r=e===c.Ol.DisplayingMessage,s=(0,A.u)(i);return a.qy`
			<div class="card-result-sign_text_frame">
				<div class="card-result-sign_text_page">
					<div
						id="signMessageDiv"
						class="${(0,l.H)({"sign-is-not-active":!r,"sign-is-active":r})}"
					>
						<card-sign-media-text
							textAlign=${s}
							?preserveAspectRatio=${this.preserveAspectRatio}
							?signIsActive=${r}
							.signPageLines=${t}
							?inViewport=${this.loadThumb}
						></card-sign-media-text>
					</div>
				</div>
			</div>
		`}};T([(0,s.MZ)({type:String,reflect:!0})],R.prototype,"uri",2),T([(0,s.MZ)({type:String})],R.prototype,"icon",2),T([(0,s.MZ)({type:String,attribute:"thumb-url"})],R.prototype,"thumbUrl",2),T([(0,s.MZ)({type:String,attribute:"thumb-alt"})],R.prototype,"thumbAlt",2),T([(0,s.MZ)({type:String,reflect:!0,attribute:"thumb-category"})],R.prototype,"thumbCategory",2),T([(0,s.MZ)({type:Array,attribute:"delay-descriptions"})],R.prototype,"delayDescriptions",2),T([(0,s.MZ)({type:Object,attribute:"rest-area-status"})],R.prototype,"restAreaStatusSummary",2),T([(0,s.MZ)({type:Boolean})],R.prototype,"loadThumb",2),T([(0,s.MZ)({type:Boolean,attribute:"show-close"})],R.prototype,"showClose",2),T([(0,s.MZ)({type:Boolean,attribute:"preserve-aspect-ratio"})],R.prototype,"preserveAspectRatio",2),T([(0,s.MZ)({type:Object})],R.prototype,"result",2),T([(0,s.MZ)({type:Array})],R.prototype,"quantities",2),T([(0,s.MZ)({type:Boolean,reflect:!0})],R.prototype,"isError",2),R=T([(0,s.EM)("card-result")],R)},54833:(e,t,i)=>{"use strict";i.d(t,{u:()=>m});var r=i(71413),a=i(52706),s=i(61061),o=i.n(s),n=i(80480),l=i(5124),c=i(32701),d=i(29109),p=i(4983),u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,g=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?h(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&u(t,i,s),s};function m(e){return e===p.v4.Left?"left":e===p.v4.Right?"right":"center"}let y=class extends r.WF{constructor(){super(...arguments),this.signIsActive=!1,this.singleLine=!1,this.signPageLines=[],this.preserveAspectRatio=!1,this.textAlign="left",this.signTextRendered=!1,this.inViewport=!1,this.resizeObserver=new ResizeObserver((()=>{this.signTextRendered&&this.createAndUpdateFittedSignText()}))}static get styles(){return[c.A,l.A,d.A,r.AH`
				:host {
					height: 100%;
				}

				.sign-message-container {
					background: 'transparent';
					height: 100%;
				}

				.sign-is-active {
					color: rgb(var(--that-sunday));
				}

				.sign-is-not-active {
					color: #ffffff;
				}

				#manuallyManagedZone {
					height: 100%;
					width: 100%;
					background-color: #000;
					display: flex;
					flex-direction: column;
					justify-content: space-evenly;
				}
				/* A span is rendered by the textFit lib, does not exist in our template*/
				#manuallyManagedZone span {
					padding: 0 var(--gap);
				}

				.card-media_text-line {
					white-space: pre;
					margin-bottom: 0;
				}
			`]}render(){return this.signTextRendered=!0,r.qy`
			<div class="sign-message-container" style="${(0,n.W)({"text-align":this.textAlign})}">
				<div
					id="manuallyManagedZone"
					class="${this.signIsActive?"sign-is-active":"sign-is-not-active"}"
				>
					<!-- content in here handled by this.createFittedSignText() called in the lifecycle -->
				</div>
			</div>
		`}async createAndUpdateFittedSignText(){if(!this.inViewport)return;await this.updateComplete;const e=this.shadowRoot?.getElementById("manuallyManagedZone");if(e)try{e.innerHTML=this.genenerateRawHTMLStringLines(this.signPageLines),o()(e)}catch(e){}}genenerateRawHTMLStringLines(e=[]){let t="";return e.forEach((e=>{t=t.concat(`<p class="card-media_text-line">${e}</p>`)})),t}firstUpdated(){const e=this.shadowRoot?.getElementById("manuallyManagedZone");this.resizeObserver.observe(e)}updated(e){e.has("signTextRendered")&&this.signTextRendered&&requestAnimationFrame((()=>{this.createAndUpdateFittedSignText()})),(e.has("signPageLines")||e.has("inViewport"))&&this.createAndUpdateFittedSignText()}};g([(0,a.MZ)({type:Boolean,reflect:!0})],y.prototype,"signIsActive",2),g([(0,a.MZ)({type:Boolean,reflect:!0})],y.prototype,"singleLine",2),g([(0,a.MZ)({type:Array,reflect:!0})],y.prototype,"signPageLines",2),g([(0,a.MZ)({type:Boolean,reflect:!0})],y.prototype,"preserveAspectRatio",2),g([(0,a.MZ)({type:String,reflect:!0})],y.prototype,"textAlign",2),g([(0,a.MZ)({type:Boolean})],y.prototype,"signTextRendered",2),g([(0,a.MZ)({type:Boolean})],y.prototype,"inViewport",2),y=g([(0,a.EM)("card-sign-media-text")],y)},95313:(e,t,i)=>{"use strict";var r,a=i(71413),s=i(52706),o=i(10427),n=i(5366),l=i(24634),c=Object.defineProperty,d=Object.getOwnPropertyDescriptor,p=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?d(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&c(t,i,s),s},u=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};let h=class extends a.WF{constructor(){super(...arguments),this.iconSource="/images/icon-whats-fill-solid.svg",this.expanded=!1,this.omitIcon=!1,this.position=n.kl.BOTTOM,((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,void 0)})(this,r)}static get styles(){return[...o.Ay.styles,l.A,a.AH`
				:host {
					display: inline-block;
					margin: -1rem -0.75rem -0.75rem;
					vertical-align: sub;

					--bg-color: rgb(var(--darkest));
					--text-color: #fff;
				}

				:host([center-vertically]) {
					margin: -1.25rem -0.75rem -1rem;
					vertical-align: middle;
				}

				:host([small-footprint]) [slot='toggler'] {
					padding: 0;
					margin: var(--gap);
				}

				#tooltip-wrapper {
					padding: 1rem;
					width: calc(100vw - var(--scrollbar-width) - 2rem - var(--gap) * 2);
					max-width: 360px;
					font-size: var(--smaller);
					border-radius: var(--border-radius);
					background-color: var(--bg-color);
					box-shadow: var(--shadow-sm);
					text-align: left;
					text-transform: initial;
					color: var(--text-color);
					position: relative;
				}

				::slotted(h3),
				::slotted(h4) {
					font-size: var(--smaller) !important;
					margin-bottom: 0.25rem;
				}

				popper-container {
					--tail-color: rgb(var(--darkest));
					--tail-border-width: 0;
				}
				.tooltip-close {
					position: absolute;
					top: 0;
					right: 0;
					padding: var(--gap);
					display: none;
					fill: rgb(var(--concrete));
				}
				@media (hover: none) {
					.tooltip-close {
						display: flex;
					}
				}

				.btn-context-help {
					padding: calc(var(--gap) - 0.25rem);
					margin: 0.25rem;
				}
			`]}render(){return a.qy`
			<popper-container
				@mouseenter=${this.enter}
				@mouseleave=${this.leave}
				@focusin=${this.show}
				@focusout=${this.hide}
				@click=${this.stopPropagation}
				position=${this.position}
				?is-visible="${this.expanded}"
				is-flip
			>
				<button slot="toggler" class="btn fadein btn-context-help" aria-label="Help Tooltip">
					${this.omitIcon?a.qy``:a.qy`<img role="presentation" class="icon-sm" src="${this.iconSource}" alt="" />`}
				</button>
				<div id="tooltip-wrapper">
					<button class="btn btn-close tooltip-close" title="Close">
						<svg role="presentation" class="btn_icon btn-sm_icon" aria-hidden="true">
							<use href="${"/images/sprites.svg#close-btn"}"></use>
						</svg>
					</button>
					<slot></slot>
				</div>
			</popper-container>
		`}stopPropagation(e){e.stopPropagation(),this.expanded=!this.expanded}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tooltip")}show(){this.expanded=!0}hide(){this.expanded=!1}enter(){var e,t,i;e=this,t=r,i=setTimeout((()=>{this.expanded=!0}),1e3),u(e,t,"write to private field"),t.set(e,i)}leave(){var e;clearTimeout((u(this,e=r,"read from private field"),e.get(this))),this.expanded=!1}};r=new WeakMap,p([(0,s.MZ)({type:String,attribute:"icon-source"})],h.prototype,"iconSource",2),p([(0,s.MZ)({type:Boolean,reflect:!0})],h.prototype,"expanded",2),p([(0,s.MZ)({type:Boolean})],h.prototype,"omitIcon",2),p([(0,s.MZ)({type:String})],h.prototype,"position",2),h=p([(0,s.EM)("context-help-tooltip")],h)},32825:(e,t,i)=>{"use strict";i.d(t,{A:()=>u});var r=i(71413),a=i(52706),s=i(63822),o=i(32701),n=i(80027),l=(i(51595),Object.defineProperty),c=Object.getOwnPropertyDescriptor,d=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?c(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&l(t,i,s),s};let p=class extends r.WF{constructor(){super(...arguments),this.label="Updated",this.isWazeEvent=!1}static get styles(){return[o.A,r.AH`
				:host {
					display: inline;
					color: rgb(var(--darker));
					font-style: italic;
					font-size: var(--smaller);
				}
				a {
					font-weight: bold;
					text-decoration: underline;
				}
			`]}render(){return this.timestamp&&this.timezone?this.isWazeEvent&&this.agencyAttribution?r.qy`
				${(0,s.t)(this.label)} ${this.agencyAttribution.agencyName}
				<relative-time timestamp=${this.timestamp} timezone=${this.timezone}></relative-time>
			`:n.JM.agencyAttributionEnabled&&this.agencyAttribution?r.qy`
				${this.agencyAttribution.agencyIconURL?r.qy`
							<img
								src="${this.agencyAttribution.agencyIconURL}"
								alt=""
								style="vertical-align: middle"
								role="presentation"
							/>
					  `:""}
				${(0,s.t)(this.label)}
				<relative-time timestamp=${this.timestamp} timezone=${this.timezone}></relative-time>
				${this.agencyAttribution.agencyName?r.qy`
							${(0,s.t)("by")}
							${this.agencyAttribution.agencyURL?r.qy`
										<a href="${this.agencyAttribution.agencyURL}"
											>${this.agencyAttribution.agencyName}</a
										>
								  `:r.qy` ${this.agencyAttribution.agencyName} `}
					  `:r.qy``}
			`:r.qy`
			${(0,s.t)(this.label)}
			<relative-time timestamp=${this.timestamp} timezone=${this.timezone}></relative-time>
		`:r.qy`<span class="placeholder placeholder_last-updated"></span>`}};d([(0,a.MZ)({type:Number})],p.prototype,"timestamp",2),d([(0,a.MZ)({type:String})],p.prototype,"timezone",2),d([(0,a.MZ)({type:String,reflect:!0})],p.prototype,"label",2),d([(0,a.MZ)({type:Object,reflect:!0})],p.prototype,"agencyAttribution",2),d([(0,a.MZ)({type:Boolean,reflect:!0})],p.prototype,"isWazeEvent",2),p=d([(0,a.EM)("date-last-updated")],p);const u=p},10427:(e,t,i)=>{"use strict";i.d(t,{Ay:()=>g,nU:()=>u});var r=i(71413),a=i(52706),s=i(30555),o=i(24634),n=i(56365),l=i(65585),c=(i(5366),Object.defineProperty),d=Object.getOwnPropertyDescriptor,p=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?d(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&c(t,i,s),s},u=(e=>(e.CENTER="CENTER",e.LEFT="LEFT",e.RIGHT="RIGHT",e))(u||{});let h=class extends r.WF{constructor(){super(...arguments),this.splash=!1,this.expanded=!1,this.forceExpanded=!1,this.noAutoClose=!1,this._disable=!1,this.onBodyClick=e=>{const t=this.renderRoot.querySelector("#toggler");(0,l.A)(this.noAutoClose?this:t,e)||(this.expanded=!1)},this.onBodyEsc=e=>{"Escape"===e.key&&(this.expanded=!1)}}get disable(){return this._disable}set disable(e){const t=this._disable;this._disable=e,this.expanded=!1,this.requestUpdate("disable",t)}static get styles(){return[n.A,o.A,r.AH`
				:host {
					position: relative;
					display: flex;
				}
				.btn.btn-link {
					margin-top: var(--gap);
				}
				.menu {
					text-align: end;
				}
				.menu.splash-menu {
					text-align: start;
					width: 375px;
				}
				.menu.splash-menu {
					color: rgb(var(--darker));
					background-color: #fff;
					font-size: var(--smaller);
				}
			`]}render(){return r.qy`
			<popper-container
				@click="${this.toggleExpanded}"
				is-flip
				?is-visible=${this.expanded||this.forceExpanded}
				style=${this.splash?"width: 100%; height: 100%":""}
			>
				<div
					slot="toggler"
					id="toggler"
					style=${this.splash?"width: 100%; height: 100%":""}
					class=${(0,s.H)({active:this.expanded||this.forceExpanded})}
				>
					<slot name="toggler"></slot>
				</div>
				<div
					class="menu ${this.splash?"splash-menu":""}"
					role="menu"
					part="menu"
					aria-hidden=${!this.expanded}
				>
					<slot id="options"></slot>
					${this.noAutoClose?r.qy`<button id="close-dropdown" class="btn btn-link">Close</button>`:null}
				</div>
			</popper-container>
		`}updated(){(this.expanded||this.forceExpanded)&&this.dispatchEvent(new CustomEvent("show")),this.expanded||this.forceExpanded||this.dispatchEvent(new CustomEvent("hide"))}toggleExpanded(e){const t=this.renderRoot.querySelector("#close-dropdown");(0,l.A)(t,e)?this.expanded=!1:this.disable||this.noAutoClose&&this.expanded||(this.expanded=!this.expanded)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.onBodyClick),document.addEventListener("keyup",this.onBodyEsc)}disconnectedCallback(){document.removeEventListener("click",this.onBodyClick),document.removeEventListener("keyup",this.onBodyEsc),super.disconnectedCallback()}};p([(0,a.MZ)({type:Boolean})],h.prototype,"splash",2),p([(0,a.MZ)({type:Boolean,reflect:!0})],h.prototype,"expanded",2),p([(0,a.MZ)({type:Boolean,reflect:!0,attribute:"force-expanded"})],h.prototype,"forceExpanded",2),p([(0,a.MZ)({type:Boolean,reflect:!0,attribute:"no-auto-close"})],h.prototype,"noAutoClose",2),p([(0,a.MZ)({type:Boolean})],h.prototype,"disable",1),h=p([(0,a.EM)("dropdown-menu")],h);const g=h},51441:(e,t,i)=>{"use strict";i.r(t),i.d(t,{LegendPanel:()=>T,default:()=>R});var r=i(71413),a=i(52706),s=i(56599),o=i(30555),n=i(35135),l=i(5218),c=i(80480),d=i(63822),p=i(10388),u=i(32825),h=i(32701),g=Object.defineProperty,m=Object.getOwnPropertyDescriptor,y=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?m(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&g(t,i,s),s};let v=class extends((0,s.N)(p.Ay)(u.A)){static get styles(){return[h.A,r.AH`
				:host {
					display: inline;
				}
			`]}render(){return this.radarLastPolled?r.qy`<relative-time
			timestamp=${this.radarLastPolled}
			timezone=${v.TIMEZONE}
		></relative-time> `:r.qy`<span class="placeholder placeholder_last-updated"></span>`}stateChanged(e){this.radarLastPolled=e.app.radarLastPolled}};v.TIMEZONE=Intl.DateTimeFormat().resolvedOptions().timeZone,y([(0,a.MZ)({type:Number,reflect:!0})],v.prototype,"radarLastPolled",2),v=y([(0,a.EM)("radar-last-updated")],v);var b=i(22544),f=i(25447),w=i(87738),S=i(80027),A=Object.defineProperty,E=Object.getOwnPropertyDescriptor,$=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?E(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&A(t,i,s),s};let T=class extends((0,s.N)(p.M_)(r.WF)){constructor(){super(...arguments),this.activeLegendEntries=[],this.urlParams=new URLSearchParams(window.location.search),this.isKiosk=this.urlParams.get("kiosk")}static get styles(){return[h.A,w.A,b.A,r.AH`
				:host {
					width: 100%;
					font-size: var(--smaller);
					color: rgb(var(--darker));
					display: flex;
					flex: 1;
				}

				.legend-container {
					margin: 0;
					overflow: auto;
					flex: 1;
				}

				.legend-container.kiosk {
					height: calc(100vh - 80px) !important;
					background: white;
					box-shadow: 0 0 5px rgba(5, 5, 5, 0.95);
				}

				.legend-item {
					display: flex;
					align-items: center;
					padding: 0.25rem var(--gap);
				}
				.legend-item--wide {
					flex-direction: column;
					align-items: flex-start;
				}

				.legend-icon--wide {
					width: 100%;
					max-width: 100%;
					height: auto;
					margin: 0 0 0.25rem 0;
				}

				.legend-subtext {
					font-style: italic;
					font-size: var(--smallest);
				}
			`]}render(){return r.qy`
			<div
				class=${(0,o.H)({"legend-container":!0,kiosk:!!this.isKiosk})}
			>
				<ul class="legend-layers-list">
					${this.activeLegendEntries.length?this.activeLegendEntries.map((e=>r.qy`
									<li
										class=${(0,o.H)({"legend-item":!0,"legend-item--wide":e.wideIcon||!1})}
									>
										<!-- label, no icon first if wide icon -->
										${e.label&&e.wideIcon&&r.qy` <span class="legend-label">${(0,l._)(e.label)} </span>`}
										<!-- icon, wide or not -->
										${e.svgFill?r.qy`
													<svg
														class=${(0,o.H)({"legend-layers-list-icon":!0,"legend-icon--wide":e.wideIcon||!1})}
														style=${(0,c.W)({fill:e.svgFill})}
														aria-label=${(0,n.J)(e.label)}
														aria-hidden=${e.label?"false":"true"}
													>
														<use href=${e.icon}></use>
													</svg>
											  `:r.qy`
													<img
														class=${(0,o.H)({"legend-layers-list-icon":!0,"legend-icon--wide":e.wideIcon||!1})}
														src=${e.icon}
														alt=${e.altText||e.label||""}
													/>
											  `}
										<!-- label, after icon if not wide -->
										${e.label&&!e.wideIcon?r.qy` <span class="legend-label">${(0,l._)(e.label)} </span>`:null}
										<!-- subtext  -->
										${e.subtext&&r.qy` <span class="legend-subtext">${(0,l._)(e.subtext)} </span>`}
									</li>
								`)):r.qy`
								<li class="legend-item">
									<span class="legend-label">
										${(0,d.A)("map.legend.noLayersSelected","There are no active layers selected.")}
									</span>
								</li>
						  `}
				</ul>
			</div>
		`}stateChanged(e){this.activeLegendEntries=(0,f.JR)(e,S.EA)}};$([(0,a.MZ)({type:Array})],T.prototype,"activeLegendEntries",2),T=$([(0,a.EM)("legend-panel")],T);const R=T},10147:(e,t,i)=>{"use strict";var r=i(71413),a=i(52706),s=i(80027),o=i(17026);Object.defineProperty,Object.getOwnPropertyDescriptor;let n=class extends r.WF{constructor(){super(...arguments),this.rectangle1=new google.maps.Rectangle({...n.MASK_PROPERTIES_DEFAULT,...s.VV.searchMask}),this.rectangle2=new google.maps.Rectangle({...n.MASK_PROPERTIES_DEFAULT,...s.VV.searchMask}),this.rectangle3=new google.maps.Rectangle({...n.MASK_PROPERTIES_DEFAULT,...s.VV.searchMask}),this.rectangle4=new google.maps.Rectangle({...n.MASK_PROPERTIES_DEFAULT,...s.VV.searchMask})}set bounds(e){e?(o.W.getMap().then((e=>{this.rectangle1.setMap(e),this.rectangle2.setMap(e),this.rectangle3.setMap(e),this.rectangle4.setMap(e)})),this.rectangle1.setBounds(new google.maps.LatLngBounds(new google.maps.LatLng(e.north,n.MAP_MIN_LNG),new google.maps.LatLng(n.MAP_MAX_LAT,n.MAP_MAX_LNG))),this.rectangle2.setBounds(new google.maps.LatLngBounds(new google.maps.LatLng(n.MAP_MIN_LAT,n.MAP_MIN_LNG),new google.maps.LatLng(e.south,n.MAP_MAX_LNG))),this.rectangle3.setBounds(new google.maps.LatLngBounds(new google.maps.LatLng(e.south,n.MAP_MIN_LNG),new google.maps.LatLng(e.north,e.west))),this.rectangle4.setBounds(new google.maps.LatLngBounds(new google.maps.LatLng(e.south,e.east),new google.maps.LatLng(e.north,n.MAP_MAX_LNG)))):this.disconnectedCallback()}get bounds(){return this._bounds}disconnectedCallback(){this.rectangle1.setMap(null),this.rectangle2.setMap(null),this.rectangle3.setMap(null),this.rectangle4.setMap(null),super.disconnectedCallback()}createRenderRoot(){return this}};n.MASK_PROPERTIES_DEFAULT={fillColor:"#00F",fillOpacity:.2,strokeOpacity:0,clickable:!1},n.MAP_MAX_LAT=85,n.MAP_MIN_LAT=-85,n.MAP_MAX_LNG=179,n.MAP_MIN_LNG=-179,n=((e,t,i,r)=>{for(var a,s=t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=a(s)||s);return s})([(0,a.EM)("map-bounds-mask")],n)},83002:(e,t,i)=>{"use strict";i.d(t,{X:()=>u,A:()=>h});var r=i(71413),a=i(52706),s=i(24634),o=i(56365),n=Object.defineProperty,l=Object.getOwnPropertyDescriptor,c=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?l(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&n(t,i,s),s};let d=class extends r.WF{constructor(){super(...arguments),this.isVisible=!1,this.menuOptions=[]}static get styles(){return[s.A,o.A,r.AH`
				:host {
					position: absolute;
					visibility: hidden;
					pointer-events: none;
				}
				:host([visible]) {
					visibility: visible;
					pointer-events: all;
				}
				.context-menu {
					box-shadow: var(--shadow-md);
				}
			`]}render(){return r.qy`
			<div class="menu context-menu" role="menu">
				${this.menuOptions.map(((e,t)=>r.qy`
							<button
								class="btn menu_item"
								role="menuitem"
								data-option-index=${t}
								@click=${this.optionClicked}
							>
								${e.title}
							</button>
						`))}
			</div>
		`}optionClicked(e){const t=parseInt(e.currentTarget.dataset.optionIndex,10),i=this.menuOptions[t];if(!this.clickedLatLng)throw new Error("clickedLatLng is undefined");i.callback({clickedLatLng:this.clickedLatLng})}};c([(0,a.MZ)({type:Boolean,reflect:!0,attribute:"visible"})],d.prototype,"isVisible",2),c([(0,a.MZ)({type:Object})],d.prototype,"clickedLatLng",2),c([(0,a.MZ)({type:Array})],d.prototype,"menuOptions",2),d=c([(0,a.EM)("context-menu")],d);const p=d;class u extends google.maps.OverlayView{constructor(e){super(),this.allowClose=!1,this._menuEl=new p,this.hide=()=>{this._menuEl.isVisible=!1,document.removeEventListener("click",this.hideHandler)},this.hideHandler=()=>{this.allowClose&&this.hide(),this.allowClose=!0},this._menuEl.menuOptions=e,google.maps.OverlayView.preventMapHitsAndGesturesFrom(this._menuEl)}get isShowing(){return this._menuEl.isVisible}show(e,t){this._menuEl.clickedLatLng=e,this._menuEl.isVisible=!0,this._clickedLatLng=e,this.draw(),this.allowClose=t,document.addEventListener("click",this.hideHandler)}draw(){if(!this._menuEl.isVisible)return;const e=this.getMap();if(!(e&&e instanceof google.maps.Map))throw new Error("`MapContextMenu: draw()` called without map reference");if(!this._clickedLatLng)throw new Error("`No _clickedLatLng");const t=this.getProjection(),i=t.fromLatLngToDivPixel(new google.maps.LatLng(this._clickedLatLng)),r=e.getBounds();if(!r)throw new Error("No bounds for context menu");const a=t.fromLatLngToDivPixel(r.getSouthWest()),s=t.fromLatLngToDivPixel(r.getNorthEast()),o=this._menuEl.offsetWidth,n=this._menuEl.offsetHeight,l=Math.max(a.x,s.x)-o;let{x:c,y:d}=i;c>l&&(c-=o),this._menuEl.style.left=`${c}px`,this._menuEl.style.top=d-n/2+"px"}onAdd(){this.getPanes().floatPane.appendChild(this._menuEl)}onRemove(){this._menuEl.parentNode.removeChild(this._menuEl)}}const h=u},92142:(e,t,i)=>{"use strict";var r=i(71413),a=i(52706),s=i(56599),o=i(80027),n=i(17026),l=i(10388),c=Object.defineProperty,d=Object.getOwnPropertyDescriptor,p=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?d(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&c(t,i,s),s};let u=class extends((0,s.N)(l.M_)(r.WF)){constructor(){super(...arguments),this.drawnMapMask=new google.maps.Polygon({...u.MASK_PROPERTIES_DEFAULT,...o.VV.searchMask}),this.MAP_MAX_LAT=85,this.MAP_MIN_LAT=-85,this.MAP_MAX_LNG=179,this.MAP_MIN_LNG=-179}updated(e){if(e.has("customDrawnSearchArea")){if(!this.customDrawnSearchArea)return void this.drawnMapMask.setMap(null);const e=function(e){const t=[];return e.coordinates.forEach((e=>{e.forEach((e=>{e.length>1&&t.push({lat:e[1],lng:e[0]})}))})),t}(this.customDrawnSearchArea);n.W.getMap().then((t=>{this.drawnMapMask.setPaths([this.counterClockWiseWorldMask(),e]),this.drawnMapMask.setMap(t)}))}}disconnectedCallback(){this.drawnMapMask.setMap(null),super.disconnectedCallback()}createRenderRoot(){return this}counterClockWiseWorldMask(){return[{lat:this.MAP_MIN_LAT,lng:this.MAP_MIN_LNG},{lat:this.MAP_MAX_LAT,lng:this.MAP_MIN_LNG},{lat:this.MAP_MAX_LAT,lng:this.MAP_MAX_LNG},{lat:this.MAP_MIN_LAT,lng:this.MAP_MAX_LNG},{lat:this.MAP_MIN_LAT,lng:0}]}stateChanged(e){this.customDrawnSearchArea=e.search.customDrawnSearchArea}};u.MASK_PROPERTIES_DEFAULT={fillColor:"#00F",fillOpacity:.2,strokeColor:"#4287f5",strokeOpacity:.6,clickable:!1},p([(0,a.MZ)({type:Object})],u.prototype,"drawnMapMask",2),p([(0,a.MZ)({type:Object})],u.prototype,"customDrawnSearchArea",2),u=p([(0,a.EM)("map-drawn-bounds-mask")],u)},99201:(e,t,i)=>{"use strict";i.d(t,{cH:()=>m});var r=i(71413),a=i(52706),s=i(81432),o=i(83002),n=i(18211),l=i(80027),c=i(52850),d=i(17026),p=i(56188),u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,g=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?h(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&u(t,i,s),s},m=(e=>(e.DEFAULT="DEFAULT",e.HOVER="HOVER",e.TOGGLE="TOGGLE",e))(m||{});let y=class extends r.WF{constructor(){super(),this.state="DEFAULT",this.hoverHalo=new google.maps.Marker({clickable:!1,draggable:!1,title:void 0,visible:!1,opacity:1,icon:{url:"/images/icon-hovering-indicator.svg"},zIndex:c.MQk-1}),this.marker=new google.maps.Marker({zIndex:c.MQk}),this.isDragging=!1,this.mousedUp=!1,this.hoverHalo.bindTo("map",this.marker),this.hoverHalo.bindTo("position",this.marker)}get clickable(){return this.marker.getClickable()}set clickable(e){this.marker.setClickable(e)}get visible(){return this.marker.getVisible()}set visible(e){this.marker.setVisible(e)}get opacity(){return this.marker.getOpacity()||1}set opacity(e){this.marker.setOpacity(e)}get title(){return this.marker.getTitle()||""}set title(e){e&&this.marker.setTitle(e)}set icon(e){if(this.marker.setIcon(e),e.scaledSize){const t="/images/icon-hovering-indicator.svg";this.hoverHalo.setIcon({url:t,scaledSize:{width:e.scaledSize.width*l.VV.stateModifiers.iconHoverHaloSizePercent,height:e.scaledSize.height*l.VV.stateModifiers.iconHoverHaloSizePercent},anchor:{x:e.scaledSize.width*l.VV.stateModifiers.iconHoverHaloSizePercent/2,y:e.scaledSize.height*l.VV.stateModifiers.iconHoverHaloSizePercent/2}})}}get position(){const e=this.marker.getPosition()?.toJSON(),t=this.isDragging&&this.tempLocation?this.tempLocation:e;return{lat:(0,n.A)(t.lat),lng:(0,n.A)(t.lng)}}set position(e){d.W.getMap().then((t=>{e?this.isDragging?this.tempLocation=e:(this.marker.setMap(t),this.marker.setPosition(e)):this.marker.setMap(null)}))}get draggable(){return!!this.marker.getDraggable()}set draggable(e){this.marker.setDraggable(e)}get zIndex(){return this.marker.getZIndex()||c.MQk}set zIndex(e){e&&(this.marker.setZIndex(e),this.hoverHalo.setZIndex(e-1))}set menu(e){this.contextMenu||d.W.getMap().then((t=>{this.contextMenu=new o.X(e),this.contextMenu.setMap(t),google.maps.event.addListener(this.marker,"rightclick",(()=>{if(!this.contextMenu||!this.position)throw new Error("`contextMenu` and `position` expected");this.contextMenu.show(this.position,!0)})),google.maps.event.addListener(this.marker,"mousedown",(e=>{this.mousedUp=!1,setTimeout((()=>{!this.mousedUp&&e.latLng&&this.contextMenu?.show(e.latLng.toJSON(),!1)}),1250)})),google.maps.event.addListener(this.marker,"mouseup",(()=>{this.mousedUp=!0})),google.maps.event.addListener(this.marker,"dragstart",(()=>{this.mousedUp=!0}))}))}updated(e){if(e.has("state"))switch(this.state){case"HOVER":this.hoverHalo.setVisible(!0);break;case"TOGGLE":break;default:this.hoverHalo.setVisible(!1)}}connectedCallback(){super.connectedCallback(),google.maps.event.addListener(this.marker,"dragstart",this.onDragStart.bind(this)),google.maps.event.addListener(this.marker,"drag",(0,s.A)(this.onDrag.bind(this),300,{trailing:!1})),google.maps.event.addListener(this.marker,"dragend",this.onDragEnd.bind(this)),google.maps.event.addListener(this.marker,"click",(e=>{this.dispatchEvent(new CustomEvent("marker-click",{detail:{location:e.latLng?.toJSON(),oldLocation:this.position}}))}))}disconnectedCallback(){this.contextMenu&&this.contextMenu.setMap(null),google.maps.event.clearInstanceListeners(this.marker),this.marker.setMap(null),super.disconnectedCallback()}onDragStart(){this.tempLocation=this.position,this.isDragging=!0}onDrag(e){const t=e.latLng?.toJSON(),i=t?{lng:(0,n.A)(t.lng),lat:(0,n.A)(t.lat)}:void 0;this.dispatchEvent(new CustomEvent("marker-drag",{detail:{location:i,oldLocation:this.position}}))}onDragEnd(e){this.isDragging=!1,this.position=this.tempLocation;const t=e.latLng?.toJSON(),i=t?{lng:(0,n.A)(t.lng),lat:(0,n.A)(t.lat)}:void 0;this.dispatchEvent((0,p.h)("marker-dragend",{detail:{location:i,oldLocation:this.position}}))}createRenderRoot(){return this}};g([(0,a.MZ)({type:String,reflect:!0})],y.prototype,"state",2),g([(0,a.MZ)({type:Boolean})],y.prototype,"clickable",1),g([(0,a.MZ)({type:Boolean})],y.prototype,"visible",1),g([(0,a.MZ)({type:Number})],y.prototype,"opacity",1),g([(0,a.MZ)({type:String})],y.prototype,"title",1),g([(0,a.MZ)({type:Boolean})],y.prototype,"draggable",1),g([(0,a.MZ)({type:Number})],y.prototype,"zIndex",1),y=g([(0,a.EM)("map-marker")],y)},5366:(e,t,i)=>{"use strict";i.d(t,{kl:()=>u,tg:()=>h});var r=i(71413),a=i(52706),s=i(61964),o=i(80480),n=i(30555),l=i(56365),c=Object.defineProperty,d=Object.getOwnPropertyDescriptor,p=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?d(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&c(t,i,s),s},u=(e=>(e.TOP="top",e.BOTTOM="bottom",e.LEFT="left",e.RIGHT="right",e))(u||{}),h=(e=>(e.VERTICLE="verticle",e.HORIZONTAL="horizontal",e.ALL="all",e))(h||{});let g=class extends r.WF{constructor(){super(...arguments),this.position="bottom",this.overflow="all",this.isFlip=!1,this.isVisible=!1,this._element=this}set element(e){this._element=e}get element(){return this._element}static get styles(){return[l.A,r.AH`
				:host {
					display: block;
					position: relative;
					--tail-color: white;
					--tail-border-color: rgb(var(--concrete));
					--tail-border-width: var(--border-width);
				}

				#popper-container {
					z-index: 4;
					padding: var(--gap);
					position: absolute;
				}

				#arrow {
					position: absolute;
					width: var(--gap);
					height: var(--gap);
					z-index: 5;
				}

				#arrow::before {
					content: '';
					transform: rotate(45deg);
					width: var(--gap);
					height: var(--gap);
					background-color: var(--tail-color);
					border: var(--tail-border-width) solid var(--tail-border-color);
					position: absolute;
				}

				.left-arrow:before {
					left: -2px;
					top: 2px;
				}

				.top-arrow:before {
					left: 0;
					top: 0;
				}

				.right-arrow:before {
					left: 2px;
					top: 2px;
				}

				.bottom-arrow:before {
					left: 0;
					top: 0;
				}

				#popper-container[data-popper-reference-hidden],
				#popper-container[x-out-of-boundaries] {
					visibility: hidden;
				}

				#popper-container[data-popper-placement='bottom'] #arrow,
				#popper-container[x-placement='bottom'] #arrow {
					top: calc(var(--gap) / 2);
				}

				#popper-container[data-popper-placement='bottom'] #arrow::before {
					border-right: none;
					border-bottom: none;
				}

				#popper-container[data-popper-placement='top'] #arrow,
				#popper-container[x-placement='top'] #arrow {
					bottom: calc(var(--gap) / 2);
				}

				#popper-container[data-popper-placement='top'] #arrow::before {
					border-left: none;
					border-top: none;
				}

				#popper-container[data-popper-placement='left'] #arrow,
				#popper-container[x-placement='left'] #arrow {
					right: calc(var(--gap) / 2);
				}

				#popper-container[data-popper-placement='left'] #arrow::before {
					border-bottom: none;
					border-left: none;
				}

				#popper-container[data-popper-placement='right'] #arrow,
				#popper-container[x-placement='right'] #arrow {
					left: calc(var(--gap) / 2);
				}

				#popper-container[data-popper-placement='right'] #arrow::before {
					border-top: none;
					border-right: none;
				}
			`]}render(){return r.qy`
			<slot name="toggler"></slot>
			<div id="popper-container" style=${(0,o.W)({display:this.isVisible?"block":"none"})}>
				<slot id="contents"></slot>
				<div
					id="arrow"
					class=${(0,n.H)({"top-arrow":"top"===this.position,"left-arrow":"left"===this.position,"right-arrow":"right"===this.position,"bottom-arrow":"bottom"===this.position})}
				></div>
			</div>
		`}applyPopper(){let e;switch(this.overflow){case"verticle":e=["left","right"];break;case"horizontal":e=["top","bottom"];break;default:e=["top","right","bottom","left"]}const t=this.renderRoot.querySelector("#popper-container");this.popper=(0,s.n4)(this._element,t,{placement:this.position,modifiers:[{name:"arrow",options:{element:"#arrow",padding:4}},{name:"preventOverflow",options:{placement:e,padding:0}},{name:"flip",options:{enabled:this.isFlip,padding:0}},{name:"hide",options:{enabled:!0}}]})}get togglerEl(){try{return this.renderRoot.querySelector('slot[name="toggler"]')?.assignedNodes()?.[0]}catch{return null}}async updated(e){e.has("position")&&this.popper&&this.popper.setOptions({placement:this.position}),e.has("isVisible")&&this.isVisible&&(this.togglerEl instanceof r.WF&&await this.togglerEl.updateComplete,this.applyPopper()),e.has("isVisible")&&!this.isVisible&&this.popper&&this.popper.destroy()}connectedCallback(){super.connectedCallback(),this.firstRef?.value&&this.lastRef?.value&&(this.firstRef?.value?.focus(),setTimeout((()=>this.firstRef?.value?.blur()),0),this.firstRef.value.addEventListener("keydown",(e=>{"Tab"===e.key&&(e.shiftKey||this.firstRef?.value===this.lastRef?.value)&&(e.preventDefault(),e.stopPropagation(),this.lastRef?.value?.focus())})),this.lastRef.value.addEventListener("keydown",(e=>{e.shiftKey||"Tab"!==e.key||(e.preventDefault(),e.stopPropagation(),this.firstRef?.value?.focus())})))}};p([(0,a.MZ)({type:String})],g.prototype,"position",2),p([(0,a.MZ)({type:String})],g.prototype,"overflow",2),p([(0,a.MZ)({type:Boolean,attribute:"is-flip"})],g.prototype,"isFlip",2),p([(0,a.MZ)({type:Boolean,attribute:"is-visible"})],g.prototype,"isVisible",2),p([(0,a.MZ)({type:Object})],g.prototype,"firstRef",2),p([(0,a.MZ)({type:Object,reflect:!0,attribute:"ref"})],g.prototype,"lastRef",2),g=p([(0,a.EM)("popper-container")],g)},47531:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>m});var r,a=i(71413),s=i(52706),o=i(52850),n=(i(82890),i(3825)),l=i(30555),c=i(80480),d=i(38155),p=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?u(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&p(t,i,s),s},g=(e,t,i)=>(((e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field")})(e,t),i?i.call(e):t.get(e));let m=class extends a.WF{constructor(){super(...arguments),this.travelTimes=[],this.showLoader=!1,this.isError=!1,this.isSuccess=!1,((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,r,(0,d._)()),this.imageError=()=>{this.isError=!0,this.showLoader=!1,clearInterval(this._loaderTimeout),this.dispatchEvent((0,n.A)(o.jzr))},this._observer=new ResizeObserver((e=>{const t=e[0].borderBoxSize?.[0];this.sizeSign(t.inlineSize,t.blockSize)})),this.openingAnimation=!1,this.loopSizeSign=()=>{const{width:e,height:t}=this.getBoundingClientRect();requestAnimationFrame((()=>{this.sizeSign(e,t),this.openingAnimation&&this.loopSizeSign()}))},this.sizeSign=(e,t)=>{if(!g(this,r).value)return;const i=e/t,a=getComputedStyle(g(this,r).value),s=parseFloat(a.getPropertyValue("--overlay-width")),o=parseFloat(a.getPropertyValue("--overlay-height"));if(i>s/o)if(o<=t)this.imgWidth=`${s}px`,this.imgHeight=`${o}px`;else{const e=t*(s/o);this.imgWidth=`${e}px`,this.imgHeight=`${t}px`}else if(s<=e)this.imgWidth=`${s}px`,this.imgHeight=`${o}px`;else{const t=e*(o/s);this.imgWidth=`${e}px`,this.imgHeight=`${t}px`}}}static get styles(){return[a.AH`
				:host {
					display: flex;
					place-items: center;
					width: 100%;
					height: 100%;
					box-sizing: border-box;
					--card-aspect-ratio: var(--overlay-height) / var(--overlay-width);
					position: relative;
				}
				.sign-message-image {
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					position: absolute;
					background-size: cover;
				}

				.sign-message-image svg {
					position: absolute;
					width: 12%;
					transform: translate(-50%, -50%);
					left: 50%;
					fill: #fff;
				}

				.ROW1_A,
				:host([imageLayout='ROW1_A']) {
					--overlay-width: 361;
					--overlay-height: 279;
				}
				.ROW1_A .tt-0 {
					left: 42%;
					top: 84.5%;
				}
				.ROW2_A,
				:host([imageLayout='ROW2_A']) {
					--overlay-width: 361;
					--overlay-height: 279;
				}
				.ROW2_A .tt-0 {
					left: 17.5%;
					top: 84.5%;
				}
				.ROW2_A .tt-1 {
					left: 67%;
					top: 84.5%;
				}
				.ROW3_A,
				:host([imageLayout='ROW3_A']) {
					--overlay-width: 361;
					--overlay-height: 279;
				}
				.COL1_A,
				:host([imageLayout='COL1_A']) {
					--overlay-width: 1375;
					--overlay-height: 606.98;
				}
				.COL1_A .tt-0 {
					top: 78.6%;
				}
				.COL2_A,
				:host([imageLayout='COL2_A']) {
					--overlay-width: 1375.41;
					--overlay-height: 1005.97;
				}
				.COL2_A .tt-0 {
					top: 47.4%;
				}
				.COL2_A .tt-1 {
					top: 87.1%;
				}
				.COL3_A,
				:host([imageLayout='COL3_A']) {
					--overlay-width: 1375.62;
					--overlay-height: 1404.97;
				}
				.COL3_A .tt-0 {
					top: 34%;
				}
				.COL3_A .tt-1 {
					top: 62.4%;
				}
				.COL3_A .tt-2 {
					top: 90.75%;
				}
			`]}render(){return a.qy`
			<!--	waiting for content, or waiting for content to load	-->
			${this.showLoader?a.qy`<slot name="loader"><spinning-loader></spinning-loader></slot></slot>`:void 0}
			${this.isSuccess&&this.imageUrl&&this.imageLayout?a.qy`
						<!--	content present, ready to be shown once loaded	-->
						<div
							role="img"
							${(0,d.K)(g(this,r))}
							class=${(0,l.H)({"sign-message-image":!0,[this.imageLayout]:!0})}
							style=${(0,c.W)({width:this.imgWidth,height:this.imgHeight,"background-image":`url(${this.imageUrl})`})}
							aria-label=${this.title}
							@error=${this.imageError}
						>
							${this.travelTimes.map(((e,t)=>a.qy`
										<svg viewBox="0 0 30 30" class=${`tt-${t}`} aria-label=${e}>
											<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
												${e}
											</text>
										</svg>
									`))}
						</div>
				  `:a.qy``}
			<!--	content missing or encountered an error while loading	-->
			${this.isError?a.qy`
						<img
							${(0,d.K)(g(this,r))}
							class=${(0,l.H)({"sign-message-image":!0,ROW1_A:!0})}
							style=${(0,c.W)({width:this.imgWidth,height:this.imgHeight})}
							src=${"/images/icon-sign-broken-fill-solid.svg"}
							alt="Travel times unavailable"
							role="presentation"
						/>
				  `:void 0}
		`}connectedCallback(){super.connectedCallback(),this._observer.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._observer.disconnect()}updated(e){if(e.has("imageUrl")&&this.imageUrl){clearInterval(this._loaderTimeout),this._loaderTimeout=setInterval((()=>{this.showLoader=!0}),1e3),this.showLoader=!1,this.isError=!1,this.isSuccess=!1;const e=document.createElement("img");e.src=this.imageUrl,e.onerror=this.imageError,e.onload=()=>{this.isSuccess=!0,this.showLoader=!1,clearInterval(this._loaderTimeout)}}(e.has("isSuccess")||e.has("isError"))&&this.loopSizeSign(),this.imageUrl||(this.showLoader=!0)}};r=new WeakMap,h([(0,s.MZ)({type:String,reflect:!0})],m.prototype,"imageLayout",2),h([(0,s.MZ)({type:String})],m.prototype,"imageUrl",2),h([(0,s.MZ)({type:Array})],m.prototype,"travelTimes",2),h([(0,s.MZ)({type:Boolean})],m.prototype,"showLoader",2),h([(0,s.MZ)({type:Boolean})],m.prototype,"isError",2),h([(0,s.MZ)({type:Boolean})],m.prototype,"isSuccess",2),h([(0,s.wk)()],m.prototype,"imgWidth",2),h([(0,s.wk)()],m.prototype,"imgHeight",2),h([(0,s.MZ)({type:Boolean})],m.prototype,"openingAnimation",2),m=h([(0,s.EM)("sign-overlay-travel-time")],m)},82890:(e,t,i)=>{"use strict";var r=i(71413),a=i(52706);Object.defineProperty,Object.getOwnPropertyDescriptor;let s=class extends r.WF{static get styles(){return[r.AH`
				:host {
					display: block;
					margin: var(--spinner-margin, 1rem auto);
					width: var(--spinner-size, 5rem);
					height: var(--spinner-size, 5rem);
				}
				.spinner,
				.spinner:after {
					border-radius: 50%;
					width: calc(100% - 1rem);
					height: calc(100% - 1rem);
				}

				.spinner {
					border: 0.5rem solid rgba(var(--asbestos), 0.3);
					border-left: 0.5rem solid rgba(var(--asbestos), 1);
					animation: spinner 1s infinite linear;
				}

				.spinner-light {
					border: 0.5rem solid rgba(var(--clouds), 0.3);
					border-left: 0.5rem solid rgba(var(--clouds), 1);
				}

				@keyframes spinner {
					0% {
						transform: rotate(0deg);
					}

					100% {
						transform: rotate(360deg);
					}
				}
			`]}render(){return r.qy` <div class="spinner" aria-label="Loading..."></div> `}};s=((e,t,i,r)=>{for(var a,s=t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=a(s)||s);return s})([(0,a.EM)("spinning-loader")],s)},53903:(e,t,i)=>{"use strict";var r=i(71413),a=i(52706),s=i(30555),o=i(56599),n=i(38155),l=i(80027),c=i(66003),d=i(21379),p=i(52850),u=i(10388),h=i(24634),g=i(32701),m=i(5366),y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,b=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?v(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&y(t,i,s),s};let f=class extends((0,o.N)(u.Ay)(r.WF)){constructor(){super(...arguments),this.active=!0,this.showCloseButton=!0,this.position=m.kl.BOTTOM,this.tutorialType=void 0,this.escKeyPressCallback=this.escKeyPress.bind(this),this.focusLoopDivRef=(0,n._)(),this.nextButtonRef=(0,n._)()}static get styles(){return[g.A,h.A,r.AH`
				:host {
					--bg-color: var(--dark-blue-a11y);
					--fg-color: 255, 255, 255;
					--bubble-width: calc(100vw - var(--scrollbar-width) - var(--gap) * 2);
					--bubble-max-width: 32rem;
					/* needed when placed in header or map-controls */
					pointer-events: all;
					font-size: 1rem;
				}

				@media all and (max-width: 1080px) {
					:host {
						overflow: scroll;
						display: inline-block;
						max-height: 50vh;
					}
				}

				@media all and (max-width: 320px) {
					:host {
						overflow: scroll !important;
						top: auto !important;
						max-height: calc(100vh - 150px);
						position: absolute;
					}
					:host#tutorial-feedback {
						left: -100px !important;
					}
				}

				#bubble-container {
					position: relative;
					z-index: 2;
					width: var(--bubble-width);
					max-width: var(--bubble-max-width);

					border-radius: var(--border-radius);
					box-shadow: var(--shadow-md);
					background-color: rgb(var(--bg-color));
				}

				#slotted-content {
					padding: 1.5rem 1.5rem 1rem;
					color: rgb(var(--fg-color));
				}

				#close-button {
					position: absolute;
					top: 0px;
					right: 0px;
					fill: rgb(var(--fg-color));
				}

				#close-button:focus {
					background-color: rgba(var(--concrete), 0.3);
				}

				#next-fields {
					color: rgb(var(--fg-color));
					background-color: rgb(var(--darker-blue-a11y));
					border-bottom-left-radius: var(--border-radius);
					border-bottom-right-radius: var(--border-radius);
					padding: 1rem 1.5rem;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-wrap: wrap;
				}

				.focus-dark:focus {
					outline: black solid 0.25rem;
				}

				#tutorial-select:focus {
					outline: black solid 0.25rem;
				}

				@media (min-width: 768px) {
					#next-fields {
						flex-wrap: nowrap;
					}
				}

				#next-fields.final-step {
					/* padding-top: 1.5rem; */
					justify-content: center;
				}

				#next-fields div {
					flex: 1 1 auto;
					margin-right: 0.5rem;
				}

				#next-fields label {
					margin-right: 0.5rem;
					font-size: var(--smaller);
				}

				#next-fields select {
					font-family: inherit;
					min-height: calc(var(--smaller) * 1.5 + 1rem);
					font-size: var(--smaller);
					padding: 0.5rem;
					color: inherit;
					background: rgb(var(--bg-color));
					border-radius: var(--border-radius);
					border: 0px;
					cursor: pointer;
				}

				@supports (-moz-appearance: none) {
					/*	dropdown button workaround for firefox */
					#next-fields select {
						-moz-appearance: none;
						background: url('/images/down_triangle-white.svg') no-repeat right 55%;
						padding-right: 2rem;
					}
				}

				#pointer-events-blocker {
					position: fixed;
					z-index: 1;
					width: 200vw;
					height: 200vh;
					transform: translate(-50%, -50%);
					cursor: auto;
					background: transparent;
				}
			`]}render(){return r.qy`
			<div
				id="bubble-container"
				role="dialog"
				aria-modal="true"
				aria-labelledby="bubble-title"
				aria-describedby="bubble-content"
			>
				${this.showCloseButton?r.qy`
							<button
								id="close-button"
								class="btn"
								title="close this tutorial"
								aria-label="close this tutorial"
								@click="${this.closeButtonClick}"
							>
								<svg class="btn_icon" width="36" height="36" aria-hidden="true">
									<use href="${"/images/sprites.svg#close"}"></use>
								</svg>
							</button>
					  `:""}
				<div id="slotted-content">
					<slot tabindex="0" id="bubble-title" name="title"></slot>
					<slot tabindex="0" id="bubble-content" name="content"></slot>
				</div>
				<div
					id="next-fields"
					class=${(0,s.H)({"final-step":!!this.isFinalStep})}
				>
					${this.footerNextFields()}
				</div>
			</div>
			<div ${(0,n.K)(this.focusLoopDivRef)} tabindex="0"></div>
			<div id="pointer-events-blocker" @click=${this.closeButtonClick}></div>
		`}footerNextFields(){const e=this.tutorialType===p.S9j.WELCOME?l.BQ.welcome.steps:l.BQ.favorite.steps;return r.qy`
			<slot name="footer">
				${this.isFinalStep?"":r.qy`
							<div>
								<label for="tutorial-select">Tell me next about:</label>
								<select id="tutorial-select" @change="${this.onStepChange}">
									${Object.entries(e).map((([e,t])=>e&&t?r.qy`${this.slug===e?r.qy``:r.qy`
															<option
																value="${e}"
																name="${t.label}"
																?selected=${this.isFinalStep&&this.slug===e||!this.isFinalStep&&this.nextSlug===e}
															>
																${t.label}
															</option>
													  `} `:void 0))}
								</select>
							</div>
					  `}
				${!this.nextSlug||this.slug===this.nextSlug&&this.isFinalStep?r.qy`
							<button
								${(0,n.K)(this.nextButtonRef)}
								id="done-button"
								class="btn btn-white btn-rounded btn-sm btn-padding-sm focus-dark"
								@click="${this.closeButtonClick}"
								title="Done, close tutorial"
								aria-label="Done, close tutorial"
							>
								<div aria-hidden="true">DONE</div>
							</button>
					  `:r.qy`
							<button
								${(0,n.K)(this.nextButtonRef)}
								id="next-button"
								class="btn btn-white btn-rounded btn-sm btn-padding-sm focus-dark"
								@click="${this.nextButtonClick}"
								title="next tip"
								aria-label="next tip"
							>
								<slot name="next-button-label" aria-hidden="true">NEXT TIP</slot>
							</button>
					  `}
			</slot>
		`}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.escKeyPressCallback);const e=()=>{this.focusLoopDivRef.value?this.focusLoopDivRef.value.addEventListener("focus",(()=>this.focus())):setTimeout(e,1e3)};e(),this.focus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.escKeyPressCallback)}stateChanged(e){this.tutorialType=e.app.tutorialType,void 0===e.app.tutorialStep||this.active&&this.slug&&this.slug!==e.app.tutorialStep?this.active=!1:!this.active&&this.slug&&this.slug===e.app.tutorialStep&&(this.active=!0),this.setAttribute("tabindex",this.active?"0":"-1"),this.active&&this.focus()}willUpdate(e){if(this.slug&&(e.has("slug")||e.has("active")||e.has("tutorialType"))){const e=this.tutorialType===p.S9j.WELCOME?Object.keys(l.BQ.welcome.steps):Object.keys(l.BQ.favorite.steps),t=e.findIndex((e=>e===this.slug));this.isFinalStep=t===e.length-1,this.nextSlug=this.isFinalStep?void 0:e[t+1]}}onStepChange(e){this.nextSlug=e.target.value}async nextButtonClick(){if(!this.nextSlug||!this.tutorialType)throw new Error("Invalid tutorial state.");const e=this.tutorialType===p.S9j.WELCOME?l.BQ.welcome.steps[this.nextSlug]:l.BQ.favorite.steps[this.nextSlug];if(!e)throw new Error("Invalid tutorial state.");await u.Ay.dispatch((0,d.z)(`${p.Gqw.TOUR}/${this.tutorialType}/${e.slug}`))}closeButtonClick(){if(!this.tutorialType)throw new Error("Invalid tutorial state.");u.Ay.dispatch((0,c.RB)(this.tutorialType,void 0)),u.Ay.dispatch((0,d.z)(null))}escKeyPress(e){this.active&&"Escape"===e.code&&this.closeButtonClick()}};b([(0,a.MZ)({type:String,reflect:!0})],f.prototype,"slug",2),b([(0,a.MZ)({type:String})],f.prototype,"nextSlug",2),b([(0,a.MZ)({type:Boolean,reflect:!0})],f.prototype,"active",2),b([(0,a.MZ)({type:Boolean})],f.prototype,"isFinalStep",2),b([(0,a.MZ)({type:Boolean})],f.prototype,"showCloseButton",2),b([(0,a.MZ)({type:String})],f.prototype,"position",2),b([(0,a.MZ)({type:String})],f.prototype,"tutorialType",2),f=b([(0,a.EM)("tutorial-bubble")],f)},76364:(e,t,i)=>{"use strict";var r=i(71413),a=i(52706),s=i(63822),o=i(5218),n=i(32701),l=i(62894),c=Object.defineProperty,d=Object.getOwnPropertyDescriptor,p=(e,t,i,r)=>{for(var a,s=r>1?void 0:r?d(t,i):t,o=e.length-1;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&c(t,i,s),s};let u=class extends r.WF{constructor(){super(...arguments),this.translated=!1}static get styles(){return[n.A,...l.Ay.styles]}render(){return(0,o._)(this.text)}connectedCallback(){super.connectedCallback(),this.translated||(0,s.t)(this.text,{},(e=>{this.text=e,this.translated=!0}))}};p([(0,a.MZ)({type:String})],u.prototype,"text",2),p([(0,a.MZ)({type:Boolean})],u.prototype,"translated",2),u=p([(0,a.EM)("unsafe-translate-html")],u)},9748:(e,t,i)=>{"use strict";i.d(t,{A2:()=>l,DC:()=>n,HN:()=>p,Ni:()=>c,e6:()=>u,fz:()=>d,gV:()=>o});var r=i(40580),a=i(52850);const s="undefined"!=typeof window&&window?.location?.hostname?window?.location?.hostname:"localhost",o=e=>`fuelingStation_${e}`,n=e=>`${(0,r.A)(s)}-${a._QG}-${e}`,l=e=>`${(0,r.A)(s)}-FEEDBACK_RESPONSE-${e}`,c=`${(0,r.A)(s)}-AUTH`,d=`${(0,r.A)(s)}-${a.zVg}`,p=`${(0,r.A)(s)}-USER`,u=`${(0,r.A)(s)}-MAP-VIEW`},5776:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});var r=i(22493);const a={viewsFeatureCollection:r.A`
		fragment Views on FeatureCollection {
			views(orderBy: LINEAR_REF_ASC) @include(if: $isCamerasEnabled) {
				uri
				title
				category
				__typename
				... on RestAreaView {
					url
					isSatelliteView
				}
				... on CameraView {
					url
					sources {
						type
						src
					}
				}
				... on PlowCameraView {
					url
				}
				lastUpdated @include(if: $showCameraLastUpdated) {
					timestamp
					timezone
				}
				parentCollection {
					uri
					icon
					location {
						primaryLinearReference
					}
				}
			}
		}
	`,delayDescriptions:r.A`
		fragment DelayDescriptions on Event {
			delayDescriptions {
				currentDelay
				routeDesignator
				direction
				delayTime
				timeColor
				qualifier
				segmentDelays {
					delayDescription
					segmentDescription
					isMultiSegmentEvent
				}
			}
		}
	`,restAreaStatusSummery:r.A`
		fragment RestAreaDescription on FeatureCollection {
			... on RestArea {
				restAreaStatusSummary {
					header
					headerColor
					body
					bodyColor
					footer
					footerColor
				}
			}
		}
	`,nearbyResults:r.A`
		fragment NearbyResults on FeatureCollection {
			nearbyResults(layerSlugs: $layerSlugs) {
				__typename
				uri
				title
				cityReference
				bbox
				icon
				color
				location {
					primaryLinearReference
					secondaryLinearReference
				}
				... on Event {
					quantities @include(if: $showCommercialQuantities) {
						label
						value
						icon
					}
				}
				views(limit: $nearbyViewLimit, orderBy: NEAREST_ASC) @include(if: $isCamerasEnabled) {
					uri
					category
					__typename
					... on CameraView {
						url
					}
					... on PlowCameraView {
						url
					}
					... on SignComboView {
						imageUrl
						textJustification
						textLines
					}
					... on SignTextView {
						textJustification
						textLines
					}
					... on SignImageView {
						imageUrl
					}
					... on SignOverlayView {
						travelTimes
						imageUrl
						imageLayout
					}
					... on SignOverlayTPIMView {
						textLines
						imageUrl
					}
					parentCollection {
						uri
						location {
							primaryLinearReference
						}
						... on Sign {
							signDisplayType
							signStatus
							gantrySigns {
								views {
									uri
									category
									title
									... on SignImageView {
										imageUrl
									}
								}
							}
						}
					}
				}
				... on RestArea {
					restAreaStatusSummary {
						header
						headerColor
						body
						bodyColor
						footer
						footerColor
					}
				}
				... on Event {
					delayDescriptions {
						currentDelay
						routeDesignator
						direction
						delayTime
						timeColor
						qualifier
						segmentDelays {
							delayDescription
							segmentDescription
							isMultiSegmentEvent
						}
					}
				}
			}
		}
	`,accountContents:r.A`
		fragment AccountContents on Account {
			id
			email
			firstName
			lastName
			userType
			accountStatus
			defaultMapView
			your511Settings {
				enabled
				phoneNumbers
			}
			alertSettings {
				priorityThreshold
				smsAlertEnabled
				mobileCarrierId
				phoneNumber
				statewideEmergencyAlertsEnabled
				optInAlertFilters
			}
			favorites {
				uri
				name
				... on FavoriteTrip {
					typicalGoogleTravelTimeSeconds
				}
				...AlertSchedule
				...TravelTimeMessageSchedule
			}
			favoriteCameraViews {
				uri
			}
		}
	`,favoriteVisual:r.A`
		fragment FavoriteVisual on Favorite {
			id
			uri
			name
			bbox
			__typename
			... on FavoriteArea {
				customAreaShapeSource
			}
			... on FavoriteTrip {
				to
				from
				mode
				waypoints
				typicalGoogleTravelTimeSeconds
			}
			visual {
				id
				geometry
				properties
			}
		}
	`,alertSchedule:r.A`
		fragment AlertSchedule on Favorite {
			alertSchedule {
				id
				alertingTimeInterval {
					startMillis
					endMillis
				}
				daysOfWeek
				lastUpdated {
					timestamp
					timezone
				}
				sendEmail
				sendSms
			}
		}
	`,travelTimeMessageSchedule:r.A`
		fragment TravelTimeMessageSchedule on Favorite {
			travelTimeMessageSchedule {
				travelTimeSecondsThreshold
				sendEmail
				sendSms
				daysOfWeek
				lastUpdated {
					timestamp
					timezone
				}
				timeOfDay
			}
		}
	`,cameraViewContents:r.A`
		fragment CameraViewContents on CameraView {
			title
			category
			uri
			url
			sources {
				type
				src
			}
			parentCollection {
				uri
				bbox
			}
		}
	`,searchResults:r.A`
		fragment SearchResults on FeatureCollection {
			__typename
			uri
			title
			cityReference
			bbox
			icon
			color
			location {
				primaryLinearReference
				secondaryLinearReference
			}
			... on Event {
				priority
				features {
					id
					geometry
					properties
				}
			}
			views(limit: $viewLimit, orderBy: NEAREST_ASC) @include(if: $isCamerasEnabled) {
				uri
				category
				__typename
				... on CameraView {
					url
				}
				... on PlowCameraView {
					url
				}
				... on RestAreaView {
					url
				}
				... on SignComboView {
					imageUrl
					textJustification
					textLines
				}
				... on SignTextView {
					textJustification
					textLines
				}
				... on SignImageView {
					imageUrl
				}
				... on SignOverlayView {
					travelTimes
					imageUrl
					imageLayout
				}
				... on SignOverlayTPIMView {
					textLines
					imageUrl
				}
				parentCollection {
					uri
					location {
						primaryLinearReference
					}
					... on Sign {
						signDisplayType
						signStatus
					}
				}
			}
			... on RestArea {
				restAreaStatusSummary {
					header
					headerColor
					body
					bodyColor
					footer
					footerColor
				}
			}
			... on Sign {
				signDisplayType
				signStatus
				gantrySigns {
					views {
						uri
						category
						title
						... on SignImageView {
							imageUrl
						}
					}
				}
			}
			... on Event {
				quantities @include(if: $showCommercialQuantities) {
					label
					value
					icon
				}
				description
				delayDescriptions {
					currentDelay
					routeDesignator
					direction
					delayTime
					timeColor
					qualifier
					segmentDelays {
						delayDescription
						segmentDescription
						isMultiSegmentEvent
					}
				}
			}
		}
	`}},25447:(e,t,i)=>{"use strict";i.d(t,{JR:()=>n,bj:()=>s,hf:()=>c,tV:()=>l,yA:()=>o});var r=i(17354),a=i(52850);const s={offline:!1,isLayersCollapsed:!1,snackbarOpened:!1,highlightedCollectionUri:null,hoveringCollectionUri:null,activeLayers:{},inactiveLayers:[],tutorialStep:void 0,radarLastPolled:void 0,scrollToElement:null},o=(e=s,t)=>{switch(t.type){case a.mUz:return{...e,activeLayers:t.activeLayers};case a.So7:return{...e,inactiveLayers:t.inactiveLayers};case a.yj9:return{...e,layout:t.layout};case a.U7i:return{...e,isLayersCollapsed:t.collapse};case a.Q3H:return{...e,offline:t.offline};case a.a$:return{...e,highlightedCollectionUri:t.highlightedCollectionUri};case a.hPA:return{...e,hoveringCollectionUri:t.hoveringCollectionUri};case a.BSm:return{...e,tutorialStep:t.slug};case a.DoY:return{...e,tutorialType:t.tutorialType};case a.Yw1:return{...e,radarLastPolled:t.radarLastPolled};case a.oTX:return{...e,scrollToElement:t.elementId};default:return e}},n=(0,r.Mz)((e=>e.app.activeLayers),((e,t)=>t),((e,t)=>{const i=t.reduce(((t,i)=>(i.slugs.some((t=>e[t]))&&i.entries.forEach((e=>{t[e.label]=e})),t)),{});return Object.values(i)})),l=(0,r.Mz)((e=>e.app.layout),(e=>!!e&&[a.EA.DESKTOP,a.EA.DESKTOP_XL,a.EA.DESKTOP_ULTRAWIDE].includes(e))),c=(e,t,i)=>((e,t)=>!!t?.slug&&e.app.activeLayers[t.slug])(e,t)||i.alwaysShowCommercialVehicleIcons},46205:(e,t,i)=>{"use strict";i.d(t,{$g:()=>s,vg:()=>o,x4:()=>a});var r=i(52850);const a={results:[],getMessagesLoading:!0,allDashboards:[],getDashboardsLoading:!0,entities:{},cmsFloodgates:[]},s=(e=a,t)=>{switch(t.type){case r.Bc5:return{...e,getMessagesLoading:!1,results:t.result,entities:t.entities??{}};case r.X90:return{...e,cmsFloodgates:t.cmsFloodgates};case r.vgn:return{...e,getMessagesLoading:!1,error:t.error};case r.iCe:return{...e,allDashboards:t.allDashboards,getDashboardsLoading:!1};case r.IsN:return{...e,getDashboardsLoading:!1,error:t.error};default:return e}},o=e=>e.tray.visibleUri?.includes("fg-")?e.cmsContent.cmsFloodgates.find((t=>t.uri===e.tray.visibleUri)):e.tray.visibleUri?e.cmsContent.entities?.cmsMessages?.[e.tray.visibleUri]:void 0},11650:(e,t,i)=>{"use strict";i.d(t,{I3:()=>C,M5:()=>A,Tj:()=>T,ed:()=>_,iG:()=>x,ip:()=>$,qX:()=>S});var r=i(17354),a=i(52114),s=i(80027),o=i(52850),n=i(78013),l=i(38556),c=i(4983),d=i(93127),p=i(70192),u=i(26200),h=i(25447),g=i(42978),m=i(34542),y=i(98755),v=i(31395),b=i(10784),f=i(83448),w=i(76393),S=(e=>(e[e.NORMAL=0]="NORMAL",e[e.ACTIVE=1]="ACTIVE",e[e.HOVERING=2]="HOVERING",e[e.HIGHLIGHTED=3]="HIGHLIGHTED",e[e.DIMMED=4]="DIMMED",e))(S||{});const A={mapPosition:void 0,mapType:google.maps.MapTypeId.ROADMAP,mapCollections:[],myLocation:{statusCode:0},showingMapLoader:!0,metroRegionActive:!1};function E(e,t){const i=(0,d.A)(t,(0,w.V)()),r=[i.west,i.south,i.east,i.north];return e.filter((e=>!e||!(0,l.A)(e.bbox,r)))}function $(e){e.features?.forEach((t=>{if(null!==t){const i=(0,n.A)(t.geometry);if("GeometryCollection"===i.type)throw new Error("Geometry type 'GeometryCollection' not supported.");const r=t.properties;r?.icon&&!r.icon.anchor&&(r.icon.anchor={x:r.icon.scaledSize.width/2,y:r.icon.scaledSize.height/2},r.opacity=r.opacity??1);const a=t;a.type="Feature",a.collectionType=e.__typename,a.state=0,a.geometry=i,a.properties.bbox=e.bbox,a.properties.tooltip=e.tooltip,a.properties.uri=e.uri,a.properties.clickable=a.properties.clickable??o.sj6,a.properties.visible=a.properties.visible??o.iXW,a.properties.zIndex=a.properties.zIndex??o.uNF,a.properties.views=e.views;const s=t.properties;"Point"!==t.geometry.type&&0!==s.strokeWeight&&(s.strokeOpacity=s.strokeOpacity??o.QMM,s.strokeWeight=s.strokeWeight??o.vxF,s.strokeColor=s.strokeColor??o.igs)}}))}const T=(e=A,t)=>{if(t.type===o.Tyb&&t.mapPosition)return{...e,mapPosition:{zoom:t.mapPosition.zoom,center:{...t.mapPosition.center}},spiderfyPosition:void 0};if(t.type===o.pUN)return{...e,mapPosition:{zoom:t.mapPosition.zoom,center:{...t.mapPosition.center}}};if(t.type===o.cae)return{...e,mapType:t.mapType};if(t.type===o.h_8)return{...e,showingMapLoader:!0};if(t.type===o.ckH)return{...e,showingMapLoader:!1};if(t.type===o.Hci)return{...e,myLocation:t.myLocation};if(t.type===o.j2Q||t.type===o.KhL)return{...e,error:t.error};if(t.type===o.DCu)return{...e,metroRegionActive:t.isActive};if(t.type===o.inE)return{...e,spiderfyPosition:t.spiderfyPosition};if(t.type===o.oj3){performance.mark("RECEIVE_MAP_ITEMS:start"),t.mapCollections.forEach((e=>{if(e)try{$(e)}catch(t){console.error(`Error processing FeatureCollection: ${t.message}`,e)}}));const i={...e,error:null,showingMapLoader:!1,mapCollections:E(e.mapCollections,e.mapPosition).concat(t.mapCollections)};return performance.mark("RECEIVE_MAP_ITEMS:end"),performance.measure("RECEIVE_MAP_ITEMS","RECEIVE_MAP_ITEMS:start","RECEIVE_MAP_ITEMS:end"),i}return e};function R(e,t){return{url:e.url,scaledSize:{width:e.scaledSize.width*t,height:e.scaledSize.height*t},anchor:{x:e.scaledSize.width*t/2,y:e.scaledSize.height*t/2}}}function k(e,t={includeHaloIcon:!0}){return e.reduce(((e,i)=>{if(!i)return e;if(["Point","MultiPoint"].includes(i.geometry.type)){const r=i;s.Ck&&"/images/fueling-stations/icon-ev-small-fill.svg"===r.properties.icon.url&&(r.properties.icon.url="/images/fueling-stations/icon-ev-fill.svg",r.properties.icon.scaledSize={width:s.Ck.map.iconPlugSizePx,height:s.Ck.map.iconPlugSizePx});const a={...r,properties:{...r.properties,icon:R(r.properties.icon,s.VV.stateModifiers.iconActiveSizeMultiplier),zIndex:o.bYK,clickable:r.properties.clickable},state:1};e.push(a),t.includeHaloIcon&&e.push(((e,t=s.VV.stateModifiers.iconActiveHaloSizePercent)=>({id:`${e.id}-active-indicator`,type:"Feature",collectionType:e.collectionType,state:1,geometry:e.geometry,properties:{icon:{url:"/images/icon-active-indicator.svg",scaledSize:{width:e.properties.icon.scaledSize.width*t,height:e.properties.icon.scaledSize.height*t},anchor:{x:e.properties.icon.scaledSize.width*t/2,y:e.properties.icon.scaledSize.height*t/2}},zIndex:o.ejY,clickable:!1}}))(a))}if(["LineString","MultiLineString"].includes(i.geometry.type)){const t=i,r=t.properties;e.push({...t,properties:{...t.properties,strokeWeight:r.visible?r.strokeWeight*s.VV.stateModifiers.strokeActiveWidthMultiplier:r.strokeWeight,zIndex:o.bYK,visible:!0},state:1})}if(["Polygon","MultiPolygon"].includes(i.geometry.type)){const t=i;e.push({...t,properties:{...t.properties,strokeWeight:t.properties.strokeWeight*s.VV.stateModifiers.strokeActiveWidthMultiplier,fillOpacity:t.properties.fillOpacity*s.VV.stateModifiers.fillActiveOpacityMultiplier,zIndex:o.bYK,visible:!0},state:1})}return e}),[])}const M=(e,t=s.VV.stateModifiers.iconHoverHaloSizePercent)=>({...e,id:`${e.id}-hovering-indicator`,state:3,properties:{icon:{url:"/images/icon-hovering-indicator.svg",scaledSize:{width:e.properties.icon.scaledSize.width*t,height:e.properties.icon.scaledSize.height*t},anchor:{x:e.properties.icon.scaledSize.width*t/2,y:e.properties.icon.scaledSize.height*t/2}},zIndex:o.SLK,clickable:!1}});const C=(0,r.Mz)((e=>e.map.mapPosition),h.tV,((e,t)=>{if(e)return e;const i=(0,m.A)(t,v.lC);return(0,g.A)(s.VV.initialBounds,i,{zoomToFit:!0})})),_=(0,r.Mz)((e=>e.map.mapPosition),(e=>e.app.activeLayers),((e,t)=>{const i=[];return Object.keys(t).forEach((e=>{t[e]&&i.push(e)})),e&&t?{mapPosition:e,activeLayerSlugs:i}:void 0})),x=(0,r.Mz)((e=>e.map.mapCollections),(e=>e.app.hoveringCollectionUri),(e=>e.tray.activeUri),(e=>e.app.highlightedCollectionUri),C,(e=>e.tray.entities),(e=>e.map.spiderfyPosition),(e=>e.search),((e,t,i,r,n,h,g,m)=>{performance.mark("getMapFeatures:start");let v={};const S=/Android/i.test(navigator.userAgent);g&&(v=(0,f.PB)(e,g,n.zoom));const A=!!Object.values(v).length,E=(0,y.z)((0,d.A)(n,(0,w.V)()));let $=e.filter((e=>null!=e));if(s.Ck&&s.Ck.active&&m.originChosen&&m.destChosen&&($=$.filter((({uri:e})=>!e.includes(o.xv_.FUELING_STATIONS)||m.results.includes(e)))),null!=s.Vw&&null!=s.Vw.bridgeHeightsLocalRoadsMinZoom&&null!=s.Vw.bridgeHeightsHighwayIdentifiers&&s.Vw.bridgeHeightsHighwayIdentifiers.length>0){const e=s.Vw.bridgeHeightsLocalRoadsMinZoom,t=s.Vw.bridgeHeightsHighwayIdentifiers.map((e=>e.toLowerCase()));$=$.filter((i=>{if(i.signDisplayType===c.kg.BridgeHeight&&n.zoom<e){const e=(i?.tooltip??i?.title)?.toLowerCase()??"";return t.some((t=>new RegExp(`^${t}\\-?`).test(e)))}return!0}))}const T=function(e,t,i){const r=(0,a.NU)(i,u.cI,t);let s=e;return r&&r.features&&!e.find((e=>e?.uri===r.uri))&&(s=[...e,{...r,features:r.features}]),s}($,h,i).reduce(((e,a)=>{if(!a)return e;const c=v[a.uri]?v[a.uri]:a;let d=c.features;return v[a.uri]||(d=function(e,t){return e.features.reduce(((e,i)=>i?((0,p.HV)(i)&&i.properties.popsicle?e.push(...function(e,t){const{popsicle:i}=e.properties,{coordinates:r}=e.geometry;if(!i)throw new Error(`No popsicle on ${JSON.stringify(e)}`);let{degrees:a}=i;s.VV.popsicleStickRotateDegrees&&(a=a<180?a+s.VV.popsicleStickRotateDegrees:a-s.VV.popsicleStickRotateDegrees);const o=(0,b.A)(r[1],t),n=new google.maps.LatLng(r[1],r[0]),l=google.maps.geometry.spherical.computeOffset(n,3*o,a).toJSON(),c=google.maps.geometry.spherical.computeOffset(n,o*i.lengthPx,a).toJSON();return[{...e,id:`${e.id}-${t}`,geometry:{type:"Point",coordinates:[c.lng,c.lat]}},{type:"Feature",id:`${e.id}-${t}-stick`,state:0,properties:{strokeColor:i.color,strokeWeight:i.weight,strokeOpacity:1,clickable:!1},geometry:{type:"LineString",coordinates:[[l.lng,l.lat],[c.lng,c.lat]]}}]}(i,t)):e.push(i),e):e),[])}(c,n.zoom)),a.uri===t&&a.uri!==i&&(d=function(e){return e.reduce(((e,t)=>{if(!t)return e;if(["Point","MultiPoint"].includes(t.geometry.type)){const i=t;e.push({...i,properties:{...i.properties,icon:R(i.properties.icon,s.VV.stateModifiers.iconHoverSizeMultiplier),zIndex:o.BZQ},state:2})}if((0,p.nu)(t)){const i=t.properties;e.push({...t,properties:{...t.properties,strokeWeight:i.visible?i.strokeWeight*s.VV.stateModifiers.strokeActiveWidthMultiplier:i.strokeWeight,zIndex:o.BZQ,visible:!0},state:2})}if(["Polygon","MultiPolygon"].includes(t.geometry.type)){const i=t;e.push({...i,properties:{...i.properties,strokeWeight:i.properties.strokeWeight*s.VV.stateModifiers.strokeActiveWidthMultiplier,fillOpacity:i.properties.fillOpacity*s.VV.stateModifiers.fillActiveOpacityMultiplier,zIndex:o.BZQ,visible:!0},state:2})}return e}),[])}(d)),a.uri===r&&a.uri===i?d=function(e){return k(e,{includeHaloIcon:!1}).reduce(((e,t)=>((0,p.N4)(t)&&(t.properties.zIndex=o.BZQ,t.state=2,e.push(t),e.push(M(t,s.VV.stateModifiers.iconActiveHaloSizePercent))),e)),[])}(d):a.uri===r?d=function(e){return e.reduce(((e,t)=>{if(!t)return e;if((0,p.N4)(t)){const i={...t,properties:{...t.properties,zIndex:o.BZQ},state:3};s.Ck&&"/images/fueling-stations/icon-ev-small-fill.svg"===i.properties.icon.url&&(i.properties.icon={url:"/images/fueling-stations/icon-ev-fill.svg",scaledSize:{width:s.Ck.map.iconPlugSizePx,height:s.Ck.map.iconPlugSizePx},anchor:{x:s.Ck.map.iconPlugSizePx/2,y:s.Ck.map.iconPlugSizePx/2}}),e.push(i),e.push(M(i))}if((0,p.nu)(t)){const i=t.properties;e.push({...t,properties:{...i,strokeWeight:i.visible?i.strokeWeight*s.VV.stateModifiers.strokeActiveWidthMultiplier:i.strokeWeight,zIndex:o.BZQ,visible:!0},state:3})}return(0,p.iB)(t)&&e.push(t),e}),[])}(d):a.uri===i?d=k(d):s.Ck&&n.zoom<=s.Ck.map.iconZoomThreshold&&d.filter((e=>["Point","MultiPoint"].includes(e?.geometry.type??"")&&"/images/fueling-stations/icon-ev-fill.svg"===e.properties.icon.url)).forEach((e=>{e.properties.icon={url:"/images/fueling-stations/icon-ev-small-fill.svg",scaledSize:{width:s.Ck?.map.iconDotSizePx||0,height:s.Ck?.map.iconDotSizePx||0},anchor:{x:(s.Ck?.map.iconDotSizePx||1)/2,y:(s.Ck?.map.iconDotSizePx||1)/2}}})),d.forEach((t=>{S&&t&&!window.location.href.includes("localhost")&&(0,p.HV)(t)&&t.properties.icon.url.endsWith(".svg")&&(t.properties.icon.url=`${t.properties.icon.url}.png`),t&&A&&[0,1].includes(t.state)&&!t.spidered&&(0,l.A)(a.bbox,E)?e[t.id]=(0,f.b_)(t):t&&(e[t.id]=t)})),e}),{});return performance.mark("getMapFeatures:end"),performance.measure("getMapFeatures","getMapFeatures:start","getMapFeatures:end"),T}))},19821:(e,t,i)=>{"use strict";i.d(t,{Ax:()=>c,FL:()=>n,N7:()=>d,c4:()=>u,l7:()=>p,yl:()=>l});var r=i(17354),a=i(52114),s=i(52850),o=i(26200);const n={modalView:null,currentUri:null,prevUri:null,nextUri:null,entities:{}},l=(e=n,t)=>{switch(t.type){case s.ob:return{...e,modalView:t.modalView,currentUri:t.currentUri,nextUri:null,prevUri:null,error:null};case s.Uf2:return{...e,modalView:s.Gqw.ACCOUNT};case s.vQg:return{...e,currentUri:t.currentUri,nextUri:t.nextUri,prevUri:t.prevUri,entities:{...e.entities,...t.entities}};case s.CC4:return{...e,error:t.error};default:return e}},c=(0,r.Mz)((e=>e.modal.currentUri),(e=>e.modal.entities),(e=>e.tray.entities),((e,t,i)=>{let r=(0,a.NU)(e,o.Ht,t);if(r||(r=(0,a.NU)(e,o.Ht,i)),!r?.parentCollection&&i.featureCollections){const t=Object.values(i.featureCollections).find((t=>!!t?.views?.find((t=>t===e))));t?.uri&&(r.parentCollection=(0,a.NU)(t?.uri,o.cI,i))}return r})),d=(0,r.Mz)((e=>e.modal.currentUri),(e=>e.modal.prevUri),(e=>e.modal.entities),((e,t,i)=>{const r=(0,a.NU)(e,o.Ht,i);if(!r||!r?.parentCollection?.views?.length)return t;const s=r.parentCollection.views.findIndex((e=>r.uri===e?.uri)),n=r.parentCollection.views[s-1]?.uri;return n||t})),p=(0,r.Mz)((e=>e.modal.currentUri),(e=>e.modal.nextUri),(e=>e.modal.entities),((e,t,i)=>{const r=(0,a.NU)(e,o.Ht,i);if(!r||!r?.parentCollection?.views?.length)return t;const s=r.parentCollection.views.findIndex((e=>r.uri===e?.uri)),n=r.parentCollection.views[s+1]?.uri;return n||t})),u=(0,r.Mz)((e=>e.modal.currentUri),(e=>e.modal.entities),((e,t)=>{const i=(0,a.NU)(e,o.Ht,t);if(i?.parentCollection)return i?.parentCollection?.views?.reduce(((e,t)=>(t?.uri&&e.push(t.uri),e)),[])}))},34850:(e,t,i)=>{"use strict";i.d(t,{B$:()=>r,G0:()=>a,jX:()=>s});var r=(e=>(e.FAIL_NLP="fail_nlp",e.PASS_NLP="pass_nlp",e.PROC_NLP="proc_nlp",e.RESET_NLP="reset_nlp",e.START_NLP="start_nlp",e))(r||{});const a={status:"ready"},s=(e=a,t)=>{switch(t.type){case"fail_nlp":return{...e,status:"error"};case"pass_nlp":return{...e,status:"success"};case"proc_nlp":return{...e,status:"processing"};case"reset_nlp":return a;case"start_nlp":return{...a,status:"recording"};default:return e}}},75340:(e,t,i)=>{"use strict";i.d(t,{$e:()=>l,Tr:()=>c,ab:()=>p,fy:()=>n,qA:()=>d});var r=i(17354),a=i(52114),s=i(52850),o=i(26200);const n={results:[],notificationsCount:0,isLoading:!1,dismissed:[],entities:{}},l=(e=n,t)=>{switch(t.type){case s.rtK:return{...e,isLoading:!1,results:t.result,notificationsCount:t.result.length,entities:t.entities??{}};case s.$LG:return{...e,error:t.error};case s.zVg:return{...e,dismissed:t.dismissed};default:return e}},c=(0,r.Mz)((e=>e.notifications.results),(e=>e.notifications.entities),((e,t)=>(0,a.NU)(e,[o.uY],t))),d=e=>e.tray.visibleUri?e.notifications.entities?.notifications?.[e.tray.visibleUri]:void 0,p=e=>c(e).filter((t=>!(-1!==e.notifications.dismissed.indexOf(t.uri)||!t.isRegionalTriggered)))},95050:(e,t,i)=>{"use strict";i.d(t,{$P:()=>h,Cv:()=>y,QB:()=>v,p5:()=>g,q_:()=>u,u:()=>b,z1:()=>m});var r=i(17354),a=i(52114),s=i(52850),o=i(26200),n=i(25995),l=i(70192),c=i(88014),d=i(23356),p=i(80027);const u={type:window.location.hash?.includes(s.nXf.SEARCH_ROADWAY)?s.nXf.SEARCH_ROADWAY:p.FB.defaultSearchType,mode:google.maps.TravelMode.DRIVING,directionsWaypts:[],urlWaypts:[],originChosen:!1,destChosen:!1,isRouteResultsLoading:!1,isPlaceResultsLoading:!1,directionsFetching:!1,isSearchUpdateOpen:!1,allowAutocompleteOpen:!1,urlAround:"",urlFrom:"",urlTo:"",urlRoadwayName:"",trayTo:"",trayFrom:"",results:[],cameraViews:[],drawingMode:!1,fromNlp:!1,withTravelTimes:p.hC.travelTimesAlwaysOn},h=(e=u,t)=>{if(t.type===s.wIz){const i={...e,type:t.searchType,allowAutocompleteOpen:!0};return t.searchType!==s.nXf.SEARCH_PLACE&&(i.aroundPlace=void 0),t.searchType!==s.nXf.SEARCH_PREDEFINED_AREA&&(i.predefinedAreaPlace=void 0),t.searchType!==s.nXf.SEARCH_ROADWAY&&(i.roadwayPlace=void 0,i.urlRoadwayName=""),t.searchType===s.nXf.DRAW_CUSTOM_AREA&&(i.drawingMode=!0),i}if(t.type===s.$IX)return{...e,fromNlp:t.nlp};if(t.type===s.Zhl)return{...e,originPlace:void 0,destPlace:void 0,originChosen:!1,destChosen:!1,directionsResponse:void 0,directionsFailStatus:void 0,directionsWaypts:[],mode:google.maps.TravelMode.DRIVING,favoriteId:t.clearFavoriteId?void 0:e.favoriteId,withTravelTimes:p.hC.travelTimesAlwaysOn};if(t.type===s.Za9)return{...e,originChosen:!0};if(t.type===s.RV5)return{...e,destChosen:!0};if(t.type===s.EMc)return{...e,withTravelTimes:t.withTravelTimes};if(t.type===s.lOD)return{...e,isRouteResultsLoading:!0,directionsFetching:!0,directionsRequestTime:t.directionsRequestTime,directionsFailStatus:void 0};if(t.type===s.Rqj)return{...e,directionsResponse:t.directionsResponse,directionsFetching:!1};if(t.type===s.YHj)return{...e,directionsFetching:!1,directionsResponse:void 0,directionsGeometry:void 0,directionsFailStatus:t.status};if(t.type===s.Smv)return{...e,directionsGeometry:t.directionsGeometry,directionsWaypts:t.directionsWaypts,directionsResponse:t.directionsResponse,originPlace:t.originPlace,destPlace:t.destPlace};if(t.type===s.Nzv)return{...e,directionsWaypts:t.directionsWaypts};if(t.type===s.e72)return{...e,mode:t.mode};if(t.type===s.XU3)return{...e,type:t.searchType,urlAround:t.urlAround,submittedBounds:t.submittedBounds,submittedBoundsExpanded:t.submittedBoundsExpanded,favoriteId:t.favoriteId};if(t.type===s.v9Q)return{...e,type:s.nXf.SEARCH_ROUTE,originChosen:!0,destChosen:!0,urlWaypts:t.urlWaypts,urlFrom:t.urlFrom,trayFrom:t.urlFrom,urlTo:t.urlTo,trayTo:t.urlTo,mode:t.mode,favoriteId:t.favoriteId};if(t.type===s.DZ5)return{...e,type:t.roadway.searchType||s.nXf.SEARCH_ROADWAY,urlRoadwayName:t.roadway.roadwayName};if(t.type===s.UwD)return{...e,roadWayGeometry:t.geometry};if(t.type===s.V6J)return{...e,aroundPlace:t.place};if(t.type===s.xyE)return{...e,roadwayPlace:t.place};if(t.type===s.mXv)return{...e,predefinedAreaPlace:t.place};if(t.type===s.izv){const i=t.place&&""!==t.place.text?t.place.text:"...";return{...e,originChosen:!!t.place,originPlace:t.place,originalOrigin:t.place?.location||e.originalOrigin,directionsResponse:t.place?e.directionsResponse:void 0,directionsWaypts:t.place?e.directionsWaypts:[],trayFrom:t.place?i:e.trayFrom,directionsFailStatus:null}}if(t.type===s.T96)return{...e,originChosen:!0,originPlace:{text:"",viewport:null,location:t.location,isLoading:!t.isDragging},originalOrigin:t.location,trayFrom:"..."};if(t.type===s.SEh){const i=t.place&&""!==t.place.text?t.place.text:"...";return{...e,destChosen:!!t.place,destPlace:t.place,originalDestination:t.place?.location||e.originalDestination,directionsResponse:t.place?e.directionsResponse:void 0,directionsWaypts:t.place?e.directionsWaypts:[],trayTo:t.place?i:e.trayTo}}return t.type===s.jGZ?{...e,destChosen:!0,destPlace:{text:"",viewport:null,location:t.location,isLoading:!t.isDragging},originalDestination:t.location,trayTo:"..."}:t.type===s.MA8?{...e,results:t.results,cameraViews:t.cameraViews}:t.type===s.VI2?{...e,isSearchUpdateOpen:!0}:t.type===s.pUN?{...e,isSearchUpdateOpen:!!e.submittedPosition&&!(0,d.A)(e.submittedPosition,t.mapPosition)}:t.type===s.Tyb&&t.activeView===c.UN.SEARCH_PLACE?{...e,submittedPosition:t.mapPosition,isSearchUpdateOpen:!1}:t.type===s.aMG?{...e,submittedPosition:void 0,submittedBounds:void 0,submittedBoundsExpanded:void 0,isSearchUpdateOpen:!1,aroundPlace:void 0,predefinedAreaPlace:void 0,favoriteId:void 0}:t.type===s.ZZ7?{...e,roadwayPlace:void 0,roadWayGeometry:void 0,favoriteId:void 0}:t.type===s.Lo9?{...e,customDrawnSearchArea:t.customDrawnSearchArea,favoriteId:t.favoriteId,drawingMode:!1}:t.type===s.u0i?{...e,customDrawnSearchArea:void 0}:t.type===s.Up5?{...e,drawingMode:t.drawingMode}:e},g=(0,r.Mz)((e=>e.search.results),(e=>e.tray.entities),((e,t)=>{const i=(0,a.NU)(e,[o.cI],t);return i.forEach((e=>{e&&e.views&&e.location?.primaryLinearReference&&(e.views=e.views.sort((0,n.rD)(e.location.primaryLinearReference)).slice(0,s.az4<e.views.length?s.az4:e.views.length))})),i})),m=(0,r.Mz)((e=>e.search.directionsResponse),(e=>e.search.directionsWaypts),((e,t)=>{const i=e&&e.routes[0].bounds;if(!i)return;const r=new google.maps.LatLngBounds;return t.forEach((e=>r.extend(e))),i&&r.union(i),r.toJSON()})),y=(0,r.Mz)((e=>e.search.cameraViews),(e=>e.tray.entities),((e,t)=>(0,a.NU)(e,[o.Ht],t))),v=(0,r.Mz)((e=>e.search.results),(e=>e.tray.entities),((e,t)=>e.reduce(((e,i)=>t.featureCollections&&(0,l.ju)(t.featureCollections[i])?e+1:e),0))),b=((0,r.Mz)((e=>e.search.type),(e=>e.search.customDrawnSearchArea),((e,t)=>e===s.nXf.DRAW_CUSTOM_AREA&&!t)),(0,r.Mz)((e=>e.search.roadWayGeometry),(e=>({id:"RoadwaySearch",type:"Feature",geometry:e??{type:"MultiLineString",coordinates:[]},properties:{clickable:!1,strokeColor:p.p_.roadwayFeatureStyles.strokeColor,strokeOpacity:p.p_.roadwayFeatureStyles.strokeOpacity,strokeWeight:p.p_.roadwayFeatureStyles.strokeWeight,visible:!0,zIndex:99}}))))},88014:(e,t,i)=>{"use strict";i.d(t,{Ax:()=>g,DY:()=>h,Fm:()=>u,OS:()=>v,UN:()=>d,cF:()=>m,q:()=>p,yJ:()=>y});var r=i(17354),a=i(52114),s=i(52850),o=i(26200),n=i(4983),l=i(25995),c=i(98755),d=(e=>(e.DASHBOARD="dashboard",e.PLOW="plow",e.CUSTOM_LAYER="custom-layer",e.NOTIFICATIONS="notifications",e.NOTIFICATION="notification",e.CMS_MESSAGE="cms-message",e.CMS_DASHBOARD="cms-dashboard",e.EVENTS="events",e.CAMERAS="cameras",e.FUELING_STATIONS="fueling-stations",e.OVERSIZE_LOADS="oversize-loads",e.WEATHER_STATIONS="weather-stations",e.MOUNTAIN_PASSES="mountain-passes",e.REST_AREAS="rest-areas",e.PARKING="parking",e.SEARCH_ROUTE="search-route",e.SEARCH_ROADWAY="search-roadway",e.SEARCH_PLACE="search-place",e.SEARCH_DRAWN_AREA="search-drawn-area",e.NOT_FOUND="404",e.SIGNS="signs",e.WILDFIRE="wildfire",e.JOURNEY_TIMES="journey-times",e.RAMPS="ramps",e))(d||{});const p={trayPercent:null,isSidebarCollapsed:!1,isLoading:!0,isFetching:!0,hasNavigatedFromSearch:!1,dashboard:{features:[],cameraViews:[],cmsMessages:[],cmsCampaigns:[],cameraViewType:n.j6.Default},entities:{}},u=(e=p,t)=>{switch(t.type){case s.Tyb:return{...e,activeUri:t.activeUri,activeView:t.activeView,trayPercent:t.trayPercent,hasNavigatedFromSearch:t.hasNavigatedFromSearch??!1};case s.JBx:return{...e,visibleUri:t.visibleUri,visibleView:t.visibleView,isLoading:t.visibleUri!==e.visibleUri,isSidebarCollapsed:t.visibleUri===e.visibleUri&&e.isSidebarCollapsed,error:t.visibleUri!==e.visibleUri&&e.visibleUri?null:e.error};case s.ORK:return{...e,trayPercent:t.trayPercent};case s.I7h:return{...e,isSidebarCollapsed:!e.isSidebarCollapsed};case s.kS_:return{...e,isSidebarCollapsed:t.collapse};case s.fQb:return{...e,isFetching:!0};case s.HMp:return{...e,isLoading:!1,isFetching:!1,entities:{...e.entities,...t.entities}};case s._T2:return{...e,isFetching:!0};case s.MA8:return{...e,isLoading:!1,isFetching:!1,entities:{...e.entities,...t.entities}};case s.h6q:return{...e,isLoading:!1,isFetching:!1,error:t.error,dashboard:{...e.dashboard,features:t.features,cameraViews:t.cameraViews,cameraViewType:t.cameraViewType,cmsMessages:t.cmsContent?.messages??[],cmsCampaigns:t.cmsContent?.campaigns??[],cmsDashboard:null},entities:{...e.entities,...t.entities}};case s.eiH:return{...e,isLoading:!1,isFetching:!1,error:t.error,dashboard:{...e.dashboard,cmsDashboard:t.dashboard},entities:{...e.entities,...t.entities}};case s.ZkM:case s.KhL:case s.dPK:return{...e,isFetching:!1,error:t.error};default:return e}},h=(0,r.Mz)((e=>e.tray.activeUri),(e=>e?.split("/")[1])),g=((0,r.Mz)((e=>e.tray.activeUri),(e=>e?.split("/")[0])),(0,r.Mz)((e=>e.tray.entities.featureCollections),(e=>e.map.mapCollections),((e,t)=>t),((e,t,i)=>{let r;if(e?.[i]?.bbox&&(r=e[i].bbox),!r){const e=t.find((e=>e?.uri===i));r=e?.bbox}if(r)return(0,c.b)(r)}))),m=((0,r.Mz)((e=>e.map.mapCollections),((e,t)=>t),((e,t)=>{const i=e.find((e=>e?.uri===t));return i?{lng:(i.bbox[0]+i.bbox[2])/2,lat:(i.bbox[1]+i.bbox[3])/2}:null})),(0,r.Mz)((e=>e.tray.visibleUri),(e=>e.tray.entities),((e,t)=>{const i=(0,a.NU)(e,o.cI,t);if(i?.views&&"number"==typeof i?.location?.primaryLinearReference){i.views=i.views.sort(l.P$);const e=[...i.views].sort((0,l.rD)(i.location.primaryLinearReference,i.location.secondaryLinearReference));i.closestViewIndex=e[0]?i.views.findIndex((t=>t&&t.uri===e[0]?.uri)):0}return i?.nearbyResults&&i.nearbyResults.forEach((e=>{e?.views&&"number"==typeof e?.location?.primaryLinearReference&&(e.views=e.views.sort((0,l.rD)(e.location.primaryLinearReference)).slice(0,s.az4<e.views.length?s.az4:e.views.length))})),i}))),y=(0,r.Mz)((e=>e.tray.dashboard.features),(e=>e.tray.entities),((e,t)=>(0,a.NU)(e,[o.cI],t).reduce(((e,t)=>{if(t&&t.views&&t.location?.primaryLinearReference){const i=t.views.sort((0,l.rD)(t.location.primaryLinearReference)).slice(0,s.az4<t.views.length?s.az4:t.views.length);e.push({...t,views:i})}else t&&e.push(t);return e}),[]))),v=(0,r.Mz)((e=>e.tray.dashboard.cameraViews),(e=>e.tray.dashboard.cameraViewType),(e=>e.your511Favorites.favoriteCameraViewUris),(e=>e.tray.entities),((e,t,i,r)=>t===n.j6.Favorite?(0,a.NU)(i,[o.Ht],r):(0,a.NU)(e,[o.Ht],r)));(0,r.Mz)((e=>e.tray.dashboard.cmsDashboard),(e=>e.tray.entities),((e,t)=>{const i={};return e?.components?.forEach((e=>{if("CAROUSEL"===e?.componentType&&"CAMERA"===e?.contentType){const{cameraViewUris:r}=e,s=(0,a.NU)(r,[o.Ht],t);i[e.id]=s}})),i})),(0,r.Mz)((e=>e.tray.dashboard.cmsDashboard),(e=>e.tray.entities),((e,t)=>{const i={};return e?.components?.forEach((e=>{if("LIST"===e?.componentType){const{eventUris:r}=e,n=(0,a.NU)(r,[o.cI],t).reduce(((e,t)=>{if(t&&t.views&&t.location?.primaryLinearReference){const i=t.views.sort((0,l.rD)(t.location.primaryLinearReference)).slice(0,s.az4<t.views.length?s.az4:t.views.length);e.push({...t,views:i})}else t&&e.push(t);return e}),[]);i[e.id]=n}})),i})),(0,r.Mz)((e=>e.tray.dashboard.cmsDashboard),(e=>e.tray.entities),((e,t)=>{const i={};return e?.components?.forEach((e=>{if("CAROUSEL"===e?.componentType&&"DMS"===e?.contentType){const{signUris:r}=e,s=(0,a.NU)(r,[o.cI],t);i[e.id]=s.flatMap((e=>e?[e]:[]))}})),i}))},95504:(e,t,i)=>{"use strict";i.d(t,{M3:()=>l,W9:()=>o,zw:()=>n});var r=i(17354),a=i(9748),s=i(52850);const o={status:s.vky.UNSUBMITTED,loginFormStatus:s.vky.UNSUBMITTED,emailUpdateFormStatus:s.vky.UNSUBMITTED,passwordUpdateFormStatus:s.vky.UNSUBMITTED,sendActivateEmailStatus:s.vky.UNSUBMITTED,accountDeleteStatus:s.vky.UNSUBMITTED,activateAccountStatus:s.vky.UNSUBMITTED,isLoggedIn:!1,showExpiredSession:!1,showLogout:!1,defaultMapView:(()=>{try{const e=localStorage.getItem(a.e6);if(e)return JSON.parse(e)}catch(e){console.error(`could not parse local storage value "${a.e6}":`,e)}})(),emailVerify:{status:s.vky.UNSUBMITTED}},n=(e=o,t)=>{if(t.type===s.qAo)return{...e,defaultMapView:t.mapView};if(t.type===s.ob)return{...e,status:s.vky.UNSUBMITTED,sendActivateEmailStatus:s.vky.UNSUBMITTED};if(t.type===s.Uf2)return{...e,accountView:t.accountView,status:s.vky.UNSUBMITTED};if(t.type===s.f4d)return{...e,isLoggedIn:t.isLoggedIn};if(t.type===s.Bb){const{account:i,auth:r}=t;return{...e,account:i,isLoggedIn:!(r&&""===r.id||!i),showExpiredSession:!i&&e.showExpiredSession,showLogout:!i&&e.showLogout}}if(t.type===s.g2z){const{mobileCarriers:i}=t;return{...e,mobileCarriers:i}}if(t.type===s.vZI)return{...e,showExpiredSession:t.show};if(t.type===s.pfQ)return{...e,showLogout:t.show};if(t.type===s.cjo)return{...e,status:t.status,error:t.error,errorMessage:t.errorMessage};if(t.type===s.tqt)return{...e,activateAccountStatus:t.status};if(t.type===s.mVL)return{...e,loginFormStatus:t.status,loginFormErrorMessage:t.errorMessage};if(t.type===s.nt6)return{...e,emailUpdateFormStatus:t.status};if(t.type===s.roW)return{...e,accountDeleteStatus:t.status};if(t.type===s.M3h)return{...e,passwordUpdateFormStatus:t.status,error:t.error?t.error:void 0,errorMessage:t.errorMessage};if(t.type===s.j0C)return{...e,sendActivateEmailStatus:t.status};if(t.type===s.Iaq){const{email:i,token:r}=t;return{...e,passwordReset:{email:i,token:r}}}if(t.type===s.ZZW){const{status:i}=t;return{...e,emailVerify:{...e.emailVerify,status:i}}}if(t.type===s.Qrc){const{alertDUnsubscribeKey:i}=t;return{...e,alertDUnsubscribeKey:i}}return e},l=(0,r.Mz)((e=>e.your511.isLoggedIn),(e=>e))},99863:(e,t,i)=>{"use strict";i.d(t,{D$:()=>g,PZ:()=>v,_S:()=>m,cn:()=>b,gt:()=>u,iM:()=>y,il:()=>h,u2:()=>p});var r=i(17354),a=i(52114),s=i(94857),o=i(52850),n=i(4983),l=i(2379),c=i(42791),d=i(26200),p=(e=>(e.CREATE="create",e.EDIT="edit",e))(p||{});function u(e){return Object.values(p).includes(e)}function h(e){return Object.values(o.Odl).includes(e)}const g={favoriteModal:{formStatus:o.vky.UNSUBMITTED,mobileVerificationOpen:!1},favoriteCameraViewSubmissionStatus:o.vky.UNSUBMITTED,pendingFavoriteCameraViewUris:new Set,entities:{}},m=(e=g,t)=>{if(t.type===o.h6q&&t.cameraViewType===n.j6.Favorite)return{...e,favoriteCameraViewUris:t.cameraViews};switch(t.type){case o.ob:return{...e,favoriteModal:{...e.favoriteModal,formStatus:o.vky.UNSUBMITTED}};case o.BmI:return{...e,favoriteModal:{...e.favoriteModal,formStatus:t.status,formError:t.error,mobileVerificationOpen:t.mobileVerificationOpen??!1}};case o.H4b:return{...e,favoriteModal:{...e.favoriteModal,mobileVerificationOpen:t.mobileVerificationOpen}};case o.rAm:return{...e,favoriteModal:{...e.favoriteModal,favoriteAction:t.favoriteAction,favoriteType:t.favoriteType,favoriteId:t.favoriteId}};case o.tOe:{const i={...e.entities.favorites,...t.entities?.favorites},r={...e.entities.alertSchedule,...t.entities?.alertSchedule};return{...e,favoriteUris:e.favoriteUris&&!e.favoriteUris.includes(t.favoriteUri)?[...e.favoriteUris,t.favoriteUri]:e.favoriteUris,entities:{...e.entities,favorites:i,alertSchedule:r}}}case o.GfU:return{...e,favoriteUris:e.favoriteUris?.filter((e=>e!==t.favoriteUri))};case o.xId:{const i={};for(const r of Object.values(t.entities?.favorites??{}))i[r.uri]=(0,s.A)(e.entities.favorites?.[r.uri],r);const r={...e.entities.alertSchedule,...t.entities?.alertSchedule};return{...e,favoriteUris:t.favoriteUris,entities:{...e.entities,favorites:i,alertSchedule:r}}}case o.jUB:return{...e,favoriteCameraViewUris:t.favoriteCameraViewUris,entities:{...e.entities,...t.entities}};case o.$I:{const i=t.cameraViewUri,r=new Set(e.favoriteCameraViewUris);return r.add(i),{...e,favoriteCameraViewUris:[...r],entities:{...e.entities,...t.entities}}}case o.Gqy:{const i=t.cameraViewUri,r=[...e.favoriteCameraViewUris||[]].filter((e=>e!==i));return{...e,favoriteCameraViewUris:r}}case o.ywZ:{const i=new Set(e.pendingFavoriteCameraViewUris);return t.status===o.vky.PENDING?i.add(t.pendingCameraUri):i.delete(t.pendingCameraUri),{...e,pendingFavoriteCameraViewUris:i,favoriteCameraViewSubmissionStatus:t.status}}case o.Ltw:return{...e,hoveringFavoriteUri:t.hoveringFavoriteUri};default:return e}},y=(0,r.Mz)((e=>e.your511Favorites.favoriteUris),(e=>e.your511Favorites.entities),((e,t)=>{if(e)return(0,a.NU)(e,[d.JY],t).reduce(((e,t)=>("FavoriteArea"===t?.__typename&&(t.customAreaShapeSource===n.dT.UserDrawn&&"Polygon"===t.visual?.[0]?.geometry?.type?t.url=(0,l.wE)(t.visual?.[0]?.geometry,t.id):t.url=(0,l.X2)(t.bbox,t.name,t.id)),"FavoriteTrip"===t?.__typename&&(t.url=(0,c.X)(t.from,t.to,t.mode,t.waypoints,t.id)),t&&e.push(t),e)),[])})),v=(0,r.Mz)((e=>e.your511Favorites.favoriteModal.favoriteId),(e=>e.your511Favorites.favoriteModal.favoriteType),(e=>e.your511Favorites.favoriteUris),(e=>e.your511Favorites.entities),((e,t,i,r)=>{if(!i||!t||!e)return null;const s=(0,a.NU)(i,[d.JY],r),n=`${o.Gqw.FAVORITE}/${t}/${e}`;return s.find((e=>n===e?.uri))??null})),b=(0,r.Mz)((e=>e.your511Favorites.favoriteUris),(e=>e.your511Favorites.favoriteModal),(e=>e.your511Favorites.entities),((e,t,i)=>e?(0,a.NU)(e,[d.JY],i).reduce(((e,i)=>(!i||"edit"===t.favoriteAction&&t.favoriteId===i.id||e.push(i.name),e)),[]):[]))},26200:(e,t,i)=>{"use strict";i.d(t,{Ht:()=>s,JY:()=>d,bB:()=>l,cI:()=>o,uY:()=>n});var r=i(52114);const a=new r.wQ.Entity("features"),s=new r.wQ.Entity("views",{},{idAttribute:"uri"}),o=new r.wQ.Entity("featureCollections",{features:[a],views:[s]},{idAttribute:"uri"});o.define({nearbyResults:[o]}),o.define({associatedCollection:o}),s.define({parentCollection:o});const n=new r.wQ.Entity("notifications",{},{idAttribute:"uri"}),l=new r.wQ.Entity("cmsMessages",{},{idAttribute:"uri"}),c=new r.wQ.Entity("alertSchedule"),d=new r.wQ.Entity("favorites",{alertSchedule:c,results:[o]},{idAttribute:"uri"})},10388:(e,t,i)=>{"use strict";i.d(t,{Ay:()=>M,M_:()=>k});var r=i(55135),a=i(80855),s=i(54111),o=i(34850),n=i(25447),l=i(9045);const c={isSubmitted:!1,isSuccess:!1,isError:!1},d={freetext:{...c},structured:{...c},brokenCamera:{...c},structuredNegativeEvent:{...c,situationId:void 0,responseId:void 0,isSubmitted:!1,isSuccess:!1,isError:!1}};var p=i(11650),u=i(19821),h=i(52850);const g={allRoutes:[],allPredefinedAreas:[]};var m=i(75340),y=i(46205),v=i(95050),b=i(88014),f=i(80027);var w=i(78707);const S={};var A=i(95504),E=i(99863);const $=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.Zz,T={app:n.bj,search:v.q_,tray:b.q,notifications:m.fy,cmsContent:y.x4,feedback:d,map:p.M5,modal:u.FL,your511:A.W9,your511Favorites:E.D$,areasAndLocations:g,nlp:o.G0},R=(0,a.HY)({app:n.yA,modal:u.yl,tray:b.Fm,search:v.$P,notifications:m.$e,cmsContent:y.$g,feedback:(e=d,t)=>{switch(t.type){case l.$I:return{...e,freetext:{isSubmitted:!0,isSuccess:!1,isError:!1}};case l.Bo:return{...e,freetext:{isSubmitted:!1,isSuccess:!0,isError:!1}};case l.eK:return{...e,freetext:{isSubmitted:!1,isSuccess:!1,isError:!0}};case l.Hn:return{...e,freetext:{isSubmitted:!1,isSuccess:!1,isError:!1}};case l.EO:return{...e,structured:{isSubmitted:!0,isSuccess:!1,isError:!1}};case l.sX:return{...e,structuredNegativeEvent:{isSubmitted:!0,isSuccess:!1,isError:!1,situationId:e.structuredNegativeEvent.situationId,responseId:e.structuredNegativeEvent.responseId}};case l.uM:return{...e,structured:{isSubmitted:!1,isSuccess:!0,isError:!1}};case l.IY:return{...e,structuredNegativeEvent:{isSubmitted:!1,isSuccess:!0,isError:!1,situationId:e.structuredNegativeEvent.situationId,responseId:e.structuredNegativeEvent.responseId}};case l.vP:return{...e,structured:{isSubmitted:!1,isSuccess:!1,isError:!0}};case l.nS:return{...e,structuredNegativeEvent:{isSubmitted:!1,isSuccess:!1,isError:!0,situationId:e.structuredNegativeEvent.situationId,responseId:e.structuredNegativeEvent.responseId}};case l._8:return{...e,structuredNegativeEvent:{isSubmitted:!1,isSuccess:!1,isError:!1,situationId:t.situationId,responseId:t.responseId}};case l.CX:return{...e,structuredNegativeEvent:{isSubmitted:!1,isSuccess:!1,isError:!1,situationId:e.structuredNegativeEvent.situationId,responseId:e.structuredNegativeEvent.responseId}};case l.yo:return{...e,brokenCamera:{isSubmitted:!0,isSuccess:!1,isError:!1}};case l.gQ:return{...e,brokenCamera:{isSubmitted:!1,isSuccess:!0,isError:!1}};case l.vU:return{...e,brokenCamera:{isSubmitted:!1,isSuccess:!1,isError:!0}};default:return e}},map:p.Tj,your511:A.zw,your511Favorites:E._S,areasAndLocations:(e=g,t)=>t.type===h.oGv?{...e,allRoutes:t.routes}:t.type===h.Fbp?{...e,allPredefinedAreas:t.predefinedAreas}:e,nlp:o.jX}),k=(0,a.y$)(R,T,$((0,r.T)(a.HY),(0,a.Tw)(s.A,(()=>e=>t=>{if((0,w.qV)(t)){const e=S[t.type];(0,w.qV)(e)&&e.controller.abort(),S[t.type]=t}return e(t)}),(({getState:e})=>t=>i=>{const r=e();switch(i.type){case h.k2P:gtag("config",f.s1.analyticsTag,{page_path:"/"});break;case h.MPk:gtag("event",i.name,{event_label:i.label,event_category:i.category});break;case h.S2Z:gtag("event",h.S2Z,{event_label:i.value,event_category:h.l_R.SEARCH});break;case h.Aky:gtag("event",i.type,{event_label:i.title,event_category:h.l_R.HELP_ONBOARD});break;case h.lVs:case h.Ob3:case h.CSl:gtag("event",h.UfG,{event_label:i.type,event_category:h.l_R.NAV});break;case h.poS:gtag("event",h.poS,{event_label:i.type,event_category:h.l_R.VIDEO});break;case h.v_f:gtag("event",h.v_f,{event_label:i.type,event_category:h.l_R.VIDEO});break;case h.gjm:case h.EZw:case h.ZzN:case h.tnX:gtag("event",i.type,{event_label:i.shareUrl,event_category:h.l_R.SOCIAL});break;case h.gNy:gtag("event",i.type,{event_label:i.contentUri,event_category:h.l_R.SOCIAL});break;case h.BSm:if(i.slug){gtag("event",h.BSm,{event_category:h.l_R.HELP_ONBOARD,event_label:i.slug||"complete"});break}gtag("event",h._QG,{event_category:h.l_R.HELP_ONBOARD,event_label:r.app.tutorialStep});break;case h.zVg:gtag("event",h.zVg,{event_category:"tbd",event_label:i.dismissed});break;case h.SMS:gtag("event",h.SMS,{event_label:i.direction,event_category:h.l_R.MODAL});break;case h.JQP:gtag("event",h.JQP,{event_label:h.JQP,event_category:h.l_R.MODAL});break;case h.CGJ:gtag("event",h.CGJ,{event_category:h.l_R.MODAL,event_label:h.CGJ});break;case h.Aj5:case h.EnK:gtag("event","TRAY_CLEAR",{event_category:h.l_R.SEARCH,event_label:i.type});break;case h.M8v:gtag("event",h.M8v,{event_category:h.l_R.HELP_ONBOARD,event_label:i.link});break;case h.wIz:gtag("event",h.wIz,{event_category:h.l_R.SEARCH,event_label:i.searchType});break;case h.U7i:gtag("event",h.U7i,{event_category:h.l_R.VIEWPORT,event_label:i.collapse});break;case h.I7h:gtag("event",h.I7h,{event_category:h.l_R.VIEWPORT,event_label:r.tray.isSidebarCollapsed});break;case h.pNK:gtag("event",h.pNK,{event_category:h.l_R.NAV,event_label:i.button});break;case h.xOv:gtag("event",h.xOv,{event_category:h.l_R.TRAY_EVENT,event_label:i.id});break;case h.VB3:gtag("event",h.VB3,{event_category:h.l_R.MAP_EVENT,event_label:`${i.collectionType}/${i.id}`});break;case h.GIe:gtag("event",h.GIe,{event_category:h.l_R.NAV,event_label:h.GIe})}return t(i)}),(({getState:e})=>t=>i=>{const r=e();try{return t(i)}catch(e){return console.error(e,i,r),t(i)}})))),M=k},2379:(e,t,i)=>{"use strict";i.d(t,{Ay:()=>d,X2:()=>l,wE:()=>c});var r=i(52850),a=i(26001),s=i(18211),o=i(42582),n=i(98755);function l(e,t,i,a=r.nXf.SEARCH_PLACE){let l;l=Array.isArray(e)?e:(0,n.z)(e);const c="number"==typeof i?`/favorite=${i}`:"",d=a===r.nXf.SEARCH_PLACE?"around":"predefined";return`/search${t?`/${d}=${(0,o.A)(t)}`:"/around"}/@${l.map((e=>(0,s.A)(e))).join(",")}${c}`}function c(e,t){const i="number"==typeof t?`/favorite=${t}`:"",r=(0,a.A)(e).coordinates[0];return`/search/drawnarea/${encodeURIComponent(r)}${i}`}const d=l},41183:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});var r=i(18211),a=i(42582),s=i(98755);const o=function(e,t){let i;return i=Array.isArray(e)?e:(0,s.z)(e),`/search${t?`/roadway=${(0,a.A)(t)}`:"/roadway"}/@${i.map((e=>(0,r.A)(e))).join(",")}`}},42791:(e,t,i)=>{"use strict";i.d(t,{A:()=>n,X:()=>o});var r=i(18211),a=i(42582);function s(e){return!!e.length&&!Array.isArray(e[0])}function o(e,t,i,o,n){const l=`/from=${(0,a.A)(e)}`,c=`/to=${(0,a.A)(t)}`,d=`/mode=${(0,a.A)(i)}`;let p="";return o?.length&&s(o)?p=`/waypoints=${o.map((e=>`[${(0,r.A)(e.lng)},${(0,r.A)(e.lat)}]`)).join(",")}`:o?.length&&!s(o)&&(p=`/waypoints=${o.map((e=>`[${(0,r.A)(e[0])},${(0,r.A)(e[1])}]`)).join(",")}`),`/search${l}${c}${d}${p}${"number"==typeof n?`/favorite=${n}`:""}`}const n=o},65585:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});const r=(e,t)=>t.composedPath?!!t.composedPath().find((t=>e===t)):!!e.contains(t.target)},76310:(e,t,i)=>{"use strict";function r(e){return parseFloat(e)*parseFloat(getComputedStyle(document.documentElement).fontSize)}i.d(t,{A:()=>r})},56188:(e,t,i)=>{"use strict";i.d(t,{A:()=>r,h:()=>a});const r=(e,t)=>new CustomEvent(e,t),a=r},85385:(e,t,i)=>{"use strict";i.d(t,{C:()=>a,V:()=>s});var r=i(52850);function a(){return"ontouchstart"in document.documentElement}function s(){return window.matchMedia(`screen and (max-width: ${r.EA.DESKTOP})`).matches}},42582:(e,t,i)=>{"use strict";function r(e){return encodeURIComponent(e).replace(/%20/g,"+").replace(/%2C/g,",")}function a(e){return decodeURIComponent(e).replace(/[+]/g," ")}i.d(t,{A:()=>r,S:()=>a})},72357:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});var r=i(30466),a=i(80027),s=i(30153);async function o(e,t="POST",i,o=a.DR.graphqlUrl){try{let a=o;if("GET"===t){if(Array.isArray(e))throw new Error("Batching not supported for GET requests");a+=`?query=${encodeURI(e.query)}`,e.variables&&(a+=`&variables=${encodeURI(JSON.stringify(e.variables))}`)}if(Array.isArray(e)&&0===e.length)return{};const n=Array.isArray(e)?e:[e],l=(0,r.A)(),c=(0,s.c4)(),d=await Promise.all(n.map((e=>fetch(a,{method:t,headers:{"Content-Type":"application/json",...c?{Authorization:JSON.stringify(c)}:{},language:l},body:"POST"===t?JSON.stringify(e):void 0,signal:i})))),p=d.filter((e=>!e.ok));if(p.length>0){const e=Array.from(new Set(p.map((e=>e.status)))),t=1===e.length?`Server response: ${e[0]}`:`Server responses: ${e.join(",")}`;throw new Error(t)}const u=[],h=await Promise.all(d.map((async e=>{try{const t=await e.json();return t.errors&&t.errors.forEach((e=>console.error("Server data error:",e))),{...t.data}}catch(e){return u.push(e),{}}})));if(u.length>0){const e=u.filter((e=>"AbortError"!==e?.name));if(e.length>0){const t=`Data processing error: ${JSON.stringify(e)}`;throw console.error(t),new Error(t)}}return h.reduce(((e,t)=>({...e,...t})),{})}catch(e){if("AbortError"!==e?.name){if("string"==typeof e)throw new Error(e);throw e}console.info(e)}return{}}},85864:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});const r=e=>{if(e.composedPath){const t=e.composedPath();return t.length>0?t[0]:e.target}return e.target}},96842:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});const r=e=>{let t=e,i=null;for(;t;)i=t,t=t.parentNode;return i&&i.nodeType===i.DOCUMENT_FRAGMENT_NODE&&i.host?i.host:null}},20492:(e,t,i)=>{"use strict";i.d(t,{A:()=>s});var r=i(80027),a=i(71413);const s=(e,t,i)=>{const s=parseInt(e[1],10),o=parseInt(e[2],10),n=`${s}'-${o}"`,l=`Bridge height of ${s} ${1===s?"foot":"feet"} and ${o} ${1===o?"inch":"inches"}`;return a.qy` <div
		style="position: relative; background: url(./${r.QW["sign-bridge-height"]}); height: ${t}px; width: ${t}px;"
	>
		<span
			style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); color: black; font-size: ${i}; font-weight: 500;"
			aria-label=${l}
		>
			${n}
		</span>
	</div>`}},90293:(e,t,i)=>{"use strict";function r(e){return{email:e.email,firstName:e.firstName,lastName:e.lastName,id:e.id,userType:e.userType}}i.d(t,{A:()=>r})},76393:(e,t,i)=>{"use strict";i.d(t,{A:()=>l,V:()=>d});var r=i(52850),a=i(76310);const s=r.H_g.includes("rem")?(0,a.A)(r.H_g):parseFloat(r.H_g),o=r.gHc.includes("rem")?(0,a.A)(r.gHc):parseFloat(r.gHc),n=r.nBC.includes("rem")?(0,a.A)(r.nBC):parseFloat(r.nBC);function l(e,t){return e?s:t===r.EA.DESKTOP?o:t===r.EA.DESKTOP_XL?n:0}const c=32;function d(){const{sidebarWidth:e}=window.appDimensions,t={north:0,south:-c,east:-c,west:-c};return e>s&&(t.west=o-c),t}},30466:(e,t,i)=>{"use strict";i.d(t,{A:()=>a,w:()=>r});const r="owtranslationlang";function a(){return document.cookie.match(`(^|;)\\s*${r}\\s*=\\s*([^;]+)`)?.pop()||window.navigator.language.slice(0,2)}},22493:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});const r=function(e,...t){return e.reduce(((e,i,r)=>`${e}${i}${t[r]||""}`),"").replace(/\s+\s+/g," ").trim()}},20732:(e,t,i)=>{"use strict";i.d(t,{A:()=>o,n:()=>s});var r=i(87190),a=i(10388);function s(){a.M_.dispatch((0,r.wf)(null))}function o(e){const{hoverUri:t}=e?.currentTarget;a.M_.dispatch((0,r.wf)(t??null))}},30191:(e,t,i)=>{"use strict";i.d(t,{Ap:()=>c,JV:()=>n,LR:()=>l,WG:()=>d});var r=i(10388),a=i(52850);let s,o;const n=(e,t)=>{const{inactiveLayers:i}=r.Ay.getState().app;if(i.length){let n=!1;const l=t.reduce(((t,r)=>(t[r.slug]=e.includes(r.slug)&&!i.includes(r.slug),e.includes(r.slug)&&i.includes(r.slug)&&(n=!0),t)),{});return n?s=setTimeout((()=>{r.Ay.dispatch({type:a.j2Q,error:{type:a.i65.REDACTED}}),clearTimeout(o),o=setTimeout((()=>{r.Ay.dispatch({type:a.j2Q,error:null})}),4e3)}),2e3):(clearTimeout(s),clearTimeout(o)),l}return t.reduce(((t,i)=>(t[i.slug]=e.includes(i.slug),t)),{})},l=e=>Object.keys(e).reduce(((t,i)=>(e[i]&&t.push(i),t)),[]),c=(e,t)=>{const i=l(e).reduce(((e,i)=>{const r=t.find((e=>e.slug===i));return r&&r.classifications&&r.classifications.forEach((t=>{e[t]=!0})),e}),{});return Object.keys(i)},d=e=>e.reduce(((e,t)=>(e[t.slug]=!!t.default,e)),{})},63822:(e,t,i)=>{"use strict";i.d(t,{A:()=>c,l:()=>s,t:()=>l});var r=i(80027),a=i(30466);function s(e,t){return r.Wx[e]??t}const o={};async function n(e,t,i){if(null==window)return void i.callback(e);const s=(0,a.A)();if(r.s1.translations?.enabled&&r.s1.translations?.defaultLanguageKey!==s){if(null==window.Localize||!window.Localize.loaded)return await new Promise((e=>{setTimeout((()=>{e()}),200)})),void n(e,t,i);if(null!=o[s]?.[e]){const t=o[s][e];return i.text=t,void i.callback(t)}window.Localize.translate(e,t,(t=>{null!=t&&(null==o[s]?o[s]={[e]:t}:o[s][e]=t);const r=t||e;i.text=r,i.callback(r)}))}else i.callback(e)}function l(e,t={},i=(()=>{})){const r={text:e||"",toString(){return this.text},callback:i};return null!=e&&""!==e&&n(e,t,r),r}const c=s},42978:(e,t,i)=>{"use strict";i.d(t,{A:()=>n,X:()=>o});var r=i(47479),a=i(62566),s=i(52850);const o=function(e,t,i){const{windowHeight:o}=window.appDimensions,n={west:0,south:0,east:0,north:0,...t||{}};let l,c;if(i?.zoomToFit?(l=(o-n.north-n.south)*(1-s.MBn),c=(document.documentElement.clientWidth-n.west-n.east)*(1-s.MBn)):(l=o*(1+s.MBn),c=document.documentElement.clientWidth*(1+s.MBn)),c<0||l<0)throw new Error("calcMapPosition: Illegal constraint");const d=(0,a.A)({lng:e.west,lat:e.south},{lng:e.east,lat:e.north},l,c,i?.maxZoom),p=(0,r.gO)({lng:(e.east+e.west)/2,lat:(e.north+e.south)/2},d);return{center:(0,r.Ev)({y:p.y-n.north/2+n.south/2,x:p.x-n.west/2+n.east/2},d),zoom:d}},n=o},98755:(e,t,i)=>{"use strict";function r(e){return{west:e[0],south:e[1],east:e[2],north:e[3]}}function a(e){return[e.west,e.south,e.east,e.north]}i.d(t,{b:()=>r,z:()=>a})},93127:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});var r=i(47479);const a=function(e,t){const{windowHeight:i}=window.appDimensions,a={west:0,south:0,east:0,north:0,...t||{}},s=(0,r.gO)(e.center,e.zoom),o=(0,r.Ev)({x:s.x+(document.documentElement.clientWidth/2-a.east),y:s.y-(i/2-a.north)},e.zoom),n=(0,r.Ev)({x:s.x-(document.documentElement.clientWidth/2-a.west),y:s.y+(i/2-a.south)},e.zoom);return{north:o.lat,south:n.lat,east:o.lng,west:n.lng}}},46339:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var r=i(42978),a=i(93127),s=i(34542),o=i(42768);function n(e,t,i,n,l){const c=(0,s.A)(t,n);if(!i)return(0,r.A)(e,c,{...l,zoomToFit:!0});if(!(0,o.A)(e,(0,a.A)(i,c))){const t=(0,r.A)(e,c,{...l,zoomToFit:!0});return{center:t.center,zoom:i.zoom>t.zoom?t.zoom:i.zoom}}return i}},34542:(e,t,i)=>{"use strict";i.d(t,{A:()=>s,T:()=>o});var r=i(47479),a=i(52850);function s(e,t){const{headerHeight:i,sidebarWidth:r,legendWidth:s,scrollerPositionTop:o,windowHeight:n}=window.appDimensions,l=t?(n-a.xBA)*t:o;if(n<l)throw new Error("UI elements cover entire map");return{north:e?i:(l+i)/2,south:e?0:l/2,west:r,east:s}}function o({zoom:e,center:{lng:t,lat:i}},a){const o=s(a),n=(0,r.gO)({lng:t,lat:i},e);return{center:(0,r.Ev)({y:n.y-o.north/2+o.south/2,x:n.x-o.west/2+o.east/2},e),zoom:e}}},42768:(e,t,i)=>{"use strict";function r(e,t){const i=t.west<=e.west,r=t.south<=e.south,a=t.east>=e.east,s=t.north>=e.north;return i&&r&&a&&s}i.d(t,{A:()=>r})},23356:(e,t,i)=>{"use strict";function r(e,t){return!e&&!t||!(!e||!t)&&e.zoom===t.zoom&&e.center.lat.toFixed(5)===t.center.lat.toFixed(5)&&e.center.lng.toFixed(5)===t.center.lng.toFixed(5)}i.d(t,{A:()=>r})},76885:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});var r=i(18211);function a(e){return e?`${e.zoom}${(0,r.A)(e.center.lng)}${(0,r.A)(e.center.lat)}`:""}},39569:(e,t,i)=>{"use strict";i.d(t,{p:()=>c});var r=i(4842),a=i(5218),s=i(77614),o=i(78770),n=i.n(o);class l extends r.WL{constructor(){super(...arguments),this.memoizedSanitize=(0,s.A)((e=>{return t=e,n()(t,{allowedTags:n().defaults.allowedTags.concat(["img"]),allowedSchemes:n().defaults.allowedSchemes.concat(["data"]),allowedAttributes:{...n().defaults.allowedAttributes,h1:["id"],h2:["id"],h3:["id"],h4:["id"],h5:["id"],h6:["id"]}});var t}))}render(e){const t=this.memoizedSanitize(e);return(0,a._)(t)}}const c=(0,r.u$)(l)},97474:(e,t,i)=>{"use strict";function r(e,t,i,r){return`${e}${t}${r}${i.reduce(((e,t)=>`${e}${t.lng}${t.lat}`),"")}`}i.d(t,{A:()=>r})},40974:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});const r=[];function a(){for(;r.length;)r[0](),r.shift()}const s=(()=>{if("undefined"!=typeof MutationObserver){const e=document.createElement("div");return new MutationObserver(a).observe(e,{attributes:!0}),()=>{e.setAttribute("a","0")}}return"undefined"!=typeof setImmediate?()=>{setImmediate(a)}:()=>{setTimeout(a,0)}})(),o=function(e){r.push(e),1===r.length&&s()}},83448:(e,t,i)=>{"use strict";i.d(t,{b_:()=>y,Z0:()=>u,PB:()=>v,Lf:()=>h});var r=i(47479),a=i(80027),s=i(52850),o=i(11650);const n=6378137,l=1/298.257223563,c=l*(2-l),d=Math.PI/180;class p{constructor(e,t){const i=d*n,r=Math.cos(e*d),a=1/(1-c*(1-r*r)),s=Math.sqrt(a);this.kx=i*s*r,this.ky=i*s*a*(1-c),this.metersPerPx=2*r*Math.PI*n/(256*2**t)}distance(e,t){const i=function(e){let t=e;for(;t<-180;)t+=360;for(;t>180;)t-=360;return t}(e[0]-t[0])*this.kx,r=(e[1]-t[1])*this.ky;return Math.sqrt(i*i+r*r)/this.metersPerPx}}function u(e){return"Point"===e.geometry.type&&!e.spidered&&(a.VV.spiderfying?.includeByResolveType.includes(e.collectionType)??!1)}function h(e,t,i){if(!u(e)||!a.VV.spiderfying)return!1;const r=e.geometry.coordinates,s=new p(r[1],t);for(let t=i.length-1;t>=0;t-=1){const o=i[t];if(u(o)&&"Point"===o.geometry.type&&(s.distance(r,o.geometry.coordinates)<=a.VV.spiderfying.nearbyDistancePx&&o.properties.uri&&e.properties.uri!==o.properties.uri))return!0}return!1}const g=Math.PI/6;function m(e,t,i){const r=i*(2+e)/(2*Math.PI),a=2*Math.PI/e,s=[];for(let i=0,o=e,n=o>=0;n?i<o:i>o;i=n?i+1:i-1){const e=g+i*a;s.push({x:t.x+r*Math.cos(e),y:t.y+r*Math.sin(e)})}return s}function y(e){const t=a.VV.spiderfying?.nonSpideredOpacity;return t?{...e,state:o.qX.DIMMED,properties:{...e.properties,opacity:(e.properties.opacity??1)*t,strokeOpacity:(e.properties.strokeOpacity??1)*t}}:e}function v(e,t,i){const o=a.VV.spiderfying;if(!o)return{};const n=function(e,t,i,r){const a=new p(t.lat,i);return e.reduce(((e,i)=>{if(!i)return e;let s=0;const o=i.features.reduce(((e,i)=>i&&"Point"===i.geometry.type&&u(i)?(a.distance([t.lng,t.lat],i.geometry.coordinates)<=r&&(e[i.id]=i,s+=1),e):e),{});return s&&(e.length+=s,e.nearby.push({collection:i,nearbyFeatures:o})),e}),{nearby:[],length:0})}(e,t,i,o.nearbyDistancePx);if(n.length<2)return{};const l=function(e){const t={lng:0,lat:0};let i=0;return e.nearby.forEach((e=>{Object.values(e.nearbyFeatures).forEach((e=>{const r=e.geometry.coordinates;t.lng+=r[0],t.lat+=r[1],i+=1}))})),{lng:t.lng/i,lat:t.lat/i}}(n),c=m(n.length,(0,r.gO)(l,i),4),d=m(n.length,(0,r.gO)(l,i),o.spideredMarkerSeparation);return n.nearby.reduce(((e,{nearbyFeatures:t,collection:o},n)=>{let p=0;const u=o.features.reduce(((e,o)=>{if(!o)return e;if(!t[o.id])return e.push(o),e;const u=(0,r.Ev)(c[n+p],i),h=(0,r.Ev)(d[n+p],i),g=`${t[o.id].id}-${JSON.stringify(l)}`;return e.push(function(e,t,i,r){return{...e,id:`${t}-leg`,spidered:!0,geometry:{type:"LineString",coordinates:[[i.lng,i.lat],[r.lng,r.lat]]},properties:{strokeColor:a.VV.spiderfying?.spiderLegOverrides?.strokeColor??"#000",strokeWeight:a.VV.spiderfying?.spiderLegOverrides?.strokeWeight??2,strokeOpacity:a.VV.spiderfying?.spiderLegOverrides?.strokeOpacity??1,visible:!0,clickable:!1,zIndex:s.lSB-1}}}(t[o.id],g,u,h)),e.push(function(e,t,i){return{...e,id:`${t}-spidered`,spidered:!0,geometry:{type:"Point",coordinates:[i.lng,i.lat]},properties:{...e.properties,zIndex:s.lSB}}}(t[o.id],g,h)),p+=1,e}),[]);return e[o.uri]={...o,features:u},e}),{})}},12172:(e,t,i)=>{"use strict";function r(e){const[t,i,r]=e.split("/");return{mediaSlug:t,entityId:i,viewId:r}}i.d(t,{A:()=>r})},70192:(e,t,i)=>{"use strict";i.d(t,{A7:()=>a,B_:()=>h,Cm:()=>p,HQ:()=>c,HV:()=>m,N4:()=>o,SB:()=>s,f2:()=>u,iB:()=>l,jq:()=>g,ju:()=>y,nu:()=>n,uv:()=>d});var r=i(52850);function a(e){return!!e&&"signStatus"in e}function s(e){return!(!e||!e.restAreaAmenities&&!e.restAreaStatusSummary)}function o(e){return["Point","MultiPoint"].includes(e.geometry.type)}function n(e){return["LineString","MultiLineString"].includes(e.geometry.type)}function l(e){return["Polygon","MultiPolygon"].includes(e.geometry.type)}function c(e){return"CameraView"===e.__typename}function d(e){return"SignTextView"===e.__typename}function p(e){return"SignImageView"===e.__typename}function u(e){return"SignComboView"===e.__typename}function h(e){return"SignOverlayView"===e.__typename}function g(e){return"SignOverlayTPIMView"===e.__typename}function m(e){return"Point"===e.geometry.type}function y(e){return e?.__typename===r.Tgm.Event}},4983:(e,t,i)=>{"use strict";i.d(t,{A7:()=>l,L4:()=>s,LV:()=>h,Ol:()=>u,_n:()=>n,dT:()=>c,j6:()=>a,kg:()=>d,ob:()=>o,u1:()=>r,ut:()=>g,v4:()=>p});var r=(e=>(e.Active="ACTIVE",e.Closed="CLOSED",e.Pending="PENDING",e.Suspended="SUSPENDED",e))(r||{}),a=(e=>(e.Default="DEFAULT",e.Favorite="FAVORITE",e.Hot="HOT",e))(a||{}),s=(e=>(e.OneWeb="ONE_WEB",e.Splash="SPLASH",e))(s||{}),o=(e=>(e.Friday="FRIDAY",e.Monday="MONDAY",e.Saturday="SATURDAY",e.Sunday="SUNDAY",e.Thursday="THURSDAY",e.Tuesday="TUESDAY",e.Wednesday="WEDNESDAY",e))(o||{}),n=(e=>(e.Regional="REGIONAL",e.Statewide="STATEWIDE",e))(n||{}),l=(e=>(e.Busy="BUSY",e.Closed="CLOSED",e.Low="LOW",e.NoRealtimeData="NO_REALTIME_DATA",e.Open="OPEN",e))(l||{}),c=(e=>(e.ConfigDefined="CONFIG_DEFINED",e.UserDrawn="USER_DRAWN",e))(c||{}),d=(e=>(e.BridgeHeight="BRIDGE_HEIGHT",e.Cms="CMS",e.ComboTextImageSign="COMBO_TEXT_IMAGE_SIGN",e.DefaultVms="DEFAULT_VMS",e.EmbeddedImageSign="EMBEDDED_IMAGE_SIGN",e.Gantry="GANTRY",e.Lcg="LCG",e.Lcs="LCS",e.OverlayTpim="OVERLAY_TPIM",e.OverlayTravelTime="OVERLAY_TRAVEL_TIME",e.OverlayTravelTimeVertical="OVERLAY_TRAVEL_TIME_VERTICAL",e.Posted="POSTED",e.VariableSpeedLimitSign="VARIABLE_SPEED_LIMIT_SIGN",e.Vlcg="VLCG",e.VmsFull="VMS_FULL",e.VmsImage="VMS_IMAGE",e.VmsImageTravelTime="VMS_IMAGE_TRAVEL_TIME",e))(d||{}),p=(e=>(e.Center="CENTER",e.Full="FULL",e.Left="LEFT",e.Other="OTHER",e.Right="RIGHT",e))(p||{}),u=(e=>(e.Blank="BLANK",e.DisplayingMessage="DISPLAYING_MESSAGE",e.ErrorOrFailure="ERROR_OR_FAILURE",e.OutOfCommunication="OUT_OF_COMMUNICATION",e))(u||{}),h=(e=>(e.Alert="ALERT",e.AlertFreezing="ALERT_FREEZING",e.Freezing="FREEZING",e.Normal="NORMAL",e.NotReporting="NOT_REPORTING",e))(h||{}),g=(e=>(e.Standard="STANDARD",e.Trucker="TRUCKER",e))(g||{})},49746:()=>{},19977:()=>{},197:()=>{},21866:()=>{},52739:()=>{}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={exports:{}};return r[e].call(i.exports,i,i.exports,s),i.exports}s.m=r,e=[],s.O=(t,i,r,a)=>{if(!i){var o=1/0;for(d=0;d<e.length;d++){for(var[i,r,a]=e[d],n=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(s.O).every((e=>s.O[e](i[l])))?i.splice(l--,1):(n=!1,a<o&&(o=a));if(n){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[i,r,a]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,i)=>(s.f[i](e,t),t)),[])),s.u=e=>(({11:"tray-weather-station",206:"signup-form",453:"header-search-route",932:"floodgate",1008:"tray-search-route",1230:"header-search-predefined-area",1281:"alertd-unsubscribe",1509:"modal-media",1581:"tray-custom-layer",2071:"oversize-load",2146:"fueling-station",2161:"tray-journey-times",2316:"nlp",2333:"tray-camera",2339:"header-search-place",2587:"forgot-password-form",2674:"modal-media-photo",3023:"settings-form",3232:"tray-search-roadway",3255:"modal-media-video",3356:"signin-form",3443:"modal-negative-event-feedback",3661:"tray-notification",4002:"modal-feedback",4361:"alerts-form",4364:"tray-dashboard",4606:"modal-media-sign-photo",4892:"tray-notifications",4978:"favorite-form",5256:"tray-not-found",5390:"tray-search-place",5509:"tray-cms-message",5795:"tray-sign",5903:"modal-media-sign-overlay-travel-time",6424:"tray-ramp",6771:"search-route",6973:"activate-panel",7196:"email-verifier",7216:"tray-rest-area",7229:"header-draw-custom-area",7547:"modal-media-sign-text",7838:"coming-soon",8457:"password-reset-form",8732:"tray-search-place-update",8920:"tray-event",8993:"header-search-roadway",9414:"tray-plow",9608:"tray-wildfire",9834:"dial-in-form",9935:"modal-media-sign-gantry"}[e]||e)+"-"+{11:"fc253f13780fa28e78de",206:"bd6f6a90fdcdab06cd50",356:"3e01383f98c367c57b97",453:"a8745a9abc021f6e149f",544:"fd9c2d200e8e889d48e6",932:"29ef704bb5d250271e3c",1008:"d333230a6f2254aa7a93",1230:"f87f98f7d2cfa79ffaa0",1281:"2449d94844ed95a3db31",1311:"52de52a6f2c70ee4ae90",1371:"63bfbc59fc87ee472a11",1509:"e5f2a0725b64cdb6d693",1581:"b55b739335adc346e462",2053:"34eccf0995fa6359ab72",2071:"8f3957322fc42399cd60",2146:"cb35a03e0478622402c3",2161:"728dfaa1934e89ef9c72",2316:"37aed400a4cdc90405ed",2333:"b88a100189bf34239dba",2339:"57c5b427bc961ad84961",2350:"0b5fb3caddc5eaf9be6b",2439:"f7de7e287ed95def657e",2587:"d4ef1c1156415afb73c6",2674:"434c3b04ddc7bd8bec40",2894:"005bcfbcf91215498a65",3023:"f685957cfb2071c8737d",3232:"253763ad3e78e4a8741b",3255:"ece685de374882e6aea5",3316:"bfee6d751d3a53c24686",3356:"49680afb93004a3b6baf",3443:"9a0344c726bd73483f8a",3627:"6f6daa0801a13dcadfee",3661:"451f7ba051c3a0bc3857",4002:"0476facf84d64ecb450c",4361:"b232fc2be52f0f35cb1b",4364:"94b45badf5c3c9ab2e20",4390:"f9c6eed6240e10ae6ce3",4606:"8c20624bce017f7473a2",4892:"65b8017cc080b336010e",4978:"fab1c20f09f7ee6ee67c",5256:"9963a4b99feb73672438",5390:"84d5a18a04b51b71cf01",5509:"638588ae982b26427fe4",5795:"6ebfce85fa4b9ff8e9a2",5903:"585758767d7e34c543ce",6424:"25e990e4c1becf2e9670",6771:"a62b29048b52ac47e87d",6973:"4d403e4f7b3095f43450",7196:"e09313de8d6815628006",7216:"944b850ec665500c0fbf",7229:"ffe61ed136e06f2cdefe",7547:"d7f3bb5c341f8960fed4",7838:"e5c1ffc9ea88157a8e9a",8457:"2d757f69da98fd303ca0",8570:"321d58e4a30b50f0c88c",8732:"ceb04507e9288d0647eb",8920:"daf5cd90c296844c0c33",8993:"476ac43dba9e702a493d",9414:"6d144bfe4c6d4060000c",9608:"b59bda382a80c52755ff",9834:"a8f746733b9c6189c447",9935:"48bf1c47a7f63751b076"}[e]+".js"),s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},i="one-web:",s.l=(e,r,a,o)=>{if(t[e])t[e].push(r);else{var n,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var p=c[d];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==i+a){n=p;break}}n||(l=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,s.nc&&n.setAttribute("nonce",s.nc),n.setAttribute("data-webpack",i+a),n.src=e),t[e]=[r];var u=(i,r)=>{n.onerror=n.onload=null,clearTimeout(h);var a=t[e];if(delete t[e],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(r))),i)return i(r)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=u.bind(null,n.onerror),n.onload=u.bind(null,n.onload),l&&document.head.appendChild(n)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.j=8792,s.p="/",(()=>{var e={453:0,1230:0,2053:0,2339:0,2894:0,3316:0,3627:0,5903:0,6771:0,7229:0,8732:0,8792:0,8993:0};s.f.j=(t,i)=>{var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var a=new Promise(((i,a)=>r=e[t]=[i,a]));i.push(r[2]=a);var o=s.p+s.u(t),n=new Error;s.l(o,(i=>{if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;n.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",n.name="ChunkLoadError",n.type=a,n.request=o,r[1](n)}}),"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,i)=>{var r,a,[o,n,l]=i,c=0;if(o.some((t=>0!==e[t]))){for(r in n)s.o(n,r)&&(s.m[r]=n[r]);if(l)var d=l(s)}for(t&&t(i);c<o.length;c++)a=o[c],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(d)},i=self.webpackChunkone_web=self.webpackChunkone_web||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var o=s.O(void 0,[1804],(()=>s(78563)));o=s.O(o)})();
