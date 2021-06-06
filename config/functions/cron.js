'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  //  '59 59 23 * * *' every day 23:59:59
  '32 */1 * * *': async () => {
    console.log('consle every 5 min')
    const d = new Date()
    // const year = d.getFullYear()
    // const month = d.getMonth() + 1
    // const day = d.getDate()

    // console.log(`${year}/${month}/${day}`)

    // strapi.config.functions.docker();

    const daily = await strapi.api.test.services.test.find(
      // {createdAt: new Date()}
      );
      const daily2 = daily.filter(item =>{
        const isYear = item.createdAt.getFullYear() === d.getFullYear()
        const isMonth = item.createdAt.getMonth() + 1 === d.getMonth() + 1
        const isDay = item.createdAt.getDate() === d.getDate()
        // console.log(isYear)
        // console.log(isMonth)
        // console.log(isDay)
        if(isYear && isMonth && isDay){
          return item
        }
      })
    // console.log(daily2)
      const contect = daily2.map((item, index) => (`
        <h3>visitor${index + 1}:</h3>
        country: ${item.visitor_country}<br/>
        city: ${item.visitor_city}<br/>
        ip: ${item.visitor_ip}<br/>
        postal: ${item.visitor_postal}<br/>
        count: ${item.day_count}<br/>
      `)).toString()
      console.log(contect)
    await strapi.plugins['email'].services.email.send({
      to:"nanjinzhu666@gmail.com",
      subject: 'daily visitors',
      html: contect
    })
  }
};
