package com.lunchmeat317.counters
{
	import flash.utils.Dictionary;

	public final class Counter
	// This is a "monostate" class.
	{
		private static var cycle:uint;
		private static var subcounters:Dictionary;
				
		public function Counter()
		{
			init();
		}

		private function init():void
		{
			cycle = 0;
			subcounters = new Dictionary(true); // Weak references in this dictionary instance.
		}
		
		public function increment():void
		{
			decrementAllSubcounters();
			cycle++;
		}
		
		public static function addSubCounter(key:Object):Subcounter
		// This function takes an object as an argument and uses it as a key for a subcounter.
		{
			subcounters[key] = new Subcounter();
			return subcounters[key];
		}
		
		private function decrementAllSubcounters():void 
		{	
			for (var x:Object in subcounters) {
				subcounters[x].decrementAllElements();
			}
		}
		
		public function getCyclesElapsed():uint
		{
			return cycle;
		}
	}
}