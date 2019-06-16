import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      infowork: [],
      info: [],
      info_zap: [{
          "id": 102,
          "created": "2018-09-05T12:57:00.852060+03:00",
          "modified": "2018-12-19T13:56:25.360860+03:00",
          "host": "77.221.220.133",
          "port": 44331,
          "country": "RU",
          "alive": true,
          "last_check_time": "2019-06-14T15:00:51.517039+03:00",
          "busy_until": "2018-10-16T20:09:20.759184+03:00",
          "proxy_type": 1,
          "port_response_time": 5.623603,
          "chargeable": false,
          "use_counter": 0,
          "protocol": 1,
          "source_of_proxy": "-"
      }, {
          "id": 146,
          "created": "2018-09-05T12:57:00.852060+03:00",
          "modified": "2019-06-11T15:29:49.329396+03:00",
          "host": "46.73.33.253",
          "port": 8080,
          "country": "RU",
          "alive": false,
          "last_check_time": "2019-06-14T14:52:05.255931+03:00",
          "busy_until": "2019-06-11T15:29:49.477432+03:00",
          "proxy_type": 2,
          "port_response_time": 1.410624,
          "chargeable": false,
          "use_counter": 1,
          "protocol": 1,
          "source_of_proxy": "-"
      }, {
          "id": 277,
          "created": "2018-09-05T12:57:00.852060+03:00",
          "modified": "2018-12-19T11:53:40.714203+03:00",
          "host": "91.217.42.3",
          "port": 8080,
          "country": "RU",
          "alive": true,
          "last_check_time": "2019-06-14T16:52:02.804881+03:00",
          "busy_until": "2018-10-18T22:34:16.800260+03:00",
          "proxy_type": 3,
          "port_response_time": 6.86283,
          "chargeable": false,
          "use_counter": 0,
          "protocol": 1,
          "source_of_proxy": "-"
      }, {
          "id": 336,
          "created": "2018-09-05T12:57:00.852060+03:00",
          "modified": "2018-12-19T07:35:46.009100+03:00",
          "host": "91.214.31.234",
          "port": 8080,
          "country": "UA",
          "alive": true,
          "last_check_time": "2019-06-14T14:02:29.833699+03:00",
          "busy_until": "2018-10-18T14:35:56.394251+03:00",
          "proxy_type": 1,
          "port_response_time": 4.009898,
          "chargeable": false,
          "use_counter": 0,
          "protocol": 0,
          "source_of_proxy": "-"
      }, {
          "id": 351,
          "created": "2018-09-05T12:57:00.852060+03:00",
          "modified": "2018-12-19T11:51:07.409418+03:00",
          "host": "187.32.4.66",
          "port": 8080,
          "country": "BR",
          "alive": true,
          "last_check_time": "2019-06-14T14:52:37.791974+03:00",
          "busy_until": "2018-10-16T20:09:42.785760+03:00",
          "proxy_type": 1,
          "port_response_time": 7.639008,
          "chargeable": false,
          "use_counter": 0,
          "protocol": 0,
          "source_of_proxy": "-"
      }, {
          "id": 439,
          "created": "2018-09-05T12:57:00.852060+03:00",
          "modified": "2018-12-19T03:19:02.180269+03:00",
          "host": "109.245.215.255",
          "port": 53281,
          "country": "RS",
          "alive": true,
          "last_check_time": "2019-06-14T16:51:25.713315+03:00",
          "busy_until": "2018-10-16T20:09:45.959484+03:00",
          "proxy_type": 1,
          "port_response_time": 2.200635,
          "chargeable": false,
          "use_counter": 0,
          "protocol": 0,
          "source_of_proxy": "-"
      }, {
          "id": 468,
          "created": "2018-09-05T12:57:00.852060+03:00",
          "modified": "2018-12-19T11:47:51.968406+03:00",
          "host": "186.215.133.170",
          "port": 20183,
          "country": "BR",
          "alive": true,
          "last_check_time": "2019-06-14T14:03:00.547294+03:00",
          "busy_until": "2018-10-16T14:47:55.871576+03:00",
          "proxy_type": 1,
          "port_response_time": 2.488452,
          "chargeable": false,
          "use_counter": 0,
          "protocol": 0,
          "source_of_proxy": "-"
      }, {
          "id": 795,
          "created": "2018-09-05T12:57:00.852060+03:00",
          "modified": "2018-12-19T12:55:24.181897+03:00",
          "host": "77.37.142.203",
          "port": 53281,
          "country": "RU",
          "alive": true,
          "last_check_time": "2019-06-14T16:52:54.058431+03:00",
          "busy_until": "2018-10-16T20:11:04.886822+03:00",
          "proxy_type": 1,
          "port_response_time": 5.323023,
          "chargeable": false,
          "use_counter": 0,
          "protocol": 0,
          "source_of_proxy": "-"
      }, {
          "id": 816,
          "created": "2018-09-05T12:57:00.852060+03:00",
          "modified": "2018-12-18T22:01:03.854876+03:00",
          "host": "175.101.80.134",
          "port": 8080,
          "country": "IN",
          "alive": true,
          "last_check_time": "2019-06-14T14:02:38.157758+03:00",
          "busy_until": "2018-08-09T12:42:53.289515+03:00",
          "proxy_type": 1,
          "port_response_time": 8.297564,
          "chargeable": false,
          "use_counter": 0,
          "protocol": 0,
          "source_of_proxy": "-"
      }, {
          "id": 851,
          "created": "2018-09-05T12:57:00.852060+03:00",
          "modified": "2018-12-19T05:55:30.634475+03:00",
          "host": "91.196.159.214",
          "port": 8080,
          "country": "UA",
          "alive": true,
          "last_check_time": "2019-06-14T07:52:33.462105+03:00",
          "busy_until": "2018-10-16T20:11:08.049373+03:00",
          "proxy_type": 1,
          "port_response_time": 2.668891,
          "chargeable": false,
          "use_counter": 3,
          "protocol": 0,
          "source_of_proxy": "-"
      }],
      filter: ['RU', 1, true]
  },
  getters: {
      info(state){
          return state.info
      },
      filter(state){
          return state.filter
      }
  },
  mutations: {
      cleararr(state) {
          state.infowork = []
      },
      creaall(state) {
          state.infowork = [...state.info]
      },
      copyarr(state, payload) {
        state.infowork = payload
    },
      creacou(state, payload) {
          state.filter[0] = String(payload)
      },
      creatype(state, payload) {
          state.filter[1] = payload
      },
      creaalive(state, payload) {
          state.filter[2] = payload
      },
      loadproxy(state, payload) {
          state.info = payload
      },
  },
  actions: {
      creacou (store, payload) {
          store.commit('creacou', payload)
      },
      creatype (store, payload) {
          store.commit('creatype', payload)
      },
      creaalive (store, payload) {
          store.commit('creaalive', payload)
      },
      copyarr (store, payload) {
          store.commit('copyarr', payload)
      },
      cleararr (store) {
          store.commit('cleararr')
      },
      creaall (store) {
          store.commit('creaall')
      },
      loadproxy (store, payload) {
          store.commit('loadproxy', payload)
      },
  }
})
