const api = require('../api')
const { i18nFactory } = require('../factories')
const { message, getPregnancyInfo } = require('../utils')
// const handlers = require('../handlers')

module.exports = async function (msg, flow) {
    const weekInfo = getPregnancyInfo.getWeekInfo()
    const i18n = i18nFactory.get()

    flow.continue('Joseph:askAge', (message, flow) =>
      return "test"
    )
    // flow.continue('Joseph:askWhichWeek', handlers.askWhichWeek)
    // flow.continue('Joseph:askAgeAmenorrhea', handlers.askAgeAmenorrhea)
    // flow.continue('Joseph:askWhichWeekAmenorrhea', handlers.askWhichWeekAmenorrhea)

    // dialog.publish('continue_session')
    return i18n('raoul.age', {
       week: weekInfo.week
    })
}
