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
                $(".draggable").css('width', '15%');
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

    //    console.log(x);

    if ((x < -10) || (x > 10)) {
        target.style.width = "14.75%";
    }

    if ((x < -20) || (x > 20)) {
        target.style.width = "14.5%";
    }

    if ((x < -30) || (x > 30)) {
        target.style.width = "14.25%";
    }

    if ((x < -40) || (x > 40)) {
        target.style.width = "14%";
    }

    if ((x < -50) || (x > 50)) {
        target.style.width = "13.75%";
    }

    if ((x < -60) || (x > 60)) {
        target.style.width = "13.5%";
    }

    if ((x < -70) || (x > 70)) {
        target.style.width = "13.25%";
    }

    if ((x < -80) || (x > 80)) {
        target.style.width = "13%";
    }

    if ((x < -90) || (x > 90)) {
        target.style.width = "12.75%";
    }

    if ((x < -100) || (x > 100)) {
        target.style.width = "12.5%";
    }

    if ((x < -110) || (x > 110)) {
        target.style.width = "12.25%";
    }

    if ((x < -120) || (x > 120)) {
        target.style.width = "12%";
    }

    if ((x < -130) || (x > 130)) {
        target.style.width = "11.75%";
    }

    if ((x < -140) || (x > 140)) {
        target.style.width = "11.5%";
    }

    if ((x < -150) || (x > 150)) {
        target.style.width = "11.25%";
    }

    if ((x < -160) || (x > 160)) {
        target.style.width = "11%";
    }

    if ((x < -170) || (x > 170)) {
        target.style.width = "10.75%";
    }

    if ((x < -180) || (x > 180)) {
        target.style.width = "10.5%";
    }

    if ((x < -190) || (x > 190)) {
        target.style.width = "10.25%";
    }

    if ((x < -200) || (x > 200)) {
        target.style.width = "10%";
    }

    if ((x < -210) || (x > 210)) {
        target.style.width = "9.75%";
    }

    if ((x < -220) || (x > 220)) {
        target.style.width = "9.5%";
    }

    if ((x < -230) || (x > 230)) {
        target.style.width = "9.25%";
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
        setTimeout(function () {
            $(".dark-video").trigger("play");
            $(".draggable").addClass("fade-away");
            $(".first-dropzone").addClass("fade-away");
            $(".mid-text").addClass("fade-away");
            $(".inner-line").addClass("go-up");
        }, 200);
        setTimeout(function () {
            $(".can-drop").removeAttr('data-x');
            $(".can-drop").removeAttr('data-y');
            $(".can-drop").css("transform", "");
            $(".draggable").css('width', '15%');
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
            $(".draggable").css('width', '15%');
        }, 2500);
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    }
});


$("video").on("ended", function () {
    var video = $(this);
    setTimeout(function () {
        $(".CTA").css("visibility", "visible");
    }, 500);
    setTimeout(function () {
        $(".CTA").addClass("show");
    }, 800);
    setTimeout(function () {
        $(".inner-line").removeClass("go-up");
        $(".draggable").removeClass("fade-away");
        $(".mid-text").removeClass("fade-away");
        $(".first-dropzone").removeClass("fade-away");
        $(".second-dropzone").removeClass("fade-away");
        $("video").load();
    }, 3000);
    setTimeout(function () {
        $(".CTA").removeClass("show");
    }, 10000);
    setTimeout(function () {
        $(".CTA").css("visibility", "hidden");
    }, 10500);
});

$(".CTA a").click(function () {
    setTimeout(function () {
        $(".CTA").css("visibility", "hidden");
    }, 500);
    setTimeout(function () {
        $(".inner-line").removeClass("go-up");
        $(".draggable").removeClass("fade-away");
        $(".mid-text").removeClass("fade-away");
        $(".first-dropzone").removeClass("fade-away");
        $(".second-dropzone").removeClass("fade-away");
        $(".CTA").removeClass("show");
    }, 800);
});
