jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {

        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume',
                'download'
            ]
        });

        var index = 0,
            playing = false,
            mediaPath = 'https://tropic-music.github.io/hits2022/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Imagine dragons - Enemy",
                "duration": "2:42",
                "file": "Imagine dragons - Enemy"
            }, {
                "track": 2,
                "name": "Kungs - Regarde-moi",
                "duration": "2:51",
                "file": "Kungs - Regarde-moi"
            },  {
                "track": 3,
                "name": "OrelSan - Jour meilleur",
                "duration": "3:36",
                "file": "OrelSan - Jour meilleur"
            }, {
                "track": 4,
                "name": "Ed Sheeran ft Elton John - Merry Christmas",
                "duration": "3:18",
                "file": "Ed Sheeran ft Elton John - Merry Christmas"
            }, {
                "track": 5,
                "name": "Gregory Porter - Dry Bones",
                "duration": "2:55",
                "file": "Gregory Porter - Dry Bones"
            }, {
                "track": 6,
                "name": "The weeknd ft Swedish House Mafia - Moth To a Flame",
                "duration": "3:36",
                "file": "The weeknd x Swedish House Mafia - Moth To a Flame"
            }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackNumber + '.</span> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + '</span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Vous écoutez...');
            }).on('pause', function () {
                playing = false;
                npAction.text('En pause...');
            }).on('ended', function () {
                npAction.text('En pause...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
                updateDownload(id, audio.src);
            },
            updateDownload = function (id, source) {
                player.on('loadedmetadata', function () {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    } else {

        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});
