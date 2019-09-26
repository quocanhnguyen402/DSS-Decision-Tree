class ARR_DATA_FILE{
    constructor(mysql){
        this.mysql = mysql;
        this.create_aff_file();
    }
    
    create_aff_file(){
        var mysql_result = '';
        this.mysql.get_data(function(result){
            mysql_result = result;
            console.log(mysql_result);
        });
    }
}

module.exports = ARR_DATA_FILE