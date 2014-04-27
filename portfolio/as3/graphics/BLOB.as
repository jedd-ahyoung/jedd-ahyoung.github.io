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
	public class BLOB
	// BLOB stands for BLit OBject.
	{
		// These are the core variables of this class. Debating whether to make these
		// internal or protected. Protected is logical, but are getters slower for
		// parsing?
		
		internal var data:BitmapData;
		internal var rect:Rectangle;
		internal var point:Point;
		
		// To be used with scrollrect in order to animate frames. Frameoffset...shit.
		// Do I pull these values from rect.width and rect.height? Is this necessary?
		// Maybe I should just make these booleans? Perhaps these value can be the
		// quotient of the rect dims from the bitmap dims? No idea. (That could help
		// with wrapping.)
		private var frameoffset:uint;
		
		// Variable that determines whether to blit this object or not. Blitting engine
		// will check this condition for each object it blits. True by default.
		private var visible:Boolean;
		
		public function BLOB(width:uint, height:uint, x_pos:int, y_pos:int, x_rectpos:uint, y_rectpos:uint, image:BitmapData)
		{
			data = image;
			rect = new Rectangle(x_rectpos, y_rectpos, width, height);
			point = new Point(x_pos, y_pos);
			
			visible = true;
			
			data.lock();
		}
		
		public function setVisibleState(value:Boolean):void
		{
			visible = value;
		}
		
		public function getVisibleState():Boolean
		{
			return visible;
		}
		
		public function setLocation(location:Point):void
		{
			point = location;
		}
		
		public function getLocation():Point
		{
			return point;
		}
		
		public function move(dx:Number, dy:Number):void
		{
			point.offset(dx, dy);
		}
		
		public function scroll(dx:Number, dy:Number):void
		{
			rect.x += dx;
			rect.y += dy;
		}
	}
}