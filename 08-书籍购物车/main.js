const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '算法',
                data: '2020-20',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '算法1',
                data: '2020-21',
                price: 82.00,
                count: 1
            },
            {
                id: 3,
                name: '算法2',
                data: '2020-23',
                price: 84.00,
                count: 1
            },
        ]
    },
    methods: {

        increment(index) {
            this.books[index].count++;
        },
        decrement(index) {

            this.books[index].count--;
        },
        remove(index) {
            this.books.splice(index,1)
        }
    },
    computed: {
        totalPrice (){
            let totalprice = 0;
            for (item of this.books) {
                totalprice = item.price*item.count+totalprice
            }
            return totalprice

        }
    },
    filters: {
        getFinalPrice(price) {
            return '$' + price.toFixed(2);
        }
    }
})