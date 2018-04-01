Vue.component('qw-header-sub', {
    props: [''],
    template:
     `
        <div>
            <h1>{{ intro }} <img src="img/qw-shop-icon.png"></h1>
            <div class="qw-top-wrapper row">
                <form action="Post" class="col s12 ">
                    <div class="input-field col s12 ">
                        <select id="areaOption">
                            <option v-for="(value, key) in areaList" :value="key">{{value}}</option>
                        </select>
                        <label>Area Name</label>
                    </div>
                    <a v-on:click="showResult() ; $emit('hide')" class="qw-button-search waves-effect waves-light btn">Search</a>
                </form>   
            </div>
        </div>  
    `,
    data () {
        return {
            intro: 'Welcome to Qia Wan Restaurant Searcher',
            areaSelection: '',
            areaList: {
                1: "Bandar Seri Alam",
                2: "Permas Jaya",
                3: "Taman Megah Ria"
            },
        }
    },
    methods: {
        showResult: function() {
            var select = document.getElementById('areaOption')
            var areaSelected = select.value
            this.areaSelection = areaSelected
            switch(this.areaSelection){
                case '1':
                    this.$emit('clicked', '1')
                    break
                case '2':
                    this.$emit('clicked', '2')
                    break
                case '3':
                    this.$emit('clicked', '3')
                    break
                default:
            }
        }
    },
});

Vue.component('qw-results-bsa', {
    template: 
    `
        <div>
            <div class="qw-results row">
                <div class="qw-results-holder" v-for="bsa in bsaData">
                    <div class="card">
                        <div class="card-image">
                            <img :src="bsa.url" class="responsive-img center">
                        </div>
                        <div class="card-content">
                            <h5>{{ bsa.name }}</h5>
                            <p>{{ bsa.address}}</p>
                        </div>
                    </div>
                </div>
            </div>             
        </div>
    `,
    data () {
        return {
            bsaData: [
                {name: 'Der Cabin Bistro', url: 'img/bsa/bsa-der-cabin.jpg', address: 'Ptd 174172, Plot L3 & L4, Gravity Green, Bandar Seri Alam, 81750 Masai, Johor'},
                {name: 'Tea Garden Seri Alam', url: 'img/bsa/bsa-tea-garden.jpg', address: 'Ptd 174172, Phase 2E1, Bandar Seri Alam, 81750 Masai, Johor'},
                {name: 'C7 Fast Food', url: 'img/bsa/bsa-c7.jpg', address: '17, Jalan Suria 1/1, Bandar Baru Seri Alam, 81750 Masai, Johor'},
                {name: 'SugarBun Seri Alam', url: 'img/bsa/bsa-sugarbun.jpg', address: '6C, C, 01, Jalan Suria 7, Bandar Seri Alam, 81700 Masai, Johor'},
                {name: 'Bucida Garden Bbq & Steamboat', url: 'img/bsa/bsa-bucida.jpg', address: '25, Jalan Suria 6, Bandar Seri Alam, 81750 Masai, Johor'},
                {name: 'My Kluang Cafe', url: 'img/bsa/bsa-mykluang.jpg', address: '41, Jalan Suria 1, Bandar Seri Alam, 81750 Masai, Johor'},
                {name: 'Restoran Habib', url: 'img/bsa/bsa-habib.jpg', address: '29, Jalan Suria 3, Bandar Seri Alam, 81750 Masai, Johor'},
                {name: 'Burger King Seri Alam', url: 'img/bsa/bsa-burger-king.jpg', address: 'Ptd 174172, Jalan Suria 1, Bandar Seri Alam, 81750 Masai, Johor'}
            ],
        }
    }
});

Vue.component('qw-results-pj', {
    template: 
    `
        <div>
            <div class="qw-results row">
                <div class="qw-results-holder" v-for="bsa in bsaData">
                    <div class="card">
                        <div class="card-image">
                            <img :src="bsa.url" class="responsive-img center">
                        </div>
                        <div class="card-content">
                            <h5>{{ bsa.name }}</h5>
                            <p>{{ bsa.address}}</p>
                        </div>
                    </div>
                </div>
            </div>             
        </div>
    `,
    data () {
        return {
            bsaData: [
                {name: 'Nijyumaru Japanese Restaurant', url: 'img/pj/pj-nijyumaru.jpg', address: '24, Jalan Permas 10/5, Bandar Baru Permas Jaya, 81750 Masai, Johor'},
                {name: 'Restaurant Lemon Tree', url: 'img/pj/pj-lemontree.jpg', address: '3, Jalan Permas 10/8, Bandar Baru Permas Jaya, 81750 Masai, Johor'},
                {name: 'Yi Jia Seafood Permas City', url: 'img/pj/pj-yijia.jpg', address: '1, Jalan Permas Utara, Bandar Baru Permas Jaya, 81750 Masai, Johor'},
                {name: "D'Shanghai Dimsum", url: 'img/pj/pj-dashanghai.jpg', address: '56, Jalan Permas 15/1, Bandar Baru Permas Jaya, 81750 Masai, Johor'},
                {name: 'Nam San Seoul Korean BBQ', url: 'img/pj/pj-namsan.jpg', address: '4, Jalan Permas, Bandar Baru Permas Jaya, 81750 Masai, Johor'},
                {name: 'Warakuya Japanese Restaurant', url: 'img/pj/pj-warakuya.jpg', address: 'Lot 205912, 1, Jalan Permas Utara, Bandar Baru Permas Jaya, 81750 Masai, Johor'},
                {name: 'Permas Jaya One Two Eat Cafe', url: 'img/pj/pj-oteat.jpg', address: '102, Jalan Permas 10, Bandar Baru Permas Jaya, 81750 Johor Bahru, Johor'},
                {name: 'Nonies Restaurant Senibong', url: 'img/pj/pj-nonies.jpg', address: ' Senibong Seafood, Bandar Baru Permas Jaya, 81750 Masai, Johor'},
                {name: 'Uncle Jang Korean Restaurant', url: 'img/pj/pj-uncle-jang.jpg', address: 'Jln Permas 15/1, Bandar Baru Permas Jaya, 81750 Masai, Johor'}
            ],
        }
    }
});

Vue.component('qw-results-tmr', {
    template: 
    `
        <div>
            <div class="qw-results row">
                <div class="qw-results-holder" v-for="bsa in bsaData">
                    <div class="card">
                        <div class="card-image">
                            <img :src="bsa.url" class="responsive-img center">
                        </div>
                        <div class="card-content">
                            <h5>{{ bsa.name }}</h5>
                            <p>{{ bsa.address}}</p>
                        </div>
                    </div>
                </div>
            </div>             
        </div>
    `,
    data () {
        return {
            bsaData: [
                {name: 'Restoran Original Sarawak Kolomee', url: 'img/tmr/tmr-kolomee.jpg', address: '29, Jalan Bayan 37, Taman Megah Ria, 81750 Masai, Johor'},
                {name: 'Sin Shun Kee Restaurant', url: 'img/tmr/tmr-sin-shun-kee.jpg', address: '17, Jalan Kempas 5, Taman Megah Ria, 81750 Masai, Johor'},
                {name: 'Leong Heng Food Court', url: 'img/tmr/tmr-leongheng.jpg', address: '104, Jalan Kempas, Taman Megah Ria, 81750 Masai, Johor'},
                {name: 'Annapoorani Curry House', url: 'img/tmr/tmr-annapoorani .jpg', address: '2 Jalan Kota 1/1 Block D, Taman Cahaya Kota Putri, 81750 Johor Bahru, Johor'}
            ],
        }
    }
});

var app = new Vue({
    el: '#qw-main-component',
    data: {
        showSelection: true,
        areaCode: 0,
    },
    methods: {
        showArea: function(value){
            this.areaCode = value
        },
        screenClear: function() {
            location.reload();
            this.showSelection = true
            this.areaCode = 0
        }
    }
})