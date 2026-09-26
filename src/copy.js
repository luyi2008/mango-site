export const copy = {
  zh: {
    code: 'zh-CN',
    title: '芒果云端科技',
    description: '用 AI 让生意更省事。芒果云端科技为企业和商家做能用的 AI 工具。',
    skip: '跳到正文',
    logoAlt: '芒果云端科技',
    languageLabel: '语言',
    tagline: '用 AI 让生意更省事',
    seeWork: '了解方案',
    contactCta: '联系我们',
    offerTitle: '给公司和商家做能用的 AI 工具',
    offerBody:
      '省下时间，把运营成本降下来，并且让人当天就能上手。北京芒果云端科技有限公司做的就是这几件事。',
    contactTitle: '联系我们',
    company: '北京芒果云端科技有限公司',
    footer: '© 2026 北京芒果云端科技有限公司',
  },
  en: {
    code: 'en',
    title: 'Mango Cloud',
    description:
      'Make business easier with AI. Mango Cloud builds practical tools for companies and merchants.',
    skip: 'Skip to content',
    logoAlt: 'Mango Cloud',
    languageLabel: 'Language',
    tagline: 'Make business easier with AI',
    seeWork: 'What we do',
    contactCta: 'Contact us',
    offerTitle: 'What we do',
    offerBody:
      'Save time, lower operating costs, and put tools in people’s hands the same day. That is what Beijing Mango Cloud Technology does.',
    contactTitle: 'Contact us',
    company: 'Beijing Mango Cloud Technology Co., Ltd.',
    footer: '© 2026 Beijing Mango Cloud Technology Co., Ltd.',
  },
}

export function readLang() {
  try {
    const saved = localStorage.getItem('mango-lang')
    if (saved === 'en' || saved === 'zh') return saved
  } catch {
    /* private mode or blocked storage */
  }
  return 'zh'
}

export function storeLang(lang) {
  try {
    localStorage.setItem('mango-lang', lang)
  } catch {
    /* ignore */
  }
}
