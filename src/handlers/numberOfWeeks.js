const api = require('../api')
const { i18nFactory } = require('../factories')
const { message, getPregnancyInfo } = require('../utils')

module.exports = async function (msg, flow) {
    // Suppose we have a pokemon id slot
    // If there are multiple, we take the only that is supposed to be the 'most valid'.
    // We discard slots with a confidence value too low.

    const weekInfo = getPregnancyInfo.getWeekInfo()


    // Return the TTS speech.
    const i18n = i18nFactory.get()
    //const pokemonName = pokemon.name
    flow.end()
    return "semaine 21"
    // return i18n('raoul.info', {
    //    semaines: "Arsène"
    // })
}
