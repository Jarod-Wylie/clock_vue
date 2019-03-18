
new Vue({
    el: '#draw-pad',

    data: {
        //time: new Date(),
        millTime: "",
        regTime: "",
        interval: null

    },
    methods: {

        getTime() {
            this.interval = setInterval(() => {
                var time = new Date();
                var regTime = time.getHours().toString() + ":" + time.getMinutes().toString() + ":" + time.getSeconds().toString();
                this.regTime = regTime;
            }, 1000)
        },

        timeConversion() {
            this.interval = setInterval(() => {
                var millTime = this.regTime.slice(0, 9);
                this.millTime = millTime.split(":");

                // change numbers between 13 and 24
                if (parseInt(this.millTime[0]) <= 24 && parseInt(this.millTime[0]) > 12) {
                    this.millTime[0] = parseInt(this.millTime[0] - 12);
                }
                // keep 1-12
                else {
                    this.millTime[0] = this.millTime[0];
                }
                //needs a string padding so that each item always has two string digits
                for (var i = 1; i < this.millTime.length; i++) {
                    this.millTime[i] = this.millTime[i].padStart(2, '0');
                }
                //join the items together with a colon between them
                this.millTime = this.millTime.join(":");


            }, 1000)
        }
    }
  
})
