const arr = [
    'https://firebasestorage.googleapis.com/v0/b/shortech-de128.appspot.com/o/img%2Fsample%2Fsample-1.jpg?alt=media&token=fcb520ce-1a49-493c-8e7d-3935ede3434b',
    'https://firebasestorage.googleapis.com/v0/b/shortech-de128.appspot.com/o/img%2Fsample%2Fsample-2.jpg?alt=media&token=cd649689-0702-4ba9-8afc-7e5e49e68162',
    'https://firebasestorage.googleapis.com/v0/b/shortech-de128.appspot.com/o/img%2Fsample%2Fsample-3.jpg?alt=media&token=7ef47fe6-1a0a-415e-9c76-82a54f31577d',
    'https://firebasestorage.googleapis.com/v0/b/shortech-de128.appspot.com/o/img%2Fsample%2Fsample-4.jpg?alt=media&token=1a12a18f-8f71-4ff9-840d-490e1ff1a654',
    'https://firebasestorage.googleapis.com/v0/b/shortech-de128.appspot.com/o/img%2Fsample%2Fsample-5.jpg?alt=media&token=c50348ac-86f6-4ab5-962e-6bdd708018a6',
    'https://firebasestorage.googleapis.com/v0/b/shortech-de128.appspot.com/o/img%2Fsample%2Fsample-6.jpg?alt=media&token=9ddcfa46-fd1f-41a1-9f03-964c8c4d7415',
    'https://firebasestorage.googleapis.com/v0/b/shortech-de128.appspot.com/o/img%2Fsample%2Fsample-7.jpg?alt=media&token=a20bf815-d668-44bf-ad9c-0a697bd5ce4b',
    'https://firebasestorage.googleapis.com/v0/b/shortech-de128.appspot.com/o/img%2Fsample%2Fsample-8.jpg?alt=media&token=d7a422c3-d963-49c9-a80b-e0806b30682e',
    'https://firebasestorage.googleapis.com/v0/b/shortech-de128.appspot.com/o/img%2Fsample%2Fsample-9.jpg?alt=media&token=f959cc6f-4eff-4a64-b053-1e729b67fc14',
    'https://firebasestorage.googleapis.com/v0/b/shortech-de128.appspot.com/o/img%2Fsample%2Fsample-10.jpg?alt=media&token=c6a8413d-b013-4b1e-88bd-c057b32985b1'
]

const randomImg = () => {
    const idx = Math.floor(Math.random()*10);
    return arr[idx]
};

export {randomImg}