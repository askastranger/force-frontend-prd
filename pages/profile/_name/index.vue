<template>
  <section class="section">
    <div class="container">
      <div class="text-center">
        <h4 class="title is-spaced">
          Effect Account
        </h4>
        <div v-if="loading" class="loading-text">
          Loading
        </div>
        <div v-else-if="account">
          <div class="block">
            <div class="has-text-weight-bold is-size-6">
              Effect Account Name:
            </div>
            <div class="subtitle">
              <span
                v-if="account.address[0] === 'address'"
                class="blockchain-address"
              >{{ account.address[1] }}</span>
              <a
                v-else
                :href="$blockchain.eos.explorer + '/address/'+ account.address[1]"
                target="_blank"
              >{{ account.address[1] }}</a>
            </div>
          </div>
          <div class="block">
            <div class="has-text-weight-bold is-size-6">
              Effect Account ID:
            </div>
            <div class="subtitle">
              {{ account.id }}
            </div>
          </div>
          <div class="block">
            <div class="has-text-weight-bold is-size-6">
              Blockchain:
            </div>
            <div class="subtitle">
              <a
                :href="`${$blockchain.eos.explorer}/account/${$blockchain.sdk.account.config.accountContract}?loadContract=true&tab=Tables&table=account&account=${$blockchain.sdk.account.config.accountContract}&scope=${$blockchain.sdk.account.config.accountContract}&limit=1&lower_bound=${account.id}&upper_bound=${account.id}`"
                target="_blank"
              >View on explorer</a>
            </div>
          </div>
          <h2 class="title is-4">
            Campaigns
          </h2>
          <campaign-list class="mb-6" :campaigns="myCampaigns" />
        </div>
        <div v-else>
          Could not retrieve account
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

import CampaignList from '@/components/CampaignList'

export default {
  components: { CampaignList },
  middleware: ['auth'],
  data () {
    return {
      name: this.$route.params.name,
      account: null,
      loading: false
    }
  },
  computed: {
    ...mapState({
      campaigns: state => state.campaign.campaigns
    }),
    ...mapGetters({
      transactionsByUser: 'transaction/transactionsByUser',
      getPendingPayouts: 'pendingPayout/getPendingPayouts',
      campaignById: 'campaign/campaignById',
      activeBatchesByCampaignId: 'campaign/activeBatchesByCampaignId',
      batchesByCampaignId: 'campaign/batchesByCampaignId'
    }),
    myCampaigns () {
      if (!this.campaigns) { return }
      const filteredCampaigns = this.campaigns.filter(c => c.owner[1] === this.name).map((c) => { return { ...c } })
      return filteredCampaigns
    }
  },
  created () {
    this.getProfile()
  },

  methods: {
    async getProfile () {
      try {
        this.loading = true
        const accountRows = await this.$blockchain.getVAccountByName(this.name)
        if (accountRows && accountRows.length) {
          this.account = accountRows[0]
        }
      } catch (e) {
        this.$blockchain.handleError(e)
      }
      this.loading = false
    }
  }
}
</script>

<style>
</style>
