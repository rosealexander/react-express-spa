const moment = require("moment");
const cuid = require("cuid");
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const pageKey = 'example'
const Bender_sub = cuid();
const Soong_sub = cuid();
const Nordom_sub = cuid();

const users = [
    {
        // id: 1
        sub: Bender_sub,
        name: 'Bender Rodríguez',
    },
    {
        // id: 2
        sub: Soong_sub,
        name: 'Noonian Soong',
    },
    {
        // id: 3
        sub: Nordom_sub,
        name: 'Nordom',
    },
]

const registries = [
    {
        // id: 1
        author: {
            connect: {
                sub: Bender_sub,
            },
        },
        uid:pageKey,
    },
]


const events = [
    {
        // id: 1
        registry: {
            connect: {
                id: 1,
            },
        },
        date: moment().add(1, 'years').utc().format(),
        degree: 'Bachelor of Bending',
        accommodation: 'on-campus',
        image_key: 'marsuniversity.jpeg',
        university: 'Mars University',
    },
]

const wishlists = [
    {
        // id: 1
        registry: {
            connect: {
                id: 1,
            },
        },
    },
]

const donations = [
    {
        // id: 1
        author: {
            connect: {
                sub: Soong_sub,
            },
        },
        registry: {
            connect: {
                id: 1,
            },
        },
    },
    {
        // id: 2
        author: {
            connect: {
                sub: Nordom_sub,
            },
        },
        registry: {
            connect: {
                id: 1,
            },
        },
    },
    {
        // id: 3
        author: {
            connect: {
                sub: Bender_sub,
            },
        },
        registry: {
            connect: {
                id: 1,
            },
        },
    },
]

const categories = [
    {
        // id: 1
        summary: 'Furniture',
    },
    {
        // id: 2
        summary: 'Kitchen Necessities',
    },
    {
        // id: 3
        summary: 'Office Supplies',
    },
    {
        // id: 4
        summary: 'Storage & Organization',
        wishlists: {
            connect: {
                id: 1,
            },
        },
    },
    {
        // id: 5
        summary: 'Mattress & Box Spring',
    },
    {
        // id: 6
        summary: 'Bedding',
    },
    {
        // id: 7
        summary: 'Bathroom Essentials',
        wishlists: {
            connect: {
                id: 1,
            },
        },
    },
    {
        // id: 8
        summary: 'School Supplies',
        wishlists: {
            connect: {
                id: 1,
            },
        },
    },
]

const items = [
    {
        // id: 1
        summary: 'A picture of me. Bender.',
        wishlist: {
            connect: {
                id: 1,
            },
        },
        donation: {
            connect: {
                id: 3,
            },
        },
    },
    {
        // id: 2
        summary: 'Cigar Cutters',
        wishlist: {
            connect: {
                id: 1,
            },
        },
    },
    {
        // id: 3
        summary: 'Teleporter Shower Curtain',
        donation: {
            connect: {
                id: 1,
            },
        },
    },
    {
        // id: 4
        summary: 'Porcelain Teapot',
        donation: {
            connect: {
                id: 2,
            },
        },
    },
    {
        // id: 5
        summary: 'Bender Figurine',
        donation: {
            connect: {
                id: 2,
            },
        },
    },
]



async function main() {
    console.log(`Start seeding ...`)

    /* User */
    for (const data of users) {
        const user = await prisma.user.create({
            data: data,
        })
        console.log(`User: ${user.id}`)
    }

    /* Registry */
    for (const data of registries) {
        const registry = await prisma.registry.create({
            data: data,
        })
        console.log(`Registry: ${registry.id}`)
    }

    /* Event */
    for (const data of events) {
        const event = await prisma.event.create({
            data: data,
        })
        console.log(`Event: ${event.id}`)
    }

    /* Wishlist */
    for (const data of wishlists) {
        const wishlist = await prisma.wishlist.create({
            data: data,
        })
        console.log(`Wishlist: ${wishlist.id}`)
    }

    /* Donation */
    for (const data of donations) {
        const donation = await prisma.donation.create({
            data: data,
        })
        console.log(`Donation: ${donation.id}`)
    }

    /* Categories */
    for (const data of categories) {
        const category = await prisma.category.create({
            data: data,
        })
        console.log(`Category: ${category.id}`)
    }

    /* Item */
    for (const data of items) {
        const item = await prisma.item.create({
            data: data,
        })
        console.log(`Item: ${item.id}`)
    }

    console.log(`Seeding finished.`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
