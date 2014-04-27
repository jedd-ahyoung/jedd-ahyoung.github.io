package com.lunchmeat317.gamestate
{
	public final class StateEngine
	{
		private var stateStack:Vector.<Gamestate>;
				
		public function StateEngine(state:Gamestate)
		{
			stateStack = new Vector.<Gamestate>();
		}
		
		public function push(state:Gamestate):void
		{
			stateStack.push(state);
		}
		
		public function getCurrentState():Gamestate
		{
			return stateStack[stateStack.length - 1];
		}
		
		public function pop():void
		{
			stateStack.pop();
		}
	}
}