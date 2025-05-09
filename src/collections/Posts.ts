import { isLocaleEditor } from '@/access/isLocaleEditor'
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    create: isLocaleEditor,
    read: () => true,
    update: isLocaleEditor,
    delete: isLocaleEditor,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
