<template>
    <v-container fluid>
        <v-layout row wrap align-center>
            <v-flex>
                <v-card
                    class="pa-2"
                    v-for="(proxy, ind) in info"
                    :key="ind"
                    style="border: 1px solid black"
                ><b><u>{{ind+1}}). Страна: {{ proxy.country }}, Тип: {{ proxy.proxy_type }}, Alive: {{ proxy.alive }}<br></u></b> {{ proxy }}
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        data () {
            return {
            }
        },
        computed: {
            info() {
                return this.$store.state.infowork
            }
        }
    }
</script>
