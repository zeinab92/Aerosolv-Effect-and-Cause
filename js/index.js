if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
    //If Safari Browser
    $(".draggable").on("vmousedown", function () {
        //        $(this).children(".audio").trigger("play");
    });

    $(".draggable").on("vmouseup", function () {
        //        $(this).children(".audio").trigger("pause");
    });

    $(".wrapper").addClass("safari-browser");
} else {
    //Do the normal audio triggering in all other browsers
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $(".wrapper").css("display", "none");
}

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
            //            $(".audio").trigger("pause");

            if ($(".draggable").hasClass("can-drop")) {
                //Don't snap icon back because it was dropped into drop zone
            } else {
                //Snap icon back to original position
                $(".draggable").removeAttr('data-x');
                $(".draggable").removeAttr('data-y');
                $(".draggable").css('transform', 'none');
                $(".draggable").css('transition', 'all 1s');
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
        $(".draggable").addClass("fade-away");
        $(".first-dropzone").addClass("fade-away");
        $(".mid-text").addClass("fade-away");
        $(".inner-line").addClass("go-up");
        setTimeout(function () {
            $(".can-drop").removeAttr('data-x');
            $(".can-drop").removeAttr('data-y');
            $(".can-drop").css("transform", "");
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
        $(".draggable").addClass("fade-away");
        $(".second-dropzone").addClass("fade-away");
        $(".mid-text").addClass("fade-away");
        $(".inner-line").addClass("go-up");
        setTimeout(function () {
            $(".can-drop").removeAttr('data-x');
            $(".can-drop").removeAttr('data-y');
            $(".can-drop").css("transform", "");
        }, 2500);
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    }
});



$(document).ready(function () {
    $('video').on('ended', function () {
        var video = $(this);
        setTimeout(function () {
            video.load();
        }, 1000);
        $(".inner-line").removeClass("go-up");
        setTimeout(function () {
            $(".draggable").removeClass("fade-away");
            $(".mid-text").removeClass("fade-away");
            $(".first-dropzone").removeClass("fade-away");
            $(".second-dropzone").removeClass("fade-away");
        }, 1500);
    });
});
