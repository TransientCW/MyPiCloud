/**
 * Created by foolishklown on 9/29/2016.
 */
angular.module('MyPiCloud')
    .factory('MyPiFactory', [
        myPiFactFunc
    ]);

function myPiFactFunc() {
    console.log('Factory Function initialized');

    var factory = this;

    factory.userMedia = {
        audio: [],
        video: [],
        image: [],
        document: []
    };

    factory.images = {
        audioUrl: '../img/audio.png',
        videoUrl: '../img/video.png',
        imageUrl: '../img/image.png',
        documentUrl: '../img/document.png'
    };

    return {
        media: factory.userMedia,
        imageUrl: factory.images
    }
}