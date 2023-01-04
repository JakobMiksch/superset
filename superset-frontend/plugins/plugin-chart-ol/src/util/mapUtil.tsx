/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Map } from 'ol';
import { ChartConfig } from '../types';
import {
  convertLocationsToFeatures,
  getExtendFromFeatures,
} from './geometryUtil';

// default map extent of world if no features are found
// TODO: move to generic config file or plugin configuration
// TODO: adapt to CRS other than Web Mercator
const defaultExtent = [-16000000, -7279000, 20500000, 11000000];

/**
 * Util for map related operations.
 */

export const fitMapToCharts = (olMap: Map, chartConfigs: ChartConfig) => {
  const view = olMap.getView();

  const locations = Object.keys(chartConfigs).map(c => JSON.parse(c));
  const features = convertLocationsToFeatures(locations);
  const extent = getExtendFromFeatures(features) || defaultExtent;

  view.fit(extent, {
    // tested for a desktop size monitor
    size: [250, 250],
  });
};
