(function(val,Hbs){

    let sample = 
    {   
        setup : function(conf){
            this.config = conf;
            this.template = Hbs.compile(conf.htmlTemplate);
            this.bindEvents();
        }, 
        bindEvents : function(){
            this.config.getDataButton.on('click', this.say.bind(this));
        },
        say : function(){
            console.log('Say Function');
            $.ajax({
                url : this.config.endPoint,
                method: 'GET',

                success : this.successHandler.bind(this),

            })
        },
        successHandler : function(res){
            if (res && Array.isArray(res) && res.length)
            {

                // Generate Cards
                let usersHtml = this.createUsers(res);

                // Insert into Application
                this.setUsersIntoDom(usersHtml);

            }
        },
        setUsersIntoDom : function(html){
            this.config.contentContainer.html(html);
        },
        createUsers : function(users){
            return this.template(users);
        },
    };
    sample.setup({
        endPoint : 'http://localhost/cms/public/readall',
        htmlTemplate: $('#entry-template').html(),
        getDataButton : $('#get-data'),
        contentContainer : $('#content')
    });

})(jQuery,Handlebars);
