<template>
    <v-container fluid>
        <v-layout row wrap align-center>
            <v-flex xs12><h3>Тип прокси</h3>
                <v-radio-group
                    v-model="radioGroup"
                    @click="createType(radioGroup)"
                >
                <v-radio
                    v-for="n in 3"
                    :key="n"
                    :label="radiolab[n-1]"
                    :value="n"
                ></v-radio>
            </v-radio-group>
            <v-checkbox
                v-model="checkbox"
                label="Рабочие прокси"
                @click="createAlive(checkbox)"
            ></v-checkbox>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                checkbox: true,
                radioGroup: 1,
                radiolab: ['Transparent', 'Anonymous', 'Elite']
            }
        },
        methods: {
            createType(index) {
                const filter = this.$store.getters.filter;
                this.$store.dispatch('creatype', index);
                this.filterDate(filter)
            },
            createAlive(alive) {
                const filter = this.$store.getters.filter;
                this.$store.dispatch('creaalive', alive);
                this.filterDate(filter)
            },
            filterDate(filter) {
                const infowork = this.$store.getters.info
                    .filter((info) =>
                        info.country === filter[0] &&
                        info.proxy_type === filter[1] &&
                        info.alive === filter[2]
                    );
                this.$store.dispatch('copyarr', infowork)
            }
        },
    }
</script>