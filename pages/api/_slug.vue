<template>
  <div>
    <carbon-ads v-if="!isDev" :key="$route.params.slug"></carbon-ads>
    <html-parser :content="body"></html-parser>
    <p class="contribute">{{ $store.state.lang.guide.contribute }} <a :href="docLink" target="_blank">{{ $store.state.lang.guide.edit_on_github }}</a></p>
  </div>
</template>

<script>
import axios from 'axios'
import CarbonAds from '~components/CarbonAds.vue'
import HtmlParser from '~components/HtmlParser.vue'

export default {
  async data ({ route, store, error, isDev }) {
    // Default data
    let data = {
      attrs: {},
      body: '',
      docLink: '',
      isDev: isDev
    }
    const slug = route.params.slug || 'index'
    const path = `/${store.state.lang.iso}/api/${slug}`
    let res
    try {
      res = await axios.get(store.state.apiURI + path)
    } catch (err) {
      if (err.response.status !== 404) {
        return error({ statusCode: 500, message: '文档API服务异常' })
      }
      return error({ statusCode: 404, message: 'API页面不存在' })
    }
    data.attrs = res.data.attrs
    data.body = res.data.body
    data.docLink = `https://github.com/nuxt/docs/blob/master${path}.md`
    if (store.state.lang.iso === 'ru') {
      data.docLink = `https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru${path}.md`
    } else if (store.state.lang.iso === 'zh-cn') {
      data.docLink = `https://github.com/o2team/i18n-cn-nuxtjs-docs/blob/dev${path}.md`
    }
    if (!data.attrs.title) console.error(`[${path}] 请在文档页头中指定标题(title)字段.`)
    if (!data.attrs.description) console.error(`[${path}] 请在文档页头中指定描述(description)字段.`)
    return data
  },
  scrollToTop: true,
  head () {
    return {
      title: this.attrs.title,
      titleTemplate: '%s - Nuxt.js API',
      meta: [
        { hid: 'description', name: 'description', content: this.attrs.description }
      ]
    }
  },
  components: {
    HtmlParser,
    CarbonAds
  }
}
</script>
