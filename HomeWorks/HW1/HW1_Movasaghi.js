/*
 *  Name : MH.Movasaghinia
 *  Homework-01
 *  Class : Node_9802
 */
s = [
    20,
    'ali',
    false,
    5.5,
    "80",
    [
        'ali',
        'reza',
        27,
        "80",
        [
            2, 4, true, {}
        ]
    ]
];
res = [];
function find(arg , i = 0)
{  
    for(element in arg)
    {
        if(typeof (arg[element]) != 'object')
        {
            if(!isNaN(+arg[element]) && typeof(arg[element]) != 'boolean') //parefloat(number) : if it is boolean return NaN
            {                
                res[i] = (+arg[element]);
                i++;
            }    
        }
        else
        {
            find(arg[element],i);
        }        
    }
}
function Show_Result(a)
{
    find(a);
    for(e in res)
        console.log(res[e]);
}
Show_Result(s);