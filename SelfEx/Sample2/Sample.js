(function(jq,hbs){

    let sam = {

        bootstrap: function(conf){
            this.config = conf;    
            this.template = hbs.compile(this.config.template);
            this.button_getdata_on_click();        
        },
        button_getdata_on_click: function(){
            this.config.getDataButton.on('click', this.getData.bind(this));
        },
        getData: function(){
            $.ajax({
                url: this.config.url,
                method: "GET",

                beforesend: this.beforesend_getdata.bind(this),
                success: this.success_getdata.bind(this),
                error: this.error_getdata.bind(this),
                complete: this.complete_getdata.bind(this),
            });
        },

        beforesend_getdata: function(){            
            console.log('loading ...');
        },
        success_getdata: function(res){
            if (res && Array.isArray(res) && res.length){

                // Generate Cards
                let usersHtml = this.createUsers(res);

                // Insert into Application
                this.setUsersIntoDom(usersHtml);
            }
        },
        createUsers : function(users){
            //console.log(users);
            return this.template(users);
        },
        setUsersIntoDom : function(html){
            this.config.contentContainer.html(html);
        },
        error_getdata: function(){
            console.log('error');
        },
        complete_getdata: function(){
            console.log('complete');
        },

    };

    sam.bootstrap({
        getDataButton: $('#get-data-button'),
        url: 'http://localhost/cms/public/posts/1',
        template: $('#entry-template').html(),
        contentContainer: $('#content')
    });
})(jQuery,Handlebars);