// target elements with the "draggable" class
interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: true,
        onmove: window.dragMoveListener,
        // keep the element within the area of it's parent
        restrict: {
            restriction: 'parent',
            elementRect: {
                left: 0,
                right: 1,
                top: 0,
                bottom: 1
            }
        },

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
            event.target.classList.remove("dragging");

            if ($(".draggable").hasClass("can-drop")) {
                //Don't snap icon back because it was dropped into drop zone
            } else {
                //Snap icon back to original position
                $(".draggable").removeAttr('data-x');
                $(".draggable").removeAttr('data-y');
                $(".draggable").css('transform', 'none');
                $(".draggable").css('transition', 'all 1s');
                $(".draggable").css('width', '25%');
                setTimeout(function () {
                    $(".draggable").css('transition', 'opacity 1s');
                }, 1400);
            }
        }
    });

function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

    target.classList.add("dragging");


    if ((x < -10) || (x > 10)) {
        target.style.width = "26%";
    }

    if ((x < -20) || (x > 20)) {
        target.style.width = "24%";
    }

    if ((x < -30) || (x > 30)) {
        target.style.width = "22%";
    }

    if ((x < -40) || (x > 40)) {
        target.style.width = "20%";
    }

    if ((x < -50) || (x > 50)) {
        target.style.width = "18%";
    }

    if ((x < -60) || (x > 60)) {
        target.style.width = "16%";
    }

    if ((x < -70) || (x > 70)) {
        target.style.width = "14%";
    }

    if ((x < -80) || (x > 80)) {
        target.style.width = "14%";
    }

    if ((x < -90) || (x > 90)) {
        target.style.width = "14%";
    }

    if ((x < -100) || (x > 100)) {
        target.style.width = "14%";
    }

    if ((x < -110) || (x > 110)) {
        target.style.width = "14%";
    }
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;
/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.first-dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '.drag-drop',

    // Require a 30% element overlap for a drop to be possible
    overlap: 0.30,

    // listen for drop related events:

    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
    },
    ondrop: function (event) {
        $(".dark-video").trigger("play");
        $(".light-video").addClass("gray-out");
        $(".first-scene .draggable").addClass("fade-away");
        $(".first-dropzone").addClass("fade-away");
        $(".second-dropzone").addClass("fade-away");
        setTimeout(function () {
            $(".can-drop").removeAttr('data-x');
            $(".can-drop").removeAttr('data-y');
            $(".can-drop").css("transform", "");
            $(".first-scene .draggable").css('width', '25%');
        }, 2500);
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    }
});

interact('.second-dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '.drag-drop',

    // Require a 30% element overlap for a drop to be possible
    overlap: 0.30,

    // listen for drop related events:

    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
    },
    ondrop: function (event) {
        $(".light-video").trigger("play");
        $(".first-scene .draggable").addClass("fade-away");
        $(".second-dropzone").addClass("fade-away");
        $(".first-dropzone").addClass("fade-away");
        $(".dark-video").addClass("gray-out");
        setTimeout(function () {
            $(".can-drop").removeAttr('data-x');
            $(".can-drop").removeAttr('data-y');
            $(".can-drop").css("transform", "");
            $(".first-scene .draggable").css('width', '25%');
        }, 2500);
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    }
});



interact('.trash-dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '.drag-drop',

    // Require a 30% element overlap for a drop to be possible
    overlap: 0.30,

    // listen for drop related events:

    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
    },
    ondrop: function (event) {
        $("#video-green-inner").trigger("pause");
        $("#video-green-inner").removeClass("chosen");
        $("#video-red-inner").addClass("chosen");
        $("#video-red-inner").trigger("play");
        $("#video-green-inner").load();
        $(".can-drop").removeAttr('data-x');
        $(".can-drop").removeAttr('data-y');
        $(".can-drop").css("transform", "");
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    }
});
interact('.system-dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '.drag-drop',

    // Require a 30% element overlap for a drop to be possible
    overlap: 0.30,

    // listen for drop related events:

    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
    },
    ondrop: function (event) {
        $("#video-red-inner").trigger("pause");
        $("#video-red-inner").removeClass("chosen");
        $("#video-green-inner").addClass("chosen");
        $("#video-green-inner").trigger("play");
        $("#video-red-inner").load();
        $(".can-drop").removeAttr('data-x');
        $(".can-drop").removeAttr('data-y');
        $(".can-drop").css("transform", "");
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    }
});


interact('.system-dropzone-two').dropzone({
    // only accept elements matching this CSS selector
    accept: '.drag-drop',

    // Require a 30% element overlap for a drop to be possible
    overlap: 0.30,

    // listen for drop related events:

    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
    },
    ondrop: function (event) {
        setTimeout(function () {
            $("#video-red-inner").trigger("pause");
            $("#video-red-inner").removeClass("chosen");
            $("#video-green-inner").addClass("chosen");
            $("#video-green-inner").trigger("play");
            $("#video-red-inner").load();
            $(".can-drop").removeAttr('data-x');
            $(".can-drop").removeAttr('data-y');
            $(".can-drop").css("transform", "");
        }, 1000);
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    }
});

$(".first-scene video").on("ended", function () {
    setTimeout(function () {
        $(".first-scene").addClass("fly-up");
    }, 50);
    setTimeout(function () {
        $(".back-button").addClass("show");
    }, 1500);
});

$(".first-scene video.dark-video").on("ended", function () {
    $("#video-red-inner").addClass("chosen");
    setTimeout(function () {
        $("#video-red-inner").trigger("play");
    }, 0);
});

$(".first-scene video.light-video").on("ended", function () {
    $("#video-green-inner").addClass("chosen");
    setTimeout(function () {
        $("#video-green-inner").trigger("play");
    }, 0);
});

$(".second-scene video").on("ended", function () {
    setTimeout(function () {
        $(".videos").addClass("fly-up");
        $(".third-scene").addClass("fly-up");
        $(".back-button").removeClass("show");
    }, 200);
    setTimeout(function () {
        $(".videos video").removeClass("chosen");
    }, 1000);
    setTimeout(function () {
        $(".videos").removeClass("fly-up");
    }, 1000);
});


$(".back-button span").click(function () {
    $(".back-button").removeClass("show");
    $(".first-scene .draggable").removeClass("fade-away");
    $(".second-dropzone").removeClass("fade-away");
    $(".first-dropzone").removeClass("fade-away");
    $("video").removeClass("gray-out");
    $(".first-scene").removeClass("fly-up");
    $("video").trigger("pause");
    setTimeout(function () {
        $(".videos video").removeClass("chosen");
        $(".videos").removeClass("fly-up");
    }, 1000);

});
