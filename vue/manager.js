export default {
  moduleName: 'MailMasterPassword',

  requiredModules: [],

  getAdminSystemTabs () {
    return [
      {
        tabName: 'mailmasterpassword',
        title: 'MAILMASTERPASSWORD.LABEL_SETTINGS_TAB',
        component () {
          return import('src/../../../MailMasterPassword/vue/components/MasterPasswordAdminSettings')
        },
      },
    ]
  },
}
