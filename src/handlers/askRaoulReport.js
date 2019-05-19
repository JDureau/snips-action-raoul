const api = require('../api')
const { i18nFactory } = require('../factories')
const { message, getPregnancyInfo } = require('../utils')
// const handlers = require('../handlers')

module.exports = async function (msg, flow) {
    const weekInfo = getPregnancyInfo.getWeekInfo()
    const i18n = i18nFactory.get()
    // flow.continue('Joseph:askAge', handlers.askAge)
    // flow.continue('Joseph:askWhichWeek', handlers.askWhichWeek)
    // flow.continue('Joseph:askAgeAmenorrhea', handlers.askAgeAmenorrhea)
    // flow.continue('Joseph:askWhichWeekAmenorrhea', handlers.askWhichWeekAmenorrhea)

    const week = weekInfo.week
    const weight = weekInfo.weight
    const size = weekInfo.size

    response = i18n('raoul.report', {
      week: week,
      size: size,
      weight: weight
    })

    flow.end()
    return response
}
