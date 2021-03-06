// Copyright 2012 Armagan Amcalar. All Rights Reserved.
//
// This file is part of Pedalboard.js.
//
// Pedalboard.js is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Pedalboard.js is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Pedalboard.js.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @fileoverview Base pot component.
 */


goog.provide('pb.pot.Linear');
goog.require('pb.pot.LinearModel');
goog.require('pb.pot.Pot');



/**
 * Linear pot component models a linear potentiometer.
 *
 * @constructor
 * @extends {pb.pot.Pot}
 *
 * @param {AudioParam|Function} param Audio parameter this pot will adjust. Can be gain, etc. If more complex
 *     calculation is desired, one can pass a callback function which will be triggered each time the value of this pot
 *     changes.
 * @param {string} name Name of the pot. Will be written under it.
 * @param {number} multiplier The multiplier of the effect. Some effects (such as gain) need this to be on the order of
 *                       thousands.
 * @param {string=} opt_size Size of the pot. Might be one of the values in pb.pot.Pot.Size enum. Default is REGULAR.
 *     This size is added to the pot's class names for easier styling.
 */
pb.pot.Linear = function(param, name, multiplier, opt_size) {
    goog.base(this, param, name, multiplier, opt_size);
};
goog.inherits(pb.pot.Linear, pb.pot.Pot);


/**
 * @type {function(new: pb.pot.LinearModel, (AudioParam|Function), string, number)}
 *       The component model this pot component will work with.
 * @override
 */
pb.pot.Linear.prototype.modelClass = pb.pot.LinearModel;
