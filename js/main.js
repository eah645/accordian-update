document.getElementById('comingUpContent').style.display = 'none';
document.getElementById('pastEventsContent').style.display = 'none';
//hides all panels
function hidePanels() {
  document.getElementById('pastEventsContent').style.display = 'none';
  document.getElementById('comingUpContent').style.display = 'none';
  document.getElementById('eventsWeekContent').style.display = 'none';
}
//makes upcoming shows the open panel
function showComingUp() {
  hidePanels();
  document.getElementById('comingUpContent').style.display = 'block';
}
//makes past events open
function showPastEvents() {
  hidePanels();
  document.getElementById('pastEventsContent').style.display = 'block';
}
function showEventsWeek() {
  hidePanels();
  document.getElementById('eventsWeekContent').style.display = 'block';
}
