const glob = require('glob')
const path = require('path')

module.exports = function (api) {
  api.removePath('src/boot/auth.js')
  api.removePath('src/store/auth')
  api.removePath('src/pages/auth')
  api.removePath('src/layouts/auth')

  if (api.prompts.superuser_functionality) {
    api.removePath('src/components/ResponsiveModal.vue')
  }

  glob(
    path.join(__dirname, '/templates/auth/src/i18n/**/auth.js'),
    {},
    (err, files) => {
      if (err) {
        return err
      }
      if (files.length) {
        files.forEach(file => {
          let path = file.split('templates/auth')
          api.removePath(path[path.length - 1])
        })
      }
    }
  )

  api.onExitLog('------------------------------------------------------')
  api.onExitLog("Don't forget to remove the AuthMenu from your layout.")
}
