const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.query('tetris-game').search({_limit: 10, _sort: 'score:desc' })
    } else {
      entities = await strapi.query('tetris-game').find({_limit: 10, _sort: 'score:desc' })
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models['tetris-game'] }));
  },
};
// strapi.query('restaurant').find({ date_gt: '2019-01-01T00:00:00Z', _sort: 'name:desc' });
