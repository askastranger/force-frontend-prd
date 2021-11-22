<template>
  <section class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <nuxt-link to="/campaigns">
              All Campaigns
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/campaigns/' + id" aria-current="page">
              Campaign {{ id }}
            </nuxt-link>
          </li>
          <li class="is-active">
            <nuxt-link to="#">Edit</nuxt-link>
          </li>
        </ul>
      </nav>
      <div v-if="campaignLoading">
        Campaign loading..
      </div>
      <div v-else-if="!campaign">
        Could not retrieve campaign
      </div>
      <p class="is-pulled-right">
        <span class="has-text-info"><b>*</b></span>
        <i> is required</i>
      </p>
      <h1 class="title mt-5">
        Edit Campaign
      </h1>
      <div class="tabs">
        <ul>
          <li :class="{'is-active': formGroup === 'basic-info'}">
            <a @click.prevent="formGroup = 'basic-info'">Basic Information</a>
          </li>
          <li :class="{'is-active': formGroup === 'instructions'}">
            <a @click.prevent="formGroup = 'instructions'">Instructions</a>
          </li>
          <li :class="{'is-active': formGroup === 'tasks'}">
            <a @click.prevent="formGroup = 'tasks'">Design Tasks</a>
          </li>
        </ul>
      </div>
      <form v-if="campaign" @submit.prevent="editCampaign">
        <div v-show="formGroup === 'basic-info'" class="block basic-info-group">
          <div class="field">
            <label class="label">
              Title
              <span class="has-text-info">*</span>
            </label>
            <div class="control">
              <input v-model="campaignIpfs.title" required class="input" type="text" placeholder="My Campaign Title">
            </div>
          </div>
          <div class="field">
            <label class="label">
              Description
              <span class="has-text-info">*</span>
            </label>
            <div class="control">
              <textarea v-model="campaignIpfs.description" class="textarea" required />
            </div>
          </div>
          <div class="field">
            <label class="label">Image</label>
            <div class="control">
              <input v-model="campaignIpfs.image" class="input" type="text" placeholder="Image URL">
            </div>
          </div>
          <label class="label">
            Reward per task
            <span class="has-text-info">*</span>
          </label>
          <div class="field has-addons">
            <div class="control">
              <input v-model="campaignIpfs.reward" required class="input" type="number" placeholder="Reward per task">
            </div>
            <div class="control">
              <a class="button is-primary">
                EFX
              </a>
            </div>
          </div>
          <div class="control">
            <div class="field">
              <label class="label">
                Category
                <span class="has-text-info">*</span>
              </label>
              <div class="select">
                <select v-model="campaignIpfs.category" required>
                  <option>---</option>
                  <option value="dao">
                    Effect DAO
                  </option>
                  <option value="translate">
                    Effect Translate
                  </option>
                  <option value="socials">
                    Effect Socials
                  </option>
                  <option value="captions">
                    Effect Captions
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div v-show="formGroup === 'instructions'" class="block instructions-group">
          <div class="columns">
            <div class="column is-two-fifths">
              <div class="field">
                <label class="label">
                  Raw Text
                  <span class="has-text-info">*</span>
                </label>
                <div class="control">
                  <vue-simplemde ref="markdownEditor" v-model="campaignIpfs.instructions" required :configs="{promptURLs: true, spellChecker: false}" />
                </div>
              </div>
            </div>
            <div class="column is-three-fifths">
              <div class="field">
                <label class="label">Preview</label>
                <div class="control">
                  <instructions-modal v-if="campaign && campaignIpfs" :show="true" :functional="false" :campaign="campaign" :info="campaignIpfs" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="formGroup === 'tasks'" class="block task-group">
          <div class="field">
            <label class="label">Template</label>
            <div class="control">
              <textarea v-model="campaignIpfs.template" class="textarea" required />
            </div>
          </div>
          <div class="field">
            <label class="label">Example Task</label>
          </div>
          <div v-for="(placeholder, key) in campaignIpfs.example_task" :key="key" class="field is-horizontal">
            <div class="field-label is-small">
              <label class="label">{{ key }}</label>
            </div>
            <div class="field-body is-small">
              <div class="field">
                <div class="control">
                  <input v-model="campaignIpfs.example_task[key]" class="input is-small" type="text">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-grouped is-grouped-right mt-4">
          <div class="control">
            <nuxt-link class="button is-light" to="/campaigns">
              Cancel
            </nuxt-link>
          </div>
          <div class="control">
            <button type="submit" class="button is-primary is-wide" :class="{'is-loading': loading}">
              Save Campaign
            </button>
          </div>
        </div>
        <div v-if="submitted" class="notification is-light" :class="{'is-danger': err === true, 'is-success': err === false}">
          {{ message }}
          <span v-if="transactionUrl">
            <a target="_blank" :href="transactionUrl">{{ transactionUrl }}</a>
          </span>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
import InstructionsModal from '@/components/InstructionsModal'
import _ from 'lodash'

function getMatches (string, regex, index) {
  index || (index = 1) // default to the first capturing group
  const matches = []
  let match
  while ((match = regex.exec(string))) {
    matches.push(match[index])
  }
  return matches
}

export default {
  components: {
    VueSimplemde,
    InstructionsModal
  },

  filters: {
    formatBytes (bytes, decimals = 2) {
      if (bytes === 0) {
        return '0 Bytes'
      }
      const k = 1024
      const dm = decimals < 0 ? 0 : decimals
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.checkClose()) {
      next()
    }
  },
  middleware: ['auth'],
  data () {
    return {
      id: parseInt(this.$route.params.id),
      advanced: false,
      success: false,
      ipfsExplorer: process.env.NUXT_ENV_IPFS_EXPLORER,
      loading: false,
      preview: false,
      campaignIpfs: {
        title: '',
        description: '',
        instructions: '',
        template: '',
        image: '',
        category: '',
        example_task: {},
        version: 1,
        reward: null
      },
      campaign: null,
      formGroup: 'basic-info',
      cachedFormData: null,
      uploadingFile: false,
      selectedFile: null,
      submitted: false,
      message: null,
      err: false,
      campaignLoading: null
    }
  },
  computed: {
    // Compares live campaign info to stored campaign info
    hasChanged () {
      return this.campaign && !_.isEqual(this.campaignIpfs, this.campaign.info)
    }
  },
  watch: {
    'campaignIpfs.template' (template) {
      const placeholders = getMatches(
        template,
        /\$\{\s?(\w+)\s?\|?\s?(\w*)\s?\}/g
      )
      const newPlaceholders = {}
      placeholders.forEach((placeholder) => {
        newPlaceholders[placeholder] = this.campaignIpfs.example_task[placeholder] || ''
      })
      this.campaignIpfs.example_task = newPlaceholders
    },
    campaignIpfs: {
      deep: true,
      handler (campaignIpfs) {
        this.campaignIpfs = campaignIpfs
      }
    }
  },

  created () {
    this.getCampaign()
  },

  beforeDestroy () {
    window.removeEventListener('beforeunload', this.checkClose)
  },

  methods: {
    async getCampaign () {
      this.campaignLoading = true
      try {
        const campaign = await this.$blockchain.getCampaign(+this.id)
        if (this.checkCampaignOwner(campaign)) {
          this.campaign = campaign
          this.campaignIpfs = { ...this.campaign.info }
          window.addEventListener('beforeunload', this.checkClose)
        } else {
          this.$router.push('/campaigns/' + this.id)
        }
      } catch (error) {
        console.error(error)
        this.message = error
        this.err = true
      }
      this.campaignLoading = false
    },
    checkCampaignOwner (campaign) {
      if (!_.isEqual(this.$auth.user.accountName, campaign.owner[1])) {
        return false
      }
      return true
    },
    async editCampaign () {
      this.loading = true
      try {
        // const hash = await this.$blockchain.uploadCampaign(this.campaignIpfs)
        // const result = await this.$blockchain.editCampaign(hash, this.campaignIpfs.reward)
        // this.$store.dispatch('transaction/addTransaction', result)
        // this.transactionUrl = process.env.NUXT_ENV_EOS_EXPLORER_URL + '/transaction/' + result.transaction_id
        await alert('need to wait for edit-campaign on smart contract.')
        this.message = 'Campaign edited successfully! Check your transaction here: '
      } catch (error) {
        this.message = error
        this.err = true
      }
      this.loading = false
      this.submitted = true
    },
    checkClose (event) {
      if (this.hasChanged && !this.loading && !this.success) {
        const warningMessage = 'You have unsaved changes. Are you sure you wish to leave?'
        if (!confirm(warningMessage)) {
          event.preventDefault()
          event.returnValue = warningMessage
          return false
        }
        return true
      }
      return true
    }
  }
}
</script>
<style lang="scss" scoped>
div.instructions-group .textarea {
  overflow-y: scroll
}
</style>