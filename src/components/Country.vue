<template>
    <v-container fluid>
        <v-layout row wrap align-center>
            <v-flex xs6><h3>Страны</h3>
                <v-select
                    v-model="select"
                    :hint="`${select.state}, ${select.abbr}`"
                    :items="items"
                    item-text="state"
                    item-value="abbr"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                    hide-selected
                    @change="creacounter($event)"
                >
                </v-select>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
    export default {
        data() {
            return {
                select: {state: 'Россия', abbr: 'RU'},
                items: [
                    {state: 'Россия', abbr: 'RU'},
                    {state: 'Украина', abbr: 'UA'},
                    {state: 'Бразилия', abbr: 'BR'},
                    {state: 'Сербия', abbr: 'RS'},
                    {state: 'Индия', abbr: 'IN'},
                ]
            }
        },
        methods: {
            creacounter(event) {
                const info = this.$store.getters.info;
                const filter = this.$store.getters.filter;
                const country = event.abbr;
                this.$store.dispatch('creacou', country)
                const infowork = info
                    .filter((info) =>
                        info.country === filter[0] &&
                        info.proxy_type === filter[1] &&
                        info.alive === filter[2]
                    )
                this.$store.dispatch('copyarr', infowork)
            },
        }
    }
</script>