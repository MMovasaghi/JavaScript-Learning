(function(jq){

    let a = {
        bootstrap: function(config){
            this.conf = config;
            this.conf.button.on('click', this.getdata.bind(this));  
        },
        getdata: function(){
            if(this.conf.data_input != null)
            {
                console.log(this.conf.data_input.val());
                this.sam(this.conf.data_input.val()).then(res =>{
                    console.log(res);
                }).catch(err => {
                    console.log('Error');
                });
            }
            else 
            {
                console.log('Null');
            }            
        },
        sam: function(data){
            return new Promise((resolve,reject) => {
                if(data == true){
                    resolve('Pashmmmmmmam');
                } else {
                    reject('Error');
                }
            });
        },
        
    };

    a.bootstrap({
        button: $('#button-get-data'),
        data_input: $('#callsam'),
    });
})(jQuery);