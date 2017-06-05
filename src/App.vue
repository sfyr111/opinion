<template>
  <div id="app">
    <router-view></router-view>
    <button @click="test">test</button>
    <ul>
      <li v-for="(item, index) in getKeyWordsList">{{item}}</li>
    </ul>
    <div>
      <group>
        <cell title="title" value="value"></cell>
      </group>
    </div>
  </div>
</template>

<script>
// import { Group, Cell } from 'vux'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'app',
  created () {
  },
  data () {
    return {}
  },
  // components: {
  //   Group,
  //   Cell
  // },
  methods: {
    ...mapActions(['keyWordsList']),
    test () {
      const params = {
        'userAgentNo': '123'
      }
      this.$nextTick(() => {
        this.$store.dispatch('keyWordsList', params)
      })
    }
  },
  computed: {
    ...mapGetters(['getKeyWordsList'])
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  font-size: 24px;
  background-color: #fbf9fe;
}
</style>
