

var moduleExample = function (){
	
	var s =0;
	var prefix = '';
	
	return {
		set_s_value:function(new_s){
			s = new_s
		},
		get_s_value:function (){
			return s
		},
		set_prefix_value:function(new_prefix){
			prefix = new_prefix
		},
		do_manipulation:function(){
			return String(prefix+s)
		}
	}
}

var make_use = moduleExample();
make_use.set_s_value('1000');
make_use.set_prefix_value('Q');
make_use.do_manipulation();