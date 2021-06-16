window.Event = new Vue();

Vue.component('coupon',{
    template: '<input placeholder="Type here!" @blur="onCouponApplied">',
    methods: {
        onCouponApplied() {
            Event.$emit('applied');
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
        Event.$on('applied', () => alert("handling it"))
    }
})