/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

module.exports = function (api, ctx) {
  api.extendQuasarConf(conf => {
    let bootFiles = ['axios.js', 'vuelidate.js', 'i18n.js', 'auth.js'] // auth.js needs to be loaded last

    bootFiles.forEach(bootFile => {
      if (!conf.boot.includes(bootFile)) {
        conf.boot.push(bootFile)
      }
    })

    const requiredComponents = [
      'QCard',
      'QCardSection',
      'QCardActions',
      'QInput',
      'QCheckbox',
      'QTable',
      'QTd',
      'QDialog',
      'QBanner',
      'QMenu'
    ]

    const requiredPlugins = ['Notify', 'Dialog', 'Cookies']

    const requiredDirectives = ['ClosePopup']

    requiredComponents.forEach(component => {
      if (!conf.framework.components.includes(component)) {
        conf.framework.components.push(component)
      }
    })

    requiredPlugins.forEach(plugin => {
      if (!conf.framework.plugins.includes(plugin)) {
        conf.framework.plugins.push(plugin)
      }
    })

    requiredDirectives.forEach(directive => {
      if (!conf.framework.directives.includes(directive)) {
        conf.framework.directives.push(directive)
      }
    })

    conf.preFetch = true
  })
}
