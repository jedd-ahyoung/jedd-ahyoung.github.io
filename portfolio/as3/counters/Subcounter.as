package com.lunchmeat317.counters
{
	import flash.utils.Dictionary;

	public final class Subcounter
	{
		private var elements:Dictionary;
		
		public function Subcounter()
		{
			elements = new Dictionary();
		}
		
		public function addNewElement(name:String, value:uint, stepsize:uint = 1):void
		{
			// :TODO: Find a way to store the stepsize with the key/value pair, in order to iterate using the stepsize value.
			elements[name] = value;
		}
		
		public function checkElementValue(name:String):uint
		// May have to change this one to return a uint instead of a Boolean.
		{
			return elements[name];
		}
		
		internal function decrementAllElements():void
		// This function is meant to be called by the controller Counter object.
		{
			for (var x:String in elements) {
				if (0 == elements[x])
					delete elements[x];
					// Is this necessary? It may not be if the number of counters is fixed...if each object regularly uses a number of
					// counters, this may cause unnecessary overhead. May be easier to wait until the owner object is killed.
				else {
					elements[x]--;
				}
			}
		}
	}
}