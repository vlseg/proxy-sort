<template>
    <v-container
        grid-list-xl
        style="min-width: 500px;"
    >
        <v-layout>
            <v-flex xs4 style="
            border: 1px solid black;
            min-width: 190px;"
        >
                <v-card
                >
                    <v-card-text
                        class="headline"
                    >Фильтры прокси
                    </v-card-text>
                    <hr>
                    <app-country></app-country>
                    <hr>
                    <app-proxytype></app-proxytype>
                    <v-card-actions>
                        <v-layout v-bind="binding">
                            <v-flex>
                                <v-btn block @click="onClear">Очистить</v-btn>
                            </v-flex>
                            <v-flex>
                                <v-btn block @click="onCreaall">Загрузить прокси</v-btn>
                            </v-flex>
                            <!--<v-btn @click="onLoad">Фильтры</v-btn>  Второй вариант, когда фильтры применяются при нажатии на кнопку -->

                        </v-layout>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs8
                    style="border: 1px solid black"
            >
                <v-card
                    color="secondary"
                    style="min-width: 300px;"
                >
                    <v-card-text class="headline">Данные</v-card-text>
                    <app-dateshow></app-dateshow>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import AppCountry from './components/Country.vue'
    import AppProxytype from './components/Proxytype.vue'
    import AppDateshow from './components/Dateshow.vue'
    import axios from 'axios'

    export default {
        data() {
            return {
                info: null,
            };
        },
        mounted() {
            axios
                .get('https://lending.medstat.info/date.json')
                .then(response => (this.$store.dispatch('loadproxy', response.data)))
                .catch(error => console.log(error));
        },
        computed: {
            binding () {
                const binding = {};
                if (this.$vuetify.breakpoint.mdAndDown) {
                    binding.column = true
                }
                return binding
            },
        },

        methods: {
            // onLoad() {  // Второй вариант, когда фильтры применяются при нажатии на кнопку
            //     const info = this.$store.getters.info;
            //     const filter = this.$store.getters.filter;
            //     const infowork = info
            //         .filter((info) =>
            //             info.country === filter[0] &&
            //             info.proxy_type === filter[1] &&
            //             info.alive === filter[2]
            //         )
            //     this.$store.dispatch('copyarr', infowork)
            // },
            onClear () {
                this.$store.dispatch('cleararr')
            },
            onCreaall () {
                this.$store.dispatch('creaall')
            },
        },
        components: {
            AppCountry,
            AppProxytype,
            AppDateshow
        }
    }
</script>
