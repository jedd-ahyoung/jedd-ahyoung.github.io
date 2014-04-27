package com.lunchmeat317.keyhandlers
{
	import flash.display.Stage;
	import flash.events.KeyboardEvent;
	import flash.ui.Keyboard;
	import flash.utils.Dictionary;

	/**
	 * This class looks for user input events from the keyboard
	 * and passes them to the game loop for the appropriate action
	 * to be taken.
	 * @author lunchmeat317
	 */
	public final class Keyhandler
	{
		private var gamekey:Dictionary;
		private var keybind:Dictionary;
		
		public final function Keyhandler(stage:Stage)
		{
			stage.addEventListener(KeyboardEvent.KEY_DOWN, keyDown);
			stage.addEventListener(KeyboardEvent.KEY_UP, keyUp);
			
			gamekey = new Dictionary(); // Need strong references here.
			keybind = new Dictionary(); //
						
			initKeyDefaults();
		}
		
		private final function initKeyDefaults():void
		{
			// :TODO: Perhaps add support for keyboard schemes. This is what needs to be sanity-checked.
			// Keys should be uints and actions should be strings - dictionaries don't do type-checking.
			keybind[Keyboard.UP]    = "up";
			keybind[Keyboard.LEFT]  = "left";
			keybind[Keyboard.RIGHT] = "right";
			keybind[Keyboard.DOWN] = "down";
			keybind[65]    = "left";
			keybind[71]    = "right";
			keybind[69]    = "up";
					
			for each (var x:String in keybind) {
				gamekey[x] = false;
			}
		}
		
		private final function keyDown(key:KeyboardEvent):void
		{
			var id:uint = key.keyCode;
			if ((null == keybind[id]))	return;
			else gamekey[keybind[id]] = true;
		}
		
		private final function keyUp(key:KeyboardEvent):void
		{
			var id:uint = key.keyCode;
			if (null == keybind[id]) return;
			else gamekey[keybind[id]] = false;
		}
		
		// Function setKey returns true if it was successful, false if it wasn't.
		public final function setKey(newkey:uint, action:String):Boolean
		{
			if (keybind[newkey] != action) {
				keybind[newkey] = action;
				gamekey[action] = false;
				return true;
			}
			
			return true;
		}
		
		public final function getKeyID(action:String):uint
		{
			// Not sure how to do this one.
			return 0;
		}
		
		public final function getKeyName(key:uint):String
		{
			return keybind[key];
		}
		
		public final function get currentKeys():Dictionary
		{
			return gamekey;
		}
	}
}