const contacts=require("./contacts.js")

// mengambil argument dari command

// const command=process.argv[2];
// if (command === 'add'){
//     // some to do
// }else if(command === 'remove'){
//     // some todo
// }

// atau menggunakan sebuah module di npm
// yang fungsinya untuk mengelola argument pada command line

const yargs=require("yargs");

// yargs.command(
//     "add", 
//     "menambahkan contact baru", 
//     ()=>{},
//     (argv)=>{
//     console.log(argv.nama);
// });    parameternya satuan bukan object

yargs.command({
    command:'add',
    describe:'menambahkan contact baru',
    builder:{
        nama:{
            describe:"Nama Lengkap",
            demandOption:true,
            type:'string'
        },
        email:{
            describe:"Email",
            demandOption:false,
            type:'string'
        },
        noHP:{
            describe:"Nomor Handphone",
            demandOption:true,
            type:'string'
        },
    },
    handler(argv){
        // const contact={
        //     nama:argv.nama,
        //     email:argv.email,
        //     noHP:argv.noHP
        // }
        contacts.simpanContact(argv.nama, argv.email, argv.noHP)
    }
});


yargs.parse();


// const { check } = require("yargs");
// const {tulisPertanyaan, simpanContact} = require("./contacts.js");
// const main=async ()=>{
//     const nama=await tulisPertanyaan("masukan nama : ");
//     const email=await tulisPertanyaan("masukan email : ");
//     const noHP=await tulisPertanyaan("masuka No HP : ");
//     simpanContact(nama, email, noHP)
// }

// main();

// const pertanyaan1=()=>{
//     return new Promise((resolve, reject)=>{
//         rl.question('masukan nama anda : ', (nama)=>{
//             resolve(nama)
//         });
//     })
// }


// const pertanyaan2=()=>{
//     return new Promise((resolve, reject)=>{
//         rl.question('masukan no HP anda : ', (noHP)=>{
//             resolve(noHP)
//         });
//     })
// }


// const pertanyaan3=()=>{
//     return new Promise((resolve, reject)=>{
//         rl.question('masukan email anda : ', (email)=>{
//             resolve(email);
//         });
//     })
// }

// const main=async ()=>{
//     const nama=await pertanyaan1();
//     const noHP=await pertanyaan2();
//     const email=await pertanyaan3();
//     const contact = {nama, noHP, email}
//     const file=fs.readFileSync('data/contact.json', 'utf-8');
//     const contacts=JSON.parse(file);
//     contacts.push(contact);
//     console.log(contacts);
//     fs.writeFileSync('data/contact.json',JSON.stringify(contacts));
//     console.log('terima kasih sudah memasukan data');
//     rl.close();   
// }

// main();

// rl.question('masukan nama anda : ', (nama)=>{
//     rl.question('Masukan No HP anda : ', (noHP)=>{
//         const contact = {nama,noHP}
//         const file=fs.readFileSync('data/contact.json', 'utf-8');
//         const contacts=JSON.parse(file);
//         contacts.push(contact);
//         console.log(contacts)
//         fs.writeFileSync('data/contact.json',JSON.stringify(contacts));
//         console.log('terima kasih sudah memasukan data');
//         rl.close();
//     })
// })
// calback hell