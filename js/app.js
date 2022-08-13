if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
    .then(reg => {
        // setTimeout(() => {
        //     reg.sync.register('post-cats');
        //     console.log('the photos cars were sent');
        // }, 3000);
    });

    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
        } else {
            console.log('Unable to get permission to notify.');
        }
    });
}

// fetch('https://reqres.in/api/users?page=2')
// .then(resp => resp.text())
// .then(console.log);