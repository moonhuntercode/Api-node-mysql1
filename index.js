const app=require("./app/app")

//database
require('./config/connection');

app.listen(app.get('port'),(error)=>{
    if(error){
        console.log(`[there was an error :${error}`);
    }
    else
{
    console.log(`Server running on port: ${app.get('port')}`)
}
})