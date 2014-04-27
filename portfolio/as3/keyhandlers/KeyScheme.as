package com.lunchmeat317.keyhandlers
{
	import flash.utils.Dictionary;

	public final class KeyScheme
	{
	// This class will use two vectors - one of strings and another of uints. That way, we can type-check
	// and cast both vectors to a single dictionary in Keyhandler. Class will read input from an XML file for this.
		
		private var keycodes:Vector.<uint>;
		private var actions:Vector.<string>;
		
		public function KeyScheme(schemename:String)
		{
			
		}
	}
}