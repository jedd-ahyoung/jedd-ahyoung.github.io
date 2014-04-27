package com.lunchmeat317.graphics
{
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.Stage;
	import flash.geom.Rectangle;
	/**
	 * ...
	 * @author lunchmeat317
	 */
	public final class BlitEngine extends BLOB
	{
		private var stagewidth:uint;
		private var stageheight:uint;
		
		protected var bmp:Bitmap;
				
		// Layer array.
		private var layerlist:Vector.<BlitLayerCanvas>;
		private var layerlist2:Vector.<BlitLayer>;
		
		public function BlitEngine(stage:Stage)
		{
			stagewidth = stage.stageWidth;
			stageheight = stage.stageHeight;
			
			super(stage.stageWidth, stage.stageHeight, 0, 0, 0, 0, new BitmapData(stage.stageWidth, stage.stageHeight, true, 0x0));
			
			bmp = new Bitmap(data, "auto", false);
			
			layerlist2 = new Vector.<BlitLayer>();
			
			stage.addChild(bmp);
		}
		
		public function initBlitLayerCanvas(width:uint, height:uint, x_pos:int = 0, y_pos:int = 0, x_rectpos:uint = 0, y_rectpos:uint = 0):BlitLayerCanvas
		{
			var layer:BlitLayerCanvas = new BlitLayerCanvas(stagewidth, stageheight, x_pos, y_pos, x_rectpos, y_rectpos);
			layerlist.push(layer);
			return layer;
		}
		
		public function initBlitLayer():BlitLayer
		{
			var layer:BlitLayer = new BlitLayer();
			layerlist2.push(layer);
			return layer;
		}
		
		public function commitLayersToCanvas():void
		{
			for each (var x:BlitLayer in layerlist2)
			{
				for each (var y:BLOB in x.bloblist)
				{
					data.copyPixels(y.data, y.rect, y.point, null, null, true);
				}
			}
		}
		
		public function commitLayerCanvassesToCanvas():void
		{
			// canvas_data.fillRect(canvas_rect, 0x0);
			for each (var x:BlitLayerCanvas in layerlist)
			{
				x.update();
				data.copyPixels(x.data, x.rect, x.point, null, null, true);
			}
		}
		
		public function clear():void
		{
			//for each (var x:BlitLayer in layerlist)
			//{
			//	x.flush();
			//}
			data.fillRect(data.rect, 0x0);
		}
		
		public function refresh():void
		{
			data.unlock();
			data.lock();
		}
	}
}