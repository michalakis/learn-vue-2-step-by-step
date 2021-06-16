window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}

Vue.component('coupon',{
    template: '<input placeholder="Type here!" @blur="onCouponApplied">',
    methods: {
        onCouponApplied() {
            Event.fire('applied');
        }
    }
});

new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    methods: {
        onCouponApplied() {
            this.couponApplied = true
        }
    },
    created(){
        Event.listen('applied', () => alert("handling it"))
    }
})