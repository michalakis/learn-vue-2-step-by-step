Vue.component('coupon',{
    template: '<input placeholder="Type here!" @blur="onCouponApplied">',
    methods: {
        onCouponApplied() {
            this.$emit('applied');
        }
    },
    data(){

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
    }
})