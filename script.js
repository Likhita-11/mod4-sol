(function() {
    var names = ['Ajay','Niranjan','Likitha','siddu','japan','india','jaggu','Australia','jambu','jpriya','darliki '];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
