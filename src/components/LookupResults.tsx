import { property, subclass } from 'esri/core/accessorSupport/decorators';
import { renderable, tsx } from 'esri/widgets/support/widget';
// import { getDistances } from '../utilites/geometryUtils';
// import { resolve } from 'esri/core/promiseUtils';

// import GroupedAccordion, { FeatureResults } from './GroupedAccordion';
// import { ActionButton } from "./Accordion";
// import { ApplicationConfig } from 'ApplicationBase/interfaces';
// import FeatureAccordion from './FeatureAccordion';
import FeatureEffect from 'esri/views/layers/support/FeatureEffect';
import FeatureFilter from 'esri/views/layers/support/FeatureFilter';
import Handles from 'esri/core/Handles';
import Query from 'esri/tasks/support/Query';
import Widget from 'esri/widgets/Widget';
import Graphic from 'esri/Graphic';
import Feature from 'esri/widgets/Feature';

import esri = __esri;

type State = 'init' | 'loading' | 'ready' | 'warn' | 'error';

interface LookupResultsProps extends esri.WidgetProperties {
    view: esri.MapView;
    lookupGraphics?: Graphic;
    rsbLayer?: esri.FeatureLayer;
    rsbDSLayer?: esri.FeatureLayer;
    rsbDSStore?: esri.FeatureLayer;
    channelLayer?: esri.FeatureLayer;
    watershedLayer?: esri.FeatureLayer;
}

@subclass('app.LookupResults')
class LookupResults extends Widget {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    @property() lookupGraphics = null;

    @renderable()
    @property()
    location: esri.Graphic;

    @property() view: esri.MapView;

    @property()
    @renderable()
    state: State = 'init';

    @property()
    // @renderable()
    rsbLayer: esri.FeatureLayer;

    @property()
    // @renderable()
    rsbDSLayer: esri.FeatureLayer;

    @property()
    rsbDSStore: esri.FeatureLayer;

    @property()
    // @renderable()
    channelLayer: esri.FeatureLayer;

    @property()
    watershedLayer: esri.FeatureLayer;

    //--------------------------------------------------------------------------
    //
    // Variables
    //
    //--------------------------------------------------------------------------
    _catchidn = null;
    _watershed = null;
    _areaacre: number;
    // _rsbDSLayer: esri.FeatureLayer;
    _dsQuery: esri.Query;
    _rsbQuery: esri.Query;
    _wsQuery: esri.Query;
    _featureResults: Feature[];
    _empty: boolean = true;
    _zoomFactor: number = 4;
    _viewPoint: esri.Viewpoint;
    _view: esri.MapView;
    // _accordion: GroupedAccordion | FeatureAccordion = null;
    // _bufferGraphic: esri.Graphic = null;
    _handles: Handles = new Handles();
    _drainsTo = [
        { to: 'The Pacific Ocean', watershed: 'Aliso' },
        { to: 'Anaheim Bay / Huntington Harbor', watershed: 'Anaheim Bay' },
        { to: 'Newport Bay', watershed: 'Newport Bay' },
        { to: 'The Pacific Ocean', watershed: 'Coyote Creek' },
        { to: 'The Pacific Ocean', watershed: 'Dana Point' },
        { to: 'The Pacific Ocean', watershed: 'Laguna Coast' },
        { to: 'The Pacific Ocean', watershed: 'Newport Coastal' },
        { to: 'The Pacific Ocean', watershed: 'San Clemente' },
        { to: 'The Pacific Ocean', watershed: 'San Juan Creek' },
        { to: 'The Pacific Ocean', watershed: 'San Mateo' },
        { to: 'The Pacific Ocean', watershed: 'Santa Ana River' },
    ];

    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    constructor(props: LookupResultsProps) {
        super(props);

        if (props.view && props.view.viewpoint) {
            this._viewPoint = props.view.viewpoint.clone();
            this._view = props.view;
        } else {
            // wait for view point
            const key = 'viewpoint-watch';
            this._handles.add(
                props.view.watch('viewpoint', () => {
                    this._handles.remove(key);
                    this._viewPoint = props.view.viewpoint.clone();
                    this._view = props.view;
                })
            );
        }
        // console.log('props ', props.rsbDSLayer);
        // this._rsbDSLayer ? props.rsbDSLayer : null;
        this._dsQuery = props.rsbDSStore!.createQuery();
        this._rsbQuery = props.rsbLayer!.createQuery();
        this._wsQuery = props.watershedLayer!.createQuery();
    }

    render() {
        const loader =
            this.state === 'loading' ? (
                <div style="display: inline-flex;align-items: center;justify-content: left;width: 100%;">
                    <calcite-loader
                        scale="m"
                        inline=""
                        active=""
                    ></calcite-loader>
                    <span style="margin:0 10px">Loading Results</span>
                </div>
            ) : null;

        const ready = this.state === 'ready' || false;

        // const { resultsPanelPreText, resultsPanelPostText, noResultsMessage } = this.config;
        // // No Results
        // let errorText: string = null;
        // if (this._empty && ready) {
        // 	errorText = noResultsMessage || i18n.noFeatures;
        // 	if (this.mapPanel && this.mapPanel.isMobileView) {
        // 		// Add no results message to the map in mobile view
        // 		this.mapPanel.message = errorText;
        // 	}
        // }
        // const accordion = ready ? (
        // 	<div key="accordion">
        // 		<p key="errorText" class={CSS.messageText} innerHTML={errorText} />
        // 		<div key="detailAccordion" bind={this} afterCreate={!this._empty ? this._addDetailAccordion : null} />
        // 	</div>
        // ) : null;
        // const toggleLinks = this._featureResults ? this.createToggleLinks() : null;

        // const preText = resultsPanelPreText ? this.createPreText() : null;
        // const postText = resultsPanelPostText ? this.createPostText() : null;
        // const toggle = !this._empty ? this.createToggle() : null;

        // const error =
        //     this.state === 'error' || 'warn' ? this.createErrorDiv() : null;

        const results = this.state === 'ready' ? this.createResultDiv() : null;

        // const post = this.createPost();

        return (
            <div key="loader">
                {loader}
                {/* {toggle} */}
                {/*{preText}
				{accordion}
				{postText} */}
                {results}
                {/* {error} */}
                {/* {post} */}
            </div>
        );
    }

    queryFeatures(location: esri.Graphic, searchPoint: esri.ScreenPoint) {
        // console.log('queryFeatures start');
        this.state = 'loading';
        const geometry = location.geometry;
        // const query: esri.Query = this.rsbLayer.createQuery();

        this._rsbQuery.geometry = geometry;
        this._rsbQuery.spatialRelationship = 'intersects';
        this._rsbQuery.outFields = ['CatchIDN', 'AreaAcre', 'Watershed'];

        this._wsQuery.geometry = geometry;
        this._wsQuery.spatialRelationship = 'intersects';

        this.rsbLayer
            .queryFeatures(this._rsbQuery)
            .then((result) => {
                if (result.features.length > 0) {
                    this._empty = false;
                    this._catchidn = result.features[0].attributes['CatchIDN'];
                    this._watershed =
                        result.features[0].attributes['Watershed'];
                    this._areaacre = result.features[0].attributes['AreaAcre'];
                    const resultGeometry = result.features[0].geometry;
                    console.log('Target CatchIDN = ', this._catchidn);
                    this._filterLayer(this.rsbLayer, this._rsbQuery);
                    this._zoomToGeometry(resultGeometry);

                    this._filterLayer(this.watershedLayer, this._wsQuery);

                    this._dsQuery.where = 'CatchIDN = ' + this._catchidn;
                    this._dsQuery.outFields = ['CatchIDN'];

                    this._filterLayer(this.rsbDSLayer, this._dsQuery);

                    this.createResultDiv();

                    this.rsbDSStore.queryFeatures(this._dsQuery).then((r) => {
                        const geometry = r.features[0].geometry;

                        const chQuery: esri.Query = this.channelLayer.createQuery();
                        chQuery.spatialRelationship = 'intersects';
                        chQuery.geometry = geometry;
                        chQuery.outFields = ['FACILITYNAME'];

                        // this._filterChannels(this.channelLayer, chQuery)
                        // let swChannelLabel = {  // autocasts as new LabelClass()
                        // 	symbol: {
                        // 	  type: "text",  // autocasts as new TextSymbol()
                        // 	  color: "white",
                        // 	  haloColor: "blue",
                        // 	  haloSize: 1,
                        // 	  font: {  // autocast as new Font()
                        // 		 family: "Ubuntu Mono",
                        // 		 size: 14,
                        // 		 weight: "bold"
                        // 	   }
                        // 	},
                        // 	labelPlacement: "above-right",
                        // 	labelExpressionInfo: {
                        // 	  expression: "$feature.FACILITYNAME"
                        // 	},
                        // 	maxScale: 0,
                        // 	minScale: 25000000,
                        // 	where: "1=0"
                        // };

                        // let labelClass = this.channelLayer.labelingInfo;
                    });

                    this.state = 'ready';
                } else {
                    this._empty = true;
                    this.state = 'warn';
                }
            })
            .catch((error) => {
                console.log('Error querying rsb layer', error);
                this.state = 'error';
            });
    }

    private async _filterLayer(layer: esri.FeatureLayer, query: esri.Query) {
        layer.visible = true;
        const { geometry, spatialRelationship, where } = query;
        const props: esri.FeatureFilterProperties = {
            geometry,
            spatialRelationship,
            where,
        };

        this.view
            .whenLayerView(layer as esri.FeatureLayer)
            .then((layerView) => {
                const filter = new FeatureFilter(props);
                const effect = new FeatureEffect({
                    filter: filter,
                });

                layerView.filter = filter;
                effect.filter = filter;

                if (layer.title === 'Downstream') {
                    layer.definitionExpression = where;
                } else if (layer.title === 'Watersheds') {
                    effect.includedEffect = [
                        {
                            scale: 36978595,
                            value: 'drop-shadow(3px, 3px, 4px)',
                        },
                        {
                            scale: 18489297,
                            value: 'drop-shadow(2px, 2px, 3px)',
                        },
                        {
                            scale: 4622324,
                            value: 'drop-shadow(1px, 1px, 2px)',
                        },
                    ];
                    layerView.effect = effect;
                }
                // this.rsbDSLayer.definitionExpression = where;
                // layer.queryFeatures().then(r => {
                // 	console.log(layer);
                // 	console.log(r.features[0].attributes['CatchIDN'])
                // });
            });
    }

    private async _filterChannels(layer: esri.FeatureLayer, query: esri.Query) {
        layer.visible = true;
        const { geometry, spatialRelationship, where } = query;
        const props: esri.FeatureFilterProperties = {
            geometry,
            spatialRelationship,
            where,
        };

        // this.view.whenLayerView(layer as esri.FeatureLayer).then(layerView => {
        //     const filter = new FeatureFilter(props);
        //     const effect = new FeatureEffect({
        // 		filter: filter,
        // 		includedEffect: "drop-shadow(3px, 3px, 3px, black)",
        // 		excludedEffect: "blur(1px) brightness(65%)"
        // 	});

        //     layerView.filter = filter;
        //     effect.filter = filter;

        // })
    }

    createToggle() {
        // return (
        // 	<div key='toggleBar' class='toggle-content-tools toggle-content-btn'>
        // 		<calcite-action
        // 			appearance="solid"
        // 			dir="ltr"
        // 			icon="arrow"
        // 			label="Open"
        // 			scale="m"
        // 			theme="light"
        // 		></calcite-action>
        // 	</div>
        // )
    }

    createResultDiv() {
        // return (
        // 	this._empty ? null : <calcite-card class='animate-fade-in'>
        // 		<h3 slot="title">Search Results</h3>
        // 		<span slot="subtitle" styly="text-align:left;">The location you selected is in drainage basin <strong><calcite-link bind={this} onclick={this._zoomToFeature}>#{this._catchidn}</calcite-link></strong>. It is <strong>{Math.round(this._areaacre)}</strong> acres in size and is part of the <strong>{this._watershed}</strong> watershed.</span>
        // 		{/* <calcite-link id='zoomDS' theme="dark" slot="footer-leading">Zoom to downstream watershed</calcite-link> */}
        // 		<calcite-link theme='dark' slot='footer-leading' bind={this} onclick={this._zoomToDSFeature}>Zoom to downstream watershed</calcite-link>
        // 	</calcite-card>
        // )

        let drainsTo = this._drainsTo.find(
            (el) => el.watershed === this._watershed
        );

        return this._empty ? null : (
            <div class="panel animate-fade-in">
                <div class="phone-column-6 tablet-column-12 column-10 padding-left-0 padding-right-0">
                    <h3>Search Results</h3>
                    <p>
                        The location you selected is in drainage basin{' '}
                        <strong>
                            {/* <button
                                class="btn-link"
                                bind={this}
                                onclick={this._zoomToFeature}
                            >
                                #{this._catchidn}
                            </button> */}
                            {this._catchidn}
                        </strong>
                        . It is <strong>{Math.round(this._areaacre)}</strong>{' '}
                        acres in size, is part of the{' '}
                        <strong>{this._watershed}</strong> watershed, and drains
                        to <strong>{drainsTo!['to']}</strong>.
                    </p>
                    {/* <button
                        class="btn btn-green"
                        bind={this}
                        onclick={this._zoomToDSFeature}
                    >
                        Zoom to downstream
                    </button> */}
                    <ul class={this.classes('no-bullet')}>
                        <li>
                            <button
                                class={this.classes(
                                    'btn-link',
                                    'icon-ui-zoom-in-magnifying-glass'
                                )}
                                bind={this}
                                onclick={this._zoomToFeature}
                            >
                                Zoom to subbasin
                            </button>
                        </li>
                        <li>
                            <button
                                class={this.classes(
                                    'btn-link',
                                    'icon-ui-zoom-in-magnifying-glass'
                                )}
                                bind={this}
                                onclick={this._zoomToDSFeature}
                            >
                                Zoom to downstream
                            </button>
                        </li>
                        <li>
                            <button
                                class={this.classes(
                                    'btn-link',
                                    'icon-ui-zoom-in-magnifying-glass'
                                )}
                                bind={this}
                                onclick={this._zoomToWatershed}
                            >
                                Zoom to watershed
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    createErrorDiv() {
        return this.state === 'warn' ? (
            <div class="alert .alert-yellow is-active">
                {' '}
                No results found
                <button class="alert-close">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        class="svg-icon"
                    >
                        <path d="M18.404 16l9.9 9.9-2.404 2.404-9.9-9.9-9.9 9.9L3.696 25.9l9.9-9.9-9.9-9.898L6.1 3.698l9.9 9.899 9.9-9.9 2.404 2.406-9.9 9.898z" />
                    </svg>
                </button>
            </div>
        ) : (
            <div class="alert .alert-red is-active">
                Error retrieving data
                <button class="alert-close">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        class="svg-icon"
                    >
                        <path d="M18.404 16l9.9 9.9-2.404 2.404-9.9-9.9-9.9 9.9L3.696 25.9l9.9-9.9-9.9-9.898L6.1 3.698l9.9 9.899 9.9-9.9 2.404 2.406-9.9 9.898z" />
                    </svg>
                </button>
            </div>
        );
    }

    createPost() {
        return <button class="btn">Switch to map</button>;
    }

    _createLink(node: HTMLElement) {
        node.addEventListener('click', () => {
            this.rsbDSLayer
                .when(function () {
                    return this.rsbDSLayer.queryExtent();
                })
                .then(function (response) {
                    this.view.goTo(response.extent);
                });
        });
    }

    clearResults() {
        this.state = 'init';
    }

    _zoomToGeometry(geometry: esri.Geometry) {
        this.view.goTo({ target: geometry });
    }

    _zoomToDSFeature = () => {
        this.view
            .whenLayerView(this.rsbDSLayer as esri.FeatureLayer)
            .then((layerView) => {
                layerView.queryExtent().then((response) => {
                    this.view.goTo(response.extent);
                });
            });
    };

    _zoomToFeature = () => {
        this.view
            .whenLayerView(this.rsbLayer as esri.FeatureLayer)
            .then((layerView) => {
                layerView.queryExtent().then((response) => {
                    this.view.goTo(response.extent);
                });
            });
    };

    _zoomToWatershed = () => {
        this.view
            .whenLayerView(this.watershedLayer as esri.FeatureLayer)
            .then((layerView) => {
                layerView.queryExtent().then((response) => {
                    this.view.goTo(response.extent);
                });
            });
    };
}

export = LookupResults;
