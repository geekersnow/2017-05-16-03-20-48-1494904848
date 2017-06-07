const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
    
	var itemsList = loadAllItems();
	var count = [],sum = 0; 
	for(var m =0 ; m < itemsList.length; m++)
    {
    	count[m]=0;
    }
	var textout= '***<没钱赚商店>购物清单***\n' ;
	for(var i = 0;i < inputs.length; i++ )
		for(var j = 0; j < itemsList.length; j++)
			if (inputs[i] == itemsList[j].barcode)
			{
				count[j] ++;
			}
		
	for (var k=0; k<itemsList.length; k++)
		if(count[k] != 0)
		{
			textout += '名称：'+itemsList[k].name+'，数量：'+ count[k]+itemsList[k].unit+'，单价：'+(itemsList[k].price).toFixed(2)+'(元)，小计：'+(count[j] * (itemsList[j].price)).toFixed(2)+'(元)\n' 
			sum += count[j] *(itemsList[j].price);
		}   
	
	textout += '----------------------\n总计：'+ sum.toFixed(2) +'(元)\n**********************';   	
	console.log(textout);
};

