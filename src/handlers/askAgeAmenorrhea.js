const api = require('../api')
const { i18nFactory } = require('../factories')
const { message, getPregnancyInfo } = require('../utils')
const { askAge, askWhichWeek, askAgeAmenorrhea, askWhichWeekAmenorrhea } = require('./')

module.exports = async function (msg, flow) {
    const weekInfo = getPregnancyInfo.getWeekInfo()
    const i18n = i18nFactory.get()
    flow.continue('Joseph:askAge', askAge)
    flow.continue('Joseph:askWhichWeek', askWhichWeek)
    flow.continue('Joseph:askAgeAmenorrhea', askAgeAmenorrhea)
    flow.continue('Joseph:askWhichWeekAmenorrhea', askWhichWeekAmenorrhea)
    // flow.end()

    return i18n('raoul.age', {
       week: weekInfo.week + 2
    })
}
