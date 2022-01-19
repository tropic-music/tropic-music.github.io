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
            mediaPath = 'https://tropic-music.github.io/hits2021/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Trei degete - Time time",
                "duration": "2:55",
                "file": "Trei Degete - Time Time"
            }, {
                "track": 2,
                "name": "Glass animals - Heat Waves",
                "duration": "3:25",
                "file": "Glass animals - Heat Waves"
            }, {
                "track": 3,
                "name": "Lil nas x ft Jack Harlow - INDUSTRY BABY",
                "duration": "3:24",
                "file": "Lil nas x ft Jack Harlow - INDUSTRY BABY"
            }, {
                "track": 4,
                "name": "VITAA & SLIMANE - XY",
                "duration": "2:35",
                "file": "VITAA & SLIMANE - XY"
            }, {
                "track": 5,
                "name": "Soso Madness - Petrouchka",
                "duration": "2:58",
                "file": "Soso Madness - Petrouchka"
            }, {
                "track": 6,
                "name": "Imagine Dragons - Wrecked",
                "duration": "3:30",
                "file": "Imagine Dragons - Wrecked"
            }, {
                "track": 7,
                "name": "Naps ft GIMS - Best life",
                "duration": "3:07",
                "file": "Naps ft GIMS - Best life"
            }, {
                "track": 8,
                "name": "Ambiance Skandal - Offishal",
                "duration": "2:32",
                "file": "Ambiance Skandal - Offishal"
            }, {
                "track": 9,
                "name": "OrelSan - L'odeur de l'essence",
                "duration": "3:55",
                "file": "OrelSan - L'odeur de l'essence"
            }, {
                "track": 10,
                "name": "Stromae - Santé",
                "duration": "3:25",
                "file": "Stromae - Santé"
            }, {
                "track": 11,
                "name": "Angèle - Bruxelles je t’aime",
                "duration": "3:26",
                "file": "Angèle Bruxelles je t’aime"
            }, {
                "track": 12,
                "name": "Feder ft Ofenbach – Call Me Papi",
                "duration": "2:20",
                "file": "Feder & Ofenbach – Call Me Papi"
            }, {
                "track": 13,
                "name": "Gazo x Ninho - Mauvais 2X",
                "duration": "3:43",
                "file": "GAZO x NINHO - MAUVAIS 2X"
            }, {
                "track": 14,
                "name": "Ckay - Love nwantiti",
                "duration": "3:03",
                "file": "love nwantiti ft Dj Yo & AX EL"
            }, {
                "track": 15,
                "name": "Squid Kids – Red Light, Green Light",
                "duration": "2:11",
                "file": "Squid Kids – Red Light, Green Light"
            }, {
                "track": 16,
                "name": "Coldplay X BTS - My Universe",
                "duration": "3:07",
                "file": "Coldplay X BTS - My Universe"
            }, {
                "track": 17,
                "name": "Ed Sheeran - Shivers",
                "duration": "3:21",
                "file": "Ed Sheeran - Shivers"
            }, {
                "track": 18,
                "name": "Dopamine ft Eyelar - Purple Disco Machine",
                "duration": "3:24",
                "file": "Purple Disco Machine - Dopamine ft. Eyelar"
            }, {
                "track": 19,
                "name": "Farruko - Pepas",
                "duration": "3:33",
                "file": "Farruko - Pepas"
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
