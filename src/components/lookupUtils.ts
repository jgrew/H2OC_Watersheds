import Graphic from 'esri/Graphic';
import FeatureLayer from 'esri/layers/FeatureLayer';
import { resolve } from 'esri/core/promiseUtils';

import esri = __esri;
import FeatureEffect = require('esri/views/layers/support/FeatureEffect');

interface SearchGeometryProps {
	view: esri.MapView;
	results?: any;
}

export async function getSearchGeometry(props: SearchGeometryProps): Promise<esri.Graphic> {
    const { results, view } = props;

    const graphic = _getResultGeometries(results);
    let displayGraphic = graphic;

    if (graphic.geometry && graphic.geometry.type && graphic.geometry.type === 'polygon') {
        displayGraphic = new Graphic({ geometry: graphic.geometry.extent.center, attributes: graphic.attributes });
    }

    return resolve(displayGraphic);
}

function _getResultGeometries(results: any): esri.Graphic {
	let feature = null;
	results.results.some((searchResults: any) => {
		return searchResults.results.some((r: any) => {
			if (r.feature) {
				feature = r.feature;
				//if (r.name && feature.attributes && feature.attributes.Match_addr) {
				//feature.attributes.name = r.name;
				//}
				return true;
			} else {
				return false;
			}
		});
	});
	return feature;
}