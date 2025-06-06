/*
 *
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
 *
*/

module.exports = {
    id: 'ios',
    bootstrap: function () {
        // Attach the console polyfill that is iOS-only to window.console
        // see the file under plugin/ios/console.js
        require('cordova/modulemapper').clobbers('cordova/plugin/ios/console', 'window.console');

        // Attach the wkwebkit utility to window.WkWebView
        // see the file under plugin/ios/wkwebkit.js
        require('cordova/modulemapper').clobbers('cordova/plugin/ios/wkwebkit', 'window.WkWebView');

        // Attach the splashscreen utility to window.navigator.splashscreen
        // see the file under plugin/ios/launchscreen.js
        require('cordova/modulemapper').clobbers('cordova/plugin/ios/launchscreen', 'navigator.splashscreen');

        // Attach the internal statusBar utility to window.statusbar
        // see the file under plugin/ios/statusbar.js
        require('cordova/modulemapper').clobbers('cordova/plugin/ios/statusbar', 'window.statusbar');

        require('cordova/channel').onNativeReady.fire();
    }
};
