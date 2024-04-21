import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'DevBX',
  subtitle: 'My Blog',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: 'https://avatars.githubusercontent.com/u/161192932?v=4',
    name: 'DevBX',
    status: '😴',
    bio: 'Hello world!'
  },
  themeColor: '#3D4451'
}
