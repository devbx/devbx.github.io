import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'devbx.github.io',
  title: 'DevBX',
  subtitle: 'My Blog',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: 'https://avatars.githubusercontent.com/u/161192932?v=4',
    name: 'DevBX',
    status: '😴',
    bio: 'Hello world!',
    metadata: [
      {
        icon: 'i-simple-icons-github',
        link: 'https://github.com/devbx'
      },
      {
        icon: 'i-simple-icons-telegram',
        link: 'https://t.me/devbx36'
      }
    ]
  },
  themeColor: '#3D4451'
}
