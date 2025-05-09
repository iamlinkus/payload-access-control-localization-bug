import { localesForPayload } from '@/localization'
import { Access } from 'payload'

export const isLocaleEditor: Access = ({ req }) => {
  const user = req.user
  const role = user?.role || ''
  const locale = req.locale || ''
  const allowedLocales = localesForPayload
    .filter((locale) => {
      const roles = Array.isArray(locale.editorRole) ? locale.editorRole : [locale.editorRole]
      return roles.includes(role)
    })
    .map((locale) => locale.code)

  if (allowedLocales.includes(locale) || role === 'admin') {
    return true
  }
  return false
}
