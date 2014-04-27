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
	public final class BlitLayerCanvas extends BLOB
	{
		public var bloblist:Vector.<BLOB>;
		
		public function BlitLayerCanvas(width:uint, height:uint, x_pos:int, y_pos:int, x_rectpos:uint, y_rectpos:uint)
		{
			super(width, height, x_pos, y_pos, x_rectpos, y_rectpos, new BitmapData(width, height, true, 0x0));
			
			bloblist = new Vector.<BLOB>();
		}
		
		public function addObject(obj:BLOB):void
		{
			bloblist.push(obj);
			trace("BLOB added to bloblist");
		}
		
		public function update():void
		{
			for each (var x:BLOB in bloblist)
			{
				data.copyPixels(x.data, x.rect, x.point, null, null, true);
			}
		}
		
		public function flush():void
		{
			data.fillRect(data.rect, 0x0);
		}
	}

}