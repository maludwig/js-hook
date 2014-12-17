
function Hook(obj) {
	var ret = function(f) {
		if(typeof f == "function") {
			ret.bind(f);
		} else {
			ret.trigger.apply(ret.obj,arguments);
		}
	};
	ret.obj = obj;
	ret.hooks = [];
	ret.trigger = function() {
		for(var i=0;i<ret.hooks.length;i++) {
			var f = ret.hooks[i];
			f.apply(ret.obj,arguments);
		}
	};
	ret.bind = function(f) {
		this.hooks.push(f);
	};
	return ret;
}