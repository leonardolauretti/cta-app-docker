import io from 'socket.io-client';
import { ActionTypes, MessageTypes } from './types';
import store from 'src/app/store';

export class WebsocketService {
    socket: any;

    constructor() {
        this.socket = io('http://localhost:3333');

        Object.keys(MessageTypes)
        .forEach(type => this.socket.on(type, (payload) => 
            store.dispatch({ type, payload })
        ));

        this.socket.on('events', function(data) {
            console.log('event', data);
        });
        
        this.socket.on('exception', function(data) {
            console.log('event', data);
        });

        this.socket.on('disconnect', function() {
            console.log('Disconnected');
        });
    }

    onConnect(callback) {
        this.socket.on('connect', () => {
            console.log('Connected');
            this.socket.emit('events', { test: 'test' });
            this.socket.emit('identity', 0, response =>
                console.log('Identity:', response),
            );
            callback();
            store.dispatch({ type: ActionTypes.WEBSOCKET_CONNECTED });
            store.dispatch({ type: MessageTypes.SEND_MESSAGE, payload: { message: 'tucupi', to: 'rogerinho' } });
        });
    }
}