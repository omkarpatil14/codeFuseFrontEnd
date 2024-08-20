import { io } from 'socket.io-client';


export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 20000,
        reconnection: true,
        transports: ['websocket' , 'polling'],
    };
    return io(import.meta.env.VITE_REACT_APP_BACKEND_URL, options);
};
