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
import {
  LayerConf,
  WfsLayerConf,
  WmsLayerConf,
  ZoomConfigs,
  ZoomConfigsFixed,
  ZoomConfigsLinear,
  ZoomConfigsExp,
  XyzLayerConf,
} from './types';

export const isWmsLayerConf = (
  layerConf: LayerConf,
): layerConf is WmsLayerConf => layerConf.type === 'WMS';

export const isWfsLayerConf = (
  layerConf: LayerConf,
): layerConf is WfsLayerConf => layerConf.type === 'WFS';

export const isXyzLayerConf = (
  layerConf: LayerConf,
): layerConf is XyzLayerConf => layerConf.type === 'XYZ';

export const isZoomConfigsFixed = (
  zoomConfigs: ZoomConfigs,
): zoomConfigs is ZoomConfigsFixed => zoomConfigs.type === 'FIXED';

export const isZoomConfigsLinear = (
  zoomConfigs: ZoomConfigs,
): zoomConfigs is ZoomConfigsLinear => zoomConfigs.type === 'LINEAR';

export const isZoomConfigsExp = (
  zoomConfigs: ZoomConfigs,
): zoomConfigs is ZoomConfigsExp => zoomConfigs.type === 'EXP';
