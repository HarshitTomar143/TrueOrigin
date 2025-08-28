export const glbFileMapping: Record<string, string> = {
  // Food & Beverages
  agrapetha: "/3D/agraPetha.glb",
  alphonsomango: "/3D/alphonsoMango.glb",
  basmatirice: "/3D/basmatiRice.glb",
  bikaneribhujia: "/3D/bikaneriBhujia.glb",
  coorggreencardamom: "/3D/coorgGreenCardamom.glb",
  dharwadpedha: "/3D/dharwadPedha.glb",
  girkesarmango: "/3D/girKesarMango.glb",
  lakshyamanbhogmango: "/3D/lakshmanBhog.glb",
  malabarpepper: "/3D/malabarPepper.glb",
  monsoonedmalabarcoffee: "/3D/monsoonedMalabarCoffee.glb",
  nagamircha: "/3D/nagaMircha.glb",
  nagpuroranges: "/3D/nagpurOrange.glb",
  navararice: "/3D/navaraRice.glb",
  ratlamisev: "/3D/ratlamiSev.glb",
  srivilliputturpalkova: "/3D/srivilliputturPalkova.glb",
  tezpurlitchi: "/3D/tezpurLitchi.glb",
  tirupatiladdu: "/3D/tirupatiLadu.glb",
  vazhakulampineapple: "/3D/pineapple.glb",
  waynadjeerakasalarice: "/3D/wayanadJeerakasalaRice.glb",
  
  // Textiles & Crafts
  banarasisilk: "/3D/banarsiSaree.glb",
  bidriware: "/3D/Bidriware.glb",
  chambarumal: "/3D/chambaRumal.glb",
  kashmirwalnutwoodcarving: "/3D/kashmirWalnutWoodCarving.glb",
  kholachilli: "/3D/kholaChilli.glb",
  kutchembroidery: "/3D/kutchEmbroidery.glb",
  lucknowchikankari: "/3D/lucknowChikankariEmbroidery.glb",
  makranamarbles: "/3D/makranaMarble.glb",
  mirzapurdari: "/3D/mirzapurHandmadeDari.glb",
  nirmalpaintings: "/3D/nirmalPainting.glb",
  phulkari: "/3D/Phulkari.glb",
  shrikalasthikalamkari: "/3D/shrikalahastiKalamkari.glb",
  suratzari: "/3D/suratZariFabric.glb",
  thanjavurdolls: "/3D/thanjavurDoll.glb",
  thanjavurpaintings: "/3D/thanjavurPaintings.glb",
  warli: "/3D/warliPaintings.glb",
  
  // Other products that have GLB files
  bhiwapurchilli: "/3D/biwapurChilli.glb",
  firozabadbangles: "/3D/firozabadGlass.glb",
  nagpurgrapes: "/3D/nagpurGrapes.glb",
  redbanana: "/3D/redBanana.glb"
};

export const has3DModel = (productId: string): boolean => {
  return productId in glbFileMapping;
};

export const getGlbPath = (productId: string): string | null => {
  return glbFileMapping[productId] || null;
};
