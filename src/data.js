import { v4 as uuidv4 } from "uuid";

function music_data() {
    return [
        {
            name: "Akhiyaan",
            artist: "Mitraz",
            cover: "https://i.scdn.co/image/ab67616d0000b27366308be2ea67289e186f3a30",
            id: uuidv4(),
            active: true,
            color: ["#ABC0D1","#CFCBBF"],
            audio: "https://pagalworld.ink/files/download/id/9851"
        },
        {
            name: "Dil Mere",
            artist: "The Local Train",
            cover: "https://lh3.googleusercontent.com/FOWVxykYND0FkmVvjkxwvP3t8EQtJi3dg1obE2c1MfhFLmbUwbfzGYOKF3VDSKXs-MZNiYUxPCskzucI=w544-h544-l90-rj",
            id: uuidv4(),
            active: false,
            color: ["#151048","#BA1230"],
            audio: "https://pagalfree.com/musics/128-Dil Mere - Aalas Ka Pedh 128 Kbps.mp3"
        },
        {
            name: "Jee Le Zaraa",
            artist: "Vishal Dadlani",
            cover: "https://qph.cf2.quoracdn.net/main-qimg-4a4faac5c9bd338abe3934e3f437b8f3",
            id: uuidv4(),
            active: false,
            color: ["#8E938F","#5F7372"],
            audio: "https://pagalfree.com/musics/128-Jee Le Zaraa - Talaash 128 Kbps.mp3"
        },
        {
            name: "Saajna",
            artist: "Mitraz",
            cover: "https://pagalfree.com/images/128Saajna%20-%20Mitraz%20128%20Kbps.jpg",
            id: uuidv4(),
            active: false,
            color: ["#999D8E","#2D4543"],
            audio: "https://pagalfree.com/musics/128-Saajna - Mitraz 128 Kbps.mp3"
        },
        {
            name: "Nadaaniyan",
            artist: "Akshath",
            cover: "https://lh3.googleusercontent.com/7Rq3KcIR-ISnVY8p3LC3Mc_UzdZZ2Pe3QlLuG6zLXUkIrkMM1svSkTsMSmdgCwMQxs0ZP2_oGo6Xdg-q=w544-h544-l90-rj",
            id: uuidv4(),
            active: false,
            color: ["#A96D65","#7F7069"],
            audio: "https://www.pagalworld.com.so/files/download/type/128/id/22091"
        },
        {
            name: "Ek Raat",
            artist: "Vilen",
            cover: "https://lh3.googleusercontent.com/hQpxewlgi2vQwwE4ylQcotoDUwg8ZWPiNHBwk7Mfrp-Q0y0aacq-XPlBMJxvBZqswULZijuGivitbFIVmA=w544-h544-l90-rj",
            id: uuidv4(),
            active: false,
            color: ["#7D4945","#1A0E18"],
            audio: "https://pagalsongs.com.in/files/download?id=10084"
        },
        {
            name: "Samjho Na",
            artist: "Aditya Rikhari",
            cover: "https://www.pagalworld.com.so/uploads/thumb/sft31/15440_4.jpg",
            id: uuidv4(),
            active: false,
            color: ["#958D9A","#685597"],
            audio: "https://www.pagalworld.com.so/files/download/type/128/id/15440"
        }
    ];
}

export default music_data;
