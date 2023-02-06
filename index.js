function selectTimeline(evt, name, onload = false) {

    let i, timelineContent, timelineItem;

    timelineContent = document.getElementsByClassName("timeline-content-item");

    for (i = 0; i < timelineContent.length; i++) {
      timelineContent[i].classList.add('hidden');
      timelineContent[i].classList.remove('fadeIn');
    }

    timelineItem = document.getElementsByClassName("timeline-item");

    if (!onload) {
      for (i = 0; i < timelineItem.length; i++) {
        timelineItem[i].className = timelineItem[i].className.replace(" active", "");
      }
    }

    const timelineContentByName = document.getElementById(name);
    timelineContentByName.classList.remove('hidden');
    timelineContentByName.classList.add('fadeIn');

    evt.currentTarget.className += " active";
  }