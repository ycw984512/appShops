seajs.config({
	alias: {
		'jquery': 'jquery/jquery/1.10.1/jquery',
		'$': 'jquery/jquery/1.10.1/jquery',
		'$-debug': 'jquery/jquery/1.10.1/jquery-debug',
		"jquery.migrate": "jquery-plugin/migrate/1.1.0/migrate",
		"jquery.form": "jquery-plugin/form/3.44.0/form",
		"jquery.sortable": "jquery-plugin/sortable/0.9.10/sortable.js",
		"jquery.raty": "jquery-plugin/raty/2.5.2/raty",
		"jquery.cycle2": "jquery-plugin/cycle2/2013.08.01/cycle2",
		"jquery.perfect-scrollbar": "jquery-plugin/perfect-scrollbar/0.4.8/perfect-scrollbar",
		"jquery.select2": "jquery-plugin/select2/3.4.1/select2",
		"jquery.select2-css": "jquery-plugin/select2/3.4.1/select2.css",
		"jquery.jcrop": "jquery-plugin/jcrop/0.9.12/jcrop",
		"jquery.jcrop-css": "jquery-plugin/jcrop/0.9.12/jcrop.css",
		"jquery.nouislider": "jquery-plugin/nouislider/5.0.0/nouislider",
		"jquery.nouislider-css": "jquery-plugin/nouislider/5.0.0/nouislider.css",
		'jquery.bootstrap-datetimepicker': "jquery-plugin/bootstrap-datetimepicker/1.0.0/datetimepicker",
        'jquery.bootstrap-unslider': "jquery-plugin/bootstrap-unslider/unslider",
		'jquery.media': "jquery-plugin/media/0.9.2/media",
		"plupload": "jquery-plugin/plupload-queue/2.0.0/plupload",
		"jquery.plupload-queue-css": "jquery-plugin/plupload-queue/2.0.0/css/queue.css",
		"jquery.plupload-queue": "jquery-plugin/plupload-queue/2.0.0/queue",
		"jquery.plupload-queue-zh-cn": "jquery-plugin/plupload-queue/2.0.0/i18n/zh-cn",
		"jquery.lazyload":"jquery-plugin/lazyload/1.9.0/lazyload",
		"jquery.mmenu":"jquery-plugin/mmenu/mmenu",
		"mediaelementplayer": "gallery2/mediaelement/2.14.2/mediaelement-and-player",
		'bootstrap': 'gallery2/bootstrap/3.1.1/bootstrap',
		'kindeditor': 'gallery2/kindeditor/4.1.10/kindeditor',
		'autocomplete': 'arale/autocomplete/1.2.2/autocomplete',
		'upload': 'arale/upload/1.1.0/upload',
		'bootstrap.validator': 'common/validator',
		'locater': 'common/locater',
		'class': 'arale/class/1.1.0/class',
		'base': 'arale/base/1.1.1/base',
		'widget': 'arale/widget/1.1.1/widget',
		'position' : 'arale/position/1.0.1/position',
		'overlay' : 'arale/overlay/1.1.4/overlay',
		'mask' : 'arale/overlay/1.1.4/mask',
		'sticky': 'arale/sticky/1.3.1/sticky',
		"templatable": "arale/templatable/0.9.1/templatable",
		'placeholder': 'arale/placeholder/1.1.0/placeholder',
		'json': 'gallery/json/1.0.3/json',
		'cookie': 'arale/cookie/1.0.2/cookie',
		'store': 'store/1.3.16/store',
		"handlebars": "gallery/handlebars/1.0.2/handlebars",
		"backbone": "gallery/backbone/1.0.0/backbone",
		"swfobject": "gallery/swfobject/2.2.0/swfobject.js",
		"pdfobject": "gallery/pdfobject/1.2.0/pdfobject.js",
		'moment' : 'gallery/moment/2.5.1/moment',
		'morris': 'gallery/morris/0.5.0/morris',
		'swfupload': 'gallery2/swfupload/2.2.0/swfupload',
		'webuploader': 'gallery2/webuploader/0.1.2/webuploader',
		'screenfull': 'gallery2/screenfull/1.1.1/screenfull',
		'zeroclipboard':'gallery2/zeroclipboard/2.2.0/ZeroClipboard',
		'edusoho.linkselect': 'edusoho/linkselect/1.0/linkselect-debug.js',
		'edusoho.chunkupload': 'edusoho/chunkupload/1.0/chunk-upload.js',
		'edusoho.uploadpanel': 'edusoho/uploadpanel/1.0/upload-panel.js',
		'edusoho.uploadProgressBar': 'edusoho/uploadprogressbar/1.0/upload-progress-bar.js',
		'webcam': 'webcamjs/webcam.js',
		'video-player': 'balloon-video-player/1.0.0/index',
		'HttpPost': 'HTTPClient/HttpPost',
		'dialog': 'dialog/1.34.9/js/bootstrap-dialog.min.js',
		'layer': 'layer/2.4/layer.js',
		'fileinput': 'bootstrap-fileinput/js/fileinput.min.js',
		'pagination': 'jquery-plugin/pagination/js/jquery.pagination.min.js',
        'unslider': 'jquery-plugin/unslider-master/dist/js/unslider-min.js',
		'slider': 'jquery-plugin/slider/js/rangeslider.min.js',
		'qrcode': 'jquery-plugin/qrcode/jquery.qrcode.main.min.js',
		//'server': '../widget/server.js'
		'jQueryFileUploadBasic': 'jQuery-File-Upload-9.13.1/js/basic',
		'api': 'api/api',
		'CommentCore': 'CommentCoreLibrary/CommentCoreLibrary',
		'eduTools': 'bower_components/tools/js/tools_url-min.js',
		'hqplayer-swf': 'hqplayer/swfobject2.0.js',
		'hqplayer':'http://s.edu24ol.com/statics/home/js/hqplayer/hqplayer.1.0.min.js'
	},

	// 预加载项
	preload: [this.JSON ? '' : 'json'],

	// 路径配置
	paths: app.jsPaths,

	// 变量配置
	vars: {
		'locale': 'zh-cn'
	},
	//文件映射
	map: [
		//可配置版本号
		['.css', '.css?' + app.version],
		['.js', '.js?' + app.version]
	],
	charset: 'utf-8'

});
