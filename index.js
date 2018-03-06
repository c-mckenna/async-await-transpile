let fooBar = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Foobar');
        }, 1500);
    });
};

async function asyncCall() {
    console.log('Before');
    console.log(await fooBar());
    console.log('After');
}

asyncCall();