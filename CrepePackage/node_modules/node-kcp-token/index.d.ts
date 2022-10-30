// Type definitions for node-kcp 
// Project: uh?
// Definitions by: TheLostTree https://github.com/TheLostTree + quinella(half if it tbh)



import { AddressInfo } from "net"

export class KCP {
    constructor(conv: number, token: number, user: AddressInfo)

    wndsize(sndwnd: number, rcvwnd: number): void;

    setmtu(mtu: number): void;

    // just set it to 1, 10 
    nodelay(nodelay: number, interval: number, resend: number, nc: number): void;

    //delete 
    release(): void;

    //returns the user object from the constructor
    context(): AddressInfo;


    //only need to call once it seems?
    recv(): Buffer;

    //input raw udp packet data
    input(data: string | Buffer): void;


    //send packet data here
    //if your thing uses a certain packet struct type
    //ya better send it right here
    send(data: string | Buffer): void;

    //this user field is taken from the constructor
    output(func: (data: Buffer, size: number, user: AddressInfo) => void): void;

    //pass date.now() here
    update(ts: number): void;

    //pass date.now() here
    //returns ms to next check
    check(ts: number): number;

    flush(): void;

    peeksize(): number;

    waitsnd(): number;
}