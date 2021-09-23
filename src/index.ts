/// <reference types="arcgis-js-api" />

import ArcGISMap from 'esri/Map';
import MapView from 'esri/views/MapView';
import WebMap from 'esri/WebMap';
import FeatureLayer from 'esri/layers/FeatureLayer';
import Search from 'esri/widgets/Search';
import Graphic from 'esri/Graphic';
import { getSearchGeometry } from './components/lookupUtils';
import { TextSymbol } from 'esri/symbols';
import LookupResults from './components/LookupResults';
import SimpleRenderer from 'esri/renderers/SimpleRenderer';
import UniqueValueRenderer from 'esri/renderers/UniqueValueRenderer';
// import { VectorFieldRenderer } from 'esri/rasterRenderers';
// import VectorTileLayer from 'esri/layers/VectorTileLayer';
import GroupLayer from 'esri/layers/GroupLayer';
import BasemapToggle from 'esri/widgets/BasemapToggle';
import Expand from 'esri/widgets/Expand';
import Legend from 'esri/widgets/Legend';
import * as watchUtils from 'esri/core/watchUtils';
import LabelClass from 'esri/layers/support/LabelClass';
// import Share from './Components/Share/Share';

import esri = __esri;

let initialExtent: esri.Extent;
// let searchResults: Graphic[];
let graphicMarker: Graphic;
let graphicLabel: Graphic;
let searchPoint: esri.ScreenPoint;
let rsbRenderer: SimpleRenderer;
let rsbDSRenderer: SimpleRenderer;
let swChannelRenderer: UniqueValueRenderer;
let swGravityMainRenderer: UniqueValueRenderer;
let swChannelLabel: LabelClass;

let app_state = {
    panelActive: true,
    panel: <HTMLElement>document.getElementById('sp')?.parentElement,
    noPadding: { left: 0, top: 0, right: 0, bottom:0 },
    initPadding: { left: 0, top: 0, right: 0, bottom: 0}
};

// regional subbasins layer
rsbRenderer = {
    type: 'simple',
    symbol: { 
        type: "simple-fill",
        style: "backward-diagonal",
        outline: { width: 2 },
        color: [38, 35, 52, 0.25]
    }
}

rsbDSRenderer = {
    type: 'simple',
    symbol: {
        // type: "simple-fill",
        // outline: { width: 1, color: [25, 111, 16, 1] },
        // color: [57, 223, 69, 0.25]
        type: "simple-fill",
        outline: { width: 2, color: [253, 39, 255, 1] },
        color: [244, 113, 208, 0.25]
    }
}

swGravityMainRenderer = {
    type: 'unique-value',
    field: 'SurfaceWater',
    legendOptions: {
        title: "Type"
    },
    // defaultSymbol:{ type: 'simple-line'},
    uniqueValueInfos: [{
        value: "1",
        label: 'Open Conveyance',
        symbol: {
          type: "simple-line",
          style: "dash",
          color: [252, 183, 6, 1] 
        }
    },{
        value: "2",
        label: 'Closed Conveyance',
        symbol: {
          type: "simple-line", 
          color: [252, 183, 6, 1] 
        }
    }]
}

swChannelRenderer = {
    type: 'unique-value',
    field: 'SurfaceWater',
    legendOptions: {
        title: "Type"
    },
    // defaultSymbol:{ type: 'simple-line'},
    uniqueValueInfos: [{
        value: "1",
        label: 'Open Conveyance',
        symbol: {
          type: "simple-line",
          style: "dash",
          color: [51, 165, 250, 1] 
        }
    },{
        value: "2",
        label: 'Closed Conveyance',
        symbol: {
          type: "simple-line", 
          color: [51, 165, 250, 1]
        }
    }]
}

const rsbLayer = new FeatureLayer({
    portalItem: {
        id: '0d7651f1f79f4fd79839db3d04c18f3a',
    },
    outFields: ['Watershed','CatchIDN', 'AreaAcre'],
    visible: false,
    renderer: rsbRenderer,
    title: 'Regional Subbasin'
});

const rsbDSLayer = new FeatureLayer({
    portalItem: {
        id: 'f37d7323d6d54c8982287ee6e331dedf',
    },
    outFields: ['CatchIDN'],
    visible: false,
    renderer: rsbDSRenderer,
    title: 'Downstream'
});

const rsbDSStore = new FeatureLayer({
    portalItem: {
        id: 'f37d7323d6d54c8982287ee6e331dedf',
    },
    outFields: ['CatchIDN'],
    visible: false
});

// const swLayer = new GroupLayer({
//     portalItem: {
//         id: '25df29ab22a24ae1ade1bcc4efb3a921',
//     },
//     title: 'Stormwater Network'
// });

// const swInletLayer = new FeatureLayer({
//     url: 'https://ocgis.com/arcpub/rest/services/Flood/Stormwater_Network/FeatureServer/0',
//     title: 'Inlets'
// });

// const swDischargeLayer = new FeatureLayer({
//     url: 'https://ocgis.com/arcpub/rest/services/Flood/Stormwater_Network/FeatureServer/2',
//     title: 'Outlets'
// });

// const swManholeLayer = new FeatureLayer({
//     url: 'https://ocgis.com/arcpub/rest/services/Flood/Stormwater_Network/FeatureServer/3',
//     title: 'Manholes'
// });

const swGravityMainLayer = new FeatureLayer({
    url: 'https://ocgis.com/arcpub/rest/services/Flood/Stormwater_Network/FeatureServer/7',
    title: 'Local Drainage',
    renderer: swGravityMainRenderer
});

// const swChannelLayer = new FeatureLayer({
//     url: 'https://ocgis.com/arcpub/rest/services/Flood/Stormwater_Network/FeatureServer/8',
//     title: 'Regional Channels',
//     renderer: swChannelRenderer
// });

// const swChannelLabelLayer = new FeatureLayer({
//     url: 'https://ocgis.com/arcpub/rest/services/Flood/Stormwater_Network/FeatureServer/8',
//     title: 'Regional Channels',
//     renderer: swChannelRenderer,
//     visible: false
// });

swChannelLabel = {  // autocasts as new LabelClass()
    symbol: {
      type: "text",  // autocasts as new TextSymbol()
      color: "white",
      haloColor: "blue",
      haloSize: 1,
      font: {  // autocast as new Font()
         family: "Ubuntu Mono",
         size: 14,
         weight: "bold"
       }
    },
    labelPlacement: "above-right",
    labelExpressionInfo: {
      expression: "$feature.FACILITYNAME"
    },
    maxScale: 0,
    minScale: 25000000,
    where: "1=1"
};

const swChannelLayer = new FeatureLayer({
    url: 'https://ocgis.com/arcpub/rest/services/Flood/Stormwater_Network/FeatureServer/8',
    title: 'Regional Channels',
    renderer: swChannelRenderer,
    labelingInfo: swChannelLabel
});

const swLayer = new GroupLayer({
    // layers: [swChannelLayer, swGravityMainLayer, swManholeLayer, swDischargeLayer, swInletLayer],
    layers: [swChannelLayer, swGravityMainLayer],
    title: 'Stormwater Network'
})

const countyLayer = new FeatureLayer({
    // url: 'https://services.arcgis.com/UXmFoWC7yDHcDN5Q/arcgis/rest/services/CountyBoundary/FeatureServer'
    url: 'https://services.arcgis.com/BLN4oKB0N1YSgvY8/arcgis/rest/services/Counties_in_California/FeatureServer/0',
    definitionExpression: "CountyName = 'Orange'",
    outFields: ['CountyName'],
    title: 'Orange County Boundary'
});

// const vtTopo = new VectorTileLayer({
//     portalItem: {
//         id: '7dc6cea0b1764a1f9af2e679f642f0f5'
//     } 
// });

// const baseGroup = new GroupLayer({
//     layers: [vtTopo, countyLayer],
//     blendMode: 'destination-out'
// });


// H2OC webmap
// const webmap = new WebMap({
//     portalItem: {
//         id: 'c321a41bb1114c7ea0ad4c6bfe77d931'
//     }
// })

const watershedLayer = new FeatureLayer({
    portalItem: {
        id: '0d7651f1f79f4fd79839db3d04c18f3a',
    },
    layerId: 1,
    opacity: .5,
    outFields: ['Watershed'],
    title: 'Watersheds'
});

const map = new ArcGISMap({
    basemap: 'topo-vector',
    layers: [countyLayer, watershedLayer, swLayer, rsbDSLayer, rsbLayer]
});

// View

const view = new MapView({
    map: map,
    center: [-117.760746, 33.70296],
    zoom: 9,
    container: 'viewDiv'
});

view.popup = null as any;

const extentHandler = view.watch('extent', () => {
    extentHandler.remove();
    initialExtent = view.extent.clone();
})

function resetExtent() {
    if (initialExtent) {
        view.goTo(initialExtent);
    }
}

const basemap_toggle = new BasemapToggle({
    view: view, 
    nextBasemap: "hybrid" 
});

view.ui.add(basemap_toggle, "bottom-right");
view.ui.move([ "zoom", basemap_toggle], "bottom-right");

var legend = new Legend({
    view: view
});

var expandLegend = new Expand({
    expandIconClass: "esri-icon-left-arrow",
    view: view,
    content: legend,
    label: "legend"
});

view.ui.add([expandLegend], "top-right");

let switchMap = document.createElement('div');
switchMap.id = 'switchMap';
switchMap.className = "esri-icon-collection esri-widget--button esri-widget esri-interactive esri-icon-search";
view.ui.add(switchMap, "top-left");

// Search

const searchProperties: esri.widgetsSearchProperties = {
    view: view,
    resultGraphicEnabled: false,
    autoSelect: false,
    popupEnabled: false,
    container: "search"
};

const searchWidget = new Search(searchProperties);

const searchHandle = searchWidget.viewModel.watch('state', (state) => {

    if (state === 'ready') {

        searchWidget.on('search-clear', () => {
            cleanUpResults();
            resetExtent();
        });

        searchWidget.on('search-complete', async (results) => {
            searchDisplay(results);
        });

        view.on('click', async (e) => {
            cleanUpResults();
            // searchPoint = e.mapPoint;
            searchPoint = {x: e.mapPoint.x, y: e.mapPoint.y}
            searchWidget.search(e.mapPoint);
        });

        searchHandle.remove();

    }
});

// Results

let lookupResults = new LookupResults({
    view: view,
    rsbLayer: rsbLayer,
    rsbDSLayer: rsbDSLayer,
    rsbDSStore: rsbDSStore,
    channelLayer: swChannelLayer,
    watershedLayer: watershedLayer,
    container: 'results'
});

function cleanUpResults() {
    view.graphics.removeAll();
    rsbLayer.visible = false;
    rsbDSLayer.visible = false;
    swChannelLayer.definitionExpression = "1=1";
    watershedLayer.visible = false;
    lookupResults.clearResults();
}

async function searchDisplay(results: any) {

    if (results.numResults > 0) {

        const feature = await getSearchGeometry({
            view: view,
            results
        });

        createGraphicMarker(feature);
        createGraphicLabel(feature);
        generateSearchResults(feature);
    }    
}

async function generateSearchResults(location: esri.Graphic) {
    //handle intro panel hide?

    //call main search
    lookupResults.queryFeatures(location, searchPoint);
}

// Graphics

async function createGraphicMarker(graphic: esri.Graphic) {
    if (graphicMarker) {
        view.graphics.remove(graphicMarker);
    }
    if (graphic.geometry) {
        graphicMarker = new Graphic({
            geometry: graphic.geometry,
            symbol: new TextSymbol({
                color: 'black',
                haloColor: 'white',
                text: '\ue61d',
                yoffset: 10,
                font: {
                    size: 20,
                    family: 'calcite-web-icons'
                }
            })
        });
        view.graphics.add(graphicMarker);
    }
}

async function createGraphicLabel(graphic: esri.Graphic) {
    if (graphicLabel) {
        view.graphics.remove(graphicLabel);
    }

    const address = getAddressText(graphic);

    graphicLabel = new Graphic({
        geometry:graphic.geometry,
        symbol: new TextSymbol({
            font: {
                size: 12
            },
            text: address,
            haloColor: "#595959",
            haloSize: "1px",
            color: "white",
            horizontalAlignment: 'center'
        })
    });

    view.graphics.add(graphicLabel);
}

function getAddressText(graphic: esri.Graphic): string {
    let address = null;
    if (graphic?.attributes?.Match_addr) {
        // replace first comma with a new line character
        address = graphic.attributes.Match_addr.replace(',', '\n');
    } else if (graphic?.attributes?.name) {
        address = graphic.attributes.name;
    } else if (graphic?.layer instanceof FeatureLayer) {
        if (graphic.layer.displayField !== null && graphic.layer.displayField !== "") {
            address = graphic.attributes[graphic.layer.displayField] || null;
        } else {

            // get the first string field
            graphic.layer.fields.some((field) => {
                if (field.type === 'string') {
                    address = graphic.attributes[field.name];
                    return true;
                }
            });
        }
    }
    return address;

}

// Responsive

view.when(() => {
    app_state.initPadding = view.padding;
    // console.log(view.padding);
});

view.breakpoints = {
    xsmall: 480, // 544
    small: 860,
    medium: 1024,
    large: 1200
};

watchUtils.init(view, 'widthBreakpoint', function(breakpoint){
    // console.log(breakpoint);
    switch (breakpoint) {
        case "xsmall":
            setViewResponsive(true);
            break;
        case "small":
        case "medium":
        case "large":
        case "xlarge":
            setViewResponsive(false);
            break;
        default:
      }
});

function setViewResponsive(activate: boolean): void {
    const mapElement = document.getElementById('viewDiv');
    const switchElement = document.getElementById('switch');
    if(activate) {
        // console.log('here')
        // mapElement!.classList.add("invisible");
        view.container.classList.add('tablet-hide');
        switchElement!.classList.remove("invisible");
        switchMap.classList.remove('invisible');
    } else {
        // console.log('out')
        // mapElement!.classList.remove("invisible");
        view.container.classList.remove('tablet-hide');
        switchElement!.classList.add("invisible");
        switchMap.classList.add('invisible');
    }
    
}

function panelToggle(element: HTMLElement, force?: string): void {
    let invisible = element.classList.contains('invisible');
    // console.log(invisible, force);
    if (force === 'open') {
        invisible = true
    } else if (force === 'close') {
        invisible = false
    }
    
    if(invisible) {
        element.classList.remove('invisible');
        view.padding = app_state.initPadding;
        view.container.classList.add('tablet-hide');
    } else {
        element.classList.add('invisible');
        view.padding = app_state.noPadding;
        view.container.classList.remove('tablet-hide');
    }

}

document.getElementById('switch')!.addEventListener("click", function() {
    console.log('click');
    // console.log(app_state.panel);
    panelToggle(app_state.panel);
});

document.getElementById('switchMap')!.addEventListener("click", function() {
    console.log('click');
    // console.log(app_state.panel);
    panelToggle(app_state.panel);
});

// Share
// const share = new Share({
//     view,
//     container: 'share'
// });