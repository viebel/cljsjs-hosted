/** 
 * Copyright 2010 Duan Lian (blazeblue@gmail.com)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Remote service interface of NIH Chemical Identifier Resolver(http://cactus.nci.nih.gov/chemical/structure)
 */

goog.provide('kemia.service.Identifier');

goog.require('goog.net.Jsonp');

kemia.service.Identifier = function(){
	
}

kemia.service.Identifier.query = function(payload,opt_replyCallback,opt_errorCallback) {
	  var jsonp = new goog.net.Jsonp(
	    'http://chemhack.com/service/test.php');
	  //var payload = { 'format': 'json' };
	  jsonp.send(payload,opt_replyCallback,opt_errorCallback);
};

