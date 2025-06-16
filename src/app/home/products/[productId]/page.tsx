"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Product data mapping with cultural and historical information
const productData = {
  madhubanipaintings: {
    name: "Madhubani Paintings",
    description: "Folk Art of Bihar",
    image: "/madhubaniPainting.jpg",
    origin: "Bihar, India",
    type: "Art Form",
    shortDescription: "Traditional folk paintings with vibrant colors and intricate patterns.",
    culturalSignificance: "Madhubani paintings are a traditional art form from Bihar, known for their vibrant colors and intricate patterns. They are often used to decorate homes and are a symbol of cultural identity and heritage.",
    originStory: "Madhubani paintings originated in the Mithila region of Bihar. Traditionally, women created these paintings on the walls of their homes during festivals and special occasions.",
    specialFeatures: [
      "Natural dyes and colors",
      "Intricate patterns",
      "Depictions of Hindu deities",
      "Hand-painted",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Festival Decoration",
        story: "Madhubani paintings are used to decorate homes during festivals, symbolizing prosperity and joy."
      },
      {
        title: "The Women Artists",
        story: "Women in the Mithila region have been the primary creators of Madhubani paintings, passing down their skills through generations."
      }
    ],
    originImage: "/images/bihar.jpg"
  },
  banglarasagola: {
    name: "Banglar Rasagola",
    description: "Bengal's Sweet Heritage",
    image: "/banglarRasagola.jpg",
    origin: "Kolkata, West Bengal",
    type: "Sweet",
    shortDescription: "Traditional Bengali sweet with rich cultural history",
    culturalSignificance: "Banglar Rasagola is not just a sweet; it's a cultural icon that represents Bengal's rich culinary heritage. It has been at the center of a historic debate between West Bengal and Odisha, with both states claiming its origin. The sweet has become a symbol of Bengali identity and is an essential part of various celebrations, from religious festivals to family gatherings. Its preparation is considered an art form, with master confectioners passing down their techniques through generations.",
    originStory: "The modern version of Banglar Rasagola was created by Nobin Chandra Das in 1868 in Kolkata. He modified the traditional recipe to create a softer, spongier version that would appeal to the British palate. The sweet gained popularity during the Bengal Renaissance and became a favorite among the Bengali intelligentsia. The recipe was later perfected by his son, K.C. Das, who established the first Rasagola shop in Kolkata. Today, it's recognized as a Geographical Indication (GI) product of West Bengal.",
    specialFeatures: [
      "Soft and spongy texture",
      "Perfect balance of sweetness",
      "Traditional preparation method",
      "No artificial colors or preservatives",
      "Made from chhena (cottage cheese) and sugar syrup"
    ],
    culturalStories: [
      {
        title: "The Nobin Chandra Innovation",
        story: "Nobin Chandra Das's innovation in 1868 revolutionized the traditional recipe, creating the modern Banglar Rasagola that we know today. His version was softer and more appealing to the British colonial rulers."
      },
      {
        title: "The GI Tag Journey",
        story: "The long-standing debate between West Bengal and Odisha over the origin of Rasagola led to West Bengal securing the GI tag for 'Banglar Rasagola' in 2017, recognizing its unique cultural and culinary significance."
      }
    ],
    originImage: "/places/kolkata.jpg"
  },
  darjeelingtea: {
    name: "Darjeeling Tea",
    description: "The Champagne of Teas",
    image: "/images/darjeelingTeaGarden.jpg",
    origin: "Darjeeling, West Bengal",
    type: "Beverage",
    shortDescription: "Premium tea known for its unique muscatel flavor",
    culturalSignificance: "Darjeeling tea is not just a beverage; it's a cultural institution that has shaped the social and economic landscape of the Darjeeling hills. The tea gardens have created a unique multicultural society, bringing together various ethnic groups and creating a distinct hill station culture. The tea has become a symbol of luxury and refinement, often associated with British colonial heritage and high society. Its production has also led to the development of unique social ecosystems in the region.",
    originStory: "The story of Darjeeling tea begins in the 1840s when the British established tea gardens in the Darjeeling hills. The first commercial tea gardens were planted by Dr. Campbell, who brought seeds from China. The unique combination of altitude, soil, and climate created the distinctive muscatel flavor that made Darjeeling tea famous worldwide. The industry grew rapidly, with many British planters establishing their own gardens. Today, there are 87 tea gardens producing the world's most expensive tea.",
    specialFeatures: [
      "Unique muscatel flavor",
      "Four distinct seasonal flushes",
      "High altitude cultivation",
      "Traditional hand-plucking method",
      "Protected Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The First Flush",
        story: "The first flush of Darjeeling tea, harvested in spring, is considered the most premium and is often called the 'Champagne of Teas' due to its delicate flavor and high price."
      },
      {
        title: "The Garden Culture",
        story: "The tea gardens of Darjeeling have created a unique multicultural society, with workers from Nepal, Tibet, and other regions contributing to the rich cultural tapestry of the hills."
      }
    ],
    originImage: "/teaGarden.jpg"
  },
  feni: {
    name: "Goan Feni",
    description: "Traditional Cashew Spirit",
    image: "/feni.jpg",
    origin: "Goa",
    type: "Spirit",
    shortDescription: "Traditional cashew apple spirit",
    culturalSignificance: "Feni is more than just a spirit; it's a cultural symbol of Goa's unique identity, blending Portuguese and Indian influences. It represents the state's agricultural heritage and traditional distillation techniques. The drink has become an integral part of Goan celebrations, from festivals to family gatherings. Its production supports local farmers and preserves traditional knowledge of distillation methods passed down through generations.",
    originStory: "The story of Feni begins with the Portuguese introduction of cashew trees to Goa in the 16th century. The locals discovered that the cashew apple, previously considered waste, could be fermented and distilled into a potent spirit. The traditional distillation process, using a unique three-pot system, was developed over centuries. Today, Feni has gained recognition as a Geographical Indication product, protecting its traditional production methods and cultural heritage.",
    specialFeatures: [
      "Traditional three-pot distillation",
      "Made from cashew apples",
      "No artificial flavors or colors",
      "Distinctive fruity aroma",
      "Protected Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Portuguese Connection",
        story: "The Portuguese introduced cashew trees to Goa, but it was the local Goans who discovered the art of making Feni from the cashew apple, creating a unique spirit that's now a symbol of Goan culture."
      },
      {
        title: "The Distillation Art",
        story: "The traditional three-pot distillation system used for Feni is a unique Goan innovation that has been passed down through generations of distillers, preserving the authentic taste and character of the spirit."
      }
    ],
    originImage: "/images/goa.jpg"
  },
  kancheepuramsaree: {
    name: "Kancheepuram Saree",
    description: "Silk Weaving Heritage",
    image: "/images/kancheepuramSaree.jpg",
    origin: "Kancheepuram, Tamil Nadu",
    type: "Textile",
    shortDescription: "Luxurious silk sarees with intricate zari work",
    culturalSignificance: "Kancheepuram sarees are not just garments; they are living embodiments of Tamil Nadu's rich cultural heritage. These sarees have been an integral part of South Indian weddings and religious ceremonies for centuries. The intricate designs often feature motifs from temple architecture, reflecting the region's deep spiritual connection. The art of weaving these sarees has been passed down through generations, with each family maintaining their unique patterns and techniques.",
    originStory: "The history of Kancheepuram sarees dates back to the 5th century when weavers from Andhra Pradesh migrated to Kancheepuram. They brought with them the art of silk weaving, which was then refined and developed into the distinctive Kancheepuram style. The patronage of various dynasties, including the Cholas and the Vijayanagara Empire, helped the craft flourish. Today, it's recognized as a Geographical Indication product, protecting its traditional production methods.",
    specialFeatures: [
      "Pure mulberry silk",
      "Traditional zari work",
      "Temple-inspired motifs",
      "Three-ply weaving technique",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Temple Connection",
        story: "The designs of Kancheepuram sarees often feature motifs inspired by temple architecture, with patterns like the gopuram (temple tower) and peacock being particularly popular."
      },
      {
        title: "The Weaving Families",
        story: "Each weaving family in Kancheepuram has their own signature patterns and techniques, passed down through generations, creating a rich tapestry of design variations."
      }
    ],
    originImage: "/images/kancheepuram.jpg"
  },
  kullushawl: {
    name: "Kullu Shawl",
    description: "Himalayan Weaving Heritage",
    image: "/kulluShawl.jpg",
    origin: "Kullu Valley, Himachal Pradesh",
    type: "Textile",
    shortDescription: "Handwoven woolen shawls with traditional patterns",
    culturalSignificance: "Kullu shawls are more than just winter wear; they are a testament to the rich cultural heritage of the Kullu Valley. These shawls have been an integral part of the local culture for centuries, serving as both practical clothing and cultural artifacts. The patterns and designs reflect the valley's natural beauty and spiritual beliefs, with motifs inspired by local flora, fauna, and religious symbols. The art of weaving these shawls has been passed down through generations, preserving traditional techniques while adapting to modern tastes.",
    originStory: "The tradition of Kullu shawls began in the 17th century when the local weavers started creating these distinctive woolen garments. The craft was initially influenced by the neighboring regions of Kinnaur and Lahaul, but soon developed its own unique style. The introduction of the pit loom by the British in the 19th century revolutionized the weaving process, allowing for more intricate patterns. Today, the shawls are recognized as a Geographical Indication product, protecting their traditional production methods and cultural heritage.",
    specialFeatures: [
      "Hand-spun wool from local sheep",
      "Traditional pit loom weaving",
      "Natural dye colors",
      "Distinctive geometric patterns",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Festival Connection",
        story: "Kullu shawls are an essential part of the Kullu Dussehra festival, where they are worn as a symbol of cultural pride and tradition."
      },
      {
        title: "The Weaving Community",
        story: "The weaving of Kullu shawls is primarily done by women in their homes, creating a strong community bond and preserving traditional knowledge."
      }
    ],
    originImage: "/images/kullu.jpg"
  },
  pashminawool: {
    name: "Kashmiri Pashmina",
    description: "The Softest Wool in the World",
    image: "/pashminaWool.jpg",
    origin: "Jammu Valley",
    type: "Textile",
    shortDescription: "Luxurious handwoven shawls from fine cashmere wool",
    culturalSignificance: "Kashmiri Pashmina is renowned worldwide for its exceptional softness and warmth. The art of Pashmina weaving represents the perfect blend of natural resources, traditional craftsmanship, and cultural identity. The intricate designs often feature motifs inspired by Persian and Mughal art, reflecting the region's diverse cultural influences.",
    originStory: "The story of Pashmina begins with the discovery of the fine undercoat of the Changthangi goat in the high-altitude regions of Ladakh. The craft was introduced to Kashmir in the 15th century by Sultan Zain-ul-Abidin, who brought weavers from Central Asia. The art flourished under the patronage of the Mughal emperors, who were known for their love of fine textiles.",
    specialFeatures: [
      "Fine cashmere wool from Changthangi goats",
      "Hand-spinning and hand-weaving",
      "Traditional embroidery techniques",
      "Natural dye colors",
      "Protected Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Mughal Connection",
        story: "The Mughal emperors were great patrons of Pashmina art, with Emperor Akbar establishing royal workshops for the production of these luxurious shawls."
      },
      {
        title: "The Art of Kani",
        story: "The Kani weaving technique, used in the most intricate Pashmina shawls, is considered a masterpiece of textile art and is recognized by UNESCO."
      }
    ],
    originImage: "/images/jammu.jpg"
  },
  bidriware: {
    name: "Bidriware",
    description: "Metallic Inlay Art",
    image: "/bidriware.jpg",
    origin: "Bidar, Karnataka",
    type: "Metal Craft",
    shortDescription: "Traditional metal craft with silver inlay work",
    culturalSignificance: "Bidriware is a unique metal craft that combines Persian and Indian artistic traditions. The distinctive black color of the metal, achieved through a special process involving soil from the Bidar fort, makes these pieces instantly recognizable. The art form is known for its intricate silver inlay work and geometric patterns.",
    originStory: "The art of Bidriware was introduced to Bidar in the 14th century by Persian craftsmen who came to the court of the Bahmani Sultans. The craft was named after the city of Bidar, where it was developed and perfected. Today, it is recognized as a Geographical Indication product, protecting its traditional production methods.",
    specialFeatures: [
      "Unique black color from Bidar soil",
      "Silver inlay work",
      "Traditional Persian motifs",
      "Hand-crafted process",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Soil Secret",
        story: "The distinctive black color of Bidriware comes from a special soil found only in the Bidar fort, which contains unique properties that react with the metal to create the characteristic color."
      },
      {
        title: "The Royal Patronage",
        story: "Bidriware flourished under the patronage of the Bahmani Sultans, who used these exquisite objects as diplomatic gifts to other rulers."
      }
    ],
    originImage: "/images/karnataka.jpg"
  },
  mysoresandalsoap: {
    name: "Mysore Sandal Soap",
    description: "Fragrant Heritage of Karnataka",
    image: "/MysoreSandalSoap.webp",
    origin: "Mysore, Karnataka",
    type: "Soap",
    shortDescription: "Premium sandalwood soap with distinctive aroma.",
    culturalSignificance: "Mysore Sandal Soap is a cultural treasure that has been an integral part of Indian traditions for centuries. The sandalwood from Mysore is renowned worldwide for its superior quality and distinctive aroma. It holds deep religious and cultural significance, being used in temples, royal courts, and traditional ceremonies.",
    originStory: "The history of Mysore Sandal Soap dates back to the time of the Wodeyar dynasty, who established the first sandalwood oil factory in 1916. The Mysore Sandalwood Oil Factory was the first of its kind in the world to produce sandalwood oil through steam distillation. The industry flourished under royal patronage, with the Wodeyars implementing strict conservation measures.",
    specialFeatures: [
      "Pure Mysore sandalwood oil",
      "Traditional steam distillation",
      "Hand-carved artifacts",
      "Natural fragrance",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Royal Connection",
        story: "The Wodeyar kings of Mysore were great patrons of sandalwood art, using it extensively in their palaces and temples, and establishing the first sandalwood oil factory."
      },
      {
        title: "The Temple Tradition",
        story: "Sandalwood paste is an essential part of temple rituals in South India, with the Mysore variety being particularly prized for its superior quality and fragrance."
      }
    ],
    originImage: "/images/mysore.jpg"
  },
  thanjavurpaintings: {
    name: "Thanjavur Paintings",
    description: "Living Tradition of South India",
    image: "/thanjavurPaintings.jpg",
    origin: "Thanjavur, Tamil Nadu",
    type: "Art Form",
    shortDescription: "Rich, vibrant paintings with gold leaf work.",
    culturalSignificance: "Thanjavur paintings are a classical art form that originated in the 16th century under the patronage of the Nayakas of Thanjavur. These paintings are known for their rich colors, gold leaf work, and relief work with paste. They primarily depict Hindu deities and scenes from mythology, serving as both religious art and cultural heritage.",
    originStory: "The art form reached its zenith during the Maratha rule in the 17th century. The paintings were originally created to decorate the walls of temples and palaces. The unique style combines elements from various art traditions, including the Vijayanagara school of painting and the Maratha style.",
    specialFeatures: [
      "Gold leaf work",
      "Relief work with paste",
      "Rich, vibrant colors",
      "Traditional motifs",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Rath Yatra",
        story: "Pattachitra paintings are used during the annual Rath Yatra festival, when the deities are taken out of the temple and their images are replaced with painted ones."
      },
      {
        title: "The Heritage Village",
        story: "Raghurajpur is a village where every family is involved in Pattachitra, keeping the tradition alive."
      }
    ],
    originImage: "/images/thanjavur.jpg"
  },
  chanderisaree: {
    name: "Chanderi Saree",
    description: "Light as Air, Rich in Heritage",
    image: "/chanderiSaree.jpg",
    origin: "Chanderi, Madhya Pradesh",
    type: "Textile",
    shortDescription: "Lightweight silk-cotton blend sarees with gold work",
    culturalSignificance: "Chanderi sarees are known for their sheer texture and lightweight feel, making them perfect for the Indian climate. These sarees combine the luxury of silk with the comfort of cotton, creating a unique fabric that has been prized for centuries. The traditional gold work and fine weaving techniques make each piece a work of art.",
    originStory: "The art of Chanderi weaving dates back to the 11th century, with the craft flourishing under the patronage of the Scindias of Gwalior. The town of Chanderi became a major center for textile production, with weavers developing unique techniques to create the distinctive sheer fabric. Today, the craft is preserved by traditional weaving families and supported by government initiatives.",
    specialFeatures: [
      "Traditional gold work",
      "Sheer texture",
      "Handwoven fabric",
      "Natural dyes",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Royal Patronage",
        story: "The Scindias of Gwalior were great patrons of Chanderi weaving, using these sarees for royal ceremonies and diplomatic gifts."
      },
      {
        title: "The Weaving Heritage",
        story: "Traditional weaving families in Chanderi have preserved their unique techniques for generations, maintaining the quality and authenticity of the craft."
      }
    ],
    originImage: "/images/chanderi.jpg"
  },
  kalamkari: {
    name: "Kalamkari",
    description: "Hand-Painted Textile Art",
    image: "/shrikalasthikalamkari.jpg",
    origin: "Andhra Pradesh and Telangana",
    type: "Textile Art",
    shortDescription: "Traditional hand-painted and block-printed textiles",
    culturalSignificance: "Kalamkari is a traditional art form that combines hand-painting and block-printing techniques to create intricate designs on fabric. The art form is deeply connected to temple traditions and Persian influences, creating a unique blend of cultural elements. The name 'Kalamkari' comes from the Persian words 'kalam' (pen) and 'kari' (work), reflecting its rich heritage.",
    originStory: "The art of Kalamkari dates back to ancient times, with evidence of similar techniques found in archaeological sites. The craft flourished under the patronage of various dynasties, including the Golconda Sultanate and the Vijayanagara Empire. Today, it is practiced in two distinct styles: Srikalahasti (hand-painted) and Machilipatnam (block-printed).",
    specialFeatures: [
      "Natural dyes and colors",
      "Hand-painting and block-printing",
      "Traditional motifs",
      "Eco-friendly process",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Temple Connection",
        story: "Kalamkari was traditionally used to create large narrative panels for temples, depicting scenes from Hindu mythology and religious texts."
      },
      {
        title: "The Persian Influence",
        story: "The art form was influenced by Persian court art, with many designs incorporating elements from Persian miniatures and textiles."
      }
    ],
    originImage: "/images/andrapradesh.jpg"
  },
  phulkari: {
    name: "Phulkari",
    description: "Floral Embroidery of Punjab",
    image: "/phulkari.jpg",
    origin: "Punjab",
    type: "Textile Art",
    shortDescription: "Vibrant hand-embroidered shawls and dupattas",
    culturalSignificance: "Phulkari, meaning 'flower work', is a traditional embroidery technique from Punjab. It is an essential part of Punjabi weddings and celebrations, symbolizing prosperity and joy. The craft is passed down through generations, with each piece reflecting the maker's creativity and cultural identity.",
    originStory: "Phulkari dates back to the 15th century and is mentioned in Punjabi folklore and literature. Traditionally, women embroidered phulkari for their own use or as gifts for special occasions. The craft flourished in rural Punjab, with each region developing its own distinctive style.",
    specialFeatures: [
      "Bright silk threads on cotton base",
      "Geometric and floral patterns",
      "Hand-embroidered",
      "Symbolic motifs",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Wedding Ritual",
        story: "Phulkari is an integral part of Punjabi bridal trousseau, with mothers and grandmothers creating elaborate pieces for their daughters."
      },
      {
        title: "The Village Gathering",
        story: "Women gather in groups to embroider phulkari, sharing stories and songs as they work."
      }
    ],
    originImage: "/images/punjab2.jpg"
  },
  chikankari: {
    name: "Chikankari",
    description: "Delicate Embroidery of Lucknow",
    image: "/lucknowChikankari.jpg",
    origin: "Lucknow, Uttar Pradesh",
    type: "Embroidery",
    shortDescription: "Fine hand embroidery on lightweight fabrics",
    culturalSignificance: "Chikankari is a traditional embroidery style from Lucknow, known for its intricate and delicate patterns. It is a symbol of the city's refined culture and is used to embellish sarees, kurtas, and dupattas. The craft provides employment to thousands of artisans, especially women.",
    originStory: "Chikankari is believed to have been introduced by Nur Jahan, the wife of Mughal emperor Jahangir, in the 17th century. The craft flourished under Mughal patronage and became synonymous with Lucknow's cultural identity.",
    specialFeatures: [
      "Over 30 unique stitches",
      "Lightweight and breathable fabrics",
      "Floral and paisley motifs",
      "Hand-embroidered",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Nawabi Era",
        story: "Chikankari was highly prized by the Nawabs of Awadh, who encouraged its development and innovation."
      },
      {
        title: "Empowering Women",
        story: "Chikankari has empowered generations of women in Lucknow, providing them with a source of income and independence."
      }
    ],
    originImage: "/images/lucknow.jpg"
  },
  suratzari: {
    name: "Surat Zari Fabric",
    description: "Traditional Metallic Thread Weaving of Surat",
    image: "/suratZari.jpg",
    origin: "Surat, Gujarat",
    type: "Textile / Embellishment",
    shortDescription: "Intricate zari threads woven into luxurious fabrics",
    culturalSignificance: "Surat is one of India's oldest and largest centers for Zari work. Zari threads—gold or silver-plated—are woven into silk or other fabric bases to create elegant clothing used in weddings, religious ceremonies, and royal attire. It reflects a blend of Mughal and Indian craftsmanship.",
    originStory: "Surat Zari has a history going back over 300 years, flourishing under Mughal rule. The technique was passed down through artisan families, and Surat became the hub for high-quality zari exports.",
    specialFeatures: [
      "Gold and silver plated threads",
      "Handwoven into silk and cotton fabrics",
      "Used in sarees, lehengas, and turbans",
      "High sheen and durability",
      "Recognized under GI tags"
    ],
    culturalStories: [
      {
        title: "Royal Patronage",
        story: "Mughal emperors and Indian royalty favored Surat Zari fabrics for ceremonial attire and gifting."
      },
      {
        title: "The Weaver Families",
        story: "Artisan families in Surat have preserved the Zari weaving tradition for generations, innovating while retaining traditional values."
      }
    ],
    originImage: "/images/surat.jpg"
  },
  firozabadbangles: {
    name: "Firozabad Bangles",
    description: "Handcrafted Glass Bangles from Uttar Pradesh",
    image: "/firozabadGlass.jpg",
    origin: "Firozabad, Uttar Pradesh",
    type: "Glass Craft",
    shortDescription: "Colorful glass bangles crafted with traditional techniques",
    culturalSignificance: "Firozabad is known as the 'City of Bangles'. These handcrafted glass bangles are deeply embedded in Indian culture, worn by women for beauty, tradition, and religious significance. The craft supports thousands of local artisans.",
    originStory: "The glass industry in Firozabad dates back to the Mughal period. Over time, it specialized in bangle making, becoming a national hub for intricate glasswork and colorful designs.",
    specialFeatures: [
      "Vibrant colored glass",
      "Hand-shaped and polished",
      "Symbol of marital status in Indian culture",
      "Affordable and artistic",
      "GI-tagged product"
    ],
    culturalStories: [
      {
        title: "Festival Colors",
        story: "During festivals like Karva Chauth and Teej, women adorn themselves with bright Firozabad bangles as a mark of tradition and joy."
      },
      {
        title: "Family Tradition",
        story: "Many families in Firozabad have been making bangles for over a century, passing on the skill from parent to child."
      }
    ],
    originImage: "/images/firozabad.jpg"
  },
  mirzapurdari: {
    name: "Mirzapur Dari",
    description: "Traditional Handwoven Carpets of Uttar Pradesh",
    image: "/mirzapurHandmadeDari.jpg",
    origin: "Mirzapur, Uttar Pradesh",
    type: "Carpet",
    shortDescription: "Handwoven carpets with intricate designs and vibrant colors.",
    culturalSignificance: "Mirzapur Dari is a traditional handwoven carpet from Uttar Pradesh, known for its intricate designs and vibrant colors. It is a symbol of the region's rich cultural heritage and is often used for home decoration.",
    originStory: "The tradition of weaving Mirzapur Dari dates back centuries, with artisans creating these carpets for royal families and wealthy merchants. The craft has been preserved by traditional weavers.",
    specialFeatures: [
      "Handwoven",
      "Intricate designs",
      "Vibrant colors",
      "Used for home decoration",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Royal Patronage",
        story: "Mirzapur Dari was highly prized by the royal families of Uttar Pradesh, who used it to decorate their palaces."
      },
      {
        title: "The Weaver's Legacy",
        story: "Weavers in Mirzapur have passed down their skills for generations, preserving the art of carpet making."
      }
    ],
    originImage: "/images/mirzapur.jpg"
  },
  makranamarbles: {
    name: "Makrana Marbles",
    description: "Luxurious Marble from Rajasthan",
    image: "/makranaMarble.jpg",
    origin: " Rajasthan",
    type: "Stone",
    shortDescription: "High-quality marble used in architectural marvels.",
    culturalSignificance: "Makrana Marbles are known for their high quality and have been used in iconic structures like the Taj Mahal. They symbolize luxury and architectural excellence.",
    originStory: "The marble from Makrana has been used in construction for centuries, with its pure white color and fine texture making it a favorite among architects and sculptors.",
    specialFeatures: [
      "Pure white color",
      "Fine texture",
      "Durable and lustrous",
      "Used in iconic structures",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Taj Mahal",
        story: "Makrana Marbles were used in the construction of the Taj Mahal, showcasing their timeless beauty and durability."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Makrana take great pride in their craft, with each piece reflecting their skill and creativity."
      }
    ],
    originImage: "/images/rajasthan2.jpg"
  },
  kashmirwalnutwoodcarving: {
    name: "Kashmir Walnut Wood Carving",
    description: "Intricate Wood Carving from Kashmir",
    image: "/kashmirWalnutWoodCarving.jpg",
    origin: "Kashmir, India",
    type: "Craft",
    shortDescription: "Hand-carved wooden artifacts with intricate designs.",
    culturalSignificance: "Kashmir Walnut Wood Carving is a traditional craft known for its intricate designs and fine craftsmanship. It is a symbol of the region's rich cultural heritage and is often used for decorative items.",
    originStory: "The tradition of wood carving in Kashmir dates back centuries, with artisans creating these pieces for royal families and wealthy merchants. The craft has been preserved by traditional carvers.",
    specialFeatures: [
      "Hand-carved",
      "Intricate designs",
      "Fine craftsmanship",
      "Used for decorative items",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Royal Patronage",
        story: "Kashmir Walnut Wood Carving was highly prized by the royal families of Kashmir, who used it to decorate their palaces."
      },
      {
        title: "The Carver's Legacy",
        story: "Carvers in Kashmir have passed down their skills for generations, preserving the art of wood carving."
      }
    ],
    originImage: "/images/kashmir.jpg"
  },
  bluepottery: {
    name: "Blue Pottery",
    description: "Unique Craft of Jaipur",
    image: "/bluePottery.jpg",
    origin: "Jaipur, Rajasthan",
    type: "Pottery",
    shortDescription: "Vibrant blue-glazed pottery with Persian-inspired designs.",
    culturalSignificance: "Blue Pottery is a unique craft from Jaipur, known for its vibrant blue glaze and Persian-inspired designs. It is a symbol of the region's rich cultural heritage and is often used for decorative items and tableware.",
    originStory: "The art of Blue Pottery was introduced to Jaipur in the 19th century by Persian craftsmen. The craft flourished under royal patronage, with artisans developing unique techniques to create the distinctive blue glaze.",
    specialFeatures: [
      "Vibrant blue glaze",
      "Persian-inspired designs",
      "Handcrafted",
      "Used for decorative items",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Royal Patronage",
        story: "Blue Pottery was highly prized by the royal families of Jaipur, who used it to decorate their palaces and gardens."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Jaipur take great pride in their craft, with each piece reflecting their skill and creativity."
      }
    ],
    originImage: "/images/jaipur.jpg"
  },
  kutchembroidery: {
    name: "Kutch Embroidery",
    description: "Vibrant Embroidery of Gujarat",
    image: "/kutchEmbroidery.jpg",
    origin: "Kutch, Gujarat",
    type: "Fabric",
    shortDescription: "Colorful hand embroidery with intricate patterns.",
    culturalSignificance: "Kutch Embroidery is a traditional art form from Gujarat, known for its vibrant colors and intricate patterns. It is a symbol of the region's rich cultural heritage and is often used to embellish clothing and home textiles.",
    originStory: "The tradition of Kutch Embroidery dates back centuries, with women creating these embroidered pieces for their own use or as gifts for special occasions. The craft has been preserved by traditional artisans.",
    specialFeatures: [
      "Hand embroidery",
      "Vibrant colors",
      "Intricate patterns",
      "Used for clothing and home textiles",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Wedding Attire",
        story: "Kutch Embroidery is often used to embellish bridal attire, symbolizing prosperity and joy."
      },
      {
        title: "The Village Gathering",
        story: "Women gather in groups to embroider, sharing stories and songs as they work."
      }
    ],
    originImage: "/images/kutch.jpg"
  },
  chambarumal: {
    name: "Chamba Rumal",
    description: "Traditional Embroidery of Himachal Pradesh",
    image: "/chambaRumal.jpg",
    origin: "Chamba, Himachal Pradesh",
    type: "Fabric",
    shortDescription: "Hand-embroidered handkerchiefs with intricate designs.",
    culturalSignificance: "Chamba Rumal is a traditional embroidery style from Himachal Pradesh, known for its intricate designs and fine craftsmanship. These embroidered handkerchiefs are often used as gifts and are a symbol of cultural pride.",
    originStory: "The tradition of Chamba Rumal dates back to the 17th century, with women creating these embroidered pieces for their own use or as gifts for special occasions. The craft has been preserved by traditional artisans.",
    specialFeatures: [
      "Hand embroidery",
      "Intricate designs",
      "Fine craftsmanship",
      "Used as gifts",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Wedding Gift",
        story: "Chamba Rumal is often gifted during weddings, symbolizing good fortune and tradition."
      },
      {
        title: "The Artisan's Legacy",
        story: "Artisans in Chamba have passed down their skills for generations, preserving the art of embroidery."
      }
    ],
    originImage: "/images/chamba.jpg"
  },
  warli: {
    name: "Warli Art",
    description: "Tribal Wall Painting Tradition",
    image: "/warliPaintings.jpg",
    origin: "Maharashtra",
    type: "Folk Art",
    shortDescription: "Traditional tribal paintings with geometric patterns",
    culturalSignificance: "Warli art is a unique form of tribal art that originated in the Warli tribe of Maharashtra. These paintings, characterized by their simple geometric patterns and monochromatic style, depict scenes from daily life, festivals, and rituals. The art form is deeply connected to the tribe's animistic beliefs and their relationship with nature.",
    originStory: "Warli art dates back to 2500 BCE, making it one of the oldest art forms in India. Traditionally, these paintings were done on the walls of mud houses using rice paste and natural colors. The art form gained recognition in the 1970s when it was adapted to paper and canvas, making it accessible to a wider audience. Today, it is practiced by Warli artists in Maharashtra and has gained international recognition.",
    specialFeatures: [
      "Geometric patterns",
      "Natural colors",
      "Simple stick figures",
      "Ritualistic themes",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Wedding Ritual",
        story: "Warli paintings are an essential part of wedding ceremonies, with the 'Lagnacha Chauk' (wedding square) being a central element in the ritual."
      },
      {
        title: "The Nature Connection",
        story: "Warli art often depicts the tribe's close relationship with nature, showing scenes of farming, hunting, and community celebrations."
      }
    ],
    originImage: "/images/maharastra.jpg"
  },
  
  mysoresilk: {
    name: "Mysore Silk",
    description: "Luxury Silk of Karnataka",
    image: "/mysoreSilk.jpg",
    origin: "Mysore, Karnataka",
    type: "Fabric",
    shortDescription: "Rich silk sarees with vibrant colors and gold zari.",
    culturalSignificance: "Mysore Silk is a symbol of luxury and tradition in Karnataka. These sarees are known for their rich texture and vibrant colors, often worn at weddings and special occasions.",
    originStory: "The tradition of silk weaving in Mysore dates back to the time of the Wodeyar dynasty. The craft flourished under royal patronage, with weavers developing unique techniques to create the distinctive fabric.",
    specialFeatures: [
      "Pure mulberry silk",
      "Real gold and silver zari",
      "Contrasting borders and pallu",
      "Durable and lustrous",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Royal Patronage",
        story: "The Wodeyar kings of Mysore were great patrons of silk weaving, using these sarees for royal ceremonies and diplomatic gifts."
      },
      {
        title: "The Weaver's Legacy",
        story: "Weaving families in Mysore have passed down their skills for generations, preserving unique patterns and techniques."
      }
    ],
    originImage: "/images/mysore2.jpg"
  },
  salemfabric: {
    name: "Salem Fabric",
    description: "Traditional Weaving of Tamil Nadu",
    image: "/salemFabric.jpg",
    origin: "Salem, Tamil Nadu",
    type: "Fabric",
    shortDescription: "Handwoven cotton fabric with traditional designs.",
    culturalSignificance: "Salem Fabric is a traditional handwoven cotton fabric from Tamil Nadu, known for its durability and unique designs. It is a symbol of the region's rich textile heritage and is often used for everyday wear and special occasions.",
    originStory: "The tradition of weaving in Salem dates back centuries, with local weavers developing unique techniques to create distinctive patterns. The craft has been preserved by traditional weaving families.",
    specialFeatures: [
      "Handwoven cotton",
      "Traditional designs",
      "Durable and breathable",
      "Natural dyes",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Weaving Community",
        story: "Salem's weaving community has preserved their craft for generations, with each family known for unique patterns."
      },
      {
        title: "The Festival Attire",
        story: "Salem Fabric is often worn during local festivals, symbolizing cultural pride and tradition."
      }
    ],
    originImage: "/images/salem.jpg"
  },
  
  shrikalasthikalamkari: {
    name: "Shrikalasthi Kalamkari",
    description: "Hand-Painted Textile Art",
    image: "/shrikalasthiKalamkari.jpg",
    origin: "Andhra Pradesh, India",
    type: "Art Form",
    shortDescription: "Traditional hand-painted and block-printed textiles.",
    culturalSignificance: "Shrikalasthi Kalamkari is a traditional art form that combines hand-painting and block-printing techniques to create intricate designs on fabric. The art form is deeply connected to temple traditions and Persian influences, creating a unique blend of cultural elements.",
    originStory: "The art of Kalamkari dates back to ancient times, with evidence of similar techniques found in archaeological sites. The craft flourished under the patronage of various dynasties, including the Golconda Sultanate and the Vijayanagara Empire.",
    specialFeatures: [
      "Natural dyes and colors",
      "Hand-painting and block-printing",
      "Traditional motifs",
      "Eco-friendly process",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Temple Connection",
        story: "Kalamkari was traditionally used to create large narrative panels for temples, depicting scenes from Hindu mythology and religious texts."
      },
      {
        title: "The Persian Influence",
        story: "The art form was influenced by Persian court art, with many designs incorporating elements from Persian miniatures and textiles."
      }
    ],
    originImage: "/places/andhrapradesh.jpg"
  },
  mugasilk: {
    name: "Muga Silk",
    description: "Golden Silk of Assam",
    image: "/mugaSilk.jpg",
    origin: "Muga, Assam",
    type: "Fabric",
    shortDescription: "Luxurious silk with a natural golden hue.",
    culturalSignificance: "Muga Silk is a symbol of Assam's rich cultural heritage. The natural golden color of Muga silk and the warm texture of Eri silk make these fabrics unique. They are an integral part of Assamese culture, worn during important ceremonies and festivals.",
    originStory: "The tradition of silk weaving in Assam dates back to ancient times, with references found in Assamese literature. The craft was traditionally practiced by the Mishing and Bodo communities. The unique golden color of Muga silk comes from the Antheraea assamensis silkworm, which is found only in Assam.",
    specialFeatures: [
      "Natural golden color (Muga)",
      "Traditional handloom weaving",
      "Durable and lustrous",
      "Eco-friendly production",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Royal Connection",
        story: "Assam silk was highly prized by the Ahom kings, who used it for royal garments and diplomatic gifts."
      },
      {
        title: "The Bihu Celebration",
        story: "Assam silk sarees are traditionally worn during Bihu celebrations, symbolizing prosperity and cultural pride."
      }
    ],
    originImage: "/images/assam.jpg"
  },
  kathputli: {
    name: "Kathputli",
    description: "Traditional Puppetry of Rajasthan",
    image: "/kathputli.jpg",
    origin: "Rajasthan, India",
    type: "Art Form",
    shortDescription: "Handcrafted wooden puppets used in traditional performances.",
    culturalSignificance: "Kathputli is a traditional form of puppetry from Rajasthan, known for its vibrant colors and intricate designs. These puppets are used in storytelling and performances, often depicting scenes from mythology and folklore.",
    originStory: "The tradition of Kathputli dates back centuries, with puppeteers traveling from village to village to entertain audiences. The craft has been preserved by traditional puppeteers, who continue to perform and teach the art form.",
    specialFeatures: [
      "Handcrafted wooden puppets",
      "Vibrant colors",
      "Traditional designs",
      "Used in storytelling",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Village Entertainment",
        story: "Kathputli performances are a popular form of entertainment in rural Rajasthan, bringing stories to life for audiences of all ages."
      },
      {
        title: "The Puppeteer's Legacy",
        story: "Puppeteers in Rajasthan have passed down their skills for generations, preserving the art of Kathputli."
      }
    ],
    originImage: "/images/rajasthan.jpg"
  },
  pipliartwork: {
    name: "Pipli Artwork",
    description: "Traditional Appliqué Craft of Odisha",
    image: "/pipliArtwork.jpg",
    origin: "Pipli, Odisha",
    type: "Craft",
    shortDescription: "Colorful appliqué work used for decorative items and umbrellas.",
    culturalSignificance: "Pipli Artwork is a traditional appliqué craft from Odisha, known for its vibrant colors and intricate designs. It is a symbol of the region's rich cultural heritage and is often used for decorative items and umbrellas.",
    originStory: "The tradition of Pipli Artwork dates back centuries, with artisans creating these appliqué pieces for religious festivals and ceremonies. The craft has been preserved by traditional artisans.",
    specialFeatures: [
      "Hand appliqué",
      "Vibrant colors",
      "Intricate designs",
      "Used for decorative items",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Festival Decorations",
        story: "Pipli Artwork is often used to decorate temples and homes during festivals, symbolizing joy and celebration."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Pipli take great pride in their craft, with each piece reflecting their skill and creativity."
      }
    ],
    originImage: "/images/odisha.jpg"
  },
  thanjavurdolls: {
    name: "Thanjavur Dolls",
    description: "Traditional Dolls of Tamil Nadu",
    image: "/images/thanjavurDoll.jpg",
    origin: "Thanjavur, Tamil Nadu",
    type: "Craft",
    shortDescription: "Handcrafted dolls with intricate designs and vibrant colors.",
    culturalSignificance: "Thanjavur Dolls are traditional handcrafted dolls from Tamil Nadu, known for their intricate designs and vibrant colors. They are a symbol of the region's rich cultural heritage and are often used for decorative purposes.",
    originStory: "The tradition of Thanjavur Dolls dates back to the 19th century, with artisans creating these dolls for royal families and temples. The craft has been preserved by traditional artisans.",
    specialFeatures: [
      "Handcrafted",
      "Intricate designs",
      "Vibrant colors",
      "Used for decorative purposes",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Royal Collection",
        story: "Thanjavur Dolls were highly prized by the royal families of Thanjavur, who collected them as symbols of prosperity."
      },
      {
        title: "The Artisan's Legacy",
        story: "Artisans in Thanjavur have passed down their skills for generations, preserving the art of doll making."
      }
    ],
    originImage: "/images/thanjavur.jpg"
  },
  banarasisilk: {
    name: "Banarasi Silk Saree",
    description: "Luxurious Silk Saree of Varanasi",
    image: "/banarasiSilkSaree.jpg",
    origin: "Varanasi, Uttar Pradesh",
    type: "Fabric",
    shortDescription: "Luxurious silk sarees with intricate gold and silver zari work.",
    culturalSignificance: "Banarasi Silk Sarees are a symbol of Varanasi's rich cultural heritage and are often worn during weddings and special occasions. They are treasured as family heirlooms and represent the pinnacle of Indian textile craftsmanship.",
    originStory: "The tradition of weaving Banarasi Silk Sarees dates back to the Mughal era, when Persian motifs and weaving techniques were introduced to Varanasi. Over centuries, local artisans refined the craft, creating the iconic sarees known for their opulence and intricate designs. The sarees were originally crafted for royalty and nobility, and today, they are recognized as a Geographical Indication (GI) product, protecting their unique heritage.",
    specialFeatures: [
      "Pure silk",
      "Intricate gold and silver zari work",
      "Persian-inspired motifs",
      "Handloom weaving",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "Wedding Heirloom",
        story: "Banarasi sarees are treasured as family heirlooms and are an essential part of North Indian bridal trousseau."
      },
      {
        title: "The Weaver's Pride",
        story: "Weavers in Varanasi take immense pride in their craft, with skills passed down through generations."
      }
    ],
    originImage: "/images/banaras.jpg"
  },
  birdiware: {
    name: "Birdiware",
    description: "Traditional Pottery of Uttar Pradesh",
    image: "/products/birdiwar.jpg",
    origin: "Birdiwar, Uttar Pradesh",
    type: "Pottery",
    shortDescription: "Handcrafted pottery with unique designs and vibrant colors.",
    culturalSignificance: "Birdiwar pottery is a traditional craft from Uttar Pradesh, known for its unique designs and vibrant colors. It is a symbol of the region's rich cultural heritage and is often used for decorative items and household utensils.",
    originStory: "The tradition of Birdiwar pottery dates back centuries, with artisans creating these pieces for local communities and markets. The craft has been preserved by traditional potters.",
    specialFeatures: [
      "Handcrafted",
      "Unique designs",
      "Vibrant colors",
      "Used for decorative items",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Village Market",
        story: "Birdiwar pottery is often sold in local markets, where it is highly valued for its beauty and utility."
      },
      {
        title: "The Potter's Legacy",
        story: "Potters in Birdiwar have passed down their skills for generations, preserving the art of pottery making."
      }
    ],
    originImage: "/places/birdiwar.jpg"
  },
  kondapallitoys: {
    name: "Kondapalli Toys",
    description: "Wooden Toys of Andhra Pradesh",
    image: "/kondapalliToys.jpg",
    origin: "Kondapalli, Andhra Pradesh",
    type: "Craft",
    shortDescription: "Handcrafted wooden toys with vibrant colors and intricate designs.",
    culturalSignificance: "Kondapalli Toys are a traditional craft from Andhra Pradesh, known for their vibrant colors and intricate designs. These toys are a symbol of the region's rich cultural heritage and are often gifted during festivals and special occasions.",
    originStory: "The tradition of making Kondapalli Toys dates back to the 16th century, with artisans using locally sourced wood and natural dyes. The craft has been preserved by traditional toy makers.",
    specialFeatures: [
      "Handcrafted wooden toys",
      "Natural dyes",
      "Child-safe materials",
      "Vibrant colors",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Festival Gift",
        story: "Kondapalli Toys are often gifted to children during festivals, symbolizing joy and tradition."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Kondapalli take great pride in their craft, with each toy reflecting their skill and creativity."
      }
    ],
    originImage: "/images/andrapradesh.jpg"
  },
  nirmalpaintings: {
    name: "Nirmal Paintings",
    description: "Traditional Art of Telangana",
    image: "/nirmalPaintings.jpg",
    origin: "Telangana",
    type: "Art Form",
    shortDescription: "Hand-painted wooden artifacts with intricate designs and vibrant colors.",
    culturalSignificance: "Nirmal Paintings are a traditional art form from Telangana, known for their intricate designs and vibrant colors. These paintings are a symbol of the region's rich cultural heritage and are often used for decorative items.",
    originStory: "The tradition of Nirmal Paintings dates back centuries, with artisans creating these pieces for royal families and wealthy merchants. The craft has been preserved by traditional painters.",
    specialFeatures: [
      "Hand-painted",
      "Intricate designs",
      "Vibrant colors",
      "Used for decorative items",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Royal Patronage",
        story: "Nirmal Paintings were highly prized by the royal families of Telangana, who used them to decorate their palaces."
      },
      {
        title: "The Painter's Legacy",
        story: "Painters in Nirmal have passed down their skills for generations, preserving the art of painting."
      }
    ],
    originImage: "/images/telangana.jpg"
  },
  navararice: {
    name: "Navara Rice",
    description: "Traditional Medicinal Rice of Kerala",
    image: "/navaraRice.jpg",
    origin: "Kerala, India",
    type: "Rice",
    shortDescription: "Ancient medicinal rice variety with unique health benefits.",
    culturalSignificance: "Navara Rice is a traditional medicinal rice variety from Kerala, known for its unique health benefits. It is a symbol of the region's rich agricultural heritage and is often used in Ayurvedic treatments.",
    originStory: "The tradition of cultivating Navara Rice dates back centuries, with farmers preserving this unique variety for its medicinal properties. The rice is often used in traditional Ayurvedic practices.",
    specialFeatures: [
      "Medicinal properties",
      "Rich in nutrients",
      "Used in Ayurvedic treatments",
      "Traditional cultivation",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Ayurvedic Connection",
        story: "Navara Rice is highly valued in Ayurveda for its healing properties and is often used in treatments for various ailments."
      },
      {
        title: "The Farmer's Legacy",
        story: "Farmers in Kerala have preserved the cultivation of Navara Rice for generations, ensuring its continued availability."
      }
    ],
    originImage: "/images/kerela.jpg"
  },
  malabarpepper: {
    name: "Malabar Pepper",
    description: "Premium Black Pepper from Kerala",
    image: "/malabarPepper.jpg",
    origin: "Malabar, Kerala",
    type: "Spice",
    shortDescription: "High-quality black pepper with a rich, aromatic flavor.",
    culturalSignificance: "Malabar Pepper is a premium black pepper variety from Kerala, known for its rich, aromatic flavor. It is a symbol of the region's rich spice heritage and is highly valued in global cuisine.",
    originStory: "The tradition of cultivating Malabar Pepper dates back centuries, with farmers in the Malabar region developing unique techniques to produce this high-quality spice. The pepper has been a key export commodity for centuries.",
    specialFeatures: [
      "Rich, aromatic flavor",
      "High quality",
      "Used in global cuisine",
      "Traditional cultivation",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Spice Trade",
        story: "Malabar Pepper was a key commodity in the historic spice trade, attracting traders from around the world."
      },
      {
        title: "The Farmer's Pride",
        story: "Farmers in Malabar take great pride in their pepper cultivation, with each harvest reflecting their skill and dedication."
      }
    ],
    originImage: "/images/kerela2.jpg"
  },
  monsoonedmalabarcoffee: {
    name: "Monsooned Malabar Coffee",
    description: "Unique Coffee from Kerala",
    image: "/monsoonedMalabarCoffee.jpg",
    origin: "Malabar, Kerala",
    type: "Coffee",
    shortDescription: "Coffee beans exposed to monsoon winds for a unique flavor profile.",
    culturalSignificance: "Monsooned Malabar Coffee is a unique coffee variety from Kerala, known for its distinctive flavor profile. It is a symbol of the region's rich coffee heritage and is highly valued by coffee enthusiasts.",
    originStory: "The tradition of monsooning coffee beans dates back to the colonial era, when coffee beans were exposed to monsoon winds during shipping. This process gives the beans a unique flavor and aroma.",
    specialFeatures: [
      "Unique flavor profile",
      "Exposed to monsoon winds",
      "High quality",
      "Used in specialty coffee",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Colonial Connection",
        story: "Monsooned Malabar Coffee was developed during the colonial era, with the unique process of exposing beans to monsoon winds during shipping."
      },
      {
        title: "The Coffee Enthusiast's Choice",
        story: "Coffee enthusiasts around the world highly value Monsooned Malabar Coffee for its unique flavor and aroma."
      }
    ],
    originImage: "/images/kerela2.jpg"
  },
  lakshyamanbhogmango: {
    name: "Lakshyamanbhog Mango",
    description: "Sweet Mango Variety from West Bengal",
    image: "/lakshmanbhogMango.jpg",
    origin: "West Bengal, India",
    type: "Fruit",
    shortDescription: "Sweet and juicy mango variety known for its rich flavor.",
    culturalSignificance: "Lakshyamanbhog Mango is a popular variety from West Bengal, known for its sweet and juicy taste. It is a symbol of the region's rich agricultural heritage and is often enjoyed during the summer season.",
    originStory: "The tradition of cultivating Lakshyamanbhog Mango dates back centuries, with farmers in West Bengal developing unique techniques to produce this high-quality fruit. The mango is highly valued for its taste and aroma.",
    specialFeatures: [
      "Sweet and juicy",
      "Rich flavor",
      "High quality",
      "Used in desserts",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Summer Delight",
        story: "Lakshyamanbhog Mango is a favorite during the summer season, with families enjoying its sweet taste in various desserts."
      },
      {
        title: "The Farmer's Pride",
        story: "Farmers in West Bengal take great pride in their mango cultivation, with each harvest reflecting their skill and dedication."
      }
    ],
    originImage: "/images/wb.jpg"
  },
  nagamircha: {
    name: "Naga Mircha",
    description: "Hot Chili Pepper from Nagaland",
    image: "/nagaMircha.jpg",
    origin: "Nagaland, India",
    type: "Spice",
    shortDescription: "One of the hottest chili peppers in the world, known for its intense heat.",
    culturalSignificance: "Naga Mircha is a highly valued chili pepper from Nagaland, known for its intense heat. It is a symbol of the region's rich spice heritage and is often used in traditional dishes.",
    originStory: "The tradition of cultivating Naga Mircha dates back centuries, with farmers in Nagaland developing unique techniques to produce this high-quality spice. The chili is highly valued for its heat and flavor.",
    specialFeatures: [
      "Intense heat",
      "Rich flavor",
      "High quality",
      "Used in traditional dishes",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Spice of Life",
        story: "Naga Mircha is a key ingredient in many traditional dishes, adding a unique heat and flavor."
      },
      {
        title: "The Farmer's Legacy",
        story: "Farmers in Nagaland have preserved the cultivation of Naga Mircha for generations, ensuring its continued availability."
      }
    ],
    originImage: "/images/nagaland.jpg"
  },
  kalampurredbananas: {
    name: "Kalampur Red Bananas",
    description: "Unique Red Banana Variety from Kerala",
    image: "/kalampurRedBanana.jpg",
    origin: "Kerala, India",
    type: "Fruit",
    shortDescription: "Sweet and nutritious red banana variety known for its unique color and taste.",
    culturalSignificance: "Kalampur Red Bananas are a unique variety from Kerala, known for their sweet and nutritious properties. They are a symbol of the region's rich agricultural heritage and are often enjoyed as a healthy snack.",
    originStory: "The tradition of cultivating Kalampur Red Bananas dates back centuries, with farmers in Kerala developing unique techniques to produce this high-quality fruit. The bananas are highly valued for their taste and nutritional benefits.",
    specialFeatures: [
      "Sweet and nutritious",
      "Unique color",
      "High quality",
      "Used in desserts",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Healthy Snack",
        story: "Kalampur Red Bananas are a popular healthy snack, enjoyed for their sweet taste and nutritional benefits."
      },
      {
        title: "The Farmer's Pride",
        story: "Farmers in Kerala take great pride in their banana cultivation, with each harvest reflecting their skill and dedication."
      }
    ],
    originImage: "/images/kerela.jpg"
  },
  nashikgrapes: {
    name: "Nashik Grapes",
    description: "Premium Grape Variety from Maharashtra",
    image: "/nashikGrapes.jpg",
    origin: "Nashik, Maharashtra",
    type: "Fruit",
    shortDescription: "Sweet and juicy grape variety known for its rich flavor.",
    culturalSignificance: "Nashik Grapes are a popular variety from Maharashtra, known for their sweet and juicy taste. They are a symbol of the region's rich agricultural heritage and are often enjoyed during the grape season.",
    originStory: "The tradition of cultivating Nashik Grapes dates back centuries, with farmers in Nashik developing unique techniques to produce this high-quality fruit. The grapes are highly valued for their taste and aroma.",
    specialFeatures: [
      "Sweet and juicy",
      "Rich flavor",
      "High quality",
      "Used in wines",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Wine Connection",
        story: "Nashik Grapes are a key ingredient in many wines, adding a unique flavor and aroma."
      },
      {
        title: "The Farmer's Pride",
        story: "Farmers in Nashik take great pride in their grape cultivation, with each harvest reflecting their skill and dedication."
      }
    ],
    originImage: "/images/nashik.jpg"
  },
  girkesarmango: {
    name: "Gir Kesar Mango",
    description: "Sweet Mango Variety from Gujarat",
    image: "/girKesarMango.jpg",
    origin: "Gir, Gujarat",
    type: "Fruit",
    shortDescription: "Sweet and juicy mango variety known for its rich flavor.",
    culturalSignificance: "Gir Kesar Mango is a popular variety from Gujarat, known for its sweet and juicy taste. It is a symbol of the region's rich agricultural heritage and is often enjoyed during the summer season.",
    originStory: "The tradition of cultivating Gir Kesar Mango dates back centuries, with farmers in Gir developing unique techniques to produce this high-quality fruit. The mango is highly valued for its taste and aroma.",
    specialFeatures: [
      "Sweet and juicy",
      "Rich flavor",
      "High quality",
      "Used in desserts",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Summer Delight",
        story: "Gir Kesar Mango is a favorite during the summer season, with families enjoying its sweet taste in various desserts."
      },
      {
        title: "The Farmer's Pride",
        story: "Farmers in Gir take great pride in their mango cultivation, with each harvest reflecting their skill and dedication."
      }
    ],
    originImage: "/images/gir.jpg"
  },
  nagpuroranges: {
    name: "Nagpur Oranges",
    description: "Sweet Orange Variety from Maharashtra",
    image: "/nagpurOrange.jpg",
    origin: "Nagpur, Maharashtra",
    type: "Fruit",
    shortDescription: "Sweet and juicy orange variety known for its rich flavor.",
    culturalSignificance: "Nagpur Oranges are a popular variety from Maharashtra, known for their sweet and juicy taste. They are a symbol of the region's rich agricultural heritage and are often enjoyed during the orange season.",
    originStory: "The tradition of cultivating Nagpur Oranges dates back centuries, with farmers in Nagpur developing unique techniques to produce this high-quality fruit. The oranges are highly valued for their taste and aroma.",
    specialFeatures: [
      "Sweet and juicy",
      "Rich flavor",
      "High quality",
      "Used in juices",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Juice Connection",
        story: "Nagpur Oranges are a key ingredient in many juices, adding a unique flavor and aroma."
      },
      {
        title: "The Farmer's Pride",
        story: "Farmers in Nagpur take great pride in their orange cultivation, with each harvest reflecting their skill and dedication."
      }
    ],
    originImage: "/images/nagpur.jpg"
  },
  tezpurlitchi: {
    name: "Tezpur Litchi",
    description: "Sweet Litchi Variety from Assam",
    image: "/tezpurLitchi.jpg",
    origin: "Tezpur, Assam",
    type: "Fruit",
    shortDescription: "Sweet and juicy litchi variety known for its rich flavor.",
    culturalSignificance: "Tezpur Litchi is a popular variety from Assam, known for its sweet and juicy taste. It is a symbol of the region's rich agricultural heritage and is often enjoyed during the litchi season.",
    originStory: "The tradition of cultivating Tezpur Litchi dates back centuries, with farmers in Tezpur developing unique techniques to produce this high-quality fruit. The litchi is highly valued for its taste and aroma.",
    specialFeatures: [
      "Sweet and juicy",
      "Rich flavor",
      "High quality",
      "Used in desserts",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Summer Delight",
        story: "Tezpur Litchi is a favorite during the summer season, with families enjoying its sweet taste in various desserts."
      },
      {
        title: "The Farmer's Pride",
        story: "Farmers in Tezpur take great pride in their litchi cultivation, with each harvest reflecting their skill and dedication."
      }
    ],
    originImage: "/images/assam.jpg"
  },
  basmatirice: {
    name: "Basmati Rice",
    description: "Premium Aromatic Rice from India",
    image: "/basmatiRice.jpg",
    origin: "India",
    type: "Rice",
    shortDescription: "Long-grain aromatic rice known for its unique flavor and fragrance.",
    culturalSignificance: "Basmati Rice is a symbol of India's rich agricultural heritage, often used in traditional dishes and celebrations.",
    originStory: "The tradition of cultivating Basmati Rice dates back centuries, with farmers developing unique techniques to produce this high-quality rice. The rice is highly valued for its taste and aroma.",
    specialFeatures: [
      "Aromatic",
      "Long grain",
      "High quality",
      "Used in traditional dishes",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Festive Delight",
        story: "Basmati Rice is a favorite during festivals, with families enjoying its unique flavor in various dishes."
      },
      {
        title: "The Farmer's Pride",
        story: "Farmers take great pride in their Basmati Rice cultivation, with each harvest reflecting their skill and dedication."
      }
    ],
    originImage: "/images/india.jpg"
  },
  alphonsomango: {
    name: "Alphonso Mango",
    description: "King of Mangoes from Maharashtra",
    image: "/alphonsoMango.jpg",
    origin: "Maharashtra, India",
    type: "Fruit",
    shortDescription: "Sweet and juicy mango variety known for its rich flavor.",
    culturalSignificance: "Alphonso Mango is a popular variety from Maharashtra, known for its sweet and juicy taste. It is a symbol of the region's rich agricultural heritage and is often enjoyed during the summer season.",
    originStory: "The tradition of cultivating Alphonso Mango dates back centuries, with farmers in Maharashtra developing unique techniques to produce this high-quality fruit. The mango is highly valued for its taste and aroma.",
    specialFeatures: [
      "Sweet and juicy",
      "Rich flavor",
      "High quality",
      "Used in desserts",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Summer Delight",
        story: "Alphonso Mango is a favorite during the summer season, with families enjoying its sweet taste in various desserts."
      },
      {
        title: "The Farmer's Pride",
        story: "Farmers in Maharashtra take great pride in their mango cultivation, with each harvest reflecting their skill and dedication."
      }
    ],
    originImage: "/images/maharastra.jpg"
  },
  jeerakasalarice: {
    name: "Jeerakasala Rice",
    description: "Traditional Rice Variety from Kerala",
    image: "/jeerakasalarice.jpg",
    origin: "Kerala, India",
    type: "Rice",
    shortDescription: "Aromatic rice variety known for its unique flavor and fragrance.",
    culturalSignificance: "Jeerakasala Rice is a symbol of Kerala's rich agricultural heritage, often used in traditional dishes and celebrations.",
    originStory: "The tradition of cultivating Jeerakasala Rice dates back centuries, with farmers in Kerala developing unique techniques to produce this high-quality rice. The rice is highly valued for its taste and aroma.",
    specialFeatures: [
      "Aromatic",
      "Unique flavor",
      "High quality",
      "Used in traditional dishes",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Festive Delight",
        story: "Jeerakasala Rice is a favorite during festivals, with families enjoying its unique flavor in various dishes."
      },
      {
        title: "The Farmer's Pride",
        story: "Farmers in Kerala take great pride in their Jeerakasala Rice cultivation, with each harvest reflecting their skill and dedication."
      }
    ],
    originImage: "/images/kerela2.jpg"
  },
  vazhakulampineapple: {
    name: "Vazhakulam Pineapple",
    description: "Sweet Pineapple Variety from Kerala",
    image: "/vazhakulamPineapple.jpg",
    origin: "Vazhakulam, Kerala",
    type: "Fruit",
    shortDescription: "Sweet and juicy pineapple variety known for its rich flavor.",
    culturalSignificance: "Vazhakulam Pineapple is a popular variety from Kerala, known for its sweet and juicy taste. It is a symbol of the region's rich agricultural heritage and is often enjoyed during the pineapple season.",
    originStory: "The tradition of cultivating Vazhakulam Pineapple dates back centuries, with farmers in Vazhakulam developing unique techniques to produce this high-quality fruit. The pineapple is highly valued for its taste and aroma.",
    specialFeatures: [
      "Sweet and juicy",
      "Rich flavor",
      "High quality",
      "Used in desserts",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Summer Delight",
        story: "Vazhakulam Pineapple is a favorite during the summer season, with families enjoying its sweet taste in various desserts."
      },
      {
        title: "The Farmer's Pride",
        story: "Farmers in Vazhakulam take great pride in their pineapple cultivation, with each harvest reflecting their skill and dedication."
      }
    ],
    originImage: "/images/kerela2.jpg"
  },
  coorggreencardamom: {
    name: "Coorg Green Cardamom",
    description: "Premium Spice from Karnataka",
    image: "/coorgGreenCardamom.jpg",
    origin: "Coorg, Karnataka",
    type: "Spice",
    shortDescription: "Aromatic green cardamom known for its unique flavor and fragrance.",
    culturalSignificance: "Coorg Green Cardamom is a symbol of Karnataka's rich spice heritage, often used in traditional dishes and beverages.",
    originStory: "The tradition of cultivating Coorg Green Cardamom dates back centuries, with farmers in Coorg developing unique techniques to produce this high-quality spice. The cardamom is highly valued for its taste and aroma.",
    specialFeatures: [
      "Aromatic",
      "Unique flavor",
      "High quality",
      "Used in traditional dishes",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Spice of Life",
        story: "Coorg Green Cardamom is a key ingredient in many traditional dishes, adding a unique flavor and aroma."
      },
      {
        title: "The Farmer's Pride",
        story: "Farmers in Coorg take great pride in their cardamom cultivation, with each harvest reflecting their skill and dedication."
      }
    ],
    originImage: "/images/coorg.jpg"
  },
  dharwadpedha: {
    name: "Dharwad Pedha",
    description: "Sweet Confection from Karnataka",
    image: "/dharwadPedha.jpg",
    origin: "Dharwad, Karnataka",
    type: "Sweet",
    shortDescription: "Sweet and creamy confection known for its rich flavor.",
    culturalSignificance: "Dharwad Pedha is a symbol of Karnataka's rich culinary heritage, often enjoyed during festivals and celebrations.",
    originStory: "The tradition of making Dharwad Pedha dates back centuries, with artisans developing unique techniques to produce this high-quality sweet. The pedha is highly valued for its taste and texture.",
    specialFeatures: [
      "Sweet and creamy",
      "Rich flavor",
      "High quality",
      "Used in desserts",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Festive Delight",
        story: "Dharwad Pedha is a favorite during festivals, with families enjoying its sweet taste in various desserts."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Dharwad take great pride in their pedha making, with each batch reflecting their skill and dedication."
      }
    ],
    originImage: "/images/karnataka.jpg"
  },
  tirupatiladdu: {
    name: "Tirupati Laddu",
    description: "Sacred Sweet from Andhra Pradesh",
    image: "/tirupathiLaddu.jpg",
    origin: "Tirupati, Andhra Pradesh",
    type: "Sweet",
    shortDescription: "Sweet and rich laddu known for its unique flavor.",
    culturalSignificance: "Tirupati Laddu is a symbol of Andhra Pradesh's rich culinary heritage, often offered as prasad in temples.",
    originStory: "The tradition of making Tirupati Laddu dates back centuries, with artisans developing unique techniques to produce this high-quality sweet. The laddu is highly valued for its taste and texture.",
    specialFeatures: [
      "Sweet and rich",
      "Unique flavor",
      "High quality",
      "Used in religious offerings",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Sacred Offering",
        story: "Tirupati Laddu is a key offering in many temples, symbolizing devotion and tradition."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Tirupati take great pride in their laddu making, with each batch reflecting their skill and dedication."
      }
    ],
    originImage: "/images/tirupati.jpg"
  },
  bikaneribhujia: {
    name: "Bikaneri Bhujia",
    description: "Crispy Snack from Rajasthan",
    image: "/bikaneriBhujia.jpg",
    origin: "Bikaner, Rajasthan",
    type: "Snack",
    shortDescription: "Crispy and spicy snack known for its unique flavor.",
    culturalSignificance: "Bikaneri Bhujia is a symbol of Rajasthan's rich culinary heritage, often enjoyed as a popular snack.",
    originStory: "The tradition of making Bikaneri Bhujia dates back centuries, with artisans developing unique techniques to produce this high-quality snack. The bhujia is highly valued for its taste and texture.",
    specialFeatures: [
      "Crispy and spicy",
      "Unique flavor",
      "High quality",
      "Used as a snack",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Popular Snack",
        story: "Bikaneri Bhujia is a favorite snack, enjoyed for its crispy texture and spicy flavor."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Bikaner take great pride in their bhujia making, with each batch reflecting their skill and dedication."
      }
    ],
    originImage: "/images/bikaner.jpg"
  },
  ratlamisev: {
    name: "Ratlami Sev",
    description: "Crispy Snack from Madhya Pradesh",
    image: "/ratlamiSev.jpg",
    origin: "Ratlam, Madhya Pradesh",
    type: "Snack",
    shortDescription: "Crispy and spicy snack known for its unique flavor.",
    culturalSignificance: "Ratlami Sev is a symbol of Madhya Pradesh's rich culinary heritage, often enjoyed as a popular snack.",
    originStory: "The tradition of making Ratlami Sev dates back centuries, with artisans developing unique techniques to produce this high-quality snack. The sev is highly valued for its taste and texture.",
    specialFeatures: [
      "Crispy and spicy",
      "Unique flavor",
      "High quality",
      "Used as a snack",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Popular Snack",
        story: "Ratlami Sev is a favorite snack, enjoyed for its crispy texture and spicy flavor."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Ratlam take great pride in their sev making, with each batch reflecting their skill and dedication."
      }
    ],
    originImage: "/images/ratlam.jpg"
  },
  agrapetha: {
    name: "Agra Petha",
    description: "Sweet Confection from Uttar Pradesh",
    image: "/agraPetha.jpg",
    origin: "Agra, Uttar Pradesh",
    type: "Sweet",
    shortDescription: "Sweet and translucent confection known for its unique flavor.",
    culturalSignificance: "Agra Petha is a symbol of Uttar Pradesh's rich culinary heritage, often enjoyed during festivals and celebrations.",
    originStory: "The tradition of making Agra Petha dates back centuries, with artisans developing unique techniques to produce this high-quality sweet. The petha is highly valued for its taste and texture.",
    specialFeatures: [
      "Sweet and translucent",
      "Unique flavor",
      "High quality",
      "Used in desserts",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Festive Delight",
        story: "Agra Petha is a favorite during festivals, with families enjoying its sweet taste in various desserts."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Agra take great pride in their petha making, with each batch reflecting their skill and dedication."
      }
    ],
    originImage: "/images/agra.jpg"
  },
  shrivilliputturpalkova: {
    name: "Shrivilliputtur Palkova",
    description: "Sweet Confection from Tamil Nadu",
    image: "/srivilliputturPalkova.jpg",
    origin: "Shrivilliputtur, Tamil Nadu",
    type: "Sweet",
    shortDescription: "Sweet and creamy confection known for its rich flavor.",
    culturalSignificance: "Shrivilliputtur Palkova is a symbol of Tamil Nadu's rich culinary heritage, often enjoyed during festivals and celebrations.",
    originStory: "The tradition of making Shrivilliputtur Palkova dates back centuries, with artisans developing unique techniques to produce this high-quality sweet. The palkova is highly valued for its taste and texture.",
    specialFeatures: [
      "Sweet and creamy",
      "Rich flavor",
      "High quality",
      "Used in desserts",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Festive Delight",
        story: "Shrivilliputtur Palkova is a favorite during festivals, with families enjoying its sweet taste in various desserts."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Shrivilliputtur take great pride in their palkova making, with each batch reflecting their skill and dedication."
      }
    ],
    originImage: "/images/tamil.jpg"
  },
  bhiwapurchilli: {
    name: "Bhiwapur Chilli",
    description: "Hot Chili Pepper from Maharashtra",
    image: "/bhiwapurChilli.jpg",
    origin: "Bhiwapur, Maharashtra",
    type: "Spice",
    shortDescription: "One of the hottest chili peppers in the world, known for its intense heat.",
    culturalSignificance: "Bhiwapur Chilli is a highly valued chili pepper from Maharashtra, known for its intense heat. It is a symbol of the region's rich spice heritage and is often used in traditional dishes.",
    originStory: "The tradition of cultivating Bhiwapur Chilli dates back centuries, with farmers in Bhiwapur developing unique techniques to produce this high-quality spice. The chili is highly valued for its heat and flavor.",
    specialFeatures: [
      "Intense heat",
      "Rich flavor",
      "High quality",
      "Used in traditional dishes",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Spice of Life",
        story: "Bhiwapur Chilli is a key ingredient in many traditional dishes, adding a unique heat and flavor."
      },
      {
        title: "The Farmer's Legacy",
        story: "Farmers in Bhiwapur have preserved the cultivation of Bhiwapur Chilli for generations, ensuring its continued availability."
      }
    ],
    originImage: "/images/maharastra.jpg"
  },
  kholachilli: {
    name: "Khola Chilli",
    description: "Hot Chili Pepper from Goa",
    image: "/kholaChilli.jpg",
    origin: "Khola, Goa",
    type: "Spice",
    shortDescription: "One of the hottest chili peppers in the world, known for its intense heat.",
    culturalSignificance: "Khola Chilli is a highly valued chili pepper from Goa, known for its intense heat. It is a symbol of the region's rich spice heritage and is often used in traditional dishes.",
    originStory: "The tradition of cultivating Khola Chilli dates back centuries, with farmers in Khola developing unique techniques to produce this high-quality spice. The chili is highly valued for its heat and flavor.",
    specialFeatures: [
      "Intense heat",
      "Rich flavor",
      "High quality",
      "Used in traditional dishes",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Spice of Life",
        story: "Khola Chilli is a key ingredient in many traditional dishes, adding a unique heat and flavor."
      },
      {
        title: "The Farmer's Legacy",
        story: "Farmers in Khola have preserved the cultivation of Khola Chilli for generations, ensuring its continued availability."
      }
    ],
    originImage: "/images/goa.jpg"
  },
  pallakadmattarice: {
    name: "Pallakad Matta Rice",
    description: "Traditional Rice Variety from Kerala",
    image: "/pallakadMattaRice.jpg",
    origin: "Pallakad, Kerala",
    type: "Rice",
    shortDescription: "Aromatic rice variety known for its unique flavor and fragrance.",
    culturalSignificance: "Pallakad Matta Rice is a symbol of Kerala's rich agricultural heritage, often used in traditional dishes and celebrations.",
    originStory: "The tradition of cultivating Pallakad Matta Rice dates back centuries, with farmers in Pallakad developing unique techniques to produce this high-quality rice. The rice is highly valued for its taste and aroma.",
    specialFeatures: [
      "Aromatic",
      "Unique flavor",
      "High quality",
      "Used in traditional dishes",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Festive Delight",
        story: "Pallakad Matta Rice is a favorite during festivals, with families enjoying its unique flavor in various dishes."
      },
      {
        title: "The Farmer's Pride",
        story: "Farmers in Pallakad take great pride in their rice cultivation, with each harvest reflecting their skill and dedication."
      }
    ],
    originImage: "/images/kerela.jpg"
  },
  assamorthodoxtea: {
    name: "Assam Orthodox Tea",
    description: "Premium Tea from Assam",
    image: "/assamOrthodoxTea.jpg",
    origin: "Assam, India",
    type: "Tea",
    shortDescription: "High-quality tea known for its rich flavor and aroma.",
    culturalSignificance: "Assam Orthodox Tea is a symbol of Assam's rich tea heritage, often enjoyed as a popular beverage.",
    originStory: "The tradition of cultivating Assam Orthodox Tea dates back centuries, with farmers in Assam developing unique techniques to produce this high-quality tea. The tea is highly valued for its taste and aroma.",
    specialFeatures: [
      "Rich flavor",
      "High quality",
      "Used as a beverage",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Tea Connection",
        story: "Assam Orthodox Tea is a key ingredient in many beverages, adding a unique flavor and aroma."
      },
      {
        title: "The Farmer's Pride",
        story: "Farmers in Assam take great pride in their tea cultivation, with each harvest reflecting their skill and dedication."
      }
    ],
    originImage: "/images/assam.jpg"
  },
  odisharasagola: {
    name: "Odisha Rasagola",
    description: "Sweet Confection from Odisha",
    image: "/odishaRasagola.webp",
    origin: "Odisha, India",
    type: "Sweet",
    shortDescription: "Sweet and spongy confection known for its unique flavor.",
    culturalSignificance: "Odisha Rasagola is a symbol of Odisha's rich culinary heritage, often enjoyed during festivals and celebrations.",
    originStory: "The tradition of making Odisha Rasagola dates back centuries, with artisans developing unique techniques to produce this high-quality sweet. The rasagola is highly valued for its taste and texture.",
    specialFeatures: [
      "Sweet and spongy",
      "Unique flavor",
      "High quality",
      "Used in desserts",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Festive Delight",
        story: "Odisha Rasagola is a favorite during festivals, with families enjoying its sweet taste in various desserts."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Odisha take great pride in their rasagola making, with each batch reflecting their skill and dedication."
      }
    ],
    originImage: "/images/odisha.jpg"
  },
  mizochilli: {
    name: "Mizo Chilli",
    description: "Hot Chili Pepper from Mizoram",
    image: "/mizoChilli.webp",
    origin: "Mizoram, India",
    type: "Spice",
    shortDescription: "One of the hottest chili peppers in the world, known for its intense heat.",
    culturalSignificance: "Mizo Chilli is a highly valued chili pepper from Mizoram, known for its intense heat. It is a symbol of the region's rich spice heritage and is often used in traditional dishes.",
    originStory: "The tradition of cultivating Mizo Chilli dates back centuries, with farmers in Mizoram developing unique techniques to produce this high-quality spice. The chili is highly valued for its heat and flavor.",
    specialFeatures: [
      "Intense heat",
      "Rich flavor",
      "High quality",
      "Used in traditional dishes",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Spice of Life",
        story: "Mizo Chilli is a key ingredient in many traditional dishes, adding a unique heat and flavor."
      },
      {
        title: "The Farmer's Legacy",
        story: "Farmers in Mizoram have preserved the cultivation of Mizo Chilli for generations, ensuring its continued availability."
      }
    ],
    originImage: "/images/mizoram.jpg"
  },
  kolhapurichappal: {
    name: "Kolhapuri Chappal",
    description: "Traditional Footwear from Maharashtra",
    image: "/kolhapuriChappal.jpeg",
    origin: "Kolhapur, Maharashtra",
    type: "Footwear",
    shortDescription: "Handcrafted leather sandals known for their unique design and comfort.",
    culturalSignificance: "Kolhapuri Chappal is a symbol of Maharashtra's rich cultural heritage, often worn during festivals and celebrations.",
    originStory: "The tradition of making Kolhapuri Chappal dates back centuries, with artisans developing unique techniques to produce this high-quality footwear. The chappal is highly valued for its design and comfort.",
    specialFeatures: [
      "Handcrafted",
      "Unique design",
      "High quality",
      "Used as footwear",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Festive Wear",
        story: "Kolhapuri Chappal is a favorite during festivals, with families enjoying its unique design and comfort."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Kolhapur take great pride in their chappal making, with each pair reflecting their skill and dedication."
      }
    ],
    originImage: "/images/mumbai.jpg"
  },
  aranmulakanadi: {
    name: "Aranmula Kanadi",
    description: "Traditional Mirror from Kerala",
    image: "/aranmulaKannadi.jpg",
    origin: "Aranmula, Kerala",
    type: "Craft",
    shortDescription: "Handcrafted mirror known for its unique design and craftsmanship.",
    culturalSignificance: "Aranmula Kanadi is a symbol of Kerala's rich cultural heritage, often used in traditional ceremonies and celebrations.",
    originStory: "The tradition of making Aranmula Kanadi dates back centuries, with artisans developing unique techniques to produce this high-quality mirror. The kanadi is highly valued for its design and craftsmanship.",
    specialFeatures: [
      "Handcrafted",
      "Unique design",
      "High quality",
      "Used in ceremonies",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Ceremonial Use",
        story: "Aranmula Kanadi is a key element in many traditional ceremonies, symbolizing tradition and craftsmanship."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Aranmula take great pride in their kanadi making, with each piece reflecting their skill and dedication."
      }
    ],
    originImage: "/images/kerela2.jpg"
  },
  etikoppakatoys: {
    name: "Etikoppaka Toys",
    description: "Traditional Wooden Toys from Andhra Pradesh",
    image: "/etikoppakaToys.webp",
    origin: "Etikoppaka, Andhra Pradesh",
    type: "Craft",
    shortDescription: "Handcrafted wooden toys known for their unique design and craftsmanship.",
    culturalSignificance: "Etikoppaka Toys are a symbol of Andhra Pradesh's rich cultural heritage, often enjoyed by children during festivals and celebrations.",
    originStory: "The tradition of making Etikoppaka Toys dates back centuries, with artisans developing unique techniques to produce this high-quality toy. The toys are highly valued for their design and craftsmanship.",
    specialFeatures: [
      "Handcrafted",
      "Unique design",
      "High quality",
      "Used as toys",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Children's Delight",
        story: "Etikoppaka Toys are a favorite among children, enjoyed for their unique design and craftsmanship."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Etikoppaka take great pride in their toy making, with each piece reflecting their skill and dedication."
      }
    ],
    originImage: "/images/telangana.jpg"
  },
  solapurchaddar: {
    name: "Solapur Chaddar",
    description: "Traditional Bedspread from Maharashtra",
    image: "/solapurChaddar.jpg",
    origin: "Solapur, Maharashtra",
    type: "Textile",
    shortDescription: "Handwoven bedspread known for its unique design and comfort.",
    culturalSignificance: "Solapur Chaddar is a symbol of Maharashtra's rich cultural heritage, often used in traditional ceremonies and celebrations.",
    originStory: "The tradition of making Solapur Chaddar dates back centuries, with artisans developing unique techniques to produce this high-quality bedspread. The chaddar is highly valued for its design and comfort.",
    specialFeatures: [
      "Handwoven",
      "Unique design",
      "High quality",
      "Used as bedspread",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Ceremonial Use",
        story: "Solapur Chaddar is a key element in many traditional ceremonies, symbolizing tradition and craftsmanship."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Solapur take great pride in their chaddar making, with each piece reflecting their skill and dedication."
      }
    ],
    originImage: "/images/solapur.jpg"
  },
  channapatnatoys: {
    name: "Chaannapatna Toys",
    description: "Traditional Wooden Toys from Karnataka",
    image: "/channapatnaToys.jpg",
    origin: "Chaannapatna, Karnataka",
    type: "Craft",
    shortDescription: "Handcrafted wooden toys known for their unique design and craftsmanship.",
    culturalSignificance: "Chaannapatna Toys are a symbol of Karnataka's rich cultural heritage, often enjoyed by children during festivals and celebrations.",
    originStory: "The tradition of making Chaannapatna Toys dates back centuries, with artisans developing unique techniques to produce this high-quality toy. The toys are highly valued for their design and craftsmanship.",
    specialFeatures: [
      "Handcrafted",
      "Unique design",
      "High quality",
      "Used as toys",
      "Geographical Indication status"
    ],
    culturalStories: [
      {
        title: "The Children's Delight",
        story: "Chaannapatna Toys are a favorite among children, enjoyed for their unique design and craftsmanship."
      },
      {
        title: "The Artisan's Pride",
        story: "Artisans in Chaannapatna take great pride in their toy making, with each piece reflecting their skill and dedication."
      }
    ],
    originImage: "/images/karnataka.jpg"
  }
};

export default function ProductPage() {
  const params = useParams();
  const productId = params.productId as string;
  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#3A5B22]">Product Not Found</h1>
            <p className="mt-4 text-gray-600">The product you're looking for doesn't exist.</p>
            <Link href="/home/products" className="mt-6 inline-block bg-[#3A5B22] text-white px-6 py-2 rounded-md hover:bg-opacity-90">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-12">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
            <div className="absolute bottom-0 left-0 p-4 sm:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{product.name}</h1>
              <p className="text-base sm:text-lg md:text-xl">{product.description}</p>
            </div>
            <div className="absolute bottom-0 right-0 p-4 sm:p-8">
              <Link 
                href={`/home/products/${productId}/3d`}
                className="inline-block bg-[#3A5B22] text-white border-2 border-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 hover:scale-105 transform shadow-lg text-sm sm:text-base"
              >
                View in 3D
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-12">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
            <h3 className="text-base sm:text-lg font-semibold text-[#3A5B22] mb-1 sm:mb-2">Origin</h3>
            <p className="text-sm sm:text-base text-gray-600">{product.origin}</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
            <h3 className="text-base sm:text-lg font-semibold text-[#3A5B22] mb-1 sm:mb-2">Type</h3>
            <p className="text-sm sm:text-base text-gray-600">{product.type}</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-[#3A5B22] mb-1 sm:mb-2">About</h3>
            <p className="text-sm sm:text-base text-gray-600">{product.shortDescription}</p>
          </div>
        </div>

        {/* Origin Place and Cultural Significance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-12">
          {/* Origin Place Image */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <Image
              src={product.originImage}
              alt={`${product.origin} - Place of Origin`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Place of Origin</h3>
                <p className="text-base sm:text-lg">{product.origin}</p>
              </div>
            </div>
          </div>

          {/* Cultural Significance */}
          <div className="bg-white p-4 sm:p-8 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-[#3A5B22] mb-3 sm:mb-4">Cultural Significance</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{product.culturalSignificance}</p>
          </div>
        </div>

        {/* Origin Story and Special Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-12">
          {/* Origin Story */}
          <div className="bg-white p-4 sm:p-8 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-[#3A5B22] mb-3 sm:mb-4">Origin Story</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{product.originStory}</p>
          </div>

          {/* Special Features */}
          <div className="bg-white p-4 sm:p-8 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-[#3A5B22] mb-4 sm:mb-6">Special Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {product.specialFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-sm sm:text-base text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cultural Stories */}
        <div className="bg-white p-4 sm:p-8 rounded-xl shadow-md mb-6 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#3A5B22] mb-4 sm:mb-6">Cultural Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {product.culturalStories.map((story, index) => (
              <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-[#3A5B22] mb-2 sm:mb-3">{story.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{story.story}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link 
              href="/home/products" 
              className="inline-block bg-[#3A5B22] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 hover:scale-105 transform text-sm sm:text-base"
            >
              Back to Products
            </Link>
            <Link 
              href={`/home/products/${productId}/buy`}
              className="inline-block bg-white text-[#3A5B22] border-2 border-[#3A5B22] px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-gray-50 transition-all duration-300 hover:scale-105 transform text-sm sm:text-base"
            >
              View Buying Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 