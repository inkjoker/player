define(function(require, module, exports) {
	require('jquery');
	require('underscore');
	
	$('#player').viPlayer({
        width: 300,
        height: 300,
        baseUrls: 'http://cutwise-dev.s3.amazonaws.com',
        setsPoster: 'http://cutwise-dev.s3.amazonaws.com/media/video/video360Pavilion/15/100712808455/frame0_300.jpg',
        resourcePath: '/media/video/video360Pavilion/15/100712808455/',
        stereoVideoUrl: 'http://cutwise-dev.s3.amazonaws.com/media/video/video360Pavilion/15/100712808455/stereo_300.webm',
        mediaFormat: 'sets',
        postFix: '_300',
        resourceSetsCount: 4,
        isSubDomain: true
    });

});