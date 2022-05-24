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
            mediaPath = 'https://tropic-groupe.github.io/music/soirée/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Gims - Bella",
                "duration": "3:15",
                "file": "Gims - Bella"
            }, {
                "track": 2,
                "name": "Justin Timberlake - Can't stop the feeling",
                "duration": "3:38",
                "file": "Justin Timberlake - Can't stop the feeling"
            }, {
                "track": 3,
                "name": "Soprano - En feu",
                "duration": "3:18",
                "file": "Soprano - En feu"
            }, {
                "track": 4,
                "name": "Psy - Gangnam Style",
                "duration": "3:25",
                "file": "Psy - Gangnam Style"
            }, {
                "track": 5,
                "name": "Black Eyed Peas - I Gotta Feeling",
                "duration": "3:30",
                "file": "Black Eyed Peas - I Gotta Feeling"
            }, {
                "track": 6,
                "name": "Ofenbach - Katchi",
                "duration": "4:06",
                "file": "Ofenbach - katchi"
            }, {
                "track": 7,
                "name": "Kendji Girac - Color Gitano",
                "duration": "2:57",
                "file": "Kendji Girac - Color Gitano"
            }, {
                "track": 8,
                "name": "Soprano - le coach feat vincenzo",
                "duration": "3:14",
                "file": "Soprano - le coach feat vincenzo"
            }, {
                "track": 9,
                "name": "DJ Snake ft Justin Bieber - Let Me Love You",
                "duration": "3:03",
                "file": "DJ Snake ft Justin Bieber - Let Me Love You"
            }, {
                "track": 10,
                "name": "Calvin Harris - My Way",
                "duration": "3:28",
                "file": "Calvin Harris - My Way"
            }, {
                "track": 11,
                "name": "Stromae - Papaoutai",
                "duration": "3:18",
                "file": "Stromae - Papaoutai"
            }, {
                "track": 12,
                "name": "Ed Sheeran - Shape of you",
                "duration": "3:53",
                "file": "Ed Sheeran - shape of you"
            }, {
                "track": 13,
                "name": "Black M - Sur ma route",
                "duration": "3:42",
                "file": "Black M - Sur ma route"
            }, {
                "track": 14,
                "name": "DJ Snake ft Selena Gomez, Ozuna, Cardi B - Taki Taki",
                "duration": "3:12",
                "file": "DJ Snake ft Selena Gomez, Ozuna, Cardi B - Taki Taki"
            }, {
                "track": 15,
                "name": "Vicetone - Astronomia",
                "duration": "3:18",
                "file": "Vicetone - Astronomia"
            }, {
                "track": 16,
                "name": "David Guetta & Showtek - Bad ft.Vassy",
                "duration": "2:39",
                "file": "David Guetta & Showtek - Bad ft.Vassy"
            }, {
                "track": 17,
                "name": "David Guetta ft MORTEN - Nothing",
                "duration": "2:48",
                "file": "David Guetta ft MORTEN - Nothing"
            }, {
                "track": 18,
                "name": "Calvin Harris - Summer",
                "duration": "3:32",
                "file": "Calvin Harris - Summer"
            }, {
                "track": 19,
                "name": "Indochine - L'aventurier",
                "duration": "3:31",
                "file": "Indochine - l'aventurier"
            }, {
                "track": 20,
                "name": "Image - Les demons de minuit",
                "duration": "3:53",
                "file": "Image - Les demons de minuit"
            }, {
                "track": 21,
                "name": "Debut de soiree - Nuit de folie",
                "duration": "3:47",
                "file": "Debut de soiree - Nuit de folie"
            }, {
                "track": 22,
                "name": "Partenaire Particulier - Partenaire particulier",
                "duration": "3:51",
                "file": "Partenaire Particulier - Partenaire particulier"
            }, {
                "track": 23,
                "name": "Téléphone - ça c'est vraiment toi",
                "duration": "4:26",
                "file": "Téléphone - ça c'est vraiment toi"
            }, {
                "track": 24,
                "name": "Yanns - Clic clic pan pan",
                "duration": "2:34",
                "file": "Yanns - Clic clic pan pan"
            }, {
                "track": 25,
                "name": "Jul - Ça tourne dans ma tête",
                "duration": "2:55",
                "file": "Jul - Ça tourne dans ma tête"
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
