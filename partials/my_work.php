<h3>Artwork & Design</h3>
<div class="highslide-gallery">
	<ul>
	<li>
	<a href="<?php echo $rootdir ?>/portfolio/images/quackie1.png" class="highslide" 
			title="Skateboard Deck Design: Quackie 1" 
			onclick="return hs.expand(this, config1 )">
		<img src="<?php echo $rootdir ?>/portfolio/images/quackie1.thumb.png" width="150" height="150"  alt=""/>
	</a>
	</li>
	<li>
	<a href="<?php echo $rootdir ?>/portfolio/images/quackie2.png" class="highslide" 
			title="Skateboard Deck Design: Quackie 2"
			onclick="return hs.expand(this, config1 )">
		<img src="<?php echo $rootdir ?>/portfolio/images/quackie2.thumb.png" width="150" height="150"  alt=""/>
	</a>
	</li>
	<li>
	<a href="<?php echo $rootdir ?>/portfolio/images/makelovenotwar.jpg" class="highslide" 
			title="Shirt Design: Make Love, Not War"
			onclick="return hs.expand(this, config1 )">
		<img src="<?php echo $rootdir ?>/portfolio/images/makelovenotwar.thumb.jpg" width="150" height="150"  alt=""/>
	</a>
	</li>
	<li>
	<a href="<?php echo $rootdir ?>/portfolio/images/knightindustriesfinal.png" class="highslide" 
			title="Logo Design: Knight Industries, ReImagined"
			onclick="return hs.expand(this, config1 )">
		<img src="<?php echo $rootdir ?>/portfolio/images/knightindustriesfinal.thumb.png" width="150" height="150"  alt=""/>
	</a>
	</li>
	<li>
	<a href="<?php echo $rootdir ?>/portfolio/images/horseemblemsqm9.jpg" class="highslide" 
			title="Original Knight Industries logos from Knight Rider (for comparison)"
			onclick="return hs.expand(this, config1 )">
		<img src="<?php echo $rootdir ?>/portfolio/images/krlogoorig.jpg" width="150" height="150"  alt=""/>
	</a>
	</li>
	<li>
	<a href="<?php echo $rootdir ?>/portfolio/images/kr_wip.png" class="highslide" 
			title="Work-in-Progress Snapshot of Knight Industries logo"
			onclick="return hs.expand(this, config1 )">
		<img src="<?php echo $rootdir ?>/portfolio/images/kr_wip.thumb.png" width="150" height="150"  alt=""/>
	</a>
	</li>
	<li>
	<a href="<?php echo $rootdir ?>/portfolio/images/dococ.png" class="highslide" 
			title="Character Pinup: Doctor Octopus, sketch"
			onclick="return hs.expand(this, config1 )">
		<img src="<?php echo $rootdir ?>/portfolio/images/dococ.thumb.jpg"  width="150" height="150" alt=""/>
	</a>
	</li>
	<li>
	<a href="<?php echo $rootdir ?>/portfolio/images/dococolor.jpg" class="highslide" 
			title="Character Pinup: Doctor Octopus, colored in Photoshop"
			onclick="return hs.expand(this, config1 )">
		<img src="<?php echo $rootdir ?>/portfolio/images/dococolor.thumb.jpg" width="150" height="150"  alt=""/>
	</a>
	</li>
	</ul>
	<div style="clear:both"></div></div>

<h3>ActionScript 3 Code Samples</h3>
<dl>
<dt>Graphics Engine: Frame Blitter (com.lunchmeat317.graphics)</dt>
	<dd class="explain">This is an AS3 graphics package written to bypass Flash's native display list using the <code>BitmapData.copypixels</code> method. Drawing graphics with this method results in faster execution speed.</dd>
	<dd><a href="<?php echo $rootdir ?>/include/codewindow.php?filepath=/jedd/portfolio/as3/graphics/BLOB.as" onclick="return hs.htmlExpand(this, { 
			objectType: 'ajax', width: 900, 
			headingText: 'BLOB.as: BLOB, short for Blit Object. The building block of the class.', wrapperClassName: 'titlebar' } )">com.lunchmeat317.graphics.BLOB</a>
	</dd>
	<dd><a href="<?php echo $rootdir ?>/include/codewindow.php?filepath=/jedd/portfolio/as3/graphics/BlitLayer.as" onclick="return hs.htmlExpand(this, { 
			objectType: 'ajax', width: 900, 
			headingText: 'BlitLayer.as: Provides layering features.', wrapperClassName: 'titlebar' } )">com.lunchmeat317.graphics.BlitLayer</a>
	</dd>
	<dd><a href="<?php echo $rootdir ?>/include/codewindow.php?filepath=/jedd/portfolio/as3/graphics/BlitLayerCanvas.as" onclick="return hs.htmlExpand(this, { 
			objectType: 'ajax', width: 900, 
			headingText: 'BlitLayerCanvas.as: Provies layering features.', wrapperClassName: 'titlebar' } )">com.lunchmeat317.graphics.BlitLayerCanvas</a>
	</dd>
	<dd><a href="<?php echo $rootdir ?>/include/codewindow.php?filepath=/jedd/portfolio/as3/graphics/BlitEngine.as" onclick="return hs.htmlExpand(this, { 
			objectType: 'ajax', width: 900, 
			headingText: 'BlitEngine.as: The heart of the blitter. Renders BLOBs in a serial pipeline.', wrapperClassName: 'titlebar' } )">com.lunchmeat317.graphics.BlitEngine</a>
	</dd>
<dt>Input Methods: Keyhandler Package (com.lunchmeat317.keyhandler)</dt>
	<dd class="explain">A simple, yet elegant class that abstracts keypresses to user-defined names; the names are returned in a Dictionary object and can be used to run user functions.</dd>
	<dd><a href="<?php echo $rootdir ?>/include/codewindow.php?filepath=/jedd/portfolio/as3/keyhandlers/Keyhandler.as" onclick="return hs.htmlExpand(this, { 
			objectType: 'ajax', width: 900, 
			headingText: 'Keyhandler.as: The main class.', wrapperClassName: 'titlebar' } )">com.lunchmeat317.keyhandlers.Keyhandler</a>
	</dd>
	<dd><a href="<?php echo $rootdir ?>/include/codewindow.php?filepath=/jedd/portfolio/as3/keyhandlers/KeyScheme.as" onclick="return hs.htmlExpand(this, { 
			objectType: 'ajax', width: 900, 
			headingText: 'KeyScheme.as: Optional class to define key layouts.', wrapperClassName: 'titlebar' } )">com.lunchmeat317.keyhandlers.KeyScheme</a>
	</dd>
<dt>Helper Class: Counter/Subcounters (com.lunchmeat317.counter)</dt>
	<dd class="explain">A utility package that provides a single incrementing master counter and an unlimited number of user-defined subcounters. Subcounters can only be updated by incrementing the master counter, preventing user error.</dd>
	<dd><a href="<?php echo $rootdir ?>/include/codewindow.php?filepath=/jedd/portfolio/as3/counters/Counter.as" onclick="return hs.htmlExpand(this, { 
			objectType: 'ajax', width: 900, 
			headingText: 'Counter.as: A monostate class that creates an incrementing counter.', wrapperClassName: 'titlebar' } )">com.lunchmeat317.counters.Counter</a>
	</dd>
	<dd><a href="<?php echo $rootdir ?>/include/codewindow.php?filepath=/jedd/portfolio/as3/counters/Subcounter.as" onclick="return hs.htmlExpand(this, { 
			objectType: 'ajax', width: 900, 
			headingText: 'SubCounter.as: A class that can only be instantiated and updated from the Counter class.', wrapperClassName: 'titlebar' } )">com.lunchmeat317.counters.Subcounter</a>
	</dd>
</dl>
<h3>Flash Samples</h3>
<dl>
<dt>GDF-22: The battle for Earth</dt>
	<dd class="explain">A splash-screen demonstration for an upcoming game, utilizing the com.lunchmeat.graphics blitting engine and a custom-built particle engine rendering 10,000 particles per frame.</dd>
	<dd><a href="<?php echo $rootdir ?>/portfolio/flash/GDF-22.swf" onclick="return hs.htmlExpand(this, { 
			objectType: 'swf', width: 800, 
			objectWidth: 800, objectHeight: 600, 
			preserveContent: false, wrapperClassName: 'no-footer titlebar', 
			allowSizeReduction: false, maincontentText: 'You need to upgrade your Flash player', 
			headingText: 'Ganymede Defense Force Splash Screen Demo' } )">
		GDF-22 Splash Screen Demo</a>
	</dd>
</dl>
<dl>
<dt>SoundLoader: An MP3 player with a small footprint.</dt>
	<dd class="explain">Version 1 of an MP3 player designed for webpage deployment that takes an MP3 file as an HTML argument.</dd>
	<dd><a href="<?php echo $rootdir ?>/portfolio/flash/SoundLoader/SoundLoader.swf" onclick="return hs.htmlExpand(this, { 
			objectType: 'swf', width: 243, 
			objectWidth: 243, objectHeight: 77, 
			swfOptions: {flashvars: { URL: 'http://jedd-ahyoung.com/juggernaut/Take_Five.mp3' }},
			preserveContent: false, wrapperClassName: 'no-footer titlebar', 
			allowSizeReduction: false, maincontentText: 'You need to upgrade your Flash player', 
			headingText: 'SoundLoader MP3 Player' } )">
		SoundLoader V1</a>
	</dd>
</dl>
