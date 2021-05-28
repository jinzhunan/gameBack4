const { sanitizeEntity,parseMultipartData } = require('strapi-utils');




module.exports = {

    async create(ctx) {

      let entity;
      if (ctx.is('multipart')) {
        const { body, files } = ctx.request;
        entity = await strapi.services['memory-game'].create(body, { files });
      } else {
        entity = await strapi.services['memory-game'].create(ctx.request.body);
      }
      return sanitizeEntity(entity, { model: strapi.models['memory-game'] });
    },

    async update(ctx) {
        const { id } = ctx.params;
    
        let entity;
        if (ctx.is('multipart')) {
          const { body, files } = ctx.request


          entity = await strapi.services['memory-game'].update({ id }, body, {
            files,
          });
        } else {
          entity = await strapi.services['memory-game'].update({ id }, ctx.request.body);
        }
    
        return sanitizeEntity(entity, { model: strapi.models['memory-game'] });
    },
    

}
