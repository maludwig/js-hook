Hook - Event Hooking mechanism
==================================================

Usage
--------------------------------------

```js
		$(function() {
            var h = new Hook($("body"));
            h(listener1); //Adds a listener
            h("aardvark","baboon","cat"); //Emits event, triggering all listeners (just listener1 right now)
            h(listener2); //Adds the second listener
            h("apple","banana","carrot"); //Emits event, triggering all listeners (both listeners are triggered)
		});
        function listener1(a,b,c) {
            this.append("<p>This is the first listener. {a:" + a + ", b:" + b + ", c:" + c + "}</p>");
        }
        function listener2() {
            this.append("<p>This is the second listener</p>");
        }
```
