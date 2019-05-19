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
    const askedWeight = msg.slots.find(slot => slot.slotName === 'weight')
    const askedSize = msg.slots.find(slot => slot.slotName === 'size')
    const weight = weekInfo.weight
    const size = weekInfo.size

    if ((askedSize != undefined) & !askedWeight ){
      response = i18n('raoul.size', {
        size: size
      })
    } else if ((askedWeight != undefined) & !askedSize) {
      response = i18n('raoul.weight', {
        weight: weight
      })
    } else if ((askedWeight != undefined) & (askedSize != undefined)) {
      response = i18n('raoul.sizeAndWeight', {
        size: size,
        weight: weight
      })
    }

    flow.end()
    return response
}
