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
            image: "/darjeelingTea.jpg"
        },
        {
            name: "Chanderi Saree",
            type: "Fabric",
            origin: "Chanderi, Madhya Pradesh",
            image: "/chanderiSaree.jpg"
        },
        {
            name: "Kancheepuram Silk",
            type: "Fabric",
            origin: "Kancheepuram, Tamil Nadu",
            image: "/kancheepuramSilk.jpg"
        },
        {
            name: "Kullu Shawl",
            type: "Fabric",
            origin: "Kullu, Himachal Pradesh",
            image: "/kulluShawl.jpg"
        },
        {
            name: "Mysore Sanadal Soap",
            type: "Soap",
            origin: "Mysore, Karnataka",
            image: "/mysoreSandalSoap.webp"
        },
        {
            name: "Madhubani Paintings",
            type: "Art Form",
            origin: "Bihar, India",
            image: "/madhubaniPainting.jpg"
        },
        {
            name: "Mysore Silk",
            type: "Fabric",
            origin: "Mysore, Karnataka",
            image: "/mysoreSilk.jpg"
        },
        {
            name: "Salem Fabric",
            type: "Fabric",
            origin: "Salem, Tamil Nadu",
            image: "/salemFabric.jpg"
        },
        {
            name: "Channapatna Toys",
            type: "Art Form",
            origin: "Karnataka, India",
            image: "/channapatnaToys.jpg"
        },
        {
            name: "Shrikalasthi Kalamkari",
            type: "Art Form",
            origin: "Andra Pradesh, India",
            image: "/shrikalasthiKalamkari.jpg"
        },
        {
            name: "Thanjavur Paintings",
            type: "Art Form",
            origin: "Thanjavur, Tamil Nadu",
            image: "/thanjavurPaintings.jpg"
        },
        {
            name: "Muga Silk",
            type: "Fabric",
            origin: "Muga, Assam",
            image: "/mugaSilk.jpg"
        },
        {
            name: "Kathputlis",
            type: "Art Form",
            origin: "Rajasthan, India",
            image: "/kathputli.jpg"
        },
        {
            name: "Blue Pottery",
            type: "Pottery",
            origin: "Jaipur, Rajasthan",
            image: "/bluePottery.jpg"
        },
        {
            name: "Kutch Embroidery",
            type: "Fabric",
            origin: "Kutch, Gujrat",
            image: "/kutchEmbroidery.jpg"
        },
        {
            name: "Chamba Rumal",
            type: "Fabric",
            origin: "Chamba, Himanchal Pradesh",
            image: "/chambaRumal.jpg"
        },
        {
            name: "Pipli Artwork",
            type: "Art Form",
            origin: "Odisha, India",
            image: "/pipliArtwork.jpg"
        },
        {
            name: "Thanjavur Doll",
            type: "Artwork",
            origin: "Thanjavur, Tamil Nadu",
            image: "/thanjavurDoll.jpg"
        },
        {
            name: "Banaras Silk Saree",
            type: "Fabric",
            origin: "Varanasi, Uttar Pradesh",
            image: "/banarasiSilkSaree.jpg"
        },
        {
            name: "Surat Zari Fabric",
            type: "Fabric",
            origin: "Surat, Gujrat",
            image: "/suratZari.jpg"
        },
        {
            name: "Phulkari",
            type: "Fabric",
            origin: "Gujrat, India",
            image: "/suratZari.jpg"
        },
        {
            name: "Firozabad Bangles",
            type: "Art Form",
            origin: "Firozabad, Uttar Pradesh",
            image: "/firozabadGlass.jpg"
        },
        {
            name: "Warli Paintings",
            type: "Art Form",
            origin: "Odisha, India",
            image: "/warliPaintings.jpg"
        },
        {
            name: "Mirzapur Dari",
            type: "Home Decor",
            origin: "Mirzapur, Uttar Pradesh",
            image: "/mirzapurHandmadeDari.jpg"
        },
        {
            name: "Lucknow Chikankari",
            type: "Fabric",
            origin: "Lucknow, Uttar Pradesh",
            image: "/lucknowChikankari.jpg"
        },
        {
            name: "Makrana Marble",
            type: "Stone/ Stone Work",
            origin: "Rajasthan, India",
            image: "/makranaMarble.jpg"
        },
        {
            name: "Kashmir Walnut Wood Carving",
            type: "Art Form",
            origin: "Kashmir, India",
            image: "/kashmirWalnutWoodCarving.jpg"
        },
        {
            name: "Birdiware",
            type: "Metal Work",
            origin: "Karnataka, India",
            image: "/bidriware.jpg"
        },
        {
            name: "Kondapalli Toys",
            type: "Art Form",
            origin: "Andra Pradesh, India",
            image: "/kondapalliToys.jpg"
        },
        {
            name: "Nirmal Paintings",
            type: "Art Form",
            origin: "Telangana, India",
            image: "/nirmalPaintings.jpg"
        },
        {
            name: "Navara Rice",
            type: "Grocery",
            origin: "Telangana, India",
            image: "/navaraRice.jpg"
        },
        {
            name: "Malabar Pepper",
            type: "Grocery",
            origin: "Kerela, India",
            image: "/malabarPepper.jpg"
        },
        {
            name: "Monsooned Malabar Coffee",
            type: "Grocery",
            origin: "Kerela,India",
            image: "/monsoonedMalabarCoffee.jpg"
        },
        {
            name: "Lakshanbhog Mango",
            type: "Edibles",
            origin: "West Bengal, India",
            image: "/lakshmanbhogMango.jpg"
        },
        {
            name: "Naga Mircha",
            type: "Grocery",
            origin: "Nagaland, India",
            image: "/nagaMircha.jpg"
        },
        {
            name: "Kalampur Red Banana",
            type: "Edibles",
            origin: "Odisha, India",
            image: "/kalampurRedBanana.jpg"
        },
        {
            name: "Nashik Grapes",
            type: "Edibles",
            origin: "Nashik, Maharastra",
            image: "/nashikGrapes.jpg"
        },
        {
            name: "Gir Kesar Mango",
            type: "Edibles",
            origin: "Gir, Gujrat",
            image: "/girKesarMango.jpg"
        },
        {
            name: "Nagpur Orages",
            type: "Edibles",
            origin: "Nagpur, Maharastra",
            image: "/nagpurOrange.jpg"
        },
        {
            name: "Tezpur Litchi",
            type: "Edibles",
            origin: "Tezpur, Assam",
            image: "/tezpurLitchi.jpg"
        },
        {
            name: "Basmati Rice",
            type: "Grocery",
            origin: "India",
            image: "/basmatiRice.jpg"
        },
        {
            name: "Alphonso Mango",
            type: "Edibles",
            origin: "Maharastra, India",
            image: "/alphonsoMango.jpg"
        },
        {
            name: "Jeerakasala Rice",
            type: "Grocery",
            origin: "Waynad, Kerela",
            image: "/waynadJeerakasala.jpeg"
        },
        {
            name: "Vazhakulam Pineapple",
            type: "Edibles",
            origin: "Kerela, India",
            image: "/vazhakulamPineapple.jpg"
        },
        {
            name: "Coorg Green Cardamom",
            type: "Grocery",
            origin: "Coorg, Karnataka",
            image: "/coorgGreenCardamom.jpg"
        },
        {
            name: "Dharwad Pedha",
            type: "Edibles",
            origin: "Dharwad, Karnataka",
            image: "/dharwadPedha.jpg"
        },
        {
            name: "Feni",
            type: "Liquor",
            origin: "Goa, India",
            image: "/feni.jpg"
        },
        {
            name: "Tirupati Ladoo",
            type: "Edibles",
            origin: "Tirupati,Andra Pedha",
            image: "/tirupathiLaddu.jpg"
        },
        {
            name: "Bikaneri Bhujia",
            type: "Edibles",
            origin: "Bikaner, Rajasthan",
            image: "/bikaneriBhujia.jpg"
        },
        {
            name: "Ratlami Sev",
            type: "Edibles",
            origin: "Ratlam, Madhya Pradesh",
            image: "/ratlamiSev.jpg"
        },
        {
            name: "Agra Petha",
            type: "Edibles",
            origin: "Agra, Uttar Pradesh",
            image: "/agraPetha.jpg"
        },
        {
            name: "Shrivilliputtur Palkova",
            type: "Edibles",
            origin: "Tamil Nadu, India",
            image: "/srivilliputturPalkova.jpg"
        },
        {
            name: "Bhiwapur Chilli",
            type: "Grocery",
            origin: "Maharastra, India",
            image: "/bhiwapurChilli.jpg"
        },
        {
            name: "Khola Chilli",
            type: "Grocery",
            origin: "Goa, India",
            image: "/kholaChilli.jpg"
        },
        {
            name: "Palakkad Matta Rice",
            type: "Grocery",
            origin: "Kerela, India",
            image: "/palakkadMattaRice.webp"
        },
        {
            name: "Assam Orthodox Tea",
            type: "Grocery",
            origin: "Assam, India",
            image: "/assamOrthodoxTea.jpg"
        },
        {
            name: "Odisha Rasagola",
            type: "Edibles",
            origin: "Odisha, India",
            image: "/odishaRasagola.webp"
        },
        {
            name: "Banglar Rasagola",
            type: "Edibles",
            origin: "West Bengal, India",
            image: "/banglarRasagola.jpg"
        },
        {
            name: "Mizo Chilli",
            type: "Grocery",
            origin: "Mizoram, India",
            image: "/mizoChilli.webp"
        },
        {
            name: "Kolhapuri Chappal",
            type: "Footwear",
            origin: "Kolhapur, Maharastra",
            image: "/kolhapuriChappal.jpeg"
        },
        {
            name: "Pashmina Wool",
            type: "Fabric",
            origin: "Jammu & Kahmir, India",
            image: "/pashminaWool.jpg"
        },
        {
            name: "Aranmula Kanadi",
            type: "Metal Work",
            origin: "Kerela, India",
            image: "/aranmulaKannadi.jpg"
        },
        {
            name: "Etikoppaka Toys",
            type: "Art Form",
            origin: "Andhra Pradesh, India",
            image: "/etikoppakaToys.webp"
        },
        {
            name: "Solapur Chaddar",
            type: "Fabric",
            origin: "Solapur, Maharastra",
            image: "/solapurChaddar.jpg"
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
                                    <Link href="/" className="block w-full">
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