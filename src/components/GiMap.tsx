'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { giTags } from '@/lib/giTags';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import Image from 'next/image';

// Create a mapping of GI tag names to their corresponding images
const giTagImages: { [key: string]: string } = {
  "Darjeeling Tea": "/darjeelingTea.jpg",
  "Mysore Silk": "/mysoreSilk.jpg",
  "Banarasi Saree": "/banarasiSilkSaree.jpg",
  "Alphonso Mango": "/alphonsoMango.jpg",
  "Chanderi Saree": "/chanderiSaree.jpg",
  "Kancheepuram Silk": "/kancheepuramSilk.jpg",
  "Kullu Shawl": "/kulluShawl.jpg",
  "Mysore Sandal Soap": "/MysoreSandalSoap.webp",
  "Madhubani Paintings": "/madhubaniPainting.jpg",
  "Salem Fabric": "/salemFabric.jpg",
  "Channapatna Toys": "/channapatnaToys.jpg",
  "Shrikalasthi Kalamkari": "/shrikalasthiKalamkari.jpg",
  "Thanjavur Paintings": "/thanjavurPaintings.jpg",
  "Muga Silk": "/mugaSilk.jpg",
  "Kathputlis": "/kathputli.jpg",
  "Blue Pottery": "/bluePottery.jpg",
  "Kutch Embroidery": "/kutchEmbroidery.jpg",
  "Chamba Rumal": "/chambaRumal.jpg",
  "Pipli Artwork": "/pipliArtwork.jpg",
  "Thanjavur Doll": "/thanjavurDoll.jpg",
  "Banaras Silk Saree": "/banarasiSilkSaree.jpg",
  "Surat Zari Fabric": "/suratZari.jpg",
  "Phulkari": "/phulkari.jpg",
  "Firozabad Bangles": "/firozabadGlass.jpg",
  "Warli Paintings": "/warliPaintings.jpg",
  "Mirzapur Dari": "/mirzapurHandmadeDari.jpg",
  "Lucknow Chikankari": "/lucknowChikankari.jpg",
  "Makrana Marble": "/makranaMarble.jpg",
  "Kashmir Walnut Wood Carving": "/kashmirWalnutWoodCarving.jpg",
  "Bidriware": "/bidriware.jpg",
  "Kondapalli Toys": "/kondapalliToys.jpg",
  "Nirmal Paintings": "/nirmalPaintings.jpg",
  "Navara Rice": "/navaraRice.jpg",
  "Malabar Pepper": "/malabarPepper.jpg",
  "Monsooned Malabar Coffee": "/monsoonedMalabarCoffee.jpg",
  "Lakshamanbhog Mango": "/lakshmanbhogMango.jpg",
  "Naga Mircha": "/nagaMircha.jpg",
  "Kalampur Red Banana": "/kalampurRedBanana.jpg",
  "Nashik Grapes": "/nashikGrapes.jpg",
  "Gir Kesar Mango": "/girKesarMango.jpg",
  "Nagpur Oranges": "/nagpurOrange.jpg",
  "Tezpur Litchi": "/tezpurLitchi.jpg",
  "Basmati Rice": "/basmatiRice.jpg",
  "Jeerakasala Rice": "/waynadJeerakasala.jpeg",
  "Vazhakulam Pineapple": "/vazhakulamPineapple.jpg",
  "Coorg Green Cardamom": "/coorgGreenCardamom.jpg",
  "Dharwad Pedha": "/dharwadPedha.jpg",
  "Feni": "/feni.jpg",
  "Tirupati Ladoo": "/tirupathiLaddu.jpg",
  "Bikaneri Bhujia": "/bikaneriBhujia.jpg",
  "Ratlami Sev": "/ratlamiSev.jpg",
  "Agra Petha": "/agraPetha.jpg",
  "Shrivilliputtur Palkova": "/srivilliputturPalkova.jpg",
  "Bhiwapur Chilli": "/bhiwapurChilli.jpg",
  "Khola Chilli": "/kholaChilli.jpg",
  "Palakkad Matta Rice": "/palakkadMattaRice.webp",
  "Assam Orthodox Tea": "/assamOrthodoxTea.jpg",
  "Odisha Rasagola": "/odishaRasagola.webp",
  "Banglar Rasagola": "/banglarRasagola.jpg",
  "Mizo Chilli": "/mizoChilli.webp",
  "Kolhapuri Chappal": "/kolhapuriChappal.jpeg",
  "Pashmina Wool": "/pashminaWool.jpg",
  "Aranmula Kanadi": "/aranmulaKannadi.jpg",
  "Etikoppaka Toys": "/etikoppakaToys.webp",
  "Solapur Chaddar": "/solapurChaddar.jpg"
};

export default function GiMap() {
  return (
    <MapContainer
      center={[23.5937, 80.9629]}
      zoom={5}
      scrollWheelZoom={true}
      className="h-full w-full rounded-xl"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {giTags.map((tag, idx) => {
        const imageUrl = giTagImages[tag.name] || "/Logo.jpg"; // Default image if not found
        
        return (
          <Marker key={idx} position={[tag.lat, tag.lng]}>
            <Popup className="custom-popup">
              <div className="min-w-[200px] p-2">
                <div className="text-center">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{tag.name}</h3>
                  <div className="w-full h-32 mb-3 rounded-lg overflow-hidden">
                    <img 
                      src={imageUrl} 
                      alt={tag.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/Logo.jpg"; // Fallback image
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Location:</strong> {tag.lat.toFixed(4)}, {tag.lng.toFixed(4)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Click to learn more about this GI product
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
