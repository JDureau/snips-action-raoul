const api = require('../api')
const { i18nFactory } = require('../factories')
const { message, getPregnancyInfo } = require('../utils')

module.exports = async function (msg, flow) {
    const weekInfo = getPregnancyInfo.getWeekInfo()
    const i18n = i18nFactory.get()
    flow.continue()
    return i18n('raoul.weekNumber', {
       week: weekInfo.week + 2
    })
}
