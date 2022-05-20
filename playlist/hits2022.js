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
                "name": "Celestal ft Cecilia Krull - Out in style",
                "duration": "2:40",
                "file": "Celestal ft Cecilia Krull - Out in style"
            }, {
                "track": 2,
                "name": "Kygo ft DNCE - Dancing Feet",
                "duration": "2:40",
                "file": "Kygo ft DNCE - Dancing Feet"
            }, {
                "track": 3,
                "name": "Goerge Ezra - Anyone For You",
                "duration": "2:40",
                "file": "Goerge Ezra - Anyone For You"
            }, {
                "track": 4,
                "name": "Dorely - Où que tu sois",
                "duration": "2:40",
                "file": "Dorely - Où que tu sois"
            }, {
                "track": 5,
                "name": "Jax Jones ft MNEK - Where Did You Go",
                "duration": "2:54",
                "file": "Jax Jones ft MNEK - Where Did You Go"
            }, {
                "track": 6,
                "name": "Imanbek & BYOR - Belly Dancer",
                "duration": "2:21",
                "file": "Imanbek & BYOR - Belly Dancer"
            }, {
                "track": 7,
                "name": "Sound of legend - Maniac",
                "duration": "2:07",
                "file": "Sound of legend - Maniac"
            }, {
                "track": 8,
                "name": "David Guetta ft Becky Hill ft Ella Henderson - Crazy what love can do",
                "duration": "2:38",
                "file": "David Guetta ft Becky Hill ft Ella Henderson - Crazy what love can do"
            }, {
                "track": 9,
                "name": "Lujipeka - Pas à ma place",
                "duration": "2:44",
                "file": "Lujipeka - Pas à ma place"
            }, {
                "track": 10,
                "name": "Angèle - Libre",
                "duration": "2:37",
                "file": "Angèle - Libre"
            }, {
                "track": 11,
                "name": "Harry Style - As It Was",
                "duration": "2:37",
                "file": "Harry Style - As It Was"
            }, {
                "track": 12,
                "name": "Purple disco machine - In The Dark",
                "duration": "2:56",
                "file": "Purple disco machine - In The Dark"
            }, {
                "track": 13,
                "name": "Feder - Strangers",
                "duration": "2:45",
                "file": "Feder - Strangers"
            }, {
                "track": 14,
                "name": "Kikesa ft Soprano - Tout ira bien",
                "duration": "2:30",
                "file": "Kikesa ft Soprano - Tout ira bien"
            }, {
                "track": 15,
                "name": "Camila cabello ft Ed sheeran - Bam Bam",
                "duration": "3:22",
                "file": "Camila cabello ft Ed sheeran - Bam Bam"
            }, {
                "track": 16,
                "name": "Clara Luciani - Amour toujours",
                "duration": "3:10",
                "file": "Clara Luciani - Amour toujours"
            }, {
                "track": 17,
                "name": "Willy Wiliams - Trompeta",
                "duration": "2:29",
                "file": "Willy Wiliams - Trompeta"
            }, {
                "track": 18,
                "name": "Soprano - NKOTB",
                "duration": "3:30",
                "file": "Soprano - NKOTB"
            }, {
                "track": 19,
                "name": "Adèle - Oh My God",
                "duration": "3:41",
                "file": "Adèle - Oh My God"
            }, {
                "track": 20,
                "name": "Yanns - Clic clic pan pan",
                "duration": "2:34",
                "file": "Yanns - Clic clic pan pan"
            }, {
                "track": 21,
                "name": "Orelsan - La Quête",
                "duration": "3:44",
                "file": "Orelsan - La Quête"
            }, {
                "track": 22,
                "name": "Ridsa - Santa Maria",
                "duration": "2:56",
                "file": "Ridsa - Santa Maria"
            }, {
                "track": 23,
                "name": "Ownboss ft Sevek - Move Your Body",
                "duration": "2:18",
                "file": "Ownboss ft Sevek - Move Your Body"
            }, {
                "track": 24,
                "name": "Keen'v - Affaire classée",
                "duration": "2:42",
                "file": "Keen'v - Affaire classée"
            }, {
                "track": 25,
                "name": "Inna ft Sean Paul - UP",
                "duration": "2:27",
                "file": "Inna ft Sean Paul - UP"
            }, {
                "track": 26,
                "name": "Tayc - Dodo",
                "duration": "2:54",
                "file": "Tayc - Dodo"
            }, {
                "track": 27,
                "name": "Pepas ft DJ Adoni - El Incomprendido",
                "duration": "3:45",
                "file": "Pepas ft DJ Adoni - El Incomprendido"
            }, {
                "track": 28,
                "name": "CKay - Emiliana",
                "duration": "2:30",
                "file": "CKay - Emiliana"
            }, {
                "track": 29,
                "name": "Soolking - Suavemente",
                "duration": "2:30",
                "file": "Soolking - Suavemente"
            }, {
                "track": 30,
                "name": "Kungs - Clap Your Hands",
                "duration": "2:50",
                "file": "Kungs - Clap Your Hands"
            }, {
                "track": 31,
                "name": "Martin Garix ft Matisse & Sadko et John Martin - Won’t Let You Go",
                "duration": "3:27",
                "file": "Martin Garix - Won’t Let You Go"
            }, {
                "track": 32,
                "name": "Mc Fly & Carlito - Infini +1000",
                "duration": "2:44",
                "file": "Mc Fly & Carlito - Infini +1000"
            }, {
                "track": 33,
                "name": "Angèle ft Damso - Démons",
                "duration": "3:20",
                "file": "Angèle ft Damso - Démons"
            }, {
                "track": 34,
                "name": "The Weeknd - Sacrifice",
                "duration": "3:05",
                "file": "The Weeknd - Sacrifice"
            }, {
                "track": 35,
                "name": "Kungs - Lipstick",
                "duration": "2:51",
                "file": "Kungs - Lipstick"
            }, {
                "track": 36,
                "name": "Robin Schul ft Dennis Lloyd - Young Right Now",
                "duration": "2:53",
                "file": "Robin Schulz x Dennis Lloyd - Young Right Now"
            }, {
                "track": 37,
                "name": "Message In A Bottle (Colorblast Version)",
                "duration": "2:31",
                "file": "Message In A Bottle (Colorblast Version)"
            }, {
                "track": 38,
                "name": "Imagine dragons - Enemy",
                "duration": "2:42",
                "file": "Imagine dragons - Enemy"
            }, {
                "track": 39,
                "name": "OrelSan - Jour meilleur",
                "duration": "3:36",
                "file": "OrelSan - Jour meilleur"
            }, {
                "track": 40,
                "name": "Gregory Porter - Dry Bones",
                "duration": "2:55",
                "file": "Gregory Porter - Dry Bones"
            }, {
                "track": 41,
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
