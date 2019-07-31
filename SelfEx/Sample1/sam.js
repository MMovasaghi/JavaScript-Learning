(function(a,hbs){

    let sample ={
        
        bootstrap: function(conf)
        {
            this.config = conf;
            this.template = hbs.compile(this.config.temp);
            this.ButtonClick_GetData();
            
        },
        ButtonClick_GetData : function()
        {
            this.config.ButtonEvent.on('click', this.getdata.bind(this));
        },
        getdata: function()
        {            
            $.ajax({
                url : this.config.url,
                method : 'GET',
                beforeSend: this.PageHandler_BeforeSend.bind(this),
                success: this.DataHandler_Success.bind(this),
                error: this.DataHandler_Error.bind(this),
                complete: this.CompleteHandler.bind(this)

            });
        },
        DataHandler_Success: function(results)
        {
            if (results && Array.isArray(results) && results.length)
            {
                this.setUsersIntoDom(this.template(results));
            }
        },
        DataHandler_Error: function(result)
        {
            console.log('Error');
        },
        CompleteHandler: function()
        {
            console.log('Recived Complete');
            this.config.loadingElement.toggle();
        },
        PageHandler_BeforeSend: function()
        {
            console.log('Sending ...');
            this.config.loadingElement.toggle();
        },
        setUsersIntoDom: function(html)
        {
            this.config.content.html(html);
        }
    };
    sample.bootstrap({
        url : 'http://localhost/cms/public/readall',
        ButtonEvent : $('#get-data'),
        loadingElement : $('#loading'),
        temp : $('#entry-template').html(),
        content : $('#content')
    });
})(jQuery,Handlebars);