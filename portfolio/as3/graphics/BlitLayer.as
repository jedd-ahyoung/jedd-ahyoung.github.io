package com.lunchmeat317.graphics
{
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.geom.Point;
	import flash.geom.Rectangle;
	
	/**
	 * ...
	 * @author lunchmeat317
	 */
	public final class BlitLayer
	{
		public var bloblist:Vector.<BLOB>;
		
		public function BlitLayer()
		{
			bloblist = new Vector.<BLOB>();
		}
		
		public function addObject(obj:BLOB):void
		{
			bloblist.push(obj);
			trace("BLOB added to bloblist");
		}
	}
}