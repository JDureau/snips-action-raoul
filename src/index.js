const { withHermes } = require('hermes-javascript')
const bootstrap = require('./bootstrap')
const handlers = require('./handlers')
const { translation, logger } = require('./utils')

// Initialize hermes
module.exports = function ({
    hermesOptions = {},
    bootstrapOptions = {}
} = {}) {
    withHermes(async (hermes, done) => {
        try {
            // Bootstrap config, locale, i18n…
            await bootstrap(bootstrapOptions)

            const dialog = hermes.dialog()

            dialog.flow([
              {
                  intent: 'Joseph:askAge',
                  action : handlers.askAge
              },
              {
                  intent: 'Joseph:askAgeAmenorrhea',
                  action : handlers.askAgeAmenorrhea
              },
              {
                  intent: 'Joseph:askWhichWeek',
                  action : handlers.askWhichWeek
              },
              {
                  intent: 'Joseph:askWhichWeekAmenorrhea',
                  action : handlers.askWhichWeekAmenorrhea
              }
            ])
            resolve(done)

        } catch (error) {
            // Output initialization errors to stderr and exit
            const message = await translation.errorMessage(error)
            logger.error(message)
            logger.error(error)
            // Exit
            done()
        }
    }, hermesOptions)
}
