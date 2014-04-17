angular.
    module('productList',[]).
    factory('ProductListService',function(){
	return [
	    
	    {id:'1',title:'Hackathon Style Info',url:'http://hackathon.style-info.org/#!/',description:'ハッカソンをリスト表示する。ハッカソンで作ったプログラムを登録！！',members:['kazuaki.fujimoto.31','omatty.ikuya','yamanaka.osamu.7']},
	    {id:'2',title:'ブレストツクール',url:'http://brstxp.com/',description:'離れた場所でもブレストできる！！',members:['yamanaka.osamu.7']},
	];
    });
