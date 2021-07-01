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
  '10 10 6 * * *': async () => {
    const d = new Date()

    const daily = await strapi.api.test.services.test.find(
      // {createdAt: new Date()}
      );
      const daily2 = daily.filter(item =>{

        const currentYear = d.getFullYear()
        const currentMon = d.getMonth() + 1
        let currentDay = d.getDate()
        if(d.getDate() === 1){
          if(currentMon === 1 || currentMon === 3 || currentMon === 5 || currentMon === 7 || currentMon === 8 || currentMon === 10 || currentMon === 12){
            currentDay = 31
          }else if(currentMon === 4 || currentMon === 6 || currentMon === 9 || currentMon === 11 ){
            currentDay = 30
          }else if(currentMon === 2){
            currentDay = 28
          }
        }else{
          currentDay = currentDay - 1
        }

        const isYear = item.createdAt.getFullYear() === currentYear
        const isMonth = item.createdAt.getMonth() + 1 === currentMon
        const isDay = item.createdAt.getDate() === currentDay

        if(isYear && isMonth && isDay){
          return item
        }
      })
      console.log(daily2)

      let contect = daily2.map((item, index) => (`
        <h3>visitor${index + 1}:</h3>
        country: ${item.visitor_country}<br/>
        city: ${item.visitor_city}<br/>
        ip: ${item.visitor_ip}<br/>
        postal: ${item.visitor_postal}<br/>
        count: ${item.day_count}<br/>
        date: ${currentYear}-${currentMon}-${currentDay}<br/>
      `)).toString()

      await strapi.plugins['email'].services.email.send({
      to:"nanjinzhu666@gmail.com",
      subject: 'daily visitors',
      html: contect
    })
  }
};
