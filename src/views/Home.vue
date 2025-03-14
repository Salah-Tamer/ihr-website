<script setup>
import { RouterLink } from 'vue-router'
import { QCard, QCardSection, QAvatar, QIcon, QBtn } from 'quasar'
import { ref } from 'vue'
import Tr from '@/i18n/translation'
import UserInfo from '@/components/UserInfo.vue'

const GRAPHS_TYPES = [
  {
    name: 'homePage.analysisModules.asInterdependence',
    icon: 'fas fa-project-diagram',
    docsQuery: {}
  },
  {
    name: 'homePage.analysisModules.networkDelay',
    icon: 'fas fa-shipping-fast',
    docsQuery: {}
  },
  {
    name: 'homePage.analysisModules.delayAndForwarding',
    icon: 'fas fa-exchange-alt',
    docsQuery: {}
  },
  {
    name: 'homePage.analysisModules.disco',
    icon: 'fas fa-plug',
    docsQuery: {}
  }
]

const ORGANIZATIONS = [
  {
    name: 'iij',
    logo: '/imgs/IIJ-logo.svg',
    url: 'https://www.iij.ad.jp/en/'
  },
  {
    name: 'ripe',
    logo: '/imgs/ripe-logo.png',
    url: 'https://www.ripe.net/'
  },
  {
    name: 'gsoc',
    logo: '/imgs/gsoc-logo.svg',
    url: 'https://summerofcode.withgoogle.com/'
  },
  {
    name: 'routeviews',
    logo: '/imgs/rv-logo.png',
    url: 'http://www.routeviews.org/'
  },
  {
    name: 'isoc',
    logo: '/imgs/isoc-logo.png',
    url: 'https://www.internetsociety.org/'
  },
  {
    name: 'manrs',
    logo: '/imgs/manrs-logo.jpg',
    url: 'https://www.manrs.org/'
  },
  {
    name: 'apnic',
    logo: '/imgs/apnic-foundation-logo.png',
    url: 'https://apnic.foundation/'
  },
  {
    name: 'cloudflare',
    logo: '/imgs/cloudflare-logo.png',
    url: 'https://www.cloudflare.com/'
  },
  {
    name: 'fastly',
    logo: '/imgs/fastly-logo.svg',
    url: 'https://www.fastly.com/'
  }
]

const PLACEHOLDER_VALUES = {
  asPaper:
    "<a href='https://www.iijlab.net/en/members/romain/pdf/romain_pam2018.pdf' target='_blank'>",
  close: '</a>'
  /*
  ripe: "<a href='https://atlas.ripe.net/' target='_blank'>RIPE Atlas</a>",
  bgpstream:
    "<a href='https://bgpstream.caida.org/' target='_blank'>BGPstream</a>",
  delayAndForwardingPaper:
    "<a href='https://conferences.sigcomm.org/imc/2017/papers/imc17-final106.pdf' target='_blank'>",
  discoPaper:
    "<a href='https://tma.ifip.org/wordpress/wp-content/uploads/2017/06/tma2017_paper41.pdf' target='_blank'>"
  */
}

const props = defineProps({
  showSidebar: {
    type: Boolean,
    default: false
  }
})

const graphTypes = ref(GRAPHS_TYPES)
const placeholderValues = ref(PLACEHOLDER_VALUES)
const organizations = ref(ORGANIZATIONS)
</script>

<template>
  <div id="IHR_home">
    <div id="IHR_actions" class="row">
      <div class="col">
        <div>Internet Health Report</div>
        <div class="IHR_actions-area">
          <QBtn
            outline
            style="width: inherit; font-size: large"
            :to="Tr.i18nRoute({ name: 'global-report' })"
          >
            {{ $t('homePage.globalReport.name') }}
          </QBtn>
          <div class="ihr-home-line" />
          <UserInfo />
        </div>
      </div>
    </div>

    <div class="IHR_home-description-main" v-html="$t('homePage.globalReport.description')" />
    <div class="IHR_home-description-main">
      See latest alarms in the
      <RouterLink :to="Tr.i18nRoute({ name: 'global-report' })"> global report </RouterLink>
      and network metrics in
      <RouterLink :to="Tr.i18nRoute({ name: 'network' })"> network reports </RouterLink>.
    </div>

    <div class="row wrap justify-center q-gutter-md IHR_home-description-main">
      <QCard v-for="graphT in graphTypes" :key="graphT.name" class="analysis-modules">
        <QCardSection class="bg-primary text-white q-pa-sm">
          <div>
            <QAvatar :icon="graphT.icon" />
            {{ $t(`${graphT.name}.title`) }}
          </div>
        </QCardSection>
        <QCardSection class="q-pa-xs">
          <div class="IHR_home-description_text" v-html="$t(`${graphT.name}.description`)" />
          <div class="IHR_home-description_text IHR_home-description-link">
            <RouterLink
              :to="
                Tr.i18nRoute({
                  name: 'documentation',
                  hash: $t(`${graphT.name}.docHash`)
                })
              "
            >
              {{ $t('homePage.learnmore') }} {{ $t(`${graphT.name}.title`) }}
            </RouterLink>
          </div>
        </QCardSection>
      </QCard>
    </div>

    <!-- <div class="IHR_section">
      <QCard class="IHR_tweets-types">
        <QCardSection class="bg-white text-primary q-pa-sm">
          <div class="text-h2">
            <QAvatar icon="fab fa-twitter"></QAvatar>
            {{ $t('homePage.ihrTweets.title') }}
          </div>
        </QCardSection>
        <QCardSection class="q-pa-xs">

        </QCardSection>
      </QCard>
    </div> -->

    <div class="IHR_section">
      <h2 class="text-h2">
        <QIcon name="fa fa-heart" />
        {{ $t('homePage.ack.title') }}
      </h2>

      <div class="row wrap justify-center">
        <div v-for="(org, index) in organizations" :key="index">
          <a :href="org.url" target="_blank">
            <div class="IHR_ack-logo">
              <span></span>
              <img :src="org.logo" :alt="org.name" :id="org.name" />
            </div>
          </a>
        </div>
      </div>
    </div>
    <!--<q-drawer :value="hideSidebar" side="left" show-if-above bordered>-->
    <!--<q-scroll-area class="fit">-->
    <!--</q-scroll-area>-->
    <!--</q-drawer>-->
  </div>
</template>

<style>
.ihr-home-line {
  width: 100%;
  border-bottom: 1px solid #fff;
  margin-bottom: 10px;
}
#IHR_actions {
  margin-bottom: 5rem;
  max-width: 100%;
  height: 440px;
  background-color: #000;
  background-image: url('/imgs/global-banner.png');
  background-repeat: no-repeat;
  background-position: right top;
  background-size: contain;
}
@media screen and (max-width: 1024px) {
  #IHR_actions {
    background-position: center center;
    background-size: cover;
  }
}
#IHR_actions > div {
  height: 100%;
}
#IHR_actions > div:first-child {
  color: #fff;
  font-size: 50px;
  text-align: left;
  padding-top: 3.375rem;
  padding-left: 5rem;
  display: inline-block;
  text-shadow: 0 0 8px #000;
}
@media screen and (max-width: 600px) {
  #IHR_actions > div:first-child {
    padding-top: 2.5rem;
    padding-left: 0;
    text-align: center;
    font-size: 2rem;
  }
}
#IHR_graphs-types {
  width: 100%;
}
#IHR_graphs-types > div {
  background-color: #fff;
  padding: 1.6em;
  border: #808080 solid 1px;
}
#IHR_graphs-types > div > h2 {
  font-weight: 400;
  margin-bottom: 0.3125rem;
  font-size: 2.375rem;
}
@media screen and (max-width: 600px) {
  #IHR_graphs-types > div > h2 {
    font-size: 1.8125rem;
  }
}
#IHR_graphs-types > div > h2:first-letter {
  text-transform: uppercase;
}
.IHR_actions-area {
  width: 100%;
  min-width: 330px;
  max-width: fit-content;
}
.IHR_home-description_text {
  width: 90%;
  margin: 2.5rem auto;
  text-align: left;
  padding: 0 1rem;
  font-size: 1.1875rem;
}
@media screen and (max-width: 600px) {
  .IHR_home-description_text {
    font-size: 1rem;
  }
}
#IHR_graphs-types .IHR_home-description_text {
  text-align: justify;
}
.IHR_home-description-main {
  font-size: 1.5rem;
  margin: 2.5rem auto !important;
  text-align: center;
  width: 85%;
  max-width: 1450px;
}
@media screen and (max-width: 600px) {
  .IHR_home-description-main {
    font-size: 1.1875rem;
  }
}
.IHR_home-description-link,
.IHR_home-description_text-link {
  position: relative;
  text-align: right;
}
.IHR_section {
  margin: 5rem auto 40px auto;
  width: 85%;
  font-size: 1.5rem;
  text-align: center;
}
.IHR_section > h2 {
  font-size: 2.6875rem;
}
@media screen and (max-width: 600px) {
  .IHR_section > h2 {
    font-size: 1.8125rem;
  }
}
.IHR_ack-logo {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  height: 200px;
  width: 500px;
  overflow: hidden;
}
.IHR_ack-logo > span {
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.IHR_ack-logo > img {
  vertical-align: middle;
  width: auto;
  height: auto;
  object-fit: contain;
}
.IHR_ack-logo > img#iij {
  max-height: 200px;
  max-width: 350px;
}
.IHR_ack-logo > img#ripe {
  max-height: 200px;
  max-width: 300px;
}
.IHR_ack-logo > img#gsoc {
  max-height: 200px;
  max-width: 400px;
}
.IHR_ack-logo > img#routeviews {
  max-height: 200px;
  max-width: 100px;
}
.IHR_ack-logo > img#isoc {
  max-height: 200px;
  max-width: 300px;
}
.IHR_ack-logo > img#manrs {
  max-height: 200px;
  max-width: 300px;
}
.IHR_ack-logo > img#apnic {
  max-height: 200px;
  max-width: 200px;
}
.IHR_ack-logo > img#cloudflare {
  max-height: 200px;
  max-width: 250px;
}
.IHR_ack-logo > img#fastly {
  max-height: 200px;
  max-width: 170px;
}
.IHR_ack-logo > img:hover {
  transform: scale(1.1);
}
.analysis-modules {
  max-width: 600px;
  text-align: left;
  border-radius: 15px !important;
}
@media (max-width: 1411px) {
  .analysis-modules {
    margin-left: 0;
  }
}
</style>
