const api = require('../api')
const { i18nFactory } = require('../factories')
const { message, getPregnancyInfo } = require('../utils')
// const handlers = require('../handlers')

module.exports = async function (msg, flow) {
    const weekInfo = getPregnancyInfo.getWeekInfo()
    const i18n = i18nFactory.get()

    const thanks = msg.slots.find(slot => slot.slotName === 'thanks')

    if (thanks != undefined){
      response = i18n('raoul.greeting', {
        greeting: thanks.value.value
      })
    } else {
      response = ""
    }

    flow.end()
    return response
}
