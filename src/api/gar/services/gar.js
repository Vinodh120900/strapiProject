'use strict';

/**
 * gar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gar.gar');
