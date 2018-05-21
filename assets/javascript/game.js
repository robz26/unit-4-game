var GameFinished = true;
var LinkHp = 0;
let EnemyHp = 0;
var EnemyAtk = 0;
var Atk = 0;
const max = [5, 6, 7, 8, 9, 10, 11, 12, 18, 30, 45, 75];
const min = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25];
var Skeleton = false;
var Knight = false;
var Badguy = false;
var Ganon = false;
var SkeletonDmg = 0;
var KnightDmg = 0;
var BadguyDmg = 0;
var GanonDmg = 0;
let LinkExp = 0;
let Lvl = 0;
let HeartChance = 0;

//Attack button

//random atk damage
$('#Attack').on('click', function () {
    $('.animation').animateSprite('play');
    $('.sword').animateSprite('play');
    $('.animation').animateSprite('restart');
    $('.sword').animateSprite('restart');
    SwordSound.play();

    if (Lvl === 1 && (Skeleton || Knight || Badguy || Ganon)) {
        Atk = Math.floor(Math.random() * (max[7] - min[4] + 1) + min[4]);
        $('.DmgDisplay').css({ top: "80px" }).show();
        $(".DmgDisplay").text(Atk).animate({ top: "30px" }, 500).hide(0);
    }
    if (Lvl === 2 && (Skeleton || Knight || Badguy || Ganon)) {
        Atk = Math.floor(Math.random() * (max[8] - min[6] + 1) + min[6]);
        $('.DmgDisplay').css({ top: "80px" }).show();
        $(".DmgDisplay").text(Atk).animate({ top: "30px" }, 500).hide(0);
    }
    if (Lvl === 3 && (Skeleton || Knight || Badguy || Ganon)) {
        Atk = Math.floor(Math.random() * (max[9] - min[8] + 1) + min[8]);
        $('.DmgDisplay').css({ top: "80px" }).show();
        $(".DmgDisplay").text(Atk).animate({ top: "30px" }, 500).hide(0);
    }
    if (Lvl === 4 && (Skeleton || Knight || Badguy || Ganon)) {
        Atk = Math.floor(Math.random() * (max[10] - min[9] + 1) + min[9]);
        $('.DmgDisplay').css({ top: "80px" }).show();
        $(".DmgDisplay").text(Atk).animate({ top: "30px" }, 500).hide(0);
    }
    if (Lvl === 5 && (Skeleton || Knight || Badguy || Ganon)) {
        Atk = Math.floor(Math.random() * (max[11] - min[12] + 1) + min[12]);
        $('.DmgDisplay').css({ top: "80px" }).show();
        $(".DmgDisplay").text(Atk).animate({ top: "30px" }, 500).hide(0);
    }


    //retaliate dmg
    if (Skeleton) {
        SkeletonDmg = Math.floor(Math.random() * (max[3] - min[0] + 1) + min[0]);
        LinkHp = LinkHp - SkeletonDmg;
        EnemyHp = EnemyHp - Atk;
        $('#DmgTaken').css({ top: "-65px" }).show();
        $("#DmgTaken").text(SkeletonDmg).animate({ top: "-135px" }, 500).hide(0);
    }
    if (Knight) {
        KnightDmg = Math.floor(Math.random() * (max[7] - min[2] + 1) + min[2]);
        LinkHp = LinkHp - KnightDmg;
        EnemyHp = EnemyHp - Atk;
        $('#DmgTaken').css({ top: "-65px" }).show();
        $("#DmgTaken").text(KnightDmg).animate({ top: "-135px" }, 500).hide(0);
    }
    if (Badguy) {
        BadguyDmg = Math.floor(Math.random() * (max[8] - min[5] + 1) + min[5]);
        LinkHp = LinkHp - BadguyDmg;
        EnemyHp = EnemyHp - Atk;
        $('#DmgTaken').css({ top: "-65px" }).show();
        $("#DmgTaken").text(BadguyDmg).animate({ top: "-135px" }, 500).hide(0);
    }
    if (Ganon) {
        GanonDmg = Math.floor(Math.random() * (max[9] - min[6] + 1) + min[6]);
        LinkHp = LinkHp - GanonDmg;
        EnemyHp = EnemyHp - Atk;
        $('#DmgTaken').css({ top: "-65px" }).show();
        $("#DmgTaken").text(GanonDmg).animate({ top: "-135px" }, 500).hide(0);
    }



    $('#LinkHp').text(LinkHp);
    $('#EnemyHp').text(EnemyHp);
    //enemy or link hp reaches zero
    if (LinkHp <= 0) {
        $('#LinkHp').hide();
        LinkDies.play();
        setTimeout(Intro, 400);
        GameFinished = true;
    }
    if (EnemyHp <= 0) {
        $(".DmgDisplay").hide();
        $('#EnemyHp').css('visibility', 'hidden');
        if (Skeleton) {
            $('.skeleton').animateSprite('stop');
            $('.Explode').appendTo('.Enemyhere').css({ top: "112px", left: "204px", transform: 'scale(1,1)' }).show();
            $('.Explode').animateSprite('play');
            $('.Explode').animateSprite('restart');
            EnemyDies.play();
            LinkExp += 5;
            HeartChance = Math.round(Math.random() * 100);
            if (HeartChance >= 60) {
                $('.Heart').appendTo('.Enemyhere').css({ top: "30px", left: "220px" }).show().animate({ top: '90px' }, 2000);
                $('.Heart').animateSprite('play');
                $('.Heart').animateSprite('restart');
                $('.Heart').delay(1).hide(0);
                HeartSound.play();
                LinkHp = 180;
                $('#LinkHp').text(LinkHp);
            }
            setTimeout(SelectionScreen, 1800);
        }
        if (Knight) {
            $('.knight').animateSprite('stop');
            $('.Explode').appendTo('.Enemyhere').css({ top: "112px", left: "204px", transform: 'scale(1.8,1.8)' }).show();
            $('.Explode').animateSprite('play');
            $('.Explode').animateSprite('restart');
            EnemyDies.play();
            LinkExp += 25;
            HeartChance = Math.round(Math.random() * 100);
            if (HeartChance >= 60) {
                $('.Heart').appendTo('.Enemyhere').css({ top: "30px", left: "220px" }).show().animate({ top: '90px' }, 2000);
                $('.Heart').animateSprite('play');
                $('.Heart').animateSprite('restart');
                $('.Heart').delay(1).hide(0);
                HeartSound.play();
                LinkHp = 180;
                $('#LinkHp').text(LinkHp);
            }
            setTimeout(SelectionScreen, 1800);
        }
        if (Badguy) {
            $('.badguy').animateSprite('stop');
            $('.Explode').appendTo('.Enemyhere').css({ top: "112px", left: "204px", transform: 'scale(2,2)' }).show();
            $('.Explode').animateSprite('play');
            $('.Explode').animateSprite('restart');
            EnemyDies.play();
            LinkExp += 60;
            HeartChance = Math.round(Math.random() * 100);
            if (HeartChance >= 60) {
                $('.Heart').appendTo('.Enemyhere').css({ top: "30px", left: "220px" }).show().animate({ top: '90px' }, 2000);
                $('.Heart').animateSprite('play');
                $('.Heart').animateSprite('restart');
                $('.Heart').delay(1).hide(0);
                HeartSound.play();
                LinkHp = 180;
                $('#LinkHp').text(LinkHp);
            }
            setTimeout(SelectionScreen, 1800);
        }
        if (Ganon) {
            $('.ganon').animateSprite('stop');
            $('.Explode').appendTo('.Enemyhere').css({ top: "112px", left: "204px", transform: 'scale(2.5,2.5)' }).show();
            $('.Explode').animateSprite('play');
            $('.Explode').animateSprite('restart');
            EnemyDies.play();
            EndingSong.play();
            OverWorld.pause();
            setTimeout(EndingScreen, 1500);
        }

        Skeleton = false;
        Knight = false;
        Badguy = false;
        Ganon = false;
        Atk = 0;
        SkeletonDmg = 0;
        KnightDmg = 0;
        BadguyDmg = 0;
        GanonDmg = 0;

    }

});


//Selection Screen
function SelectionScreen() {
    if (LinkExp < 10) {
        $('#ExpTilNext').text("Exp until next level: " + (10 - LinkExp));
    }
    if (LinkExp >= 10 && LinkExp < 50) {
        $('#ExpTilNext').text("Exp until next level: " + (50 - LinkExp));

        Lvl = 2;
        $('#LinkLvl').text("Level: " + Lvl);
    }
    if (LinkExp >= 50 && LinkExp < 200) {
        $('#ExpTilNext').text("Exp until next level: " + (200 - LinkExp));
        $('.animation').css('background', 'url(assets/images/sword.tunic2.png)');
        $('.sword').css('background', 'url(assets/images/sword.sword3.png)');
        Lvl = 3;
        $('#LinkLvl').text("Level: " + Lvl);
    }
    if (LinkExp >= 200 && LinkExp < 500) {
        $('#ExpTilNext').text("Exp until next level: " + (500 - LinkExp));
        Lvl = 4;
        $('#LinkLvl').text("Level: " + Lvl);
    }
    if (LinkExp >= 500) {
        $('#ExpTilNext').text("Max");
        $('.animation').css('background', 'url(assets/images/sword.tunic3.png)');
        $('.sword').css('background', 'url(assets/images/sword.sword4.png)');
        Lvl = 5;
        $('#LinkLvl').text("Level: " + Lvl);
    }
    $('#Start').hide();
    $('.Explode').hide();
    $('#EnemyName').hide();
    $('.skeleton').appendTo('#skele').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
    $('.knight').appendTo('#kni').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
    $('.badguy').appendTo('#bad').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
    $('.ganon').appendTo('#gan').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
    $('.skeleton').show();
    $('.knight').show();
    $('.badguy').show();
    $('.ganon').show();
    $('.skeleton').on('click', function () {
        EnemyHp = 50;
        $('#EnemyHp').css('visibility', 'visible');
        $('#EnemyName').text("Skeleton").show();
        $('#EnemyHp').text(EnemyHp);
        $('#EnemyHp').show();
        $('.skeleton').css({ transform: "scale(2,2)", top: "45px", left: "100px" });
        $('.skeleton').prependTo('.Enemyhere');
        $('.knight').appendTo('#kni').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
        $('.badguy').appendTo('#bad').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
        $('.ganon').appendTo('#gan').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
        Skeleton = true;
        Knight = false;
        Badguy = false;
        Ganon = false;
    });
    $('.knight').on('click', function () {
        EnemyHp = 120;
        $('#EnemyHp').css('visibility', 'visible');
        $('#EnemyName').text("Knight").show();
        $('#EnemyHp').text(EnemyHp);
        $('#EnemyHp').show();
        $('.knight').css({ transform: "scale(2.3,2.3)", top: "55px", left: "100px", position: "relative" });
        $('.knight').prependTo('.Enemyhere');
        $('.skeleton').appendTo('#skele').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
        $('.badguy').appendTo('#bad').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
        $('.ganon').appendTo('#gan').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
        Knight = true;
        Skeleton = false;
        Badguy = false;
        Ganon = false;
    });
    $('.badguy').on('click', function () {
        EnemyHp = 160;
        $('#EnemyHp').css('visibility', 'visible');
        $('#EnemyName').text("Agahnim").show();
        $('#EnemyHp').text(EnemyHp);
        $('#EnemyHp').show();
        $('.badguy').css({ transform: "scale(2.4,2.4)", top: "65px", left: "100px", position: "relative" });
        $('.badguy').prependTo('.Enemyhere');
        $('.skeleton').appendTo('#skele').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
        $('.knight').appendTo('#kni').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
        $('.ganon').appendTo('#gan').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
        Badguy = true;
        Skeleton = false;
        Knight = false;
        Ganon = false;
    });
    $('.ganon').on('click', function () {
        EnemyHp = 300;
        $('#EnemyHp').css('visibility', 'visible');
        $('#EnemyName').text("Ganon").show();
        $('#EnemyHp').text(EnemyHp);
        $('#EnemyHp').show();
        $('.ganon').css({ transform: "scale(2.5,2.5)", top: "45px", left: "100px", position: "relative" });
        $('.ganon').prependTo('.Enemyhere');
        $('.skeleton').appendTo('#skele').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
        $('.knight').appendTo('#kni').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
        $('.badguy').appendTo('#bad').animateSprite('resume').css({ transform: "scale(1,1)", top: "0", left: "0" });
        Ganon = true;
        Skeleton = false;
        Knight = false;
        Badguy = false;
    });
}

//Sprite Animation Section
var currentFps = 18;
var Link = {
    fps: currentFps,
    loop: false,
    autoplay: false,
    columns: 12,
    animations: {
        walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,],
        walkLeft: [36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25]
    },
    complete: function () { }
};
$(".Explode").animateSprite({
    fps: 5,
    loop: false,
    columns: 9,
    autoplay: false,
    animations: {
        Right: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    complete: function () { }
});

$(".skeleton").animateSprite({
    fps: 5,
    loop: true,
    columns: 5,
    autoplay: true,
    animations: {
        Right: [0, 1, 2, 3, 4, 0],
    },
    complete: function () { }
});

$(".ganon").animateSprite({
    fps: 10,
    loop: true,
    columns: 8,
    autoplay: true,
    animations: {
        Right: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    complete: function () { }
});
$(".knight").animateSprite({
    fps: 12,
    loop: true,
    columns: 10,
    autoplay: true,
    animations: {
        Right: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    loop: true,
    complete: function () {
    }
});

$(".Heart").animateSprite({
    fps: 13,
    loop: false,
    columns: 10,
    autoplay: false,
    animations: {
        Right: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    },
    complete: function () {
    }
});

$(".sword").animateSprite({
    fps: 18,
    loop: true,
    columns: 12,
    autoplay: false,
    animations: {
        Right: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        Left: [36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25]
    },
    loop: false,
    complete: function () {
    }
});

$(".badguy").animateSprite({
    fps: 12,
    loop: true,
    columns: 11,
    autoplay: true,
    animations: {
        Right: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    loop: true,
    complete: function () {
    }
});

$("#VictoryLink").animateSprite({
    fps: 12,
    loop: true,
    columns: 18,
    autoplay: true,
    animations: {
        Right: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16,17]
    },
    loop: true,
    complete: function () {
    }
});

$("#VictorySword").animateSprite({
    fps: 12,
    loop: true,
    columns: 9,
    autoplay: true,
    animations: {
        Right: [54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71]
    },
    loop: true,
    complete: function () {
    }
});

//intro squence
$(".fairy").animateSprite({
    fps: 1.5,
    loop: true,
    columns: 2,
    autoplay: false,
    animations: {
        Right: [0, 1],
    },
    complete: function () {
    }
});


$(document).ready(function () {
    Intro();
    OverWorld.addEventListener('ended', function() {
        OverWorld.currentTime = 1;
        OverWorld.play();
    }, false);
    FairyIntro.addEventListener('ended', function() {
        FairyIntro.currentTime = 1;
        FairyIntro.play();
    }, false);
    EndingSong.addEventListener('ended', function() {
        EndingSong.currentTime = 1;
        EndingSong.play();
    }, false);
});

function Intro() {
    $('.wrapper').hide();
    $('.DmgDisplay').hide();
    $('#DmgTaken').hide();
    $('#VictoryLink').hide();
    $('#VictorySword').hide();
    $('#VicDisplay').hide();
    $('.fairy').show();

    $('.animation').animateSprite(Link);
    $('.fairy').css('top', '0');
    $('.fairy').animate({ top: '300px' }, 6000);
    $('#Start').animate({ top: '400px' });
    $('.fairy').animateSprite('play');
    EndingSong.pause();
    EndingSong.currentTime = 1;
    OverWorld.pause();
    OverWorld.currentTime = 1;
    FairyIntro.currentTime = 1;
    FairyIntro.play();
    GameReset();
}


//bgm and sound effects
var FairyIntro = document.createElement('audio');
var SwordSound = document.createElement('audio');
var OverWorld = document.createElement('audio');
var HeartSound = document.createElement('audio');
var EndingSong = document.createElement('audio');
var LinkDies = document.createElement('audio');
var EnemyDies = document.createElement('audio');

FairyIntro.setAttribute('src', 'assets/bigfairy.mp3');
LinkDies.setAttribute('src', 'assets/hero_dying.ogg');
EnemyDies.setAttribute('src', 'assets/enemy_killed.ogg');
HeartSound.setAttribute('src', 'assets/heart_container.ogg');
EndingSong.setAttribute('src', 'assets/Ending.mp3');
OverWorld.setAttribute('src', 'assets/overworld.mp3');
SwordSound.setAttribute('src', 'assets/sword_spin_attack_release.ogg');


//game reset
var GameReset = () => {
    if (GameFinished) {
        $(".container").hide();
        GameFinished = false;
        LinkHp = 180;
        Skeleton = false;
        Knight = false;
        Badguy = false;
        Ganon = false;
        Atk = 0;
        SkeletonDmg = 0;
        KnightDmg = 0;
        BadguyDmg = 0;
        GanonDmg = 0;
        Lvl = 1;
        LinkExp = 0;
    }
    $('#Start').delay(6000).show(0);
    $('#Start').on('click', function () {
        $('.fairy').hide();
        $('#Start').hide();
        $('.wrapper').show();
        $('.container').show();
        $('#LinkLvl').text("Level: " + Lvl);
        $('#ExpTilNext').text("Exp until next level: " + 10)
        $('#LinkHp').text(LinkHp);
        $('#LinkHp').show();

        $('#EnemyHp').text(EnemyHp);
        $('#EnemyHp').hide();
        SelectionScreen();
        FairyIntro.pause();
        OverWorld.play();
    })
}
//Ending Screen
var EndingScreen = () => {
    GameFinished = true;
    $('.wrapper').delay(2000).hide(0);
    $('#VicDisplay').show();
    $('#VictoryLink').animateSprite('play').show();
    $('#VictorySword').animateSprite('play').show();
    $('#Again').on('click', function() {
        Intro();
    });

}
//Extras
var goLeft = function () {
    $('.animation').animateSprite('play', 'walkLeft');
    $('.sword').animateSprite('play', 'Left');
}

var goRight = function () {
    $('.animation').animateSprite('play', 'walkRight');
    $('.sword').animateSprite('play', 'Right');
}

var play = function () {
    $('.animation').animateSprite('play');
    $('.sword').animateSprite('play');
    $('.skeleton').animateSprite('play');
    $('.animation').animateSprite('restart');
    $('.sword').animateSprite('restart');
    $('.badguy').animateSprite('play');
    SwordSound.play();
}

$('body').on('keydown', function (ev) {
    if (ev.keyCode === 39) {
        goRight();
    } else if (ev.keyCode === 37) {
        goLeft();
    }
});