"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import TeaCup from "@/components/TeaCup";

export default function ProductsPage() {
    const products = [
        {
            name: "Darjeeling's Tea",
            type: "Grocery",
            origin: "Darjeeling, West Bengal",
            image: "/darjeelingTea.jpg",
            url: "/home/products/darjeelingtea"
        },
        {
            name: "Chanderi Saree",
            type: "Fabric",
            origin: "Chanderi, Madhya Pradesh",
            image: "/chanderiSaree.jpg",
            url: "/home/products/chanderisaree"
        },
        {
            name: "Kancheepuram Silk",
            type: "Fabric",
            origin: "Kancheepuram, Tamil Nadu",
            image: "/kancheepuramSilk.jpg",
            url: "/home/products/kancheepuramsaree"
        },
        {
            name: "Kullu Shawl",
            type: "Fabric",
            origin: "Kullu, Himachal Pradesh",
            image: "/kulluShawl.jpg",
            url: "/home/products/kullushawl"
        },
        {
            name: "Mysore Sanadal Soap",
            type: "Soap",
            origin: "Mysore, Karnataka",
            image: "/MysoreSandalSoap.webp",
            url: "/home/products/mysoresandalsoap"
        },
        {
            name: "Madhubani Paintings",
            type: "Art Form",
            origin: "Bihar, India",
            image: "/madhubaniPainting.jpg",
            url: "/home/products/madhubanipaintings"
        },
        {
            name: "Mysore Silk",
            type: "Fabric",
            origin: "Mysore, Karnataka",
            image: "/mysoreSilk.jpg",
            url: "/home/products/mysoresilk"
        },
        {
            name: "Salem Fabric",
            type: "Fabric",
            origin: "Salem, Tamil Nadu",
            image: "/salemFabric.jpg",
             url: "/home/products/salemfabric"
        },
        {
            name: "Channapatna Toys",
            type: "Art Form",
            origin: "Karnataka, India",
            image: "/channapatnaToys.jpg",
             url: "/home/products/channapatnatoys"
        },
        {
            name: "Shrikalasthi Kalamkari",
            type: "Art Form",
            origin: "Andra Pradesh, India",
            image: "/shrikalasthiKalamkari.jpg",
            url: "/home/products/kalamkari"
        },
        {
            name: "Thanjavur Paintings",
            type: "Art Form",
            origin: "Thanjavur, Tamil Nadu",
            image: "/thanjavurPaintings.jpg",
            url: "/home/products/thanjavurpaintings"
        },
        {
            name: "Muga Silk",
            type: "Fabric",
            origin: "Muga, Assam",
            image: "/mugaSilk.jpg",
            url: "/home/products/mugasilk"
            
        },
        {
            name: "Kathputlis",
            type: "Art Form",
            origin: "Rajasthan, India",
            image: "/kathputli.jpg",
            url: "/home/products/kathputli"
        },
        {
            name: "Blue Pottery",
            type: "Pottery",
            origin: "Jaipur, Rajasthan",
            image: "/bluePottery.jpg",
            url: "/home/products/bluepottery"
        },
        {
            name: "Kutch Embroidery",
            type: "Fabric",
            origin: "Kutch, Gujrat",
            image: "/kutchEmbroidery.jpg",
            url: "/home/products/kutchembroidery"
        },
        {
            name: "Chamba Rumal",
            type: "Fabric",
            origin: "Chamba, Himanchal Pradesh",
            image: "/chambaRumal.jpg",
            url: "/home/products/chambarumal"
        },
        {
            name: "Pipli Artwork",
            type: "Art Form",
            origin: "Odisha, India",
            image: "/pipliArtwork.jpg",
            url: "/home/products/pipliartwork"
        },
        {
            name: "Thanjavur Doll",
            type: "Artwork",
            origin: "Thanjavur, Tamil Nadu",
            image: "/thanjavurDoll.jpg",
            url: "/home/products/thanjavurdolls"
        },
        {
            name: "Banaras Silk Saree",
            type: "Fabric",
            origin: "Varanasi, Uttar Pradesh",
            image: "/banarasiSilkSaree.jpg",
            url: "/home/products/banarassilk"
        },
        {
            name: "Surat Zari Fabric",
            type: "Fabric",
            origin: "Surat, Gujrat",
            image: "/suratZari.jpg",
            url: "/home/products/suratzari"
        },
        {
            name: "Phulkari",
            type: "Fabric",
            origin: "Punjab, India",
            image: "/phulkari.jpg",
            url: "/home/products/phulkari"
        },
        {
            name: "Firozabad Bangles",
            type: "Art Form",
            origin: "Firozabad, Uttar Pradesh",
            image: "/firozabadGlass.jpg",
            url: "/home/products/firozabadbangles"
        },
        {
            name: "Warli Paintings",
            type: "Art Form",
            origin: "Maharastra, India",
            image: "/warliPaintings.jpg",
            url: "/home/products/warli"
        },
        {
            name: "Mirzapur Dari",
            type: "Home Decor",
            origin: "Mirzapur, Uttar Pradesh",
            image: "/mirzapurHandmadeDari.jpg",
             url: "/home/products/mirzapurdari"
        },
        {
            name: "Lucknow Chikankari",
            type: "Fabric",
            origin: "Lucknow, Uttar Pradesh",
            image: "/lucknowChikankari.jpg",
             url: "/home/products/chikankari"
        },
        {
            name: "Makrana Marble",
            type: "Stone/ Stone Work",
            origin: "Rajasthan, India",
            image: "/makranaMarble.jpg",
             url: "/home/products/makranamarbles"
        },
        {
            name: "Kashmir Walnut Wood Carving",
            type: "Art Form",
            origin: "Kashmir, India",
            image: "/kashmirWalnutWoodCarving.jpg",
             url: "/home/products/kashmirwalnutwoodcarving"
        },
        {
            name: "Birdiware",
            type: "Metal Work",
            origin: "Karnataka, India",
            image: "/bidriware.jpg",
             url: "/home/products/bidriware"
        },
        {
            name: "Kondapalli Toys",
            type: "Art Form",
            origin: "Andra Pradesh, India",
            image: "/kondapalliToys.jpg",
             url: "/home/products/kondapallitoys"
        },
        {
            name: "Nirmal Paintings",
            type: "Art Form",
            origin: "Telangana, India",
            image: "/nirmalPaintings.jpg",
             url: "/home/products/nirmalpaintings"
        },
        {
            name: "Navara Rice",
            type: "Grocery",
            origin: "Kerela, India",
            image: "/navaraRice.jpg",
            url: "/home/products/navararice"
        },
        {
            name: "Malabar Pepper",
            type: "Grocery",
            origin: "Kerela, India",
            image: "/malabarPepper.jpg",
            url: "/home/products/malabarpepper"
        },
        {
            name: "Monsooned Malabar Coffee",
            type: "Grocery",
            origin: "Kerela,India",
            image: "/monsoonedMalabarCoffee.jpg",
            url: "/home/products/monsoonedmalabarcoffee"
        },
        {
            name: "Lakshamanbhog Mango",
            type: "Edibles",
            origin: "West Bengal, India",
            image: "/lakshmanbhogMango.jpg",
            url: "/home/products/lakshyamanbhogmango"
        },
        {
            name: "Naga Mircha",
            type: "Grocery",
            origin: "Nagaland, India",
            image: "/nagaMircha.jpg",
            url: "/home/products/nagamircha"
        },
        {
            name: "Kalampur Red Banana",
            type: "Edibles",
            origin: "Odisha, India",
            image: "/kalampurRedBanana.jpg",
            url: "/home/products/kalampurredbananas"
        },
        {
            name: "Nashik Grapes",
            type: "Edibles",
            origin: "Nashik, Maharastra",
            image: "/nashikGrapes.jpg",
            url: "/home/products/nashikgrapes"
        },
        {
            name: "Gir Kesar Mango",
            type: "Edibles",
            origin: "Gir, Gujrat",
            image: "/girKesarMango.jpg",
            url: "/home/products/girkesarmango"
        },
        {
            name: "Nagpur Orages",
            type: "Edibles",
            origin: "Nagpur, Maharastra",
            image: "/nagpurOrange.jpg",
            url: "/home/products/nagpuroranges"
        },
        {
            name: "Tezpur Litchi",
            type: "Edibles",
            origin: "Tezpur, Assam",
            image: "/tezpurLitchi.jpg",
            url: "/home/products/tezpurlitchi"
        },
        {
            name: "Basmati Rice",
            type: "Grocery",
            origin: "India",
            image: "/basmatiRice.jpg",
            url: "/home/products/basmatirice"
        },
        {
            name: "Alphonso Mango",
            type: "Edibles",
            origin: "Maharastra, India",
            image: "/alphonsoMango.jpg",
            url: "/home/products/alphonsomango"
        },
        {
            name: "Jeerakasala Rice",
            type: "Grocery",
            origin: "Waynad, Kerela",
            image: "/waynadJeerakasala.jpeg",
            url: "/home/products/jeerakasalarice"
        },
        {
            name: "Vazhakulam Pineapple",
            type: "Edibles",
            origin: "Kerela, India",
            image: "/vazhakulamPineapple.jpg",
            url: "/home/products/vazhakulampineapple"
        },
        {
            name: "Coorg Green Cardamom",
            type: "Grocery",
            origin: "Coorg, Karnataka",
            image: "/coorgGreenCardamom.jpg",
            url: "/home/products/coorggreencardamom"
        },
        {
            name: "Dharwad Pedha",
            type: "Edibles",
            origin: "Dharwad, Karnataka",
            image: "/dharwadPedha.jpg",
            url: "/home/products/dharwadpedha"
        },
        {
            name: "Feni",
            type: "Liquor",
            origin: "Goa, India",
            image: "/feni.jpg",
            url: "/home/products/feni"
        },
        {
            name: "Tirupati Ladoo",
            type: "Edibles",
            origin: "Tirupati,Andra Pedha",
            image: "/tirupathiLaddu.jpg",
            url: "/home/products/tirupatiladdu"
        },
        {
            name: "Bikaneri Bhujia",
            type: "Edibles",
            origin: "Bikaner, Rajasthan",
            image: "/bikaneriBhujia.jpg",
            url: "/home/products/bikaneribhujia"
        },
        {
            name: "Ratlami Sev",
            type: "Edibles",
            origin: "Ratlam, Madhya Pradesh",
            image: "/ratlamiSev.jpg",
            url: "/home/products/ratlamisev"
        },
        {
            name: "Agra Petha",
            type: "Edibles",
            origin: "Agra, Uttar Pradesh",
            image: "/agraPetha.jpg",
            url: "/home/products/agrapetha"
        },
        {
            name: "Shrivilliputtur Palkova",
            type: "Edibles",
            origin: "Tamil Nadu, India",
            image: "/srivilliputturPalkova.jpg",
            url: "/home/products/shrivilliputturpalkova"
        },
        {
            name: "Bhiwapur Chilli",
            type: "Grocery",
            origin: "Maharastra, India",
            image: "/bhiwapurChilli.jpg",
            url: "/home/products/bhiwapurchilli"
        },
        {
            name: "Khola Chilli",
            type: "Grocery",
            origin: "Goa, India",
            image: "/kholaChilli.jpg",
            url: "/home/products/kholachilli"
        },
        {
            name: "Palakkad Matta Rice",
            type: "Grocery",
            origin: "Kerela, India",
            image: "/palakkadMattaRice.webp",
            url: "/home/products/pallakadmattarice"
        },
        {
            name: "Assam Orthodox Tea",
            type: "Grocery",
            origin: "Assam, India",
            image: "/assamOrthodoxTea.jpg",
            url: "/home/products/assamorthodoxtea"
        },
        {
            name: "Odisha Rasagola",
            type: "Edibles",
            origin: "Odisha, India",
            image: "/odishaRasagola.webp",
            url: "/home/products/odisharasagola"
        },
        {
            name: "Banglar Rasagola",
            type: "Edibles",
            origin: "West Bengal, India",
            image: "/banglarRasagola.jpg",
            url: "/home/products/banglarasagola"
        },
        {
            name: "Mizo Chilli",
            type: "Grocery",
            origin: "Mizoram, India",
            image: "/mizoChilli.webp",
            url: "/home/products/mizochilli"
        },
        {
            name: "Kolhapuri Chappal",
            type: "Footwear",
            origin: "Kolhapur, Maharastra",
            image: "/kolhapuriChappal.jpeg",
            url: "/home/products/kolhapurichappal"
        },
        {
            name: "Pashmina Wool",
            type: "Fabric",
            origin: "Jammu & Kahmir, India",
            image: "/pashminaWool.jpg",
            url: "/home/products/pashminawool"
        },
        {
            name: "Aranmula Kanadi",
            type: "Metal Work",
            origin: "Kerela, India",
            image: "/aranmulaKannadi.jpg",
            url: "/home/products/aranmulakanadi"
        },
        {
            name: "Etikoppaka Toys",
            type: "Art Form",
            origin: "Andhra Pradesh, India",
            image: "/etikoppakaToys.webp",
            url: "/home/products/etikoppakatoys"
        },
        {
            name: "Solapur Chaddar",
            type: "Fabric",
            origin: "Solapur, Maharastra",
            image: "/solapurChaddar.jpg",
            url: "/home/products/solapurchaddar"
        }
    ];

    // Duplicate the products array to reach 64 items
    const allProducts = [...products];

    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            {/* Header */}
            <Header />

            <div className="flex flex-col items-center justify-center mt-5 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
                    {allProducts.map((product, index) => (
                        <div key={index} className="transform transition-all duration-300 hover:scale-105">
                            <div className="flex flex-col items-center justify-center gap-4 font-medium bg-white h-full w-full rounded-2xl border border-emerald-200 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                                <div className="relative w-full aspect-square overflow-hidden rounded-xl mb-2">
                                    <Image 
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-300"
                                    />
                    </div>
                                <h1 className="text-2xl font-bold text-emerald-800">{product.name}</h1>
                                <div className="w-full space-y-2">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <span className="font-medium">Type:</span>
                                        <span>{product.type}</span>
                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <span className="font-medium">Origin:</span>
                                        <span>{product.origin}</span>
                    </div>
                </div>
                                <div className="w-full mt-4 space-y-3">
                                    <Link href={product.url as string} className="block w-full">
                                        <button className="w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300 cursor-pointer">
                                            View Details
                                        </button>
                    </Link>
                                    <Link href="/" className="block w-full">
                                        <button className="w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300 cursor-pointer">
                                            View Buying Details
                                        </button>
                    </Link>
                    </div>
                </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}